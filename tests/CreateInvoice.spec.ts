import { test } from '../src/fixtures/fixtures';

test('Create Invoice to Yourself', async ({
    auth,
    homePage,
    adminPanelPage,
    invoicePage,
    users,
    invoiceData
}) => {

    // LOGIN (FLOW LAYER)
    await auth.loginAsAdmin(
        users.admin.email,
        users.admin.password
    );

    // VERIFY HOME
    await homePage.expectLoaded();

    // NAVIGATION
    await homePage.navigateToAdminPanel();
    await adminPanelPage.openInvoices();

    // CREATE INVOICE
    await invoicePage.openCreateInvoice();

    await invoicePage.fillClient(
        invoiceData.clientName,
        invoiceData.address
    );

    await invoicePage.clickAnywhere();

    for (const course of invoiceData.courses) {
        await invoicePage.addCourse(course.value);
    }

    await invoicePage.submit();

    // ASSERTION
    await invoicePage.expectInvoiceCreated();
});