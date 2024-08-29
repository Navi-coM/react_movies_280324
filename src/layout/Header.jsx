import { NavLink, Link } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';


function Header() {
    return (
        <nav className="indigo darken-4">
            <div className="nav-wrapper container">

                {/* <a href="/" className="brand-logo">React Movies</a> */}
                <Link to="/" className="brand-logo">React Movies</Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        {/* <a href="/">Home</a> */}
                        <NavLink to='/' className={setActive}>Home</NavLink>
                    </li>
                    <li>
                        {/* <a href="/about">About Me</a> */}
                        <NavLink to='/about' className={setActive}>About Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };