import './Navbar.css'

function Navbar(){
    return(
        <header className='Header'>
            <div id="name">Harsh</div>
            <ul className="Navbar">
                <li className='nav-item'><a href='#'>Home</a></li>
                <li className='nav-item'><a href='#'>About</a></li>
                <li className='nav-item'><a href='#'>Projects</a></li>
                <li className='nav-item'><a href='#'>Resume</a></li>
            </ul>
        </header>
    )
}

export default Navbar;