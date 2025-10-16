import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Video, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { maps } from '@/data/mockData';

const AdminUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    lineupName: '',
    mapId: '',
    grenadeType: '',
    targetSpot: '',
    description: '',
    videoUrl: '',
    lineupPhoto: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.lineupName || !formData.mapId || !formData.grenadeType || 
        !formData.targetSpot || !formData.description || !formData.videoUrl || !formData.lineupPhoto) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doldurun",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log('Lineup Data:', formData);
    
    toast({
      title: "Başarılı!",
      description: "Lineup başarıyla yüklendi",
    });

    // Reset form
    setFormData({
      lineupName: '',
      mapId: '',
      grenadeType: '',
      targetSpot: '',
      description: '',
      videoUrl: '',
      lineupPhoto: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Ana Sayfaya Dön
        </Button>

        <Card className="max-w-3xl mx-auto animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Upload className="w-8 h-8 text-primary" />
              Lineup Yükle
            </CardTitle>
            <CardDescription>
              Yeni bir lineup eklemek için aşağıdaki formu doldurun
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Lineup Name */}
              <div className="space-y-2">
                <Label htmlFor="lineupName">Lineup Adı *</Label>
                <Input
                  id="lineupName"
                  placeholder="Örn: Palace to CT Smoke"
                  value={formData.lineupName}
                  onChange={(e) => setFormData({ ...formData, lineupName: e.target.value })}
                />
              </div>

              {/* Map Selection */}
              <div className="space-y-2">
                <Label htmlFor="map">Harita *</Label>
                <Select value={formData.mapId} onValueChange={(value) => setFormData({ ...formData, mapId: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Harita seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {maps.map((map) => (
                      <SelectItem key={map.id} value={map.id}>
                        {map.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Grenade Type */}
              <div className="space-y-2">
                <Label htmlFor="grenadeType">Bomba Türü *</Label>
                <Select value={formData.grenadeType} onValueChange={(value) => setFormData({ ...formData, grenadeType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Bomba türü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smoke">Smoke</SelectItem>
                    <SelectItem value="molotov">Molotov</SelectItem>
                    <SelectItem value="flash">Flash</SelectItem>
                    <SelectItem value="he">HE Grenade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Target Spot */}
              <div className="space-y-2">
                <Label htmlFor="targetSpot">Hedef Nokta *</Label>
                <Input
                  id="targetSpot"
                  placeholder="Örn: A Site - CT Spawn"
                  value={formData.targetSpot}
                  onChange={(e) => setFormData({ ...formData, targetSpot: e.target.value })}
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Açıklama (Nereden Nereye Atıldığı) *</Label>
                <Textarea
                  id="description"
                  placeholder="Lineup'ın nereden nereye atıldığını ve nasıl kullanılacağını detaylı bir şekilde açıklayın..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              {/* Lineup Photo URL */}
              <div className="space-y-2">
                <Label htmlFor="lineupPhoto" className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Lineup Fotoğrafı URL *
                </Label>
                <Input
                  id="lineupPhoto"
                  type="url"
                  placeholder="https://example.com/lineup-photo.jpg"
                  value={formData.lineupPhoto}
                  onChange={(e) => setFormData({ ...formData, lineupPhoto: e.target.value })}
                />
                {formData.lineupPhoto && (
                  <div className="mt-2 rounded-lg overflow-hidden border border-border">
                    <img 
                      src={formData.lineupPhoto} 
                      alt="Lineup Preview" 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Invalid+Image+URL';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Video URL */}
              <div className="space-y-2">
                <Label htmlFor="videoUrl" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Video Linki (YouTube URL) *
                </Label>
                <Input
                  id="videoUrl"
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Upload className="w-5 h-5 mr-2" />
                Lineup'ı Yükle
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminUpload;
