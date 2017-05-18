SolderGuideControllers.controller('fzCtrl', ['$rootScope', '$scope', fzCtrl]);


function fzCtrl($rootScope, $scope) {

    $scope.searcher=function(){
        $( " span " ).removeClass( "red" );
        var word=$scope.searchWord;
       if(word){
        $(document).ready(function(){
            $("#Test").html(function(_, html){
                return html.replace(new RegExp(word, 'g'), '<span class="red">'+word+'</span>');
            });

        });}
        ;}

}
