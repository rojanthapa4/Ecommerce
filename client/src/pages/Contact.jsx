import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/contact.css";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus  ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2  text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            We are here to assist you with any queries or information about our
            products. Your satisfaction is our top priority, and our dedicated
            support team is available 24/7 to help you. Whether you need
            assistance with your orders, product details, or general inquiries,
            feel free to reach out to us anytime. We value your feedback and are
            committed to delivering an exceptional shopping experience.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
