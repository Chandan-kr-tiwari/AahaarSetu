import { LOGO_URL } from "../Utils/constants"
import { useState ,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
import Usercontext from "../Utils/Usercontext"
import { useSelector } from "react-redux"

const Header = ()=>{
    // feature of toggling login and logout button
    // useState will used
    const [btnReact,setBtnReact] = useState("login")

    // const data = useContext(Usercontext) // it will give an object in which the key value pair comes from Usercontext.js
    // console.log(data)

    const {loggedInUser} = useContext(Usercontext)

    const cartItems = useSelector((store)=>store.cart.items)

    const onlineState = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo">
                <img src ={LOGO_URL} />
            </div>
            <div className="navbar-items">
                 <ul>
                    <li>
                        onlineState: {onlineState ? "✅" :"🔴"}
                        
                    </li>
                    <li> <Link to="/"> HOME</Link>  </li>
                    <li> <Link to="/about"> ABOUT US</Link>  </li>
                    <li> <Link to="/contact">CONTACT US</Link>  </li>
                    <li><Link to ="/grocery">Groceries</Link></li>
                    <li> <Link to ="/cart"> 🛒-({cartItems.length})</Link></li>
                    <button className="login-btn" onClick={()=>{
                       btnReact==="login"?setBtnReact("logout"):setBtnReact("login")
                    }}> {btnReact}</button>
                    <li className="logged-in-user">{loggedInUser}</li>

                 </ul>
            </div>
        </div>
    )
}


export default Header