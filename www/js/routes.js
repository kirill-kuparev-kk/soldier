SolderGuide.config(['$stateProvider', '$urlRouterProvider', routes]);


function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('menu', menu)
      .state('federlzakon', federlzakon)
      .state('o_statuse_voennosluzhashego', o_statuse_voennosluzhashego)
      .state('o_statuse_voennosluzhashego_chap1', o_statuse_voennosluzhashego_chap1)
      .state('o_statuse_voennosluzhashego_chap2', o_statuse_voennosluzhashego_chap2)
      .state('o_statuse_voennosluzhashego_chap3', o_statuse_voennosluzhashego_chap3)
      .state('o_voinskoi_obyzonnosti', o_voinskoi_obyzonnosti)
      .state('o_voinskoi_obyzonnosti_section1', o_voinskoi_obyzonnosti_section1)
      .state('o_voinskoi_obyzonnosti_section2', o_voinskoi_obyzonnosti_section2)
      .state('o_voinskoi_obyzonnosti_section3', o_voinskoi_obyzonnosti_section3)
      .state('o_voinskoi_obyzonnosti_section4', o_voinskoi_obyzonnosti_section4)
      .state('o_voinskoi_obyzonnosti_section5', o_voinskoi_obyzonnosti_section5)
      .state('o_voinskoi_obyzonnosti_section6', o_voinskoi_obyzonnosti_section6)
      .state('o_voinskoi_obyzonnosti_section7', o_voinskoi_obyzonnosti_section7)
      .state('o_voinskoi_obyzonnosti_section8', o_voinskoi_obyzonnosti_section8)
      .state('o_voinskoi_obyzonnosti_section9', o_voinskoi_obyzonnosti_section9)
      .state('o_denezhnom_dovolstvii', o_denezhnom_dovolstvii)
      .state('o_nakopitelno_ipotechnoy_sisteme', o_nakopitelno_ipotechnoy_sisteme)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap1', o_nakopitelno_ipotechnoy_sisteme_chap1)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap2', o_nakopitelno_ipotechnoy_sisteme_chap2)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap3', o_nakopitelno_ipotechnoy_sisteme_chap3)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap4', o_nakopitelno_ipotechnoy_sisteme_chap4)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap5', o_nakopitelno_ipotechnoy_sisteme_chap5)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap6', o_nakopitelno_ipotechnoy_sisteme_chap6)
      .state('o_nakopitelno_ipotechnoy_sisteme_chap7', o_nakopitelno_ipotechnoy_sisteme_chap7)
      .state('o_materialnoy_otvetstvennosti', o_materialnoy_otvetstvennosti)
      .state('o_materialnoy_otvetstvennosti_chap1', o_materialnoy_otvetstvennosti_chap1)
      .state('o_materialnoy_otvetstvennosti_chap2', o_materialnoy_otvetstvennosti_chap2)
      .state('o_materialnoy_otvetstvennosti_chap3', o_materialnoy_otvetstvennosti_chap3)
      .state('o_materialnoy_otvetstvennosti_chap4', o_materialnoy_otvetstvennosti_chap4)
      .state('o_gos_taine', o_gos_taine)
      .state('o_gos_taine_section1', o_gos_taine_section1)
      .state('o_gos_taine_section2', o_gos_taine_section2)
      .state('o_gos_taine_section3', o_gos_taine_section3)
      .state('o_gos_taine_section4', o_gos_taine_section4)
      .state('o_gos_taine_section5', o_gos_taine_section5)
      .state('o_gos_taine_section6', o_gos_taine_section6)
      .state('o_gos_taine_section7', o_gos_taine_section7)
      .state('o_gos_taine_section8', o_gos_taine_section8)
      .state('o_dnah_voinskoi_slavi', o_dnah_voinskoi_slavi)
      .state('ob_oborone', ob_oborone)
      .state('ustavi', ustavi)
      .state('prikaz', prikaz)
      .state('dopdoc', dopdoc)
      .state('DMBTimer', DMBTimer)
      .state('boevpodgotovka', boevpodgotovka)
      .state('disciplinarniy_ustav', disciplinarniy_ustav);


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
  templateUrl: 'pages/federal_laws/fz.html'
};

var o_statuse_voennosluzhashego = {
    url: '/o_statuse_voennosluzhashego',
    cache: false,
    templateUrl: 'pages/federal_laws/o_statuse_voennosluzhashego/o_statuse_voennosluzhashego.html'
};

var o_statuse_voennosluzhashego_chap1 = {
    url: '/o_statuse_voennosluzhashego_chap1',
    cache: false,
    templateUrl: 'pages/federal_laws/o_statuse_voennosluzhashego/chapter1.html',
    controller:'fzCtrl'
};

var o_statuse_voennosluzhashego_chap2 = {
    url: '/o_statuse_voennosluzhashego_chap2',
    cache: false,
    templateUrl: 'pages/federal_laws/o_statuse_voennosluzhashego/chapter2.html'
};

var o_statuse_voennosluzhashego_chap3 = {
    url: '/o_statuse_voennosluzhashego_chap3',
    cache: false,
    templateUrl: 'pages/federal_laws/o_statuse_voennosluzhashego/chapter3.html'
};

var o_voinskoi_obyzonnosti = {
    url: '/o_voinskoi_obyzonnosti',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/o_voinskoi_obyzonnosti.html'
};
var o_voinskoi_obyzonnosti_section1 = {
    url: '/o_voinskoi_obyzonnosti_section1',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section1.html'
};
var o_voinskoi_obyzonnosti_section2 = {
    url: '/o_voinskoi_obyzonnosti_section2',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section2.html'
};
var o_voinskoi_obyzonnosti_section3 = {
    url: '/o_voinskoi_obyzonnosti_section3',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section3.html'
};
var o_voinskoi_obyzonnosti_section4 = {
    url: '/o_voinskoi_obyzonnosti_section4',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section4.html'
};
var o_voinskoi_obyzonnosti_section5 = {
    url: '/o_voinskoi_obyzonnosti_section5',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section5.html'
};
var o_voinskoi_obyzonnosti_section6 = {
    url: '/o_voinskoi_obyzonnosti_section6',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section6.html'
};
var o_voinskoi_obyzonnosti_section7 = {
    url: '/o_voinskoi_obyzonnosti_section7',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section7.html'
};
var o_voinskoi_obyzonnosti_section8 = {
    url: '/o_voinskoi_obyzonnosti_section8',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section8.html'
};
var o_voinskoi_obyzonnosti_section9 = {
    url: '/o_voinskoi_obyzonnosti_section9',
    cache: false,
    templateUrl: 'pages/federal_laws/o_voinskoi_obyzonnosti/section9.html'
};
var o_denezhnom_dovolstvii = {
    url: '/o_denezhnom_dovolstvii',
    cache: false,
    templateUrl: 'pages/federal_laws/o_denezhnom_dovolstvii/o_denezhnom_dovolstvii.html'
};

var o_nakopitelno_ipotechnoy_sisteme = {
    url: '/o_nakopitelno_ipotechnoy_sisteme',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/o_nakopitelno_ipotechnoy_sisteme.html'
};

var o_nakopitelno_ipotechnoy_sisteme_chap1 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap1',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter1.html'
};

var o_nakopitelno_ipotechnoy_sisteme_chap2 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap2',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter2.html'
};
var o_nakopitelno_ipotechnoy_sisteme_chap3 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap3',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter3.html'
};
var o_nakopitelno_ipotechnoy_sisteme_chap4 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap4',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter4.html'
};
var o_nakopitelno_ipotechnoy_sisteme_chap5 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap5',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter5.html'
};
var o_nakopitelno_ipotechnoy_sisteme_chap6 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap6',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter6.html'
};
var o_nakopitelno_ipotechnoy_sisteme_chap7 = {
    url: '/o_nakopitelno_ipotechnoy_sisteme_chap1',
    cache: false,
    templateUrl: 'pages/federal_laws/o_nakopitelno_ipotechnoy_sisteme/chapter7.html'
};

var o_materialnoy_otvetstvennosti = {
    url: '/o_materialnoy_otvetstvennosti',
    cache: false,
    templateUrl: 'pages/federal_laws/o_materialnoy_otvetstvennosti/o_materialnoy_otvetstvennosti.html'
};
var o_materialnoy_otvetstvennosti_chap1 = {
    url: '/o_materialnoy_otvetstvennosti_chap1',
    cache: false,
    templateUrl: 'pages/federal_laws/o_materialnoy_otvetstvennosti/chapter1.html'
};

var o_materialnoy_otvetstvennosti_chap2 = {
    url: '/o_materialnoy_otvetstvennosti_chap2',
    cache: false,
    templateUrl: 'pages/federal_laws/o_materialnoy_otvetstvennosti/chapter2.html'
};
var o_materialnoy_otvetstvennosti_chap3 = {
    url: '/o_materialnoy_otvetstvennosti_chap3',
    cache: false,
    templateUrl: 'pages/federal_laws/o_materialnoy_otvetstvennosti/chapter3.html'
};
var o_materialnoy_otvetstvennosti_chap4 = {
    url: '/o_materialnoy_otvetstvennosti_chap4',
    cache: false,
    templateUrl: 'pages/federal_laws/o_materialnoy_otvetstvennosti/chapter4.html'
};
var o_gos_taine = {
    url: '/o_gos_taine',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/o_gos_taine.html'
};
var o_gos_taine_section1 = {
    url: '/o_gos_taine_section1',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section1.html'
};
var o_gos_taine_section2 = {
    url: '/o_gos_taine_section2',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section2.html'
};
var o_gos_taine_section3 = {
    url: '/o_gos_taine_section3',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section3.html'
};
var o_gos_taine_section4 = {
    url: '/o_gos_taine_section4',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section4.html'
};
var o_gos_taine_section5 = {
    url: '/o_gos_taine_section5',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section5.html'
};
var o_gos_taine_section6 = {
    url: '/o_gos_taine_section6',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section6.html'
};
var o_gos_taine_section7 = {
    url: '/o_gos_taine_section7',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section7.html'
};
var o_gos_taine_section8 = {
    url: '/o_gos_taine_section8',
    cache: false,
    templateUrl: 'pages/federal_laws/o_gos_taine/section8.html'
};
var o_dnah_voinskoi_slavi = {
    url: '/o_dnah_voinskoi_slavi',
    cache: false,
    templateUrl: 'pages/federal_laws/o_dnah_voinskoi_slavi/o_dnah_voinskoi_slavi.html'
};
var ob_oborone = {
    url: '/ob_oborone',
    cache: false,
    templateUrl: 'pages/federal_laws/ob_oborone/ob_oborone.html'
};

var DMBTimer = {
    url: '/DMBTimer',
    cache: false,
    templateUrl: 'pages/DMBTimer.html',
    controller:'timerCtrl'
};


var ustavi = {
  url: '/ustavi',
  cache: false,
  templateUrl: 'pages/ustavi.html'
};

var disciplinarniy_ustav = {
  url: '/disciplinarniy_ustav',
  cache: false,
  templateUrl: 'pages/disciplinarniy_ustav/disciplinarniy_ustav.html'
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

var prazdniki = {
    url: '/armprazdnik',
    cache: false,
    templateUrl: 'pages/prazdniki/ap1.html'
};


/************************
 * End State Controllers
 ************************/



