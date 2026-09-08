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
(https://docs.developer.yelp.com adresinden alinabilir).

## Bilinen sorunlar

- **API anahtari `api/yelp.js` icine duz metin yazilmis.** Anahtar depoda
  goruldugu icin gecersiz kilinmali ve yenisi koda degil ortam degiskenine
  konmali.
- Arama konumu `"İstanbul"` olarak koda sabitlenmis, disaridan degistirilemiyor.
- `SearachScreen` ve `SearcBar` dosya adlarinda yazim hatasi var.
