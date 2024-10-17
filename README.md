# Sistem Manajemen Perpustakaan

Aplikasi manajemen perpustakaan sederhana menggunakan Express.js dan TypeScript.

## Instalasi dan Pengaturan

1. Clone repositori:

   ```
   git clone https://github.com/rifqdev/eigen-backend-test.git
   cd eigen-backend-test
   ```

2. Instal dependensi:

   ```
   npm install
   ```

3. Buat database dan tabel:

   - Buka klien MySQL Anda
   - Jalankan perintah berikut untuk membuat database:
     ```sql
     CREATE DATABASE perpustakaan;
     USE perpustakaan;
     ```
   - Jalankan skrip SQL yang ada di file `query.sql` untuk membuat tabel dan mengisi data awal

4. Konfigurasi lingkungan:
   - Salin file `.env.example` menjadi `.env`
   - Sesuaikan pengaturan database di file `.env`

## Menjalankan Aplikasi

Jalankan aplikasi dengan perintah:

```
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`

## Dokumentasi API

Dokumentasi API tersedia di `http://localhost:3000/api-docs`
