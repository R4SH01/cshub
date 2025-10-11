import { Link } from 'react-router-dom';
import { Map } from '@/data/mockData';

interface MapCardProps {
  map: Map;
  index: number;
}

const MapCard = ({ map, index }: MapCardProps) => {
  return (
    <Link 
      to={`/map/${map.id}`}
      className="group relative overflow-hidden rounded-xl animate-fade-in-scale"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden bg-card">
        <img 
          src={map.posterUrl} 
          alt={map.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img 
            src={map.iconUrl} 
            alt={`${map.name} icon`}
            className="w-24 h-24 md:w-32 md:h-32 mb-4 transition-all duration-300 group-hover:scale-110 drop-shadow-2xl"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 drop-shadow-lg">
            {map.name}
          </h2>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 group-hover:bg-primary/30 transition-colors">
            <span className="text-primary font-semibold">{map.lineupCount}</span>
            <span className="text-muted-foreground text-sm">Lineup</span>
          </div>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors rounded-xl pointer-events-none" />
      </div>
    </Link>
  );
};

export default MapCard;
