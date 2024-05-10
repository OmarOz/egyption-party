///=<reference types="../@types/jquery" />

//nav slider
$('.big-nav .open-btn').click(()=>{
    $('.nav').animate({left:'0px'})
})
$('.big-nav .close-btn').click(()=>{
    $('.nav').animate({left:'-360px'})
})

//navigate to section

$('.navs div').click(function(){
    let secId=$(this).attr("href");
    let pos=$(secId).offset().top;
    $('html , body').animate({scrollTop:pos},1000)
    console.log(pos);
})


//make 'open' transparent when scroll
addEventListener('scroll',function(){
    if(this.scrollY>=380){
        $('.open-btn i,.open-btn span').hide();
    }else{
        $('.open-btn i,.open-btn span').show();
    }
   
})



//singer part

$('.singer').click(function(){
    // console.log('yess');
    $('.desc').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})


//countdown
window.onload=()=>{
    let upCommingDate=new Date('10 october 2024 10:10:10');
    countDown(upCommingDate);
    
}

function countDown(upCommingDate){
    let currentDate=new Date();
    let differenceInSec=((upCommingDate.getTime()-currentDate.getTime())/1000);
    // console.log(differenceInSec);

    let days=Math.floor(differenceInSec/(60*60*24));
    let hours=Math.floor((differenceInSec - (days*24*60*60))/3600)
    let minutes=Math.floor((differenceInSec - (days*24*60*60) - (hours * 3600)) / 60)
    let seconds=Math.floor((differenceInSec - (days*24*60*60) - (hours * 3600) - (minutes*60)))
    
    $('.days').html(`${days} D`)
    $('.hours').html(`${hours} H`)
    $('.minutes').html(`${minutes} M`)
    $('.seconds').html(`${seconds} s`)
   
    setInterval(()=>{countDown(upCommingDate)},1000)
}


//remaining chars

$('#message').keyup(function(){
    let currLength=$(this).val().length;
    printRemChars(currLength)
    console.log(currLength);

})

function printRemChars(currLength){
    if(currLength>100){
        document.getElementById('remaining-char').innerHTML='your available character finished';
    }
    else{
        document.getElementById('remaining-char').innerHTML=(100-currLength);
    }
}

