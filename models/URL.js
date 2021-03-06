const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('URL', recordSchema)
