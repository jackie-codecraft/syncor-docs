---
sidebar_position: 3
title: Tracking Your Requests
---

# Tracking Your Requests

## Viewing a Submitted Request

Once submitted, a purchase request is read-only. Open it from the **Active** or **Closed** tabs.

![Requisition Detail](/img/screenshots/requisition-detail.png)

### Available Actions by Status

| Action | When Available | Description |
|--------|----------------|-------------|
| **Edit** | Rejected | Returns the request to draft for editing |
| **Close** | Rejected / Recalled | Closes the request permanently |
| **Recall** | Pending Approval | Pulls back the request before approval |
| **Order Again** | Any status | Duplicates the request as a new draft |

---

## Request Details View

The **Request Details** tab shows all fields in read-only format: PR Number, Site, Contract, Required By Date, Delivery Location, Notes, reference fields, and attachments.

A **status badge** in the top-right corner shows the current status.

The **Approvers Flow** panel shows each approver's status (Approved / Assigned). External approver details appear here too, with a **Resend Email** option if the link has expired.

The **Request Items Table** lists all products with Sr.No, name, SKU, manufacturer, quantity, and line totals. Click any row to navigate to that product's detail page.

---

## Request History Timeline

The **Request History** tab provides a chronological record of every event in the request's lifecycle.

![Request History](/img/screenshots/request-history.png)

Each event shows a status indicator, icon, title, user information, level badge, and timestamp. Click the chevron (▼) on expandable events to reveal additional details such as sales order numbers, packing slip info, or proof of delivery links.

Use **"Collapse All"** / **"Expand All"** to toggle all events at once.

### Event Types

| Event | Description |
|-------|-------------|
| Submitted | PR was submitted for approval |
| Approved | An approver approved the PR |
| Final Approval | Last approver gave final approval |
| Rejected | An approver rejected the PR |
| Recalled | Requester recalled the PR |
| Order Confirmed | Sales order created in ERP |
| Shipment Notice Received | Shipment dispatched |
| Delivery Confirmed | Items delivered |
| Invoice Received | Invoice received |
| Payment Received | Payment processed |
| External Approver Approved / Rejected | External approver action |

---

## Editing a Rejected Request

### Revise and Resubmit

1. Open the rejected request from the **Active** tab or the **"Revise & Resubmit"** link in your dashboard.
2. Click **Edit** in the footer — the request returns to Draft status.
3. Make your changes.
4. Click **Submit** to resubmit.

:::tip
Check the **Request History** tab to read the rejection reason before editing.
:::

### Close the Request

1. Click **Close** in the footer.
2. Add an optional note in the confirmation modal.
3. Click **Confirm**.

---

## Order Again

Duplicate any existing request as a new draft:

1. Open a requisition and click **"Order Again"** in the footer.
2. Confirm in the modal.
3. You'll be taken to a new draft with the same products and quantities.

:::note
The new draft copies products and quantities. You'll need to fill in the request details (name, delivery location, dates) fresh.
:::
