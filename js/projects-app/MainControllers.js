app.controller('MainController', ['$scope', function($scope) {
// Proyectos Destacados
  $scope.dprojects = [
   {
    name: 'Astros',
    type: 'Desarrollo Web',
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
    type: 'Desarrollo Web',
    thumb: '../img/Proyectos/BusinessSenior-Project.svg',
    link: 'http://businesssenior.com.mx/'
   },
   {
    name: 'CIM',
    type: 'Desarrollo Web',
    thumb: '../img/Proyectos/CIM-Project.svg',
    link: 'http://comerciointernacionalmexicano.com.mx/'
   }
   ];
// Proyectos No Destacados
  $scope.nprojects = [
   // {
    // name: 'Kida',
    // type: 'Diseño Gráfico',
    // thumb: '../img/Proyectos/Kida-Project.svg',
    // link: 'http://kida.com.mx'
   // }
   ];
}]);
