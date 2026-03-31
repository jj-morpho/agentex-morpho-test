import { steakhouseVaults } from "@/data/vaults";
import TokenIcon from "@/components/TokenIcon";
import StatCard from "@/components/StatCard";

function formatUsd(value: string): string {
  const num = parseFloat(value);
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(0)}K`;
  return `$${num.toFixed(0)}`;
}

export default function EarnPage() {
  const totalTvl = steakhouseVaults.reduce(
    (acc, v) => acc + parseFloat(v.tvlUsd),
    0
  );
  const avgApy =
    steakhouseVaults.reduce((acc, v) => acc + parseFloat(v.apyPct), 0) /
    steakhouseVaults.length;
  const maxApy = Math.max(...steakhouseVaults.map((v) => parseFloat(v.apyPct)));

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Earn</h1>
        <p className="text-[var(--morpho-text-secondary)]">
          Steakhouse Financial curated vaults on Ethereum — optimized yield across
          isolated Morpho Blue markets.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard
          label="Total TVL"
          value={formatUsd(totalTvl.toString())}
          subtitle="Across all Steakhouse vaults"
        />
        <StatCard
          label="Average APY"
          value={`${avgApy.toFixed(2)}%`}
          subtitle="Weighted by vault count"
        />
        <StatCard
          label="Best APY"
          value={`${maxApy.toFixed(2)}%`}
          subtitle="Steakhouse Reservoir USDC"
        />
      </div>

      {/* Vaults Table */}
      <div className="bg-[var(--morpho-surface)] border border-[var(--morpho-border)] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--morpho-border)]">
                <th className="text-left text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Vault
                </th>
                <th className="text-left text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Asset
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Net APY
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Total Deposits
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Fee
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4">
                  Rewards
                </th>
                <th className="text-right text-xs text-[var(--morpho-text-secondary)] font-medium px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {steakhouseVaults.map((vault) => (
                <tr
                  key={vault.address}
                  className="border-b border-[var(--morpho-border)] last:border-0 hover:bg-[var(--morpho-surface-hover)] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <TokenIcon symbol={vault.asset.symbol} />
                      <div>
                        <p className="font-medium text-sm">{vault.name}</p>
                        <p className="text-xs text-[var(--morpho-text-secondary)]">
                          {vault.address.slice(0, 6)}...{vault.address.slice(-4)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--morpho-surface-hover)] text-xs font-medium">
                      {vault.asset.symbol}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[var(--morpho-green)] font-semibold text-sm">
                      {parseFloat(vault.apyPct).toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm">{formatUsd(vault.tvlUsd)}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm text-[var(--morpho-text-secondary)]">
                      {vault.feePct === "0" ? "None" : `${vault.feePct}%`}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {vault.rewards && vault.rewards.length > 0 ? (
                      <span className="px-2 py-1 rounded-md bg-[var(--morpho-purple)]/10 text-[var(--morpho-purple)] text-xs font-medium">
                        +{vault.rewards[0].supplyAprPct}% {vault.rewards[0].asset.symbol}
                      </span>
                    ) : (
                      <span className="text-sm text-[var(--morpho-text-secondary)]">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-1.5 bg-[var(--morpho-blue)]/10 text-[var(--morpho-blue)] hover:bg-[var(--morpho-blue)]/20 rounded-lg text-xs font-medium transition-colors">
                      Deposit
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
          Steakhouse Financial is a risk curator that manages vault allocations across Morpho Blue
          isolated markets. Vaults are non-custodial and operate transparently on-chain. APYs shown
          are net of fees and include rewards where applicable.
        </p>
      </div>
    </main>
  );
}
