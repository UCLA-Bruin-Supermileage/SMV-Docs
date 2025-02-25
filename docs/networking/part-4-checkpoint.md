# Changing Perspectives
So in the past few pages I took the approach from the bottom up, going from one computer to a whole universe of computers. To be completely honest it's hard to follow because all of the topics have so many branches and sub topics that I just had to make sacrifices and assumptions about what to discuss. So, with this checkpoint page, I'm going to sort of repeat what I've said before, but from a completely different frame of mind.

## Congrats on Your New PC!
You just got a brand new computer, fresh out of the box. You eagerly turn it on and you're prompted with a screen to connect to a wifi network or plug into ethernet.

If you're from a university campus, you might be familiar with the `eduroam` network (however infamous it might be). You punch in your login credentials and the wifi symbol lights up showing that you're connected.

The first thing you do (for some odd reason) is open a terminal and type in `ipconfig` (oh yeah, you're also on windows)

And you see that your address is `192.168.1.42`. How on Earth did you even get this information?

## DHCP

DHCP stands for Dynamic Host Configuration Protocol. It does what it says it does. It allows for you to dynamically configure the network settings of a computer.

What's so dynamic about it? Well, it's dynamic because the address that you get is determined the DCHP server, all you have to do is just get connected to the network and DHCP will do all the work.

In **broad simplification** terms, when you connect to a wifi network, your phone broadcasts to everyone saying, "Hey I need a network configuration". The DHCP server responds saying "Here you go" and responds with at least the following:

- Your IP
- The Default Gateway
- The Subnet Mask
- DNS Server(s)

Great! Now you know the information about the LAN that you're connected to and where you can send packets.

## Don't Get Caught in the Web

Alright, you're connected to your wifi and now you're ready to take a look at the SMV website. You open your favorite web browser and type in [smv.seas.ucla.edu](https://smv.seas.ucla.edu) and it loads our front page. How did we get all the information and display it properly?

We had all this talk about IP addresses and packets, but a URL isn't an IP. How is it that you can navigate to a string of characters? Here's the thing:

You don't.

If you remember from the DHCP section we had to get DNS servers as part of an address configuration. This is because the DNS, or Domain Name System, takes a domain name (smv.seas.ucla.edu) and translates it into an IP address: 128.97.3.48

Go ahead and try it. Open your browser and type in "http://128.97.3.48". If it says connection not secure, that's ok, we're not trying to steal your info, I just don't have an SSL certificate for the IP address, only the domain name. We might cover SSL later, but for now just know that it relates to encryption and security.

So what a DNS server really does it just provide a mapping from URL to IP address. No matter what network that you're on, a valid device configuration must include at least one DNS server, the normal is to have two of them.

I'm not going to dive really hard into the specifics, but I want to cover the general concepts of DNS.

First I have to break down the structure of a URL. If you look at smv.seas.ucla.edu/info there are 4 sections separated by a period and one section with a "/". Starting with the "/", this specifies the file, or path within the domain that you are looking at. Removing the "info" section will take you to the main dashboard instead. So looking at the URL, you are currently browsing on the smv.seas.ucla.edu domain and looking at the "info" page. What the developer puts behind the "/" is up to them and how they program their website. The real meat of the networking lies in the period separated sections.

If you were born close to the year 2000, you'll probably remember your teacher telling you that Wikipedia isn't a good source of research and that anything with a .edu or .org ending would be better. What your teacher described is called a top level domain (TLD). The most common that you'll recognize is .com. There are a LOT of TLDs and they can be viewed through this text file maintained by IANA [https://data.iana.org/TLD/tlds-alpha-by-domain.txt](https://data.iana.org/TLD/tlds-alpha-by-domain.txt). Oop, I mentioned IANA again. That's right, IANA maintains the TLDs of the whole world, if you want your own TLD, you have to go through them. They don't actually handle the registration process of everyone, they distribute that tasks to big tech companies like Squarespace, GoDaddy, and more.

So we have a .edu ending because UCLA is an educational institute that .edu TLDs are regulated. We have ucla.edu because we're at UCLA. We have seas.ucla.edu because we're a club under the engineering department. Finally we have smv.seas.ucla.edu which belongs to us. Notice how all of those parts were themselves valid websites. I forgot to mention that at the very end of every URL is an implied "." so it really looks like smv.seas.ucla.edu. (I'll get to that later).

Like a lof of things in life, the DNS structure is built like a hierarchy. Closest to you are your local DNS servers (remember what local means) and farthest from you are the top level domain (TLD) servers. When you first make that request to SMV (I'm going to use SMV as shorthand for the full URL) what happens is that it goes to your local DNS server provided by your DHCP server. If your local DNS has it, then it responds with the corresponding IP address. If it doesn't, then it will forward the request to the next DNS server up the pipeline (usually your ISP). If they have it, then they will respond and if they don't they continue upward. This chain of forwarding continues until you hit the TLD servers.

It might seem inefficient at first, but DNS resolves take advantage of caching, that means that they remember every entry they have responded to. Every DNS entry they get has an associated time to live. This means that once the entry has been in the cache for that long, it expires and a refreshed entry must be fetched when a new DNS request comes along.

So going to SMV would look like this:
1. Your browser asks local DNS for smv.seas.ucla.edu
2. Your local DNS asks the root DNS server "." for the "edu" name servers
3. Local DNS then asks the "edu" servers for "ucla.edu"
4. Local DNS then asks "ucla.edu" servers for "seas.ucla.edu"
5. Local DNS then asks "seas.ucla.edu" servers for "smv.seas.ucla.edu"
6. Local DNS asks the "smv.seas.ucla.edu" servers for the final IP address.
7. You get the IP address and navigate to it.

Notice that SMV has to maintain our own DNS server and that the DNS server is separate from the web server. Luckily (also annoyingly) the engineering department maintains our DNS server so we don't have to do anything. But this also means that we can't allocate any subdomains like "api.smv.seas.ucla.edu" instead we have to use the "/" method to separate our pages so it becomes smv.seas.ucla.edu/api.

# And Bob's Your Uncle

And BAM you're hooked up to the rest of the internet! That's all your really need to access any website. With all the pages before this and this page, you should be able to understand how your computer is able to connect to a network and display a webpage.

So in summary to go from a new device to browsing the web:
1. Obtain a DHCP lease from your network
2. Make a DNS request for the site
3. Navigate to the site
    - remember all that port opening and NAT tables

All of this has been a VERY broad overview of client side connectivity without much discussion of the server side of things. I encourage you to take or audit CS 118 if any of this is interesting to you.