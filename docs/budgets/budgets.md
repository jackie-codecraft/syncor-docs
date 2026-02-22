---
sidebar_position: 1
title: Budgets
---

# Budgets

## Understanding Budgets

If your organization has budgeting enabled, Syncor tracks spending against configured limits at the site and/or contract level.

### Budget Components

- **Committed** — Value of orders already in progress
- **Pending** — Value of other purchase requests awaiting approval
- **This Order** — Value of the current purchase request

**Budget Used %** = (Committed + Pending + This Order) ÷ Budget Limit × 100

### Status Levels

| Status | Color | Meaning |
|--------|-------|---------|
| **Within Budget** | Green | Total spending within the limit |
| **Warning** | Amber | Exceeded warning threshold, below blocking limit |
| **Block** | Red | Exceeded blocking threshold |

Thresholds are configured by your administrator.

---

## For Requesters

When creating or editing a request, budget status appears in the **footer bar**:

- **Warning (amber banner):** Check **"I acknowledge and authorize this requisition"** before submitting.
- **Block (red banner with shield icon):** Submission is prevented. Reduce the order amount or contact your budget administrator.

---

## For Approvers

The **Budget** tab on the requisition detail page provides a full budget impact analysis. This tab only appears when you're the current approver and budget data is available.

### What You See

For each affected budget (Site and/or Contract):

1. **Header** — Budget type label and status (✓ Within budget / ⚠ Over budget)
2. **Budget Used %** — Large percentage figure
3. **Remaining / Over amount** — Green if remaining, red if over
4. **Progress Bar** — Shows Committed, Other Pending, and This Order amounts relative to the limit
5. **Breakdown Grid** — Detailed figures for all three components

### Budget Alerts

| State | What Happens |
|-------|-------------|
| **Warning (amber border)** | You can still approve. Check the acknowledgment checkbox: "I acknowledge the budget overage of $X." |
| **Block (red border) + Override permission** | Acknowledgment checkbox appears. You can approve. |
| **Block (red border) + No override permission** | "Approval blocked until budget is addressed." |
