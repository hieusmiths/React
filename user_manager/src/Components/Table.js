import React, { Component } from 'react';
import TableDataUserRow from './TableDataUserRow';


class Table extends Component {
    
    tableFunction = () => {
        var DataUser = this.props.dataProps;
        return(
            DataUser.map( (value, key ) => {
                return (
                    <TableDataUserRow 
                    stt = { key } name = { value.name }
                    numberPhone = { value.tel }
                    permission = { value.permission }
                    key = {key}
                    >

                    </TableDataUserRow>
                );
            })
        );

    }

    render() {
        // var DataUser = this.props.dataProps;
        // console.log(DataUser);
        return (
            <div className="table">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number Phone</th>
                        <th scope="col">authority</th>
                        <th scope="col" width="170">Chang</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* {
                            DataUser.map( (value, key ) =>{
                                // dem++;
                                // or dùng key để làm STT luôn Do key Start by 0 you wil + 1 : this.props.stt + 1.
                                return(
                                <TableDataUserRow 
                                stt = { key } name = { value.name }
                                numberPhone = { value.tel }
                                permission = { value.permission }
                                key = {key}
                                >

                                </TableDataUserRow>
                                );
                            })
                        } */}
                        { this.tableFunction() }
                    </tbody>
                </table>
                </div>

        );
    }
}

export default Table;