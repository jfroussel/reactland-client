import React, { Component } from 'react';
const style = {
    container: {
        backgroundColor: '#282c34',
        minHeight: '100vh'
    }
}
class Statistics extends Component {
    render() {
        return (
            <div style={style.container}>
                <header className="App-header">
                    <h1 className="font-weight-light pb-5">Statistics page</h1>
                </header>
            </div>
        );
    }
}

export default Statistics;