import React from 'react';
import './login.css';

const LogIn = () => {
    return (
        <form className="allform">


            <div className="login">
                <div className="form-row align-items-center">
                    <h2>LogIn here</h2>
                    <div className="col-sm-3 my-1">
                        <input aria-label="city" type="text" className="form-control" id="inlineFormInputName" placeholder="E-mail" />
                    </div>


                    <div className="col-sm-3 my-1">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input aria-label="city" type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Password" />
                        </div>
                    </div>


                    <div className="col-auto my-1">
                        <div className="form-check">
                            <input aria-label="city" className="form-check-input" type="checkbox" id="autoSizingCheck2" /> Remember me
                        
                        </div>
                    </div>


                    <div className="col-auto my-1">
                        <button type="submit" className="btn btn-primary">LogIn</button>
                    </div>


                </div>
            </div>




            <div className="sigin">
                <div className="siginwrap">
                    <div className="form-row">
                        <h2>Create, account here</h2>
                        <div className="col-md-4 mb-3">
                            <input aria-label="city" type="text" className="form-control" id="validationDefault01" placeholder="E-mail"  required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <input aria-label="city" type="text" className="form-control" id="validationDefault02" placeholder="Password"  required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                </div>
                                <input aria-label="city" type="text" className="form-control" id="validationDefaultUsername" placeholder="Name"  required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                     
                            <input aria-label="city" aria-label="city" type="text" className="form-control" id="validationDefault03" placeholder="City" required />
                        </div>
                        <div className="col-md-3 mb-3">
                       
                            <input aria-label="city"  type="text" className="form-control" id="validationDefault04" placeholder="State" required />
                        </div>
                        <div className="col-md-3 mb-3">
                      
                            <input aria-label="city" type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input aria-label="city" className="form-check-input" type="checkbox" value="" id="invalidCheck2" required /> Agree to terms and conditions
                        
      
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Create account</button>
                </div>
            </div>


        </form>
    )
}

export default LogIn
