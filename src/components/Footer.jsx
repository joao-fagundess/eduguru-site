import { Link } from 'react-router-dom'
import { projeto } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <strong className="footer__brand">{projeto.nome}</strong>
          <p>{projeto.slogan}</p>
        </div>
        <div>
          <p>{projeto.curso}</p>
          <p>{projeto.instituicao}, {projeto.ano}</p>
        </div>
        <div className="footer__links">
          <Link to="/sobre">Sobre</Link>
          <Link to="/funcionalidades">Funcionalidades</Link>
          <a href={projeto.linkApp} target="_blank" rel="noreferrer">Abrir o aplicativo</a>
          <a href={projeto.linkRepo} target="_blank" rel="noreferrer">Código no GitHub</a>
        </div>
      </div>
    </footer>
  )
}
