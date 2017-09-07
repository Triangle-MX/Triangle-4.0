var app = angular.module("projectsApp", []);

// ng-alt
app.directive('ngAlt', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      if (attrs.ngAlt) {
        elem.on('load', function (event) {
          elem[0].setAttribute("alt", attrs.ngAlt);
        });
      }
    }
  };
});