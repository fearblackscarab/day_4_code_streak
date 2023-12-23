import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div></div>
            <Link to='/'>Home</Link>
            <div></div>
            <Link to='/1'>Page 1</Link>
            <div></div>
            <Link to='/2'>Page 2</Link>
        </header>
    )
}

export default Header
