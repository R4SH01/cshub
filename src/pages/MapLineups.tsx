import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FilterBar from '@/components/FilterBar';
import LineupCard from '@/components/LineupCard';
import { maps, mockLineups } from '@/data/mockData';

const MapLineups = () => {
  const { mapId } = useParams();
  const [selectedType, setSelectedType] = useState('all');

  const currentMap = maps.find(m => m.id === mapId);
  
  const filteredLineups = useMemo(() => {
    let lineups = mockLineups.filter(l => l.mapId === mapId);
    if (selectedType !== 'all') {
      lineups = lineups.filter(l => l.grenadeType === selectedType);
    }
    return lineups;
  }, [mapId, selectedType]);

  if (!currentMap) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Harita Bulunamadı</h1>
          <Link to="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-48 md:h-64 bg-cover bg-center animate-fade-in"
        style={{ backgroundImage: `url(${currentMap.posterUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link to="/">
            <Button variant="secondary" className="mb-4 w-fit">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Geri Dön
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <img 
              src={currentMap.iconUrl} 
              alt={currentMap.name}
              className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {currentMap.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="w-5 h-5" />
                <span>{currentMap.lineupCount} Lineup Mevcut</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <FilterBar selectedType={selectedType} onTypeChange={setSelectedType} />
        </div>

        {filteredLineups.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground">
              Bu filtre için henüz lineup bulunamadı.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLineups.map((lineup) => (
              <LineupCard key={lineup.id} lineup={lineup} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapLineups;
