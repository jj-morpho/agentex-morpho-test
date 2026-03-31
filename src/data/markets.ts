export interface Market {
  id: string;
  loanAsset: {
    symbol: string;
    address: string;
  };
  collateralAsset: {
    symbol: string;
    address: string;
  };
  lltv: string;
  borrowApyPct: string;
  supplyApyPct: string;
  supplyAssetsUsd: string;
  borrowAssetsUsd: string;
  liquidityAssetsUsd: string;
  utilization: string;
}

// Bluechip collateral markets: wstETH, WBTC, cbBTC, weETH
export const bluechipMarkets: Market[] = [
  {
    id: "0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64",
    loanAsset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    collateralAsset: { symbol: "cbBTC", address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf" },
    lltv: "0.86",
    borrowApyPct: "2.61",
    supplyApyPct: "1.79",
    supplyAssetsUsd: "344489787",
    borrowAssetsUsd: "236785756",
    liquidityAssetsUsd: "107704031",
    utilization: "0.6873",
  },
  {
    id: "0xe7e9694b754c4d4f7e21faf7223f6fa71abaeb10296a4c43a54a7977149687d2",
    loanAsset: { symbol: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
    collateralAsset: { symbol: "wstETH", address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0" },
    lltv: "0.86",
    borrowApyPct: "2.95",
    supplyApyPct: "2.51",
    supplyAssetsUsd: "173865210",
    borrowAssetsUsd: "148274821",
    liquidityAssetsUsd: "25590389",
    utilization: "0.8528",
  },
  {
    id: "0x3a85e619751152991742810df6ec69ce473daef99e28a64ab2340d7b7ccfee49",
    loanAsset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    collateralAsset: { symbol: "WBTC", address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
    lltv: "0.86",
    borrowApyPct: "2.61",
    supplyApyPct: "1.78",
    supplyAssetsUsd: "120128927",
    borrowAssetsUsd: "82196074",
    liquidityAssetsUsd: "37932853",
    utilization: "0.6842",
  },
  {
    id: "0xb8fc70e82bc5bb53e773626fcc6a23f7eefa036918d7ef216ecfb1950a94a85e",
    loanAsset: { symbol: "WETH", address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" },
    collateralAsset: { symbol: "wstETH", address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0" },
    lltv: "0.965",
    borrowApyPct: "1.86",
    supplyApyPct: "1.60",
    supplyAssetsUsd: "86203589",
    borrowAssetsUsd: "74087874",
    liquidityAssetsUsd: "12115715",
    utilization: "0.8594",
  },
  {
    id: "0x37e7484d642d90f14451f1910ba4b7b8e4c3ccdd0ec28f8b2bdb35479e472ba7",
    loanAsset: { symbol: "WETH", address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" },
    collateralAsset: { symbol: "weETH", address: "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee" },
    lltv: "0.945",
    borrowApyPct: "1.88",
    supplyApyPct: "1.60",
    supplyAssetsUsd: "80976219",
    borrowAssetsUsd: "69074104",
    liquidityAssetsUsd: "11902114",
    utilization: "0.8530",
  },
  {
    id: "0xa921ef34e2fc7a27ccc50ae7e4b154e16c9799d3387076c421423ef52ac4df99",
    loanAsset: { symbol: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
    collateralAsset: { symbol: "WBTC", address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
    lltv: "0.86",
    borrowApyPct: "2.86",
    supplyApyPct: "2.51",
    supplyAssetsUsd: "62360117",
    borrowAssetsUsd: "54852132",
    liquidityAssetsUsd: "7507985",
    utilization: "0.8796",
  },
  {
    id: "0xb323495f7e4148be5643a4ea4a8221eef163e4bccfdedc2a6f4696baacbc86cc",
    loanAsset: { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    collateralAsset: { symbol: "wstETH", address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0" },
    lltv: "0.86",
    borrowApyPct: "2.55",
    supplyApyPct: "1.71",
    supplyAssetsUsd: "73208568",
    borrowAssetsUsd: "49419378",
    liquidityAssetsUsd: "23789189",
    utilization: "0.6750",
  },
  {
    id: "0xf6a056627a51e511ec7f48332421432ea6971fc148d8f3c451e14ea108026549",
    loanAsset: { symbol: "WBTC", address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
    collateralAsset: { symbol: "LBTC", address: "0x8236a87084f8b84306f72007f36f2618a5634494" },
    lltv: "0.945",
    borrowApyPct: "0.07",
    supplyApyPct: "0.04",
    supplyAssetsUsd: "47819893",
    borrowAssetsUsd: "27815828",
    liquidityAssetsUsd: "20004065",
    utilization: "0.5816",
  },
];
