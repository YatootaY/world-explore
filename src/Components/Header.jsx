import "./Header.css"

const Header = () => {

    return(
        <div className="header">
            <h5>Treasure Island</h5>
            <div>
                <a href="#">About</a>
                <a href="#">Booking</a>
                <a href="#">Gallery</a>
                <button>Sign up</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Header