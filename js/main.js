/* CREATIVEJS ANIMACIJE */

var $canvas_prsti_i_zastava;
var sunceStatus = 0;
var glavnaScenaStatus = 0;

var canvas, stage, exportRoot;
function initGlavnaScena() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas_prsti_i_zastava");
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadFile({src:"images/prsti_i_zastava_atlas_.json", type:"spritesheet", id:"prsti_i_zastava_atlas_"}, true);
	loader.loadManifest(lib.properties.manifest);	
	glavnaScenaStatus = 1;
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	var queue = evt.target;
	ss["prsti_i_zastava_atlas_"] = queue.getResult("prsti_i_zastava_atlas_");
	exportRoot = new lib.prsti_i_zastava();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function initSunce() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas_sunce");
	exportRoot = new lib.sunce();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(45);
	createjs.Ticker.addEventListener("tick", stage);
	sunceStatus = 1;
}


/* OSTALI KOD */
var winWidth = $(window).width();
var winHeight = $(window).height();

var $glavniKontejner = $('#glavniKontejner');
var $unutarnjiKontejner = $('#unutarnjiKontejner');
var $prsti_i_zastava_kontejner = $('#prstiIZastavaKontejner');
var $prsti_i_zastava = $('#prstiIZastavaKontejner .podKontejner');
var $lijeviPrsti = $('#lijeviPrsti');
var $desniPrsti = $('#desniPrsti');
var $zastava = $('#zastava');
var $sjena = $('#sjena');
var $canvas_sunce = $('#canvas_sunce');
var $tlo = $('#tlo');
var $oblak1 = $('#sloj1');
var $oblak2 = $('#sloj2');
var $oblak3 = $('#sloj3');
var $noc = $('#noc');
var $mjesec = $('#mjesec');
var $manana = $('#manana');
var $kaktusKontejner = $('#kaktusKontejner');
var $kaktus = $('#kaktus');
var $datumKontejner = $('#datumKontejner');
var $prviDatum = $('.prviDatum');
var $drugiDatum = $('.drugiDatum');
var $prviDatumTekst = $('.prviDatum span.datum');
var $drugiDatumTekst = $('.drugiDatum span.datum');
var $bravoTekst = $('#bravoTekst');
var $lijeviTekst = $('.lijevo');
var $desniTekst = $('.desno');
var $infoGumb = $('#infoGumb');
var $infoKontejner = $('#infoKontejner');
var $infoIkona = $('.info');
var $zatvoriIkona = $('.zatvori');
var $lijevaSlova = [];
var $desnaSlova = [];
var daniDoDeadlinea;
var trenutniDeadline;
var noviDeadline;
var stariDan;
var stariMjesec;
var staraGodina;
var noviDan;
var noviMjesec;
var novaGodina;

var tekstovi = [
	{lijevi:"BOOYA!", desni:"PLEASE SAVE THE DATE!"},
	{lijevi:"THANKS!", desni:"PLEASE SAVE THE DATE!"},
	{lijevi:"PHEW!", desni:"PLEASE SAVE THE DATE!"},
	{lijevi:"SWEET!", desni:"PLEASE SAVE THE DATE!"},
	{lijevi:"GREAT!", desni:"PLEASE SAVE THE DATE!"},
	{lijevi:"YAY!", desni:"PLEASE SAVE THE DATE!"}
]

var pripremaTeksta = function(){
	brojTekstova = tekstovi.length-1;
	konacniOdgovor = Math.floor(Math.random() * (brojTekstova + 1));
	odabraniTekstLijevi = tekstovi[konacniOdgovor].lijevi;
	odabraniTekstDesni= tekstovi[konacniOdgovor].desni;
	razlomljeniTekstLijevi = odabraniTekstLijevi.split("");
	razlomljeniTekstDesni = odabraniTekstDesni.split("");
	privremeniLijevi = "";
	privremeniDesni = "";
	for(var i = 0, duljina = razlomljeniTekstLijevi.length; i < duljina; i++){
		privremeniLijevi += "<span class='slovoLijevo'>" + razlomljeniTekstLijevi[i] + "</span>";
	}
	for(var i = 0, duljina = razlomljeniTekstDesni.length; i < duljina; i++){
		privremeniDesni += "<span class='slovoDesno'>" + razlomljeniTekstDesni[i] + "</span>";
	}	
	$lijeviTekst.html(privremeniLijevi);
	$desniTekst.html(privremeniDesni);
	$('span', $lijeviTekst).each(function(i){
		$lijevaSlova[i] = $(this);
	})
	$('span', $desniTekst).each(function(i){
		$desnaSlova[i] = $(this);
	})

	for(var i = 0, duljina = $lijevaSlova.length; i < duljina; i++){
		$lijevaSlova[i].css({
			'opacity' : 0
		})
	}

	for(var i = 0, duljina = $desnaSlova.length; i < duljina; i++){
		$desnaSlova[i].css({
			'opacity' : 0
		})
	}	
}

var udaljenostPuta = "10000px";

var namjestanjeGlavnogKontejnera = function(){
	width = winWidth - 40 + "px";
	height = winHeight - 40 + "px";
	$glavniKontejner.css({
	   'width' : width,
	   'height' : height
	});
}

var centriranjeGlavneScene = function(){
	if(winHeight<704){
		pomakDoCentra = (winWidth/2) - 464 +"px";
		if(winWidth<500){
			pomakDoCentra = (winWidth/2) - 432 +"px";
		}		
	}else{
		pomakDoCentra = (winWidth/2) - 726 +"px";		
	}
	$prsti_i_zastava_kontejner.css({
		'left' : pomakDoCentra
	});
}

var namjestanjeSuncaIMjeseca = function(){
	if(winWidth<500){
		pomakSunce = winWidth - 225 + "px";
		pomakMjesec = winWidth +"px";
	}else{
		pomakSunce = winWidth - 355 + "px";
		pomakMjesec = winWidth +"px";
	}
	$canvas_sunce.css({
		'left' : pomakSunce
	});	
	$mjesec.css({
		'left' : pomakMjesec
	})
}

var namjestanjeDatuma = function(){
	if(winWidth<500){
		$datumKontejner.css({
			'left' : (winWidth/2)-20+"px"
		})
	}else{
		$datumKontejner.css({
			'left' : winWidth/2+"px"
		})
	}
}

var namjestanjeKaktusaIDrugogDatuma = function(){
	$kaktus.css({
		'transform' : "translateX("+udaljenostPuta+")"
	})
	$drugiDatum.css({
		'transform' : "translateX("+udaljenostPuta+")"
	})	
}

var centriranjeBravoTeksta = function(){
	pomakDoCentra = (winWidth/2) - 270 +  "px";
	$bravoTekst.css({
		'left' : pomakDoCentra
	});
}

var micanjeOblaka = function(){
	TweenMax.set($oblak1, {css:{"background-position": "-="+1}});
	TweenMax.set($oblak2, {css:{"background-position": "-="+1}});
	TweenMax.set($oblak3, {css:{"background-position": "-="+2}});
}
setInterval(micanjeOblaka,50);




var pomakDana = function(){

	 
	tl = new TimelineMax();
	
	tl.add("pocetak",0);
	tl.add("stisak",0.7);
	tl.add("uzimanje",1.2);
	tl.add("pocetakKretnje",1.7);
	tl.add("pocetakNoci",5.7);
	tl.add("pocetakSunca",7.7);
	tl.add("pocetakDana",7.7);
	tl.add("pomakRukeNatrag",10.5);
	tl.add("zapikivanje",12);
	tl.add("sjena",12.1);
	tl.add("otpust",12.9);
	tl.add("kraj",13);
	tl.add("pojavaTeksta",13.1);
	tl.add("pojavaGumba",16);

	tl.to($lijeviPrsti,1.6, {y:-20, ease:Expo.easeOut}, "pocetak");
	tl.to($desniPrsti,1.6, {y:-20, ease:Expo.easeOut}, "pocetak");
	tl.to($lijeviPrsti,0.7, {x:20, ease:Expo.easeInOut}, "stisak");
	tl.to($desniPrsti,0.7, {x:-20, ease:Expo.easeInOut}, "stisak");	
	tl.to($lijeviPrsti,0.7, {y:-150, ease:Expo.easeOut}, "uzimanje");
	tl.to($desniPrsti,0.7, {y:-150,  ease:Expo.easeOut}, "uzimanje");	
	tl.to($zastava,0.7, {y:-130, ease:Expo.easeOut}, "uzimanje");		
	tl.to($sjena,0.4, {opacity:0, ease:Expo.easeOut}, "uzimanje");			
	tl.to($prsti_i_zastava_kontejner, 2.1, {x: (winWidth/3.5)+"px" ,y:-150+"px",rotation:12, transformOrigin:'100% 100%',ease:Power2.easeInOut}, "pocetakKretnje");
	tl.to($canvas_sunce, 8, {bezier:[{x:0, y:0}, {x:(0-(winWidth/2)), y:-(winHeight/2.5)}, {x:(-770-winWidth), y:500}], ease:Power3.easeInOut}, "pocetakKretnje");
	tl.to($tlo, 10, {css:{'background-position': "-"+udaljenostPuta+" 0px"},ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($datumKontejner, 10, {x: "-"+udaljenostPuta ,ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($manana, 10, {x: "-"+udaljenostPuta ,ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($kaktusKontejner, 10, {x: "-"+udaljenostPuta ,ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($oblak1, 10, {x: "-=8000px" ,ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($oblak2, 10, {x: "-=9000px" ,ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($oblak3, 10, {x: "-=8500px" ,ease:Power2.easeInOut},"pocetakKretnje");
	tl.to($noc, 1.5, {css:{'opacity': 1},ease:Power2.easeInOut}, "pocetakNoci");
	tl.to($mjesec, 4, {bezier:[{x:0, y:0}, {x:(0-(winWidth/2)), y:-300}, {x:(-770-winWidth), y:500}], ease:Power2.easeInOut}, "pocetakNoci");	
	tl.to($noc, 1.5, {css:{'opacity': 0},ease:Power2.easeInOut}, "pocetakDana");
	tl.to($canvas_sunce, 4, {bezier:[{x:(winWidth+200), y:200},{x:(winWidth+100), y:100}, {x:0, y:0}], ease:Power3.easeOut}, "pocetakSunca");	
	tl.to($prsti_i_zastava_kontejner, 1.5, {x: 0 + "px",y:0+"px",rotation:0, transformOrigin:'100% 100%' ,ease:Power1.easeInOut},"pomakRukeNatrag");
	tl.to($lijeviPrsti,0.7, {y:-20, ease:Expo.easeIn}, "zapikivanje");
	tl.to($desniPrsti,0.7, {y:-20,  ease:Expo.easeIn}, "zapikivanje");	
	tl.to($zastava,0.7, {y:0, ease:Expo.easeIn}, "zapikivanje");	
	tl.to($sjena,0.6, {opacity:1, ease:Expo.easeIn}, "sjena");	
	tl.to($lijeviPrsti,0.7, {x:0, ease:Expo.easeInOut}, "otpust");
	tl.to($desniPrsti,0.7, {x:0, ease:Expo.easeInOut}, "otpust");	
	tl.to($lijeviPrsti,1.2, {y:-850, ease:Expo.easeIn}, "kraj");
	tl.to($desniPrsti,1.2, {y:-850, ease:Expo.easeIn}, "kraj");		
	tl.addCallback(animacijaTeskta, "pojavaTeksta");
	tl.to($infoGumb,1.2, {opacity:1, ease:Expo.easeIn}, "pojavaGumba");		
	
	 
}

var animacijaTeskta = function(){
	tl = new TimelineMax();
	tl.add("lijeviTekst",0);
	tl.add("desniTekst",1);
	tl.staggerTo(".slovoLijevo", 0.05, {opacity:1}, 0.05, "lijeviTekst");
	tl.staggerTo(".slovoDesno", 0.05, {opacity:1}, 0.05, "desniTekst");
}

var citajDeadline = function(){
    $.get("citajDeadline.php", function(data, status){
        daniDoDeadlinea = parseInt(data);

		function formatirajDatum(stariFormat) {
		  function pad(s) { return (s < 10) ? '0' + s : s; }
		  var d = new Date(stariFormat);
		  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join(".<span class='space'></span>");
		}


		function dodajDane(datum, dani) {
		    var result = new Date(datum);
		    result.setDate(result.getDate() + dani);
		    return formatirajDatum(result);
		}		

		var datum = new Date();		

        trenutniDeadline = dodajDane(datum, daniDoDeadlinea);
        noviDeadline = dodajDane(datum, (daniDoDeadlinea + 1));

        $prviDatumTekst.html(trenutniDeadline + ".");
        $drugiDatumTekst.html(noviDeadline + ".");

        daniDoDeadlinea++;
        spremiDeadline(daniDoDeadlinea);

    });	
}

var spremiDeadline = function(deadline){
	if(isNaN(deadline)){
		console.log('deadline error')
	}else{
		$.post( "spremiDeadline.php", { deadline: deadline } );
	}
}

var info = function(){
	var zatvoriInfo = function(){
		$infoKontejner.removeClass('otvoreno');

		tl = new TimelineMax();
	
		tl.add("pocetak",0);

		tl.to($unutarnjiKontejner, 0.8, {css:{'top': '0'},ease:Power3.easeInOut}, "pocetak");
		tl.to($infoKontejner, 0.7, {css:{'top': '110%'},ease:Power3.easeInOut}, "pocetak");		
		tl.to($infoIkona, 0.7, {css:{'top': '0'},ease:Power3.easeInOut}, "pocetak");		
		tl.to($zatvoriIkona, 0.7, {css:{'top': '110%'},ease:Power3.easeInOut}, "pocetak");		

		console.log('zatvaram');
	}
	var otvoriInfo = function(){
		$infoKontejner.addClass('otvoreno');

		tl = new TimelineMax();
	
		tl.add("pocetak",0);

		tl.to($unutarnjiKontejner, 0.7, {css:{'top': '-110%'},ease:Power3.easeInOut}, "pocetak");
		tl.to($infoKontejner, 0.8, {css:{'top': '0'},ease:Power3.easeInOut}, "pocetak");
		tl.to($infoIkona, 0.7, {css:{'top': '-110%'},ease:Power3.easeInOut}, "pocetak");		
		tl.to($zatvoriIkona, 0.7, {css:{'top': '0'},ease:Power3.easeInOut}, "pocetak");					

		console.log('otvaram');
	}
	$infoGumb.click(function(){
		if($infoKontejner.hasClass('otvoreno')){
			zatvoriInfo();
		}else{
			otvoriInfo();
		}
	})
}

var uvod = function(){
    setTimeout(function(){initSunce();},1900);
    setTimeout(function(){
    	TweenMax.to($unutarnjiKontejner, 3, {css:{'top': '0'},ease:Power3.easeOut});
    	setTimeout(function(){pomakDana();},3500);
    },1600);
}


$(window).resize(function() {
	winWidth = $(window).width();
	winHeight = $(window).height();	
	setTimeout(function(){
		namjestanjeGlavnogKontejnera();
		centriranjeGlavneScene();
		namjestanjeSuncaIMjeseca();
		namjestanjeDatuma();
		centriranjeBravoTeksta();
	},10);
});


var init = function(){
	winWidth = $(window).width();
	winHeight = $(window).height();	
	citajDeadline();
	namjestanjeGlavnogKontejnera();
	centriranjeGlavneScene();	
	namjestanjeSuncaIMjeseca();
	namjestanjeDatuma();
	namjestanjeKaktusaIDrugogDatuma();
	centriranjeBravoTeksta();
	pripremaTeksta();
	info();
	uvod();
}

init();
