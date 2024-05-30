import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if(usuario.token !== ''){
            navigate("/home")
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        handleLogin(usuarioLogin)
    }

    console.log(JSON.stringify(usuarioLogin))
    
    return (
        <>   
            <div className="fundologin grid grid-cols-1 lg:grid-cols-1 h-screen place-items-center font-bold">
                <form className="flex justify-center items-center flex-col w-1/ gap-9 text-white" 
                    onSubmit={login}
                >
                    <h1 className="text-slate-900 text-6xl  ">Bem Vindo </h1>
                    <div className=" flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2 text-black"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2 text-black"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-900 text-black w-1/2 py-2">

                        {isLoading ?

                            <RotatingLines
                                strokeColor='black'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                            :
                            <span>Entrar</span>
                        }
                        
                    </button>

                    <hr className="border-slate-80 w-full " />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="cadastro" className="hover:underline">Cadastre-se</Link>
                         
                    </p>
                </form>
               
            </div>
        </>
    );
}

export default Login;