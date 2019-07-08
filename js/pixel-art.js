var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");

var grillaPixeles = document.getElementById("grilla-pixeles");

var crearPaletaColores = function(nombreColores){
  for (var i = 0; i < nombreColores.length; i++){
   var color = document.createElement("div");
   color.style.backgroundColor = nombreColores[i];
   color.className = "color-paleta";
   paleta.appendChild(color);
  }
}
crearPaletaColores(nombreColores);

var crearGrilla = function(){
  var i = 0;
  while (i < 1750){
    var nuevoPixel = document.createElement("div");
    nuevoPixel.setAttribute("class", "pixel");
    grillaPixeles.appendChild(nuevoPixel);
    i++
  }
}
crearGrilla();

$("div.color-paleta").click(function(e){
  var colorActual = e.target.style.backgroundColor;
  $("#indicador-de-color").css({"backgroundColor": colorActual});
});

$(".pixel").click(function(){
  var colorSeleccionado = document.getElementById("indicador-de-color");
  var colorActual = colorSeleccionado.style.backgroundColor;
  $(this).css({"backgroundColor": colorActual});
});

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");

colorPersonalizado.addEventListener("change", (function(){
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $("#indicador-de-color").css({"backgroundColor": colorActual});
  })
);

var mouseApretado = false;

var grillaPixeles = document.getElementById("grilla-pixeles");

$("#grilla-pixeles").mousedown(function(){
  mouseApretado = true;
});

$("#grilla-pixeles").mouseup(function(){
  mouseApretado = false;
});

grillaPixeles.addEventListener("mouseover", function(e){
  if(mouseApretado === true){
    colorSeleccionado = document.getElementById("indicador-de-color");
    colorActual = colorSeleccionado.style.backgroundColor;
    e.target.style.backgroundColor = colorActual;
  }
});