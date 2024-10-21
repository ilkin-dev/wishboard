import React from "react";
import './Filters.scss';

const Filters = ({ filters, setFilters }) => {
    return (
        <div className="filters">
            <div className="filters__search">
                <input
                    type="text"
                    placeholder="Search Wishboards..."
                    value={filters.search || ''}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
            </div>

            <div className="filters__buttons">
                <button>Sort by Date</button>
                <button>Sort by Progress</button>
            </div>
        </div>
    );
};

export default Filters;
