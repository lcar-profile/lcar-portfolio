export default function Badge({ label }: { label: string }) {
  return (
    <div className="px-2.5 py-1.5 bg-foreground/10 border-1 rounded-4xl text-xs">
      {label}
    </div>
  );
}
