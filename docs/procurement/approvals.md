---
title: Approval Workflow
sidebar_position: 2
description: How purchase request approvals work in Syncor, including multi-tier routing and delegation.
---

# Approval Workflow

When a purchase request is submitted in Syncor, it is automatically routed to the appropriate approver(s) based on your organisation's approval rules. This ensures all spend is reviewed by the right people at the right authority level.

## How Approval Routing Works

Approval rules are configured by your Procurement Manager and are typically based on:

- **Spend threshold** — e.g. requests under £500 require one approver; above £500 require two
- **Department** — requests from a given department always go to that department's budget holder
- **Supplier** — certain strategic suppliers may require Procurement Manager sign-off regardless of value
- **Category** — IT equipment may route to IT Manager; facilities to Facilities Manager

Syncor evaluates these rules automatically when a request is submitted. You don't need to manually choose an approver.

## The Approver Experience

If you are an **Approver**, you will receive an email notification when a request is waiting for your review. You can also see all pending items under **My Approvals** in the left navigation.

To review a request:

1. Click the request title to open the full details.
2. Review the line items, cost centre, notes, and any attachments.
3. Check the requester's justification and compare against your budget.
4. Choose one of the following actions:
   - **Approve** — moves the request to the next approval tier (if applicable) or triggers PO generation
   - **Reject** — returns the request to the requester with a mandatory reason
   - **Request More Information** — sends a message to the requester and pauses the workflow

## Multi-Tier Approvals

Some requests may require sequential approval from multiple approvers. For example:

- **Tier 1:** Line manager approves (spend ≤ £2,000)
- **Tier 2:** Finance Director approves (spend > £2,000)

Each approver is notified only when it is their turn. The requester can see the current approval stage in the request's timeline view.

## Delegation

If you are an approver and will be unavailable (e.g. on leave), you can delegate your approval authority to a colleague:

1. Go to **Settings → Approval Delegation**.
2. Select the delegate, the date range, and the scope (all requests or a spend limit).
3. Save. Your delegate will be notified and can action requests on your behalf.

## Escalation

If a request has been pending for longer than the configured SLA (set by your administrator), Syncor will automatically escalate it to the approver's manager and send a reminder notification.
