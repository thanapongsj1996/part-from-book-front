// const maxAgeMinutes = 15;
const maxAgeMinutes = 300 // for develop

export const LOCAL_STORAGE = {
  DARK_MODE_KEY: 'PH-Dark-Mode',
}

export const COOKIE_STORAGE = {
  TOKEN_KEY: 'PFB.AuTHtokEN',
  COOKIE_MAX_AGE: maxAgeMinutes * 60000,
}
