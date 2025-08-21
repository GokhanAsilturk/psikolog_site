## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router Dom 7.8.1
- **Styling**: CSS3 + Emotion
- **Development Tools**: ESLint
- **Package Manager**: npm

## 📦 Kurulum

### Gereksinimler
- Node.js (16.0.0 veya üzeri)
- npm (7.0.0 veya üzeri)

### Projeyi Çalıştırma

1. **Repo'yu klonlayın:**
   ```bash
   git clone https://github.com/GokhanAsilturk/psikolog_site.git
   cd psikolog_site
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## 📁 Proje Yapısı

```
psikolog_site/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Görseller ve statik dosyalar
│   ├── components/       # Yeniden kullanılabilir componentler
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Sayfa componentleri
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Ana uygulama componenti
│   ├── main.jsx         # Giriş noktası
│   └── index.css        # Global stiller
├── package.json
├── vite.config.js
└── README.md
```
Bu proje özel kullanım için tasarlanmıştır.
