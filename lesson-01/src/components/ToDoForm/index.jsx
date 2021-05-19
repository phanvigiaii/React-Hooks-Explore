import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";

ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
    onSubmit: null,
};

function ToDoForm(props) {
    const { onSubmit } = props;
    const [formValue, setFormValue] = useState("");
    function handleEvent(e) {
        e.preventDefault();
        setFormValue("");
        onSubmit(formValue);
    }
    function onChangeInputValue(e) {
        setFormValue(e.target.value);
    }
    return (
        <form onSubmit={handleEvent}>
            <input
                type="text"
                onChange={onChangeInputValue}
                value={formValue}
            />
        </form>
    );
}

export default ToDoForm;
