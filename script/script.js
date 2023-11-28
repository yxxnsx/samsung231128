$(function () {


        // 레이어팝업
        $(".layerPopup").on("click" ,function(){
            $(".popup").fadeIn(); // 나타남 
        });

        $(".close").on("click" ,function(){
            $(".popup").fadeOut(); // 사라짐
        });



    });