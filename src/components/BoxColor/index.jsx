import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

BoxColor.propTypes = {
    onBoxClick: PropTypes.func,
    color: PropTypes.string,
};

BoxColor.defaultProps = {
    onBoxClick: null,
    color: "",
};

function BoxColor(props) {
    const { color, onBoxClick } = props;

    function handleClick() {
        if (onBoxClick) {
            onBoxClick();
        } else return;
    }

    return (
        <div
            className="box-color"
            style={{ backgroundColor: color }}
            onClick={() => handleClick()}
        ></div>
    );
}

export default BoxColor;
