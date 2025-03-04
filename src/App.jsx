import './assets/styles/App.css'
import Header from "./components/layouts/Header"
import Search from './components/utils/Search'

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
      <section className='py-8'>
        <div className="container min-h-[50vh] mx-auto px-3">
        </div>
      </section>
    </main>
    </>
  )
}

export default App
