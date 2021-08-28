import React, { useState }from 'react'

function NavBar(){
    const [open, setOpen] = useState(false);
    return <div>
        <nav>
            <div className="logo">React Nav</div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "translate(-500px)"}}>
                    <li><a>Home</a></li>
                    <li><a>Product</a></li>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    </ul>
                    <i onClick ={() => setOpen(!open)}class="fas fa-bars burger" />
        </nav>
    </div>
}

export default NavBar