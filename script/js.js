$(window).ready(function(){var a=$("#loader-wrap");a.delay(500).fadeOut(0)});window.onscroll=function(){scrollFunction()};function scrollFunction(){var a=$(".main-container");var b=a.find(".home-content");var c=$("header");if($(window).innerWidth()>740){if(document.body.scrollTop>0||document.documentElement.scrollTop>0){c.addClass("fixed-header");b.addClass("fade-text")}else{b.removeClass("fade-text");c.removeClass("fixed-header")}}if(document.body.scrollTop>1050||document.documentElement.scrollTop>1050){document.getElementById("go-top").style.display="block"}else{document.getElementById("go-top").style.display="none"}}$(function(){var b=$(".main-container");var c=b.find(".home-content");var d=$(".header");var a=$("#loader-wrap");$(window).resize(function(){if($(window).innerWidth()<740){d.removeClass("fixed-header");c.removeClass("fade-text");a.hide()}else{a.hide()}})});$(function(){var c=$(".header");var a=c.find("#toggle-btn");var b=c.find(".nav ul");$(a).click(function(){$(this).toggleClass("nav-is-visible");$(b).slideToggle();$(window).resize(function(){if($(window).innerWidth()>740){b.show();a.addClass("nav-is-visible")}})})});$(function(){var c=375;var i=1600;var e=3;var f=$(".main-container");var j=f.find("#last-projects");var b=j.find(".projects-slider-container");var a=b.find(".projects-slider");var g=a.find("li");var d=j.find("#slide-left");var k=j.find("#slide-right");var h=j.find("#slide-left,#slide-right");$(k).on("click",function(){e++;if(e===g.length+1){$(a).animate({marginLeft:"0"},"slow");e=3}else{$(a).animate({marginLeft:"-="+c},"slow")}});$(d).on("click",function(){if(e===3){$(a).animate({marginLeft:"-"+c*2},"slow");e=g.length}else{$(a).animate({marginLeft:"+="+c},"slow");e--}})});$(function(){var c=$(".about-content-container");var b=c.find(".why-us");var a=b.find("ul.tab-panel li");a.on("click",function(){var d=$(this).next(".tab-content");var e=d.css("display");if(e==="block"){d.slideUp();$(this).removeClass("tab-x")}else{d.slideDown().siblings(".tab-content").slideUp();$(this).addClass("tab-x").siblings().removeClass("tab-x")}});a.focus(function(){$(this).find(".tab-content").hide()})});$(function(){var b=$(".services-content-container");var c=b.find(".service-box");var d=c.find("span");var a;Interval=setInterval(function(){$(d).animate({opacity:"0.5",marginTop:"10px"},500);$(d).animate({opacity:"1",marginTop:"0px"},500)},1000)});$(document).ready(function(){$("a").on("click",function(a){if(this.hash!==""){a.preventDefault();var b=this.hash;$("html, body").animate({scrollTop:$(b).offset().top},600,function(){window.location.hash=b})}})});$(function(){var c=$("main");var e=c.find(".gallery-wrap");var b=e.find(".images-container");var a=b.find(".project-image");var d=e.find(".pager-list li");$(d).on("click",function(){var f=$(this).attr("slide");$(this).addClass("active").siblings().removeClass("active");$(a).eq(f).fadeIn().siblings().hide()})});$(function(){var e=$(".modal-container");var f=e.find(".close-btn");var a=$(".portfolio-content-container");var b=a.find(".projects-wrapper");var d=b.find(".link-modal");var c=$("#sended-message-modal");c.delay(1000).fadeOut();$(d).on("click",function(){$(e).fadeIn();var g=$(this).attr("image");$("#"+g).fadeIn("slow").siblings().not(f).hide()});$(f).on("click",function(){e.hide()})});