# Whatsapp web bot
This is a very basic protractor project, that I just made for fun, used to send lots of sequencial messages on whatsapp web.

## How to configure the project? 
Those instructions are on the "wp-send.js" comments. But, basically you just have to change the "contact name" and the message you want to send.

## How to run the project?
To run the project, you just need to install de dependencies of node using "npm install" command and then run "protractor config.js".

## How does it work?
Protractor will open a Google Chrome window, go to Whatsapp website, ask for you to read QR code using Whatsapp mobile app, click on the contact you configured, type the message and send it.
