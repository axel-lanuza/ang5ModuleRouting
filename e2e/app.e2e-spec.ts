import {AppPage} from './app.po';

describe('fresh-angular-with-webpack App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to my app!');
    });

    it('should increment the counter', () => {
        page.navigateTo();
        page.clickAddToCounter();
        expect(page.getCounterCount()).toEqual('1');
        // page.pause();
    });
});
