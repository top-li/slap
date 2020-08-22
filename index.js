$(function(){
    $('.font').click(function(){
        $('.rule').stop().fadeIn(100)

        stopAnimation()
    })

    $('.close').click(function(){
        $('.rule').stop().fadeOut(100)
        
        showGame()
        progressHand()

    })

    $('.btn').click(function(){
        $(this).stop().fadeOut(100)

        progressHand()
        showGame()
    })

    $('.btn2').click(function(){
        $('.mask').stop().fadeOut(100)

        progressHand()
        showGame()
        $('.score').text(0)
    })

    function progressHand(){
        $('.progress').css({
            width:180
        })
        var timer = setInterval(() => {
            var progressWidth = $('.progress').width()
            progressWidth -=1
            $('.progress').css({
                width:progressWidth
            })

            if(progressWidth <=0){
                clearInterval(timer)

                $('.mask').stop().fadeIn(100)

                stopAnimation()
            }
        }, 300);
    }
    var times
    function showGame(){
        var show_1 = ['./images/h0.png','./images/h1.png','./images/h2.png','./images/h3.png',
                        './images/h4.png','./images/h5.png','./images/h6.png',
                        './images/h7.png','./images/h8.png','./images/h9.png'
        ]
        var show_2 = ['./images/x0.png','./images/x1.png','./images/x2.png','./images/x3.png',
                        './images/x4.png','./images/x5.png','./images/x6.png',
                        './images/x7.png','./images/x8.png','./images/x9.png'
        ]
        var xy = [
            {left:'100px',top:'115px'},
            {left:'20px',top:'160px'},
            {left:'190px',top:'142px'},
            {left:'105px',top:'193px'},
            {left:'19px',top:'221px'},
            {left:'202px',top:'212px'},
            {left:'120px',top:'275px'},
            {left:'30px',top:'295px'},
            {left:'209px',top:'297px'},
        ]

        var $image =$("<img src='' class='stopImg'>")

        var Index = Math.round(Math.random()*8)
        $image.css({
            position:"absolute",
            left:xy[Index].left,
            top:xy[Index].top
        })
        var type = Math.round(Math.random())===0?show_1:show_2
        window.typeIndex = 0
        window.typeEnd = 5
         times = setInterval(() => {
            if(typeIndex>typeEnd){
                $image.remove();
                clearInterval(times)
                showGame()
            }
            $image.attr('src',type[typeIndex])
            typeIndex++;
        },150);
        

        $('.content').append($image)


        gamesRules($image)
    }

    function stopAnimation(){
        $('.stopImg').remove()
        clearInterval(times)
    }

    function gamesRules($image){
        $image.one("click",function(){

            window.typeIndex = 5;
            window.typeEnd = 9;
           var $src = $(this).attr("src")
           
           var flag = $src.indexOf("h")>=0

           if(flag){
               $('.score').text(parseInt($('.score').text())+10)
           }else{
               $('.score').text(parseInt($('.score').text())-10)
           }

        })
    }
})