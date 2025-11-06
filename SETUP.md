# Setup Guide - Sistem Absensi Indofood

Aplikasi absensi dengan autentikasi menggunakan Next.js, Auth.js (NextAuth v5), Prisma, dan JWT.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Authentication**: Auth.js (NextAuth v5) dengan JWT
- **Database ORM**: Prisma
- **Database**: PostgreSQL
- **Validation**: Zod
- **Styling**: Tailwind CSS
- **Linter/Formatter**: Biome

## Setup Proyek

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Setup Database

Buat file `.env` di root project (copy dari `.env.example`):

```bash
cp .env.example .env
```

Edit file `.env` dan sesuaikan dengan konfigurasi database Anda:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/absensi_indofood?schema=public"
AUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

Generate secret key untuk AUTH_SECRET:

```bash
openssl rand -base64 32
```

### 3. Generate Prisma Client & Push Schema

```bash
pnpm db:generate
pnpm db:push
```

### 4. Seed Database (Buat User Admin)

```bash
pnpm db:seed
```

User default yang dibuat:
- **Username**: `admin`
- **Password**: `admin123`

### 5. Jalankan Development Server

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Fitur

### ✅ Authentication dengan Auth.js (NextAuth v5)
- Login menggunakan username & password
- Session management dengan JWT
- Protected routes dengan middleware
- Type-safe dengan TypeScript

### ✅ Database dengan Prisma
- Schema User dengan username & password (hashed dengan bcrypt)
- Custom output path untuk generated client
- Auto-completion & type safety

### ✅ Security
- Password di-hash menggunakan bcryptjs
- JWT untuk session management
- Protected dashboard route
- Middleware untuk route protection

### ✅ Type Safety
- Full TypeScript support
- Zod untuk validasi input
- Next-auth types extension
- Biome untuk linting & formatting

## Scripts

```bash
# Development
pnpm dev              # Jalankan development server

# Build
pnpm build           # Build untuk production
pnpm start           # Jalankan production server

# Database
pnpm db:generate     # Generate Prisma Client
pnpm db:push         # Push schema ke database
pnpm db:seed         # Seed database dengan user admin

# Code Quality
pnpm lint            # Jalankan Biome linter
pnpm format          # Format kode dengan Biome
```

## Struktur Project

```
absensi-indofood/
├── app/
│   ├── actions/
│   │   └── auth.ts              # Server actions untuk autentikasi
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts     # Auth.js API route handler
│   ├── dashboard/
│   │   └── page.tsx             # Protected dashboard page
│   ├── page.tsx                 # Login page (index)
│   └── layout.tsx               # Root layout
├── lib/
│   ├── auth.ts                  # Auth.js configuration
│   └── generated/
│       └── prisma/              # Generated Prisma Client
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Database seeding script
├── types/
│   └── next-auth.d.ts           # Next-auth type extensions
├── middleware.ts                # Route protection middleware
└── biome.json                   # Biome configuration
```

## Route Protection

- `/` - Halaman login (redirect ke `/dashboard` jika sudah login)
- `/dashboard` - Protected route (redirect ke `/` jika belum login)

## Troubleshooting

### Error: Prisma Client not generated

Jalankan:
```bash
pnpm db:generate
```

### Error: Cannot connect to database

Pastikan:
1. PostgreSQL sudah berjalan
2. DATABASE_URL di `.env` sudah benar
3. Database sudah dibuat

### Error: AUTH_SECRET not set

Generate dan set AUTH_SECRET di `.env`:
```bash
openssl rand -base64 32
```
