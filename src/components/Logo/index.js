import logo from './logo.svg';
import propTypes from "prop-types";

function Logo({ size = 200 }) {
    return (
        <img src={logo} 
        className="App-logo" 
        alt="logo" 
        style={{ width: size, height: size}}/>
    )
}


Logo.propTypes = {
    size: propTypes.number,
}
export default Logo;