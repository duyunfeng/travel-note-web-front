import type { App } from 'vue'
import { registerElementPlus } from './register-element'

export function registerGlobal(app: App) {
  app.use(registerElementPlus)
}
