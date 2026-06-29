import { test } from '@playwright/test';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AdminPanelPage } from '../pages/AdminPanelPage';
import { InvoicePage } from '../pages/InvoicePage';

import { users } from '../data/users';
import { invoiceData } from '../data/invoiceData';

test('Create Invoice to Yourself', async ({ page }) => {

    const landing = new LandingPage(page);
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const admin = new AdminPanelPage(page);
    const invoice = new InvoicePage(page);

    // Open application
    await landing.open();

    // Accept alert
    await landing.acceptAlert();

    // Login
    await landing.clickLogin();

    await login.login(
        users.admin.email,
        users.admin.password
    );

    // Verify home page
    await home.verifyHomePage();

    // Navigate to Admin Panel
    await home.navigateToAdminPanel();

    // Open Invoices
    await admin.clickInvoices();

    // Create Invoice
    await invoice.createInvoiceToYourself(invoiceData);

    // Validate invoice created
    await invoice.verifyInvoiceCreated();

});