# Restoran Arama (React Native)

Yelp API'sinden Istanbul'daki restoranlari cekip fiyat araligina gore
gruplayan React Native uygulamasi. Arama cubuguna yazilan terim API'ye
gonderiliyor, donen sonuclar "ucuz / orta / pahali" olarak uc listeye
ayriliyor; bir sonuca dokununca detay ekrani aciliyor.

## Ne deneniyor

- Ozel hook yazma (`useResults`) -- API cagrisi, sonuc ve hata durumu
  bilesenden ayri tutuluyor
- `axios` ile ucuncu parti API kullanimi
- `useEffect` ile ilk acilista otomatik arama
- Sonuclari fiyat alanina gore filtreleyip birden fazla yatay listede gosterme
- React Navigation ile arama ve detay ekranlari arasi gecis

## Yapi

| Dosya | Gorevi |
|---|---|
| `api/yelp.js` | Yelp API icin axios ornegi |
| `hooks/useResults.js` | Arama istegi, sonuclar ve hata mesaji |
| `screens/SearachScreen.js` | Arama cubugu + fiyata gore uc liste |
| `screens/ResultShowScreen.js` | Secilen restoranin detayi |
| `components/` | Arama cubugu, sonuc listesi, sonuc karti |

## Calistirma

```bash
npm install
npx expo start
```

Uygulamanin calismasi icin gecerli bir **Yelp API anahtari** gerekiyor
(https://docs.developer.yelp.com adresinden alinabilir). Anahtar koda
degil ortam degiskenine konuyor:

```bash
cp .env.example .env
# .env icindeki EXPO_PUBLIC_YELP_API_KEY satirina anahtarinizi yazin
```

## Bilinen sorunlar

- **Anahtar git gecmisinde duruyor.** Koda gomulu Yelp anahtari
  `EXPO_PUBLIC_YELP_API_KEY` ortam degiskenine tasindi ve **eski anahtar
  Yelp panelinden gecersiz kilindi**. Yine de ilk commit'te (2024-02-17)
  okunabilir durumda; gecmis bilerek yeniden yazilmadi.
- **`EXPO_PUBLIC_` degiskenleri gercek anlamda gizli degildir**: deger
  derleme sirasinda istemci paketine gomulur. Mobil uygulamalarda hicbir
  yontem anahtari kullanicidan gizleyemez; gizlilik gerekiyorsa istekler
  anahtari kendi tarafinda tutan bir sunucu uzerinden gecirilmeli.
- Arama konumu `"İstanbul"` olarak koda sabitlenmis, disaridan degistirilemiyor.
- `SearachScreen` ve `SearcBar` dosya adlarinda yazim hatasi var.
