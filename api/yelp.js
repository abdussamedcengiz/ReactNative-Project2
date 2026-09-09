import axios from "axios";

// ANAHTAR ARTIK KODA GOMULU DEGIL.
//
// Onceden Yelp API anahtari bu dosyada duz metin yaziliydi ve depo
// public oldugu icin 2024'ten beri herkes tarafindan okunabiliyordu.
// Anahtar Yelp panelinden yenilendi; eski deger gecersiz.
//
// NOT: "EXPO_PUBLIC_" onekli degiskenler derleme sirasinda istemci
// paketine GOMULUR. Yani bu, anahtari depodan cikarir ama uygulamayi
// eline gecirenden gizlemez -- mobil uygulamalarda hicbir yontem
// gizlemez. Anahtarin gercekten sir kalmasi gerekiyorsa istekler
// anahtari kendi tarafinda tutan bir sunucu uzerinden gecirilmeli.
// Bu bir deneme projesi oldugu icin o adim atilmadi.
const YELP_API_KEY = process.env.EXPO_PUBLIC_YELP_API_KEY;

if (!YELP_API_KEY) {
  // Sessizce bos "Bearer " gondermek yerine uyariyoruz: aksi halde
  // istekler 401 donuyor ve sebebi anlasilmiyor.
  console.warn(
    "EXPO_PUBLIC_YELP_API_KEY tanimli degil. .env.example dosyasini " +
      ".env olarak kopyalayip kendi anahtarinizi yazin."
  );
}

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});
