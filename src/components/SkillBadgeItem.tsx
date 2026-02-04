import * as React from "react";

interface SkillBadgeProps {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[70px]">
      <div className="flex items-center gap-1">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="font-medium text-sm">{name}</span>
      </div>
      <div className="flex gap-0.5 mt-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`block w-3 h-1.5 rounded-full ${i <= level ? "bg-primary" : "bg-muted-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
