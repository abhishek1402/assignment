import PropTypes from 'prop-types';

export const Input = ({ placeholder, change, label, error, disabled }) => {

    return (<div className="mb-3" data-test="input-cmp">
        <span>{label}</span>
        <input data-test="input-field" type="text" placeholder={placeholder} disabled={disabled}
            className="form-control" onBlur={(e) => change(e.target.value)} />

        {error ? <span className=" alert-danger" data-test="error-input-cmp">{error}</span> : ""}
    </div>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    change: PropTypes.func,
    label: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool
}