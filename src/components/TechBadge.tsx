import { Tag } from "@/once-ui/components";

interface TechBadgeProps {
  label: string;
  tone?: "brand" | "neutral" | "info" | "success" | "warning";
}

export function TechBadge({ label, tone = "neutral" }: TechBadgeProps) {
  return (
    <Tag size="s" variant={tone}>
      {label}
    </Tag>
  );
}
