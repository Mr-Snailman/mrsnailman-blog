#!/bin/bash

yarn build
scp build.tar.gz www.thoughtfulbrew.com:.
ssh www.thoughtfulbrew.com ./deploy.sh
