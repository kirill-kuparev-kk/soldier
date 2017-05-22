SolderGuideControllers.controller('notepadCtrl', ['$rootScope', '$scope','$moment','ionicDatePicker','$interval', notepadCtrl]);


function notepadCtrl($rootScope, $scope,$moment,ionicDatePicker, $interval) {






        // Initial Data
        $scope.notes = [
            ];

        // Add New Note
        $scope.addNote = function(){
            $scope.newNote = {};
            $scope.newNote.createdOn = Date.now();
            $scope.newNote.text = ' ';
            $scope.newNote.edit = true;
            $scope.notes.push($scope.newNote);
            $scope.newNote = {};
        };

        // Delete Note
        $scope.delete = function (i) {
            console.log("rrrrrrrrrrrrr",i);
            var r = confirm("Are you sure you want to delete this note?");
            if (r == true)
                $scope.notes.splice(i, 1);
        };

        // Update Note
        $scope.update = function(i, note) {
            $scope.notes[i].text = note;
            $scope.notes[i].edit = false;
        };



}
