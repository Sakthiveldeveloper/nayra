import { helpOptions } from "../data/nayra.data";
import { HelpCenter } from "../components/help/HelpCenter";
import { SectionHeader } from "../components/common/SectionHeader";
import { SituationSafetyBanner } from "../components/situation/SituationSafetyBanner.tsx";

export function GetHelpPage() {
  return <div>
    <SectionHeader eyebrow="GET HELP" title="Start with what you need right now." description="If there is immediate danger, prioritise your safety and use the appropriate local emergency service." />
    <SituationSafetyBanner>For V0.1, NAYRA provides the structure. Before launch, we will replace placeholders with verified India-specific emergency, government and support resources.</SituationSafetyBanner>
    <HelpCenter options={helpOptions} onOpen={() => {}} />
    <div className="help-placeholder"><strong>Verified support directory — coming next</strong><p>Police, hospitals, One Stop Centres, NGOs, legal assistance and other verified support will be organised by location.</p></div>
  </div>;
}
