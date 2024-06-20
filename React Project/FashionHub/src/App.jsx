import React from "react"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from "./Components/Navbar"
// import Demo from "./pages/Demo"
import Product from "./pages/Product"
import Shop from "./pages/Shop"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Signin from "./Components/Signin"
import Homepage from "./pages/Homepage"

const App = () => {
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/Signin" element={<Signin/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/Shop" element={<Shop/>}></Route>
            {/* <Route path="/Blog" element={<Blog/>}></Route> */}
            {/* <Route path="/Contact" element={<Contact/>}></Route> */}
        </Routes>
        </BrowserRouter>
    )
}

export default App