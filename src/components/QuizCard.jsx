import { useState } from 'react'
import { perguntaDoDia as q } from '../data/content.js'

export default function QuizCard() {
  const [escolha, setEscolha] = useState(null)
  const respondeu = escolha !== null
  const acertou = escolha === q.correta

  return (
    <div className="quiz" aria-live="polite">
      <p className="quiz__tag">Pergunta do dia</p>
      <h2 className="quiz__q">{q.pergunta}</h2>
      <div className="quiz__opts">
        {q.opcoes.map((op, i) => {
          let estado = ''
          if (respondeu && i === q.correta) estado = 'is-right'
          else if (respondeu && i === escolha) estado = 'is-wrong'
          return (
            <button
              key={op}
              className={`quiz__opt ${estado}`}
              disabled={respondeu}
              onClick={() => setEscolha(i)}
            >
              {op}
            </button>
          )
        })}
      </div>
      {respondeu && (
        <div className="quiz__result">
          <strong>{acertou ? 'Acertou.' : 'Não foi dessa vez.'}</strong> {q.explicacao}
          <button className="link-btn" onClick={() => setEscolha(null)}>Tentar de novo</button>
        </div>
      )}
    </div>
  )
}
