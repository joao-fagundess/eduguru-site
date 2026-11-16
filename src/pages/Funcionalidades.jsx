import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import { funcionalidades } from '../data/content.js'

const categorias = ['Todas', ...new Set(funcionalidades.map((f) => f.categoria))]

export default function Funcionalidades() {
  const [filtro, setFiltro] = useState('Todas')
  const lista = filtro === 'Todas' ? funcionalidades : funcionalidades.filter((f) => f.categoria === filtro)

  return (
    <>
      <PageHead titulo="Funcionalidades" texto="Tudo o que o aplicativo oferece, separado por tipo de uso." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filtrar por categoria">
            {categorias.map((c) => (
              <button
                key={c}
                className={`chip ${filtro === c ? 'is-on' : ''}`}
                aria-pressed={filtro === c}
                onClick={() => setFiltro(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid--3">
            {lista.map((f) => (
              <article key={f.titulo} className="card">
                <p className="card__tag">{f.categoria}</p>
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
