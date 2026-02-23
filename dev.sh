#!/usr/bin/env bash
# Spin up the full Syncor docs dev environment in tmux.
# Usage: ./dev.sh

SESSION="syncor-docs"

# Kill existing session if present
tmux kill-session -t "$SESSION" 2>/dev/null

# New session — pane 0: Decap CMS proxy (top-left)
tmux new-session -d -s "$SESSION" -c "$(pwd)" -n dev
tmux send-keys -t "$SESSION:dev.0" 'npx decap-server' C-m

# Pane 1: free shell (right half)
tmux split-window -h -t "$SESSION:dev.0" -l 50% -c "$(pwd)"

# Pane 2: Docusaurus dev server (bottom-left)
tmux split-window -v -t "$SESSION:dev.0" -l 50% -c "$(pwd)"
tmux send-keys -t "$SESSION:dev.2" 'npm start' C-m

# Focus the free shell pane
tmux select-pane -t "$SESSION:dev.1"

tmux attach -t "$SESSION"
