import { PackageSearch } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
      <PackageSearch className="size-8 text-muted-foreground" />
      <p className="font-medium">No projects found.</p>
      <p className="text-sm text-muted-foreground">Try another keyword.</p>
    </div>
  );
}
