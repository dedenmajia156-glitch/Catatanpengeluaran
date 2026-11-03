function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0
  }).format(amount);
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatDateShort(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
}

function getMonthLabel(month, year) {
  const d = new Date(year, month - 1, 1);
  return d.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
}

function getCurrentMonth() {
  const now = new Date();
  return { month: now.getMonth() + 1, year: now.getFullYear() };
}

function getMonthRange(month, year) {
  const start = `${year}-${String(month).padStart(2, '0')}-01`;
  const lastDay = new Date(year, month, 0).getDate();
  const end = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
  return { start, end };
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

async function extractFromQRIS(imageBase64, mimeType) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': CLAUDE_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: { type: 'base64', media_type: mimeType, data: imageBase64 }
          },
          {
            type: 'text',
            text: 'Ini screenshot bukti bayar QRIS / transfer bank / dompet digital (GoPay, OVO, DANA, ShopeePay, dll). Ekstrak info berikut dalam format JSON: {"nominal": number, "merchant": "string atau null", "tanggal": "YYYY-MM-DD atau null", "keterangan": "string atau null"}. Nominal dalam angka bulat tanpa titik/koma. Tanggal format YYYY-MM-DD. Jika tidak bisa baca, isi null. Balas JSON saja tanpa penjelasan.'
          }
        ]
      }]
    })
  });

  if (!res.ok) throw new Error('Gagal koneksi ke AI');
  const data = await res.json();
  const text = data.content[0].text;
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Tidak dapat membaca data dari gambar');
  return JSON.parse(match[0]);
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const base64 = e.target.result.split(',')[1];
      resolve({ base64, mimeType: file.type });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
