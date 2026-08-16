import { resources } from "../data/nayra.data";
import { ResourceCard } from "../components/resources/ResourceCard";
import { SectionHeader } from "../components/common/SectionHeader";

export function ResourcesPage() {
  return <div>
    <SectionHeader eyebrow="RESOURCES" title="Trusted information. Clear next steps." description="NAYRA will prioritise official and verified resources over random links." />
    <div className="resource-filters"><button className="filter active">All</button><button className="filter">Rights</button><button className="filter">Safety</button><button className="filter">Health</button><button className="filter">Support</button></div>
    <div className="resource-grid">{resources.map((r) => <ResourceCard key={r.id} resource={r} />)}</div>
  </div>;
}
