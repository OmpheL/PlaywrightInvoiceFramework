import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class InvoicePage extends BasePage {

    readonly createInvoice = this.page.getByRole('button', { name: 'New Invoice' });
    readonly clientName = this.page.getByPlaceholder('Type client name or email...');
    readonly address = this.page.getByPlaceholder('Enter client address...');
    readonly addCourseButton = this.page.getByRole('button', { name: /Add Course/ });
    readonly submitBtn = this.page.getByRole('button', { name: /Create Invoice/ });

    readonly itemRows = this.page.getByRole('row');
    readonly invoiceNumber = this.page.getByText(/^INV-\d+$/);

    async openCreateInvoice() {
        await this.click(this.createInvoice);
    }

    async fillClient(name: string, address: string) {
        await this.fill(this.clientName, name);
        await this.fill(this.address, address);
    }
    //CLICK ANYWHERE
    async clickAnywhere() {
        await this.page.mouse.click(0, 0);
    }

    async addCourse(courseId: string) {
        await this.click(this.addCourseButton); 

        const select = this.itemRows.last().getByRole('combobox');
        await select.selectOption(courseId);
    }

    async submit() {
        await this.click(this.submitBtn);
    }

    async expectInvoiceCreated() {
        await expect(this.invoiceNumber).toBeVisible();
    }
}