SolderGuideControllers.controller('timerCtrl', ['$rootScope', '$scope', 'moment', 'ionicDatePicker', '$interval', timerCtrl]);


function timerCtrl($rootScope, $scope, moment, ionicDatePicker, $interval) {



    $scope.progressval = 0;
    $scope.stopinterval = null;

    $scope.updateProgressbar = function(all,pass)
    {
        startprogress(all,pass);

    };

    function startprogress(all,pass)
    {   $scope.all=all;
        $scope.pass=pass;
        $scope.progressval=($scope.pass/$scope.all).toFixed(2)*100;

        if ($scope.stopinterval)
        {
            $interval.cancel($scope.stopinterval);
        }

        $scope.stopinterval = $interval(function() {
            $scope.pass=$scope.pass+60;
            $scope.progressval=($scope.pass/$scope.all).toFixed(2)*100;
            if( $scope.progressval >= 100 ) {
                $interval.cancel($scope.stopinterval);

                return;
            }
        }, 60000);
    }


    var datePickerCallback = function (val) {
        if (typeof(val) === 'undefined') {
            console.log('No date selected');
        } else {
            console.log('Selected date is : ', val)
        }
    };

    $scope.datepickerObject = {
        subTitle  :"34234234234",
        titleLabel: 'Привет',  //Optional
        todayLabel: 'Cегодня',  //Optional
        closeLabel: 'Закрыть',  //Optional
        setLabel: 'Выбрать',  //Optional
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
        // inputDate: new Date(),    //Optional
        mondayFirst: true,    //Optional
        // disabledDates: disabledDates, //Optional
        // weekDaysList: weekDaysList,   //Optional
        // monthList: monthList, //Optional
        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        from: new Date(2012, 8, 2),   //Optional
        to: new Date(2018, 8, 25),    //Optional
        callback: function (val) {
            localStorage.setItem('DMBTimerVal',val);
            datePickerCallback(val);
            console.log("val",val)
            $scope.secDate=Math.floor(moment(moment().diff(moment(val)))/1000);
            $scope.monthDate=Math.floor(moment(moment().diff(moment(val)))/1000/60/60/24/30);
            $scope.weekDate=Math.floor(moment(moment().diff(moment(val)))/1000/60/60/24/7);
            $scope.dayDate=Math.floor(moment(moment().diff(moment(val)))/1000/60/60/24);
            $scope.hourDate=Math.floor(moment(moment().diff(moment(val)))/1000/60/60);
            $scope.monthDateRem=Math.floor(moment((moment(val).add(1,'year')).diff(moment()))/1000/60/60/24/30);
            $scope.weekDateRem=Math.floor(moment((moment(val).add(1,'year')).diff(moment()))/1000/60/60/24/7);
            $scope.dayDateRem=Math.floor(moment((moment(val).add(1,'year')).diff(moment()))/1000/60/60/24);
            $scope.hourDateRem=Math.floor(moment((moment(val).add(1,'year')).diff(moment()))/1000/60/60);
            $scope.secDateRem=Math.floor(moment((moment(val).add(1,'year')).diff(moment()))/1000);
            $scope.updateProgressbar(Math.floor(moment(0).add(1,'year'))/1000,$scope.secDate)

        }
    };
    $scope.openDatePicker = function(){
        ionicDatePicker.openDatePicker($scope.datepickerObject);
    };

    $scope.init = function () {
        if(localStorage.getItem("DMBTimerVal")){
            console.log("!!!!!!!!!!!!!!!!!!!!",localStorage.getItem("DMBTimerVal"));
            var date=JSON.parse(localStorage.getItem("DMBTimerVal"));
            $scope.secDate=moment(moment().diff(moment(date)))/1000;
            $scope.monthDate=Math.floor(moment(moment().diff(moment(date)))/1000/60/60/24/30);
            $scope.weekDate=Math.floor(moment(moment().diff(moment(date)))/1000/60/60/24/7);
            $scope.dayDate=Math.floor(moment(moment().diff(moment(date)))/1000/60/60/24);
            $scope.hourDate=Math.floor(moment(moment().diff(moment(date)))/1000/60/60);
            $scope.monthDateRem=Math.floor(moment((moment(date).add(1,'year')).diff(moment()))/1000/60/60/24/30);
            $scope.weekDateRem=Math.floor(moment((moment(date).add(1,'year')).diff(moment()))/1000/60/60/24/7);
            $scope.dayDateRem=Math.floor(moment((moment(date).add(1,'year')).diff(moment()))/1000/60/60/24);
            $scope.hourDateRem=Math.floor(moment((moment(date).add(1,'year')).diff(moment()))/1000/60/60);
            $scope.secDateRem=Math.floor(moment((moment(date).add(1,'year')).diff(moment()))/1000);
            $scope.updateProgressbar(Math.floor(moment(0).add(1,'year'))/1000,$scope.secDate)
        }else {

            $scope.openDatePicker()
        }
    };

    $scope.init();

}
