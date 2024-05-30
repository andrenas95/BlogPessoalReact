import { Link } from "react-router-dom"
import Postagem from "../../../models/Postagem"

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900  bg-slate-200 border 
        p-4'> 
           <div className='p-4'>
                    <h4 className='text-lg  bg-slate-200 h-full font-semibold uppercase'>{postagem.titulo}</h4>
                
            <div>
                <div className="flex w-full  py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-1 rounded-full' 
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold  bg-slate-200 text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
              
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`} 
                    className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800  flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem 