import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
      </Layout>
    </>

    
  )
}

export default App
