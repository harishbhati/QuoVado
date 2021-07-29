//QV-VC Icons nav active class
let iconLinks = document.querySelectorAll("figure a");
iconLinks.forEach((iconLink)=>{
    iconLink.addEventListener("click", function(e){
    console.log(iconLinks);
    if(iconLink.classList.contains("icon__active")){
        console.log('1 test');
        iconLink.classList.remove("icon__active");
    }
    if(document.location.href.indexOf(iconLink.dataset.nav)>=1) {
        console.log('2 test');
        iconLink.classList.add("icon__active");
    }
    else if(iconLink.dataset.nav == "" && document.location.pathname == "/"){
        console.log('3 test');
        iconLink.classList.add("icon__active");
    }
    });
});


var tabbedContent = function() {
    //get all tab link elements
    var tab = document.querySelectorAll("qv-profiletab a");
    //get all tab content elements
    var tabContent = document.getElementsByClassName("tab-content");
    //loop through each tab
    for (var i = 0; i < tab.length; i++) {
            //add click event listener to all tab links
            tab[i].addEventListener('click', function() {
                    //each time tab clicked remove all current classes
                    //remove 'current' class from all tabs
                    for (var i = 0; i < tab.length; i++) {
                            tab[i].classList.remove('current__tab');
                    };
                    //remove 'current' class from all tab content
                    for (var i = 0; i < tabContent.length; i++) {
                            tabContent[i].classList.remove('current__tab');
                    };
                    //add current class back to the clicked tab
                    this.className += 'current__tab';
                    //get data-tab attribute of what has been clicked
                    var matchingTab = this.getAttribute('data-tab');
                    //add current class to the tabContent element thats id matches the data-tab of the clicked tab
                    document.getElementById(matchingTab).className += ' current__tab';
            }, false);
    }
}

tabbedContent();