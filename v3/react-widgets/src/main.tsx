import { createRoot } from 'react-dom/client'
import App from './App'

function renderInto(el: Element | ShadowRoot) {
  const mount = document.createElement('div')
    // ShadowRoot でも Element でも appendChild できる
  ;(el as any).appendChild(mount)
  createRoot(mount).render(<App />)
}

// ① 通常のVite画面（localhost:5173）用
const root = document.getElementById('root')
if (root) renderInto(root)

// ② Web Component（Angular埋め込み）用
class MyReactWidget extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    renderInto(shadow)
  }
}
customElements.define('my-react-widget', MyReactWidget)
