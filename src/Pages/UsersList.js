import React from "react";
import Header from "../Components/Header";

const UsersList = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To Employee Management System
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={
                    localStorage.getItem("img")
                      ? localStorage.getItem("img")
                      : profilePIcDefault
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
                <h4>
                  Surname :{" "}
                  {localStorage.getItem("surname")
                    ? localStorage.getItem("surname")
                    : "NA"}
                </h4>
                <h4>
                  Employee Number :{" "}
                  {localStorage.getItem("EmployeeNumber")
                    ? localStorage.getItem("EmployeeNumber")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
                <h4>
                  Password :{" "}
                  {localStorage.getItem("password")
                    ? localStorage.getItem("password")
                    : "NA"}
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={
                    localStorage.getItem("img")
                      ? localStorage.getItem("img")
                      : profilePIcDefault
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;