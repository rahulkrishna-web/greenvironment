import LeadSection from "@/components/lead-section";
import { TimelineView } from "@/components/global-expansion/timeline-view";
import { RealMapView } from "@/components/global-expansion/real-map-view";
import { CardsView } from "@/components/global-expansion/cards-view";
import { Separator } from "@/components/ui/separator";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-4 text-center text-sm font-medium">
        TEST PAGE - GLOBAL EXPANSION VARIATIONS
      </div>
      
      <LeadSection />
      
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        
        {/* Option 1: Timeline View */}
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Option 1: Timeline View</h2>
            <TimelineView />
        </div>

        {/* Option 2: Map View */}
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Option 2: Map View (Realistic)</h2>
            <RealMapView />
        </div>

        {/* Option 3: Cards View */}
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Option 3: Cards View</h2>
            <CardsView />
        </div>

      </div>
    </main>
  );
}
