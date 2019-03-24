import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Newitem extends Component {
    
    slugUrl = (str) =>{
        
     //    Chuyển hết sang chữ thường
    str = str.toLowerCase();     
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // slug = slug.toLowerCase();
 
    // //Đổi ký tự có dấu thành không dấu
    // slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    // slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    // slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    // slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    // slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    // slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    // slug = slug.replace(/đ/gi, 'd');
    // //Xóa các ký tự đặt biệt
    // slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    // //Đổi khoảng trắng thành ký tự gạch ngang
    // slug = slug.replace(/ /gi, " - ");
    // //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    // //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    // slug = slug.replace(/\-\-\-\-\-/gi, '-');
    // slug = slug.replace(/\-\-\-\-/gi, '-');
    // slug = slug.replace(/\-\-\-/gi, '-');
    // slug = slug.replace(/\-\-/gi, '-');
    // //Xóa các ký tự gạch ngang ở đầu và cuối
    // slug = '@' + slug + '@';
    // slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return str;
    }
    
    render() {
        return (
                <div className="col-4 pt-3 ">
                    <div className="card">
                    <div className="card-body">
                        <blockquote className="blockquote">
                        <img src={ this.props.anh } alt="true" className="img-fluid" />
                        <p> { this.props.mota }</p>
                        <Link  to={ "/chi-tiet/"  + this.slugUrl( this.props.tieude ) + "." + this.props.Tinid + ".html"} >
                            <footer className="card-blockquote"><cite title="Source title"> { this.props.tieude }</cite></footer>
                        </Link> 
                        </blockquote>
                    </div>
                    </div>
                    <hr />
                </div>
        );
    }
}

export default Newitem;