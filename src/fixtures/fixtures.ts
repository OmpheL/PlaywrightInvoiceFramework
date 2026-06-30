import { test as base } from '@playwright/test';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AdminPanelPage } from '../pages/AdminPanelPage';
import { InvoicePage } from '../pages/InvoicePage';

import { AuthFlow } from '../flows/AuthFlow';

import { users } from '../data/users';
import { invoiceData } from '../data/invoiceData';

type Fixtures = {
    landingPage: LandingPage;
    loginPage: LoginPage;
    homePage: HomePage;
    adminPanelPage: AdminPanelPage;
    invoicePage: InvoicePage;

    auth: AuthFlow;

    users: typeof users;
    invoiceData: typeof invoiceData;
};

export const test = base.extend<Fixtures>({

    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    adminPanelPage: async ({ page }, use) => {
        await use(new AdminPanelPage(page));
    },

    invoicePage: async ({ page }, use) => {
        await use(new InvoicePage(page));
    },

    auth: async ({ landingPage, loginPage }, use) => {
        await use(new AuthFlow(landingPage, loginPage));
    },

    users: async ({}, use) => {
        await use(users);
    },

    invoiceData: async ({}, use) => {
        await use(invoiceData);
    }
});

export { expect } from '@playwright/test';