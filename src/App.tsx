import { useState, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import {
  FiniteDraggableContainer,
  GridBody,
  GridItem,
} from "./components/carousel/FiniteDraggableContainer";
import { AdCreativeCard } from "./components/carousel/AdCreativeCard";
import { AdInspectorModal } from "./components/carousel/AdInspectorModal";
import { AnalyticsDashboard } from "./components/analytics/AnalyticsDashboard";
import { ContactFooter } from "./components/footer/ContactFooter";
import { campaignCreatives } from "./data/campaignData";
import type { CreativeSlide } from "./types/campaign";

export function App() {
  const [selectedCreative, setSelectedCreative] = useState<CreativeSlide | null>(
    null
  );

  const creativeSectionRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToAnalytics = () => {
    const el = document.getElementById("analytics-command-center");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCreative = () => {
    if (creativeSectionRef.current) {
      creativeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-notion-dark-bg text-notion-ink dark:text-notion-dark-text flex flex-col font-sans selection:bg-notion-primary selection:text-white transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar
        onScrollToAnalytics={handleScrollToAnalytics}
        onScrollToCreative={handleScrollToCreative}
      />

      <main className="flex-1 flex flex-col">
        {/* Notion Dark Hero Band */}
        <HeroSection onScrollToAnalytics={handleScrollToAnalytics} />

        {/* Carousel Showcase Section */}
        <div id="creative-showcase" ref={creativeSectionRef} className="py-6 bg-notion-surface/30 dark:bg-notion-dark-surface/40 border-b border-notion-hairline dark:border-notion-dark-hairline scroll-mt-16 transition-colors duration-200">
          <FiniteDraggableContainer
            variant="default"
            onFinaleVisible={() => {}}
          >
            <GridBody>
              {campaignCreatives.map((creative, index) => (
                <GridItem
                  key={creative.id}
                  customDelay={index * 0.08}
                  onClick={() => {
                    if (creative.isFinale) {
                      handleScrollToAnalytics();
                    } else {
                      setSelectedCreative(creative);
                    }
                  }}
                >
                  <AdCreativeCard
                    creative={creative}
                    variant="default"
                    onInspect={setSelectedCreative}
                    onJumpToAnalytics={handleScrollToAnalytics}
                  />
                </GridItem>
              ))}
            </GridBody>
          </FiniteDraggableContainer>
        </div>

        {/* Campaign Analytics Section */}
        <AnalyticsDashboard />
      </main>

      {/* Ad Inspector Modal */}
      <AdInspectorModal
        creative={selectedCreative}
        onClose={() => setSelectedCreative(null)}
      />

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
