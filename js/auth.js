function checkAuth() {
  if (!sessionStorage.getItem('kk_auth')) {
    window.location.href = 'index.html';
  }
}

function logout() {
  sessionStorage.removeItem('kk_auth');
  window.location.href = 'index.html';
}
