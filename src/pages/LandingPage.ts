import { BasePage } from './BasePage';

export class LandingPage extends BasePage {

    readonly loginButton = this.page.getByRole('button', { name: 'Login' });

    async open() {
        await this.goTo('/');
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }
}