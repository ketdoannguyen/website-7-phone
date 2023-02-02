$(document).ready(function(){
    document.getElementById("dk").onclick = dk ;
    document.getElementById("dn").onclick = dn ;
});

function dk(){
    $("#div2_2_dk").css('display','inline');
    $("#div2_2_dn").css('display','none');
    $("#dk").css('color','red');
    $("#dn").css('color','black');
}
function dn(){
    $("#div2_2_dn").css('display','inline');
    $("#div2_2_dk").css('display','none');
    $("#dn").css('color','red');
    $("#dk").css('color','black');
}
