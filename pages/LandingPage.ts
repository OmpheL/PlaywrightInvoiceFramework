import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LandingPage extends BasePage {

    readonly loginButton =
        this.page.getByRole('button', { name: 'Login' });

    async open() {
        await this.goTo('/');
    }

    async acceptAlert() {

        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }
}