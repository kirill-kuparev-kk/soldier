SolderGuideControllers.controller('notepadCtrl', ['$rootScope', '$scope','$moment','ionicDatePicker','$interval', notepadCtrl]);


function notepadCtrl($rootScope, $scope,$moment,ionicDatePicker, $interval) {






        // Initial Data
    if(localStorage.getItem('notepad')) {
        $scope.notes = JSON.parse(localStorage.getItem('notepad'));
        log('777',$scope.notes)
    }else {
        $scope.notes = []
    }
        // Add New Note
        $scope.addNote = function(){
            $scope.newNote = {};
            $scope.newNote.createdOn = Date.now();
            $scope.newNote.text = ' ';
            $scope.newNote.edit = true;
            $scope.notes.push($scope.newNote);
            $scope.newNote = {};

            localStorage.setItem('notepad', JSON.stringify($scope.notes))
        };

        // Delete Note
        $scope.delete = function (i) {
            var r = confirm("Are you sure you want to delete this note?");
            if (r == true){
                $scope.notes.splice(i, 1);
                localStorage.setItem('notepad', JSON.stringify($scope.notes))}
        };

        // Update Note
        $scope.update = function(i, note) {
            log('i, note',i, note)
            $scope.notes[i].text = note;
            $scope.notes[i].edit = false;
            log('$scope.notes',$scope.notes)

            localStorage.setItem('notepad', JSON.stringify($scope.notes))
        };



}
