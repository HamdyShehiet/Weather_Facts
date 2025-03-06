import './assets/styles/App.css'
import Search from './components/utils/Search'
import Header from "./components/layouts/Header"

function App() {

  return (
    <>
    <Header />
    <main>
      <section className='py-8'>
        <div className="container mx-auto px-3">
          <Search />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
