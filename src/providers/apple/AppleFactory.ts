import { PaymentProvider } from "../../core/PaymentProvider";
import { PaymentProviderFactory } from "../../core/PaymentProviderFactory";
import { ApplePaymentProvider } from "./ApplePaymentProvider";

export class AppleFactory implements PaymentProviderFactory {
  createPaymentProvider(): PaymentProvider {
    return new ApplePaymentProvider();
  }
}
