function initMap() {
    var map = new google.maps.Map(
        document.getElementById('map'), 
        {zoom: 17, center: {lat: 59.939136, lng: 30.321454}
    });

    var iconBase = "img/nerds-marker.png";
    var marker = new google.maps.Marker({
            position: {lat: 59.938770, lng: 30.3238},
            map: map,
            icon: iconBase
          });
    }

var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function(event){
    popup.classList.remove("modal-show");
});
