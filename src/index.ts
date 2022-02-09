import { registerPlugin } from '@capacitor/core';

import type { SquareGatewayPluginPlugin } from './definitions';

const SquareGatewayPlugin = registerPlugin<SquareGatewayPluginPlugin>('SquareGatewayPlugin', {
  web: () => import('./web').then(m => new m.SquareGatewayPluginWeb()),
});

export * from './definitions';
export { SquareGatewayPlugin };
