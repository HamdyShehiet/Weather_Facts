import { useState } from 'react'
import './assets/styles/App.css'
import Error from './components/utils/Error'
import Search from './components/utils/Search'
import Layout from './components/utils/Layout'
import Welcome from './components/utils/Welcome'
import Header from "./components/layouts/Header"


function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  async function getData(){
    try{
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=88a9fc86342d4d63a98185704230712&q=${location}&days=7&aqi=yes&alerts=yes`)
        if(response.status !== 200 && !response.ok){
          throw new Error("Network Is Not Good");
        }else{
          const data = await response.json()
          setData(data)
        }
    }catch (error){
      setError("Error")
      setData("")
      console.error("Error fetching products :", error);
    }
  }

return (
  <>
  <Header />
  <main>
    <section className='py-8'>
      <div className="container mx-auto px-3">
        <Search onClick={getData} setLocation = {setLocation} />
      </div>
    </section>
    <section className='layout pt-4 pb-7'>
      <div className="container min-h-[40vh] mx-auto px-3">
        {
          data ? <Layout data={data} />
          : error !== "" ? <Error /> 
          : <Welcome />
        }
      </div>
    </section>
  </main>
  </>
)
}

export default App
