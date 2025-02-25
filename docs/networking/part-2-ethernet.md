---
sidebar_position: 2
---
# The Ethernet Protocol
In this page we expand on what we learned in the previous page. Before reading this page I expect you understand that all networked computers (their NICs) have a unique ID imprinted on them from the factory called a MAC address. That's literally it, sorry you had to read all that before if you did, but it's good to understand the fundamentals :smile:. Let's get to it.

## Let's get physical
Ok I name dropped a piece of jargon without explaining anything. WTF is ethernet? Ethernet is a protocol that NICs use to communicate with each other. We won't dive into in this paragraph, but we will soon. For now, just remember that it's a protocol.

So we have a protocol, what does the connector look like in the real world. Well...this:
![Figure 1](https://www.cableleader.com/media/catalog/product/cache/048144f7f66a3fcccf506bf3676b4ff8/c/a/cable-leader-cat6-utp-snagless-ethernet-network-patch-cable--blue-1_1_16.png)
*Source: https://www.cableleader.com/media/catalog/product/cache/048144f7f66a3fcccf506bf3676b4ff8/c/a/cable-leader-cat6-utp-snagless-ethernet-network-patch-cable--blue-1_1_16.png*

Depicted above is an ethernet cable. This means that the information traveling through the wire follows in the ethernet protocol. The physical connectors on the end are called RJ45 heads. They contain 8 wires, twisted into 4 different pairs.

These cables have to plug into somewhere so here's what the ethernet port looks like.

![Figure 2](https://cdn.taoglas.com/wp-content/uploads/2023/06/TMJY606DYDZ4NL_Front_1000x1000-600x600.png)
*Source: https://cdn.taoglas.com/wp-content/uploads/2023/06/TMJY606DYDZ4NL_Front_1000x1000-600x600.png*

You've probably seen the cable and the port before, actually I can almost guarantee it. Take a look around the walls of the room that you're in (if you're outside...ew). You might notice that there are ethernet ports (RJ45 ports) on one or more of the walls. This is definitely true of UCLA campus where every classroom and building is wired up for ethernet. You might be wondering what all the ports are connected to and where they lead to. Well I'm glad you asked.

## Packet Switching
### The Hardware
Behind all of those ports and often times what you'll plug your computer into if you want internet is a packet switch. At home, this switch is most likely bundled with your router that came with your internet service provider (ISP oops another vocab word).
![Figure 3](https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502056cv11d.jpg;maxHeight=2000;maxWidth=2000;format=webp)
*Source: https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502056cv11d.jpg;maxHeight=2000;maxWidth=2000;format=webp*
Ignore the colors and the labels under the ports, we aren't quite there yet. I just wanted to show you that you have a network switch at home and just might not know it.

In something like a university campus or an office, the ethernet cables might lead to a much larger switch which could look something like:

![Figure 4](https://t4.ftcdn.net/jpg/01/19/20/13/360_F_119201395_FJm8mPR3TTRHNLXPxp0poTc0xyAxY4re.jpg)

Ok Ok Ok so now you know what it looks like, but what does it do?

### Switching it Around
If you remember that magic wire from the first page I said that all computers could connect to this magic wire, well guess what. This is the magic wire. For two computers to be *connected* to each other, all you have to do is make sure they are linked by a series of cables and switches. But I'm getting ahead of myself, back to the basics.

![Figure 5](./img/fig-5.png)

Let's say we have `Computer A`'s MAC address, call it `MAC A` and `MAC B` for `Computer B`. Because of the severe amount of details I am foregoing for this lecture, we will make the assumption that `Computer A` knows `MAC B` and `Computer B` knows `MAC A`. You don't need to know the nitty gritty details of how computers and switches obtain this information, but if you want to learn more you can check out the [ARP protocol](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) or I might cover this later.

So, how do we send data from `Computer A` to `Computer B`?

`Computer A` will send a **packet** which is basically just a burst of bits down the wire to the switch. In this packet will contain the destination MAC address that we want to send to. The switch will then receive this packet and peek at the destination MAC address. It will check it's internal table of MAC addresses associated with port numbers and try to find the port number associated with the destination port. If it can not find an associated port number, it will broadcast (flood) the packet down **all** of the ports except the port the packet came from. Yes, this means that it will make n-1 copies of the packet and send one copy down each port (where n is the number of ports on the switch). At the same time, the switch will remember the MAC address of the computer who sent the packet and the port that it was on.

Let's say `Computer A` is connected to `port 1` and `Computer B` is connected to `port 2`. When `Computer A` sends a packet to `MAC B`, the switch will remember that `port 1` can reach `MAC A` and then flood the packet down all the other ports in the switch because `MAC B` isn't in its table yet. Since the packet is being flooded down every port, `Computer B` is guaranteed to see the packet coming from `Computer A`. If `Computer B` wants to send a reply, it sends a packet with a destination MAC of `MAC A`. The switch will then see this reply packet and remember that `port 2` can reach `MAC B`. Then the switch will check its table and find that `MAC A` is reachable down `port 1` and then **only** send the packet down `port 1`.

An important concept to understand is that **one port can map to MANY MAC addresses**. This enables some really important functionality like chaining switches together.

## What's Next
Whew! Now we can plug in an arbitrary number of computers and connect the world right?

If we calculate the total number of MAC addresses possible we get:

$$2^{48} \approx 281 \text{ trillion}$$

This works out to several thousand MAC addresses per person on the Earth. It also comes with the devastating consequence that every switch needs to store all 281 trillion addresses and the associated port that it's on. A really conservative estimate is that each switch on the planet would have to search through more than 35 gigabytes of data. If you've ever taken an algorithms class, that is going to have devastating performance impacts. So we need a smarter way to route traffic, and to our rescue in the next page comes the IP protocol.