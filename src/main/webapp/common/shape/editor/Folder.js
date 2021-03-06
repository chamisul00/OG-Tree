OG.shape.Folder = function (label) {
    OG.shape.Folder.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.Folder';
    this.LABEL_EDITABLE = false;
    this.label = label;
    this.CONNECTABLE = false;
    this.DELETABLE = false;
};
OG.shape.Folder.prototype = new OG.shape.DIDS();
OG.shape.Folder.superclass = OG.shape.DIDS;
OG.shape.Folder.prototype.constructor = OG.shape.Folder;
OG.Folder = OG.shape.Folder;

OG.shape.Folder.prototype.createSubShape = function () {
    var me = this;
    var xml = '<?xml version="1.0" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="447.000000pt" height="330.000000pt" viewBox="0 0 447.000000 330.000000" preserveAspectRatio="xMidYMid meet"> <metadata> Created by potrace 1.10, written by Peter Selinger 2001-2011 </metadata> <g transform="translate(0.000000,330.000000) scale(0.100000,-0.100000)"> <path d="M1227 3040 c-50 -4 -60 -9 -77 -35 -11 -16 -20 -40 -20 -52 0 -38 -37 -108 -71 -137 -54 -46 -69 -75 -69 -138 0 -33 5 -60 12 -64 17 -11 2600 -12 2621 -2 26 13 23 92 -6 143 -18 33 -30 41 -62 47 -22 4 -337 7 -699 7 -594 1 -663 3 -697 18 -41 18 -60 52 -73 128 -4 22 -16 51 -27 65 l-21 24 -376 1 c-208 0 -403 -2 -435 -5z"/> <path d="M970 2411 c-140 -29 -238 -130 -256 -263 -3 -24 1 -140 10 -258 8 -118 18 -269 21 -335 3 -66 10 -181 16 -255 5 -74 14 -218 19 -320 22 -391 25 -422 49 -468 33 -66 95 -127 154 -153 l52 -24 1280 0 1280 0 52 24 c59 26 121 88 153 152 24 48 32 120 49 454 6 99 15 245 20 325 23 305 45 699 45 795 1 88 -2 107 -25 156 -30 64 -92 122 -164 153 l-50 21 -1335 1 c-734 1 -1351 -1 -1370 -5z m2697 -162 c39 -14 72 -48 90 -89 12 -30 13 -56 3 -170 -6 -74 -17 -256 -26 -405 -43 -759 -55 -938 -65 -978 -6 -21 -25 -55 -44 -75 l-33 -37 -1270 -3 -1270 -2 -32 26 c-47 40 -70 93 -70 162 0 32 -7 153 -14 268 -8 115 -24 371 -35 569 -12 198 -26 416 -32 485 -8 105 -8 131 5 160 16 40 50 74 86 89 36 14 2669 15 2707 0z"/> <path d="M2875 1896 c-16 -7 -202 -185 -411 -395 -210 -209 -386 -381 -391 -381 -6 0 -51 41 -101 90 -99 99 -118 106 -177 70 -39 -24 -67 -76 -58 -111 8 -35 60 -96 187 -220 168 -165 98 -202 648 349 251 251 459 467 462 479 12 39 -50 115 -105 127 -13 3 -37 0 -54 -8z"/> </g> </svg> ';
    var stroke = 'none';
    var color = 'black';
    var opacity = 1;
    if (this.data) {
        stroke = this.data.stroke;
        color = this.data.color;
        if (!color || color == 'none') {
            color = 'black';
        }
        if (this.data.blur) {
            opacity = 0.3;
        }
        if(this.data.data.extData['c_securitylevel'] == 'Secret'){
            opacity = 0.3;
        }
    }
    this.sub = [
        {
            shape: new OG.SvgShape(xml),
            width: '100%',
            height: '100%',
            left: '0%',
            top: '0%',
            style: {
                'fill': color,
                'fill-opacity': 1,
                'stroke': stroke,
                'stroke-width': '50',
                'opacity': opacity
            }
        }
    ];

    //셀렉트 표시
    if (me.data.position == 'my-in') {
        me.addSelectLabel();
    }

    //체크박스 및 표시
    if (me.data.position == 'my-out' || me.data.position == 'my') {
        me.addCheckBox();
    }

    //c_team,c_workflow 표현
    if (this.data.position == 'my-in') {
        me.addTopLabel();
    }

    me.addSecret();
    me.addLock();

    return this.sub;
};