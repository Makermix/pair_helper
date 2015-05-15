describe('Cohort Display', function() {

  beforeEach(function(){
    browser.get('http://localhost:4567');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Cohort Pairing');
  });

  it('has a WOOF button', function() {
    expect(browser.isElementPresent(by.id('woofbtn'))).toBe(true);
  });

  xit('should have the right names in the html', function() {
    expect(element.all(by.binding('maker.name')).getText()).toEqual('James');
  });
});
