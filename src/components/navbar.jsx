import navStyle from "../assets/css/navbar.module.css"
import NavLink from "./navlink";

function NavBar() {
    const linkArray = [
        "Disney Plus", "Shopping", "Movie", "TV", "Parks & Resorts", "Music", "Live & Events", "Game", "Kids", "Company Information"
    ]

    return (
        <nav>
            <img id={navStyle.logo} src="/src/assets/image/disney_logo.png" />
            <ul id={navStyle.navLinks}>
                {
                    linkArray.map((value, index) => {
                        return (<NavLink name={value} index={index} />)
                    })
                }
            </ul>
            <div id={navStyle.searchCont}>
                <input type="text" placeholder="Search within the site" name="" id="" />
                <button>
                    <img src="/src/assets/svg/search.svg"/>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;