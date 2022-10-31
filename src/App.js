import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import AddClaimForm from "./Components/AddClaimForm";
import {FaHome} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

function App() {
  const [render,setRender] = useState("AddClaim");
  const [dis,setDis] = useState("false"); 
  const raiseclaimClick = () => {
    setRender("AddClaimForm");
  }
  const dashboardClick = () => {
    setRender("AddClaim");
  }
  const searchClick = () => {
    setDis("true");
  }
  return (
    <div>
      <div>
            { render === "AddClaim"  && <div className="header_padding text-center">
                <span>
                  <h2>Dashboard</h2>
                </span>
            </div>}
            {
              render === "AddClaimForm"  && <div className="header_padding text-center">
              <h2>Non Claim Non Premium Refund Paper Check</h2>  
          </div>
            }
          { render === "AddClaim"  && 
                <button className="btn_right ui button blue" onClick={raiseclaimClick}><FaPlus className="fa_button"></FaPlus> Create Refund Transaction</button> 
          }
          { render === "AddClaim"  && 
                <button className="btn_right ui button blue" onClick={searchClick}><FaSearch className="fa_button"></FaSearch> Search</button> 
          }          
          { render === "AddClaimForm"  && <button className="btn_right ui button blue" onClick={dashboardClick}><FaHome className="fa_button_top"></FaHome> Dashboard</button> }
        </div>
      
      <br />
      <br />
      { render === "AddClaim"  && <Form display={dis}/> }
      { render === "AddClaimForm"  && <AddClaimForm /> }
    </div>
   
   );
}

export default App;
