describe('SaveMillions Navigation', () => {
    before(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.pause(2000);
        $('.optanon-allow-all.accept-cookies-button').click();
    });

    beforeEach(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    });

    it('should compare NavigationHeader Screenshot', () => {
        expect(browser.checkElement($('#site-nav-topbar-wrapper'), 'NavigationHeader', { ignoreColors: true })).toEqual(0);
    });

    it('should compare side navigation menu screenshot', () => {
        $('#nav\\:siteNavSideNavToggle').click();;
        expect(browser.checkScreen('SideNavigationMenu', { ignoreColors: true })).toEqual(0);
    });

    it('should compare Learn More button navigation screenshot', () => {
        const element = $('[href="/intl/v/car-safety/safety-heritage"]')
        element.waitForClickable({ timeout: 3000 });
        element.click();
        expect(browser.checkScreen('SafetyHeritagePage', { ignoreColors: true })).toEqual(0);
    });

    it('should compare Learn More about safety page screenshot', () => {
        const element = $('[href="/intl/v/car-safety"]')
        element.waitForClickable({ timeout: 3000 });
        element.click();
        expect(browser.checkScreen('LearnMoreaboutSafety', { ignoreColors: true })).toEqual(0);
    });

    it('should compare Learn XC90 Recharge page screenshot', () => {
        const element = $('[href="/intl/v/cars/xc90-hybrid"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        expect(browser.checkScreen('XC90-hybrid', { ignoreColors: true })).toEqual(0);
    });

    it('should compare shop XC90 R-Design page screenshot', () => {
        const element = $('[href="https://www.volvocars.com/intl/build/suv/xc90#filterRecharge"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        expect(browser.checkScreen('XC90-R-Design', { ignoreColors: true })).toEqual(0);
    });

    it('should compare volvo recharge page screenshot', () => {
        const element = $('[href="/intl/v/cars/recharge"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        expect(browser.checkScreen('VolvoRecharge', { ignoreColors: true })).toEqual(0);
    });

    it('should compare Mild Hybrids page screenshot', () => {
        const element = $('[href="/intl/v/cars/other\\-powertrains"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        expect(browser.checkScreen('MildHybrids', { ignoreColors: true })).toEqual(0);
    });
});