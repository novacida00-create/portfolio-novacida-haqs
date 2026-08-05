# Portofolio — Novacida Haqs

Website portofolio statis (HTML, CSS, JavaScript murni — tanpa framework/build tool)
untuk melamar magang di bidang web development / UI/UX.

## Struktur folder

```
portfolio-novacida-haqs/
├── index.html      # Struktur & konten halaman
├── styles.css       # Semua styling (desain terpisah dari konten)
├── script.js         # Interaksi: menu mobile, animasi ketik, tahun footer
└── README.md
```

## Cara membuka di komputer

Cukup buka `index.html` langsung di browser (double click), atau jalankan
server lokal sederhana dari dalam folder ini:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000` di browser.

## Cara publish gratis (agar bisa dikirim sebagai link ke recruiter)

**Opsi 1 — Netlify Drop (paling cepat, tanpa akun wajib)**
1. Buka https://app.netlify.com/drop
2. Drag & drop folder `portfolio-novacida-haqs` ke halaman tersebut
3. Dapatkan link publik dalam beberapa detik

**Opsi 2 — GitHub Pages**
1. Buat repository baru di GitHub, upload isi folder ini
2. Masuk ke Settings → Pages → pilih branch `main` → folder `/root`
3. Situs akan aktif di `https://<username>.github.io/<nama-repo>/`

**Opsi 3 — Vercel**
1. Buat akun di https://vercel.com
2. Import folder ini sebagai project baru → deploy

## Yang perlu disesuaikan sebelum dikirim ke recruiter

- Ganti/tambahkan tautan repositori GitHub proyek (Website Laundry, Sistem
  Rekomendasi Makanan, Deteksi Kesehatan Lebah Madu) di bagian `<article class="project-card">`
  pada `index.html`, kalau repo-nya sudah publik — ini akan menaikkan kredibilitas
  portofolio secara signifikan.
- Kalau punya tangkapan layar/demo dari ketiga proyek, bisa ditambahkan sebagai
  gambar di dalam masing-masing `.project-card`.
- Foto profil bisa ditambahkan di area `.hero-card` bila diinginkan (saat ini
  sengaja diganti kartu kode `profil.json` sebagai elemen ciri khas desain).
