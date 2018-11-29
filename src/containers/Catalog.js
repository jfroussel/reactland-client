import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCatalogList } from '../actions/catalog'
import { userInfo } from '../actions/auth'
import { Link } from 'react-router-dom'
import CatalogList from "../components/catalog/List"

const style = {
    container: {
        backgroundColor: '#fff',
        minHeight: '100vh',

    }
}

class Catalog extends Component {

    componentWillMount() {
        const {id} = this.props.match.params
        console.log('user : ', id)
        if(id) {
            this.props.getCatalogList(id)
        } else {
            return console.log('no id')
        }
        
    }

    render() {
        const { catalog } = this.props
        return (
            <div className="container-fluid pt-5" style={style.container}>
                <div className="text-center">
                    <h1 className="font-weight-light pt-5 pb-5">Sounds catalog</h1>
                </div>
                <p className="text-center pb-5"><Link type="button" className="btn btn-sm btn-dark" to="/add-new-sound">Add New sound</Link></p>
               
                <div className="">
                    <CatalogList list={Object.values(catalog)} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    catalog: state.catalogList,
    user: state.userInfo,
})
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCatalogList, userInfo }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

