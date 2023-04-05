import React from "react";
import "./About.css";

function About() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-6  about_upper_layer text-center bg-white mt-5">
                        <h1 className="m-0 pb-4 pt-5">About Us</h1>
                        <div className="about_details py-4 px-4">
                            <p className="ddetails">
                                FinWiz is a web-based factoring software designed specifically
                                for transportation companies to help them manage their cash flow
                                more efficiently. With FinWiz, transportation companies can
                                easily convert their accounts receivable into immediate cash,
                                enabling them to meet their daily expenses, pay their drivers
                                and vendors, and grow their business. The software streamlines
                                the factoring process, allowing businesses to upload their
                                invoices, track their payments, and manage their cash flow in
                                real-time
                            </p>
                            <p className="ddetails">
                                FinWiz provides a user-friendly interface and powerful reporting
                                tools that allow businesses to gain valuable insights into their
                                financial health and make informed decisions. With its advanced
                                security features and customizable settings, FinWiz ensures that
                                all data is protected and managed securely. Whether you are a
                                small business owner or a large transportation company, FinWiz
                                is the perfect solution to help you manage your finances and
                                grow your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;