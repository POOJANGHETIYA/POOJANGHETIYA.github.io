const router = require('express').Router();
const crypto = require('crypto');
const Url = require('../models/url');
// Function to shorten URL
const shortenUrl = async (originalUrl) => {
  // Generate a unique hash based on the original URL
  if(!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
    originalUrl = 'https://' + originalUrl;
    console.log(originalUrl);
  }
  const hash = crypto.createHash('sha256').update(originalUrl).digest('hex').substring(0, 4);
  
  // Check if the URL with the generated hash already exists in the database
  let url = await Url.findOne({ shortUrl: hash });
  
  // Return the generated hash and the found URL (if any)
  return { hash, url };
};

// Route to handle URL shortening
router.post('/shorten', async (req, res) => {
  try {
    let { originalUrl } = req.body;

    // check if originalUrl starts with http:// or https://. If not then add https://
    if(!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
      originalUrl = 'https://' + originalUrl;
    }


    // Check if the original URL is provided in the request body
    if (!originalUrl) {
      return res.status(400).json({ message: 'Missing original URL' });
    }

    // Call the shortenUrl function to get the hash and the existing URL (if any)
    const { hash, url } = await shortenUrl(originalUrl);

    // If the URL already exists in the database, return the existing short URL
    if (url) {
      return res.json({ shortUrl: url.shortUrl });
    }

    // If the URL doesn't exist in the database, create a new entry and save it
    const newUrl = new Url({ originalUrl, shortUrl: hash });
    await newUrl.save();

    // Return the newly created short URL
    return res.json({ shortUrl: newUrl.shortUrl });
  } catch (err) {
    // Handle any errors that may occur during the process and return an error response
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;