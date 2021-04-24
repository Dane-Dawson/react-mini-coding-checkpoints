import React from 'react';
import TarotTable from '../images/tarot-table.png'
function Table() {
    return (
        <div className="tarot-table-wrapper">
            <img className="tarot-table" src={TarotTable} alt="Tarot Table Cover"></img>
        </div>
    );
}

export default Table;