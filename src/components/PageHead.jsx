export default function PageHead({ titulo, texto }) {
  return (
    <section className="page-head">
      <div className="container">
        <h1>{titulo}</h1>
        {texto && <p className="lead">{texto}</p>}
      </div>
    </section>
  )
}
