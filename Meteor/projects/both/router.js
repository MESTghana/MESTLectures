Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase",
  notFoundTemplate: '404'
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/projects', function () {
  this.render('projects');
}, {
  name: 'projects',

  waitOn: function(){
    return [
      Meteor.subscribe('projects')
    ]
  },

  data: function() {                // Data context for the route. Allows properties of retuned
  	return {                        // objects to be rendered in tempate e.g. {{pageTitle}}
  		projects: Projects.find().fetch(), 
  		pageTitle: 'This is my project page'
  	}
  }
});

Router.route('/projects/:category/', function(){
	this.render('projects');          // Render the same template as '/projects' route
}, {
	name: 'projectsCategory',

  waitOn: function(){
    var category = this.params.category;
    return Meteor.subscribe('projectsByCategory',category);
  },

	data: function(){
		return {                        // Return only documents with the category in the parameters
			projects: Projects.find().fetch(),
			pageTitle: 'Category: ' + this.params.category
		}
	}
})

Router.route('/projects/details/:_id', function(){
  this.render('projectDetail');
},{
  name: 'projectDetail',

  waitOn: function(){
    var _id = this.params._id;
    return [
      Meteor.subscribe('singleProject',_id),
      Meteor.subscribe('applicationsByProject',_id)
    ]
  },

  data: function(){
    var _id = this.params._id;

    return {
      project: Projects.findOne(_id),
      applications: Applications.find({project: _id}).fetch()
    }
  }
})

Router.route('/projects/:_id/edit',function(){
  this.render('editProject');
},{
  name: 'editProject',
  data: function(){
    var _id = this.params._id;
    return {
      project: Projects.findOne(_id)
    }
  }
})

Router.route('/dashboard', function(){
  this.render('dashboard');
},{
  name: 'dashboard',
  data: function(){
    if (Meteor.userId()){
      return {
        projects: Projects.find({owner: Meteor.userId()}).fetch()
      }
    }
  }
})


Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});