import {
  EnvelopeSimple,
  GithubLogo,
  Link,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-center bg-neutral-950 text-white">
        <div className="container flex flex-col items-center py-4">
          <a href="/home">
            <p className="text-xl font-bold">
              Blog Pessoal André| Copyright: &copy;
            </p>
          </a>

          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-7">
            <a href="https://www.linkedin.com/in/andrenas95/">
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a href="mailto:andrenas.nascimento95@gmail.com">
              <EnvelopeSimple size={48} weight="bold" />
            </a>

            <a href="https://www.github.com/andrenas95/">
              <GithubLogo size={48} weight="bold" />
            </a>
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

export default Footer;
