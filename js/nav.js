// ─── SVG Icons ───────────────────────────────────────────────────────────────
const ICONS = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  transactions: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><line x1="6" x2="6.01" y1="14" y2="14"/><line x1="10" x2="13" y1="14" y2="14"/></svg>`,
  reports: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
  categories: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  logout: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
  logo: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>`,

  // Bottom nav (slightly smaller)
  home_sm: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  transactions_sm: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><line x1="6" x2="6.01" y1="14" y2="14"/><line x1="10" x2="13" y1="14" y2="14"/></svg>`,
  reports_sm: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
  categories_sm: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  logout_sm: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
};

// ─── Nav Items ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'dashboard',    href: 'dashboard.html',    icon: ICONS.home,         icon_sm: ICONS.home_sm,         label: 'Beranda' },
  { id: 'transactions', href: 'transactions.html', icon: ICONS.transactions, icon_sm: ICONS.transactions_sm, label: 'Transaksi' },
  { id: 'reports',      href: 'reports.html',      icon: ICONS.reports,      icon_sm: ICONS.reports_sm,      label: 'Laporan' },
  { id: 'categories',   href: 'categories.html',   icon: ICONS.categories,   icon_sm: ICONS.categories_sm,   label: 'Kategori' },
];

// ─── Inject Nav ───────────────────────────────────────────────────────────────
function initNav(activeId) {
  // ── Sidebar ──
  const sidebarMount = document.getElementById('sidebar-mount');
  if (sidebarMount) {
    sidebarMount.outerHTML = `
      <aside class="sidebar">
        <div class="sidebar-logo">${ICONS.logo}</div>
        <nav class="sidebar-nav">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}"
               class="sidebar-item${item.id === activeId ? ' active' : ''}"
               title="${item.label}">
              ${item.icon}
            </a>`).join('')}
        </nav>
        <div class="sidebar-bottom">
          <button class="sidebar-item" onclick="logout()" title="Keluar">
            ${ICONS.logout}
          </button>
        </div>
      </aside>`;
  }

  // ── Bottom Nav (mobile) ──
  const bnavMount = document.getElementById('bnav-mount');
  if (bnavMount) {
    bnavMount.outerHTML = `
      <nav class="bottom-nav">
        <div class="bottom-nav-inner">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" class="nav-item${item.id === activeId ? ' active' : ''}">
              <span class="nav-icon">${item.icon_sm}</span>
              ${item.label}
            </a>`).join('')}
          <button class="nav-item" onclick="logout()">
            <span class="nav-icon">${ICONS.logout_sm}</span>
            Keluar
          </button>
        </div>
      </nav>`;
  }
}
