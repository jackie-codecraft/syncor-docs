---
title: Reviewing & Approving Requests
sidebar_position: 1
---
# Reviewing & Approving Requests

## The Approvals Page

If you have been given approval permissions, **Approve** appears in your sidebar navigation. The page has two tabs:

* **Pending Approvals** — Purchase requests waiting for your action
* **Approval History** — Requests you've previously approved or rejected

Click any row to open the full detail view.

- - -

## Reviewing a Request

Two action buttons appear at the top right of a pending request:

* **Reject** (outline, red X icon)
* **Approve** (green, check icon — shows an alert icon if there's a budget concern)

### What to Review

1. **Request Details** — Purpose, delivery location, required-by date, notes
2. **Products** — Items, quantities, and totals
3. **Approval Flow** — Who has already approved
4. **Budget Tab** — Budget impact (see below)
5. **Request History** — Check if this is a resubmission after a prior rejection

- - -

## Budget Impact Assessment

If budgeting is enabled, a **Budget** tab appears when you're the current approver.

For each budget entity (Site, Contract):

* **Status** — ✓ Within budget (green) or ⚠ Over budget (amber/red)
* **Budget Used %** — Percentage of budget consumed
* **Remaining / Over amount** — How much is left or exceeded
* **Progress Bar** — Visual showing Committed, Other Pending, and This Order
* **Breakdown Grid** — Detailed figures for all three components

### Budget Alerts

| State               | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Warning (amber)** | Exceeded warning threshold. Check acknowledgment checkbox before approving. |
| **Block (red)**     | Exceeded blocking threshold. Requires budget override permission.           |

- - -

## Approving a Request

1. Click the **Approve** button.
2. The **Approval Modal** opens:

   * Request summary (Site, Contract)
   * Budget impact alert if applicable
   * **Next Approver Preview** (if multi-level)
   * Optional **Note** field
3. If this is the **final approval**, the modal shows "Final Approval."
4. Click **"Yes, Approve"** to confirm.

:::note
If budget warnings are present, check the acknowledgment checkbox before the Approve button becomes active.
:::

- - -

## Rejecting a Request

1. Click the **Reject** button.
2. Enter a **reason for rejection** in the Note field (required).
3. Click **"Yes, Reject"** to confirm.

The requester will be notified and can view your reason in the Request History timeline.

:::tip
Provide specific, actionable feedback so the requester knows exactly what to change.
:::

- - -

## Approval History & Level Overrides

### Viewing Past Actions

The **Approval History** tab shows all requests you've previously acted on. Click any row to review details.

### Level Override

If you have level override permissions, the Approve button appears as a split button with a dropdown:

| Option                | Description                                |
| --------------------- | ------------------------------------------ |
| **Approve**           | Standard approval — passes to next level   |
| **Level Override**    | Approves and skips to a higher level       |
| **Workflow Override** | Approves and completes the entire workflow |

The **Next Approver Preview** updates based on your selection.

:::warning Important
Override actions are logged in the request history. They bypass the standard approval chain — use them judiciously.
:::
