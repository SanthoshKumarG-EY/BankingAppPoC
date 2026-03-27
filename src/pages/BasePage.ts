import { Locator, Page } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }       

    pageTitle() {
        return this.page.title();
    }

    pageURL() {
        return this.page.url();
    }   

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(element: Locator) {
        await element.click();
    }   

    async fillElement(element: Locator, value: string) {
        await element.fill(value);
    }   

    async getElementText(element: Locator) {
        return await element.textContent() || '';
    }

    async isElementVisible(element: Locator) {
        return await element.isVisible();
    }

    async isElementEnabled(element: Locator) {
        return await element.isEnabled();
    }

    async isElementChecked(element: Locator) {
        return await element.isChecked();
    }   

    async getElementAttribute(element: Locator, attributeName: string) {
        return await element.getAttribute(attributeName);
    }   

    async getElementValue(element: Locator) {
        return await element.inputValue();
    }

    async waitForElement(element: Locator, timeout: number = 5000) {
        await element.waitFor({ state: 'visible', timeout });
    }   

    async waitForElementToBeHidden(element: Locator, timeout: number = 5000) {
        await element.waitFor({ state: 'hidden', timeout });
    }

    async waitForElementToHaveText(element: Locator, text: string, timeout: number = 5000) {
        await element.waitFor({ state: 'visible', timeout });
        await element.waitFor({ state: 'attached', timeout });
        await element.waitFor({ state: 'hidden', timeout });
        await element.waitFor({ state: 'detached', timeout });
    }

}