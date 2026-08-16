import type { HelpOption } from "../../types/nayra";
import { QuickHelpCard } from "../home/QuickHelpCard";

export function HelpCenter({ options, onOpen }: { options: HelpOption[]; onOpen: (id: string) => void }) {
  return (
    <div className="help-grid">
      {options.map((option) => <QuickHelpCard key={option.id} option={option} onOpen={() => onOpen(option.id)} />)}
    </div>
  );
}
