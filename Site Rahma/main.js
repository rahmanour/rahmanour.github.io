function countDown(){
    var now=new Date();
    var newYear=new Date(2021,01,01);

    var currentTime=now.getTime();
    var newYearTime=newYear.getTime();

    var remTime=newYearTime - currentTime ;

    var s=Math.floor(remTime / 1000);
    var m=Math.floor(s / 60);
    var h=Math.floor(m / 60);
    var d=Math.floor(h / 24);

    h %=24;
    m %=60;
    s %=60;

   h = h < 10 ? h= "0" + h : h;
    m = m < 10 ? m= "0" + m : m;
    s = s < 10 ? s= "0" + s : s;



    document.getElementById("days").innerText=d ;
    document.getElementById("hours").innerText=h;
    document.getElementById("minutes").innerText=m ;
    document.getElementById("seconds").innerText=s ;
    //console.log (`days ${d} and hours ${h} and minutes${m} and seconds ${s}` );

    setTimeout(countDown,2000);
}
countDown();