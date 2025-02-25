# Server Side Shenanigans

Wow it's been a lot of writing so far, if you've been reading sequentially, pat yourself on the back because even I'm exhausted and I'm the one ranting about all of it.

Now we're going to get to my favorite part. Hosting your website from zero to hero. The next pages (at the time of writing I don't know how many, I'm just wining it) will go over how to go from not having a website to hosting your own from home. Hopefully this should connect the last remaining dots of the world wide web and you'll have a fundamental understanding of how websites work.

## What's Your Name?

Like gamer tags and usernames alike, you must first pick out a name for your website. There are so many options to choose from, and with virtually no character limit, you could go crazy. But think about it, the longer it is, the harder it is to remember. Ideally you want something short and memorable. But that choice is up to you.

In order to get your name, you would go to a domain registrar. If you search "domain registrar" you will greeted with many options. I'm not sponsored or anything, I'm just going to give my testimony on what I did for my website [howard-zhu.com](https://howard-zhu.com).

For my domain registrar, I choose Google Domains, at the time of writing, they have been acquired by Squarespace so now I'm under them. But the point was I browsed through many of the options to find the registrar that would give me the cheapest name in the long run.

:::warning
Some will have really cheap discounts up front, but in the long run will charge more after the discount period so `READ THE FINE PRINT`
:::

Currently I pay about $1 a month to keep my name registered. What this means is that Google (now Squarespace) takes care of my registration with ICANN.

:::tip

You can see the registration of any domain with a WHOIS lookup [here](https://lookup.icann.org/en).

:::

You'll notice that an entry contains a lot of data about who owns the domain and their contact information so it might be worth it (for those worried about privacy) to go with a registrar that has privacy protection so that when your domain is registered, it doesn't reveal any of your private information.

Alright, now that you've bought a domain name, what's next?

## The Website Itself

This topic is something that you kinda have to do/figure out on your own. You can build it from scratch using something like React or you could go with a platform like wordpress. Me personally, my website is based on Next.js. So for the sake of this page, I'm going to assume you have a React based website.

The other topic I have to talk about is where to host it. You could pick something like AWS, Google Cloud, or any other cloud hosting provider, but I'm going to focus this page on hosting a website on your own local network. This could be anything from a tiny Raspberry Pi to a full own server unit, it just has to be a computer.

## Configuring Your DNS

Once you log into your registrar's dashboard, you'll need to configure either DNS servers or DNS entries. Let's talk about entries first.

The one you'll most likely be worried about is the A record, this is where you punch in your domain name, the address associated with it, and the time to live.

If you're in a residential area, you'll need an extra step which is to configure a dynamic DNS service. You need this because as a residential address, your IP address rotates (usually on a monthly basis) which means your DNS entry needs to get updated every time your public IP address changes. Doing that manually sucks, so we have dynamic DNS (DDNS) to the rescue.

Some routers have DDNS features available as a built in feature. If they don't, that's ok, there are applications you can download and configure to automatically do this for you. If you look up your registrar along with the search term "ddns" you'll likely find ways to do so.

I won't cover the steps here, that's for you to explore :smile:

Once you either associate a DNS record with a static IP address or configured DDNS, you're ready to bring up your web server.

## Getting the Heck out of LAN

I'm going to assume that you've combed through whatever documentation you needed to in order to get your website up an running on a local machine. I'm going to use the LAN address of `192.168.1.2` as the example server LAN address for this page.

What you need to do now, (if you are behind a NAT table) is port forward your webserver so that it is exposed to the open internet.

:::danger

Exposing anything on your network to the open internet can pose security issues if done incorrectly!

:::

You'll have to gain access to your router (it is usually the same IP as the default gateway). You punch in the address into a web browser (for this example I will use `192.168.1.1`) and log into the website. The credentials are usually printed on a sticker pasted to your router.

But wait! There's an important step that I missed. Certificate configuration. I have tried different things from running Certbot on a Raspberry Pi with a manual Nginx configuration, but what I ultimately found Nginx Proxy Manager to be the easiest thing to use. I highly suggest you look up how to configure Nginx Proxy Manager and be glad about how much effort it saves you.

Once you have Nginx Proxy Manager open, add a proxy host with your domain name, pointed to the LAN address of you web server. In the tabs you'll see that you can also automatically handle SSL certs (which is what I was after in the first place). Configure that, and once that's done we're ready to go online. I'm going to assume the proxy manager is at `192.168.1.3`

Log into your router, navigate to either advanced settings, port forwarding, or NAT table in your router. Depending on the manufacturer, the process may vary. You need to add a port forwarding entry such that any port coming into 443 (HTTPS) and port 80 (HTTP) point to your server `192.168.1.3`. Nginx Proxy Manager will inspect the packets coming in and forward it accordingly with the correctly signed certificate to your webserver.

## Alls Well That Ends Well

I'm not saying this page is a thorough step-by-step guide on how to host a website, it's not. It's a conceptual guide on what you would need to do in order to get your website online. Your process may vary, your software may vary. I don't know what you have, but what's important is that you understand the concepts.



