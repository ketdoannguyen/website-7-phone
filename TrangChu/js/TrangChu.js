$(document).ready(function(){
    document.getElementById("id_2_1").onmouseover = eventdiv2_1_over ;
    document.getElementById("id_2_2").onmouseover = eventdiv2_2_over ;
    document.getElementById("id_2_3").onmouseover = eventdiv2_3_over ;
    document.getElementById("id_2_4").onmouseover = eventdiv2_4_over ;
    document.getElementById("id_2_5").onmouseover = eventdiv2_5_over ;
    document.getElementById("id_2_6").onmouseover = eventdiv2_6_over ;
    document.getElementById("id_2_1").onmouseout = eventdiv2_1_out ;
    document.getElementById("id_2_2").onmouseout = eventdiv2_2_out ;
    document.getElementById("id_2_3").onmouseout = eventdiv2_3_out ;
    document.getElementById("id_2_4").onmouseout = eventdiv2_4_out ;
    document.getElementById("id_2_5").onmouseout = eventdiv2_5_out ;
    document.getElementById("id_2_6").onmouseout = eventdiv2_6_out ;    
    document.getElementById("MuaSam").onmouseover = eventdiv2_1_over ;
    document.getElementById("MuaSam").onmouseout = eventdiv2_1_out ;
    document.getElementById("trangchu").onclick = TrangChu ;
    document.getElementById("id_2_2").onclick = ThuHoi ;
    document.getElementById("id_2_3").onclick = KhuyenMai ;
    document.getElementById("id_2_4").onclick = BaoHanh ;
    document.getElementById("id_2_5").onclick = SuaChua ;
    document.getElementById("id_2_6").onclick = LienHe ;
    document.getElementById("MuaSam1").onclick = DTDD ;
    document.getElementById("MuaSam2").onclick = PhuKienTaiNghe ;
    document.getElementById("MuaSam3").onclick = PhuKienBoSac ;
    document.getElementById("MuaSam4").onclick = PhuKienLoa ;
    document.getElementById("MuaSam5").onclick = PhuKienTheNho ;
    document.getElementById("MuaSam6").onclick = PhuKien ;
    document.getElementById("div15").onclick = PhuKien ;
    document.getElementById("click").onclick = nnn ;
    // document.getElementById("phukien2").onclick = PhuKien ;
    // document.getElementById("phukien3").onclick = PhuKien ;
    // document.getElementById("phukien4").onclick = PhuKien ;
    // document.getElementById("phukien5").onclick = PhuKien ;
    // document.getElementById("phukien6").onclick = PhuKien ;
    // document.getElementById("phukien7").onclick = PhuKien ;
    // document.getElementById("phukien1").onclick = PhuKien ;
    // document.getElementById("phukien1").onclick = PhuKien ;
    // document.getElementById("phukien1").onclick = PhuKien ;
    // document.getElementById("phukien1").onclick = PhuKien ;
    // document.getElementById("phukien1").onclick = PhuKien ;

    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100)
                $(".lentop").fadeIn();
            else 
                $(".lentop").fadeOut();
        });
        $(".lentop").click(function () {
            $("body,html").animate({scrollTop: 0}, "slow");
        });
    });
    $(function(){
        $("#iPhone").click(function () {
            $("body,html").animate({scrollTop: 2000},700);
        });
        $("#Samsung").click(function () {
            $("body,html").animate({scrollTop: 2600},700);
        });
        $("#OPPO").click(function () {
            $("body,html").animate({scrollTop: 3200},700);
        });
        $("#Vsmart").click(function () {
            $("body,html").animate({scrollTop: 3700},700);
        });
        $("#Vivo").click(function () {
            $("body,html").animate({scrollTop: 4300},700);
        });
        $("#Xiaomi").click(function () {
            $("body,html").animate({scrollTop: 4900},700);
        });
        $("#Realme").click(function () {
            $("body,html").animate({scrollTop: 5400},700);
        });
        $("#Khac").click(function () {
            $("body,html").animate({scrollTop: 5900},700);
        });
        $("#idphukien1").click(function () {
            $("body,html").animate({scrollTop: 750},300);
        });
        $("#idphukien2").click(function () {
            $("body,html").animate({scrollTop: 1200},700);
        });
        $("#idphukien3").click(function () {
            $("body,html").animate({scrollTop: 1650},700);
        });
        $("#idphukien5").click(function () {
            $("body,html").animate({scrollTop: 2100},700);
        });
        $("#idphukien6").click(function () {
            $("body,html").animate({scrollTop: 2550},700);
        });
        $("#idphukien7").click(function () {
            $("body,html").animate({scrollTop: 3000},700);
        });
        $("#idphukien8").click(function () {
            $("body,html").animate({scrollTop: 3450},700);
        });
        $("#idphukien10").click(function () {
            $("body,html").animate({scrollTop: 3900},700);
        });
;
    });
});
var inter3 = setInterval(function(){
    $("#messenger").fadeToggle();
},800);
var a = 0 ;
function nnn(){
    if(a==0){
        $('.nnnn').css('display','inline');
        a = 1 ;
    }
    else if(a==1){
        $('.nnnnn').css('display','inline');
    }
        
   // $('#divTrangChu').css('display','none');
}

var inter1 = setInterval(function(){
    var gio1 = document.getElementById('gio1').innerHTML;
    var gio2 = document.getElementById('gio2').innerHTML;
    var phut1 = document.getElementById('phut1').innerHTML;
    var phut2 = document.getElementById('phut2').innerHTML;
    var giay1 = document.getElementById('giay1').innerHTML;
    var giay2 = document.getElementById('giay2').innerHTML;

    gio =  Math.floor(gio1*10)+Math.floor(gio2);
    phut = Math.floor(phut1*10)+Math.floor(phut2);
    giay = Math.floor(giay1*10)+Math.floor(giay2);

    giay--;
    if(giay==-1){
        phut--;
        giay=59;
    }
    if(phut==-1){
        gio--;
        phut=59;
    }
    gio1=Math.floor(gio/10);
    gio2=gio%10;
    phut1=Math.floor(phut/10);
    phut2=phut%10 ;
    giay1=Math.floor(giay/10);
    giay2=giay%10 ;

    document.getElementById('gio1').innerHTML = gio1;
    document.getElementById('gio2').innerHTML = gio2;
    document.getElementById('phut1').innerHTML = phut1;
    document.getElementById('phut2').innerHTML = phut2;
    document.getElementById('giay1').innerHTML = giay1;
    document.getElementById('giay2').innerHTML = giay2;
    if(gio==0 && phut==0 && giay==0){
        alert("FLASH SALE END!!");
        clearInterval(inter1);
    }
},1000);
var kiemtra = 0 ;
var inter2 = setInterval(function(){
    
    if(kiemtra==0){
        $(".tua").css("display","none");
        kiemtra=1;
    }
    else if(kiemtra==1){
        $(".tua").css("display","inline");
        kiemtra=0;
    }
},1000);

function eventdiv2_1_over(){
    $('#id_2_1').css('color','#F0FFFF');
    $('#id_2_3_1').css('display','inline');
    $("#MuaSam").css('display','inline');
    $("#id_2_1").css('height','42px');
}
function eventdiv2_2_over(){
    $('#id_2_2').css('color','#F0FFFF');
    $('#id_2_3_2').css('display','inline');
}
function eventdiv2_3_over(){
    $('#id_2_3').css('color','#F0FFFF');
    $('#id_2_3_3').css('display','inline');
}
function eventdiv2_4_over(){
    $('#id_2_4').css('color','#F0FFFF');
    $('#id_2_3_4').css('display','inline');
}
function eventdiv2_5_over(){
    $('#id_2_5').css('color','#F0FFFF');
    $('#id_2_3_5').css('display','inline');
}
function eventdiv2_6_over(){
    $('#id_2_6').css('color','#F0FFFF');
    $('#id_2_3_6').css('display','inline');
}
function eventdiv2_1_out(){
    $('#id_2_1').css('color','white');
    $('#id_2_3_1').css('display','none');
    $("#MuaSam").css('display','none');
    $("#id_2_1").css('height','37px');
}
function eventdiv2_2_out(){
    $('#id_2_2').css('color','white');
    $('#id_2_3_2').css('display','none');
}
function eventdiv2_3_out(){
    $('#id_2_3').css('color','white');
    $('#id_2_3_3').css('display','none');
}
function eventdiv2_4_out(){
    $('#id_2_4').css('color','white');
    $('#id_2_3_4').css('display','none');
}
function eventdiv2_5_out(){
    $('#id_2_5').css('color','white');
    $('#id_2_3_5').css('display','none');
}
function eventdiv2_6_out(){
    $('#id_2_6').css('color','white');
    $('#id_2_3_6').css('display','none');
}

function ThuHoi(){
    $('#divThuHoi').css('display','inline');
    $('#divTrangChu').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','none');
}
function TrangChu(){
    $('#divTrangChu').css('display','inline');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','none');
}
function KhuyenMai(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','inline');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','none');
}
function BaoHanh(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','inline');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','none');
}
function SuaChua(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','inline');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','none');
}
function LienHe(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','inline');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','none');
}
function DTDD(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','inline');
    $('#divPhuKien').css('display','none');
}
function PhuKien(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','inline');
    $("body,html").animate({scrollTop: 200},300);
}
function PhuKienTaiNghe(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','inline');
    $("body,html").animate({scrollTop: 1200},700);
}
function PhuKienBoSac(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','inline');
    $("body,html").animate({scrollTop: 2550},700);
}
function PhuKienLoa(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','inline');
    $("body,html").animate({scrollTop: 2100},700);
}
function PhuKienTheNho(){
    $('#divTrangChu').css('display','none');
    $('#divThuHoi').css('display','none');
    $('#divKhuyenMai').css('display','none');
    $('#divBaoHanh').css('display','none');
    $('#divSuaChua').css('display','none');
    $('#divLienHe').css('display','none');
    $('#divDTDD').css('display','none');
    $('#divPhuKien').css('display','inline');
    $("body,html").animate({scrollTop: 750},300);
}