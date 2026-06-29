import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InvoicePage extends BasePage {

    readonly createInvoice =
        this.page.getByRole('button', { name: 'New Invoice' });

    readonly clientName =
        this.page.locator('#clientName');

    readonly address =
        this.page.locator('#address');

    readonly addCourse =
        this.page.getByRole('button', { name: 'Add Course' });

    readonly total =
        this.page.locator('#invoiceTotal');

    readonly dueDate =
        this.page.locator('#dueDate');

    readonly status =
        this.page.locator('#status');

    readonly submit =
        this.page.getByRole('button', { name: 'Create Invoice' });

    readonly successMessage =
        this.page.getByText('Invoice created successfully');

    constructor(page: Page) {
        super(page);
    }

    async createInvoiceToYourself(data: any) {

        await this.click(this.createInvoice);

        await this.fill(this.clientName, data.clientName);

        await this.fill(this.address, data.address);

        for (const course of data.courses) {

            await this.click(this.addCourse);

            await this.page.locator('.course-select')
                .last()
                .selectOption({ label: course.name });

            await this.page.locator('.description')
                .last()
                .fill(course.description);
        }

        await expect(this.total).toHaveText('R2800');

        await this.fill(this.dueDate, data.dueDate);

        await this.select(this.status, 'Paid');

        await this.click(this.submit);

    }

    async verifyInvoiceCreated() {

        await expect(this.successMessage)
            .toBeVisible();

        await expect(this.page.getByText('Your Name Pty Ltd'))
            .toBeVisible();
    }
}