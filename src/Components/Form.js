import React from "react";
import Table from 'react-bootstrap/Table';
import { useState } from "react";

function SearchForm({display}){
    // var [subID,setSubId] = useState();
    const [error,setError] = useState("false");
    const subscribedIdHandler = (e) => {
        //setSubId(e.target.value);
        if(e.target.value.length<9){
            setError("true");
        }
        else{
            setError("false");
        }
    }
    return (
        <div>
        {display === "true" && <form>
            <div className="frm_padding form-row">
				<div className="form-group col-md-5">
					<label for="subscriberID" className="col-form-label">Subscriber ID</label>
					
					<input type="text" className="form-control" id="subscriberID" minLength="0" maxLength='9' onChange={subscribedIdHandler} placeholder="Subscriber ID" />
                    {error === "true" && <p>Please Enter Correct subscriber Id</p>}
					
				</div>
				<div className="form-group col-md-5">
					<label for="status" className="col-form-label">Status</label>

					<input type="text" className="form-control" id="status" placeholder="Status" />
					
				</div>
				<div className="form-group col-md-5">
					<label for="lobId" className="col-form-label">LOB ID</label>
					<input type="text" className="form-control" id="lobId" placeholder="Lob ID" />
                </div>
				<div className="form-group col-md-5">
					<label for="checkNumber" className="col-form-label">Check Number</label>
                
                    <input type="number" className="form-control" id="checkNumber" placeholder="Check Number" />
                
				</div>
				<div className="form-group col-md-5">
					<label for="startDate" className="col-form-label">Start Date</label>
					
                    <input type="date" className="form-control" id="startDate" />
                    
                </div>
				<div className="form-group col-md-5">
					<label for="startDate" className="col-form-label">End Date</label>
                    <input type="date" className="form-control" id="endDate" />
                </div>
				
            </div>
            <div className="btn_flex">
				<div className = "btn_search">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
                <div>
                    <button type="reset" onclick="hide()" className="btn btn-primary">Reset</button>
                </div>
            </div>    
		</form>}		
		<div className="table_padding">
            <Table stripped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th data-field="transactionId">Transaction ID</th>
                        <th data-field="category">Category</th>
                        <th data-field="subscriberId">Subscriber ID</th>
                        <th data-field="lobId">Lob ID</th>
                        <th data-field="primaryName">Primary Name</th>
                        <th data-field="primaryMailingAddress">Primary Mailing Address</th>
                        <th data-field="dollarAmount">Amount</th>
                        
                        <th data-field="memo">MEMO</th>
                        <th data-field="requestDate">Request Date</th>
                        <th data-field="checkDate">Check Date</th>
                        <th data-field="checkNumber">Check Number</th>
                        <th data-field="comments">Comments</th>
                        <th data-field="alternatePayee">Alternate Payee</th>
                        <th data-field="alternateMailingAddress">Alternate Mailing Address</th>
                        <th data-field="checkImage">Check Image</th>
                        <th data-field="status">Status</th>
                        <th data-field="action">Action</th>
                        <th data-field="invalid">INVALID</th>
                    </tr>
                </thead>
            </Table>
        </div>    
        </div>
    )
}

export default SearchForm;

