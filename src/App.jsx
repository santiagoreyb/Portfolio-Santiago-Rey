import Header from './components/Header'
import Perfil from './components/Perfil'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header className="row-start-1" />
      
      <main className="row-start-2">
        <section id="perfil">
          <Perfil />
        </section>
        <Proyectos />
        <Contacto />
      </main>

      <Footer className="row-start-3" />
    </div>
  )
}

export default App
