import { PhGithubLogoLight } from '../constant/Icons'

export const Botoom = () => {
  return (
    <button
      type='button'
      onClick={() =>
        window.open('https://github.com/jssHerrera', '_blank')}
      className='black_btn'
    >
      <PhGithubLogoLight />
    </button>
  )
}
