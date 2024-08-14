import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='navbar'>
            <section className='navbar-main-section'>
                <h1 className='title'>Animania</h1>
            </section>
            <section className='navbar-sub-section'>
                <Link to='/'><p>Anime</p></Link>
                <p>Cartoons</p>
                <p>random</p>
                <Link to='/new'> <p>New Anime</p></Link>
            </section>
        </nav>
    )
}