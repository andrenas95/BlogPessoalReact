import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './pages/cadastro/Cadastro';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import FormTema from './components/temas/formtema/FormTema';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import ListaPostagens from './components/postagens/listapostagem/ListaPostagens';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './components/postagens/deletarpostagem/deletarPostagem';
import Perfil from './components/perfil/Perfil';


function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrarTema" element={<FormTema />} />
              <Route path="/editarTema/:id" element={<FormTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;