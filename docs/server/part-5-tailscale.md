---
sidebar_position: 5
---
# Tailscale Access for Club Server

Tailscale is used to enable secure, remote access to the internal services hosted behind the pfSense router. It leverages WireGuard for encrypted connections and is configured with **subnet routing** to allow direct access to devices and services on the local 192.168.69.0/24 subnet.

## Setup Overview

- **Tailscale Host**: Installed on the pfSense router (Mac mini)
- **Subnet Routing**: Enabled for the 192.168.69.0/24 subnet
- **Authentication**:
  - **Admin**: Sign in via **Google**
  - **Members**: Use **GitHub credentials** provided in the club Notion workspace

Once connected to the Tailscale network, your device will behave as if it’s locally on the club network, allowing you to access services by internal IP addresses. This is only required for leads who **need** to access production servers, the UnRAID host, or the pfSense router. General members will NOT need Tailscale, and should not have access as they can inadvertantly modify the production data. 

## How to Connect

1. Install [Tailscale](https://tailscale.com/download) on your device.
2. Sign in:
   - **Admins**: Use the club’s Google account.
   - **Members**: Have a lead sign into your device with the GitHub credentials on Notion.
3. Once signed in and connected, you will receive an IP in the Tailscale network and gain access to internal resources.
4. Navigate to services using their internal IP addresses as listed above.

## Need Access?

If you require access to the Tailscale network:

- Contact a club lead.

---

For more information, reach out to the electrical tech director or Matthew or Howard.
