(Archived as there is no real need for something like this with the dwn-server available from TBD)

# Installation 
Download or clone the project files. Run npm i to install.
Port is set at 3000. Edit at ln 50 in simpledwn/dwn.js if you'd like to use a different one.

# To use
Establish the address of your DWN first (it'll be localhost:3000 on the same device, the local IP address:3000 for a device on your home network, or a forwarded address if you want to access it away from home). Once you have your address, create a DID in the HomeNode manager repo https://github.com/nearlyjuly/HomeNode-Manager with this address OR use the Web5-JS SDK to do the same https://github.com/TBD54566975/web5-js#options-optional NB. If you choose the latter then this will create another local DWN in your Web5 project.

Once you have your DID or DIDs make sure to add them in the tenantsArray at ln 8 simple/dwn.js 

Once this is done you can start the DWN with npm run startdwn 

You can write to your DWN now, but only if you address it to your own DID. If you want to write to your DWN from another DID (even if it's from another tenant) then you need to install a protocol to do this. There will be a way to set permissions in future.


