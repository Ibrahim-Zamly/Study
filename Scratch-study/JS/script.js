/* global $, alert,console*/

$(function(){
	
	'use strict';
	
	//Adjust header height 
	
	var myHeader=$('.header');
	var mySlider=$('.slider');
	
	myHeader.height($(window).height());
	
	$(window).resize(function(){
		
		myHeader.height($(window).height());
		
		
		// Adjust bxSlider
		
		mySlider.each(function() {
		
			$(this).css('paddingTop',($(window).height() - $('.slider li').height())/2);
			
		        
    });
		
	});
	
	//Links add active class
	
	$('.links li a').click(function(){
		
		$(this).parent().addClass('active').siblings().removeClass('active');
		});
	
	// Adjust bxSlider
	
	mySlider.each(function() {
		
			$(this).css('paddingTop',($(window).height() - $('.slider li').height())/2);
		        
    });
	
	
	// Smooth Scroll
	
	
		$('.links li a').click(function(){
			
			$('html,body').animate({
				
				scrollTop: $('#' + $(this).data('value')).offset().top + 5
				
				},1000);
			
			});
		
		// My Slider Trigger
		
		mySlider.bxSlider({
			
			pager:false 
			});
			
			
			// My Auto Slider Code 
			
			(function autoSlider() {
				
				$('.sliderr .activee').each(function() {
					
					if(!$(this).is(':last-child')){
						
						$(this).delay(3000).fadeOut(1000,function(){
								$(this).removeClass('activee').next().addClass('activee').fadeIn()
								
								autoSlider();
							});
						
						}
						
						else {
							
								$(this).delay(3000).fadeOut(1000,function(){
										
										$(this).removeClass('activee');
										
										$('.sliderr div').eq(0).addClass('activee').fadeIn();
										
										autoSlider();
									});
							}
                    
                });
				
			}());
			
			// Trigger mixed it up
			
			$('#container').mixItUp();
			
			
			// Adjust shuffle links
			
			$('.shuffle li').click(function(){
				
				$(this).addClass('selected').siblings().removeClass('selected');
				 
				})
	
	});