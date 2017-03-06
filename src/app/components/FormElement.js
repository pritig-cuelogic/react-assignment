import React from "react";

export const FormElement = (props) => {
     console.log(props);
    return (
       <input type={props.type} value= {props.value} name={props.name}
        onChange = {props.onChange} className={props.class} />
    );
};

FormElement.propTypes = {
    type: React.PropTypes.oneOf(['password', 'text']).isRequired,
    value: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
}