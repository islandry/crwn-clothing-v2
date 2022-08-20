import '../form-input/form-input.style.scss';

const FormInput = ({label, ...otherProps}) => {
    //console.log(otherProps);
    return (
        <div className = "group">
            <input className = 'form-input' {...otherProps}></input>
            {/* use && to determine whether there is label or not */}
            {label && (
                <label className = {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    );
}

export default FormInput;