#!/bin/bash

if [[ "$1" == "" ]]; then
  printf "ERROR: Please give CloudFront ID name as argument\n"
  exit 1
fi

CF_NAME="$1"
printf "\n***** INVALIDATE CLOUDFRONT SCRIPT BEGIN *****\n"
printf "Inavlidating CloudFront: ${CF_NAME}\n"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id ${CF_NAME} --paths "/*"

printf "\n***** INVALIDATE CLOUDFRONT SCRIPT END *****\n"
