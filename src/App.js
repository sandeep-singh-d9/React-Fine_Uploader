import React, { Component } from 'react';
import FineUploaderS3 from 'fine-uploader-wrappers/s3';
import Gallery from 'react-fine-uploader';
import PropTypes from 'prop-types'

import logo from './logo.svg';
import './App.css';
import 'react-fine-uploader/gallery/gallery.css';

class App extends Component {
  constructor(props) {
    super(props); 
     this.state = {
       folderName : 'a/b/c' ,
       filename: 'AHSGSH'
     }
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.filename !== this.state.filename
  }
  render() {
    const folderName = this.state.folderName;
    const fileName = this.state.filename;
    const uploader = new FineUploaderS3({
      options: {
        request: {
          endpoint: "https://canfineuploads.s3-ca-central-1.amazonaws.com",
          accessKey: "AKIAXVWCICU3VAAPCGL3"
        },
        signature: {
          endpoint: "https://gnfmtl8n6j.execute-api.ca-central-1.amazonaws.com/prod",
          version: 4
        },
        chunking: {
          enabled: true
        },
        objectProperties: {
          region: "ca-central-1",
          key: function(fileId) { 
            console.log(this.getName(fileId), 'hagshags')
            const NewFile = this.getName(fileId)
            // console.log(this.getFilenameParam(fileId) , 'fileID') 
            // console.log(fileId), 'sandeep') 
              console.log(this.getUuid(fileId), 'sandeep'); 
              //----------for fileName to be  Same as in  user or Admin System---------------- 
              // return folderName + '/' + NewFile;
              // ---For File name from  a variable----------- 
              return folderName + '/' + fileName;
          }
        }
      }
    })
    return (
      <div className="App">
        <h1 className="centered">Secure 'Serverless' File Uploads with AWS Lambda, S3, and Zappa</h1>
        <Gallery className="gallery" uploader={uploader}/>
        { this.state.filename }
      </div>
    );
  }
}

export default App;
