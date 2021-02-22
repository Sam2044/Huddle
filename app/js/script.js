  $(document).ready(function(){
    $("#fb").hover(function(){
        $('#fb').attr('src','images/mf.png');
      }, function(){
        $('#fb').attr('src','images/Facebook.png');
    });
    
    $("#twit").hover(function(){
        $('#twit').attr('src','images/mt.png');
      }, function(){
        $('#twit').attr('src','images/Twitter.png');
    });

    $("#insta").hover(function(){
        $('#insta').attr('src','images/mi.png');
      }, function(){
        $('#insta').attr('src','images/Instagram.png');
    });

  });

