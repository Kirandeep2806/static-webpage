window.onload = function(){
    var parent = document.getElementById("top_nav");
    var anchors = parent.getElementsByTagName("a");
    for(var i=0; i<anchors.length; i++)
    {
        anchors[i].addEventListener("click",function(){
            // var find_active = document.getElementsByClassName("active");
            // find_active[0].className = find_active[0].className.replace("active","");
            // this.className += "active";
            // alert(this.className);
            // alert(document.getElementsByClassName("active")[0].innerHTML);
            if(this.className == ""){
                img = '<img src="UnderConstruction.png" alt="" style="margin-left: auto; margin-right: auto; display: block;">';
                var popUpWindow = window.open();
                popUpWindow.document.write(img);
            }
        });
    }
}