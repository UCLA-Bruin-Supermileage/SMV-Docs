---
sidebar_position: 3
---

# Unraid, Docker, and VMs

This page is going to go over our current Docker container, and VM configurations that power our entire tech stack. Everything is being hosted on Unraid. The physical PC itself is the white NZXT gaming PC that is under the workbench in the shop.

## Docker
Let's start with our docker containers. At our core, we have these containers and their IP/Port allocations:
```
Mosquitto:
    192.168.69.16:1883
Nginx-Proxy-Manager:
    192.168.69.3:443
    192.168.69.3:80
PostgreSQL15:
    192.168.69.15:5432
API:
    192.168.69.14
Frontend:
    192.168.69.13
```
Minecraft server not listed but here in spirit!

Notice that for Nginx it is not under 192.168.69.2 but is actually under 192.168.69.3. This is also reflected in the previous page for the NAT rules.

## Virtual Machines (VMs)

For the mechanical Solidworks server

Here is the VM and its IP address
```
Windows:
    192.168.69.11
```
