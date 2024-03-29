// Ex10 : sort
window.addEventListener("load", function() {

    var notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section10");
    
    var noticeList =section.querySelector(".notice-list");
    var titldTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function() {

        var template = section.querySelector("template")
        
        notices.forEach(notice => {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notice.id;

            var aNode = tds[1].children[0];
            aNode.href = notice.id;
            aNode.textContent = notice.title;

            tds[2].textContent = notice.regDate;
            tds[3].textContent = notice.writerId;
            tds[4].textContent = notice.hit;
            tbodyNode.appendChild(cloneNode);
        });
    };
    
    bindData();

    var titleSorted = false;
    
    titldTd.onclick = function () {

        tbodyNode.innerHTML = "";

        if(!titleSorted){
            notices.sort(function (a, b){
                if(a.title < b.title)
                    return -1;
                else if (a.title > b.titie)
                    return 1;
                else
                    return 0;
            });
        }
        else {
            notices.reverse();
        }
        bindData();
        titleSorted = true;
    };
    
});

// Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기

window.addEventListener("load", function () {

    var section = document.querySelector("#section9");

    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function() {
        var inputs = tbody.querySelectorAll("input[type='checkbox']")
        for(var i=0; i<inputs.length; i++){
            inputs[i].checked=allCheckbox.checked;
        }
        allCheckbox.checked;
    };

    delButton.onclick = function() {
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked")
        console.log(inputs.length)
        
        inputs.forEach(input => {
            input.parentElement.parentElement.remove()
        });
        
    };
    
    swapButton.onclick = function() {
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked")
        if(inputs.length != 2) {
            alert("You must two select. ");
            return;
        }

        var trs = [];
        inputs.forEach(input => {
            trs.push(input.parentElement.parentElement);
        });
        
        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);

    };
    
});


// Ex8: Change node and insert

window.addEventListener("load",function() {

    var section = this.document.querySelector("#section8");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = section.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild; // tbodyNode.children[0];

    upButton.onclick = function () {
        var previousNode = currentNode.previousSibling;
        if (previousNode == null){
            alert("you can move up anymore.")
            return;
        }

        // tbodyNode.removeChild(currentNode);
        // tbodyNode.insertBefore(currentNode, previousNode);

        currentNode.insertAdjacentElement("afterend", previousNode)
    };

    downButton.onclick = function () {
        var nextNode = currentNode.nextElementSibling;
        if (nextNode == null){
            alert("you can move down anymore.")
            return;
        }

        // tbodyNode.removeChild(nextNode);
        // tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin", nextNode)
    };


});



// Ex7 : Copy node and tag of template
window.addEventListener("load", function() {

    var notices = [
        {id:5, title:"new", regDate:"2019-12-20", writerId:"panda", hit:0},
        {id:6, title:"new222", regDate:"2019-12-21", writerId:"jung", hit:17}
    ];

    var section = document.querySelector("#section7");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function () {
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="' +notices[0].id +'">'+notices[0].title; + '</a>'
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;
        tbodyNode.appendChild(cloneNode);
    }

    templateButton.onclick = function () {
        var template = section.querySelector("template")
        
        notices.forEach(notice => {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notice.id;

            var aNode = tds[1].children[0];
            aNode.href = notice.id;
            aNode.textContent = notice.title;

            tds[2].textContent = notice.regDate;
            tds[3].textContent = notice.writerId;
            tds[4].textContent = notice.hit;
            tbodyNode.appendChild(cloneNode);
        });

        // tds[0].textContent = notices[0].id;

        // // tds[1].innerHTML = '<a href="' +notices[0].id +'">'+notices[0].title; + '</a>'
        // var aNode = tds[1].children[0];
        // aNode.href = notices[0].id;
        // aNode.textContent = notices[0].title;

        // tds[2].textContent = notices[0].regDate;
        // tds[3].textContent = notices[0].writerId;
        // tds[4].textContent = notices[0].hit;
        // tbodyNode.appendChild(cloneNode);
        
    }
});

// Ex6 : Control Node : Add menu(createTextNode, Element)
window.addEventListener("load", function() {

    var section6 = document.querySelector("#section6");
    var titleInput = section6.querySelector(".title-input");
    var menuListUl =  section6.querySelector(".menu-list");
    var addButton = section6.querySelector(".add-button");
    var delButton = section6.querySelector(".del-button");

    addButton.onclick = function () {

        var title = titleInput.value;

        var html = '<a href="">' + title + '</a>'
        var li = document.createElement("li");
        li.innerHTML = html;

        // menuListUl.appendChild(li);

        menuListUl.append(title);

        // menuListUl.innerHTML += '<li><a href="">'+title+'</a></li>'

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);

        // var aNode = document.createElement("a");
        // aNode.href="";
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");
        // liNode.appendChild(aNode);

        // menuListUl.appendChild(liNode);

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);
    }

    delButton.onclick = function() {
        // var txtNode = menuListUl.childNodes[0];


        var liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);

        liNode.remove();
    }
});

// Ex5 : Change attribute of elements and css
window.addEventListener("load", function() {

    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var imgSelect =  section5.querySelector(".img-select");
    var changeButton = section5.querySelector(".change-button");
    var img = section5.querySelector(".img");
    var colorInput = section5.querySelector(".color-input");

    changeButton.onclick = function () {
        img.src = "images/" + srcInput.value + ".jpeg";
        // img.src = "images/" + imgSelect.value + ".jpeg";
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
        
    }
});


// Ex4 : Selecting using childNodes
window.addEventListener("load", function() {

    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0];  // childNodes[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okok";

});

// Ex3 : Selectors API Level1
window.addEventListener("load", function() {

    var section3 = document.getElementById("section3");

    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;

    };
});


// Ex2 : Improve selecting elements
window.addEventListener("load", function() {

    var section2 = document.getElementById("section2");

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];


    // var inputs = section2.getElementsByTagName("input");
    // var txtX = inputs[0];
    // var txtY = inputs[1];
    // var btnAdd = inputs[2];
    // var txtSum = inputs[3];

    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;

    };
});

// Ex1 : Calculator
window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;

    };
});