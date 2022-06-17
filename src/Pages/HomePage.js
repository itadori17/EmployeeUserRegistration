import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

      const [name, setName] = useState('')
      const [surname, setSurname] = useState('')
      const [employeenum, setEmployeenum] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const navigate = useNavigate()
      const [img, setImg] = useState(profilePIcDefault)
      
//converting image
      const getBase64 = (file) =>{
        return new Promise((resolve,reject) =>{
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onabort = (error) => reject(error)
          reader.readAsDataURL(file)
        })
      }
      //
      const handleImg = (e) => {
        const file = e.target.files[0]
        getBase64(file).then(base64 => {
          localStorage['img'] = base64
          console.debug("file store", base64);
        });
      };

      //storing into local Storage
      
      
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ""){
      toast.error("Name is Required")
    }else if (surname === ""){
      toast.error("Surname is Required")
    }else if (employeenum === ""){
      toast.error("Employee Number is Required")
    }else if (email === ""){
      toast.error("Email Address is Required")
    }else if (password === ""){
      toast.error("Password is Required")
    }else{
      localStorage.setItem('name',name)
      localStorage.setItem('surname',surname)
      localStorage.setItem('EmployeeNumber',employeenum)
      localStorage.setItem('email',email)
      localStorage.setItem('Password',password)
      //localStorage.setItem('img', img)
      toast.success('User Succesfully Registered')
      navigate('/users')

    }
  };

  return (
    <>
      
      <div className="container content mt-4">
        <h5> Add New Employee</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Surname
              </label>
              <input
                type="text"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                className="form-control"
                id="exampleInputSurname"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Employee Number
              </label>
              <input
                type="text"
                value={employeenum}
                onChange={e => setEmployeenum(e.target.value)}
                className="form-control"
                id="exampleInputEmploueeNumber"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={
                  profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input 
              className="form-control" 
              type="file" 
              onChange={handleImg}
              name="file"
              id="formFile" />
            </div>
          </div>
            
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
            
          </div>
          {/* col-md-6 ends */}

          
        </div>
      </div>
    </>
  );
};

export default HomePage;