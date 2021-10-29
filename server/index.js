const express = require('express');
const cors = require('cors');
const md5 = require('md5');
const ImageDataURI = require('image-data-uri');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
// cloudinary.config({
//     cloud_name: 'dya7fmsyw',
//     api_key: '336115674848397',
//     api_secret: 'I2H29ibIZeWdjBEpwIjf7fOcR7c',
//     secure: true
// });

// CLOUDINARY_URL=cloudinary://336115674848397:I2H29ibIZeWdjBEpwIjf7fOcR7c@dya7fmsyw

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server started');
    client.connect(err => {
        console.log('MongoDb connected');
        // const collection = client.db("test").collection("devices");
        // // perform actions on the collection object
        // client.close();
    });
});

app.get('/:string', (req, res) => {
    res.redirect('GET');
});

app.post('/create', (req, res) => {
    const { dataURI, name } = req.body;
    ImageDataURI.outputFile(dataURI, `${name}`).then((obj) => {
        cloudinary.v2.uploader.upload(`${name}`,
            function (error, result) {
                if (error) {
                    console.warn(error);
                    res.status(500).jsonp(error);
                }
                let hash = md5(`${result.public_id}${Date.now()}${result.url}${name}`).slice(0, 6);

                res.redirect(`http://localhost:8000/${hash}`);
            });
    }).catch((error) => {
        if (error) {
            console.warn(error);
            res.status(500).jsonp(error);
        }
    });
});

// http://localhost:8000/
// npm i --save express cors nodemon md5 image-data-uri cloudinary mongoose