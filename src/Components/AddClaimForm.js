import React from "react";
import { useState } from 'react';
import {FaInfoCircle} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import DatePicker from "react-widgets/DatePicker";


class AddClaimForm extends React.Component {
 
   dropdownHandler = () => {
    setSelectOption("true");
  }
    
 handleChange = () => {
    setChecked(!checked);
  };
  
render(){
    const [selectoption,setSelectOption] = useState ("false");
    const [checked,setChecked] = useState(false);
    return(
       <div>
        <form className="frm_padding " id="form">
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label for="inputCategory">Category</label>
                    <select onChange={dropdownHandler} id="inputCategory" className="form-control">
                        <option selected disabled value="">Choose...</option>
                        <option value="bank_fee">Bank Fee</option>
                        <option value="policy_loan_interest">Policy Loan Interest</option>
                        <option value="interest">Interest</option>
                        <option value="write_off_account">Write-Off Account</option>
						 <option value="policy_loan_surrender">Poicy Loan-Surrender</option>
                    </select>
                </div>
            </div>
            { selectoption === "true" && <div id="details">
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label for="inputSubscriberId">Subscriber ID*
						
                            <FaInfoCircle className="faInfo_button" />
						</label>
                        <input type="text" className="form-control" id="inputSubscriberId"
                            placeholder="Enter Subscriber ID" required />
                        <button className="btn btn-primary button_flex"><FaSearch className="faSearch_button"/> Get details</button>
                    </div>
					<div className="form-group col-md-5">
                        <label for="inputLob">LOB ID</label>
                        <input type="text" className="form-control" id="inputLob"  />
                    </div>
                    
                </div>
				<div className="form-row">
					<div className="form-group col-md-5">
                        <label for="inputPrimaryName">Primary Name</label>
                        <input type="text" className="form-control" id="inputPrimaryName" />
					</div>
                    {checked===false &&<div className="form-group col-md-5">
                         <label><input type="checkbox" checked={checked} onChange={handleChange} />Add Alternate Payee</label>
                    </div>}
					{checked===true && <div className="form-group col-md-5">
                        <label for="inputAlternatePayee">Alternate Payee
						    <FaInfoCircle className="faInfo_button" />
                        </label>
                        <input type="text" className="form-control" id="inputAlternatePayee"
                            placeholder="Enter Alternate Payee" />
                    </div>}
				</div>
                <div className="form-row">
					
                    <div className="form-group col-md-5">
                        <label for="inputPrimaryMailingAddress">Primary Mailing Address</label>
                        <input type="text" className="form-control" id="inputPrimaryMailingAddress"
                             />
                    </div>
					{checked===true &&<div className="form-group col-md-5 ">
                        <label for="inputAlternateMailingAddress">Alternate Mailing Address
                            <FaInfoCircle className="faInfo_button" />
						</label>
                        <input type="text" className="form-control" id="inputAlternateMailingAddress"
                            placeholder="Enter Alternate Mailing Address" />
                    </div>}
                </div>
				<div className="form-row">
					 <div className="form-group col-md-2">	
						<input type="text" className="form-control" id="inputPrimaryCity"
                             />
					</div>
                    <div className="form-group col-md-2">	
						<select id="inputprimaryState" className="form-control">
                            <option selected disabled value="">State</option>
                       </select>
					</div>
                    <div className="form-group col-md-1">	
						<input type="number" className="form-control" id="inputPrimaryZip"
                      />
					</div>	
					{checked === true && <div className="form-group col-md-2">	
						<input type="text" className="form-control" id="inputAlternateCity"
                            placeholder="Enter City" />
					</div>}
                    {checked === true && <div className="form-group col-md-2">	
						<select id="inputAlternateState" className="form-control">
                            <option selected disabled value="">State</option>
                       </select>
					</div>}
                    {checked === true && <div className="form-group col-md-1">	
						<input type="number" className="form-control" id="inputAlternateZip"
                       placeholder="Enter Zip" />
					</div>}
				</div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label for="inputDate">Date</label>
                        <DatePicker disabled defaultValue={new Date()}  valueEditFormat={{ dateStyle: "short" }}  valueDisplayFormat={{ dateStyle: "medium" }} />
                        {/* <input type="date" className="form-control" id="inputDate" /> */}
                    </div>
                    <div className="form-group col-md-5">
                        <label for="inputMemo">MEMO
                            <FaInfoCircle className="faInfo_button" />
						</label>
                        <input type="text" className="form-control" id="inputMemo" placeholder="Enter MEMO" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label for="inputAmount">Amount*</label>
						<div className="currency-wrap">
							<span className="currency-code">$</span>
							<input type="number" className="text-currency form-control" id="inputAmout" placeholder="Enter Amount" required />
						</div>
                    </div>
                    <div className="form-group col-md-5">
                        <label for="inputComments">Comments
                            <FaInfoCircle className="faInfo_button" />
						</label>
                        <input type="text" className="form-control" id="inputComments" placeholder="Enter Comments" />
                    </div>
					
                </div>
                <div className="btn_flex">
				<div className = "btn_search">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div>
                    <button type="reset" onclick="hide()" className="btn btn-primary">Reset</button>
                </div>
            </div>  
            </div> }
        </form>
      </div>
    );
    };
}

export default AddClaimForm;
