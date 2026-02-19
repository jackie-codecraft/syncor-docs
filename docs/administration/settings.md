---
title: System Settings
sidebar_position: 2
description: Overview of Syncor's system-wide configuration options available to administrators.
---

# System Settings

The **Administration → Settings** section gives administrators control over organisation-wide configuration. Changes here affect all users and workflows, so review each setting carefully before saving.

## General Settings

| Setting | Description |
|---|---|
| **Organisation Name** | Display name used in emails and PDF documents |
| **Portal URL** | Your Syncor subdomain (e.g. `yourcompany.syncor.io`) — contact support to change |
| **Default Currency** | Base currency for all purchase requests and budgets |
| **Fiscal Year Start** | Month your financial year begins (affects budget reports) |
| **Date Format** | Display format for dates across the platform (DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD) |

## Authentication Settings

- **Single Sign-On (SSO)** — Configure SAML 2.0 or OIDC integration with your identity provider (Microsoft Entra, Okta, Google Workspace, etc.)
- **Multi-Factor Authentication (MFA)** — Enforce MFA for all users, specific roles, or leave optional
- **Password Policy** — Set minimum length, complexity rules, and expiry period for locally-managed accounts
- **Session Timeout** — Duration of inactivity before users are automatically signed out (default: 30 minutes)

## Approval Rules

Configure the logic that determines how purchase requests are routed for approval. See the [Approval Workflow](../procurement/approvals) documentation for full details. Key settings include:

- **Spend thresholds** — define the value bands that trigger different approval tiers
- **Escalation SLA** — how long an approver has to act before the request escalates
- **Auto-approval** — optionally allow low-value requests from trusted requesters to be auto-approved without manual review

## Email Notifications

Control which events trigger email notifications and customise the email templates. You can enable or disable notifications for:

- New purchase request submitted
- Request approved / rejected
- Request awaiting your approval
- PO sent to supplier
- Goods received confirmation

Click **Edit Template** next to any notification type to customise the subject line and body text. Variables such as `{{requester_name}}` and `{{total_value}}` are available.

## Integrations

Connect Syncor to your other business systems:

- **ERP / Finance system** — push approved POs and invoices to your finance system via API or file export (supported systems: SAP, Oracle NetSuite, Xero, QuickBooks, and others via custom webhook)
- **Supplier catalogues** — import supplier pricing via cXML or CSV
- **Slack / Microsoft Teams** — receive approval notifications directly in your messaging platform

Navigate to **Administration → Settings → Integrations** and follow the on-screen setup guide for each integration.

## Audit Log

All administrative changes are recorded in the **Audit Log** (Administration → Audit Log). Each entry shows the timestamp, the user who made the change, and a before/after snapshot of the affected data. The audit log is read-only and cannot be modified or deleted.
