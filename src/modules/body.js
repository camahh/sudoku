import React from 'react';
import sudoku from 'sudoku';

const generate = () => {
    const raw = sudoku.makepuzzle();
    const result = { rows: [] };

    for(let i=0; i<9; i++) {
        const row = {index: i, cols: []}
        for(let j=0; j<9; j++) {
            const col = {
                row: i,
                col: j,
                value: raw[i*9+j],
                readonly: raw[i*9+j] !== null
            }
            row.cols.push(col);
        }
        result.rows.push(row);
    }
    console.log(result);
}

generate();

function Body() {
    return (
        <div></div>
    );
}

export default Body;