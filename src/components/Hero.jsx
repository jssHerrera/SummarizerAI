import { logo } from '../assets'

export const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='emerald_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplifica tu lectura con Summize, un resumidor de artículos de código abierto que transforma artículos extensos en resúmenes claros y concisos.
      </h2>
    </header>
  )
}
