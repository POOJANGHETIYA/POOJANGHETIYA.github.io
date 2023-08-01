// accessing a short URL
const router = require('express').Router();
const Url = require('../models/url');


router.get('/:shortUrl', async (req, res) => {
     const { shortUrl } = req.params;
   
     try {
       const url = await Url.findOne({
         shortUrl
       });
       if (!url) {
         return res.status(404).json({ message: 'URL not found' });
       }
   
       url.clicks++;
       await url.save();
   
      //  go to original URL
      res.redirect(url.originalUrl);
     } catch (err) {
       console.log(err);
       return res.status(500).json({ message: 'Internal server error' });
     }
   });
   
   
//    export
module.exports = router;