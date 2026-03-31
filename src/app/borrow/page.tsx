import { bluechipMarkets } from "@/data/markets";
import TokenIcon from "@/components/TokenIcon";
import StatCard from "@/components/StatCard";

function formatUsd(value: string): string {
  const num = parseFloat(value);
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(0)}K`;
  return `$${num.toFixed(0)}`;
}

function formatPct(value: string): string {
  return `${(parseFloat(value) * 100).toFixed(1)}%`;
}

export default function BorrowPage() {
  const totalBorrowed = bluechipMarkets.reduce(
    (acc, m) => acc + parseFloat(m.borrowAssetsUsd),
    0
  );
  const totalLiquidity = bluechipMarkets.reduce(
    (acc, m) => acc + parseFloat(m.liquidityAssetsUsd),
    0
  );
  const avgBorrowRate =
    bluechipMarkets.reduce((acc, m) => acc + parseFloat(m.borrowApyPct), 0) /
    bluechipMarkets.length;

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Borrow</h1>
        <p className="text-[var(--morpho-text-secondary)]">
          Borrow against bluechip collateral on Morpho Blue isolated markets —
          wstETH, WBTC, cbBTC, weETH, and more.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard
          label="Total Borrowed"
          value={formatUsd(totalBorrowed.toString())}
          subtitle="Across bluechip markets"
        />
        <StatCard
          label="Available Liquidity"
          value={formatUsd(totalLiquidity.toString())}
          subtitle="Ready to borrow"
        />
        <StatCard
          label="Avg. Borrow Rate"
          value={`${avgBorrowRate.toFixed(2)}%`}
          subtitle="Across all markets"
        />
      </div>

      {/* Markets Table */}
      <div className="bg-[var(--morpho-surface)] border border-[var(--morpho-border)] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--morpho-border)]">
                <th className="text-left text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Market
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Borrow APY
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Supply APY
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  LLTV
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Total Borrowed
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Liquidity
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Utilization
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {bluechipMarkets.map((market) => (
                <tr
                  key={market.id}
                  className="border-b border-[var(--morpho-border)] last:border-0 hover:bg-[var(--morpho-surface-hover)] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <TokenIcon symbol={market.collateralAsset.symbol} size={28} />
                        <TokenIcon symbol={market.loanAsset.symbol} size={28} />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {market.collateralAsset.symbol} / {market.loanAsset.symbol}
                        </p>
                        <p className="text-xs text-[var(--morpho-text-secondary)]">
                          {market.id.slice(0, 8)}...{market.id.slice(-4)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[var(--morpho-blue-light)] font-semibold text-sm">
                      {parseFloat(market.borrowApyPct).toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[var(--morpho-green)] font-semibold text-sm">
                      {parseFloat(market.supplyApyPct).toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm">
                      {formatPct(market.lltv)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm">{formatUsd(market.borrowAssetsUsd)}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm">{formatUsd(market.liquidityAssetsUsd)}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {/* Utilization bar */}
                    <div className="flex items-center gap-2 justify-end">
                      <div className="w-16 h-1.5 bg-[var(--morpho-border)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--morpho-blue)] rounded-full"
                          style={{
                            width: `${parseFloat(market.utilization) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-[var(--morpho-text-secondary)]">
                        {(parseFloat(market.utilization) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-1.5 bg-[var(--morpho-blue)]/10 text-[var(--morpho-blue)] hover:bg-[var(--morpho-blue)]/20 rounded-lg text-xs font-medium transition-colors">
                      Borrow
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 p-4 rounded-xl border border-[var(--morpho-border)] bg-[var(--morpho-surface)]/50">
        <p className="text-xs text-[var(--morpho-text-secondary)]">
          Morpho Blue markets are isolated lending pools — each with independent risk parameters.
          LLTV (Liquidation Loan-to-Value) is the maximum borrowing ratio before liquidation.
          Bluechip collateral markets shown include wstETH, WBTC, cbBTC, weETH, and LBTC.
          Borrow rates are variable and determined by utilization.
        </p>
      </div>
    </main>
  );
}
