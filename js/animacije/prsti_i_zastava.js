var $prsti_i_zastava;

(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2732,
	height: 1538,
	fps: 60,
	color: "#F7DD23",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// prsti_i_zastavaSymbols:



(lib.desni_prstipngcopy = function() {
	this.spriteSheet = ss["prsti_i_zastava_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lijevi_prstipngcopy = function() {
	this.spriteSheet = ss["prsti_i_zastava_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sjenapngcopy = function() {
	this.spriteSheet = ss["prsti_i_zastava_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.zastavapngcopy = function() {
	this.spriteSheet = ss["prsti_i_zastava_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.zastava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zastavapngcopy();
	this.instance.setTransform(0,0,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211,675.1);


(lib.prsti_i_zastavaSymbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1).p("AgiA7IBFh1");
	this.shape.setTransform(3.5,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,11.1,16);


(lib.sjena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sjenapngcopy();
	this.instance.setTransform(-0.5,-2,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-2,485,5.6);


(lib.prsti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.desni_prstipngcopy();
	this.instance.setTransform(0,-1.1,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,396,474.1);


(lib.palac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lijevi_prstipngcopy();
	this.instance.setTransform(0,0,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.3,448);


// stage content:
(lib.prsti_i_zastava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start1:0,kraj2:144});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		$prsti_i_zastava = this;
	}
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(100));

	// efekt2
	this.instance = new lib.prsti_i_zastavaSymbol1();
	this.instance.setTransform(1281.7,1243.9,0.85,0.85,0,0,180,3.6,5.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).wait(1).to({regX:3.5,regY:6,x:1277.8,y:1236.8,alpha:0.664},0).wait(1).to({x:1276.8,y:1235,alpha:0.577},0).wait(1).to({x:1276,y:1233.7,alpha:0.515},0).wait(1).to({x:1275.4,y:1232.6,alpha:0.464},0).wait(1).to({x:1274.9,y:1231.6,alpha:0.416},0).wait(1).to({x:1274.3,y:1230.6,alpha:0.371},0).wait(1).to({x:1273.8,y:1229.7,alpha:0.33},0).wait(1).to({x:1273.4,y:1228.9,alpha:0.292},0).wait(1).to({x:1273,y:1228.1,alpha:0.256},0).wait(1).to({x:1272.6,y:1227.5,alpha:0.224},0).wait(1).to({x:1272.2,y:1226.8,alpha:0.195},0).wait(1).to({x:1271.9,y:1226.3,alpha:0.168},0).wait(1).to({x:1271.6,y:1225.8,alpha:0.144},0).wait(1).to({x:1271.4,y:1225.3,alpha:0.122},0).wait(1).to({x:1271.2,y:1224.9,alpha:0.103},0).wait(1).to({x:1271,y:1224.5,alpha:0.085},0).wait(1).to({x:1270.8,y:1224.2,alpha:0.07},0).wait(1).to({x:1270.6,y:1223.9,alpha:0.056},0).wait(1).to({x:1270.5,y:1223.6,alpha:0.045},0).wait(1).to({x:1270.4,y:1223.4,alpha:0.034},0).wait(1).to({x:1270.3,y:1223.2,alpha:0.026},0).wait(1).to({x:1270.2,y:1223.1,alpha:0.018},0).wait(1).to({x:1270.1,y:1223,alpha:0.013},0).wait(1).to({x:1270,y:1222.9,alpha:0.008},0).wait(1).to({y:1222.8,alpha:0.004},0).wait(1).to({y:1222.7,alpha:0.002},0).wait(1).to({alpha:0},0).wait(1).to({regX:3.6,x:1269.9,y:1222.6},0).wait(102));

	// efekt1
	this.instance_1 = new lib.prsti_i_zastavaSymbol1();
	this.instance_1.setTransform(1287.2,1244.5,0.85,0.85,0,0,0,3.6,6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).wait(1).to({regX:3.5,x:1291.1,y:1237.1,alpha:0.656},0).wait(1).to({x:1292.1,y:1235.2,alpha:0.566},0).wait(1).to({x:1292.9,y:1233.9,alpha:0.503},0).wait(1).to({x:1293.5,y:1232.7,alpha:0.449},0).wait(1).to({x:1294.1,y:1231.6,alpha:0.398},0).wait(1).to({x:1294.6,y:1230.6,alpha:0.352},0).wait(1).to({x:1295.1,y:1229.7,alpha:0.309},0).wait(1).to({x:1295.6,y:1228.9,alpha:0.27},0).wait(1).to({x:1296,y:1228.1,alpha:0.234},0).wait(1).to({x:1296.4,y:1227.4,alpha:0.201},0).wait(1).to({x:1296.7,y:1226.8,alpha:0.172},0).wait(1).to({x:1297,y:1226.2,alpha:0.146},0).wait(1).to({x:1297.3,y:1225.7,alpha:0.122},0).wait(1).to({x:1297.6,y:1225.3,alpha:0.101},0).wait(1).to({x:1297.8,y:1224.9,alpha:0.083},0).wait(1).to({x:1298,y:1224.5,alpha:0.067},0).wait(1).to({x:1298.1,y:1224.2,alpha:0.053},0).wait(1).to({x:1298.3,y:1224,alpha:0.04},0).wait(1).to({x:1298.4,y:1223.8,alpha:0.03},0).wait(1).to({x:1298.5,y:1223.6,alpha:0.022},0).wait(1).to({x:1298.6,y:1223.4,alpha:0.015},0).wait(1).to({y:1223.3,alpha:0.009},0).wait(1).to({x:1298.7,y:1223.2,alpha:0.005},0).wait(1).to({alpha:0.002},0).wait(1).to({y:1223.1,alpha:0.001},0).wait(1).to({regX:3.6,regY:5.9,x:1298.9,alpha:0},0).wait(104));

	// zastava
	this.instance_2 = new lib.zastava();
	this.instance_2.setTransform(1432,767.7,1.424,1.424,0,0,0,105.5,339.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({regY:337.5,y:726.1},0).wait(1).to({y:715.9},0).wait(1).to({y:708.7},0).wait(1).to({y:702.5},0).wait(1).to({y:696.8},0).wait(1).to({y:691.5},0).wait(1).to({y:686.6},0).wait(1).to({y:682.1},0).wait(1).to({y:678},0).wait(1).to({y:674.3},0).wait(1).to({y:671},0).wait(1).to({y:668},0).wait(1).to({y:665.3},0).wait(1).to({y:662.9},0).wait(1).to({y:660.8},0).wait(1).to({y:659},0).wait(1).to({y:657.4},0).wait(1).to({y:656},0).wait(1).to({y:654.8},0).wait(1).to({y:653.8},0).wait(1).to({y:653},0).wait(1).to({y:652.4},0).wait(1).to({y:651.9},0).wait(1).to({y:651.6},0).wait(1).to({y:651.4},0).wait(1).to({regY:338.9,y:653.5},0).wait(5).to({regY:337.5,y:651.6},0).wait(1).to({y:651.8},0).wait(1).to({y:652.2},0).wait(1).to({y:652.8},0).wait(1).to({y:653.8},0).wait(1).to({y:655.4},0).wait(1).to({y:657.7},0).wait(1).to({y:661.4},0).wait(1).to({y:667.6},0).wait(1).to({y:681.5},0).wait(1).to({y:722.9},0).wait(1).to({y:743.3},0).wait(1).to({y:750.6},0).wait(1).to({y:755.1},0).wait(1).to({y:758.3},0).wait(1).to({y:760.6},0).wait(1).to({y:762.3},0).wait(1).to({y:763.6},0).wait(1).to({y:764.5},0).wait(1).to({y:765.1},0).wait(1).to({y:765.4},0).wait(1).to({regY:339.1,y:767.7},0).wait(78));

	// sjena
	this.instance_3 = new lib.sjena();
	this.instance_3.setTransform(942.8,1249.4,1.424,1.424,0,0,0,242.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({regX:242,regY:0.7,scaleX:1.27,x:978.4,y:1246.7,alpha:0.656},0).wait(1).to({scaleX:1.24,x:987.9,alpha:0.566},0).wait(1).to({scaleX:1.21,x:994.6,alpha:0.503},0).wait(1).to({scaleX:1.19,x:1000.3,alpha:0.449},0).wait(1).to({scaleX:1.16,x:1005.6,alpha:0.398},0).wait(1).to({scaleX:1.14,x:1010.5,alpha:0.352},0).wait(1).to({scaleX:1.12,x:1015,alpha:0.309},0).wait(1).to({scaleX:1.11,x:1019.2,alpha:0.27},0).wait(1).to({scaleX:1.09,x:1023,alpha:0.234},0).wait(1).to({scaleX:1.08,x:1026.4,alpha:0.201},0).wait(1).to({scaleX:1.06,x:1029.5,alpha:0.172},0).wait(1).to({scaleX:1.05,x:1032.2,alpha:0.146},0).wait(1).to({scaleX:1.04,x:1034.8,alpha:0.122},0).wait(1).to({scaleX:1.03,x:1037,alpha:0.101},0).wait(1).to({scaleX:1.02,x:1038.9,alpha:0.083},0).wait(1).to({scaleX:1.02,x:1040.6,alpha:0.067},0).wait(1).to({scaleX:1.01,x:1042.1,alpha:0.053},0).wait(1).to({scaleX:1.01,x:1043.4,alpha:0.04},0).wait(1).to({scaleX:1,x:1044.5,alpha:0.03},0).wait(1).to({scaleX:1,x:1045.4,alpha:0.022},0).wait(1).to({scaleX:1,x:1046.1,alpha:0.015},0).wait(1).to({scaleX:0.99,x:1046.7,alpha:0.009},0).wait(1).to({scaleX:0.99,x:1047.1,alpha:0.005},0).wait(1).to({scaleX:0.99,x:1047.4,alpha:0.002},0).wait(1).to({x:1047.6,alpha:0.001},0).wait(1).to({regX:242.5,regY:2.6,scaleX:0.99,x:1048.2,y:1249.4,alpha:0},0).wait(5).to({regX:242,regY:0.7,scaleX:0.99,x:1047.6,y:1246.7,alpha:0.001},0).wait(1).to({x:1047.4,alpha:0.002},0).wait(1).to({scaleX:0.99,x:1047,alpha:0.006},0).wait(1).to({scaleX:1,x:1046.4,alpha:0.012},0).wait(1).to({scaleX:1,x:1045.5,alpha:0.021},0).wait(1).to({scaleX:1,x:1044.1,alpha:0.034},0).wait(1).to({scaleX:1.01,x:1041.9,alpha:0.054},0).wait(1).to({scaleX:1.03,x:1038.5,alpha:0.086},0).wait(1).to({scaleX:1.05,x:1032.7,alpha:0.142},0).wait(1).to({scaleX:1.1,x:1019.9,alpha:0.263},0).wait(1).to({scaleX:1.26,x:981.6,alpha:0.626},0).wait(1).to({scaleX:1.34,x:962.7,alpha:0.805},0).wait(1).to({scaleX:1.37,x:955.8,alpha:0.869},0).wait(1).to({scaleX:1.38,x:951.6,alpha:0.909},0).wait(1).to({scaleX:1.4,x:948.8,alpha:0.936},0).wait(1).to({scaleX:1.41,x:946.6,alpha:0.957},0).wait(1).to({scaleX:1.41,x:945,alpha:0.972},0).wait(1).to({scaleX:1.42,x:943.8,alpha:0.983},0).wait(1).to({scaleX:1.42,x:943,alpha:0.991},0).wait(1).to({scaleX:1.42,x:942.4,alpha:0.996},0).wait(1).to({scaleX:1.42,x:942.1,alpha:0.999},0).wait(1).to({regX:242.5,regY:2.6,x:942.8,y:1249.4,alpha:1},0).wait(78));

	// palac
	this.instance_4 = new lib.palac();
	this.instance_4.setTransform(1103,-410.3,1.424,1.424,0,0,0,82.5,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:82.6,x:1103.5,y:-406.2},0).wait(1).to({x:1103.9,y:-402},0).wait(1).to({x:1104.3,y:-397.7},0).wait(1).to({x:1104.7,y:-393.4},0).wait(1).to({x:1105.1,y:-389},0).wait(1).to({x:1105.6,y:-384.4},0).wait(1).to({x:1106,y:-379.8},0).wait(1).to({x:1106.4,y:-375},0).wait(1).to({x:1106.9,y:-370.1},0).wait(1).to({x:1107.3,y:-365.1},0).wait(1).to({x:1107.8,y:-359.9},0).wait(1).to({x:1108.3,y:-354.6},0).wait(1).to({x:1108.8,y:-349.2},0).wait(1).to({x:1109.3,y:-343.5},0).wait(1).to({x:1109.9,y:-337.7},0).wait(1).to({x:1110.4,y:-331.7},0).wait(1).to({x:1111,y:-325.5},0).wait(1).to({x:1111.6,y:-319},0).wait(1).to({x:1112.2,y:-312.3},0).wait(1).to({x:1112.9,y:-305.3},0).wait(1).to({x:1113.6,y:-298.1},0).wait(1).to({x:1114.3,y:-290.4},0).wait(1).to({x:1115,y:-282.5},0).wait(1).to({x:1115.8,y:-274.1},0).wait(1).to({x:1116.6,y:-265.4},0).wait(1).to({x:1117.5,y:-256.1},0).wait(1).to({x:1118.4,y:-246.4},0).wait(1).to({x:1119.3,y:-236.1},0).wait(1).to({x:1120.3,y:-225.2},0).wait(1).to({x:1121.4,y:-213.7},0).wait(1).to({x:1122.5,y:-201.6},0).wait(1).to({x:1123.7,y:-188.8},0).wait(1).to({x:1125,y:-175.5},0).wait(1).to({x:1126.3,y:-161.5},0).wait(1).to({x:1127.6,y:-147.1},0).wait(1).to({x:1129,y:-132.3},0).wait(1).to({x:1130.4,y:-116.7},0).wait(1).to({x:1132,y:-100.3},0).wait(1).to({x:1133.5,y:-83.1},0).wait(1).to({x:1135.2,y:-65.2},0).wait(1).to({x:1136.9,y:-46.8},0).wait(1).to({x:1138.7,y:-27.9},0).wait(1).to({x:1140.5,y:-8.8},0).wait(1).to({x:1142.2,y:10.4},0).wait(1).to({x:1144,y:29.4},0).wait(1).to({x:1145.7,y:48},0).wait(1).to({x:1147.4,y:66.1},0).wait(1).to({x:1149,y:83.5},0).wait(1).to({x:1150.6,y:100.1},0).wait(1).to({x:1152,y:115.7},0).wait(1).to({x:1153.4,y:130.4},0).wait(1).to({x:1154.7,y:144},0).wait(1).to({x:1155.8,y:156.6},0).wait(1).to({x:1156.9,y:168.2},0).wait(1).to({x:1157.9,y:178.8},0).wait(1).to({x:1158.8,y:188.3},0).wait(1).to({x:1159.6,y:196.9},0).wait(1).to({x:1160.3,y:204.7},0).wait(1).to({x:1160.9,y:211.7},0).wait(1).to({x:1161.5,y:218.1},0).wait(1).to({x:1162.1,y:224},0).wait(1).to({x:1162.6,y:229.4},0).wait(1).to({x:1163.1,y:234.5},0).wait(1).to({x:1163.5,y:239.2},0).wait(1).to({x:1163.9,y:243.6},0).wait(1).to({x:1164.3,y:247.8},0).wait(1).to({x:1164.7,y:251.6},0).wait(1).to({x:1165,y:255.3},0).wait(1).to({x:1165.3,y:258.7},0).wait(1).to({x:1165.6,y:261.9},0).wait(1).to({x:1165.9,y:265},0).wait(1).to({x:1166.2,y:267.9},0).wait(1).to({x:1166.4,y:270.6},0).wait(1).to({x:1166.7,y:273.2},0).wait(1).to({x:1166.9,y:275.6},0).wait(1).to({x:1167.1,y:277.9},0).wait(1).to({x:1167.3,y:280.1},0).wait(1).to({x:1167.5,y:282.1},0).wait(1).to({x:1167.7,y:284.1},0).wait(1).to({x:1167.8,y:286},0).wait(1).to({x:1168,y:287.7},0).wait(1).to({x:1168.2,y:289.4},0).wait(1).to({x:1168.3,y:290.9},0).wait(1).to({x:1168.4,y:292.4},0).wait(1).to({x:1168.6,y:293.8},0).wait(1).to({x:1168.7,y:295.2},0).wait(1).to({x:1168.8,y:296.4},0).wait(1).to({x:1168.9,y:297.6},0).wait(1).to({x:1169,y:298.7},0).wait(1).to({x:1169.1,y:299.8},0).wait(1).to({x:1169.2,y:300.8},0).wait(1).to({x:1169.3,y:301.7},0).wait(1).to({x:1169.4,y:302.6},0).wait(1).to({x:1169.5,y:303.4},0).wait(1).to({y:304.2},0).wait(1).to({x:1169.6,y:304.9},0).wait(1).to({x:1169.7,y:305.5},0).wait(1).to({y:306.1},0).wait(1).to({x:1169.8,y:306.7},0).wait(1).to({y:307.2},0).wait(1).to({x:1169.9,y:307.7},0).wait(1).to({y:308.1},0).wait(1).to({y:308.5},0).wait(1).to({x:1170,y:308.9},0).wait(1).to({y:309.2},0).wait(1).to({y:309.5},0).wait(1).to({x:1170.1,y:309.7},0).wait(1).to({y:309.9},0).wait(1).to({y:310.1},0).wait(1).to({y:310.2},0).wait(1).to({y:310.3},0).wait(1).to({y:310.4},0).wait(1).to({y:310.5},0).wait(1).to({regX:82.5,x:1169.9},0).wait(1).to({regX:82.6,x:1170.1,y:271.3},0).wait(1).to({y:261.1},0).wait(1).to({y:253.9},0).wait(1).to({y:247.7},0).wait(1).to({y:242},0).wait(1).to({y:236.7},0).wait(1).to({y:231.8},0).wait(1).to({y:227.3},0).wait(1).to({y:223.3},0).wait(1).to({y:219.6},0).wait(1).to({y:216.2},0).wait(1).to({y:213.2},0).wait(1).to({y:210.5},0).wait(1).to({y:208.2},0).wait(1).to({y:206.1},0).wait(1).to({y:204.2},0).wait(1).to({y:202.6},0).wait(1).to({y:201.2},0).wait(1).to({y:200.1},0).wait(1).to({y:199.1},0).wait(1).to({y:198.3},0).wait(1).to({y:197.7},0).wait(1).to({y:197.2},0).wait(1).to({y:196.9},0).wait(1).to({y:196.7},0).wait(1).to({regX:82.5,x:1169.9,y:196.5},0).wait(5).to({regX:82.6,x:1170.1,y:196.6},0).wait(1).to({y:196.8},0).wait(1).to({y:197.2},0).wait(1).to({y:197.9},0).wait(1).to({y:198.9},0).wait(1).to({y:200.4},0).wait(1).to({y:202.7},0).wait(1).to({y:206.4},0).wait(1).to({y:212.7},0).wait(1).to({y:226.5},0).wait(1).to({y:267.8},0).wait(1).to({y:288.2},0).wait(1).to({y:295.6},0).wait(1).to({y:300.1},0).wait(1).to({y:303.2},0).wait(1).to({y:305.6},0).wait(1).to({y:307.3},0).wait(1).to({y:308.5},0).wait(1).to({y:309.4},0).wait(1).to({y:310},0).wait(1).to({y:310.4},0).wait(1).to({regX:82.5,x:1169.9,y:310.5},0).wait(1).to({regX:82.6,x:1170},0).wait(1).to({y:310.4},0).wait(1).to({y:310.3},0).wait(1).to({y:310},0).wait(1).to({y:309.7},0).wait(1).to({x:1169.9,y:309.3},0).wait(1).to({y:308.9},0).wait(1).to({x:1169.8,y:308.3},0).wait(1).to({y:307.6},0).wait(1).to({x:1169.7,y:306.8},0).wait(1).to({x:1169.6,y:305.8},0).wait(1).to({x:1169.5,y:304.8},0).wait(1).to({x:1169.4,y:303.5},0).wait(1).to({x:1169.3,y:302.2},0).wait(1).to({x:1169.1,y:300.6},0).wait(1).to({x:1169,y:298.8},0).wait(1).to({x:1168.8,y:296.8},0).wait(1).to({x:1168.6,y:294.6},0).wait(1).to({x:1168.3,y:292},0).wait(1).to({x:1168.1,y:289.2},0).wait(1).to({x:1167.8,y:286},0).wait(1).to({x:1167.4,y:282.4},0).wait(1).to({x:1167.1,y:278.4},0).wait(1).to({x:1166.6,y:273.8},0).wait(1).to({x:1166.2,y:268.7},0).wait(1).to({x:1165.6,y:262.8},0).wait(1).to({x:1165,y:256},0).wait(1).to({x:1164.3,y:248.3},0).wait(1).to({x:1163.4,y:239.2},0).wait(1).to({x:1162.4,y:228.6},0).wait(1).to({x:1161.3,y:215.9},0).wait(1).to({x:1159.8,y:200.3},0).wait(1).to({x:1158,y:180.7},0).wait(1).to({x:1155.6,y:155.1},0).wait(1).to({x:1152.4,y:120.8},0).wait(1).to({x:1147.9,y:71.7},0).wait(1).to({x:1140.8,y:-3.8},0).wait(1).to({x:1131.9,y:-100.4},0).wait(1).to({x:1125.2,y:-172},0).wait(1).to({x:1121,y:-217.2},0).wait(1).to({x:1118.2,y:-247.9},0).wait(1).to({x:1116.2,y:-269.4},0).wait(1).to({x:1114.6,y:-285.8},0).wait(1).to({x:1113.4,y:-299.3},0).wait(1).to({x:1112.3,y:-310.8},0).wait(1).to({x:1111.4,y:-320.7},0).wait(1).to({x:1110.6,y:-329.5},0).wait(1).to({x:1109.8,y:-337.3},0).wait(1).to({x:1109.2,y:-344.4},0).wait(1).to({x:1108.6,y:-350.8},0).wait(1).to({x:1108.1,y:-356.6},0).wait(1).to({x:1107.6,y:-361.9},0).wait(1).to({x:1107.1,y:-366.7},0).wait(1).to({x:1106.7,y:-371.2},0).wait(1).to({x:1106.3,y:-375.3},0).wait(1).to({x:1106,y:-379},0).wait(1).to({x:1105.7,y:-382.5},0).wait(1).to({x:1105.4,y:-385.6},0).wait(1).to({x:1105.1,y:-388.5},0).wait(1).to({x:1104.8,y:-391.2},0).wait(1).to({x:1104.6,y:-393.6},0).wait(1).to({x:1104.4,y:-395.9},0).wait(1).to({x:1104.2,y:-397.9},0).wait(1).to({x:1104,y:-399.7},0).wait(1).to({x:1103.9,y:-401.4},0).wait(1).to({x:1103.8,y:-402.9},0).wait(1).to({x:1103.6,y:-404.3},0).wait(1).to({x:1103.5,y:-405.4},0).wait(1).to({x:1103.4,y:-406.5},0).wait(1).to({x:1103.3,y:-407.4},0).wait(1).to({y:-408.1},0).wait(1).to({x:1103.2,y:-408.8},0).wait(1).to({y:-409.3},0).wait(1).to({x:1103.1,y:-409.7},0).wait(1).to({y:-410},0).wait(1).to({y:-410.1},0).wait(1).to({regX:82.5,x:1103,y:-410.3},0).wait(1));

	// prsti
	this.instance_5 = new lib.prsti();
	this.instance_5.setTransform(1616.4,-392.5,1.424,1.424,0,0,0,198,236.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:235.9,x:1616.1,y:-389.3},0).wait(1).to({x:1615.8,y:-385.3},0).wait(1).to({x:1615.5,y:-381.2},0).wait(1).to({x:1615.2,y:-377},0).wait(1).to({x:1614.8,y:-372.7},0).wait(1).to({x:1614.5,y:-368.3},0).wait(1).to({x:1614.2,y:-363.8},0).wait(1).to({x:1613.8,y:-359.2},0).wait(1).to({x:1613.5,y:-354.4},0).wait(1).to({x:1613.1,y:-349.6},0).wait(1).to({x:1612.8,y:-344.6},0).wait(1).to({x:1612.4,y:-339.4},0).wait(1).to({x:1612,y:-334.2},0).wait(1).to({x:1611.6,y:-328.7},0).wait(1).to({x:1611.2,y:-323.1},0).wait(1).to({x:1610.8,y:-317.2},0).wait(1).to({x:1610.3,y:-311.2},0).wait(1).to({x:1609.9,y:-305},0).wait(1).to({x:1609.4,y:-298.5},0).wait(1).to({x:1608.9,y:-291.7},0).wait(1).to({x:1608.4,y:-284.6},0).wait(1).to({x:1607.8,y:-277.3},0).wait(1).to({x:1607.3,y:-269.6},0).wait(1).to({x:1606.7,y:-261.5},0).wait(1).to({x:1606.1,y:-253},0).wait(1).to({x:1605.4,y:-244},0).wait(1).to({x:1604.7,y:-234.6},0).wait(1).to({x:1604,y:-224.6},0).wait(1).to({x:1603.2,y:-214.1},0).wait(1).to({x:1602.4,y:-203},0).wait(1).to({x:1601.5,y:-191.2},0).wait(1).to({x:1600.6,y:-178.9},0).wait(1).to({x:1599.7,y:-165.9},0).wait(1).to({x:1598.7,y:-152.4},0).wait(1).to({x:1597.6,y:-138.5},0).wait(1).to({x:1596.6,y:-124.1},0).wait(1).to({x:1595.5,y:-109},0).wait(1).to({x:1594.3,y:-93.1},0).wait(1).to({x:1593.1,y:-76.5},0).wait(1).to({x:1591.8,y:-59.1},0).wait(1).to({x:1590.5,y:-41.3},0).wait(1).to({x:1589.2,y:-23},0).wait(1).to({x:1587.8,y:-4.5},0).wait(1).to({x:1586.5,y:14.1},0).wait(1).to({x:1585.1,y:32.4},0).wait(1).to({x:1583.8,y:50.5},0).wait(1).to({x:1582.5,y:68},0).wait(1).to({x:1581.3,y:84.9},0).wait(1).to({x:1580.1,y:100.9},0).wait(1).to({x:1579,y:116.1},0).wait(1).to({x:1577.9,y:130.3},0).wait(1).to({x:1577,y:143.5},0).wait(1).to({x:1576.1,y:155.7},0).wait(1).to({x:1575.2,y:166.9},0).wait(1).to({x:1574.5,y:177.1},0).wait(1).to({x:1573.8,y:186.4},0).wait(1).to({x:1573.2,y:194.7},0).wait(1).to({x:1572.6,y:202.2},0).wait(1).to({x:1572.1,y:209},0).wait(1).to({x:1571.7,y:215.2},0).wait(1).to({x:1571.3,y:220.9},0).wait(1).to({x:1570.9,y:226.2},0).wait(1).to({x:1570.5,y:231.1},0).wait(1).to({x:1570.2,y:235.7},0).wait(1).to({x:1569.9,y:240},0).wait(1).to({x:1569.6,y:244},0).wait(1).to({x:1569.3,y:247.7},0).wait(1).to({x:1569,y:251.2},0).wait(1).to({x:1568.8,y:254.6},0).wait(1).to({x:1568.6,y:257.7},0).wait(1).to({x:1568.4,y:260.6},0).wait(1).to({x:1568.2,y:263.4},0).wait(1).to({x:1568,y:266.1},0).wait(1).to({x:1567.8,y:268.5},0).wait(1).to({x:1567.6,y:270.9},0).wait(1).to({x:1567.4,y:273.1},0).wait(1).to({x:1567.3,y:275.3},0).wait(1).to({x:1567.1,y:277.3},0).wait(1).to({x:1567,y:279.2},0).wait(1).to({x:1566.9,y:280.9},0).wait(1).to({x:1566.7,y:282.6},0).wait(1).to({x:1566.6,y:284.3},0).wait(1).to({x:1566.5,y:285.8},0).wait(1).to({x:1566.4,y:287.2},0).wait(1).to({x:1566.3,y:288.6},0).wait(1).to({x:1566.2,y:289.9},0).wait(1).to({x:1566.1,y:291.1},0).wait(1).to({x:1566,y:292.2},0).wait(1).to({y:293.3},0).wait(1).to({x:1565.9,y:294.3},0).wait(1).to({x:1565.8,y:295.3},0).wait(1).to({x:1565.7,y:296.2},0).wait(1).to({y:297},0).wait(1).to({x:1565.6,y:297.8},0).wait(1).to({y:298.6},0).wait(1).to({x:1565.5,y:299.3},0).wait(1).to({y:299.9},0).wait(1).to({x:1565.4,y:300.5},0).wait(1).to({y:301},0).wait(1).to({y:301.6},0).wait(1).to({x:1565.3,y:302},0).wait(1).to({y:302.4},0).wait(1).to({y:302.8},0).wait(1).to({x:1565.2,y:303.2},0).wait(1).to({y:303.5},0).wait(1).to({y:303.7},0).wait(1).to({y:304},0).wait(1).to({y:304.2},0).wait(1).to({x:1565.1,y:304.3},0).wait(1).to({y:304.5},0).wait(1).to({y:304.6},0).wait(2).to({y:304.7},0).wait(1).to({regY:236.5,y:305.5},0).wait(1).to({regY:235.9,y:265.4},0).wait(1).to({y:255.2},0).wait(1).to({y:248},0).wait(1).to({y:241.9},0).wait(1).to({y:236.1},0).wait(1).to({y:230.8},0).wait(1).to({y:225.9},0).wait(1).to({y:221.4},0).wait(1).to({y:217.3},0).wait(1).to({y:213.6},0).wait(1).to({y:210.3},0).wait(1).to({y:207.3},0).wait(1).to({y:204.6},0).wait(1).to({y:202.2},0).wait(1).to({y:200.1},0).wait(1).to({y:198.3},0).wait(1).to({y:196.7},0).wait(1).to({y:195.3},0).wait(1).to({y:194.1},0).wait(1).to({y:193.2},0).wait(1).to({y:192.4},0).wait(1).to({y:191.7},0).wait(1).to({y:191.3},0).wait(1).to({y:190.9},0).wait(1).to({y:190.8},0).wait(1).to({regY:236.5,y:191.5},0).wait(5).to({regY:235.9,y:190.8},0).wait(1).to({y:191},0).wait(1).to({y:191.4},0).wait(1).to({y:192},0).wait(1).to({y:193},0).wait(1).to({y:194.6},0).wait(1).to({y:196.9},0).wait(1).to({y:200.6},0).wait(1).to({y:206.8},0).wait(1).to({y:220.7},0).wait(1).to({y:262},0).wait(1).to({y:282.4},0).wait(1).to({y:289.8},0).wait(1).to({y:294.3},0).wait(1).to({y:297.5},0).wait(1).to({y:299.8},0).wait(1).to({y:301.5},0).wait(1).to({y:302.8},0).wait(1).to({y:303.7},0).wait(1).to({y:304.3},0).wait(1).to({y:304.6},0).wait(1).to({regY:236.5,y:305.5},0).wait(1).to({regY:235.9,y:304.7},0).wait(1).to({y:304.6},0).wait(1).to({y:304.4},0).wait(1).to({y:304.2},0).wait(1).to({y:303.9},0).wait(1).to({y:303.5},0).wait(1).to({x:1565.2,y:303.1},0).wait(1).to({y:302.5},0).wait(1).to({x:1565.3,y:301.8},0).wait(1).to({y:301},0).wait(1).to({x:1565.4,y:300.1},0).wait(1).to({x:1565.5,y:299.1},0).wait(1).to({y:297.9},0).wait(1).to({x:1565.6,y:296.6},0).wait(1).to({x:1565.8,y:295},0).wait(1).to({x:1565.9,y:293.3},0).wait(1).to({x:1566,y:291.4},0).wait(1).to({x:1566.2,y:289.2},0).wait(1).to({x:1566.4,y:286.8},0).wait(1).to({x:1566.6,y:284},0).wait(1).to({x:1566.8,y:280.9},0).wait(1).to({x:1567,y:277.5},0).wait(1).to({x:1567.3,y:273.6},0).wait(1).to({x:1567.7,y:269.1},0).wait(1).to({x:1568,y:264.1},0).wait(1).to({x:1568.4,y:258.4},0).wait(1).to({x:1568.9,y:251.9},0).wait(1).to({x:1569.5,y:244.4},0).wait(1).to({x:1570.1,y:235.6},0).wait(1).to({x:1570.9,y:225.3},0).wait(1).to({x:1571.8,y:213},0).wait(1).to({x:1572.9,y:197.9},0).wait(1).to({x:1574.3,y:178.9},0).wait(1).to({x:1576.1,y:154.2},0).wait(1).to({x:1578.5,y:120.9},0).wait(1).to({x:1582,y:73.3},0).wait(1).to({x:1587.4,y:0.2},0).wait(1).to({x:1594.3,y:-93.3},0).wait(1).to({x:1599.3,y:-162.6},0).wait(1).to({x:1602.6,y:-206.4},0).wait(1).to({x:1604.7,y:-236.2},0).wait(1).to({x:1606.3,y:-257},0).wait(1).to({x:1607.4,y:-272.9},0).wait(1).to({x:1608.4,y:-285.9},0).wait(1).to({x:1609.2,y:-297},0).wait(1).to({x:1609.9,y:-306.7},0).wait(1).to({x:1610.5,y:-315.2},0).wait(1).to({x:1611.1,y:-322.8},0).wait(1).to({x:1611.6,y:-329.6},0).wait(1).to({x:1612.1,y:-335.8},0).wait(1).to({x:1612.5,y:-341.4},0).wait(1).to({x:1612.8,y:-346.5},0).wait(1).to({x:1613.2,y:-351.2},0).wait(1).to({x:1613.5,y:-355.5},0).wait(1).to({x:1613.8,y:-359.5},0).wait(1).to({x:1614.1,y:-363.1},0).wait(1).to({x:1614.3,y:-366.4},0).wait(1).to({x:1614.5,y:-369.5},0).wait(1).to({x:1614.7,y:-372.3},0).wait(1).to({x:1614.9,y:-374.9},0).wait(1).to({x:1615.1,y:-377.3},0).wait(1).to({x:1615.3,y:-379.4},0).wait(1).to({x:1615.4,y:-381.4},0).wait(1).to({x:1615.5,y:-383.2},0).wait(1).to({x:1615.7,y:-384.8},0).wait(1).to({x:1615.8,y:-386.3},0).wait(1).to({x:1615.9,y:-387.6},0).wait(1).to({y:-388.7},0).wait(1).to({x:1616,y:-389.7},0).wait(1).to({x:1616.1,y:-390.6},0).wait(1).to({y:-391.3},0).wait(1).to({x:1616.2,y:-392},0).wait(1).to({y:-392.4},0).wait(1).to({y:-392.8},0).wait(1).to({x:1616.3,y:-393.1},0).wait(1).to({y:-393.2},0).wait(1).to({regY:236.5,x:1616.4,y:-392.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1962.7,38.1,1301.6,1981.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;


var uzmiZastavu = function(){
	$prsti_i_zastava.gotoAndPlay("start1");
}
var vratiZastavu = function(){
	$prsti_i_zastava.gotoAndPlay("start2");
}