import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagem({postagem}: CardPostagensProps) {
  return (
    <div className='border-slate-900  bg-slate-200 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-neutral-600 py-1 px-4 items-center gap-4">
          <img src={postagem.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{postagem.usuario?.nome}</h3>
        </div>
        <div className='p-3 '>
          <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(postagem.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${postagem.id}`} className='w-full text-white bg-neutral-600 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${postagem.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem