describe('Save Millions Tabbable page', () => {
    before(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.pause(2000);
        $('.optanon-allow-all.accept-cookies-button').click();
    });

    it('should compare Tabbable page screenshot with baseline', () => {
        expect(browser.checkFullPageScreen('SaveMillions_FullPage_Tabbable', { ignoreColors: true })).toEqual(0);
    });

});