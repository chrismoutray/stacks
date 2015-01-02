# Stacks

## what to do after clone from github

- Run NodeJS command prompt as admin
- The module *socket.io-client* may throw build errors when doing npm install - ignore these

    set GYP_MSVS_VERSION=2013

    npm cache clean
    npm install -g grunt-cli --save-dev
    npm install grunt --save-dev
    npm install socket.io-client --save-dev --msvs_version=2013
    npm install karma-phantomjs-launcher --save-dev
    npm install --msvs_version=2013
    bower install

### run through grunt commands to test it

    grunt test

    grunt

    grunt clean

    grunt serve

## steps to setup from scratch

### install yeoman, grunt, grunt-karma

    npm install -g yo
    npm install -g grunt-cli
    npm install -g grunt-karma
    npm install -g generator-angularfire

### make project folder

    mkdir stacks && cd stacks

### generate project

    yo angularfire stacks

### install karma locally

    npm install grunt-karma --save-dev
    npm install karma-jasmine --save-dev

### remove cwd property ie delete this line

    cwd: '<%= yeoman.app %>'

### build > creates dist folder

    grunt

### serve > serves app folder and starts watching for change

    grunt serve
