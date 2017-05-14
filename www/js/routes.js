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
      .state('prikaz', prikaz)
      .state('dopdoc', dopdoc)
      .state('boevpodgotovka', boevpodgotovka)
      .state('armprazdnik', armprazdnik);

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


var prikaz = {
  url: '/prikaz',
  cache: false,
  templateUrl: 'pages/prikazi.html'
};

var dopdoc = {
  url: '/dopdoc',
  cache: false,
  templateUrl: 'pages/dd.html'
};

var boevpodgotovka = {
    url: '/boevpodgotovka',
    cache: false,
    templateUrl: 'pages/bp.html'
};

var armprazdnik = {
    url: '/armprazdnik',
    cache: false,
    templateUrl: 'pages/ap1.html'
};


/************************
 * End State Controllers
 ************************/



