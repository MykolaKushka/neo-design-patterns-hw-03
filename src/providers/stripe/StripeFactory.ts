import { PaymentProvider } from "../../core/PaymentProvider";
import { PaymentProviderFactory } from "../../core/PaymentProviderFactory";
import { StripePaymentProvider } from "./StripePaymentProvider";

export class StripeFactory implements PaymentProviderFactory {
  createPaymentProvider(): PaymentProvider {
    return new StripePaymentProvider();
  }
}
