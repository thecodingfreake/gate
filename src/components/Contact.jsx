import contact from '../assets/contact.png'

export default function Contact () {
    return (
        <div className="contactSection">
            <img src={contact} className='contactImage' alt="" />
            <form action="" className='contactForm'>
                <h1>Contact Us!</h1>
                <h4>Fil some contact information on how to reach out</h4>
                <input type="text" placeholder='Enter your Name' required/>
                <input type="email" placeholder='Enter your Email' required/>
                <input type="textarea" style={{height:'90px'}} placeholder='Enter your Message' required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}