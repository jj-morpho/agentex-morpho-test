import Link from "next/link";

function formatUsd(value: number): string {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
  return `$${value.toLocaleString()}`;
}

export default function Home() {
  // Aggregated stats from actual data
  const totalTvl = 2.4; // billions
  const totalMarkets = 1287;
  const totalVaults = 435;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--morpho-blue)]/5 rounded-full blur-[120px]" />
          <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-[var(--morpho-purple)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--morpho-border)] bg-[var(--morpho-surface)] text-sm text-[var(--morpho-text-secondary)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--morpho-green)] animate-pulse" />
              Live on Ethereum
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              The most efficient
              <br />
              <span className="bg-gradient-to-r from-[var(--morpho-blue)] to-[var(--morpho-purple)] bg-clip-text text-transparent">
                lending protocol
              </span>
            </h1>

            <p className="text-lg text-[var(--morpho-text-secondary)] mb-12 max-w-xl mx-auto">
              Earn optimized yield through curated vaults, or borrow against your
              crypto assets with the best rates on-chain.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="/earn"
                className="px-8 py-3.5 bg-[var(--morpho-blue)] hover:bg-[var(--morpho-blue-light)] rounded-xl text-sm font-semibold transition-colors"
              >
                Start Earning
              </Link>
              <Link
                href="/borrow"
                className="px-8 py-3.5 bg-[var(--morpho-surface)] border border-[var(--morpho-border)] hover:bg-[var(--morpho-surface-hover)] rounded-xl text-sm font-semibold transition-colors"
              >
                Borrow Assets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-[var(--morpho-border)] bg-[var(--morpho-surface)]/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">${totalTvl}B+</p>
              <p className="text-[var(--morpho-text-secondary)] text-sm mt-2">Total Value Locked</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{totalMarkets.toLocaleString()}</p>
              <p className="text-[var(--morpho-text-secondary)] text-sm mt-2">Markets</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{totalVaults}</p>
              <p className="text-[var(--morpho-text-secondary)] text-sm mt-2">Vaults</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">2</p>
              <p className="text-[var(--morpho-text-secondary)] text-sm mt-2">Chains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Earn Card */}
          <Link href="/earn" className="group">
            <div className="bg-[var(--morpho-surface)] border border-[var(--morpho-border)] rounded-2xl p-8 hover:border-[var(--morpho-blue)]/40 transition-all h-full">
              <div className="w-12 h-12 rounded-xl bg-[var(--morpho-green)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--morpho-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Yield</h3>
              <p className="text-[var(--morpho-text-secondary)] mb-6">
                Deposit into curated vaults managed by risk experts like Steakhouse Financial.
                Get optimized yield across multiple isolated markets.
              </p>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1.5 rounded-lg bg-[var(--morpho-green)]/10 text-[var(--morpho-green)] text-sm font-medium">
                  Up to 5.87% APY
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[var(--morpho-surface-hover)] text-[var(--morpho-text-secondary)] text-sm">
                  13 Steakhouse Vaults
                </div>
              </div>
              <div className="mt-6 text-[var(--morpho-blue)] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore Vaults
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Borrow Card */}
          <Link href="/borrow" className="group">
            <div className="bg-[var(--morpho-surface)] border border-[var(--morpho-border)] rounded-2xl p-8 hover:border-[var(--morpho-blue)]/40 transition-all h-full">
              <div className="w-12 h-12 rounded-xl bg-[var(--morpho-blue)]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--morpho-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Borrow</h3>
              <p className="text-[var(--morpho-text-secondary)] mb-6">
                Borrow stablecoins and assets against bluechip collateral like wstETH, WBTC,
                and cbBTC on isolated markets with transparent rates.
              </p>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1.5 rounded-lg bg-[var(--morpho-blue)]/10 text-[var(--morpho-blue)] text-sm font-medium">
                  From 1.86% APY
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[var(--morpho-surface-hover)] text-[var(--morpho-text-secondary)] text-sm">
                  8 Bluechip Markets
                </div>
              </div>
              <div className="mt-6 text-[var(--morpho-blue)] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore Markets
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-16">How Morpho Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--morpho-blue)]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-[var(--morpho-blue)]">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Isolated Markets</h3>
            <p className="text-[var(--morpho-text-secondary)] text-sm">
              Each market is an independent lending pool with its own collateral, loan asset, oracle, and risk parameters.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--morpho-blue)]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-[var(--morpho-blue)]">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Curated Vaults</h3>
            <p className="text-[var(--morpho-text-secondary)] text-sm">
              Risk curators allocate vault deposits across markets to optimize yield while managing risk exposure.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--morpho-blue)]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-[var(--morpho-blue)]">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Better Rates</h3>
            <p className="text-[var(--morpho-text-secondary)] text-sm">
              Minimal governance overhead and efficient design provide better rates for both lenders and borrowers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--morpho-border)] bg-[var(--morpho-surface)]/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-[var(--morpho-text-secondary)]">
          <p>Morpho Protocol</p>
          <p>Data sourced from Morpho Blue on Ethereum</p>
        </div>
      </footer>
    </main>
  );
}
