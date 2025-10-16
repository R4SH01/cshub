export interface Map {
  id: string;
  name: string;
  posterUrl: string;
  iconUrl: string;
  lineupCount: number;
}

export interface Lineup {
  id: string;
  mapId: string;
  grenadeType: 'smoke' | 'molotov' | 'flash' | 'he';
  targetSpot: string;
  lineupName: string;
  description: string;
  lineupPhoto: string;
  videoUrl: string;
  author: string;
  favoriteCount: number;
}

export const maps: Map[] = [
  {
    id: 'mirage',
    name: 'Mirage',
    posterUrl: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    iconUrl: 'https://assets.csnades.gg/mirage_icon_9d80a6fa59.webp',
    lineupCount: 45
  },
  {
    id: 'dust2',
    name: 'Dust 2',
    posterUrl: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    iconUrl: 'https://assets.csnades.gg/dust2_icon_5e7cd71fcb.webp',
    lineupCount: 38
  },
  {
    id: 'nuke',
    name: 'Nuke',
    posterUrl: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    iconUrl: 'https://assets.csnades.gg/nuke_icon_8cabb5708b.webp',
    lineupCount: 32
  },
  {
    id: 'inferno',
    name: 'Inferno',
    posterUrl: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    iconUrl: 'https://assets.csnades.gg/inferno_icon_c74ef3660f.webp',
    lineupCount: 41
  },
  {
    id: 'ancient',
    name: 'Ancient',
    posterUrl: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    iconUrl: 'https://assets.csnades.gg/ancient_icon_5bc2a622ff.webp',
    lineupCount: 28
  },
  {
    id: 'train',
    name: 'Train',
    posterUrl: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    iconUrl: 'https://assets.csnades.gg/train_cd38ce9abd.webp',
    lineupCount: 35
  }
];

export const mockLineups: Lineup[] = [
  {
    id: '1',
    mapId: 'mirage',
    grenadeType: 'smoke',
    targetSpot: 'A Site - CT Spawn',
    lineupName: 'Palace to CT Smoke',
    description: 'Palace balkonundan A Site CT tarafına smoke atışı. Oyunun kritik anlarında CT rotasyonunu geciktirmek için ideal.',
    lineupPhoto: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'ProPlayer123',
    favoriteCount: 234
  },
  {
    id: '2',
    mapId: 'mirage',
    grenadeType: 'molotov',
    targetSpot: 'B Site - Van',
    lineupName: 'B Apps Van Molotov',
    description: 'B Apps\'ten Van köşesine molotov atışı. B sitesini almak için vazgeçilmez bir lineup.',
    lineupPhoto: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'TacticalGamer',
    favoriteCount: 156
  },
  {
    id: '3',
    mapId: 'mirage',
    grenadeType: 'flash',
    targetSpot: 'Mid - Window',
    lineupName: 'Mid Window Flash',
    description: 'Mid\'den pencereye hızlı flash atışı. Sol duvara çarptırarak mükemmel zamanlama.',
    lineupPhoto: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'FlashMaster',
    favoriteCount: 189
  },
  {
    id: '4',
    mapId: 'dust2',
    grenadeType: 'smoke',
    targetSpot: 'Long A - Cross',
    lineupName: 'T Spawn Long Doors Smoke',
    description: 'T Spawn\'dan Long Doors\'a smoke. A Long kontrolü için kritik öneme sahip.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'CS2Pro',
    favoriteCount: 312
  },
  {
    id: '5',
    mapId: 'dust2',
    grenadeType: 'he',
    targetSpot: 'B Site - Back Plat',
    lineupName: 'Tunnel Back Plat HE',
    description: 'Tunnel girişinden yaygın kampçı noktasına HE bombası. Sık kullanılan savunma pozisyonunu temizlemek için.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'NadeKing',
    favoriteCount: 98
  }
];

export const grenadeIcons = {
  smoke: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETBhMQERISFhUWFhgXFRgSFRAWFRUWGRYXFxYXGBYYHCogGRolHRgWIjEtJSktLy4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslICUvLi4tKzc3Ky0tLS0tLS0tMTIrLSstKy0tLS0tLS0rLS0rLy0rLS0tKyszOC04Ky03Lf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAgH/xAA8EAACAQMCBAMFBQYFBQAAAAAAAQIDBBEFITE',
  molotov: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhUIBwgTFRUXGRoWFxgYGSAdHRgiGh0hIR4lGhgfICgiISYlHh8bLT0hJSo3Li8uIR8/OjMvNy0tLisBCgoKDQ0OGRAQGyslHh8tNy0vNS0tNistLS0tLS03LS0tKy01LSstLSstNy0tNS0tKy0tLS03LS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAgH/xAA5EAACAQMBBAcGBQMFAQAAAAAAAQIDBBEFBhIhMQciQlFhcYETMpGhsdEUQsHh8BVSImJygqKyFv/eABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAeEQEBAAICAwEBAAAAAAAAAAAAAQIRITEDEkETBP/2gAMAwEAAhEDEQA/ALxAAA',
  flash: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBxQWFhMXGCAaFxgYGBsfHRshHhkXIyAZIB8bHiohHiAqHhoXJTEhJy0rLi4uGR82ODMsNyguLy0BCgoKDg0OGhAQGysmHyUtLS41LSstLSsrMDUtLS0rLS0rLS0rLS0tLS0rLS0tLS0rLS0tLS0tLS0tLSstLS0tK//AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUIAgH/xAA8EAACAQMCBAMFBQYFBQAAAAAAAQIDBBEFITE',
  he: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgTFRUXGRoWFxgYGSAdHRgiGh0hIR4lGhgfICgiISYlHh8bLT0hJSo3Li8uIR8/OjMvNy0tLisBCgoKDQ0OGRAQGyslHh8tNy0vNS0tNistLS0tLS03LS0tKy01LSstLSstNy0tNS0tKy0tLS03LS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUIAgH/xAA8EAACAQMCBAMFBQYFBQAAAAAAAQIDBBEFITE'
};

export const grenadeTypes = [
  { value: 'all', label: 'Tüm Bombalar', icon: '💣' },
  { value: 'smoke', label: 'Smoke', icon: grenadeIcons.smoke },
  { value: 'molotov', label: 'Molotov', icon: grenadeIcons.molotov },
  { value: 'flash', label: 'Flash', icon: grenadeIcons.flash },
  { value: 'he', label: 'HE', icon: grenadeIcons.he }
];
