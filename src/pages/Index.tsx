import { Target } from 'lucide-react';
import MapCard from '@/components/MapCard';
import { maps } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              CS2 <span className="text-primary">Lineup</span> Kılavuzu
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Counter-Strike 2'deki tüm kritik bomba atışlarını keşfedin ve ustalaşın
          </p>
        </header>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-fade-in">
            Harita Seçin
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maps.map((map, index) => (
              <MapCard key={map.id} map={map} index={index} />
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
          <p>© 2024 CS2 Lineup Kılavuzu. Topluluk tarafından, topluluk için.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
