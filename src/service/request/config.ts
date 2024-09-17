let VITE_APP_URL = 'http://123.207.32.32:8000/'
let VITE_APP_DEV = 'httpbin'
const TIME_OUT = 30000

if(import.meta.env.MODE === 'development') {
  VITE_APP_DEV = 'development'
} else if (import.meta.env.MODE === 'production') {
  VITE_APP_DEV = 'production'
} else {
  VITE_APP_DEV = 'test'
}

export { VITE_APP_DEV, VITE_APP_URL, TIME_OUT }
