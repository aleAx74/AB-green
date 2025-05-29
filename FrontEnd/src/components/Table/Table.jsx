import React from "react";
import './Table.css'
function Table({ th = [], tr = [] }) {
  return (
    <>
      <table id="tabella" border="0">
        <thead>
          <tr>
            {th.map((title, index) => (
              <th key={index} data-cell={title.dataCell}>
                {title.contenuto}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tr.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-cell={th[cellIndex]?.dataCell}>
                  {cell.contenuto}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
