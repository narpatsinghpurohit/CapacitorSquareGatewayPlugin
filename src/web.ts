import { WebPlugin } from '@capacitor/core';

import type { SquareGatewayPluginPlugin } from './definitions';

export class SquareGatewayPluginWeb extends WebPlugin implements SquareGatewayPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
