import { BrowserRouter , Routes , Route } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import UpdatePage from "./pages/UpdatePage"
import HomePage from "./pages/HomePage"


const App  = ()  => {
  return (
<BrowserRouter >
<Routes >
  <Route path="/" element={<HomePage />} />
  <Route path="/Create" element={<CreatePage />} />
  <Route path="/:id" element={<UpdatePage />} />
</Routes>
</BrowserRouter> )
}

export default App
