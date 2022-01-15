#!/bin/bash
# Publish site directory to aws s3
# And create invalidation on CloudFront

flags="--delete --acl public-read"

s3Path="s3://content.nathanorick.com/svordle/"

cloudFrontId="EJNN9SNOWGNCB"

npm run build
aws s3 sync public $s3Path $flags

aws cloudfront create-invalidation --distribution-id $cloudFrontId --paths '/*'