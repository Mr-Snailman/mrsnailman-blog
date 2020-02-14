#!/bin/bash

yarn build
tar zcf build.tar.gz build/
scp build.tar.gz www.thoughtfulbrew.com:.
ssh www.thoughtfulbrew.com ./deploy.sh
