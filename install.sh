#!/bin/bash
sudo yum update -y

# docker
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $1 

# docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo curl -L https://raw.githubusercontent.com/docker/compose/1.25.3/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose

# Run init-letsencrypt.sh
curl -L https://raw.githubusercontent.com/wmnnd/nginx-certbot/master/init-letsencrypt.sh > init-letsencrypt.sh
sed -i "s/example\.org/thoughtfulbrew\.com/g" init-letsencrypt.sh
sed -i 's/email=""/email="thoughtfulbrew.com"/g' init-letsencrypt.sh
bash init-letsencrypt.sh

