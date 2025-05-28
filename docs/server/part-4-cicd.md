---
sidebar_position: 4
---
# CI/CD Pipeline Documentation

This repository uses GitHub Actions to automate the build and deployment process for two key services: `SMV-API` and `SMV-Website`. Both services are containerized using Docker and hosted on [GitHub Container Registry (GHCR)](https://ghcr.io/).

## Overview

There are two workflow files under `.github/workflows` in each repository:

1. **Pull Request Workflow**:  
   - **Trigger**: Activated when a pull request is made to the `master` branch.  
   - **Purpose**: Builds the Docker image to verify that the code compiles and runs correctly (sanity check).

2. **Merge to Master Workflow**:  
   - **Trigger**: Activated when a pull request is merged into `master`.  
   - **Purpose**: Builds and deploys the Docker image to:
     - `ghcr.io/ucla-bruin-supermileage/smv-api:latest`
     - `ghcr.io/ucla-bruin-supermileage/smv-website:latest`

These images can be pulled using Docker from any compatible system.

---

## SMV-API

### Requirements

To run the SMV-API container successfully, the following environment variables must be set:

- `DJANGO_SECRET_KEY`  
- `POSTGRES_PW`  
- `MQTT_PW`

These values should be set:

- In the virtual machine (VM) you are using  
**or**  
- As environment variables when creating the Docker container in **UnRAID**

Additionally, in UnRAID, the following variable must be added to the container configuration to enable automatic updates via Watchtower:

```env
com.centurylinklabs.watchtower.enable=true
```

>  **Note**: The values for the required environment variables can be found on the Notion "Logins" page. Please contact a lead if you do not have access.

---

## SMV-Website

### Requirements

The SMV-Website container does not require any environment variables to function. However, to enable Watchtower automatic updates in UnRAID, the following variable must be set:

```env
com.centurylinklabs.watchtower.enable=true
```

---

## Monitoring GitHub Actions

GitHub Actions are triggered automatically based on the event (PR or merge to `master`). You can view the status and logs of each workflow run in the **Actions** tab of the respective repositories:

- [SMV-API Actions](https://github.com/ucla-bruin-supermileage/smv-api/actions)
- [SMV-Website Actions](https://github.com/ucla-bruin-supermileage/smv-website/actions)
