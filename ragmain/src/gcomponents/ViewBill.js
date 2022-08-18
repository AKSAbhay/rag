import React from "react";

const ViewBill = () => {
  return (
    <div class="mt-2 p-1">
      <div class="container border mt-5 p-3">
        <h6 class="text-center text-primary">
          <b>Bill Details #123456</b>
        </h6>
        <hr />
        <div class="row mt-5 mb-2 my-auto text-center ">
          <div class="col-lg-6 col-md-6 mb-2 my-auto text-center">
            <h3>
              <b>ARG</b>
            </h3>
          </div>
          <div class="col-lg-6 col-md-6 mb-2 my-auto text-center">
            <div>
              <b>ARG</b>
            </div>
            <div>
              <b>Madhapur, Hyderabad</b>
            </div>
            <div>
              <b>500001</b>
            </div>
          </div>
        </div>
        <hr />
        <div class="row mt-5 mb-2 my-auto text-center pl-3 pr-3">
          <div class="col-lg-6 col-md-6 mb-2 my-auto text-left">
            <b>Bill To : </b>
            <div>Ganesh One</div>
            <div>ganesh@gmail.com</div>
            <div>123456789</div>
          </div>
          <div class="col-lg-6 col-md-6 mb-2 my-auto text-right">
            <div>
              <b>Date : </b> 15/08/2022
            </div>
          </div>
        </div>
        <hr />
        <div class="row my-2 mx-1 justify-content-center">
          <table class="table table-striped table-borderless text-center">
            <thead class="text-black">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Months</th>
                <th scope="col">Price/M</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>House Rent</td>
                <td>2</td>
                <td>₹200</td>
                <td>₹400</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Maintanance</td>
                <td>2</td>
                <td>₹100</td>
                <td>₹200</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Parking Charges</td>
                <td>1</td>
                <td>₹50</td>
                <td>₹50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row pl-2">
          <div class="col-xl-8">
            <p class="ms-3">Add additional notes and payment information</p>
          </div>
          <div class="col-xl-3">
            <ul class="list-unstyled">
              <li class="text-muted ms-3">
                <span class="text-black me-4">SubTotal</span> : ₹650
              </li>
              <li class="text-muted ms-3 mt-2">
                <span class="text-black me-4">Tax(18%)</span> : ₹117
              </li>
            </ul>
            <p class="text-black float-start">
              <span class="text-black me-3"> Total Amount</span> : ₹767
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
