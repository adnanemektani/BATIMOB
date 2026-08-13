import {
  AudioLines,
  Compass,
  Hammer,
  Layers,
  LayoutGrid,
  PanelsTopLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIcons: LucideIcon[] = [
  Hammer,
  PanelsTopLeft,
  LayoutGrid,
  AudioLines,
  Layers,
  Compass,
];

export function ServiceIcon({ index }: { index: number }) {
  const Icon = serviceIcons[index] ?? Hammer;
  return <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />;
}