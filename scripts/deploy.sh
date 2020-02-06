#!/bin/bash
# To be run on the server after the TAR file has been published
pushd mrsnailman-blog
rm -rf build*
mv ../build.tar.gz .
tar zxf build.tar.gz
docker-compose restart
popd
