var app = angular.module("Reg_Especie",[]);
var imgsrc = "";
app.controller('productoeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  var producto = {};
  var reader  = new FileReader();
  $scope.reg_producto = function(){
    producto.codigo = $scope.codigo;
    producto.nombre = $scope.nombre;
    producto.cantidad = $scope.cantidad;
    producto.costo = $scope.costo;
    producto.precio_final = $scope.precio_final;
    producto.descuento = $scope.descuento;
    producto.foto = imgsrc;
    console.log(JSON.stringify(producto));
    var $promise = $http.post('funciones_php/insertar_producto.php',producto);
    $promise.then(function(msg) {
        // $scope.catalogoZona = msg.data;
        console.log(msg.data);
    });
  }

}]);

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
    imgsrc = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
};

$('.ui.form')
  .form({
    fields: {
      codigo     : 'empty',
      nombre   : 'empty',
      cantidad : 'empty',
      costo : 'empty',
      precio_final : 'empty',
      descuento : 'empty',
      foto : 'empty'
    }
  })
;