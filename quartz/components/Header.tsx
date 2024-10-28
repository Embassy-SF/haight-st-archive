import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>
    <a href="/index.html" style={{ height: '30px' }}>
    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="28px" height="28px" viewBox="0 0 547.596 547.596"
     xml:space="preserve">
<g>
    <path d="M540.76,254.788L294.506,38.216c-11.475-10.098-30.064-10.098-41.386,0L6.943,254.788
        c-11.475,10.098-8.415,18.284,6.885,18.284h75.964v221.773c0,12.087,9.945,22.108,22.108,22.108h92.947V371.067
        c0-12.087,9.945-22.108,22.109-22.108h93.865c12.239,0,22.108,9.792,22.108,22.108v145.886h92.947
        c12.24,0,22.108-9.945,22.108-22.108v-221.85h75.965C549.021,272.995,552.081,264.886,540.76,254.788z"/>
</g>
</svg>
    </a>
    {children}
    <button id="global-graph-icon" aria-label="Global Graph" style="background: transparent; border: 0px; cursor: pointer; padding: 2px 0px 0px 0px;">
    <svg width="27px" height="27px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" style="padding: 0px 0px 0px 0px">
      <circle cx="18" cy="5" r="3" stroke="var(--dark)" stroke-width="1.5" fill="none"/>
      <circle cx="18" cy="19" r="3" stroke="var(--dark)" stroke-width="1.5" fill="none"/>
      <circle cx="6" cy="12" r="3" stroke="var(--dark)" stroke-width="1.5" fill="none"/>
      <path d="M15.408 6.51199L8.59436 10.4866M15.408 17.488L8.59436 13.5134" stroke="var(--dark)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

    </header> : null
}

Header.css = `
header {
  position: fixed;
  height: 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--secondary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 1.5rem;
  border-bottom: 1px solid var(--dark);
  transition: all 0.3s ease;

}

header svg {
  fill: var(--dark);
}

@media only screen and (min-width: 1510px) {
  header {
    padding-left: calc((100vw - 750px) / 2);
    padding-right: calc((100vw - 750px) / 2);
  }
}

@media only screen and (max-width: calc(750px + 2rem)) {
  header {
    left: 0;
    right: 0;
    justify-content: space-between;
  }
}

header h1 {
  margin: 0;
  flex: auto;
}
`

Header.afterDOMLoaded = `
  const header = document.getElementById('quartz-header')
  const content = document.querySelector('.container') // Adjust this selector to match your content container

  function adjustHeader() {
    if (header && content) {
      const rect = content.getBoundingClientRect()
      header.style.left = rect.left + 'px'
      header.style.right = (window.innerWidth - rect.right) + 'px'
      header.style.width = rect.width + 'px'
    }
  }

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })

    window.addEventListener('resize', adjustHeader)
    adjustHeader() // Initial adjustment
  }
`

export default (() => Header) satisfies QuartzComponentConstructor
