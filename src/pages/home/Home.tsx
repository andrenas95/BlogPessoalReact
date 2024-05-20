 
function Home() {
  return (
      <>
          
          <div className="bg- bg-opacity-1000 w-full h-full">
              <div className='container grid grid-cols-2 text-white'>
                  <div className="flex flex-col gap-4 items-center justify-center py-4">
                      <h2 className='text-5xl font-bold'> </h2>   
                      <div className="container">
                           <ul className= "dinamicos">
                          
                           <li><span>Hello World!</span></li> 
                           </ul>
                           </div>
                           

                      <div className="container">
                        <div className="estatico">Eu sou</div>
                        <ul className="dinamico">
                            <li><span>Designer</span></li>   
                            <li><span>Desenvolvedor</span></li>  
                            <li><span>Freelancer</span></li>  
                            <li><span>Generation</span></li>  
                            <li><span>Hello World</span></li>    
                        </ul>
                      </div>
                      <p className='text-xl'>
                          Expresse aqui seus pensamentos e opniões
                      </p>

                      <div className="flex justify-around gap-4">
                          <div className='rounded text-white 
                                          border-white border-solid border-2 py-2 px-4'
                              >
                              Nova Postagem
                          </div>
                      </div>
                  </div>
                  

                  <div className="flex justify-center ">
                      <img
                          src="https://i.imgur.com/fyfri1v.png"
                          alt="Imagem Página Home"
                          className='w-2/3' 
                      />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home