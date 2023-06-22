// $(Element).css(<attribute> , <value>)
// $("button").css("color","red"); 
// $("h1").css("color","red")

// $(Element).html(<what do you want to put between element)
// $(Element).text(<the text that you want>)

// Fungsi Menambah Kelas "Cliked" pad Button jika di klik
for(let i = 0 ; i < $(".first-button").length ; i++)
{
    $(".first-button").eq(i).click(function() {
        // if($("Button")[i].hasClass("clicked")) {
        //     $("Button")[i].removeClass("clicked");
        //     $("Button")[i].text("Click Me");
        // }
        // else {
        //     $("Button")[i].addClass("clicked");
        //     $("Button")[i].text("CLICKED");
        // }
        $(this).toggleClass("clicked")
        
        var text = $(this).text();
        $(this).text(text === "Click Me" ? "CLICKED" : "Click Me");
    })
}

// Membuat Fungso untuk Mengubah tulisan Another hello -> Hello jika di Klik
document.querySelectorAll("h1")[1].addEventListener("click", function() {
    var text = document.querySelectorAll("h1")[1].textContent;
    document.querySelectorAll("h1")[1].textContent = (text === "Another Hello" ? "Hello" : "Another Hello");
})

console.log($("img").attr("src")) //This will get attribute from img

// $("img").attr("src" , "<url>") --> This will change the value of attribute source from image

// Membuat Fungsi Mengganti H1 berdasarkan Masukan text di input
var h1 = "";
$("input").keypress(function(event) {
    if(event.key === "Enter")
    {
        $("h1.timothy.subekti").text(h1);
        h1 = "";
    }
    else {
        h1 += event.key;
    }
})

// Mengubah Warna Tulisan "Hello" menjadi pruple jika di klik
$("h1.timothy").on("click", function() {
    var color = ($(this).css("color") == 'rgb(0, 0, 0)' ? "purple" : "black");
    console.log(color);
    $("h1.timothy").css("color", color);
})

// Menambahkan new Button berdasarkan pilihan before - after - prepend - append

$("#mySelect").on("change",function() {
    var selected = $(this).find("option:selected");
    if(selected.hasClass("option-before")) {
        $(".before").before("<Button class='btn'> New Button </Button>");
    }
    else if(selected.hasClass("option-after")) {
        $(".after").after("<Button class='btn'> New Button </Button>");
    }
    else if(selected.hasClass("option-prepend")) {
        $(".prepend").prepend("<Button class='btn'> New Button </Button>");
    }
    else if(selected.hasClass("option-append")) {
        $(".append").append("<Button class='btn'> New Button </Button>");
    }
    else if(selected.hasClass("refreshed")) {
        $('.btn').remove();
    }
})

// Make a function to hide and show the text
$("#disapear").on("click",function(){
    $(".disapear").toggle(1000);
    if($("#disapear").text() === "disapear") {
        $("#disapear").text("show");
        $("#disapear").toggleClass("add-margin-top");
    }
    else {
        $("#disapear").text("disapear");
        setTimeout(function() {
            $("#disapear").toggleClass("add-margin-top");
        }, 1000);
    }
})
