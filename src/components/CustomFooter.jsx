import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const CustomFooter = () => {
  return (
    <div className="">
      <MDBFooter bgColor="light" className="text-center text-lg-left">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://mdbootstrap.com/">
            Alexander Spomer
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default CustomFooter;
