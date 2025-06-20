const Navbar=()=>{
    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li><link to='/about'>About</link></li>
                    <li><link to='/service'>Service</link></li>
                </ul>
            </nav>
        </div>
    )
}