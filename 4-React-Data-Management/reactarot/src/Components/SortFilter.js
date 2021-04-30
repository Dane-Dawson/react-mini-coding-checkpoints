import React from 'react';

function SortFilter(props) {
    return (
        <div className="sort-filter-wrapper">
            <div className="sort-filter">
                <label>Sort by: </label>
                <select name='Sort' defaultValue="" onChange={(e) => { props.sortCards(e.target.value) }}>
                    <option value="" ></option>
                    <option value="value">Value</option>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                </select>
            </div>
            <div className="sort-filter">
                <label>Filter by: </label>
                <select name='Filter' defaultValue="all" onChange={(e) => { props.filterCards(e.target.value) }}>
                    <option value="all" >All</option>
                    <option value="major">Major</option>
                    <option value="minor">Minor</option>
                    <option value="wands">Wands</option>
                    <option value="cups">Cups</option>
                    <option value="pentacles">Pentacles</option>
                    <option value="swords">Swords</option>
                </select>
            </div>
        </div>
    );
}

export default SortFilter;