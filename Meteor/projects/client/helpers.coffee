Template.registerHelper 'User', ->
  Meteor.user()
  
Template.registerHelper 'ownProjectsCount', ->
  Projects.find(owner: Meteor.userId()).count()
