app.controller('MainController', ['$scope', function($scope) {
  $scope.dprojects =
   [
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
    name: 'Insight',
    type: 'Desarrollo Web',
    thumb: '../img/Proyectos/Insight-Project.svg',
    link: 'https://triangle.mx/insight'
   },
   ];
  $scope.nprojects = [
   //{
    //name: 'Kibo',
    //type: 'Diseño Gráfico',
    //thumb: '../img/Proyectos/Kibo-Project.svg',
    //link: 'http://astros.triangle.mx/'
   //}
   {
    name: 'Kida',
    type: 'Diseño Gráfico',
    thumb: '../img/Proyectos/Kida-Project.svg',
    link: 'http://kida.com.mx'
   }
   ];
}]);
