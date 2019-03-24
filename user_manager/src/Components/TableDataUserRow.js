import React, { Component } from 'react';

class TableDataUserRow extends Component {

    checkPermission = (permissionProp) => {
        if(permissionProp === 1 ){
            return "Admin";
        }
        else if(permissionProp === 2 ){
            return "Moder";
        }
        else{
            return "Dân Đen";
        }
    }
    checkPermissionWayTwo = () =>{
        if(this.props.permission === 1 ){
            return "Admin";
        }
        else if(this.props.permission === 2 ){
            return "Moder";
        }
        else{
            return "Dân Đen";
        }
    }

    render() {
        return (
            <tr>
                <th scope="row"> { this.props.stt + 1 }</th>
                <td>{ this.props.name }</td>
                <td>{ this.props.numberPhone }</td>
                <td> {  this.checkPermission(  this.props.permission  ) } 
                {/* ở trên là kiểu Parameter còn không thì kiểu thứ 2. */}
                {/* { this.checkPermissionWayTwo() } */}
                </td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-dark edit"> <i className="fa fa-edit" />Edit</div>
                    <div className="btn btn-warning delete"> <i />Delete</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataUserRow;