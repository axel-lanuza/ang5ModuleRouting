import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    clickAddToCounter() {
        element(by.id('counter-increment')).click();
        //this.pause();
    }

    getCounterCount() {
        return element(by.id('counter-count')).getText();
    }

    pause() {
        browser.pause();
    }
}
