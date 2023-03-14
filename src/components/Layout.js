import { Outlet, Link } from 'react-router-dom';




const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addHero">Create a New Hero</Link>
                    </li>
                    {/* <li>
                        <Link to="/updateMCUCharacter">Update a Hero</Link>
                    </li> */}
                    <li>
                        <Link to="/updateHeroGallery">Update a Hero</Link>
                    </li>
                    <li>
                        <Link to="/addHero">Create a New Hero</Link>
                    </li>
                    <li>
                        <Link to="/deleteMCUCharacter">Delete a Hero</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Heroes Gallery Link</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

            </nav>
            
            <Outlet />
        


        </>

    );
}

export default Layout;