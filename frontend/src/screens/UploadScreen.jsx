import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const UploadScreen = () => {
    const [files, setFile] = useState(null);
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const SubmitHandler = async (e) => {
        e.preventDefault();
        console.log("form Submitted")
        console.log(files);
        if (!files) {
            alert("No files selected")
        }
        else {
            setLoad(true)
            const data = new FormData()
            for (let i = 0; i < files.length; i++) {
                data.append("file", files[i]);
            }
            const response = await axios.post("http://localhost:8000/submit", data)
            console.log(response?.data?.data)
            navigate(`/search/${response?.data?.data}`)
            //setResult2(response?.data?.data)
            setLoad(false);
        }

    }
  return (
      <div className='uploadDiv' style={{ height: "70vh",display:"flex", alignItems: "center", justifyContent: "center" }}>

          <div className='uploadInside' style={{marginTop:"10vh", height:"40vh"}}>
              <h4 style={{ textAlign: "center", marginTop: "10px" , marginBottom:"10%"}}>Upload Image</h4>
              {!load &&
                  <form onSubmit={SubmitHandler}
                      className="formmm"
                      style={{marginLeft:"auto"}}>
                      <input type="file"
                          onChange={(e) => {
                              setFile(e.target.files)
                          }}
                          name="my_image"
                           />
                      <input type="submit" className='btn btn-warning' />
                  </form>
              }
          </div>

      </div>
  )
}

export default UploadScreen