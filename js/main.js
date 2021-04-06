const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;
menuBtn.addEventListener('click' , toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach( item =>item.classList.add('show'));

        showMenu = true;
    }
    
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach( item =>item.classList.add('show'));


        showMenu = false;

        
    
    }

}











                /*$(document).on('scroll' , function(){
                    const windowHeight = $(window).height()
                    // console.log(windowHeight)
                    const scrollValue = $(this).scrollTop();
                    console.log(scrollValue)
                    const $link1 = $('.link-1');
                    const $link2 = $('.link-2');
                    const $link3 = $('.link-3');
                    const link1FromTop = $link1.offset().top
                    const link2FromTop = $link2.offset().top
                    const link3FromTop = $link3.offset().top
                    //console.log(link1FromTop)
                    const link1Height = $link1.outerHeight()
                    const link2Height = $link2.outerHeight()
                    const link3Height = $link3.outerHeight()
                    //console.log(link1Height)

                    if(scrollValue > link1FromTop+link1Height-windowHeight){
                    //console.log("tutej jestem")
                     $link1.addClass('active')
                    }


                    if(scrollValue > link2FromTop+link2Height-windowHeight){
                        //console.log("tutej jestem")
                         $link2.addClass('active')

                    } 



                    if(scrollValue > link3FromTop+link3Height-windowHeight){
                        //console.log("tutej jestem")
                         $link3.addClass('active')

                    } 



                    if(scrollValue < 40){
                        $link1.removeClass('active');

                    }


                    if(scrollValue < 70){
                        $link2.removeClass('active');

                    }


                    if(scrollValue < 100){
                        $link3.removeClass('active');

                    }
                    
                           
                })*/
                
                   






