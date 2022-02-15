import { WebPlugin } from '@capacitor/core';

import type { SquareGatewayPluginPlugin } from './definitions';

export class SquareGatewayPluginWeb extends WebPlugin implements SquareGatewayPluginPlugin {
  async initApp(_options: { applicationId: string; }): Promise<{ message: string }> {
    throw new Error("Method not implemented.");
  }

  async startTransaction(_options: {
    totalAmount: number,
    currencyCode: string,
    allowedPaymentMethods?: string[],
    callbackUrl?: string
  }): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async handleIosResponse(_options: { url: string; }): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
