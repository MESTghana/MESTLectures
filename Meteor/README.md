### Meteor ###
This readme contains a number of exercises that the 2016s did in class.

#### Sponsored Resources ####
[Discover Meteor eBook](http://discovermeteor.com)

[Meteor Testing Manual](http://meteortesting.com)

[Modulus.io Hosting Credits](http://modulus.io) - Search `7ro6TQ3vg7N3uRVY9aAd` in your Gmail inbox

Video tutorials from Josh Owens - Search `fJEAGJM4XJ5VxhrKUPjh` in your Gmail inbox

List of additional learning resources: http://learn.meteorfactory.io/meteor-learning-resources/

### [Templates and Helpers](https://book.discovermeteor.com/chapter/templates) ###
HTML is broken up into [templates](http://docs.meteor.com/#/basic/defining-templates). Helpers connect HTML with JS.

### My class ###

#### 1.0 Create an array of objects representing class mates ####
* Create a new project, delete the initial files and create a client folder and `main.html`,`main.css` and `main.js` files
* Create an array of objects representing at least 5 classmates. Include name, age and gender
* Cycle through using `{{#each}}`

#### 1.1 {{#if}} gender ####
* Use an `{{#if}}` helper block to respect the person's gender

#### 1.2 {{#with}} myself ####
* Create a `me` variable that's an object with some properties about yourself
* Create a helper that return this object
* Use `{{#with}}` to get insde that object and print out some properties
* Add an array of `interests` to yourself and cycle through them with `{{#each}}`

#### 1.3 Helper functions ####
* Create a helper which accepts an argument. `isOver25 age` that returns true or false
* Use `{{#if}}` and integrate your helper into the app

#### 1.4 Temporary data: Using [Session](http://docs.meteor.com/#/basic/Session-get) ####
* Create an input where you can type to change a session variable
* Return the session variable as the page title
* Create a switch to turn on off / rainbow colours using a `true` / `false` Session variable

#### 1.5 [Collections](http://docs.meteor.com/#/basic/Mongo-Collection) ####
* Create a new project with a `both` and a `client` folder
* Create a `Questions` collection
* Create a simple form with one input

### 2.0 User accounts ###
`meteor add accounts-base`


Allows signup with email/password `meteor add accounts-password`

Signup with facebook `meteor add accounts-facebook`

Provides a template `ian:accounts-ui-bootstrap-3`. Add `{{> loginButtons}}` to your app.

OR

Adds signup pages `useraccounts:semantic-ui`

### 3.0 Jobs board ###
Create a jobs board with the following functionality:
* Sign up / in / out
* Only signed in users can post a job
* Filter jobs by categories
* Users can edit / delete their own jobs

### 4.0 Image upload ###
* `meteor add cfs:standard-packages`
* `meteor add cfs:gridfs`
* `meteor add yogiben:autoform-file`
* Create your collectionFS as per step 2 of [yogiben:autoform-file](https://github.com/yogiben/meteor-autoform-file)
* Update your schemas as per step 4 of [yogiben:autoform-file](https://github.com/yogiben/meteor-autoform-file)

## Testing ##
Velocity is the middle-man between your Testing Framework (e.g. Mocha) and your Meteor App

READ: http://www.meteortesting.com/chapter/test-first-techniques
READ and DO EXAMPLE: http://www.meteortesting.com/chapter/velocity

CLONE & RUN ‘leaderboard-mocha’ https://github.com/meteor-velocity/velocity-examples

ADD FEATURE button to reduce score by 5
ADD TEST for above feature

## Mobile ##
Meteor uses [Cordova](https://cordova.apache.org/) to build hybrid mobile apps.

[Simple examples of apps](https://github.com/meteor/mobile-packages)

### Turning your app into meteor app ###
Go to any meteor project or create one

e.g. `meteor create --example todos` 

Set up mobile: `meteor add-platform android` / `meteor add-platform ios`

Run on emulator: `meteor run android` / `meteor run ios`

Run on device: `meteor run android-device` / `meteor run ios-device`

[Really good notes on meteor + mobile](https://github.com/Differential/meteor-mobile-cookbook)

### Using [Ionic](http://ionicframework.com/) ###
Ionic is arguably the most polished hybrid mobile framework.

Combining Meteor + Ionic: [Project and docs](https://github.com/meteoric/meteor-ionic)

[Ionic compontents](http://meteor-ionic.meteor.com/)

Example app: [Product hunt clone](http://meteorhunt.meteor.com/products/XEHdH3ccQv7PfmyZo)
