//This code was made considering whatsapp web in english, if you are using it in portuguese or some other language, 
// just change the selectors in code

describe('Sending message on whatsapp web', function() {
    
    it('should send message', function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        browser.waitForAngularEnabled(false)
        browser.get('https://web.whatsapp.com/');
        browser.sleep(8000)

        //Contact and message informations
        contactName = "Test chat"
        message = "Hello"

        //Searching for the contact name
        searchFieldButton = element(by.xpath('//span[@data-icon="search"]'));
        searchFieldButton.click();
        browser.sleep(1000);
        searchField = element(by.css('._2S1VP.copyable-text.selectable-text'));
        searchField.sendKeys(contactName);
        browser.sleep(1000);

        element(by.xpath('//span[@title="'+ contactName +'"]')).click();

        browser.sleep(1000);

        //Seding 1000 messages
        for(i = 0; i <= 1000; i++){
            typeMessage = element(by.cssContainingText('._3F6QL._2WovP', 'Type a message'));
            typeMessage.click();
            typeMessage.sendKeys(message);
            browser.sleep(500);
            element(by.css('._1Plpp')).sendKeys(protractor.Key.ENTER);
            browser.sleep(500);
        }
  
    });
  });