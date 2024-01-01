import React from "react"
import Twitter from "./Twitter.png"
import Facebook from "./Facebook.png"
import Instagram from "./Instagram.png"
import Github from "./GitHub.png"
function Footer(){
    return(
        <div className="footer">
            <img src={Twitter} alt="Twitter Logo" />
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Instagram} alt="Instagram Logo" />
            <img src={Github} alt="Github Logo" />
        </div>
    )
}

export default Footer