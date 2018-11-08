import React, { Component } from 'react';



const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh'
    }
}
class Dashboard extends Component {
    render() {
        
        return (
            <div style={style.container}>
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Welcome to your dashboard</h1>
                </header>
            </div>
        );
    }

    
    componentWillMount() {
        console.log('dashboard props', this.props)
    }
    
}

export default Dashboard;
