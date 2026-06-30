import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {

    readonly welcome = this.page.getByText('Welcome');
    readonly menu = this.page.getByRole('button', { name: 'Menu' });
    readonly adminPanel = this.page.getByRole('button', { name: 'Admin Panel' });

    async expectLoaded() {
        await expect(this.welcome).toBeVisible();
    }

    async navigateToAdminPanel() {
        await this.click(this.menu);
        await this.click(this.adminPanel);
    }
}