import { EnvelopeSimple, GithubLogo, LinkedinLogo, } from '@phosphor-icons/react'

function Footer() {
 

  return (
    <>
        <div className="flex justify-center  text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-7'>
              <a
               href="https://www.linkedin.com/in/andrenas95/"> 
              <LinkedinLogo size={48} weight='bold' />
              </a>
              <a
                href = "mailto:andrenas.nascimento95@gmail.com">
              <EnvelopeSimple size={48} weight='bold' /> 
              </a>
              
              <a href="https://www.github.com/andrenas95/"> 
              <GithubLogo size={48} weight='bold' />
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer