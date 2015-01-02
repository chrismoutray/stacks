# Stacks

This is a test project to understand how to use angular-fire which was initially generated using yeoman.

## After GitHub clone

- Assumes npm and bower have been installed globally.
- Run NodeJS command prompt as admin.
- The module *socket.io-client* may throw build errors when doing npm install - ignore these.

Run the following commands:

    set GYP_MSVS_VERSION=2013

    npm cache clean
    npm install -g grunt-cli --save-dev
    npm install grunt --save-dev
    npm install socket.io-client --save-dev --msvs_version=2013
    npm install karma-phantomjs-launcher --save-dev
    npm install --msvs_version=2013
    bower install

Run through grunt commands to test it.

    grunt test
    grunt
    grunt clean
    grunt serve

## Grunt commands

Build; creates *dist* folder, and does stuff like reference CDNs

    grunt

Serve; serves *app* folder and starts watching for changes

    grunt serve

Test; run tests using mocks

    grunt test

Clean; cleans up the project, eg empties *dist* folder

    grunt clean

## Steps to setup from scratch

Install yeoman, grunt, grunt-karma

    npm install -g yo
    npm install -g grunt-cli
    npm install -g grunt-karma
    npm install -g generator-angularfire

Make project folder

    mkdir stacks
    cd stacks

Generate project

    yo angularfire stacks

Install karma locally

    npm install grunt-karma --save-dev
    npm install karma-jasmine --save-dev

Remove cwd property ie delete this line

    cwd: '<%= yeoman.app %>'
