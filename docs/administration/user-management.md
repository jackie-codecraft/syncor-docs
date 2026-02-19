---
title: User Management
sidebar_position: 1
description: How to add, edit, deactivate, and manage user accounts and roles in Syncor.
---

# User Management

Administrators can manage all user accounts from the **Administration → Users** section. This includes inviting new users, assigning roles, and deactivating accounts when team members leave the organisation.

## Viewing Users

The Users list shows all active accounts in your Syncor instance. Use the search bar to find a specific user by name or email. Use the **Status** filter to toggle between Active, Inactive, and Pending Invitation users.

Each row shows the user's name, email, assigned role(s), department, and last login date.

## Inviting a New User

1. Navigate to **Administration → Users**.
2. Click **Invite User**.
3. Enter the user's **work email address** and **full name**.
4. Select their **Department** and **Cost Centre**.
5. Assign one or more **Roles** (Requester, Approver, Procurement Manager, Administrator).
6. (Optional) Set an **Approval Limit** if the user is an Approver — this caps the spend value they can approve unilaterally.
7. Click **Send Invitation**.

The user will receive an email with a link to set their password and complete their profile. Invitations expire after 7 days; you can resend them from the user's record.

## Editing a User

Click any user's name to open their profile. From here you can:

- Update their name, department, or cost centre
- Add or remove roles
- Adjust their approval limit
- View their recent activity log

Click **Save Changes** when done.

## Deactivating a User

When a team member leaves, deactivate their account rather than deleting it. This preserves the audit trail of their past activity.

1. Open the user's profile.
2. Click **Deactivate Account**.
3. Confirm the action. The user will be immediately signed out and unable to log back in.

Deactivated accounts appear in the Users list with an **Inactive** badge and can be reactivated at any time.

## Bulk Import

To onboard a large number of users at once, use the **Bulk Import** feature:

1. Go to **Administration → Users → Bulk Import**.
2. Download the CSV template.
3. Fill in the required columns (email, name, department, role).
4. Upload the completed CSV and click **Import**.
5. Review the preview table, then click **Confirm**.

Any rows with errors (e.g. invalid email format, unknown department) will be flagged for correction before import proceeds.
