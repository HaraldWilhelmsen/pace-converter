import { pagesType } from "../App";
import { PAGES } from "../App";
import "./navbar.css";

const NavBar = ({ setActivePage }: { setActivePage: (val: pagesType) => void }) => {

    const entries = Object.keys(PAGES).map(key => <li key={key}><button onClick={() => setActivePage(key as pagesType)}>{key.charAt(0).toUpperCase() + key.slice(1, key.length)}</button></li>)

    return (
        <nav>
            <ul>
                {entries}
            </ul>
        </nav>
    )
}

export default NavBar;