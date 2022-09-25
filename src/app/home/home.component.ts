import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
// import { NgForm } from '@angular/forms';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  band: any = {
    city: "",
    band_name: "",
    genre: "",
    emailid: "",
    past_achievments: "",
    no_of_members: null,
    bandmembers: "",
    original_composition: ""
  }


  past_ach: string = '';
  city: string = '';
  band_name: string = '';
  genre: string = '';
  emailid: string = '';
  no_of_members: number = 0;
  mem_name1: string = '';
  mem_name2: string = '';
  mem_contact1: string = '';
  mem_contact2: string = '';
  orignal_composition: string = '';
  // band: band

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    let path = document.querySelector('path')
    let pathLength = document.querySelector('path')?.getTotalLength()
    if (path != null) {
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path.style.strokeDashoffset = pathLength?.toString() || '';
    }
    if (pathLength != null) {
      $('.page-5').on('mousewheel', function () {
        var scrollPercentage = 0;
        var top = $(window).scrollTop() || 0;
        scrollPercentage = (top + this.clientHeight / 3 - this.offsetTop) / this.clientHeight;
        var length = pathLength || 0;
        var drawLength = length * scrollPercentage;
        if (path != null) {
          path.style.strokeDashoffset = (length - drawLength).toString() || '';
        }
      });
    }
    $(window).on('scroll', () => {
      var i = 1;
      while (i < 28) {
        var element = document.getElementById(i.toString());
        var top = window.innerHeight;
        var clh = 0
        if (element) {
          top = element.getBoundingClientRect().top;
          clh = element.clientHeight;
        }
        var id = '#' + i.toString();
        if (top < (window.innerHeight - clh)) $(id).fadeTo(500, 1);
        i++;
      }
    })
  }

  register = () => {

    if (this.city == "") {
      alert("Please enter your city");
      return;
    }

    if (this.genre == "") {
      alert("Please enter your genre");
      return;
    }
    if (this.emailid == "") {
      alert("Please enter your email id");
      return;
    }
    if (this.orignal_composition == "") {
      alert("Please enter your orignal works");
      return;
    }
    if (this.band_name == "") {
      alert("Please enter your band's name");
      return;
    }
    if (this.mem_contact1 == "" || this.mem_contact1.length!=10 ) {
      alert("Please enter 1st member's 10-digit contact number");
      return;
    }
    if (this.mem_contact2 == ""|| this.mem_contact2.length!=10) {
      alert("Please enter 2nd member's 10-digit contact number");
      return;
    }

    if (this.mem_name1 == "") {
      alert("Please enter 1st member's name");
      return;
    }
    if (this.mem_name2 == "") {
      alert("Please enter 2nd member's name");
      return;
    }

    if (this.no_of_members < 2) {
      alert("Number of members must be greater than 2");
      return;
    }

    else {
      var member = this.mem_name1 + ' : ' + this.mem_contact1 + ', ' + this.mem_name2 + ' : ' + this.mem_contact2
      console.log(member)
      console.log(this.band_name)
      this.band.band_name = this.band_name;
      console.log(this.band.band_name)
      this.band.city = this.city
      this.band.genre = this.genre
      this.band.emailid = this.emailid
      this.band.bandmembers = member
      this.band.no_of_members = this.no_of_members
      this.band.original_composition = this.orignal_composition
      this.band.past_achievments = this.past_ach

      console.log(this.band)

      this.post_band()
    }


  }

  post_band = () => {
    console.log('posted')
    this.http.post('https://veronica.moodi.org/livewire/create',this.band)
    .subscribe((data)=>{
      console.log(data)
    })
  }


}
