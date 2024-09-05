import React, { useState } from "react";

function Matrix() {
  const [number, setNumber] = useState("");
  const [output, setOutput] = useState({ row: 0, columns: 0 });

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const n = parseInt(number, 10);

    const matrix = (n) => {
      switch (n) {
        case 0:
          return { row: 0, columns: 0 };
        case 1:
          return { row: 1, columns: 1 };
        case 2:
          return { row: 1, columns: 2 };
        case 3:
          return { row: 2, columns: 2 };
        case 4:
          return { row: 2, columns: 2 };
        case 5:
          return { row: 2, columns: 3 };
        case 6:
          return { row: 2, columns: 3 };
        case 7:
          return { row: 3, columns: 3 };
        case 8:
          return { row: 3, columns: 3 };
        case 9:
          return { row: 3, columns: 3 };
        case 10:
          return { row: 4, columns: 3 };
        case 11:
          return { row: 4, columns: 3 };
        case 12:
          return { row: 4, columns: 3 };
        case 13:
          return { row: 4, columns: 4 };
        case 14:
          return { row: 4, columns: 4 };
        case 15:
          return { row: 4, columns: 4 };
        case 16:
          return { row: 4, columns: 4 };
        default:
          return { row: 0, columns: 0 };
      }
    };
    console.log(`{${output.row} , ${output.columns}}`);
    setOutput(matrix(n));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="n">Enter a number: </label>
        <input type="number" value={number} onChange={handleChange} />
        <button type="submit">Get Matrix</button>
      </form>

      <div>
        {output.row !== undefined && output.columns !== undefined && (
          <p>
            Matrix dimensions: {output.row} rows x {output.columns} columns
          </p>
        )}
      </div>
    </div>
  );
}

export default Matrix;
