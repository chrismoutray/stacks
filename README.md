
# install yeoman, grunt, grunt-karma

npm install -g yo
npm install -g grunt-cli
npm install -g grunt-karma
npm install -g generator-angularfire

# make project folder

mkdir stacks && cd stacks

# generate project

yo angularfire stacks

# install karma locally

npm install grunt-karma --save-dev
npm install karma-jasmine --save-dev

# remove cwd property ie delete this line

    cwd: '<%= yeoman.app %>'

# build > creates dist folder

grunt

# serve > serves app folder and starts watching for change

grunt serve