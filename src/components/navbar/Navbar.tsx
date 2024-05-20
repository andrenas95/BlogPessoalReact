


function Navbar() {
 
  

  return (
    <>
     <div className='w-full text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-4xl font-bold uppercase'>Blog Pessoal
            
            </div>

            <div className='flex gap-9'>
              
              <div className='hover:underline'>Postagens </div>
              <div className='hover:underline'>Temas</div>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar