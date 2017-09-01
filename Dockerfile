FROM 381780986962.dkr.ecr.ap-southeast-1.amazonaws.com/gr-devo/node:8.0.0

RUN apt-get update -y

# Install git
RUN apt-get install -y git

# Install jq
RUN apt-get install -y jq

# Install docker
RUN apt-get install -y \
   apt-transport-https \
   ca-certificates \
   curl \
   gnupg2 \
   software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt-get update -y
RUN apt-get install -y docker-ce

# Install aws cli
RUN apt-get install -y python2.7 python2.7-dev
RUN apt-get install -y python-pip
RUN pip install --upgrade --user awscli

# Copy git, gcp & aws config & credentials
COPY gitconfig gitconfig
COPY aws-devo aws-devo
COPY gcp-devo.json .

# Installing node dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY base-image base-image
COPY base-image.sh .
COPY custom-image custom-image
COPY custom-image.sh .
COPY app.sh .
COPY app-deploy.sh .
COPY server.js .

EXPOSE 80

CMD export PATH=$PATH:/root/.local/bin/ && cp gitconfig /root/.gitconfig && cp -r aws-devo /root/.aws \
    && npm start
