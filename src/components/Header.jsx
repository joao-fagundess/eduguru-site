import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { projeto } from '../data/content.js'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/funcionalidades', label: 'Funcionalidades' },
  { to: '/tecnologias', label: 'Tecnologias' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <div className="container header__bar">
        <Link to="/" className="logo" onClick={() => setAberto(false)}>
          <span className="logo__mark" aria-hidden="true" />
          {projeto.nome}
        </Link>

        <button
          className="menu-btn"
          aria-expanded={aberto}
          aria-controls="menu"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav id="menu" className={`nav ${aberto ? 'nav--open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
