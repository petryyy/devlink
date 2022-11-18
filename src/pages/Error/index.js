import './error.css'

import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

export default function Error() {
  return (
    <div className="error">
      <Logo />
      <h1>Página não encontrada</h1>
      <p>Esta página que você procurando não existe</p>

      <Link className="link" to="/">
        Voltar para a home
      </Link>
    </div>
  )
}