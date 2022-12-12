import React from "react";

const Table = () => {
  return (
    <div className="mt-4">
      <table style={{ width: "40%" }} class="table border">
        <thead>
          <tr>
            <th scope="col">Sr</th>
            <th scope="col">Time</th>
            <th scope="col">Amount</th>
            <th scope="col">Hash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12:30 AM</td>
            <td>487 </td>
            <td>4s8er5s5fe57rj </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>10:30 AM</td>
            <td> 875</td>
            <td>sf7s7ers4e7r7ws</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>11:30 AM</td>
            <td>797</td>
            <td>se4s7er7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
