describe('Sending message on whatsapp web', function() {

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    
    it('should send message', function() {
        browser.waitForAngularEnabled(false)
        browser.get('https://web.whatsapp.com/');
        browser.sleep(8000)

        // Here you change the 'Contact Name', for the name of the contact you want to send the message
        // This contact should appers in the list of recent contacts
        element(by.xpath('//span[@title="Contact Name"]')).click();

        browser.sleep(1000);

        //Seding 1000 messages
        for(i = 0; i <= 1000; i++){
            typeMessage = element(by.cssContainingText('._3F6QL._2WovP', 'Type a message'));
            typeMessage.click();
            //Here you put the message you want to send for 'x' times it can be a heart ❤
            typeMessage.sendKeys("❤");
            browser.sleep(300);
            element(by.css('._1Plpp')).sendKeys(protractor.Key.ENTER);
            browser.sleep(300);
        }
  
    });
  });