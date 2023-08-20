import './Header.css'

function Header() {

    return(
        <>
        <div id = 'logo'>LOGO</div>
        <div id = 'header'>
            <a  href = 'option'>Home</a>
            <a href = 'option'>Option</a>
            <a href = 'option'>Contact</a>
            <a href = 'option'>About</a>
            <input type='text' placeholder='Search' id='search'></input>
        </div>
        </>
    )
}

export default Header;