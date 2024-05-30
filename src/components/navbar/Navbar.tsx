import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("O usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div
        className="w-full flex justify-center py-4
        bg-neutral-900 text-white"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar tema
            </Link>
            <Link to="/" className="hover:underline">
              Perfil
            </Link>

            {/* 
         Envolvemos o texto Sair com o Componente Link e adicionamos 
         o evento onClick para executar a função logout(). 
         Também adicionamos a classe hover:underline do Tailwind, para 
         criar o efeito underline ao passar o mouse sobre o texto Sair. 
     */}
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }
return (
   <>
   
   { component }

   </>

)

}

export default Navbar;
