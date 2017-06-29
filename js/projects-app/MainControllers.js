app.controller('MainController', ['$scope', function($scope) { 
  $scope.projects = 
   [
   { 
    name: 'Astros', 
    type: 'Página Web',
    thumb: '../img/Proyectos/Astros-Project.svg',
    link: 'http://astros.triangle.mx/'
  }, 
  { 
    name: 'Learning English', 
    type: 'Colaboración',
    thumb: '../img/Proyectos/Learning-English-Project.svg',
    link: 'http://learning-english.triangle.mx/'
  }, 
  { 
    name: 'BusinessSenior', 
    type: 'Página Web',
    thumb: '../img/Proyectos/BusinessSenior-Project.svg',
    link: 'http://businesssenior.com.mx/'
  }, 
  { 
    name: 'Kibo', 
    type: 'Diseño Gráfico', 
    thumb: '../img/Proyectos/Kibo-Project.svg',
    link: 'http://astros.triangle.mx/'
  } 
  ];
}]);