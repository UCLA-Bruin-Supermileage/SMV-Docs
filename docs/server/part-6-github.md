---
sidebar_position: 6
---
# GitHub Development Best Practices

This document outlines the GitHub workflow and best practices for developing in the SMV repositories. Please follow this guide to ensure code consistency, maintainability, and deployment readiness.

---

## Branching Strategy

- **Main branch** is **protected** and **auto-deployed**.
  - Only organization administrators can override protections.
- All development should be done on **feature branches**.
- Use the following naming convention for branches:

`github-username/feature-name`
Example:
`matthewt-123/server-docs`


---

## Workflow Overview

1. **Create a Feature Branch**
 - Always branch off of `main`.
 - Use the proper naming convention.

2. **Open a Pull Request (PR)**
 - Once your changes are ready for review, open a PR into `main`.
 - Include a descriptive title and summary of the changes.

3. **Automated Tests**
 - On opening a PR, a GitHub Actions workflow will run to verify the project builds successfully.
 - Ensure your code passes this check before requesting a review.

4. **Code Review**
 - A team **lead** must review and approve the PR before merging.
 - Use inline comments to ask questions or request changes.
 - Leads should review PRs promptly to keep development flowing.

5. **Merge**
 - Only after all checks pass and a lead has approved, the PR can be merged into `main`.

---

## Deployment

- Merging into `main` will **automatically trigger deployment**.
- Do **not** commit directly to `main` unless absolutely necessary and you have org admin privileges.

---

## Tips for Contributors

- Pull from `main` frequently to avoid merge conflicts.
- Write clean, modular code.
- Document your changes where appropriate with comments
- Keep commits focused—one feature or fix per commit when possible.
- Test your code locally before opening a PR.

---

## Example Workflow

```bash
# Starting a new feature
git checkout main
git pull
git checkout -b matthewt-123/start-stop-api

# Commit changes
git add .
git commit -m "Add responsive navbar for mobile layout"
git push -u origin matthewt-123/start-stop-api

# Open PR via GitHub UI

# UCLA Bruin Supermileage GitHub Repositories

This document lists and describes the key repositories under the [UCLA-Bruin-Supermileage](https://github.com/UCLA-Bruin-Supermileage) organization. All repositories follow our code review rules unless otherwise stated.

---

## Active Repositories

### [SMV-API](https://github.com/UCLA-Bruin-Supermileage/SMV-API)
- **Description**: Backend API built with Django for storing and serving telemetry and sensor data from the vehicle.
- **CI/CD**: Enabled – Automatically builds and deploys Docker image on merge to `main`.
- **Branch Protection**: `master` is push protected and deployment-triggering.
- **Review Requirement**: PRs must be reviewed before merge.

---

### [SMV-Website](https://github.com/UCLA-Bruin-Supermileage/SMV-Website)
- **Description**: Frontend website for displaying sensor data, maps, and team info; built with Next.js.
- **CI/CD**: Enabled – Automatically builds and deploys Docker image on merge to `main`.
- **Branch Protection**: `main` is push protected and deployment-triggering.
- **Review Requirement**: PRs must be reviewed before merge.

---

### [SMV-Docs](https://github.com/UCLA-Bruin-Supermileage/SMV-Docs)
- **Description**: Docusaurus documentation site containing team guides, development resources, and infrastructure docs.
- **CI/CD**: Enabled – Builds and deploys site to GitHub Pages on merge to `main`.
- **Branch Protection**: `main` is push protected.
  - `gh-pages` is the live site. Never directly modify this branch.
- **Review Requirement**: PRs must be reviewed before merge.

---

## Library & Firmware Repositories

### [UCLA-SMV-CAN](https://github.com/UCLA-Bruin-Supermileage/UCLA-SMV-CAN)
- **Description**: C++ CAN library used by embedded microcontrollers in the SMV system for inter-board communication.
- **CI/CD**: Not enabled – No automated testing or deployment.
- **Branch Protection**: None.
- **Review Requirement**: PRs must still be reviewed before merge. Code quality and consistency should be upheld.






