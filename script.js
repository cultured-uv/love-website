var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  
},500);

var i = 0;
var txt1 = "oye vampire.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When we first talked < You were not like others, you seemed different, .  <<                  As the days went by < we got closer.... i felt you were the same as me! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always interesting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I may not be the best guy around, even far from the guy you imagined me to be....!                    << still you chose me and that gives me strength, it pushes me to become better....!                       > We laughed, cried, fought on silly things< but you know what the best part is?, we always fixed things and came back stronger, .  <<                                       > <krutuu..... I love you... 3000 times... infinity! |                  <<<< 3000 times... infinity!";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>'
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = ''
    else if(txt1.charAt(i)=='|')
      {
        $(".bg_heart").css("background-image","url('luvimmg.jpeg')");

      }
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
