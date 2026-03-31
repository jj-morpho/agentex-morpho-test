const TOKEN_COLORS: Record<string, string> = {
  USDC: "#2775ca",
  USDT: "#26a17b",
  WETH: "#627eea",
  WBTC: "#f7931a",
  wstETH: "#00a3ff",
  weETH: "#7c3aed",
  cbBTC: "#0052ff",
  LBTC: "#f59e0b",
  USDtb: "#6366f1",
  EURCV: "#0ea5e9",
  AUSD: "#8b5cf6",
  DAM: "#ec4899",
};

export default function TokenIcon({ symbol, size = 32 }: { symbol: string; size?: number }) {
  const color = TOKEN_COLORS[symbol] || "#6b7280";
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold text-white shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.3,
      }}
    >
      {symbol.slice(0, 2)}
    </div>
  );
}
