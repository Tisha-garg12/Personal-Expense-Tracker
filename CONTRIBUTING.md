# CONTRIBUTING.md

# Contribution Guidelines

## 1. Introduction

This document describes the contribution process followed during the development of the **Personal Expense Tracker** project.

The project was developed collaboratively by two team members using Git and GitHub. Both members worked on separate branches, made meaningful commits, created Pull Requests, and reviewed each other's code before merging changes into the main branch.

## 2. Team Members and Individual Contributions

The project was divided between two team members.

### Student 1: Tisha Garg

**GitHub Username:** `tisha-garg12`

**Branch:** `feature-member1`

**Responsibilities:**

- Implemented transaction form validation.
- Added validation for transaction descriptions and amounts.
- Improved transaction ID generation.
- Improved INR currency formatting.
- Worked on JavaScript functionality and input handling.

### Student 2: Vanshika Sharma

**GitHub Username:** `vanshikasharma-droid`

**Branch:** `feature-member2`

**Responsibilities:**

- Improved transaction history styling.
- Enhanced responsive design for mobile screens.
- Improved Local Storage data validation.
- Improved delete button accessibility.
- Worked on CSS styling and JavaScript improvements.

## 3. Branching Strategy

To avoid modifying the same code directly, separate feature branches were created for both team members.

| Branch Name       | Owner    | Purpose                            |
| ----------------- | -------- | ---------------------------------- |
| `main`            | Tisha    | Contains the integrated project    |
| `feature-member1` | Tisha    | Contains Student 1's contributions |
| `feature-member2` | Vanshika | Contains Student 2's contributions |

Each member created their own branch from the main branch and made changes independently.

### Commands Used

```bash
git switch main
git pull origin main
```

Creating Student 1's branch:

```bash
git switch -c feature-member1
```

Creating Student 2's branch:

```bash
git switch -c feature-member2
```

## 4. Commit Guidelines

Both members used meaningful commit messages to describe their changes.

### Student 1: Tisha Garg

Example commit messages:

```text
Add required validation to transaction form
Validate transaction description and amount
Improve transaction ID generation
Improve INR currency formatting
```

### Student 2: Vanshika Sharma

Example commit messages:

```text
Improve transaction history styling
Enhance responsive layout for mobile screens
Improve Local Storage data validation
Improve transaction delete button accessibility
```

Each commit represented an actual modification to the project files.

## 5. Pull Request Process

After completing their assigned work, both members pushed their feature branches to GitHub and created Pull Requests.

The Pull Request process followed these steps:

1. Push the feature branch to GitHub.
2. Open the project's GitHub repository.
3. Navigate to the Pull Requests section.
4. Click on New Pull Request.
5. Select `main` as the base branch.
6. Select the respective feature branch as the compare branch.
7. Write a description of the changes.
8. Submit the Pull Request for review.

### Pull Requests Created

| Pull Request | Contributor     | Base Branch | Compare Branch    |
| ------------ | --------------- | ----------- | ----------------- |
| Student 1 PR | Tisha Garg      | `main`      | `feature-member1` |
| Student 2 PR | Vanshika Sharma | `main`      | `feature-member2` |

## 6. Code Review Process

Both team members reviewed each other's Pull Requests before merging.

### Review by Student 1

Tisha reviewed Vanshika's Pull Request and checked:

- Whether the changes were relevant to the assigned features.
- Whether the CSS styling worked correctly.
- Whether the JavaScript changes were correct.
- Whether the application functionality was maintained.

### Review by Student 2

Vanshika reviewed Tisha's Pull Request and checked:

- Whether transaction validation worked correctly.
- Whether transaction descriptions and amounts were validated.
- Whether transaction ID generation worked properly.
- Whether INR currency formatting was correct.

After reviewing the changes, the members submitted their review decisions through GitHub.

## 7. Merging Process

After the Pull Requests were reviewed and approved, the changes were merged into the `main` branch.

The merged code was checked to ensure that both members' contributions were included in the final project.

## 8. Merge Conflict Demonstration

To understand Git conflict resolution, both members modified the same line in a shared file on separate branches.

Git identified conflicting changes when the branches were merged.

The conflict was resolved manually by:

1. Opening the conflicted file.
2. Reviewing both members' changes.
3. Removing the conflict markers.
4. Keeping the final agreed version.
5. Saving the corrected file.
6. Committing and pushing the resolution.
7. Completing the Pull Request merge.

This activity demonstrated practical conflict resolution using Git and GitHub.

## 9. Contribution Summary

Both team members contributed to the development of the Personal Expense Tracker.

The project helped us understand:

- Collaborative development using Git and GitHub.
- Branch creation and management.
- Meaningful commit messages.
- Pull Request creation.
- Code review and approval.
- Branch merging.
- Merge conflict identification and resolution.

## 10. Repository Link

GitHub Repository:

https://github.com/tisha-garg12/Personal-Expense-Tracker
