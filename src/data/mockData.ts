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
  videoUrl: string;
  description: string;
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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Perfect one-way smoke from T spawn. Aim at the corner of the building, jump throw for consistent results.',
    author: 'ProPlayer123',
    favoriteCount: 234
  },
  {
    id: '2',
    mapId: 'mirage',
    grenadeType: 'molotov',
    targetSpot: 'B Site - Van',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Easy molotov to clear default plant position. Stand at van, aim at window ledge.',
    author: 'TacticalGamer',
    favoriteCount: 156
  },
  {
    id: '3',
    mapId: 'mirage',
    grenadeType: 'flash',
    targetSpot: 'Mid - Window',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Quick mid flash to push window. Bounce off left wall for perfect timing.',
    author: 'FlashMaster',
    favoriteCount: 189
  },
  {
    id: '4',
    mapId: 'dust2',
    grenadeType: 'smoke',
    targetSpot: 'Long A - Cross',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Standard long cross smoke from T spawn. Essential for A site executes.',
    author: 'CS2Pro',
    favoriteCount: 312
  },
  {
    id: '5',
    mapId: 'dust2',
    grenadeType: 'he',
    targetSpot: 'B Site - Back Plat',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'HE grenade lineup for common camping spot. Stand at tunnel entrance.',
    author: 'NadeKing',
    favoriteCount: 98
  }
];

export const grenadeTypes = [
  { value: 'all', label: 'Tüm Bombalar', icon: '💣' },
  { value: 'smoke', label: 'Smoke', icon: '💨' },
  { value: 'molotov', label: 'Molotov', icon: '🔥' },
  { value: 'flash', label: 'Flash', icon: '⚡' },
  { value: 'he', label: 'HE', icon: '💥' }
];
