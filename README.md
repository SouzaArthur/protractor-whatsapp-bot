# Whatsapp web bot
This is a very basic protractor project, that I just made for fun, used to send lots of sequencial messages on whatsapp web.

## How to configure the project? 
You just need to change de values of the "contactName" and "message" variables.

## How to run the project?
To run the project, you just need to install nodejs and then run these comments on your terminal:

    npm install -g protractor
    webdriver-manager update
    webdriver-manager start

and then run "protractor config.js".

## How does it work?
Protractor will open a Google Chrome window, go to Whatsapp website, ask for you to read QR code using Whatsapp mobile app, search for the contact, click on the contact name, type the message and send it.
