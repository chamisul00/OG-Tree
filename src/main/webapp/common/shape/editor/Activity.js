OG.shape.Activity = function (label) {
    OG.shape.Activity.superclass.call(this);

    this.SHAPE_ID = 'OG.shape.Activity';
    this.LABEL_EDITABLE = false;
    this.label = label;
    this.CONNECTABLE = false;
    this.DELETABLE = false;
};
OG.shape.Activity.prototype = new OG.shape.DIDS();
OG.shape.Activity.superclass = OG.shape.DIDS;
OG.shape.Activity.prototype.constructor = OG.shape.Activity;
OG.Activity = OG.shape.Activity;

OG.shape.Activity.prototype.createSubShape = function () {
    var me = this;

    //TODO 액티비티 이미지 교체법.

    //1. http://picsvg.com/ 사이트에서, 이미지를 업로드한 후, invert4 단계로 컨버팅할것. (만일 사이트가 문닫았으면, 비슷한 사이트는 많음.)
    // 검색은, 구글에 online image to svg 로 하면 될 듯.

    //2. 컨버팅한 svg 파일 안에, stroke=".." 이라고 된 항목을 찾아서 다 삭제. (이걸 삭제해야 우리가 원하는 색상을 입힐 수 있음.)

    //3. 파일을 한줄로 바꿔주는 사이트 http://www.textfixer.com/tools/remove-line-breaks.php 에서, 파일 내용을 카피 후 클릭. (사이트 없으면 Sublime 같은 에디트툴에서 검색해서 해결)

    //4. 아래의 xml 스트링을 바꾸면 끝.

    //TODO 기타 체크이미지, 시크릿 이미지등은 그냥 파일을 바꾸면 된다!! (시크릿, 셀렉티드는 svg 파일인데 그냥 다른 svg 로 교체하면 된다!!)


    //TODO Svg Start - 색상, 투명도, 선처리를 스테이터스에 따라서 조정하는 부분.
    var xml = '<?xml version="1.0" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="525.000000pt" height="435.000000pt" viewBox="0 0 525.000000 435.000000" preserveAspectRatio="xMidYMid meet"> <metadata> Created by potrace 1.10, written by Peter Selinger 2001-2011 </metadata> <g transform="translate(0.000000,435.000000) scale(0.100000,-0.100000)"> <path d="M3894 4106 c-23 -6 -63 -25 -90 -43 -27 -17 -375 -358 -774 -757 -648 -649 -726 -730 -731 -763 -4 -21 -12 -54 -19 -73 -29 -79 -38 -108 -55 -165 -9 -33 -23 -75 -31 -93 -8 -18 -14 -39 -14 -48 0 -32 -35 -82 -108 -157 -70 -70 -77 -81 -77 -117 0 -52 22 -73 75 -73 39 0 48 6 118 75 84 82 107 97 197 123 33 9 76 23 95 30 19 7 62 20 95 30 33 9 75 23 93 31 18 8 45 14 60 14 23 0 146 118 755 728 400 400 740 746 757 769 66 90 79 237 29 323 -5 8 -13 24 -18 35 -11 24 -64 74 -105 100 -66 41 -170 54 -252 31z m128 -152 c55 -9 105 -63 112 -122 4 -26 2 -62 -4 -81 -11 -41 -66 -101 -91 -101 -10 0 -61 43 -113 96 -53 52 -96 103 -96 113 0 23 60 80 96 91 37 11 50 11 96 4z m-207 -324 l110 -110 -155 -156 c-85 -85 -163 -160 -174 -166 -16 -9 -33 5 -122 93 -57 57 -104 108 -104 113 0 10 320 336 330 336 3 0 55 -50 115 -110z m-438 -470 l94 -94 -368 -368 c-202 -202 -373 -368 -378 -368 -13 0 -215 202 -215 215 0 5 165 175 367 377 356 356 368 367 387 350 11 -9 62 -60 113 -112z m-841 -874 l36 -35 -43 -19 c-67 -30 -158 -56 -166 -48 -8 7 19 99 48 165 l20 43 35 -36 c19 -19 51 -51 70 -70z"/> <path d="M965 3320 c-82 -15 -136 -51 -192 -125 -67 -91 -63 3 -62 -1390 0 -1161 1 -1263 17 -1300 38 -91 114 -165 202 -199 42 -15 167 -16 1710 -14 1824 3 1687 -1 1776 62 22 16 54 48 70 70 63 88 59 -8 62 1376 2 1161 1 1269 -14 1309 -50 133 -150 210 -276 214 -81 2 -103 -13 -103 -72 0 -49 33 -80 87 -81 47 0 117 -52 134 -100 20 -55 20 -2474 0 -2521 -16 -39 -48 -70 -89 -87 -21 -9 -419 -12 -1656 -12 -1759 0 -1668 -3 -1717 52 -35 39 -45 79 -42 174 l3 89 235 5 235 5 3 1024 c1 740 -1 1028 -9 1037 -9 11 -63 14 -238 16 l-226 3 -3 90 c-3 111 12 153 70 195 l41 30 838 0 837 0 26 31 c31 36 33 65 6 99 l-19 25 -833 1 c-458 1 -851 -2 -873 -6z m220 -870 l0 -235 -150 0 -150 0 -3 225 c-1 123 0 230 3 238 3 10 38 12 152 10 l148 -3 0 -235z m0 -640 l0 -235 -130 -3 c-71 -1 -140 0 -152 3 l-23 5 0 229 c0 125 3 231 7 235 4 3 72 5 152 4 l146 -3 0 -235z m0 -640 l0 -235 -150 0 -150 0 -3 229 c-2 177 1 231 10 238 7 4 76 7 153 5 l140 -2 0 -235z"/> <path d="M1516 2994 c-3 -9 -6 -543 -6 -1188 0 -898 3 -1175 12 -1184 17 -17 2679 -17 2696 0 9 9 12 286 12 1184 0 645 -3 1179 -6 1188 -5 14 -30 16 -174 16 -164 0 -168 -1 -194 -25 -25 -24 -35 -68 -18 -90 23 -31 50 -40 136 -45 l91 -5 0 -1035 0 -1035 -1195 0 -1195 0 0 1035 0 1035 332 5 331 5 26 24 c41 38 34 91 -15 116 -23 12 -96 15 -427 15 -355 0 -401 -2 -406 -16z"/> </g> </svg>';
    var stroke = 'none';
    var color = 'black';
    var opacity = 1;
    if (this.data) {
        stroke = this.data.stroke;
        color = this.data.color;
        if (!color || color == 'none') {
            color = 'black';
        }
        if(this.data.data.extData['c_securitylevel'] == 'Secret'){
            opacity = 0.3;
        }
    }
    this.sub = [
        {

            //SvgShape 는, svg xml 을 이미지로 화면에 나타내는 Shape 이다.
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
    //Svg End.

    //TODO 나머지 subShape 를 그리는 로직은 DIDS 클래스의 메소드를 실행시킴.
    //체크박스 및 표시
    if (me.data.position == 'my-out' || me.data.position == 'my') {
        me.addCheckBox();
    }

    //시크릿 표시
    me.addSecret();

    //락 표시
    me.addLock();

    return this.sub;
};