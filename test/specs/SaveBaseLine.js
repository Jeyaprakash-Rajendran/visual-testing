describe('SaveMillions Baseline', () => {
    before(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.pause(2000);
        $('.optanon-allow-all.accept-cookies-button').click();
    });

    beforeEach(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    });

    it('should save NavigationHeader Screenshot', () => {
        browser.saveElement($('#site-nav-topbar-wrapper'), 'NavigationHeader', {});
    });

    it('should save side navigation menu screenshot', () => {
        $('#nav\\:siteNavSideNavToggle').click();;
        browser.saveScreen('SideNavigationMenu', {});
    });

    it('should save Learn More button navigation screenshot', () => {
        const element = $('[href="/intl/v/car-safety/safety-heritage"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        browser.saveScreen('SafetyHeritagePage', {});
    });

    it('should save Learn More about safety page screenshot', () => {
        const element = $('[href="/intl/v/car-safety"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        browser.saveScreen('LearnMoreaboutSafety', {});
    });

    it('should save Learn XC90 Recharge page screenshot', () => {
        const element = $('[href="/intl/v/cars/xc90-hybrid"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        browser.saveScreen('XC90-hybrid', {});
    });

    it('should save shop XC90 R-Design page screenshot', () => {
        const element = $('[href="https://www.volvocars.com/intl/build/suv/xc90#filterRecharge"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        browser.saveScreen('XC90-R-Design', {});
    });

    it('should save volvo recharge page screenshot', () => {
        const element = $('[href="/intl/v/cars/recharge"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        browser.saveScreen('VolvoRecharge', {});
    });

    it('should save Mild Hybrids page screenshot', () => {
        const element = $('[href="/intl/v/cars/other\\-powertrains"]')
        element.waitForClickable({ timeout: 2000 });
        element.click();
        browser.saveScreen('MildHybrids', {});
    });

    it('should save SaveMillion Full page screenshot', () => {
        browser.saveFullPageScreen('SaveMillions_FullPage', {});
    });

    it('should save SaveMillion Tabble page screenshot', () => {
        browser.saveTabbablePage('SaveMillions_FullPage_Tabbable', {});
    });
});