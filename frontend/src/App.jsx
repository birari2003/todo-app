import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Todo from "./pages/todo"

// Using BrowserRouter routes route for navigation purpose with the help of react router dom
function App() {

  return (
    <>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

