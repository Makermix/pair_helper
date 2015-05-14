describe('Cohort Display', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Cohort Pairing');
  });

  it('should have the right names in the html', function() {
    browser.get('http://localhost:8080');

    expect(element(by.binding('maker.name')).getText()).
        toEqual('James');
  });
});
