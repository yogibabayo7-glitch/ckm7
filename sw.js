// 내 레이더 — 홈 화면 앱 설치용 최소 서비스워커 (데이터는 항상 새로 받음, 캐시 안 함)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
