import React, { Component } from 'react'

class Profile extends Component {
   constructor(props) {
       super(props)
       this.state = {}
   }
   componentWillMount() {
       //console.log('PROPS : ', this.props)


   }
   
    render() {
        const {info} = this.props
        return (
            <div>
             <h4>your profile information </h4> 
             <hr/> 
             Username : {info.username}<br/>
             Email : {info.email}<br/>
             Id : {info._id}
            </div>
        );
    }
}

export default Profile
