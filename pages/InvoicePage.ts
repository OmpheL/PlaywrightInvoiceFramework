import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InvoicePage extends BasePage {

    readonly createInvoice =
        this.page.getByRole('button', { name: 'New Invoice' });

    readonly createNewInvoiceHeading =
        this.page.getByRole('heading', { level: 2, name: /Create New Invoice/ });

    readonly clientName =
        this.page.getByPlaceholder('Type client name or email...');

    readonly address =
        this.page.getByPlaceholder('Enter client address...');

    readonly addCourse =
        this.page.getByRole('button', { name: /Add Item/ });

    readonly courseRows =
        this.page.getByRole('row');

    readonly courseSelects =
        this.page.getByRole('combobox');

    readonly itemRows =
        this.page.getByRole('row')
        .filter({ has: this.page.getByRole('combobox') });

   readonly totalAmount =
        this.page.locator('text=Total:')
            .locator('..')
            .getByText(/R/)
            .first();

    readonly dueDate =
        this.page.locator('input[type="date"]');

    readonly createInvoiceButton =
        this.page.getByRole('button', { name: /Create Invoice/ });

    readonly successMessage =
        this.page.getByText('Invoice created successfully');

    readonly invoiceNumber =
        this.page.getByText(/^INV-\d+$/);

    constructor(page: Page) {
        super(page);
    }

    async createInvoiceToYourself(data: any) {

        await this.click(this.createInvoice);

        await expect(this.createNewInvoiceHeading).toBeVisible();

        await this.fill(this.clientName, data.clientName);

        await this.fill(this.address, data.address);

        await this.page.locator('body').click();

       for (let i = 0; i < 4; i++) {
            await this.addCourseAndSelect(
                '31b1143b-aa19-4c20-bdf6-6700484b0dcb'
            );
}

        await expect(this.totalAmount).toBeVisible();

        await this.fill(this.dueDate, data.dueDate);

        //await this.status.selectOption({ value: 'paid' });

        await this.click(this.createInvoiceButton);
    }

    async addCourseAndSelect(courseId: string) {
        await this.addCourse.click();

        const newSelect = this.itemRows.last().getByRole('combobox');

        await expect(newSelect).toBeVisible();

        await newSelect.selectOption(courseId);
    }

    
    async verifyInvoiceCreated() {

    await expect(this.invoiceNumber).toBeVisible();

    await expect(this.invoiceNumber).toContainText('INV-');
}
}