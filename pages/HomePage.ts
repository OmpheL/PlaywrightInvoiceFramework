import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    readonly welcome =
        this.page.getByText('Welcome');

    readonly menu =
        this.page.getByRole('button', { name: 'Menu' });

    readonly adminPanel =
        this.page.getByRole('button', { name: 'Admin Panel' });

    constructor(page: Page) {
        super(page);
    }

    async verifyHomePage() {
        await expect(this.welcome).toBeVisible();
    }

    async navigateToAdminPanel() {

        await this.click(this.menu);
        await this.click(this.adminPanel);

    }
}