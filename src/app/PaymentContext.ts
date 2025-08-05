import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  private provider;

  constructor(factory: PaymentProviderFactory) {
    this.provider = factory.createPaymentProvider();
  }

  processPayment(amount: number): void {
    this.provider.authorize(amount);

    const transactionId = this.generateTransactionId();
    this.provider.capture(transactionId);
    this.provider.refund(transactionId);
  }

  private generateTransactionId(): string {
    return Math.random().toString(36).substring(2, 8);
  }
}
