import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCatalogList } from '../actions/catalog'
import ReactTable from "react-table"
import "react-table/react-table.css"
import { Link } from 'react-router-dom'

const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        
    },
    header: {
        textAlign: 'left',
        color: '#ffffff',
        backgroundColor: '#000'
    }
}
class Catalog extends Component {

    componentWillMount() {
        this.props.getCatalogList()
    }

    getList = () => {
        return (
            <div>
                <li>toto</li>
                <li>tata</li>
            </div>

        )

    }

    render() {
        const { catalog } = this.props
        const list = Object.values(catalog)
        console.log('list :', list)
        const SoundList = () => (
            <div className="pt-0">
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
                                        Cell: (({ original }) => <button className="btn btn-sm btn-info">Edit</button>),
        
                                    },
                                    {
        
                                        id: 'delete',
                                        Cell: (({ original }) => <button className="btn btn-sm btn-danger">Delete</button>),
        
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
            </div>
        )
        return (
            <div className="container-fluid pt-5" style={style.container}>
                <div className="text-center text-white">
                    <h1 className="font-weight-light pt-5 pb-5">Sounds catalog</h1>
                </div>
                <p><Link type="button" className="btn btn-sm btn-dark" to="/add-new-sound">Add New sound</Link></p>
                <div className="text-white">
                    <SoundList />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    catalog: state.catalogList
})
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCatalogList }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

