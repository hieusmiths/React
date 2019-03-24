import React, { Component } from 'react';

class CardAddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            statusEdit : true,

        }
        
    }

    display = () => {
        if(this.state.statusEdit === true ){
            return <div onClick={ () => this.changeStatus() } className="btn btn-outline-dark">Đóng</div> ;
        }
        else{
            return <div onClick={ () => this.changeStatus()  } className="btn btn-outline-info">Thêm Mới</div>;
        }
    }

    changeStatus = () =>{
        this.setState({
            statusEdit: !this.state.statusEdit,

        })
    }
    displayForm = () =>{
        if(this.state.statusEdit === true)
        {
            return (
                <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Thêm Mới Nhân Sự</div>
                        <div className="card-body text-info">
                        <label htmlFor="true" className="font-italic">Full Name</label>
                        <input className="form-control" name="true" placeholder="Nhập Full Name" />
                        <label htmlFor="true" className="font-italic">Full SDT</label>
                        <input className="form-control" name="true" placeholder="Nhập SDT" />
                        <label htmlFor="true" className="font-italic">Chọn authority</label>
                        <select className="form-control form-control-sm custom-select" name="true" id="true" required>
                            <option value={1}>Admin</option>
                            <option value={2}>Moder</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="card-footer bg-transparent border-dark text-center"><button className="btn btn-info"> Add New
                        </button></div>
                    </div>
            )
        }
        else{
            return <div></div>
        }
    }
    render() {
        return (
            <div className="card-add-user">

                <div className="btn-group mb-4">
                    { this.display() }                    
                </div>
                    { this.displayForm() }
                </div>

        );
    }
}

export default CardAddUser;