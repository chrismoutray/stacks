LINK : fatal error LNK1181: cannot open input file 'Release\obj\bufferutil\bufferutil.obj' [\node_modules\karma\node_modules\socket.io\node_modules\socket.io-client\node_modules\ws\build\bufferutil.vcxproj]
LINK : fatal error LNK1181: cannot open input file 'Release\obj\validation\validation.obj' [\node_modules\karma\node_modules\socket.io\node_modules\socket.io-client\node_modules\ws\build\validation.vcxproj]

# Stacks

## what to do after clone from github

RUN nodejs cmd prompt as admin

set GYP_MSVS_VERSION=2012

npm install grunt --save-dev
npm install grunt-cli --save-dev
npm install -g grunt-cli

npm install karma --save-dev
npm install grunt-karma --save-dev
npm install karma-jasmine --save-dev

npm install imagemin-gifsicle  --save-dev

npm install
bower install

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
