var countjson = 0;
var arrayjson = ["json1.json", "json2.json"];
$(function() {
	
  
    $( "#sj" ).click(function() { cargarNoticia();});
  
  
});


function cargarNoticia() {
    if (countjson < arrayjson.length) {
        var name = arrayjson[countjson];
        countjson++;
        $.getJSON("https://rawgit.com/LuisRigo/pruebas-noticias/master/" + name, function (jsonObject) {
            addnoticias(jsonObject);
        });
    } else {
        alert("No hay mas noticias");
    }
}
function addnoticias(json){
	$.each( json, function( i, noticia ) {
         $("#masnoticias").append(
		 '<div id="'+noticia.id+'" class="container-fluid well section">'+
			"<h2>"+noticia.titulo+"</h2>"+
			"<p>"+noticia.descripcion+"</p>"+
			"<img class='img-responsive' src="+'"'+noticia.img+'"'+"alt='huerfano'>"+"<br>"+
			"<span class='glyphicon glyphicon-calendar'>"+"</span>"+"<span>"+noticia.datetime+"</span>"+
		 "</div>"
		 );
		 $("#navebar").append(
		 "<li>"+'<a href="#'+noticia.id+'">'+noticia.nav_element+"</a>"+"</li>"
		 );
		
     }); 
}
$(window).scroll(function(){
     if ($(window).scrollTop() == $(document).height() - $(window).height()){
      cargarNoticia();
     }					
    });

