PRD — Website Profil Kopi Nusantara
Versi: 1.0
Tanggal: 8 Maret 2026
Developer: (nama kamu)
Klien: Budi Santoso — Kopi Nusantara, Jember

1. Overview
Website profil bisnis untuk Kopi Nusantara yang berfungsi sebagai identitas digital resmi kafe — memungkinkan calon pelanggan menemukan informasi lengkap secara online, sekaligus memberikan kemudahan bagi owner dan staff untuk mengelola konten secara mandiri tanpa keahlian teknis.

2. Goals & Non-Goals
Goals:

Kopi Nusantara dapat ditemukan di pencarian Google
Pengunjung mendapat informasi lengkap (menu, lokasi, jam buka, promo) tanpa perlu DM
Owner dan staff dapat update konten sendiri dari HP
Tampilan mencerminkan kualitas dan identitas brand kafe

Non-Goals:

Sistem order online / e-commerce
Integrasi POS / kasir
Fitur loyalty program / membership
Aplikasi mobile


3. Target Pengguna
Pengunjung Website (End User)

Mahasiswa & anak muda 18–30 tahun di Jember
Calon pelanggan baru yang cari kafe via Google
Pelanggan lama yang cek menu atau promo terbaru

Pengguna Admin (Internal)
RoleAksesPenggunaOwnerFull access — kelola semua konten + pengaturanPak BudiStaffTerbatas — edit menu & promo saja, tidak bisa hapus data pentingReza

4. Halaman & Fitur
4.1 Halaman Publik
Home

Hero section dengan foto/visual kafe dan tagline brand
Seksi singkat tentang Kopi Nusantara
CTA menuju halaman menu dan lokasi
Highlight promo aktif (jika ada)

Menu

Tampilan daftar menu per kategori (kopi, non-kopi, makanan)
Setiap item menampilkan foto, nama, deskripsi singkat, dan harga
Data menu diambil dinamis dari database

Tentang Kami

Cerita dan konsep di balik Kopi Nusantara
Nilai brand (kopi lokal, nuansa Indonesia, komunitas)
Foto suasana kafe

Promo

Daftar promo aktif yang dikelola dari admin
Setiap promo menampilkan gambar, judul, deskripsi, dan periode berlaku

Lokasi & Kontak

Embed Google Maps
Jam operasional
Alamat lengkap
Tombol WhatsApp langsung ke nomor Pak Budi
Nomor telepon & email (opsional)


4.2 Halaman Admin (Internal)
Login Admin

Form login dengan email & password
Session management via Auth.js
Redirect otomatis ke dashboard setelah login

Dashboard

Ringkasan jumlah menu, kategori, dan promo aktif
Shortcut menuju kelola menu & promo

Kelola Menu

Tambah, edit, hapus item menu
Upload foto per item via Cloudinary
Atur kategori menu
Akses: Owner & Staff (hapus hanya Owner)

Kelola Promo

Tambah, edit, hapus promo
Upload gambar promo
Set tanggal mulai & berakhir
Akses: Owner & Staff (hapus hanya Owner)

Kelola User (Owner only)

Tambah & hapus akun staff
Tidak bisa hapus akun owner sendiri


5. User Stories
Sebagai pengunjung baru,
saya ingin melihat menu lengkap beserta harga
agar saya bisa memutuskan mau pesan apa sebelum datang.

Sebagai pengunjung,
saya ingin tahu lokasi dan jam buka kafe
agar saya tidak datang saat tutup.

Sebagai pengunjung,
saya ingin langsung menghubungi kafe via WhatsApp
agar saya bisa tanya atau reservasi dengan cepat.

Sebagai owner (Pak Budi),
saya ingin menambah menu baru dari HP
agar saya tidak perlu minta tolong developer setiap ada perubahan.

Sebagai owner,
saya ingin staff saya (Reza) bisa bantu update konten
tapi tidak bisa hapus data penting.

Sebagai staff (Reza),
saya ingin upload promo baru dengan mudah
seperti posting di Instagram.

6. Tech Stack
LayerTeknologiFrontend + BackendNext.js 14 (App Router)StylingTailwind CSSServer StateTanStack QueryORMDrizzleDatabaseNeon (PostgreSQL)StorageCloudinaryAuthAuth.js (NextAuth v5)DeployVercel

7. Database Schema (High Level)
users
├── id
├── name
├── email
├── password (hashed)
├── role (owner / staff)
└── created_at

categories
├── id
├── name
└── order

menu_items
├── id
├── category_id (FK → categories)
├── name
├── description
├── price
├── image_url (Cloudinary)
├── is_available
└── created_at

promos
├── id
├── title
├── description
├── image_url (Cloudinary)
├── start_date
├── end_date
├── is_active
└── created_at

8. Non-Functional Requirements
Performance

Halaman publik load di bawah 2 detik di koneksi 4G
Foto dioptimasi otomatis via Cloudinary (WebP, resize, compress)
Gunakan next/image untuk semua gambar

Responsif

Mobile-first — tampilan optimal di layar 360px ke atas
Halaman admin juga bisa diakses dari HP

SEO

Meta title & description per halaman
Open Graph untuk share di media sosial
Sitemap & robots.txt
Google Maps embed untuk SEO lokal

Keamanan

Halaman admin dilindungi auth — redirect ke login jika belum masuk
Role-based access control untuk Owner vs Staff
Environment variable untuk semua credentials (tidak di-push ke GitHub)


9. Constraints & Assumptions
- Konten awal (foto, teks, logo) disediakan oleh klien
  maksimal 3 hari setelah kontrak ditandatangani
- Domain dibeli oleh klien secara mandiri
- Biaya Neon, Cloudinary, Vercel free tier ditanggung klien
- Tidak ada integrasi payment gateway
- Tidak ada fitur multi-bahasa
- Browser support: Chrome, Safari, Firefox versi terbaru