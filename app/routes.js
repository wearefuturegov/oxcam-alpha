const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const aws = require('aws-sdk')

// Add your routes here - above the module.exports line

// Sign S3 requests
const S3_BUCKET = process.env.S3_BUCKET
aws.config.region = 'eu-west-2'

router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3()
  const fileName = req.query['file-name']
  const fileType = req.query['file-type']
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err)
      return res.end()
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }
    res.write(JSON.stringify(returnData))
    res.end()
  })
})

module.exports = router
