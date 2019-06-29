$(document).ready(function () {
    generateButtons();
})

var vgArray = ["halo", "pokemon", "for honor"];

function generateButtons() {
    $("#videogame-btns").empty()
    for (var i = 0; i < vgArray.length; i++) {
        var buttonMaker = $("<button class='btn btn-primary'>");
        buttonMaker.text(vgArray[i]);
        $("#videogame-btns").append(buttonMaker);
    }
}



$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q=videogames&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10",
    method: "GET"
}).then(function (response) {
    console.log(response);

    var data = response.data;

    for (var i = 0; i < data.length; i++) {
        var newImg = $("<img class='gifz'>").attr("src", data[i].images.fixed_height.url)
        $("#vg-gifs").append(newImg);
    }
})

$("#subway").on("click", function (event) {
    event.preventDefault();
    var dynamite = $("#inputGame").val().trim();
    vgArray.push(dynamite);
    generateButtons();


});




