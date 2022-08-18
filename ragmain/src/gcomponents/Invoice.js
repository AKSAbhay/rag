import React from "react";

const Invoice = () => {

  return (
    <div className="mt-2 p-1">
      <div className="container border mt-5 p-3">
        <h6 className="text-center text-primary">
          <b>Invoice Details #123456</b>
        </h6>
        <hr></hr>
        <div className="row mt-5 mb-2 my-auto text-center ">
          <div className="col-lg-6 col-md-6 mb-2 my-auto text-center">
            <h3>
              <b>Invoice</b>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 mb-2 my-auto text-center">
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
        <hr></hr>
        <div className="row mt-5 mb-2 my-auto text-center pl-3 pr-3">
          <div className="col-lg-4 col-md-4 mb-2 my-auto text-center">
            <b>Invoice To : </b>
            <div>Ganesh One</div>
            <div>ganesh@gmail.com</div>
            <div>123456789</div>
          </div>
          <div className="col-lg-4 col-md-4 mb-2 my-auto text-center">
            <div>
              <b>Invoice Number : </b> #123456
            </div>
            <div className="mt-2">
              <b>Date of Issue : </b> 15/08/2022
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-2 my-auto text-center">
            <div>
              <b>Invoice Total : </b>
            </div>
            <div>
              <b>₹767.00</b> 
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row my-2 mx-1 justify-content-center">
          <table className="table table-striped table-borderless text-center">
            <thead className="text-black">
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
                <td>₹200.00</td>
                <td>₹400.00</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Maintanance</td>
                <td>2</td>
                <td>₹100.00</td>
                <td>₹200.00</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Parking Charges</td>
                <td>1</td>
                <td>₹50.00</td>
                <td>₹50.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row pl-2">
          <div class="col-lg-8 col-md-8 col-xl-8">
            <p class="ms-3">Invoice Terms : </p>
            <ul>
              <li>Pay before due date.</li>
              <li>If due date exceeded, 3% Extra Charges on Invoice Total.</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-3 col-xl-3">
            <ul class="list-unstyled">
              <li class="text-muted ms-3">
                <span class="text-black me-4">SubTotal</span> : ₹650.00
              </li>
              <li class="text-muted ms-3 mt-2">
                <span class="text-black me-4">Tax(18%)</span>  : ₹117.00
              </li>
            </ul>
            <p class="text-black float-start">
              <span class="text-black me-3"> Total Amount</span> : <b>₹767.00</b>
            </p>
          </div>
        </div>
        <div className="text-center">
            <button className="btn btn-primary" onClick={window.print}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
