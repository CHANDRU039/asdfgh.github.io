import Home from "./components/Home"
import Trans from "./components/Trans"
import Stats from "./components/Stats"
import Chart from "./components/Chart"
import { BrowserRouter,Route,Routes } from "react-router-dom"


const App=()=>{
    return(
        <div>
            <BrowserRouter>
                 <Home></Home>
                 <Routes>
                    <Route element={<Trans/>} path="/Trans"></Route>
                    <Route element={<Stats/>} path="/Stats"></Route>
                    <Route element={<Chart/>} path="/Chart"></Route>
                 </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App