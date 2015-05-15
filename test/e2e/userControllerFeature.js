describe('User Controller', function() {

    beforeEach(function () {
        browser.get('http://localhost:4567');
    });

    var userNameBox = element(by.model('userCtrl.userName'));
    var submitUserButton = element(by.id('woofbtn'));
    var userReadout = element(by.id('userReadout'));
    var pairReadout = element(by.id('pairReadout'));

    it('should accept a name from a user', function () {
        userNameBox.sendKeys('James');
        submitUserButton.click();
        expect(userReadout.getText()).toEqual('Hi James')
    });

    it('should not have greeting or paired-with text when page loads', function() {
        expect(userReadout.getText()).toEqual('');
        expect(pairReadout.getText()).toEqual('');
    });

});
