const mongoose = require('mongoose')
const Book = require('../models/book')


const getAllBooks = async () => {
  try{
  const books = await Book.find({})
  return books
  }catch(error){
    throw error
  }
}

const getBookById = async (id) => {
  try{
  const book = await Book.findById(id)
  return book
  }catch(error){
    throw error
  }
}

const getBooksByCategory = async (categoryName) => {
  try {
    const books = await Book.find({ category: categoryName });
    return books;
  } catch (error) {
    throw new Error(error.message);
  }
};

const isBookBestseller = async () => {
  try {
    const bestsellerBooks = await Book.find({ isBestSeller: true });
    return bestsellerBooks;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = {
  getAllBooks,
  getBookById  ,
  getBooksByCategory,
  isBookBestseller
}