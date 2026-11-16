import { Link } from 'react-router-dom'
import QuizCard from '../components/QuizCard.jsx'
import { projeto, destaques, passos } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="hero__kicker">PFC/TCC {projeto.ano}</p>
            <h1 className="hero__title">{projeto.slogan}</h1>
            <p className="lead">{projeto.resumo}</p>
            <div className="actions">
              <a className="btn btn--primary" href={projeto.linkApp} target="_blank" rel="noreferrer">
                Abrir o aplicativo
              </a>
              <Link className="btn btn--ghost" to="/sobre">Conhecer o projeto</Link>
            </div>
          </div>
          <QuizCard />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>O que o EduGuru entrega</h2>
          <div className="grid grid--3">
            {destaques.map((d) => (
              <article key={d.titulo} className="card">
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <h2>Como funciona</h2>
          <ol className="steps">
            {passos.map((p) => (
              <li key={p.titulo}>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <h2>Pronto para testar?</h2>
          <p>O aplicativo está no ar. Abra, explore e depois veja como ele foi construído.</p>
          <div className="actions">
            <a className="btn btn--primary" href={projeto.linkApp} target="_blank" rel="noreferrer">
              Abrir o aplicativo
            </a>
            <Link className="btn btn--ghost" to="/tecnologias">Ver tecnologias</Link>
          </div>
        </div>
      </section>
    </>
  )
}
