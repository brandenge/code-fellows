# Access Control

## 5 steps to RBAC

Source: [5 steps to simple role-based access control - CSO Online](https://www.csoonline.com/article/3060780/5-steps-to-simple-role-based-access-control.html)

### What is Role Based Access Control (RBAC) and why do we care?

Role Based Access Control is an approach to managing authorized permissions for people in an organization. We should care as it helps to simplify managing how to authorize people to perform any given action on a computer system. Without it, the ability to manage the security of a computer system would not scale very well, resulting in much less efficient IT security, as well as reduced security, and increased risk of security breaches.

### Describe a Role/Permission heirarchy that you might implement using RBAC

1) Doctor - largest and highest set of prviliges in a hospital. Can see all the records of their patients.
2) Nurse - a more limited set of permissions, a subset of what the Doctor role has access to.
3) Receptionist - an even more limited set of permissions, and a smaller subset.

### What approach might you take to implement RBAC?

## RBAC Wiki

Source: [Wikipedia](https://en.wikipedia.org/wiki/Role-based_access_control)

### If Authentication is “you are who you say you are,” what is Authorization?

Authorization is what you are allowed to do - your access rights or privileges.

### Name three primary rules defined for RBAC

1) Role assignment - All subjects must be assigned a role before they are allowed to have permission to do anything.
2) Role authorization - All subjects must be authorized for any role assigned to them.
3) Permission authorization - Subjects can exercise a permission only if the permission is authorized for the subject's active role.

### Describe RBAC to a non-technical friend

In the old days of IT departments of big organizations, they used to assign computer system privileges individually to each user. This would not scale well, as it would require very frequent changes whenever an employee was hired, left, was promoted, or had any kind of change in their job function. It would also lead to a lot of computer system prvileges getting very loose over time, thus reducing security. Role Based Access Control (RBAC) fixes this dynamic by having an intermediary layer between users and their privileges called roles. Roles are basically standard templates or collections of prvileges. And this makes it much easier for IT departments to manage the security of large organizations.

## RBAC Tutorial

Source: [Udacity - YouTube Channel](https://www.youtube.com/watch?v=C4NP8Eon3cA)

### What Are access rights Associated with? The User? or The Role? Explain

The role. A role is defined by a set of permissions. It is often defined by a user's job function. To maximize security, users should only be given the bare minimum amount of access rights that is needed to perform their job function. This is the security principle of least privilege. Users can have one or more roles. Because a user can have multiple different roles, it is the combination of their roles that define what access rights the user has.

### Access Rights, or Authorization, is activated after a user successfully does what?

After a user successfully authenticates.

### Explain how RBAC might benefit a business

RBAC makes it much more efficient in managing user permissions. It makes it easier to perform common changes to access controls, such as adding a user, removing a user, and changing a user's permissions. The roles are like templates for a common set of permissions. This prevents the need for individual users needing to have customized permissions which then must be frequently updated, and then also become less secure. RBAC also helps security by making it easier to maintain the security principle of least privilege. It also makes it easier to standardize common sets of permissions.

## Things I want to know more about

What are some common use-cases for why a user may have to switch between roles?

What stops a user who has multiple roles for 2 separate job functions from just switching their active role to one with more permissions to be able to do unauthorized activities with a role?

[RBAC Diagram](https://upload.wikimedia.org/wikipedia/en/1/19/Role-based_access_control.jpg)
