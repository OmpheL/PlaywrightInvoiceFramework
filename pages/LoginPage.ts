import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly email =
        this.page.locator('#login-email');

    readonly password =
        this.page.locator('#login-password');

    readonly submit =
        this.page.locator('#login-submit');

    constructor(page: Page) {
        super(page);
    }

    async login(email: string, password: string) {

        await this.fill(this.email, email);
        await this.fill(this.password, password);
        await this.click(this.submit);

    }
}