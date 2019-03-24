import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
        //khởi tạo props có cũng không sao nha
        // this.onClickMe = this.onClickMe.bind(this, 'Ahihi');
        this.state = {
            status: 0,
        }
    }
    onClickMe = function (text) {
        alert(text);
    }
    onClickMe(text) {
        alert(text);
    }
    onClickMe = (text) => {
        alert(text);
    }
    Noticafition = () => {
        alert(' Quái Quỷ Thật Edit');
    };
    NoticafitionTwo = () => {
        alert(' Quái Quỷ Thật Remove');
    };
    
    renderButton = () => {
        return (
        <div className="row">
            <div className="btn btn-group">
            <button type="button" className="btn btn-default" >
                Click Me !
            </button>
                <button onClick={ this.editStatus }  className="btn btn-info border" >Edit</button>
                <button  onClick={ this.Noticafition } className="btn btn-info border ">Save</button>
                <button  className="btn btn-danger border">Remove</button>
            </div>
        </div>
        );
    }

        

    renderForm = () => {
        return (
        <div className="row">
            <form className="form-inline">
                <div className="form-group">
                <label >
                <input ref={ (dataInput) => { this.trungGian = dataInput } } defaultValue={ this.props.tittle }  type="text" className="form-control" aria-describedby="helpId" />
                <div onClick={ this.editSave } className="btn btn-info"> Save </div>
                </label></div>
            </form>
        </div>
        )
    }
    displayCheck = () => {
        if(this.state.status === 0)
        {
            return this.renderButton();
        }
        else {
            return this.renderForm();
        }
    }

    editStatus = () => {
        this.setState({ status: 1});
    }

    editSave = () => {
        this.setState({ status: 0});
        console.log(this.trungGian.value);
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className= { "col-lg-6 " + this.props.order + " " + this.props.haha } > 
                        {/* //cái string col-lg-6 nhớ có space để + với string class css nhé.  */}
                        {/* cái haha kia là mình ví dụ nếu bạn có nhiều props muốn truyển vào nhé */}
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={this.props.img} alt="" />
                        </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">{ this.props.tittle  }</h2>
                            <p>{ this.props.description}</p>
                            { this.displayCheck() }
                        </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Section;