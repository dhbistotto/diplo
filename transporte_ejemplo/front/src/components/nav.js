import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul className="holder">
                <li><a href="/home">Home</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/novedades">Novedades</a></li>
                <li><a href="/contacto">Contacto</a></li>                
            </ul>
        </nav>
    )
}