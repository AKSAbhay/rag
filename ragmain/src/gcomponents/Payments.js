import React from "react";
import { Link } from "react-router-dom";

const Payments = () => {
  return (
    <div class="container mt-5 p-3">
      <div class="text-center text-primary mt-2 mb-2">
        <b>Payments</b>
      </div>
      <table class="table text-center my-auto">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment Id</th>
            <th scope="col">Payment From</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Bill Summary</th>
            <th scope="col">Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>#123456</td>
            <td>Ganesh One</td>
            <td>₹120.00</td>
            <td>
              <span class="badge badge-success">Success</span>
            </td>
            <td>
              <Link to="/view-bill?id=123456">
                <span class="badge badge-primary p-2">View Bill</span>
              </Link>
            </td>
            <td>
              <Link to="/view-invoice?id=123456">
                <span class="badge badge-primary p-2">View Invoice</span>
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>#654321</td>
            <td>Ganesh Two</td>
            <td>₹180.00</td>
            <td>
              <span class="badge badge-danger">Failed</span>
            </td>
            <td>
              <Link to="/view-bill?id=654321">
                <span class="badge badge-primary p-2">View Bill</span>
              </Link>
            </td>
            <td>
              <Link to="/view-invoice?id=654321">
                <span class="badge badge-primary p-2">View Invoice</span>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
