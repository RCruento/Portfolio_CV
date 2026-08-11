import * as React from "react";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border/50 text-sm font-medium cursor-default transition-all duration-200 hover:border-primary/60 hover:ring-2 hover:ring-primary/20 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5">
      {icon && <span className="text-lg">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}
