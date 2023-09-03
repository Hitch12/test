import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  ngOnInit() :void{


    // $(window).scroll( ()=> {
    //   let windowScroll:number = $(window).scrollTop() as number;
    //   //let offsetAbout:number = $('#BEST-SELLER').offset()?.top as number;
    //     if(windowScroll > 50){
    //       $('.navbar').css('backgroundColor', 'black')
    //       $('.navbar').css('padding', '15px')
    //       // $('&__field').css('backgroundColor','#fff')
    //       $('#btn-up').fadeIn(500)
    //     }
    //     else{
    //       $('.navbar').css('backgroundColor', '#00000025')
    //       $('.navbar').css('padding', '10px')
    //       $('#btn-up').fadeOut(500)
    //     }
    // })
  document.addEventListener('scroll',(e)=>{
        if(window.scrollY || window.pageYOffset > 0){
          let navbar:any = document.querySelector('.navbar')
          let navLink:any = document.querySelectorAll('.nav-link')
          navbar.style.backgroundColor = '#01B671';
          for(let i =0 ; i<navLink.length;i++)
            navLink[i].style.color = '#fff';
        }
        else{
          let navbar:any = document.querySelector('.navbar')
          let navLink:any = document.querySelectorAll('.nav-link')
          navbar.style.backgroundColor = '#EEEFF3';
          for(let i =0 ; i<navLink.length;i++)
            navLink[i].style.color = '#01B671';
        }
  })


  // Close onclick outside
  document.addEventListener('click', (e) => {
    const toggle:any = document.querySelector('.search__toggle')
    const input:any = document.querySelector('.search__input')
    const clickedElement:any = e.target
    if (clickedElement == toggle) {
      input.value = ''
      return;
    }
    if(input.value){
      toggle.checked = false
      input.value = ''
      window.scrollTo({top:0 });

    }
    const isSearchField = clickedElement.closest('.search__field')

    if (!isSearchField) {
      toggle.checked = false
      input.value = ''

    }
  })



  }
}
