import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ContributeModal } from './components/ContributeModal';

// Views
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { DossierView } from './views/DossierView';
import { AiQaView } from './views/AiQaView';
import { SourcesView } from './views/SourcesView';
import { AboutView } from './views/AboutView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('trang-chu');
  const [selectedHouseId, setSelectedHouseId] = useState<string>('nha-ruong-hue');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContributeOpen, setIsContributeOpen] = useState(false);

  // Global hotkeys (Ctrl+K / Cmd+K to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsContributeOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (route: PageRoute, houseId?: string) => {
    if (houseId) {
      setSelectedHouseId(houseId);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fffdfa] text-[#2c221e] flex flex-col font-sans selection:bg-[#ede0d4] selection:text-[#6c4e36]">
      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContribute={() => setIsContributeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute === 'trang-chu' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {currentRoute === 'kham-pha' && (
          <ExploreView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'ho-so' && (
          <DossierView
            houseId={selectedHouseId}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'hoi-dap-ai' && (
          <AiQaView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'nguon-tu-lieu' && (
          <SourcesView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'gioi-thieu' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenContribute={() => setIsContributeOpen(true)}
          />
        )}
      </main>

      {/* Footer with mandatory attribution */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Search Modal (Ctrl+K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Contribute Archival Data Modal */}
      <ContributeModal
        isOpen={isContributeOpen}
        onClose={() => setIsContributeOpen(false)}
      />
    </div>
  );
}
