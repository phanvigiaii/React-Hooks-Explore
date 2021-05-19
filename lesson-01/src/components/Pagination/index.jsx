import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultValue = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _limit, _page, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
        return;
    }

    return (
        <div>
            <button
                className="pagination-btn"
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                <i className="fas fa-backward"></i>
            </button>
            <button
                className="pagination-btn"
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                <i className="fas fa-forward"></i>
            </button>
        </div>
    );
}

export default Pagination;
