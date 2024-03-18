import express from "express";
import bookModels from "../Models/bookModel.js";

const routers = express.Router()

routers.route('/book')
.get(async (req, res) => {
    try{
        const Book = await bookModels.find({})
        return res.status(200).json(Book)
    }catch(err){
        res.status(404).send("could not send request")
        console.log(err)
    }
})// Read
.post(async (req, res) => {
    try{
        const addBook = {
            BookName: req.body.BookName,
            Author: req.body.Author,
            PublishedYear: req.body.PublishedYear
        }
        const Book = await bookModels.create(addBook)
        return res.status(200).send(Book)
    }catch(err){
        res.status(404).send("could not send request")
        console.log(err)
    }
})// Create

routers.route('/book/:id')
.get(async (req, res) => {
    try{
        const { id } = req.params
        const Book = await bookModels.findById(id)
        return res.status(200).json(Book)
    }catch(err){
        res.status(404).send("could not send request")
        console.log(err)
    }
})
.put(async (req, res) => {
    try{
        const { id } = req.params
        const updateData = {
            BookName: req.body.BookName,
            Author: req.body.Author,
            PublishedYear: req.body.PublishedYear
        }
        const Book = await bookModels.findByIdAndUpdate(id, updateData)
        return res.status(200).json(Book)
    }catch(err){
        res.status(404).send("could not send request")
        console.log(err)
    }
})// update
.delete(async (req, res) => {
    try{
        const { id } = req.params
        const Book = await bookModels.findByIdAndDelete(id)
        return res.status(200).json(Book)
    }catch(err){
        res.status(404).send("could not send request")
        console.log(err)
    }
})// delete

export default routers