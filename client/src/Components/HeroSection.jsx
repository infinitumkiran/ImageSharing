import React, { useState } from 'react';
import '../App.css';
import './HeroSection.css';
import { Button1 } from './Button';
import Button from '@material-ui/core/Button';

function HeroSection() {

    const [selectedFile, setselectedFile] = useState(null);

    const onFileChange = (event) => {

        setselectedFile({ selectedFile: event.target.files[0] });
        console.log(event.target.files[0]);

    };

    const onFileUpload = (e) => {

        const formData = new FormData();

        formData.append(
            "myFile",
            selectedFile,
        );
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');

        make_base();

        function make_base() {
            var base_image = new Image();
            base_image.src = selectedFile.name;
            base_image.onload = function () {
                context.drawImage(base_image, 100, 100);
            }
        }
        var jpegUrl = canvas.toDataURL("image/jpeg");
        console.log(jpegUrl);
    };

    // File content to be displayed after
    // file upload is complete
   
    const addImageUri = async() =>{

      await axios.post("",).then((response)=>{
            console.log(response);
          }).catch((error) =>{
            console.log(error);
          })
      }


    return (



        <div className='hero-container' >
            <h1>Upload and share your images.</h1>
            <p>Click the below button and start uploading your images now. 32 MB limit. Direct image links and ishare-Code </p>

            <div className='hero-btns'>
                <div class="container">
                    <div style={{
                        width: 200,
                        marginTop: '20px',
                    }}>

                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            onChange={(e) => { onFileChange(e) }}
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
                        onClick={(e) => onFileUpload(e)}
                    >
                        Submit </Button1>



                </div>


            </div>

        </div>
    );
}

export default HeroSection;