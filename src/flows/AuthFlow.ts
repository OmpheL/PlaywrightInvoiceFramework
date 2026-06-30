import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';

export class AuthFlow {

    constructor(
        private landingPage: LandingPage,
        private loginPage: LoginPage
    ) {}

    async loginAsAdmin(email: string, password: string) {
        await this.landingPage.open();
        await this.landingPage.clickLogin();

        await this.loginPage.login(email, password);
    }
}