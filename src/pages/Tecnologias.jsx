import PageHead from '../components/PageHead.jsx'
import { tecnologias, etapas } from '../data/content.js'

export default function Tecnologias() {
  return (
    <>
      <PageHead titulo="Tecnologias e processo" texto="O que foi usado e em que ordem o projeto foi construído." />
      <section className="section">
        <div className="container">
          <h2>Ferramentas</h2>
          <dl className="stack">
            {tecnologias.map((t) => (
              <div key={t.nome} className="stack__row">
                <dt>{t.nome}</dt>
                <dd>{t.papel}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <h2>Do planejamento à entrega</h2>
          <ol className="timeline">
            {etapas.map((e) => (
              <li key={e.titulo}>
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
