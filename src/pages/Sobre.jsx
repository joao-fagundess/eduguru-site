import PageHead from '../components/PageHead.jsx'
import { sobre } from '../data/content.js'

export default function Sobre() {
  return (
    <>
      <PageHead titulo="Sobre o projeto" texto="Por que o EduGuru existe e a quem ele serve." />
      <section className="section">
        <div className="container prose-grid">
          <article>
            <h2>O problema</h2>
            <p>{sobre.problema}</p>
          </article>
          <article>
            <h2>Justificativa</h2>
            <p>{sobre.justificativa}</p>
          </article>
          <article>
            <h2>Público-alvo</h2>
            <p>{sobre.publico}</p>
          </article>
          <article>
            <h2>Objetivo geral</h2>
            <p>{sobre.objetivoGeral}</p>
          </article>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <h2>Objetivos específicos</h2>
          <ul className="check">
            {sobre.objetivos.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
      </section>
    </>
  )
}
