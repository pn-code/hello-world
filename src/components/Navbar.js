import { Link } from "react-router-dom";
import homeIcon from '../images/navbar/home.svg';
import inboxIcon from '../images/navbar/inbox.svg';
import profileIcon from '../images/navbar/profile.svg'

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <div className="logo">
                <h1>Hello World</h1>
            </div>

            <input className="search-bar" placeholder="Search Here..."/>
            <nav className="nav--links">
                <Link to="/"><img src={homeIcon} alt="home"/></Link>
                <Link to="/inbox"><img src={inboxIcon} alt="inbox"/></Link>
                <Link to="/profile"><img src={profileIcon} alt="profile"/></Link>
            </nav>
        </div>
    )
}

export default Navbar;

// Layout
// Navbar
// > Company Logo
//     - Dropdown with Following/Favorites
// > Search Bar / Collapse after max-width is too small
// > List of Anchors
//     - Home
//     - Inbox (show # of notifications until read)
//     - Explore
//     - Profile Button
//         * Dropdown
//             -> Profile
//             -> Log Out