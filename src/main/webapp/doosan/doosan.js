$(function () {
    var tree = new Tree('canvas');
    tree.init();

    /**
     * GUI 상에서 매핑이 되기 전의 핸들러
     * @param event
     * @param source
     * @param target
     * @returns {boolean}
     */
    tree.onBeforeMapping = function (event, source, target) {
        console.log(event, source, target);
        return true;
    };

    /**
     * GUI 상에서 매핑이 이루어졌을 때 핸들러
     * @param event
     * @param mapping
     */
    tree.onMapping = function (event, mapping) {
        console.log(event, mapping);
    };

    $.getJSON("doosan/sample/myData.json", function (myData) {

        tree.updateMyData(myData);

        $.getJSON("doosan/sample/otherData.json", function (otherData) {
            tree.updateOtherData(otherData);

            //전체 데이터 불러오기
            tree.load();

            //매핑 데이터 불러오기
            tree.loadByFilter({type: tree.Constants.TYPE.MAPPING});

            //아더 액티비티 불러오기
            tree.loadByFilter({type: tree.Constants.POSITION.OTHER});

            //아더 폴더,ED 불러오기
            tree.loadByFilter({type: tree.Constants.POSITION.OTHER_OUT});

            //마이 액티비티 불러오기
            tree.loadByFilter({type: tree.Constants.POSITION.MY});

            //마이 폴더,ED 불러오기
            tree.loadByFilter({type: tree.Constants.POSITION.MY_OUT});
        });
    });

    //var otherData = randomData('other');
    //var myData = randomData('my');
    //tree.updateOtherData(otherData);
    //tree.updateMyData(myData);
});

var randomData = function (type) {
    var data = {};
    var randomCount = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var randomType = function () {
        var number = Math.floor(Math.random() * (2));
        if (number == 0) {
            return 'folder';
        } else {
            return 'ed';
        }
    };

    //var random = randomCount() + 1;
    for (var i = 0; i < 10; i++) {
        console.log('=====Activity : ' + i + ' ===========');

        var id = type + "-ac-" + i;
        var activity = {
            "type": "activity",
            "id": id,
            "name": type + "-ac-" + i + "-Activity",
            "position": type,
            "parentId": "",
            "expand": true,
            "extData": {}
        };
        if (i < 9) {
            activity.next = type + "-ac-" + (i + 1);
        }
        if (i > 0) {
            activity.prev = type + "-ac-" + (i - 1);
        }
        data[id] = activity;
        var maxDepth = 7;
        var createdData = [activity];
        for (var c = 0; c < maxDepth; c++) {
            var copyData = JSON.parse(JSON.stringify(createdData));
            createdData = [];
            for (var g = 0; g < copyData.length; g++) {
                var child, childId;
                var parent = copyData[g];
                var childType = randomType();
                if (c == 0) {
                    childType = 'folder';
                }
                var randomChildNum = randomCount(1, 3);
                if (childType != 'folder') {
                    randomChildNum = randomCount(1, 5);
                }
                for (var m = 0; m < randomChildNum; m++) {
                    if (childType == 'folder') {
                        childId = type + "-fd-" + i + '-' + c + '-' + g + '-' + m;
                        child = {
                            "type": childType,
                            "id": childId,
                            "name": type + "-fd-" + i + '-' + c + '-' + g + '-' + m + "-Folder",
                            "position": type + "-out",
                            "parentId": parent.id,
                            "expand": true,
                            "extData": {}
                        };
                        createdData.push(child);
                        data[childId] = child;
                    } else {
                        childId = type + "-ed-" + i + '-' + c + '-' + g + '-' + m;
                        child = {
                            "type": childType,
                            "id": childId,
                            "name": type + "-ed-" + i + '-' + c + '-' + g + '-' + m + "-Ed",
                            "position": type + "-out",
                            "parentId": parent.id,
                            "expand": true,
                            "extData": {}
                        };
                        data[childId] = child;
                    }
                }
            }
        }
    }
    return data;
};