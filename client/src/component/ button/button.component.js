import PropTypes from 'prop-types';


export const Button = ({ text, click, classes }) => {
    return (<button data-test="button-cmp" type="button" className={`btn ${classes}`} onClick={() => click()} > {text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    classes: PropTypes.arrayOf(PropTypes.string)
}