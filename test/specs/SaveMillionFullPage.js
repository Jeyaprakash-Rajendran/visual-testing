describe('Save Millions Full page', () => {
    before(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.pause(2000);
        $('.optanon-allow-all.accept-cookies-button').click();
    });

    it('should compare Full page screenshot with baseline', () => {
        expect(browser.checkFullPageScreen('SaveMillions_FullPage', { ignoreColors: true })).toEqual(0);
    });

});