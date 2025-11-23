# Portofolio Pribadi Eka Saputra

Ini adalah situs web portofolio pribadi yang dibuat dengan Next.js, React, Tailwind CSS, dan ShadCN UI. Proyek ini menampilkan keahlian, proyek, dan pengalaman saya, serta terintegrasi dengan AI untuk fungsionalitas tambahan.

## Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) (dengan App Router)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Pengiriman Email:** [Resend](https://resend.com/)
- **AI:** [Genkit](https://firebase.google.com/docs/genkit)

## Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah di bawah ini.

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (disarankan versi LTS) dan npm di mesin Anda.

### Instalasi

1.  **Clone repositori:**
    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd <NAMA_DIREKTORI>
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Konfigurasi Variabel Lingkungan:**
    Buat file bernama `.env` di direktori root proyek dan tambahkan kunci API Resend Anda.

    ```env
    RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxx
    ```

    Ganti `re_xxxxxxxxxxxxxxxxxxx` dengan kunci API Resend Anda yang sebenarnya.

### Menjalankan Server Pengembangan

Setelah instalasi selesai, jalankan perintah berikut untuk memulai server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:9002](http://localhost:9002) di browser Anda untuk melihat hasilnya.
