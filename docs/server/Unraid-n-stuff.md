---
sidebar_position: 3
---

# Unraid, Docker, and VMs

This page is going to go over our current Docker container, and VM configurations that power our entire tech stack. Everything is being hosted on Unraid. The physical PC itself is the white NZXT gaming PC that is under the workbench in the shop.

## Docker
Let's start with our docker containers. At our core, we have these containers and their IP/Port allocations:
```
Redis:
    192.168.69.2:6379
Mosquitto:
    192.168.69.2:1883
Nginx-Proxy-Manager:
    192.168.69.3:443
    192.168.69.3:80
PostgreSQL15:
    192.168.69.2:5432
```
Minecraft server not listed but here in spirit!

Notice that for Nginx it is not under 192.168.69.2 but is actually under 192.168.69.3. This is also reflected in the previous page for the NAT rules.

## Virtual Machines (VMs)
For our deployment of the API, documentation site, and main website are run in virtual machines in Unraid. They are all based on Ubuntu server.

Here are the VMs and their IP addresses
```
API:
    192.168.69.12
Docusaurus:
    192.168.69.4
Main Site:
    192.168.69.5
Windows:
    192.168.69.11
```