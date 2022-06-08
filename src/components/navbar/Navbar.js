import React from "react"
import {FiMenu} from "react-icons/fi"
import {BsPerson} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {BsFacebook,BsYoutube,BsInstagram,BsTwitter} from "react-icons/bs"

import "./NavbarStyles.css"

function Navbar(){

    const [nav, setNav]=React.useState(false)
    console.log(nav)
    const handleNav=()=>{
        setNav(!nav)
    }
    return(
        <div className={nav?"navbar navbar-bg":"navbar"}>
            <div className="logo">
                <h2>BEACHES.</h2>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>
            <div className="nav-icons">
                <BiSearch className="icon" size={22} />
                <BsPerson className="icon" size={22} style={{marginLeft:"1em"}}/>
            </div>
            <div className="hamburger" onClick={handleNav} >
                <FiMenu className="hamburger" size={22}/>  
            </div>

            {/* Mobile menu */}
            
            <div className={nav?"dropdown-menu active":"dropdown-menu"}>
                <ul className="dropdown-nav">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>

                <div className="dropdown-footer">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <BsFacebook className="icon" size={22}/>
                        <BsInstagram className="icon" size={22} />
                        <BsYoutube className="icon" size={22} />
                        <BsTwitter className="icon" size={22} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar