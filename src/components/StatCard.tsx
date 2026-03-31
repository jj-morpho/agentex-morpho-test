interface StatCardProps {
  label: string;
  value: string;
  subtitle?: string;
}

export default function StatCard({ label, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-[var(--morpho-surface)] border border-[var(--morpho-border)] rounded-xl p-6">
      <p className="text-[var(--morpho-text-secondary)] text-sm mb-1">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
      {subtitle && (
        <p className="text-[var(--morpho-text-secondary)] text-xs mt-1">{subtitle}</p>
      )}
    </div>
  );
}
