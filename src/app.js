import React from "react"
import Info from "./info.js"
import About from "./about.js"
import Interests from "./interests.js"
import Footer from "./footer.js"

function App(){
    return(
        <div className="card">
            <Info />
            <div className="mainContent">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}

export default App