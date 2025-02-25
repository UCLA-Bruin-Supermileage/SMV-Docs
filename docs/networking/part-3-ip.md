# The IP Protocol
Ok, if you didn't absorb anything from the previous 2 pages, then now is the time to lock in and start remembering. IP is all around us, it is used to view this web page, to send messages, and to do pretty much anything on the internet. All of the lower level protocols like ethernet, and the physical connectors get abstracted and we mainly refer to connectivity using the IP protocol.

## What's Wrong With MAC?
Well if you didn't read the last page, then the TLDR is that in order to route traffic using MAC addresses and the Ethernet protocol, every switching device on the network must search through a massive table in order to route traffic correctly. Even with modern day search algorithms and data structures, having to search a table for every single MAC is insanely expensive and would introduce an immense amount of latency (lag for you gamers out there).

So what's so special about the IP protocol? Remember that MAC addresses are binded to physical pieces of hardware, and that hardware doesn't have to stay in one place. Take for example your phone, it has a unique MAC address for the wifi card that's in it, but think about all the different places you travel to: school, home, work, restaurants, and so many more. In order for your friend to send you messages every switch on the planet has to be updated with the latest path to get to your phone. I don't even want to know how disastrous that would even be if this implementation were true.

Ok so back to the question of why IP. The reason why we use IP addresses is because they have a hierarchical relationship that allows you to narrow down where a node is. Let's dive in

## What is an IP Address?
You've probably heard of IP addresses somewhere in your life and you're here reading this page because you want to learn how it all really works.

Let's start with the format. An IP address consists of 4 octets separated by a period. A classic example is:
```
192.168.1.1
```
Unlike MAC addresses we don't usually notate them using hex, but rather with their direct decimal format. Something to notice with IP addresses is that there are only $2^{32}$ which is about 4.2 billion unique addresses available in the world. As of February 2025, there are 8.2 billion people in the world. If everyone owns at least a cellphone, and a laptop, we would need 16.4 billion addresses to cover it all! So how do we solve this problem?

## IANA
Ok, before we get to the solution we need to talk about IANA. Who decides who get's what IP address? IANA is responsible for partitioning the IP address space (the 4.2 billion addresses) into chunks for people and organizations to use. Internet Service Providers (ISPs) will get an IP address block from IANA and they can assign those addresses to you, the consumer.

I'll note right now that in this one paragraph of explanation, I skipped over A LOT of fine grained details about how IP addresses are distributed. I'm also going to abstract away how IP addresses are routed. If you want to learn more I suggest taking CS 118 or any equivalent networking class at a university. That or good ol' Google search.

So ISPs can assign the addresses they are give, but we still haven't solved the problem of running out of addresses.

## TCP/IP & Ports
Imagine you're at your computer and you're listening to music from a streaming service like Tidal. At the same time you might check your email, work on a document, or something else that requires internet connectivity?

You'll often see IP described as TCP/IP, but what is TCP? TCP or the Transmission Control Protocol is wrapped by IP. This means that inside of an IP packet is a TCP packet. (I'm only going to talk about the important properties but,) An IP packet has a source address and a destination address. With respect to the world wide web, it is the location of your computer. Now we need to handle the different applications in your computer, that's where TCP comes in.

TCP (again only noting the important features) contains a source port and a destination port. What a port does is direct traffic to a specific application on a computer.

Let's give an example. To visit a site like [www.ucla.edu](https://www.ucla.edu), UCLA hosts a web server that is operating on port 443. If you take your browser and visit the site, your browser will make a request with a destination port of 443. Why is it port 443? 443 has been designated by IANA as the HTTPS port. It's just one of those things that has to be defined. Imagine if there wasn't a standard port, you would have to spend ages trying to guess the port for every website you want to visit.

To denote a port at the end of a url or an IP address you just use a `:`. It would look something like:
```
192.168.1.1:80 <-- port 80
www.howard-zhu.com:443 <-- 443
```
What about the source side? Your computer's operating system handles the port allocation for each program that's running. Usually what happens is that the source port gets randomly assigned from the unreserved pool of ports that are available on your computer. The last number port you can have is 65535 and if you know your powers of 2, this means that ports take up 16 bits of space.

## Subnets
Alright, so you finally pulled the trigger and moved out of the school dorms and into your own apartment. You search the web and find a sh!tty little ISP, we'll call them Spuctrum (absolutely in no way am I referring to the ISP, Spectrum). You go order their top tier internet package and go pick up your new modem and router.

Wait, modem and router? Two different things? Yes, a modem is different from a router because they serve two different purposes. A modem is used to get service from your ISP into your home while a router is there to route traffic within your home and throughout the world wide web. We mostly won't talk about the modem since it's only purpose is to provide internet access and doesn't have much to do with routing or much else.

You've set everything up, and you got your computer and phone connected to the internet. If you search on the web `what's my ip` on your phone and your computer, you'll notice that they come up to the same address.

Wait, how is that possible? Ports to the rescue again, but this time we have an added layer.

If you open a command line on Windows or MacOS, (if you're on unix of some kind why are you even here?) you can type in the following commands:

Windows:
```
ipconfig
```
You'll get something that looks like this:
```
Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : seaslab.seas.ucla.edu
   IPv4 Address. . . . . . . . . . . : 128.97.85.230
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 128.97.85.1
```

MacOS:
```
ifconfig
```
You might get something that looks like this:
```
  en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
       ether 64:76:ba:ae:a3:02 
       inet6 fe80::6676:baff:feae:a302%en0 prefixlen 64 scopeid 0x4 
       inet 172.30.7.47 netmask 0xffff0000 broadcast 172.30.255.255
       nd6 options=1<PERFORMNUD>
       media: autoselect
       status: active
```
In the Windows output, we will focus on the `IPv4 Address` line and the `inet` line in the Mac output. These IP addresses that are listed in the aforementioned lines are `local area network` addresses or `LAN` addresses. The IP address that you saw from the "what's my IP" search would be a `wide area network` address or `WAN` address. How do these all fit together?

### Taking off the Mask

If you notice from the windows output, there's a field called the `subnet mask` and in the MacOS output there's a `netmask` hidden in the `inet` line. What the subnet mask allows us to do is determine, which IP addresses are within a local network.

How local is "local"?

If you remember how the ethernet protocol/ARP protocol works, ethernet packets/frames will be flooded around the network when new computers join so that switches and other computers can build up their ARP table/MAC address table. It's good to keep in mind that your PC's don't speak IP when communicating through physical means like copper wires or wifi. They use the ethernet protocol. This means that they need to know the destination MAC addresses. Well in a local network, MAC address information gets flooded around, in this case the computer would look it up in their table and set the destination MAC appropriately. So your computer will take the destination IP you want to reach and try to look up the associate MAC address.

What if we don't know the destination MAC address? The packet still has to have a destination MAC address right?

We'll cover this when we get to DHCP and other routing stuff.

For now, back on track to subnets. So if you've ever taken a lower level computer science class where you get to work with actual bits, you'll be familiar with something called a bit mask. If you haven't then I'm going to go over an operation called the bitwise AND operator.

#### Take this AND This
The AND operator is really simple. I'll show this in these tables. In computer science 0 is equal to False and 1 is equal to True.

| X   | Y   | X & Y |
| :-  | :-: | -:  |
| 0   | 0   | 0   |
| 0   | 1   | 0   |
| 1   | 0   | 0   |
| 1   | 1   | 1   |

In simple terms, both inputs have to be 1 to output 1, otherwise it's 0.

Bitwise AND takes this a step further and applies it to multi-digit binary numbers. Take this example:

```
11101001
&
00101101
```

What do you think the output would be?

To do a bitwise AND, all you have to do is go one digit at a time and apply the AND operator. So your output should look like this:
```
00101001
```

Now that we have this covered, let's dive into why we have masks for IPs.

You'll notice in the CLI (command line interface) output that the numbers that make up an IP address are different. How do we know which IP addresses are local?

What you do is take the IP and apply the subnet mask to it. Like so:
```
IP: 128.97.85.230
Mask: 255.255.255.0
Masked IP: 128.97.85.0
```
Ok... so you basically set the last byte to 0. If I expand to binary it might become a little clearer.

```
10000000.01100001.01010101.11100110
&
11111111.11111111.11111111.00000000
-----------------------------------
10000000.01100001.01010101.00000000
```
Notice that in the mask there are a lot of **consecutive ones**. Looking at the mask we can see that the last 8 bits are 0, this means that the first 24 bits are set in stone by the router. So if you keep the first 24 bits as they are, you can set the last 8 bits to whatever you want and it will define a valid address in the local area network (LAN).

In this particular example, any address in the range of 128.97.85.0 - 128.97.85.255 is a valid LAN address.

You can think of the section of the mask where it is all 1 as the subnet ID and the section of all zeros as the ID of the computer.

## Gaslight, Gatekeep, Girlboss (NAT Tables)

Fun fact, one of Google's DNS server's is located at the IP of `8.8.8.8`, that's nowhere near any of the subnets that I showed earlier so what happens now?

If we want to reach that server what we do is first lookup if the IP is in the LAN, obviously it's not (8.8.8 not equal 128.97.85) So what we do is in the **IP packet** we set the source IP address to what ever our computer has (in this case 128.97.85.230) and the destination address to 8.8.8.8. Then, in order to send it out, we wrap it in an ethernet frame with a source MAC of our computer a destination MAC of our **default gateway**. This means that our router will see this packet and strip away the ethernet frame and inspect the IP packet within.

Our gateway/router will see that we are trying to go to 8.8.8.8 and then update a few things.

### Modifying the MAC addresses

When the router receives the ethernet frame, it will rewrite the source **and** destination MAC addresses. It will set the source to the router's own MAC address and the destination to be the next upstream node (this is where the route picking happens)

### Modifying the IP addresses

Remember when I posed the question of how can we have multiple devices appear under the same address? This section and the next will explain how.

So our router actually has 2 IP addresses associated with it. The first one is the gateway address that we are familiar with. This is the LAN facing address that the computers in the local network can see and route packets to. The second is the WAN facing address so that it can communicate with the world wide web.

So what happens is when it inspects the IP packet, it will rewrite the source IP address to its WAN address and leave the destination address alone.

### Modifying the Ports

To provide further details to this example. Let's say you are making a DNS request to Google's DNS server at 8.8.8.8. The standard port for DNS requests is port 53. So when your computer sends it out, the IP packet will have a destination port of 53 and a source port arbitrarily determined by your OS, let's say `12345`. What the router will do is look at the source port and rewrite it to some other arbitrary port, let's say `54321`. Then it **stores** a mapping of what it just overwrote. So when Google sends packet back, it will have a destination port of `54321` which the router will then rewrite back to `12345` and then forward it down into the LAN.

### NAT Tabling

This process of storing the original state and mapping it to the modified state so that it can be translated back and forth uses a NAT table. NAT stands for Network Address Translation. I'm going to reframe this in a later page, but this is how you can have multiple devices under one IP address.

If you remember the port topic from earlier, an analogy would be that your router acts as a computer and the devices in the LAN act as individual applications. So it's the same process that your computer does to have multiple network connections, except at a higher level.