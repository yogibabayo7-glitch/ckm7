// 내 레이더 — 홈 화면 앱 설치용 서비스워커
// 화면(html)은 항상 서버에서 새로 확인해서 받음 (깃허브 10분 캐시 때문에 옛 화면이 뜨는 것 방지)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.mode === 'navigate' || r.destination === 'document') {
    e.respondWith(fetch(r.url, { cache: 'no-cache' }).catch(() => fetch(r)));
  }
});
