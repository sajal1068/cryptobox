jQuery('#google_translate_element').text().replace('Powered by ', '');
        // acrodian 
        // When any accordion title is clicked...
		$(".accordionTitle").click(function() {
            const $accordion_wrapper = $(this).parent();
            const $accordion_content = $(this).parent().find(".accordionContent");
            const $accordion_open = "accordion--open";
  
            // If this accordion is already open
            if ($accordion_wrapper.hasClass($accordion_open)) {
              $accordion_content.slideUp();                     // Close the content.
              $accordion_wrapper.removeClass($accordion_open);  // Remove the accordionm--open class.
            }
            // If this accordion is not already open
            else {
              $accordion_content.slideDown();                 // Show this accordion's content.
              $accordion_wrapper.addClass($accordion_open);   // Add the accordion--open class.
            }
          });

          <!-- On Click of Video Play -->
          'use strict';
          var videmb = $('.video-embed');
          var vidthmb = $(videmb).find(".thumb");
          var qut = $(".quote-div");
          $(videmb).find('iframe')[0].src += "?rel=0";
          var clicked = true;
          var newWidth=$(window).width();
          $(videmb).on('click',function(){
              'use strict';
              if(clicked === true && newWidth >= 992){
                  $(videmb).animate({marginTop: '-31px',marginBottom:'111px'});
                  $(qut).animate({bottom: '-11',zIndex:'-1'});
                  $(videmb).animate({marginTop: '0',marginBottom:'80px'});
                  $(qut).animate({bottom: '20'});
                  $(vidthmb).animate({opacity:'0',zIndex:'-1'});
                  $(videmb).find('iframe')[0].src += "&autoplay=1";
                  clicked = false;
          
              }
              else if(clicked === true && newWidth <= 991){
                  $(qut).animate({zIndex:'-1'});
                  $(vidthmb).animate({opacity:'0',zIndex:'-1'});
                  $(videmb).find('iframe')[0].src += "&autoplay=1";
                  clicked = false;
              }
          
          });
          
         
          $(document).on('click',function(e){
              'use strict';
              if ($(e.target).is('.video-embed,.video-embed *')) {
              }
              else if(clicked === false && newWidth >= 992){
                  $(videmb).animate({marginTop: '-31px',marginBottom:'111px'});
                  $(qut).animate({bottom: '-11',zIndex:'0'});
                  $(videmb).animate({marginTop: '0',marginBottom:'80px'});
                  $(qut).animate({bottom: '20'});
                  $(vidthmb).animate({opacity:'1',zIndex:'0'});
                  var plSRC = $(this).find('iframe').attr('src');
                  var pauSRC = plSRC.replace('&autoplay=1','');
                  $(videmb).find('iframe').attr('src',pauSRC);
                  clicked = true;
              }
              else if(clicked === false && newWidth <= 991){
                  $(qut).animate({zIndex:'0'});
                  $(vidthmb).animate({opacity:'1',zIndex:'0'});
                  var plaSRC = $(this).find('iframe').attr('src');
                  var pausSRC = plaSRC.replace('&autoplay=1','');
                  $(videmb).find('iframe').attr('src',pausSRC);
                  clicked = true;
              }
          });




const ease = {
  exponentialIn: (t) => {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: (t) => {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: (t) => {
    return t == 0.0 || t == 1.0
      ? t
      : t < 0.5
        ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
        : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
  },
  sineOut: (t) => {
    const HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: (t) => {
    return t < 0.5
        ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
        : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: (t) => {
    return t * t * t;
  },
  cubicOut: (t) => {
    const f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: (t) => {
    return t < 0.5
      ? 4.0 * t * t * t
      : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: (t) => {
    return -t * (t - 2.0);
  },
  quarticOut: (t) => {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  },
}


//FIN easing


/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}

// FIN demo js

// DEBUT demo 3 js



class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 2;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 200;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = 0;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      const thisEase = this.isOpened ? 
                        (i == 1) ? ease.cubicOut : ease.cubicInOut:
                        (i == 1) ? ease.cubicInOut : ease.cubicOut;
      points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}

(function() {
  const elmHamburger = document.querySelector('.hamburger');
  const gNavItems = document.querySelectorAll('.global-menu__item');
  const elmOverlay = document.querySelector('.shape-overlays');
  const overlay = new ShapeOverlays(elmOverlay);

  elmHamburger.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return true;
    }
    overlay.toggle();

    if (overlay.isOpened === true) {
     
      elmHamburger.classList.add('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
        
      $(".global-menu__wrap").on("click", "a", function (event) {             
          elmHamburger.classList.remove('is-opened-navi');           
         //elmOverlay.classList.remove('is-opened');        
          for (var i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove('is-opened');
          }
          overlay.close();
        
      });

    } else {

      elmHamburger.classList.remove('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
      elmOverlay.classList.remove('is-opened');
    }

    

   
    
  });


  

}());


// top to back

jQuery(window).scroll(function(){
  if(jQuery(window).scrollTop()<50){
      jQuery('#rocketmeluncur').slideUp(500);
  }else{
      jQuery('#rocketmeluncur').slideDown(500);
  }
  var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
  var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
  jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
          duration: 600,  
          easing: 'linear'
      });
  
  var self = this;
  this.className += ' '+"launchrocket";
  setTimeout(function(){
    self.className = 'showrocket';
  },800)
});

/* ==============================================
 Navigation Click & Active on Reaching Section
 =============================================== */
 'use strict';
 var sections = $('section')
     , nav = $('nav')
     , nav_height = nav.outerHeight();
 
 $(window).on('scroll', function () {
     'use strict';
     var cur_pos = $(this).scrollTop();
 
     sections.each(function() {
         var top = $(this).offset().top - nav_height - 90,
             bottom = top + $(this).outerHeight();
 
         if (cur_pos >= top && cur_pos <= bottom) {
             nav.find('a').removeClass('active');
             sections.removeClass('active');
 
             $(this).addClass('active');
             nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
         }
     });
 });
     
 /* ==============================================
 Calling Scroll Animations
 =============================================== */
'use strict';
AOS.init();
          
  