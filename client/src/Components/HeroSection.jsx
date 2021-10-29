import React,{useState} from 'react';
import '../App.css';
import './HeroSection.css';
import { Button1 } from './Button';
import Button from '@material-ui/core/Button';


function HeroSection() {
    
    //     const [selectedFile,setSetelectedFile]=useState('null');
    //    const onFileChange = (event) => {
        
    //     setState({ selectedFile: event.target.files[0] });
        
    //     };
        
    //     const onFileUpload = (e) => {
        
    //     const formData = new FormData();
        
    //     formData.append(
    //         "myFile",
    //         state.selectedFile,
    //         state.selectedFile.name
    //     );
        
    //     console.log(state.selectedFile);
        
    //     // axios.post("api/uploadfile", formData);
    //     };
        
    //     // File content to be displayed after
    //     // file upload is complete
    //     fileData = () => {
        
    //     if (state.selectedFile) {
            
    //         return (
    //         <div>
    //             <h2>File Details:</h2>
                
    // <p>File Name: {state.selectedFile.name}</p>
    
                
    // <p>File Type: {state.selectedFile.type}</p>
    
                
    // <p>
    //             Last Modified:{" "}
    //             {state.selectedFile.lastModifiedDate.toDateString()}
    //             </p>
    
    //         </div>
    //         );
    //     } else {
    //         return (
    //         <div>
    //             <br />
    //             <h4>Choose before Pressing the Upload button</h4>
    //         </div>
    //         );
    //     }
    //     };
        


    function getDataUri(url, callback) {
        var image = new Image();
    
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; 
            canvas.height = this.naturalHeight; 
    
            canvas.getContext('2d').drawImage(this, 0, 0);

            callback(canvas.toDataURL('image/png'));
        };
    
        image.src = url;
    }
 
  return (

    

    <div className='hero-container' >
      <h1>Upload and share your images.</h1>
      <p>Click the below button and start uploading your images now. 32 MB limit. Direct image links and ishare-Code </p>

      <div className='hero-btns'>
          <div class="container">
          <div style={{
            width: 200,
            marginTop:'20px',
        }}>
            
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                // onChange={(e)=>{onFileChange(e)}} 
                />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="yellow" component="span" >
                    Choose files
                </Button>
            </label>

        </div>
            <Button1
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            //   onClick={this.onFileUpload}
            >
              Submit </Button1>
              
              
              
          </div>
        

      </div>
      
    </div>
  );
}

export default HeroSection;