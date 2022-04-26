import PropTypes from "prop-types";
import sytles from "./Button.module.css";

function Button({text}) {
    return (
        <button className={sytles.btn}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;