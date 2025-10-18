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
    lineupCount: 6
  },
  {
    id: 'dust2',
    name: 'Dust 2',
    posterUrl: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    iconUrl: 'https://assets.csnades.gg/dust2_icon_5e7cd71fcb.webp',
    lineupCount: 6
  },
  {
    id: 'nuke',
    name: 'Nuke',
    posterUrl: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    iconUrl: 'https://assets.csnades.gg/nuke_icon_8cabb5708b.webp',
    lineupCount: 6
  },
  {
    id: 'inferno',
    name: 'Inferno',
    posterUrl: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    iconUrl: 'https://assets.csnades.gg/inferno_icon_c74ef3660f.webp',
    lineupCount: 6
  },
  {
    id: 'ancient',
    name: 'Ancient',
    posterUrl: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    iconUrl: 'https://assets.csnades.gg/ancient_icon_5bc2a622ff.webp',
    lineupCount: 6
  },
  {
    id: 'train',
    name: 'Train',
    posterUrl: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    iconUrl: 'https://assets.csnades.gg/train_cd38ce9abd.webp',
    lineupCount: 6
  }
];

export const mockLineups: Lineup[] = [
  // Mirage Lineups
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
    mapId: 'mirage',
    grenadeType: 'smoke',
    targetSpot: 'A Site - Jungle',
    lineupName: 'T Spawn to Jungle Smoke',
    description: 'T Spawn\'dan Jungle\'a mükemmel smoke atışı. A site execute için zorunlu.',
    lineupPhoto: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'SmokeKing',
    favoriteCount: 198
  },
  {
    id: '5',
    mapId: 'mirage',
    grenadeType: 'molotov',
    targetSpot: 'A Site - Default',
    lineupName: 'Palace Default Molotov',
    description: 'Palace\'tan A Site default plant noktasına molotov. Post-plant için mükemmel.',
    lineupPhoto: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'FireMaster',
    favoriteCount: 167
  },
  {
    id: '6',
    mapId: 'mirage',
    grenadeType: 'he',
    targetSpot: 'B Site - Bench',
    lineupName: 'B Apps Bench HE',
    description: 'B Apps\'ten bench pozisyonuna HE atışı. B site defansını zayıflatmak için.',
    lineupPhoto: 'https://assets.csnades.gg/mirage_poster_a0e8dff716.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'GrenadeGuru',
    favoriteCount: 142
  },

  // Dust 2 Lineups
  {
    id: '7',
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
    id: '8',
    mapId: 'dust2',
    grenadeType: 'he',
    targetSpot: 'B Site - Back Plat',
    lineupName: 'Tunnel Back Plat HE',
    description: 'Tunnel girişinden yaygın kampçı noktasına HE bombası. Sık kullanılan savunma pozisyonunu temizlemek için.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'NadeKing',
    favoriteCount: 98
  },
  {
    id: '9',
    mapId: 'dust2',
    grenadeType: 'smoke',
    targetSpot: 'A Site - CT Spawn',
    lineupName: 'Long A to CT Smoke',
    description: 'Long A\'dan CT spawn\'a smoke. A site execute için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'DustMaster',
    favoriteCount: 287
  },
  {
    id: '10',
    mapId: 'dust2',
    grenadeType: 'molotov',
    targetSpot: 'B Site - Car',
    lineupName: 'Tunnel to Car Molotov',
    description: 'B Tunnel\'dan Car pozisyonuna molotov. B site alımı için vazgeçilmez.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'B_SiteKing',
    favoriteCount: 223
  },
  {
    id: '11',
    mapId: 'dust2',
    grenadeType: 'flash',
    targetSpot: 'Mid - Doors',
    lineupName: 'T Spawn Mid Doors Flash',
    description: 'T Spawn\'dan Mid Doors\'a hızlı flash. Mid kontrolü için mükemmel.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'MidControl',
    favoriteCount: 176
  },
  {
    id: '12',
    mapId: 'dust2',
    grenadeType: 'smoke',
    targetSpot: 'B Site - Window',
    lineupName: 'T Spawn B Window Smoke',
    description: 'T Spawn\'dan B window\'a smoke. B split için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/dust2_poster_c8e46ba26d.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'WindowSmoke',
    favoriteCount: 245
  },

  // Nuke Lineups
  {
    id: '13',
    mapId: 'nuke',
    grenadeType: 'smoke',
    targetSpot: 'A Site - Heaven',
    lineupName: 'Outside to Heaven Smoke',
    description: 'Outside\'dan A Site Heaven\'a smoke. Upper site alımı için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'NukePro',
    favoriteCount: 201
  },
  {
    id: '14',
    mapId: 'nuke',
    grenadeType: 'molotov',
    targetSpot: 'B Site - Ramp',
    lineupName: 'Secret to Ramp Molotov',
    description: 'Secret\'tan Ramp pozisyonuna molotov. Lower site kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'RampControl',
    favoriteCount: 178
  },
  {
    id: '15',
    mapId: 'nuke',
    grenadeType: 'flash',
    targetSpot: 'A Site - Rafters',
    lineupName: 'Lobby to Rafters Flash',
    description: 'Lobby\'den Rafters\'a flash atışı. A site rush için mükemmel.',
    lineupPhoto: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'FlashGod',
    favoriteCount: 156
  },
  {
    id: '16',
    mapId: 'nuke',
    grenadeType: 'smoke',
    targetSpot: 'Outside - Red',
    lineupName: 'T Roof to Red Smoke',
    description: 'T Roof\'tan Red pozisyonuna smoke. Outside kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'OutsideKing',
    favoriteCount: 189
  },
  {
    id: '17',
    mapId: 'nuke',
    grenadeType: 'he',
    targetSpot: 'B Site - Dark',
    lineupName: 'Ramp to Dark HE',
    description: 'Ramp\'ten Dark köşesine HE atışı. Lower site temizliği için.',
    lineupPhoto: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'DarkMaster',
    favoriteCount: 134
  },
  {
    id: '18',
    mapId: 'nuke',
    grenadeType: 'molotov',
    targetSpot: 'A Site - Hut',
    lineupName: 'Outside to Hut Molotov',
    description: 'Outside\'dan Hut pozisyonuna molotov. Post-plant için ideal.',
    lineupPhoto: 'https://assets.csnades.gg/nuke_poster_6564251e83.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'HutBurner',
    favoriteCount: 167
  },

  // Inferno Lineups
  {
    id: '19',
    mapId: 'inferno',
    grenadeType: 'smoke',
    targetSpot: 'A Site - CT',
    lineupName: 'Mid to CT Smoke',
    description: 'Mid\'den A Site CT tarafına smoke. A execute için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'InfernoMaster',
    favoriteCount: 298
  },
  {
    id: '20',
    mapId: 'inferno',
    grenadeType: 'molotov',
    targetSpot: 'Banana - Sandbags',
    lineupName: 'Banana to Sandbags Molotov',
    description: 'Banana\'dan Sandbags pozisyonuna molotov. B kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'BananaControl',
    favoriteCount: 267
  },
  {
    id: '21',
    mapId: 'inferno',
    grenadeType: 'flash',
    targetSpot: 'A Site - Balcony',
    lineupName: 'Apartments to Balcony Flash',
    description: 'Apps\'ten Balcony\'ye flash. A site rush için mükemmel.',
    lineupPhoto: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'A_SiteRusher',
    favoriteCount: 213
  },
  {
    id: '22',
    mapId: 'inferno',
    grenadeType: 'smoke',
    targetSpot: 'B Site - CT',
    lineupName: 'Banana to CT Smoke',
    description: 'Banana\'dan B Site CT smoke. B execute için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'B_Execute',
    favoriteCount: 245
  },
  {
    id: '23',
    mapId: 'inferno',
    grenadeType: 'he',
    targetSpot: 'Banana - Car',
    lineupName: 'T Spawn to Car HE',
    description: 'T Spawn\'dan Car pozisyonuna HE. Banana kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'CarDestroyer',
    favoriteCount: 189
  },
  {
    id: '24',
    mapId: 'inferno',
    grenadeType: 'molotov',
    targetSpot: 'A Site - Pit',
    lineupName: 'Apartments to Pit Molotov',
    description: 'Apps\'ten Pit pozisyonuna molotov. Post-plant için ideal.',
    lineupPhoto: 'https://assets.csnades.gg/inferno_poster_a627839fc2.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'PitBurner',
    favoriteCount: 198
  },

  // Ancient Lineups
  {
    id: '25',
    mapId: 'ancient',
    grenadeType: 'smoke',
    targetSpot: 'A Site - Heaven',
    lineupName: 'Mid to Heaven Smoke',
    description: 'Mid\'den A Site Heaven smoke. A execute için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'AncientPro',
    favoriteCount: 176
  },
  {
    id: '26',
    mapId: 'ancient',
    grenadeType: 'molotov',
    targetSpot: 'B Site - Cave',
    lineupName: 'B Main to Cave Molotov',
    description: 'B Main\'den Cave pozisyonuna molotov. B site alımı için.',
    lineupPhoto: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'CaveControl',
    favoriteCount: 154
  },
  {
    id: '27',
    mapId: 'ancient',
    grenadeType: 'flash',
    targetSpot: 'Mid - Donut',
    lineupName: 'T Spawn to Donut Flash',
    description: 'T Spawn\'dan Donut pozisyonuna flash. Mid kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'MidFlash',
    favoriteCount: 143
  },
  {
    id: '28',
    mapId: 'ancient',
    grenadeType: 'smoke',
    targetSpot: 'A Site - Ramp',
    lineupName: 'Outside to Ramp Smoke',
    description: 'Outside\'dan Ramp smoke. A split için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'RampSmoke',
    favoriteCount: 167
  },
  {
    id: '29',
    mapId: 'ancient',
    grenadeType: 'he',
    targetSpot: 'B Site - Back Site',
    lineupName: 'B Main Back Site HE',
    description: 'B Main\'den Back Site\'a HE. Site temizliği için.',
    lineupPhoto: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'BackSiteClear',
    favoriteCount: 132
  },
  {
    id: '30',
    mapId: 'ancient',
    grenadeType: 'molotov',
    targetSpot: 'A Site - Temple',
    lineupName: 'Long to Temple Molotov',
    description: 'Long\'dan Temple pozisyonuna molotov. Post-plant için.',
    lineupPhoto: 'https://assets.csnades.gg/ancient_poster_6d7fc66b2a.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'TempleControl',
    favoriteCount: 189
  },

  // Train Lineups
  {
    id: '31',
    mapId: 'train',
    grenadeType: 'smoke',
    targetSpot: 'A Site - Heaven',
    lineupName: 'Ivy to Heaven Smoke',
    description: 'Ivy\'den A Site Heaven smoke. Upper site kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'TrainMaster',
    favoriteCount: 198
  },
  {
    id: '32',
    mapId: 'train',
    grenadeType: 'molotov',
    targetSpot: 'B Site - Back Site',
    lineupName: 'Upper B to Back Site Molotov',
    description: 'Upper B\'den Back Site molotov. B execute için kritik.',
    lineupPhoto: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'B_TrainPro',
    favoriteCount: 167
  },
  {
    id: '33',
    mapId: 'train',
    grenadeType: 'flash',
    targetSpot: 'A Site - Connector',
    lineupName: 'Main to Connector Flash',
    description: 'Main\'den Connector\'a flash. A rush için mükemmel.',
    lineupPhoto: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'ConnectorFlash',
    favoriteCount: 145
  },
  {
    id: '34',
    mapId: 'train',
    grenadeType: 'smoke',
    targetSpot: 'Ivy - Ladder',
    lineupName: 'T Spawn to Ivy Ladder Smoke',
    description: 'T Spawn\'dan Ivy Ladder smoke. Ivy kontrolü için.',
    lineupPhoto: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'IvyControl',
    favoriteCount: 178
  },
  {
    id: '35',
    mapId: 'train',
    grenadeType: 'he',
    targetSpot: 'B Site - Lower',
    lineupName: 'Upper B to Lower HE',
    description: 'Upper B\'den Lower pozisyonuna HE. Site temizliği için.',
    lineupPhoto: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'LowerClear',
    favoriteCount: 134
  },
  {
    id: '36',
    mapId: 'train',
    grenadeType: 'molotov',
    targetSpot: 'A Site - Sandwich',
    lineupName: 'Ivy to Sandwich Molotov',
    description: 'Ivy\'den Sandwich pozisyonuna molotov. Post-plant için ideal.',
    lineupPhoto: 'https://assets.csnades.gg/train_poster_28014fe359.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'SandwichBurner',
    favoriteCount: 156
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
