export interface SquareGatewayPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
