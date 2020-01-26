function getTagsOfElements(elements) {
    var tab = [];
    for (var i = 0; i < elements.length; i++) {
        tab.push(elements[i].tagName);
    }
    return tab;
}

var element = document.querySelectorAll(".sample_class");

console.log(getTagsOfElements(element));

function getClassesOfElement(element) {
    var tab = [];
    for (var i = 0; i < element.length; i++) {
        tab.push(element[i]);
    }
    return tab;
}

var elements = document.getElementById("sample_id");

console.log(getClassesOfElement(elements.classList));


function getInnerTextsOfElements(elements) {
    var tab = [];
    for (var i = 0; i < elements.length; i++) {
        tab.push(elements[i].innerHTML);
    }
    return tab;
}

element = document.querySelector(".sample_class_2");

console.log(getInnerTextsOfElements(element.children[0].children));


function getAddressesOfElements(elements) {
    var tab = [];
    for (var i = 0; i < elements.length; i++) {
        tab.push(elements[i].href);
    }
    return tab;
}

element = document.querySelectorAll("a");

console.log(getAddressesOfElements(element));


element = document.querySelector(".sample_class_3").children;

console.log(getTagsOfElements(element));