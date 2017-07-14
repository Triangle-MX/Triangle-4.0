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
    name: 'Insight',
    type: 'Desarrollo Web',
    thumb: '../img/Proyectos/Insight-Project.svg',
    link: 'http://insight.triangle.mx'
   },
   ];
// Proyectos No Destacados
  $scope.nprojects = [
   //{
    //name: 'Kibo',
    //type: 'Diseño Gráfico',
    //thumb: '../img/Proyectos/Kibo-Project.svg',
    //link: 'http://astros.triangle.mx/'
   //},
   //{
    //name: 'Laafayette',
    //type: 'Desarrollo Web',
    //thumb: '../img/Proyectos/Lafayette-Project.svg',
    //link: 'http://poligrafialafayette.com/'
   //},
   {
    name: 'Kida',
    type: 'Diseño Gráfico',
    thumb: '../img/Proyectos/Kida-Project.svg',
    link: 'http://kida.com.mx'
   }
   ];
// English Featured Projects
   $scope.endprojects = [
       {
        name: 'Astros',
        type: 'Web Development',
        thumb: '../../img/Proyectos/Astros-Project.svg',
        link: 'http://astros.triangle.mx/'
       },
       {
        name: 'Learning English',
        type: 'Collaboration',
        thumb: '../../img/Proyectos/Learning-English-Project.svg',
        link: 'http://learning-english.triangle.mx/'
       },
       {
        name: 'BusinessSenior',
        type: 'Web Development',
        thumb: '../../img/Proyectos/BusinessSenior-Project.svg',
        link: 'http://businesssenior.com.mx/'
       },
       {
        name: 'Insight',
        type: 'Web Development',
        thumb: '../../img/Proyectos/Insight-Project.svg',
        link: 'http://insight.triangle.mx'
       },
   ];
// English Non-Featured Projects
   $scope.ennprojects = [
       //{
        //name: 'Kibo',
        //type: 'Diseño Gráfico',
        //thumb: '../img/Proyectos/Kibo-Project.svg',
        //link: 'http://astros.triangle.mx/'
       //},
       //{
        //name: 'Laafayette',
        //type: 'Desarrollo Web',
        //thumb: '../img/Proyectos/Lafayette-Project.svg',
        //link: 'http://poligrafialafayette.com/'
       //},
       {
        name: 'Kida',
        type: 'Graphic Design',
        thumb: '../../img/Proyectos/Kida-Project.svg',
        link: 'http://kida.com.mx'
       }
   ];
}]);
