import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

const style = {
    dropzone: {
        position: 'relative',
        textAlign: 'center',
        width: '40rem',
        lineHeight: '2rem',
        height: '20rem',
        borderWidth: '4px',
        borderColor: 'rgba(102, 102, 102, 0.61)',
        borderStyle: 'dashed',
        borderRadius: '5px',
    },
    icon: {
        fontSize: '80px',
        color: '#00adff',
        paddingTop: '45px'
    },
    text: {
        fontSize: '2rem'
    }
}
class Uploader extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.onDrop = this.onDrop.bind(this)
    }

    onDrop(files) {
        this.setState({
          files
        });
      }

    render() {
        return (
            <div>
                <Dropzone
                    onDrop={this.onDrop}
                    disableClick
                    style={style.dropzone}
                >
                    {({ open }) => (
                        <React.Fragment>
                            <i className="material-icons" style={style.icon}>
                                cloud_download
                            </i>
                            <p className="text-muted pb-5" style={style.text}>Drag and drop Files to upload</p>
                            <button className="btn  btn-dark"  type="button" onClick={() => open()}>
                                Or select files to Upload.
                            </button>
                            <p>{JSON.stringify(this.state.files)}</p>

                        </React.Fragment>
                    )}
                </Dropzone>
            </div>
        );
    }
}

export default Uploader;
