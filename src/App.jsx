import './App.css'
import { Demo, Hero } from './components'
import { Botoom } from './components/Botoom'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>
      <div className='app'>
        <Hero />
        <Demo />
      </div>
      <Botoom />
    </main>
  )
}
export default App
