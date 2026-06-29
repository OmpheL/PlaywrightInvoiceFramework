import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPanelPage extends BasePage {

    readonly invoices =
        this.page.getByRole('button', { name: 'Invoices' });

    constructor(page: Page) {
        super(page);
    }

    async clickInvoices() {
        await this.click(this.invoices);
    }
}