// good luck !
var colors = [];
$("input:button").each(function() {
    colors.push($(this).attr('data-color'));
});
console.log(colors);

var i = 0;
$("input:button").each(function() {

    $(this).css("background-color", colors[i]);
    i++;
});




var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
jQuery(".font-style").animate({ color: newColor }, 2000);

console.log(newColor);

$("input:button").click(function() {
    fond = $(this).attr("data-color");
    console.log(fond);
    $("body").css("background-color", fond);
});

var checkbox = $("[type='checkbox']")

checkbox.click(function() {
    if ($(":checkbox").is(":checked")) {
        $(".main").css("color", newColor);
    } else {
        $(".main").css("color", "black");
    }
});