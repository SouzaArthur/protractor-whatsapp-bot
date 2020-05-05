//This code was made considering whatsapp web in english, if you are using it in portuguese or some other language, 
// just change the selectors in code that use text as selector

describe('Sending message on whatsapp web', function() {
    
    it('should send message', function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        browser.waitForAngularEnabled(false)
        browser.get('https://web.whatsapp.com/');
        browser.sleep(8000)

        //Contact and message informations
        contactName = "Contato"
        message = "Mensagem"

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
            browser.sleep(200)
            typeMessage.sendKeys(message);
            browser.sleep(1000);
            element(by.xpath("//span[@data-icon='send']")).click()
            browser.sleep(700);
        }
  
    });
  });