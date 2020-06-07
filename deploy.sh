#!/bin/bash

if [[ "$1" != "" ]]; then
    S3_NAME="$1"
    printf "\n***** DEPLOY SCRIPT BEGIN *****\n"
    printf "Deploying S3 Bucket: ${S3_NAME}\n"
else
    printf "ERROR: Please give S3 bucket name as argument\n"
    exit 1
fi

# replace files with gzip versions
printf "\nReplacing files with gzip versions...\n"
for old in dist/*.gz; do
    mv $old ${old%%.gz*};
done;

# Test S3 connection with ls
printf "\nS3 ls ...\n"
aws s3 ls || { printf 'ERROR: failed to connect to S3'; }

# Remove old files
printf "\nS3 rm *.js/*.css/*.html ...\n"
aws s3 rm s3://${S3_NAME} --recursive --exclude "*" --include "*.css" --include "*.js" --include "*.html" || { printf 'ERROR: failed to remove old files from S3'; }
# aws s3 rm s3://jaredgkraemer.com --recursive --exclude "*" --include "*.css" --include "*.js" --include "*.html" || { printf 'ERROR: failed to remove old files from S3'; }

# Sync js and css
printf "\nS3 sync *.js/*.css ...\n"
aws s3 sync dist/ s3://${S3_NAME} --metadata-directive REPLACE --exclude "*" --include "*.css" --include "*.js" --content-encoding gzip || { printf 'ERROR: Failed to copy "*.js/*.css" to S3'; }

# Sync index.html
printf "\nS3 cp index.html ...\n"
aws s3 cp dist/index.html s3://${S3_NAME}/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --content-encoding gzip || { printf 'ERROR: Failed to copy "index.html" to S3'; }
# aws s3 cp dist/index.html s3://jaredgkraemer.com/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --content-encoding gzip || { printf 'ERROR: Failed to copy "index.html" to S3'; }

# Sync photos
printf "\nS3 sync assets ...\n"
aws s3 sync dist/assets s3://${S3_NAME}/assets --metadata-directive REPLACE || { printf 'ERROR: Failed to copy "assets" to S3'; }

printf "\n***** DEPLOY SCRIPT END *****\n"
