import React, { Component } from 'react';
import {
    
    Redirect
} from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isRedirect : false,
            fSelect : "3",
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
        noidung += "/ Select : " + this.state.fSelect;
        noidung += "/ Img : " + this.state.fAnh;
        return noidung;
    }
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value,
        });
        
    }
    isFileChang = (event) =>{
        const nameFile = event.target.name;
        // const valueFile = event.target.value; 
        const TSFile = event.target.files[0].name; 
        console.log(nameFile);
        this.setState({
            fAnh : TSFile,
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
            console.log(this.state.fEmail);
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
                        <p htmlFor="true">Tùy Chọn</p>
                        <select value={ this.state.fSelect } onChange={(event) => {this.isChange(event)}} name="fSelect" className="form-control">
                            <option value="1">
                                Chọn 1
                            </option>
                            <option value="2">
                                Chọn 2
                            </option>
                            <option value="3">
                                Chọn 3
                            </option>
                        </select>

                        <p htmlFor="true">File</p>
                        <input onChange = { (event) => { this.isFileChang(event) }} name="fAnh" className="form-control" type="File" />
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