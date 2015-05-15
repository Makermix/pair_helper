describe('User Controller', function() {

    beforeEach(function () {
        browser.get('http://localhost:4567');
    });

    var userNameBox = element(by.model('userCtrl.userName'));
    var submitUserButton = element(by.id('woofbtn'));
    var userReadout = element(by.id('userReadout'));

    it('should accept a name from a user', function () {
        userNameBox.sendKeys('James');
        submitUserButton.click();
        expect(userReadout.getText()).toEqual('Hi James')
    });
});
