// ============================================
// KONFIGURASI - Ganti sesuai akun kamu
// ============================================

const SUPABASE_URL = 'https://qavthcmnjojfulkxpplg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdnRoY21uam9qZnVsa3hwcGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3MTg5NTUsImV4cCI6MjEwOTI5NDk1NX0.afGNirxw1i5KaaM78vn9UlyGwAfdiTtSdnKdws-PqMU';
const APP_PASSWORD = 'zayyan2024'; // Ganti password sesuai keinginan

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
