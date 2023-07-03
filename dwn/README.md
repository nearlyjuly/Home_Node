# Simple DWN for use with Home Node
(This will be updated to use dwn-proxy-js and dwn-server once they are ready)

# Before you start
If you only want to try out using DIDS and messaging on the same device then just install it as a separate nodejs project and use localhost:3000 as the DWN address for your tenant DID (see below). If you want to make it accessible on the internet or local device, even if you are the only one who will access it, then you need to find or establish the address according to your setup. If you are a cleverclogs with a homelab then you will already know how to do that. Otherwise, I would recommend using an old computer or a Raspberry Pi/other single board computer with a dynamic DNS address as the least difficult option. You will need to find your local IP address first, then make a note of the port being used (it is set as 3000 which shouldn't cause any issues). Then enable port forwarding for this IP address and port number on your router. This usually is fine for most modern ISPs but it can be different depending on your country or service provider. For example you may need to set a different port number for the router port. If you don't have a fixed IP address then you can get a dynamic DNS address (DDNS) from Dynu, DuckDNS and other free providers. You can manually update your IP address and then use the DDNS as the DWN address for your DID. Once you've tried things out you can easily delete your DDNS and DID.

# Setup
First you will need to establish the address of your DWN, then you use this address to create a new DID using the DID Manager. Finally you need to enter this DID (and others if you have them) as a tenant, so that only messages addressed to you will be accepted.

# Installation (once you have your tenant DID)
(Works with Nodejs 18) Copy and paste the folder SimpleDWN and run npm i. Then locate the index.ts entry for the tenants array and add your DID. Finally run tsc from the command line and then node index.js to start your DWN. 

(simpledwn to come shortly)
