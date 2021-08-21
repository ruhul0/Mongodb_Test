const express = require ('express');
// const mongoose = require ('mongoose');
// const Blog = require ('./models/blog');
// //connect mongo db
// const dbUrl = 'mongodb+srv://ruhul:test@realmcluster.ytpgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true})
//     .then((result) => console.log('connected to db'))
//     .catch((err) => console.log(err));




// const { MongoClient } = require('mongodb');
// const { app } = require('electron');
// const uri = "mongodb+srv://ruhul:test@realmcluster.ytpgs.mongodb.net/Test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// app.get('/add-blog',(req,res) => {
//     const blog = new Blog({
//         title : 'new blog',
//         snippet: 'test blog',
//         body: 'test blog to try mongodb'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })




var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// const Blog= mongoose.model('Blog',blogSchema);


//Set up default mongoose connection
var mongoDB = 'mongodb+srv://ruhul:test@realmcluster.ytpgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

blogSchema.save();

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));