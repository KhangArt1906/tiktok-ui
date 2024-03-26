// services/songServices.js]
export const songs = [
  {
    id: 1,
    title: "Khong The Say",
    artist: "HIEUTHUHAI",
    duration: "3:45",
    imageUrl: "https://example.com/song1.jpg",
    audioUrl: "https://example.com/song1.mp3",
    icon: true,
  },
  {
    id: 2,
    title: "Hen Mai Sau",
    artist: "Bui Anh Tuan",
    duration: "4:20",
    imageUrl: "https://example.com/song2.jpg",
    audioUrl: "https://example.com/song2.mp3",
    icon: true,
  },
  {
    id: 3,
    title: "Sai Gon oi",
    artist: "Obito",
    duration: "4:20",
    imageUrl: "https://example.com/song2.jpg",
    audioUrl: "https://example.com/song2.mp3",
    icon: false,
  },

  {
    id: 4,
    title: "TETVOVEN",
    artist: "Wxrdie",
    duration: "4:20",
    imageUrl: "https://example.com/song2.jpg",
    audioUrl: "https://example.com/song2.mp3",
    icon: false,
  },

  {
    id: 5,
    title: "Chung ta cua tuong lai",
    artist: "Son Tung - MTP",
    duration: "4:20",
    imageUrl: "https://example.com/song2.jpg",
    audioUrl: "https://example.com/song2.mp3",
    icon: true,
  },
  // Thêm các bài hát khác ở đây...
];

export function getAllSongs() {
  return songs;
}

export function getSongById(id) {
  return songs.find((song) => song.id === id);
}
