angular
    .module('ngJogo', [])
    .controller('app',function($scope){
        $scope.matriz =
        [
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ]

    $scope.valor = "X";
    $scope.inserir = function(entrada,entrada2) {
        if($scope.matriz[entrada][entrada2] === "X" || $scope.matriz[entrada][entrada2] === "O"){
            $scope.msg = "";
        }
        else{
            $scope.matriz[entrada][entrada2] = $scope.valor;
            $scope.novoValor = ($scope.valor === 'X') ? 'O' : 'X';
            $scope.valor = $scope.novoValor;
        }
    };

    $scope.reset = function(){
        $scope.reset = function(){
            for(i=0;i<9;i++){
              for(j=0;j<9;j++){
                 if($scope.matriz[i][j] != ' '){
                    $scope.matriz[i][j] = ' ';
                 }    
              }      
            }        
      }
    };
});
