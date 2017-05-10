SolderGuide.config(['$stateProvider', '$urlRouterProvider', routes]);


function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('menu', menu)
      .state('federlzakon', federlzakon)
      .state('federlzakon1', federlzakon1)
      .state('federlzakon2', federlzakon2)
      .state('federlzakon3', federlzakon3)
      .state('federlzakon4', federlzakon4)
      .state('federlzakon5', federlzakon5)
      .state('federlzakon6', federlzakon6)
      .state('federlzakon7', federlzakon7)
      .state('federlzakon8', federlzakon8)
      .state('ustav', ustav)
      .state('ustav.part1', ustav1)
      .state('ustav.part2', ustav2)
      .state('ustav.part3', ustav3)
      .state('ustav.part4', ustav4)
      .state('ustav.part5', ustav5)
      .state('ustav.part6', ustav6)
      .state('prikaz', prikaz)
      .state('prikaz.part1', prikaz1)
      .state('prikaz.part2', prikaz2)
      .state('prikaz.part3', prikaz3)
      .state('prikaz.part4', prikaz4)
      .state('prikaz.part5', prikaz5)
      .state('prikaz.part6', prikaz6)
      .state('prikaz.part7', prikaz7)
      .state('prikaz.part8', prikaz8)
      .state('prikaz.part9', prikaz9)
      .state('dopdoc', dopdoc)
      .state('dopdoc.part1', dopdoc1)
      .state('dopdoc.part2', dopdoc2)
      .state('dopdoc.part3', dopdoc3)
      .state('dopdoc.part4', dopdoc4)
      .state('boevpodgotovka', boevpodgotovka)
      .state('boevpodgotovka.part1', boevpodgotovka1)
      .state('boevpodgotovka.part2', boevpodgotovka2)
      .state('boevpodgotovka.part3', boevpodgotovka3)
      .state('boevpodgotovka.part4', boevpodgotovka4)
      .state('boevpodgotovka.part5', boevpodgotovka5)
      .state('boevpodgotovka.part6', boevpodgotovka6)
      .state('boevpodgotovka.part7', boevpodgotovka7)
      .state('armprazdnik', armprazdnik)

    $urlRouterProvider.otherwise('/');
}


/************************
 * State Controllers
 ************************/
var menu = {
  url: '/',
  templateUrl: 'pages/identification.html',
  cache: false
};


var federlzakon = {
  url: '/federlzakon',
  cache: false,
  templateUrl: 'pages/fz.html'
};

var federlzakon1 = {
    url: '/federlzakon1',
    cache: false,
    templateUrl: 'pages/fz1.html'
};
var federlzakon2 = {
    url: '/federlzakon2',
    cache: false,
    templateUrl: 'pages/fz2.html'
};
var federlzakon3 = {
    url: '/federlzakon3',
    cache: false,
    templateUrl: 'pages/fz3.html'
};
var federlzakon4 = {
    url: '/federlzakon4',
    cache: false,
    templateUrl: 'pages/fz4.html'
};
var federlzakon5 = {
    url: '/federlzakon5',
    cache: false,
    templateUrl: 'pages/fz5.html'
};
var federlzakon6 = {
    url: '/federlzakon6',
    cache: false,
    templateUrl: 'pages/fz6.html'
};
var federlzakon7 = {
    url: '/federlzakon7',
    cache: false,
    templateUrl: 'pages/fz7.html'
};
var federlzakon8 = {
    url: '/federlzakon8',
    cache: false,
    templateUrl: 'pages/fz8.html'
};

var ustav = {
  url: '/ustav',
  cache: false,
  templateUrl: 'pages/ustavi.html'
};

var ustav1 = {
    url: '/ustav1',
    cache: false,
    templateUrl: 'pages/ustavi1.html'
};
var ustav2 = {
    url: '/ustav2',
    cache: false,
    templateUrl: 'pages/ustavi2.html'
};
var ustav3 = {
    url: '/ustav3',
    cache: false,
    templateUrl: 'pages/ustavi3.html'
};
var ustav4 = {
    url: '/ustav4',
    cache: false,
    templateUrl: 'pages/ustavi4.html'
};
var ustav5 = {
    url: '/ustav5',
    cache: false,
    templateUrl: 'pages/ustavi5.html'
};

var ustav6 = {
    url: '/ustav6',
    cache: false,
    templateUrl: 'pages/ustavi6.html'
};

var prikaz = {
  url: '/prikaz',
  cache: false,
  templateUrl: 'pages/prikazi.html'
};
var prikaz1 = {
    url: '/prikaz1',
    cache: false,
    templateUrl: 'pages/prikazi1.html'
};
var prikaz2 = {
    url: '/prikaz2',
    cache: false,
    templateUrl: 'pages/prikazi2.html'
};
var prikaz3 = {
    url: '/prikaz3',
    cache: false,
    templateUrl: 'pages/prikazi3.html'
};
var prikaz4 = {
    url: '/prikaz4',
    cache: false,
    templateUrl: 'pages/prikazi4.html'
};
var prikaz5 = {
    url: '/prikaz5',
    cache: false,
    templateUrl: 'pages/prikazi5.html'
};
var prikaz6 = {
    url: '/prikaz6',
    cache: false,
    templateUrl: 'pages/prikazi6.html'
};
var prikaz7 = {
    url: '/prikaz7',
    cache: false,
    templateUrl: 'pages/prikazi7.html'
};
var prikaz8 = {
    url: '/prikaz8',
    cache: false,
    templateUrl: 'pages/prikazi8.html'
};
var prikaz9 = {
    url: '/prikaz9',
    cache: false,
    templateUrl: 'pages/prikazi9.html'
};

var dopdoc = {
  url: '/dopdoc',
  cache: false,
  templateUrl: 'pages/dd.html'
};
var dopdoc1 = {
    url: '/dopdoc1',
    cache: false,
    templateUrl: 'pages/dd1.html'
};
var dopdoc2 = {
    url: '/dopdoc2',
    cache: false,
    templateUrl: 'pages/dd2.html'
};
var dopdoc3 = {
    url: '/dopdoc3',
    cache: false,
    templateUrl: 'pages/dd3.html'
};
var dopdoc4 = {
    url: '/dopdoc4',
    cache: false,
    templateUrl: 'pages/dd4.html'
};

var boevpodgotovka = {
    url: '/boevpodgotovka',
    cache: false,
    templateUrl: 'pages/bp.html'
};
var boevpodgotovka1 = {
    url: '/boevpodgotovka1',
    cache: false,
    templateUrl: 'pages/bp1.html'
};
var boevpodgotovka2 = {
    url: '/boevpodgotovka2',
    cache: false,
    templateUrl: 'pages/bp2.html'
};
var boevpodgotovka3 = {
    url: '/boevpodgotovka3',
    cache: false,
    templateUrl: 'pages/bp3.html'
};
var boevpodgotovka4 = {
    url: '/boevpodgotovka4',
    cache: false,
    templateUrl: 'pages/bp4.html'
};
var boevpodgotovka5 = {
    url: '/boevpodgotovka5',
    cache: false,
    templateUrl: 'pages/bp5.html'
};
var boevpodgotovka6 = {
    url: '/boevpodgotovka6',
    cache: false,
    templateUrl: 'pages/bp6.html'
};
var boevpodgotovka7 = {
    url: '/boevpodgotovka7',
    cache: false,
    templateUrl: 'pages/bp7.html'
};
var armprazdnik = {
    url: '/armprazdnik',
    cache: false,
    templateUrl: 'pages/ap1.html'
};


/************************
 * End State Controllers
 ************************/



