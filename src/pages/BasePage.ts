// src/pages/BasePage.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async goTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }
}