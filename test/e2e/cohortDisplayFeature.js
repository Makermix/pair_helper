describe('Cohort Display', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Cohort Pairing');
  });
});
