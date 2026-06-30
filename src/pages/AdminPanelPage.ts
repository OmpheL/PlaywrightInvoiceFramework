import { BasePage } from './BasePage';

export class AdminPanelPage extends BasePage {

    readonly invoices = this.page.getByRole('button', { name: 'Invoices' });

    async openInvoices() {
        await this.click(this.invoices);
    }
}