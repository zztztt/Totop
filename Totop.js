/*
 * Totop
 * Copyright (c) 2012 zhang zhitong http://www.zztztt.com
 * Date : 2012-4-20
 * You can add a icon ,when you click it , you can return the top of your web page;
 * 
 * Options:
 * image: you can add an image as the icon
 * height,width: the icon size
 * paddingright,paddingbottom: the icon padding right/bottom of the browser
 * scroll: the time you return the top
 */
(function($)
{
	 $.fn.Totop = function(options)
   {
				var defaults= {		
				image : "images/up1.png",
				height : 80,
				width : 80,
				paddingright : 20,
				paddingbottom : 20,
				scrolltime : 600,
				}

				var options = $.extend(defaults,options);
				this.each(function(){
					var upicon = $(this);
					$(upicon).css({"display":"none",
						"z-index":"9999",
						"cursor":"pointer",
						"position":"fixed",
						"right":options.paddingright,
						"bottom":options.paddingbottom});
					$(upicon).html("<img style = ' height:" +options.height+ ";width:" + options.width + "'src = '"+ options.image +"'/>");
					$(window).scroll(function(){
					
					if($(window).scrollTop() != 0)
				  {
						$(upicon).fadeIn(1000);
					}
				  else
				  {
						$(upicon).fadeOut();
				  }
					});
					var btn = $(upicon).find("img");
					$(btn).click(function(){
						//alert("OK");
						$("body,html").animate({scrollTop:0},options.scrolltime);
					
					});
				})
   }
})(jQuery);
