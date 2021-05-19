import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./index.scss";

SearchForm.propTypes = {
    onSearchChange: PropTypes.func,
};

SearchForm.defaultValue = {
    onSearchChange: null,
};

function SearchForm(props) {
    const { onSearchChange } = props;
    const [searchValue, setSearchValue] = useState("");

    // Search Debounce technique
    const intervalRef = useRef(null);

    function handleChange(e) {
        const value = e.target.value;
        setSearchValue(value);

        // Clear then set new setTimeout
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }

        intervalRef.current = setTimeout(() => {
            onSearchChange({ searchString: value });
        }, 400);
    }
    return (
        <form>
            <input
                type="text"
                onChange={handleChange}
                value={searchValue}
            ></input>
        </form>
    );
}

export default SearchForm;
