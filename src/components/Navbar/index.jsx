import "./style.css"
import { FaHeart } from "react-icons/fa"

export const Navbar = () => {
    return <div>
        <header>
            <nav>
                <ul className="pokeNavigation">
                    <li><a href="/">Home</a></li>
                    <li><FaHeart style={{color: 'red'}} /><a href="/"> Favoritos</a></li>
                </ul>
            </nav>
        </header>
    </div>;
  };
  