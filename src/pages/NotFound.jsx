import Header from "../components/Header";
import '../style/notfound.css';
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="error">
                <p className="numero">404</p>
                <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
                <p><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Retournez sur la page d'accueil</NavLink></p>
            </div>
        </>
    )
}