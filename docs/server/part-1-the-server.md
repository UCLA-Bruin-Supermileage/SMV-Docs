---
sidebar_position: 1
---

# The Hardware

This set of documents is to record the current configuration and settings of the SMV tech stack. We proudly host all of our services and apps in the shop, DIY style.

## The Computers
As of the 2024-2025 year we have 2 computers deployed for use, the router and the Unraid server.

### The Router
Our router is a 2014 Mac Mini running pfSense bare-metal. We get our WAN connection from an ethernet port in the wall. That gets plugged into the motherboard ethernet port of the Mac Mini. We then have a thunderbolt ethernet adapter that is our LAN port. This is directly connected to a gigabit switch.

### The Server

Our server is a gaming PC of some kind (I have no idea what the origin story is). It's running a 12-core 24-thread Ryzen 9 3900X CPU with 94Gb of DDR4 RAM. There is also an Nvidia Quadro P4000 GPU that is being utilized by a windows VM.

## Networking
The network diagram is really simple for the shop:

```
Wall Plate --> pfSense --> switch --> Unraid
```
![Figure 1](./img/smv-network-1.png)

Right now it's a straight line of nodes since the Unraid server breaks out into containers and virtual machines. All devices are wired through ethernet and there is no wireless networking.