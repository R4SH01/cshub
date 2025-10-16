import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Lineup, grenadeIcons } from '@/data/mockData';

interface LineupCardProps {
  lineup: Lineup;
}

const grenadeLabels = {
  smoke: 'Smoke',
  molotov: 'Molotov',
  flash: 'Flash',
  he: 'HE Grenade'
};

const LineupCard = ({ lineup }: LineupCardProps) => {
  return (
    <Link 
      to={`/lineup/${lineup.id}`}
      className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img 
          src={lineup.lineupPhoto} 
          alt={lineup.lineupName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold flex items-center gap-2">
          <img src={grenadeIcons[lineup.grenadeType]} alt={grenadeLabels[lineup.grenadeType]} className="w-4 h-4" />
          <span>{grenadeLabels[lineup.grenadeType]}</span>
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
          <Heart className="w-3 h-3 text-primary" />
          <span>{lineup.favoriteCount}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {lineup.lineupName}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">
          {lineup.targetSpot}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {lineup.description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>By {lineup.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default LineupCard;
