export default function SectionHead({ index, label, right }: { index: string; label: string; right?: string }) {
  return (
    <div className="meta flex justify-between border-b border-current/20 pb-4 opacity-70">
      <span>{index} / {label}</span>{right && <span>{right}</span>}
    </div>
  );
}
