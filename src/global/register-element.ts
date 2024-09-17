import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElButton, ElMenu, ElMenuItem, ElHeader, ElSubMenu, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'

const components = [ElButton, ElMenu, ElMenuItem, ElHeader, ElSubMenu, ElInput]
export function registerElementPlus(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
