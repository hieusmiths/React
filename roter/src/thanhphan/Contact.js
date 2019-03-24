import React, { Component } from 'react';
import {
    BrowserRouter as 
    Redirect,
} from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isRedirect : false,
            // fPass : "",
            // fPhone : "",
            // fEmail: "",
            // fMess: "",
        }
    }

    getValue = () => {
        var noidung = "";
        noidung += "/ Mail : " + this.state.fEmail;
        noidung += "/ Password : " + this.state.fPass;
        noidung += "/ Number Phone : " + this.state.fPhone;
        noidung += "/ Message : " + this.state.fMess;
        return noidung;
    }
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value,
        });
        
    }
    submitForm = (event) =>{
        event.preventDefault();
        this.setState({
            isRedirect: true,
        });
    }
    render() {
        if (this.state.isRedirect) {
            console.log(this.getValue());
            return <Redirect to="/home" />;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto text-center">Register</div>
                </div>
                <div className="row"> 
                    <div className="col-3" />
                    <div className="col-6 ">
                    <div className="sing-up ">
                        <form>
                        <p htmlFor="true">Email</p>
                        <input onChange={ (event) => { this.isChange(event) } } name="fEmail" type="email" placeholder="Email" className="form-control" />
                        <p htmlFor="true">Password</p>
                        <input onChange ={ (event) => { this.isChange(event) } } name="fPass" type="password" placeholder="Password" className="form-control" />
                        <p htmlFor="true">Number Phones</p>
                        <input onChange ={ (event) => { this.isChange(event) } } name="fPhone" type="text" placeholder="Number Phones" className="form-control" />
                        <p htmlFor="true">Response</p>
                        <textarea onChange ={ (event) => { this.isChange(event) } }  name="fMess" id="true" className="form-control" rows={5} placeholder="Response" defaultValue={""} />
                        <button   type ="submit" onClick= { (event) => { this.submitForm(event) } } className="btn-info btn  mt-5 mb-3">Sing Up</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default Contact;