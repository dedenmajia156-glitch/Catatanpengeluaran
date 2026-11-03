// ============================================
// KONFIGURASI - Ganti sesuai akun kamu
// ============================================

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
const CLAUDE_API_KEY = 'YOUR_CLAUDE_API_KEY'; // Untuk ekstrak SS QRIS
const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';
const APP_PASSWORD = 'keluarga123'; // Ganti password sesuai keinginan

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
