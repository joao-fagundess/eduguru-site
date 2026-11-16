import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import { equipe } from '../data/content.js'

export default function Contato() {
  const [dados, setDados] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const mudar = (e) => setDados({ ...dados, [e.target.name]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    // Aqui entraria o envio real (e-mail, API...). Por ora só confirma na tela.
    setEnviado(true)
  }

  return (
    <>
      <PageHead titulo="Equipe e contato" texto="Quem construiu o EduGuru e como falar com a gente." />
      <section className="section">
        <div className="container">
          <h2>Equipe</h2>
          <div className="grid grid--3">
            {equipe.map((p) => (
              <article key={p.nome} className="card person">
                <span className="person__avatar" aria-hidden="true">{p.nome.charAt(0)}</span>
                <h3>{p.nome}</h3>
                <p>{p.funcao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container contact">
          <h2>Envie uma mensagem</h2>
          {enviado ? (
            <div className="notice" role="status">
              <strong>Mensagem registrada.</strong> Obrigado, {dados.nome || 'por escrever'}!
              <button className="link-btn" onClick={() => { setEnviado(false); setDados({ nome: '', email: '', mensagem: '' }) }}>
                Enviar outra
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={enviar}>
              <label>
                Nome
                <input name="nome" value={dados.nome} onChange={mudar} required />
              </label>
              <label>
                E-mail
                <input type="email" name="email" value={dados.email} onChange={mudar} required />
              </label>
              <label>
                Mensagem
                <textarea name="mensagem" rows="5" value={dados.mensagem} onChange={mudar} required />
              </label>
              <button className="btn btn--primary" type="submit">Enviar mensagem</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
