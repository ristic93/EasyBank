import './App.css'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Header from './components/Header'
import Info from './components/Info'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
        <Navbar />
        <Header />
        <Info />
        <Articles />
        <Footer />
    </div>
  )
}

export default App
