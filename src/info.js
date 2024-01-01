import React from "react"
import profile from "./profile.png";
import mailLogo from "./Mail.png";
import linkedinLogo from "./Linkedin.png";

function Info(){
    return(
        <div className="info">
            <img className="profileImg" src={profile} alt="Laura Smith"/>
            <h1>Laura Smith</h1>
            <span className="domain">Frontend Developer</span>
            <span className="website">laurasmith.website</span>
            <div className="buttons">
                <button className="mail-btn">
                <img className="mail-logo" src={mailLogo} alt="Mail Logo"/>
                <span>Email</span>
                </button>
                <button className="linkedin-btn">
                <img className="linkedin-logo" src={linkedinLogo} alt="Linkedin Logo"/>
                <span>Linkedin</span>
                </button>
            </div>
        </div>
    )
}

export default Info