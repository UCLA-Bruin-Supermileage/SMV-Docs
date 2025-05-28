---
sidebar_position: 3
---

# Unraid, Docker, and VMs

This page is going to go over our current Docker container, and VM configurations that power our entire tech stack. Everything is being hosted on Unraid. The physical PC itself is the white NZXT gaming PC that is under the workbench in the shop.

## Docker

Docker is a containerization platform that allows applications to run in isolated environments called containers. These containers include all dependencies, making services portable and consistent.

In UnRAID, the **Docker tab** is where most services are configured and managed.

Let's start with our docker containers. At our core, we have these containers and their IP/Port allocations:

| Service | Internal IP | Port | Description |
|----------------------|-----------------------|----------|---------------------------------------------------|
| PostgreSQL | `192.168.69.15` | `5432` | The database |
| NGINX Proxy Manager | `192.168.69.3` | `81` | Web UI to manage reverse proxies for web services (mapping URLs to services).|
| MQTT Broker | `192.168.69.16` | `1883` | Where ESP32 sends data to |
| API Backend | `192.168.69.14` | `443` | Django backend for data processing and APIs at prod-django.bruinsmv.com |
| Frontend Website | `192.168.69.13` | `3000` | Next.js front-end website on smv.seas.ucla.edu |
| Watchtower | (Internal container) | - | Automatically pulls and updates Docker images. |

Minecraft server not listed but here in spirit!

Notice that for Nginx it is not under 192.168.69.2 but is actually under 192.168.69.3. This is also reflected in the previous page for the NAT rules.

###  Docker Container Auto-Updating with Watchtower

**Watchtower** is a lightweight service that monitors running Docker containers and automatically pulls updated images from Docker Hub.  
- It is installed and managed via the **Docker tab** in UnRAID.
- Logs can be viewed from the UnRAID web interface.
- Container restarts occur only when a new image is detected.
### Manual Updating
1. Click "Docker" Tab
2. Press "Check for Updates" at the bottom of the screen
3. Press "Apply Update"

## Virtual Machines (VMs)

For the mechanical Solidworks server

Here is the VM and its IP address
```
Windows:
    192.168.69.11
```
