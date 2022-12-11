import React from "react";

const TestTable = () => {
  return (
    <div className="mt-4">
      <table style={{ width: "40%" }} class="table border ">
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
            <td>08:30 AM</td>
            <td>748 </td>
            <td> 7s7effkeurusue4 </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>10:23 AM </td>
            <td> 974</td>
            <td>sfe7r7sr4fer</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>11:10 AM </td>
            <td>874</td>
            <td>s4e7s8er</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
