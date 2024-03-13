import React from "react"
import Logo from "../assets/logo.png"

export default function Footer () {
    return(
        <div className="footerSection">
            <div className="footerTop">
                <div className="footerLeft">
                    <img src={Logo} alt="logo" />
                    <p>Prepare for the exam with our comprehensive mock exams. Practice essential skills and improve your test-taking abilities with our curated questions and detailed explanations.</p>
                </div>
                <div className="footerRight">
                    <h3>Contact Us</h3>
                    <h4>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</h4>
                    <h4>Tel: + (123) 2500-567-8988 <br />Mail: supportlms@gmail.com</h4>
                </div>
            </div>
            <div className="footerBottom">
                <h4>Copyright © 2024 CIT-QUEST | Powered by Flanzer</h4>
            </div>
        </div>
    )
}