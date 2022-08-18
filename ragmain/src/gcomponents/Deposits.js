import React from "react";
import { Link } from "react-router-dom";

const Deposits = () => {
  return (
    <div class="container mt-5 p-3">
      <div class="text-center text-primary mt-2 mb-2">
        <b>Deposits</b>
      </div>
      <table class="table text-center my-auto">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Bill Summary</th>
            <th scope="col">Next Bill On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>#123456</td>
            <td>₹120.00</td>
            <td>
              <span class="badge badge-success">Success</span>
            </td>
            <td>
              <Link to="/view-bill?id=123456">
                <span class="badge badge-primary p-2">View Paid Bill</span>
              </Link>
            </td>
            <td>20-Aug-2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>#654321</td>
            <td>₹180.00</td>
            <td>
              <span class="badge badge-danger">Failed</span>
            </td>
            <td>
              <Link to="/view-bill?id=654321">
                <span class="badge badge-primary p-2">View Paid Bill</span>
              </Link>
            </td>
            <td>28-Aug-2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Deposits;
