🚀 Mini Portofolio Interaktif (React JS + Bootstrap 5)

Dokumentasi proyek Mini Portofolio yang dibangun menggunakan React JS via Vite, serta di-style secara responsif menggunakan framework Bootstrap 5. Proyek ini menerapkan arsitektur komponen modular (Child Components) yang terpisah dan terorganisir dengan baik.

📌 Fitur & Komponen Utama

Navbar (Navbar.jsx): Bilah navigasi utama berlatar gelap yang bersih dan responsif.

Hero Section (Hero.jsx): Bagian landing/perkenalan utama dengan CTA (Call to Action).

Skills Showcase (Skills.jsx): Kartu-kartu interaktif berbasis array mapping untuk menampilkan fokus keahlian (Web Frontend, Backend Logic, & IoT/Embedded System).

Footer (Footer.jsx): Bagian penutup halaman portofolio dengan hak cipta dan informasi ringkas.

🛠️ Teknologi & Tools

React JS (Vite Template)

Bootstrap 5 (Di-install via NPM)

Node Package Manager (NPM)

Git & Git Bash (CLI Workflow)

📁 Arsitektur & Struktur Folder

.
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # Komponen penutup
│   │   ├── Hero.jsx        # Komponen perkenalan utama
│   │   ├── Navbar.jsx      # Komponen navigasi
│   │   └── Skills.jsx      # Komponen kartu keahlian
│   ├── App.jsx             # Orchestrator / Layout utama
│   ├── index.css           # Custom style tambahan
│   └── main.jsx            # Entry point React DOM & Bootstrap CSS import
├── package.json