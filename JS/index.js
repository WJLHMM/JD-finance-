// 特效
$(window).bind("scroll",function(){
	var st =parseFloat($(this).scrollTop());
	
	if(st>200) {
		$(".rside_nav_item4").show();
		$(".float_header").show();
	}
	else {
		$(".rside_nav_item4").hide();
		$(".float_header").hide();
	}
});

$(function(){
	console.log();
	// header通栏广告start
	$(".close").click(function(){
		$(".adv").css("display","none");
	});
	// header通栏广告end
	// header背景变色start
	var ci =0;
	var bgtimer=null;
	if(!bgtimer){
		bgtimer=setInterval(function(){
			var colorarr = ['linear-gradient(rgba(196,11,27,0.8),rgba(224,54,90,0.8))','linear-gradient(rgba(29,25,50,0.8),rgba(74,67,121,0.8))','linear-gradient(rgba(43,27,30,0.8),rgba(111,71,79,0.8))','linear-gradient(rgba(255,119,1,1),rgba(252,141,0,1))'];
			$('header').css("background",function(){
					if(ci==4) {
						ci=0;
					}
					return colorarr[ci];
			});
			ci++;
		},5000);
	}else {
		clearInterval(bgtimer);
	}
	
	// header背景变色end
	// header部分topmenu start
	$('.topmenu_bar_li1,.topmenu_div').mouseover(function(){
		$('.topmenu_div').show();
		$('.topmenu_bar_li1').css("background-color","#fff");
		$('.topmenu_bar_p1').css({"background-color":"#fff","color":"#fff"});
		$('.topmenu_bar_li1>.topmenu_bar_arrow_p').css('background-position','0 -0.2854rem');
	}).mouseout(function(){
		$('.topmenu_div').hide();
		$('.topmenu_bar_li1').css("background-color","rgba(0,0,0,0)");
		$('.topmenu_bar_p1').css({"background-color":"rgba(0,0,0,0)","color":"#A3A3A3"});
		$('.topmenu_bar_li1>.topmenu_bar_arrow_p').css('background-position','0 0');
	});
	$('.topmenu_bar_li2,.topmenu_bar_li2_ul').mouseover(function(){
		$('.topmenu_bar_li2_ul').show();
		$('.topmenu_bar_li2').css("background-color","#fff");
		$('.topmenu_bar_p2').css({"background-color":"#fff","color":"#fff"});
		$('.topmenu_bar_li2>.topmenu_bar_arrow_p').css('background-position','0 -0.2854rem');
	}).mouseout(function(){
		$('.topmenu_bar_li2_ul').hide();
		$('.topmenu_bar_li2').css("background-color","rgba(0,0,0,0)");
		$('.topmenu_bar_p2').css({"background-color":"rgba(0,0,0,0)","color":"#A3A3A3"});
		$('.topmenu_bar_li2>.topmenu_bar_arrow_p').css('background-position','0 0');
	});
	$('.topmenu_bar_li3,.topmenu_5li_divwrap').mouseover(function(){
		$('.topmenu_5li_divwrap').show();
		$('.topmenu_bar_li3').css("background-color","#fff");
		$('.topmenu_bar_p3').css({"background-color":"#fff","color":"#fff"});
		$('.topmenu_bar_li3>.topmenu_bar_arrow_p').css('background-position','0 -0.2854rem');
		$('.topmenu_bar_5li_1p').css('background-image','url(./images/mobile_red.png)');
	}).mouseout(function(){
		$('.topmenu_5li_divwrap').hide();
		$('.topmenu_bar_li3').css("background-color","rgba(0,0,0,0)");
		$('.topmenu_bar_p3').css({"background-color":"rgba(0,0,0,0)","color":"#A3A3A3"});
		$('.topmenu_bar_li3>.topmenu_bar_arrow_p').css('background-position','0 0');
		$('.topmenu_bar_5li_1p').css('background-image','url(./images/mobile_white.png)');
	});
 	// header部分topmenu end
 	// header部分bottommenu start
    var k;
	for(k=1;k<8;k++){
		(function(k){
			$("header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div"+k+','+"header>.bottommenu>.bottommenu_nav_item"+k).mouseenter(function(){
			$('header>.bottommenu>.bottommenu_nav_item'+k).show();
			$('header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k).css("background-color","#fff");
			$("header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div"+k+'>a').css("color","#000");
		}).mouseleave(function(){
			$('header>.bottommenu>.bottommenu_nav_item'+k).hide();
			$('header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k).css("background-color","rgba(0,0,0,0)");
			$('header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k+'>a').css("color","#fff");
		});
		})(k);
	}
	$('header>.bottommenu>.bottommenu_login,header>.bottommenu>.bottommenu_login_menu').mouseenter(function(){
		$('header>.bottommenu>.bottommenu_login_menu').show();
		$('header>.bottommenu>.bottommenu_login>a').css("color","#000");
		$('header>.bottommenu>.bottommenu_login>p').css('background-position','0 -0.87rem');
		$('header>.bottommenu>.bottommenu_login').css("background-color","#fff");
	}).mouseleave(function(){
		$('header>.bottommenu>.bottommenu_login_menu').hide();
		$('header>.bottommenu>.bottommenu_login>a').css("color","#fff");
		$('header>.bottommenu>.bottommenu_login>p').css('background-position','0 0.15rem');
		$('header>.bottommenu>.bottommenu_login').css("background-color","rgba(0,0,0,0)");
	});
	$('.bottommenu_login_menu_bottom>li').mouseenter(function(){
		$('.bottommenu_login_menu_bottom>li').css("background-color","#fff");
		$(this).css("background","rgba(255,119,1,1)");
	}).mouseleave(function(){
		$('.bottommenu_login_menu_bottom>li').css("background-color","#fff");
	});
 	// header部分bottommenu end
 	// float_menustart
 	for(k=1;k<8;k++){
		(function(k){
			$(".float_header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div"+k+','+".float_header>.bottommenu>.bottommenu_nav_item"+k).mouseenter(function(){
				$('.float_header>.bottommenu>.bottommenu_nav_item'+k).show();
				$('.float_header>.bottommenu>.bottommenu_nav_item'+k).css({'border':'0.09rem solid #A3A3A3'});
				$('.float_header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k).css({'border':'0.09rem solid #A3A3A3'});
				$('.float_header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k).css({'border-bottom-colors':'#fff'});
				$('.float_header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k+'>h1').show();
			}).mouseleave(function(){
				$('.float_header>.bottommenu>.bottommenu_nav_item'+k).hide();
				$('.float_header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k).css({'border':''});
				$('.float_header>.bottommenu>.bottommenu_nav>.bottommenu_nav_div'+k+'>h1').hide();
			});
		})(k);
	}
 
	$('.float_header>.bottommenu>.bottommenu_login,.float_header>.bottommenu>.bottommenu_login_menu').mouseenter(function(){
		$('.float_header>.bottommenu>.bottommenu_login_menu').show();
		$('.float_header>.bottommenu>.bottommenu_login>p').css('background-position','0 -0.87rem');
	}).mouseleave(function(){
		$('.float_header>.bottommenu>.bottommenu_login_menu').hide();
		$('.float_header>.bottommenu>.bottommenu_login>p').css('background-position','0 0.15rem');
	});
	// float_menu end
 	// section_nav 部分start
 	// 侧边导航栏start
 	 $('.lside_nav>li').mouseenter(function(){
 	 	$(this).animate({"left":"-=0.2rem"});
 	 }).mouseleave(function(){
 	 	$(this).animate({"left":"+=0.2rem"});
 	 });

 	 $('.rside_nav_item1').mouseenter(function(){
 	 	$(this).children('a').animate({backgroundPositionY:'-2.89rem'});
 	 	$('.rside_nav_p').animate({width:'toggle'});
 	 }).mouseleave(function(){
 	 	$(this).children('a').animate({backgroundPositionY:'0rem'});
 	 	$('.rside_nav_p').animate({width:'toggle'});
 	 });

 	 $('.rside_nav_item2,.rside_nav_item3,.rside_nav_item4').mouseenter(function(){
 	 	$(this).children('a').animate({backgroundPositionY:'-2.89rem'});
 	 }).mouseleave(function(){
 	 	$(this).children('a').animate({backgroundPositionY:'0rem'});
 	 });
     
 	// 侧边导航栏end
 	// 左侧导航区start
 	$(".mainnav_left_creditad").mouseenter(function() {
 		$(".mainnav_left_creditad").animate({height:'+=0.5rem'});
 	}).mouseleave(function() {
 		$(".mainnav_left_creditad").animate({height:'-=0.5rem'});
 	});

    for(k=1;k<6;k++){
    	(function(k){
	    	$('.mainnav_left_bnav_item'+k+','+'.mainnav_left_bnav_item'+k+'_show').mouseenter(function(){
				$('.mainnav_left_bnav_item'+k+'_show').show();
				$('.mainnav_left_bnav_item'+k).css("background-color","#fff");
			}).mouseleave(function(){
				$('.mainnav_left_bnav_item'+k+'_show').hide();
				$('.mainnav_left_bnav_item'+k).css("background-color","");
			});

   		})(k);
	}

	$(".show4_left_item4>a").mouseenter(function(){
		$(this).animate({"left":'0.2rem'});
	}).mouseleave(function(){
		$(this).animate({"left":'-0.2rem'});
	});

	$(".show_right_bot_item,.show_right_bot_item2,.show_right_bot_item4,.show3_right_bot_item,.show5_right_bot_item").mouseenter(function(){
		$(this).animate({"top":'-0.2rem'});
	}).mouseleave(function(){
		$(this).animate({"top":'0.2rem'});
	});	
 	// 左侧导航区end
 	

 	// 中间导航区start
 	var i=0;
 	$(".mainnav_mid_slide").css("left","-49.89rem");
 	$(".mainnav_mid_slide_ul>li").eq(i).css("backgroundColor","red");
 	var slidetimer = null;
 	var tipspan1 = ["78元秒杀哦！","家电一优到底！","白条免利息","账单分期优惠","预约高端购物权","嗨618"];
 	var tipspan2 = ["白条免利息","账单分期优惠","预约高端购物权","嗨618","78元秒杀哦！","家电一优到底！"];
 	
 	function slideshow(){
 		$('.sd_span1').html(tipspan1[i]);
 		$('.sd_span2').html(tipspan2[i]);
  		i++;
  		$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
  		$(".mainnav_mid_slide_ul>li").eq(i).css("backgroundColor","red");
  		$(".mainnav_mid_slide").animate({"left":"-=49.89rem"},function() {
  			if(i>5) {
  				i =0;
  				$(".mainnav_mid_slide").css("left","-49.89rem");
  				$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
  				$(".mainnav_mid_slide_ul>li").eq(i).css("backgroundColor","red");
  			};
  		});
  	}

  	if(!slidetimer) {
  		slidetimer = setInterval(slideshow, 5000);
  	}
  	else {
  		clearInterval(slidetimer);
	  	slidetimer = setInterval(slideshow, 5000);
  	}
  	$('.mainnav_mid_slide_ul>li').on('mouseenter',function(){
  		var itemindex = $(this).index();
  		clearInterval(slidetimer);
  		$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
  		$(this).css("backgroundColor","red");
		$(".mainnav_mid_slide").css("left",(itemindex+1)*-49.89+'rem');
		$('.sd_span2').html(tipspan2[itemindex]);
  	}).on('mouseleave',function(){
	 	$(".mainnav_mid_slide").css("left","-49.89rem");
	 	$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
	 	$(".mainnav_mid_slide_ul>li").eq(i).css("backgroundColor","red");
	 	if(!slidetimer) {
  			slidetimer = setInterval(slideshow, 5000);
  		}
  		else {
	  		clearInterval(slidetimer);
	  		slidetimer = setInterval(slideshow, 5000);
  		}
  	});

  	$('.mainnav_mid').on('mouseenter',function() {
  		$('.mainnav_mid_p1').show();
  		$('.mainnav_mid_p2').show();
  		$('.sd_span2').show();
  		}
  	).on('mouseleave',function() {
  		$('.mainnav_mid_p1').hide();
  		$('.mainnav_mid_p2').hide();
  		$('.sd_span2').hide();
  		}
  	);

	$(".mainnav_mid_p1,sd_span1").mouseenter(function(){
  		clearInterval(slidetimer);
  		$('.sd_span1').animate({width:'toggle'});
  		var j = Math.abs(Math.round(($('.mainnav_mid_p1').parent().children('.mainnav_mid_slide').position().left)/(49.89*13.826)))-1;
  		$('.sd_span1').html(tipspan1[j]);
  	}).mouseleave(function(){
		$('.sd_span1').animate({width:'toggle'});
			if(!slidetimer) {
  			slidetimer = setInterval(slideshow, 5000);
  		}
  		else {
	  		clearInterval(slidetimer);
	  		slidetimer = setInterval(slideshow, 5000);
  		}
	});

	$('.mainnav_mid_p1').click(function(){
		var j = Math.abs(Math.round(($(this).parent().children('.mainnav_mid_slide').position().left)/(49.89*13.826)))-1;
		console.log(j);
		if(j==0){
			$(".mainnav_mid_slide").css("left","-299.34rem");
			$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
		    $(".mainnav_mid_slide_ul>li").eq(5).css("backgroundColor","red");
		    $('.sd_span1').html(tipspan1[5]);
 			$('.sd_span2').html(tipspan2[5]);
		}
		else {
			$(".mainnav_mid_slide").animate({"left":"+=49.89rem"}).stop(true,true);
			$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
		    $(".mainnav_mid_slide_ul>li").eq(j-1).css("backgroundColor","red");
		    $('.sd_span1').html(tipspan1[j]);
 		    $('.sd_span2').html(tipspan2[j]);
		}
	}).stop(false,true);
	$('.mainnav_mid_p2').mouseenter(function(){
		var j = Math.abs(Math.round(($('.mainnav_mid_p2').parent().children('.mainnav_mid_slide').position().left)/(49.89*13.826)))-1;
		 $('.sd_span2').html(tipspan2[j]);
		clearInterval(slidetimer);
	}).mouseleave(function(){
		if(!slidetimer) {
  			slidetimer = setInterval(slideshow, 5000);
  		}
  		else {
	  		clearInterval(slidetimer);
	  		slidetimer = setInterval(slideshow, 5000);
	  	}
	});

	$('.mainnav_mid_p2').click(function(){
		var j = Math.abs(Math.round(($(this).parent().children('.mainnav_mid_slide').position().left)/(49.89*13.826)))-1;
		// console.log(j);
		if(j==5){
			$(".mainnav_mid_slide").css("left","-49.89rem");
			$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
		    $(".mainnav_mid_slide_ul>li").eq(0).css("backgroundColor","red");
		    $('.sd_span1').html(tipspan1[0]);
 		    $('.sd_span2').html(tipspan2[0]);
		}
		else {
			$(".mainnav_mid_slide").animate({"left":"-=49.89rem"}).stop(true,true);
			$(".mainnav_mid_slide_ul>li").css("backgroundColor","#fff");
		    $(".mainnav_mid_slide_ul>li").eq(j+1).css("backgroundColor","red");
		    $('.sd_span1').html(tipspan1[j]);
 		    $('.sd_span2').html(tipspan2[j]);
		}
	});

 	$(".mainnav_mid_ad_item>a>img").mouseenter(function(){
		$(this).animate({"left":'-0.2rem'});
	}).mouseleave(function(){
		$(this).animate({"left":'0.2rem'});
	});

 	//中间导航区end
 	// 右侧导航区start
 	var qd1 = null;
 	var qd2 = null;
 	if(!qd1){
		setInterval(function(){
			$('.mainnav_right_qd').css({"transform-origin":"0% 100%","transform":"rotate(-3deg)"});
			},100);	
 	}else{
 		clearInterval(qd1);
 		qd1=setInterval(function(){
			$('.mainnav_right_qd').css({"transform-origin":"0% 100%","transform":"rotate(-3deg)"});
			},100);	
 	}
	if(!qd2){
		setInterval(function(){
			$('.mainnav_right_qd').css({"transform-origin":"0% 100%","transform":"rotate(3deg)"});
		},100);
 	}else {
 		clearInterval(qd2);
 		qd2=setInterval(function(){
			$('.mainnav_right_qd').css({"transform-origin":"0% 100%","transform":"rotate(3deg)"});
		},100);
 	}

	$('.mainnav_right_jk,.mainnav_right_lc').mouseenter(function(){
		$(this).animate({"top":'-0.2rem'});
	}).mouseleave(function(){
		$(this).animate({"top":'0.2rem'});
	});

	$('.show3_left_item4,.show_left_item4').mouseenter(function(){
		$(this).animate({"top":'-0.2rem'});
	}).mouseleave(function(){
		$(this).animate({"top":'0.2rem'});
	});

	$('.mainnav_right_iconav>li').on('mouseenter',function(){
		$(this).children("a").children("p").stop(false,false).animate({backgroundPositionY:'-1.88rem'});
	}).on('mouseleave',function(){
		$(this).children("a").children("p").stop(false,false).animate({backgroundPositionY:'0rem'});
	});

 	$('.mainnav_right_iconav_wrap').on('mouseenter',function(){
		$('.mainnav_right_iconav1').slideDown();
	}).on('mouseleave',function(){
		$('.mainnav_right_iconav1').slideUp();
	});

 	// 右侧导航区end
 	 
 	
 	// section.nav部分bottommenu end
 	
 	// section.member部分bottommenu start
 	$(".member_card,.membernav_mid_content3>ul>li,.membernav_bot_barcode>a,.coupon_list2").mouseenter(function() {
 		$(this).animate({'top':"-0.2rem"});
 	}).mouseleave(function() {
		$(this).animate({'top':"0.2rem"});
 	});

	$(".membernav_mid_content2>li").mouseenter(function(){
		$(this).animate({"left":'-0.2rem'});
	}).mouseleave(function(){
		$(this).animate({"left":'0.2rem'});
	});

    for(k=1;k<5;k++) {
    	(function(k){
    		$('.xnrtrt_p'+k).click(function(){
		 		$(this).css("border-bottom","3px solid red");
		 		$(this).children('a').css("color","red");
		 		$(this).siblings().css("border-bottom","1px solid #A3A3A3");
		 		$(this).siblings().children('a').css("color","#A3A3A3");
		 		for(i=1;i<5;i++){
		 			(function(i){
		 				$('.xnrtrc'+i).hide();
		 			})(i);
		 		}
		 		$('.xnrtrc'+k).show();
 			}) ;
    	})(k);
    }
    $('.xnrtrc_ul,.xbrtrc4_div').mouseenter(function(){
    	console.log($('.xnrtrc_ul'));
    	$(this).animate({"left":"-0.2rem"});
    }).mouseleave(function(){
    	$(this).animate({"left":"0.2rem"});
    });
 	// sec_xjk start
});