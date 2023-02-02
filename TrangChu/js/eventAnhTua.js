$(document).ready(function(){
    document.getElementById("click_3_1").onmouseover = click_3_1 ;
    document.getElementById("click_3_2").onmouseover = click_3_2 ;
    document.getElementById("click_3_3").onmouseover = click_3_3 ;
    document.getElementById("click_3_4").onmouseover = click_3_4 ;
    document.getElementById("click_3_5").onmouseover = click_3_5 ;
    document.getElementById("click_3_6").onmouseover = click_3_6 ;   
});

function click_3_1(){ 
    $('#img_3_1').css("z-index",5);
    $('#img_3_2').css("z-index",4);
    $('#img_3_3').css("z-index",3);
    $('#img_3_4').css("z-index",2);
    $('#img_3_5').css("z-index",1);
    $('#img_3_6').css("z-index",0);

    $('#click_3_1').css("background-color",'hotpink');
    $('#click_3_2').css("background-color",'cornflowerblue');
    $('#click_3_3').css("background-color",'cornflowerblue');
    $('#click_3_4').css("background-color",'cornflowerblue');
    $('#click_3_5').css("background-color",'cornflowerblue');
    $('#click_3_6').css("background-color",'cornflowerblue');
}
function click_3_2(){
    $('#img_3_1').css("z-index",0);
    $('#img_3_2').css("z-index",5);
    $('#img_3_3').css("z-index",4);
    $('#img_3_4').css("z-index",3);
    $('#img_3_5').css("z-index",2);
    $('#img_3_6').css("z-index",1);

    $('#click_3_1').css("background-color",'cornflowerblue');
    $('#click_3_2').css("background-color",'hotpink');
    $('#click_3_3').css("background-color",'cornflowerblue');
    $('#click_3_4').css("background-color",'cornflowerblue');
    $('#click_3_5').css("background-color",'cornflowerblue');
    $('#click_3_6').css("background-color",'cornflowerblue');
}
function click_3_3(){
    $('#img_3_1').css("z-index",1);
    $('#img_3_2').css("z-index",0);
    $('#img_3_3').css("z-index",5);
    $('#img_3_4').css("z-index",4);
    $('#img_3_5').css("z-index",3);
    $('#img_3_6').css("z-index",2);

    $('#click_3_1').css("background-color",'cornflowerblue');
    $('#click_3_2').css("background-color",'cornflowerblue');
    $('#click_3_3').css("background-color",'hotpink');
    $('#click_3_4').css("background-color",'cornflowerblue');
    $('#click_3_5').css("background-color",'cornflowerblue');
    $('#click_3_6').css("background-color",'cornflowerblue');
}
function click_3_4(){
    $('#img_3_1').css("z-index",2);
    $('#img_3_2').css("z-index",1);
    $('#img_3_3').css("z-index",0);
    $('#img_3_4').css("z-index",5);
    $('#img_3_5').css("z-index",4);
    $('#img_3_6').css("z-index",3);

    $('#click_3_1').css("background-color",'cornflowerblue');
    $('#click_3_2').css("background-color",'cornflowerblue');
    $('#click_3_3').css("background-color",'cornflowerblue');
    $('#click_3_4').css("background-color",'hotpink');
    $('#click_3_5').css("background-color",'cornflowerblue');
    $('#click_3_6').css("background-color",'cornflowerblue');
}
function click_3_5(){
    $('#img_3_1').css("z-index",3);
    $('#img_3_2').css("z-index",2);
    $('#img_3_3').css("z-index",1);
    $('#img_3_4').css("z-index",0);
    $('#img_3_5').css("z-index",5);
    $('#img_3_6').css("z-index",4);

    $('#click_3_1').css("background-color",'cornflowerblue');
    $('#click_3_2').css("background-color",'cornflowerblue');
    $('#click_3_3').css("background-color",'cornflowerblue');
    $('#click_3_4').css("background-color",'cornflowerblue');
    $('#click_3_5').css("background-color",'hotpink');
    $('#click_3_6').css("background-color",'cornflowerblue');
}
function click_3_6(){
    $('#img_3_1').css("z-index",4);
    $('#img_3_2').css("z-index",3);
    $('#img_3_3').css("z-index",2);
    $('#img_3_4').css("z-index",1);
    $('#img_3_5').css("z-index",0);
    $('#img_3_6').css("z-index",5);

    $('#click_3_1').css("background-color",'cornflowerblue');
    $('#click_3_2').css("background-color",'cornflowerblue');
    $('#click_3_3').css("background-color",'cornflowerblue');
    $('#click_3_4').css("background-color",'cornflowerblue');
    $('#click_3_5').css("background-color",'cornflowerblue');
    $('#click_3_6').css("background-color",'hotpink');
}

setInterval(function(){
    var index1 = $('#img_3_1').css("z-index");
    var index2 = $('#img_3_2').css("z-index");
    var index3 = $('#img_3_3').css("z-index");
    var index4 = $('#img_3_4').css("z-index");
    var index5 = $('#img_3_5').css("z-index");
    var index6 = $('#img_3_6').css("z-index");
    index1++;index2++;index3++;index4++;index5++;index6++;
    if(index1>5)
        index1=0;
    else if(index2>5)
        index2=0;
    else if(index2>5)
        index2=0;
    else if(index3>5)
        index3=0;
    else if(index4>5)
        index4=0;
    else if(index5>5)
        index5=0;
    else if(index6>5)
        index6=0;
    
    if(index1==5){
        $('#click_3_1').css("background-color",'hotpink');
        $('#click_3_2').css("background-color",'cornflowerblue');
        $('#click_3_3').css("background-color",'cornflowerblue');
        $('#click_3_4').css("background-color",'cornflowerblue');
        $('#click_3_5').css("background-color",'cornflowerblue');
        $('#click_3_6').css("background-color",'cornflowerblue');
    }else if(index2==5){
        $('#click_3_1').css("background-color",'cornflowerblue');
        $('#click_3_2').css("background-color",'hotpink');
        $('#click_3_3').css("background-color",'cornflowerblue');
        $('#click_3_4').css("background-color",'cornflowerblue');
        $('#click_3_5').css("background-color",'cornflowerblue');
        $('#click_3_6').css("background-color",'cornflowerblue');
    }
    else if(index3==5){
        $('#click_3_1').css("background-color",'cornflowerblue');
        $('#click_3_2').css("background-color",'cornflowerblue');
        $('#click_3_3').css("background-color",'hotpink');
        $('#click_3_4').css("background-color",'cornflowerblue');
        $('#click_3_5').css("background-color",'cornflowerblue');
        $('#click_3_6').css("background-color",'cornflowerblue');
    }
    else if(index4==5){
        $('#click_3_1').css("background-color",'cornflowerblue');
        $('#click_3_2').css("background-color",'cornflowerblue');
        $('#click_3_3').css("background-color",'cornflowerblue');
        $('#click_3_4').css("background-color",'hotpink');
        $('#click_3_5').css("background-color",'cornflowerblue');
        $('#click_3_6').css("background-color",'cornflowerblue');
    }
    else if(index5==5){
        $('#click_3_1').css("background-color",'cornflowerblue');
        $('#click_3_2').css("background-color",'cornflowerblue');
        $('#click_3_3').css("background-color",'cornflowerblue');
        $('#click_3_4').css("background-color",'cornflowerblue');
        $('#click_3_5').css("background-color",'hotpink');
        $('#click_3_6').css("background-color",'cornflowerblue');
    }
    else if(index6==5){
        $('#click_3_1').css("background-color",'cornflowerblue');
        $('#click_3_2').css("background-color",'cornflowerblue');
        $('#click_3_3').css("background-color",'cornflowerblue');
        $('#click_3_4').css("background-color",'cornflowerblue');
        $('#click_3_5').css("background-color",'cornflowerblue');
        $('#click_3_6').css("background-color",'hotpink');
    }


    $('#img_3_1').css("z-index",index1);
    $('#img_3_2').css("z-index",index2);
    $('#img_3_3').css("z-index",index3);
    $('#img_3_4').css("z-index",index4);
    $('#img_3_5').css("z-index",index5);
    $('#img_3_6').css("z-index",index6);
},5000);