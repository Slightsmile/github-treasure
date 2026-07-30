interface StatsProps {
  totalProjects: number;
  totalCategories: number;
  lastUpdated: string;
}

export function Stats({ totalProjects, totalCategories, lastUpdated }: StatsProps) {
  const items = [
    { label: "Total Projects", value: totalProjects.toLocaleString() },
    { label: "Categories", value: totalCategories.toLocaleString() },
    {
      label: "Last Updated",
      value: new Date(lastUpdated).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    },
  ];

  return (
    <dl className="grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1 px-6 py-6 text-center">
          <dt className="text-sm text-muted-foreground">{item.label}</dt>
          <dd className="text-2xl font-semibold tracking-tight">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
