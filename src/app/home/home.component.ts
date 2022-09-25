import { Component, OnInit , HostListener} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    let path = document.querySelector('path')
    let pathLength = document.querySelector('path')?.getTotalLength()
    if(path!=null){
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path.style.strokeDashoffset = pathLength?.toString() || '';
    }
    if (pathLength!=null){
      $('.page-5').on('mousewheel',function(){
        var scrollPercentage = 0;
        var top = $(window).scrollTop() || 0;
        scrollPercentage = (top+this.clientHeight/3-this.offsetTop)/this.clientHeight;
        var length  = pathLength || 0;
        var drawLength = length * scrollPercentage;
        if (path!=null){
          path.style.strokeDashoffset = (length - drawLength).toString() || '';
        }
      });
      // $('.page-3').on('mousewheel',function(){
      //   var scrollPercentage = 0;
      //   var top = $(window).scrollTop() || 0;
      //   scrollPercentage = (top+this.clientHeight/3-this.offsetTop)/this.clientHeight;
      //   var length  = pathLength || 0;
      //   var drawLength = length * scrollPercentage;
      //   if (path!=null){
      //     path.style.strokeDashoffset = (length - drawLength).toString() || '';
      //   }
      // });
    }
    $(window).on('scroll',()=>{
      var i=1;
      while (i<22){
      var element = document.getElementById(i.toString());
      var top = window.innerHeight;
      var clh = 0
      if (element) {
        top = element.getBoundingClientRect().top;
        clh = element.clientHeight;
      }
      var id = '#' + i.toString();
      if (top<(window.innerHeight-clh)) $(id).fadeTo(500,1);
      i++;
    }
    })
  }

}
