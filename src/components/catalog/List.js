import React, { Component } from 'react';
import ReactTable from "react-table"
import "react-table/react-table.css"
import { Link } from 'react-router-dom'
const style = {
    header: {
        textAlign: 'left',
        color: '#000',
        backgroundColor: '#000'
    }
}

class SoundList extends Component {
    render() {
        const { list } = this.props
        return (
            <div>
                <ReactTable
                        data={list[0]}
                        columns={[
                            
                            {
                                columns: [
                                    
                                    {
                                        Header: "Title",
                                        accessor: "title",
                                        minWidth: 200,
                                        
                                    },
                                    {
                                        Header: "Filename",
                                        accessor: "filename",
                                        minWidth: 300,
                                    },
                                    {
                                        Header: "Author",
                                        accessor: "author",
        
                                    },
        
                                    {
                                        Header: "BPM",
                                        accessor: "bpm",
        
                                    },
                                    {
                                        Header: "Tone",
                                        accessor: "tone",
        
                                    },
                                    {
                                        Header: "Lenght",
                                        accessor: "lenght",
        
                                    },
                                    {
                                        Header: "Loops",
                                        accessor: "loops",
                                        style: {
                                            cursor: "pointer",
                                            textAlign: "left",
        
                                        },
                                    },
                                    {
        
                                        id: 'edit',
                                        Cell: (({ original }) => <Link to={`/sound-edit/${original._id}`} className="btn btn-sm btn-dark">Edit</Link>),
        
                                    },
                                    {
        
                                        id: 'delete',
                                        Cell: (({ original }) => <Link to={`/sound-delete/${original._id}`} className="btn btn-sm btn-danger">Delete</Link>),
        
                                    },
                                    
        
                                ]
                            },
                        ]}
                        defaultPageSize={5}
                        headerStyle={style.header}
                        sortable={true}
                        noDataText="No data found !"
                        className="-striped -highlight"
                        
                    />
            </div>
        );
    }
}

export default SoundList;
