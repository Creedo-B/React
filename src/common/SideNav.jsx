import {Link} from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className='sidenav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/theme'>Theme App</Link></li>
                <li><Link to='/timer'>Timer App</Link></li>
                <li><Link to='/todo'>Todo App</Link></li>
                <li><Link to='/covid-tracker'>Covid Tracker</Link></li>
            </ul>
        </nav>
    )

};

export default SideNav;