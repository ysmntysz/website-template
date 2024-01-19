$(document).ready(function() {

    //Header top 
    var lastScroll = 0;
  
    jQuery(document).ready(function($) {
      $(window).scroll(function() {
        setTimeout(function() {
          //gives 100ms to finish scrolling before doing a check
          var scroll = $(window).scrollTop();
          if (scroll > lastScroll) {
            $(".header-top").addClass("header-up");
          } else if (scroll < lastScroll) {
            $(".header-top").removeClass("header-up");
          }
          lastScroll = scroll;
        }, 100);
      });
    });



     //İletişimFormu
  $('#iletisimFormuOnay').click(function () {
    var isim_soyisim = $("#isim_soyisim").val();
    var email = $("#email").val();
    var tel = $("#tel").val();
    var mesaj = $("#mesaj").val();
    var dil_id = $("#iletisimFormuOnay").data("dil-id");
    if (isEmail(email) && isim_soyisim!="" && mesaj!="") {
        $("#iletisimFormuOnay").attr("disabled", true);
        if (dil_id==1){$("#iletisimFormuOnay").text('GÃ¶nderiliyor...');}
            if (dil_id==2){$("#iletisimFormuOnay").text('Sending...');}
            if (dil_id==3){$("#iletisimFormuOnay").text('Senden...');}
        var data = new FormData($("#iletisimformu")[0]);
        var ajaxRequest = $.ajax({
        type: "POST",
        url: "/ajax/all_methods.asp?method=iletisimformuonay",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            $("#iletisimFormuOnay").attr("disabled", false);
            if (dil_id==1){$("#iletisimFormuOnay").text('GÃ¶nder');}
            if (dil_id==2){$("#iletisimFormuOnay").text('Send');}
            if (dil_id==3){$("#iletisimFormuOnay").text('Senden');}

                if (data.indexOf("error") >= 0) {
                var res = data.split(':');
                var hata = res[1];
                }
                else if (data.indexOf("success") >= 0) {
                var res = data.split(':');
                var sonuc = res[1];
                $("#iletisimformu")[0].reset();
                if (dil_id=="1") {alert("MesajÄ±nÄ±z ilgili birime iletilmiÅŸtir.");}
                if (dil_id=="2") {alert("Your message has been forwarded to the relevant department.");}
                if (dil_id=="3") {alert("Ihre Nachricht wurde an die zustÃ¤ndige Abteilung weitergeleitet.");}
                }
            }
        });
    }
    else{
        if(!isEmail(email)) {
          $(".contact-form #email").next().addClass("show-error-text")
        }
        if(isim_soyisim=="" ) {
          $(".contact-form #isim_soyisim").next().addClass("show-error-text")
        }
        if(tel=="" ) {
          $(".contact-form #tel").next().addClass("show-error-text")
        }
        if(mesaj=="" ) {
          $(".contact-form #mesaj").next().addClass("show-error-text")
        }
    }
  });
  function isEmail(value) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? true : false;
};

    //Main Slide
    $('.main-slider .owl-carousel').owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      items:1,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
     
  });


  });
  