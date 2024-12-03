import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/NavBar"

function App() {
  <>
    <Navbar/>
    <Container className="mb-4 p-4">
        Creating app in ReactTS
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
    </Container>
  </>
  
}

export default App
