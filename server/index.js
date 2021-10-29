const express = require('express');
const cors = require('cors');
const md5 = require('md5');
const ImageDataURI = require('image-data-uri');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const fs = require('fs');
const { MONGOURI, CLOUDFARE } = require('./keys.js');
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const objectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        unique: true
    }
})
mongoose.model('object', objectSchema);
const imgObj = mongoose.model('object')
cloudinary.config(CLOUDFARE);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server started');
    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB")
    });
    mongoose.connection.on('error', (err) => {
        console.log(err)
    });
});

app.get('/find/:string', (req, res) => {
    imgObj.findOne({ hash: req.params.string }, function (err, obj) {
        if (err) {
            res.jsonp(err);
        } else { res.jsonp(obj); }
    });
});

app.get('/', (req, res) => {
    imgObj.find(function (err, obj) {
        if (err) {
            res.jsonp(err);
        } else { res.jsonp(obj); }
    });
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
                let obj = new imgObj({ name, url: result.url, hash });
                obj.save().then(() => {
                    res.status(200).send(`http://localhost:8000/find/${hash}`);
                }).catch((err) => {
                    res.status(422).json({ error: err })
                });
            });
        fs.unlink(name, function (err) {
            if (err) return console.log(err);
            console.log('file deleted successfully');
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