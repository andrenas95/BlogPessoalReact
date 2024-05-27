import React from 'react';



function FormPostagem() {
  

 
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8"></h1>

      <form  className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Titulo da postagem</label>
          <input
            
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-violet-50 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Texto da postagem</label>
          <input
            
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-violet-50 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da postagem</p>
          <select name="tema" id="tema" className='border p-2 border-violet-50 rounded' >
            <option value="" selected disabled>Selecione um tema</option>
           
              <>
                <option >Trabalho de TI</option>
                <option >Projetos</option>
                <option >Home Office</option>
                <option >Saúde do Desenvolvedor</option>
                <option >Viagens & TI</option>
                <option >Linguagens de Programação</option>

              </>
           
          </select>
        </div>
        <button  type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
         Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;