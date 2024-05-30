import './Home.css';
import ListaPostagens from '../../components/postagens/listapostagem/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';

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
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                                         
            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://ik.imagekit.io/andrenas95/blog_pessoal/home.png?updatedAt=1716920035823" alt="" className='w-2/3' />

              </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;
      
    
        
        