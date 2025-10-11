import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { mockLineups, maps } from '@/data/mockData';

const grenadeIcons = {
  smoke: '💨',
  molotov: '🔥',
  flash: '⚡',
  he: '💥'
};

const grenadeLabels = {
  smoke: 'Smoke',
  molotov: 'Molotov',
  flash: 'Flash',
  he: 'HE Grenade'
};

const LineupDetail = () => {
  const { lineupId } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);
  const [comment, setComment] = useState('');

  const lineup = mockLineups.find(l => l.id === lineupId);
  const map = lineup ? maps.find(m => m.id === lineup.mapId) : null;

  if (!lineup || !map) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Lineup Bulunamadı</h1>
          <Link to="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to={`/map/${lineup.mapId}`}>
          <Button variant="secondary" className="mb-6 animate-fade-in">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {map.name} Lineup'larına Dön
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-lg overflow-hidden border border-border animate-fade-in-scale">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src={lineup.videoUrl}
                  title="Lineup Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">{grenadeIcons[lineup.grenadeType]}</span>
                {lineup.targetSpot}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {lineup.description}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Yorumlar
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">TestKullanici</p>
                    <p className="text-muted-foreground text-sm">Bu lineup hala çalışıyor mu? Güncelleme geldi mi?</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Textarea 
                  placeholder="Yorumunuzu yazın..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-24"
                />
                <Button className="w-full">
                  Yorum Yap
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border animate-fade-in-scale" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-bold text-foreground mb-4">Lineup Detayları</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Harita</p>
                  <p className="font-semibold">{map.name}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Bomba Türü</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{grenadeIcons[lineup.grenadeType]}</span>
                    <span className="font-semibold">{grenadeLabels[lineup.grenadeType]}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Yükleyen</p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-semibold">{lineup.author}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Favoriler</p>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{lineup.favoriteCount}</span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full mt-6"
                variant={isFavorited ? "secondary" : "default"}
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                {isFavorited ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineupDetail;
