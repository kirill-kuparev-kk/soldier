SolderGuideControllers.controller('timerCtrl', ['$rootScope', '$scope','$moment','ionicDatePicker','$interval', timerCtrl]);


function timerCtrl($rootScope, $scope,$moment,ionicDatePicker, $interval) {

    $scope.progressval = 0;
    $scope.stopinterval = null;

    $scope.updateProgressbar = function()
    {
        startprogress();

    }

    function startprogress()
    {
        $scope.progressval = 0;

        if ($scope.stopinterval)
        {
            $interval.cancel($scope.stopinterval);
        }

        $scope.stopinterval = $interval(function() {
            $scope.progressval = $scope.progressval + 1;
            if( $scope.progressval >= 100 ) {
                $interval.cancel($scope.stopinterval);

                return;
            }
        }, 5000);
    }

    startprogress();

    // var ipObj1 = {
    //     callback: function (val) {  //Mandatory
    //         console.log('Return value from the datepicker popup is : ' + val, new Date(val));
    //     },
    //     disabledDates: [            //Optional
    //         new Date(2016, 2, 16),
    //         new Date(2015, 3, 16),
    //         new Date(2015, 4, 16),
    //         new Date(2015, 5, 16),
    //         new Date('Wednesday, August 12, 2015'),
    //         new Date("08-16-2016"),
    //         new Date(1439676000000)
    //     ],
    //     from: new Date(2012, 1, 1), //Optional
    //     to: new Date(2016, 10, 30), //Optional
    //     inputDate: new Date(),      //Optional
    //     mondayFirst: true,          //Optional
    //     disableWeekdays: [0],       //Optional
    //     closeOnSelect: false,       //Optional
    //     templateType: 'popup'       //Optional
    // };
    //
    var datePickerCallback = function (val) {
        if (typeof(val) === 'undefined') {
            console.log('No date selected');
        } else {
            console.log('Selected date is : ', val)
        }
    };

    $scope.datepickerObject = {

        titleLabel: 'Title',  //Optional
        todayLabel: 'Today',  //Optional
        closeLabel: 'Close',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
        inputDate: new Date(),    //Optional
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
        callback: function (val) {    //Mandatory
            datePickerCallback(val);
            $scope.secDate=$moment($moment().diff($moment(val)))/1000
            $scope.monthDate=Math.floor($moment($moment().diff($moment(val)))/1000/60/60/24/30);
            $scope.weekDate=Math.floor($moment($moment().diff($moment(val)))/1000/60/60/24/7);
            $scope.dayDate=Math.floor($moment($moment().diff($moment(val)))/1000/60/60/24);
            $scope.hourDate=Math.floor($moment($moment().diff($moment(val)))/1000/60/60);
            $scope.monthDateRem=Math.floor($moment(($moment(val).add(1,'year')).diff($moment()))/1000/60/60/24/30);
            $scope.weekDateRem=Math.floor($moment(($moment(val).add(1,'year')).diff($moment()))/1000/60/60/24/7);
            $scope.dayDateRem=Math.floor($moment(($moment(val).add(1,'year')).diff($moment()))/1000/60/60/24);
            $scope.hourDateRem=Math.floor($moment(($moment(val).add(1,'year')).diff($moment()))/1000/60/60);


            console.log("11111111111111",val,$moment(val).format('MM-DD-YYYY'),$moment($moment().diff($moment(val))))
        }
    };
    $scope.openDatePicker = function(){
        ionicDatePicker.openDatePicker($scope.datepickerObject);
    };

    $scope.init = function () {
        console.log('1111111',$moment());
        $scope.openDatePicker()
    };

    $scope.init();

}