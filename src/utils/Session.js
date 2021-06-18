export function isAuthenticated() {
  // eslint-disable-next-line
  return localStorage.getItem('basiclFlag') && localStorage.getItem('basiclFlag') == 1;
}