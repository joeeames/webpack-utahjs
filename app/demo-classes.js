var app = require('./app.js');
console.log('hi');
console.log(app.name);
app.directive('demoClasses', function() {
  return {
    template: require('./demo-classes.html')
  };
});
