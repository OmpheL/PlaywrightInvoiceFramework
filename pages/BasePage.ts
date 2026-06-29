import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) {}

    async goTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async safeClick(locator: Locator) {
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
          await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async select(locator: Locator, value: string) {
        await locator.selectOption({ label: value });
    }

    async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async verifyText(locator: Locator, expected: string) {
        await expect(locator).toHaveText(expected);
    }
}