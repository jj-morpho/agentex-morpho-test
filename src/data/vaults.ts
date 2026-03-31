export interface Vault {
  address: string;
  name: string;
  asset: {
    symbol: string;
    address: string;
  };
  apyPct: string;
  tvlUsd: string;
  feePct: string;
  rewards?: {
    asset: { symbol: string };
    supplyAprPct: string;
  }[];
}

export const steakhouseVaults: Vault[] = [
  {
    address: "0xbeef01735c132ada46aa9aa4c54623caa92a64cb",
    name: "Steakhouse USDC",
    asset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    apyPct: "1.78",
    tvlUsd: "204325835",
    feePct: "0",
  },
  {
    address: "0xbeef047a543e45807105e51a8bbefcc5950fcfba",
    name: "Steakhouse USDT",
    asset: { symbol: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
    apyPct: "2.51",
    tvlUsd: "140956715",
    feePct: "0",
  },
  {
    address: "0xbeef346d7099865208ff331e4f648f4154ddaa05",
    name: "Steakhouse Reservoir USDC",
    asset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    apyPct: "5.87",
    tvlUsd: "104751132",
    feePct: "0",
    rewards: [{ asset: { symbol: "DAM" }, supplyAprPct: "2.45" }],
  },
  {
    address: "0xbeefff209270748ddd194831b3fa287a5386f5bc",
    name: "Smokehouse USDC",
    asset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    apyPct: "5.39",
    tvlUsd: "57524288",
    feePct: "0",
  },
  {
    address: "0xbeef050ecd6a16c4e7bffbb52ebba7846c4b8cd4",
    name: "Steakhouse ETH",
    asset: { symbol: "WETH", address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" },
    apyPct: "1.51",
    tvlUsd: "51469846",
    feePct: "5",
  },
  {
    address: "0xbeefc1cdafc5b4a649b54d07afc6bf0f75c6f4e2",
    name: "Steakhouse Ethena USDtb",
    asset: { symbol: "USDtb", address: "0xc139190f447e929f090edeb554d95abb8b18ac1c" },
    apyPct: "1.45",
    tvlUsd: "50005236",
    feePct: "5",
  },
  {
    address: "0xa0804346780b4c2e3be118ac957d1db82f9d7484",
    name: "Smokehouse USDT",
    asset: { symbol: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
    apyPct: "3.11",
    tvlUsd: "40337705",
    feePct: "0",
  },
  {
    address: "0x75741a12b36d181f44f389e0c6b1e0210311e3ff",
    name: "Steakhouse EURCV",
    asset: { symbol: "EURCV", address: "0x5f7827fdeb7c20b443265fc2f40845b715385ff2" },
    apyPct: "0.17",
    tvlUsd: "36607124",
    feePct: "0",
  },
  {
    address: "0xbeeffff0629438ad198c47f80d66fa4be5c0caf6",
    name: "Grove x Steakhouse High Yield AUSD",
    asset: { symbol: "AUSD", address: "0x00000000efe302beaa2b3e6e1b18d08d69a9012a" },
    apyPct: "2.14",
    tvlUsd: "18641724",
    feePct: "0",
  },
  {
    address: "0xbeef1f5bd88285e5b239b6aacb991d38cca23ac9",
    name: "Steakhouse infiniFi USDC",
    asset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    apyPct: "5.15",
    tvlUsd: "8535093",
    feePct: "5",
  },
  {
    address: "0x833adaef212c5cd3f78906b44bbfb18258f238f0",
    name: "Smokehouse wstETH",
    asset: { symbol: "wstETH", address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0" },
    apyPct: "0.26",
    tvlUsd: "6229527",
    feePct: "10",
  },
  {
    address: "0xbeef390d2e65d6e43a67875106d4a48f700f2832",
    name: "Safe x Smokehouse USDC",
    asset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    apyPct: "4.77",
    tvlUsd: "5500245",
    feePct: "11.5",
  },
  {
    address: "0xbeefce6c76c7d7a8066562fe9ff0e343a52dd92f",
    name: "Safe x Steakhouse USDC",
    asset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    apyPct: "1.60",
    tvlUsd: "4481375",
    feePct: "10",
  },
];
