import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="home-container">
            <div className="left-container">
                <div className="logo"><h2>Logo</h2></div>
                <Link to='/login'><button>LOGIN</button></Link>
            </div>
            <div className="right-container">
                <div className="top-container">
                    <div className="navbar-container">
                        <input type='text' placeholder="search" />
                        <div className="icon">
                            <i class="fa-solid fa-ellipsis"></i>
                            <i class="fa-regular fa-bell"></i>
                        </div>


                    </div>
                    <div className="main-page-content"><h2>Main Page Content</h2></div>
                </div>
                <div className="bottom-container">
                    <div className="left-text-container">dummy text</div>
                    <div className="form-container">
                        <form action="">
                            <h3>Contact Us</h3>
                            <label>Name</label>
                            <input type='text' placeholder="John Doe" />
                            <label>Email</label>
                            <input type="email" placeholder="John Doe" />
                            <label>Message</label>
                            <textarea></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
