const express = require('express')
const URL = require('./models/URL')
// use nanoID to get random integers
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 5)

// get metadata
const got = require('got')
const metascraper = require('metascraper')([
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-description')()
])

const production = 'https://singyo-urlshortner.herokuapp.com/'
const development = 'http://localhost:3000/'
const baseUrl = (process.env.NODE_ENV ? production : development)
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { shortUrl: false })
})

router.post('/shorten', async (req, res) => {
  const inputUrl = req.body.originalUrl
  try {
    let shortId = nanoid(5)
    const findShortId = await URL.findOne({ shortId: shortId })
    const checkUrl = await URL.findOne({ originalUrl: inputUrl })

    // check if inputUrl is exist in database, render data or continue to made new record
    if (checkUrl) {
      return res.render('index', {
        checkUrl,
        img: checkUrl.img,
        shortUrl: checkUrl.shortUrl,
        title: checkUrl.title,
        description: checkUrl.description
      })
    }
    // check if nanoid duplicate accidentally the same shortId
    if (findShortId) { while (findShortId.shortId === shortId) { shortId = nanoid(5) } }

    // get metadata from inputUrl
    const { body: html, url } = await got(inputUrl)
    const metadata = await metascraper({ html, url })

    // save metadata and shortUrl as new record
    const newUrl = await URL.create({
      originalUrl: inputUrl,
      shortId: shortId,
      shortUrl: baseUrl + shortId,
      title: metadata.title,
      description: metadata.description,
      img: metadata.image
    })

    // render new data
    res.render('index', {
      newUrl,
      img: newUrl.img,
      shortUrl: newUrl.shortUrl,
      title: newUrl.title,
      description: newUrl.description
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/:shortId', async (req, res) => {
  try {
    const findRecord = await URL.findOne({ shortId: req.params.shortId })
    if (findRecord) {
      console.log(findRecord.originalUrl)
      const originalUrl = findRecord.originalUrl
      res.redirect(originalUrl)
    } else {
      const alert = baseUrl + req.params.shortId
      res.render('index', { alert })
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
