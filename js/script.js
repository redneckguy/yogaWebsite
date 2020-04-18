window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    //Hide top tabs============================================================

    //getting elements
    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //function to hide tabs
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    //function to show tabs
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //event listener to switch tabs
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer======================================================================

    let deadline = '2020-04-16';

    //getting the remaining time
    function getTimeRemaining(endtime) {

        //difference in time
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        //adds zero when 9,8,7...
        function addZeros(n, needLength) {
            needLength = needLength || 2;
            n = String(n);
            while (n.length < needLength) {
                n = '0' + n;
            }
            return n;
        }

        return {
            'total': t,
            'hours': addZeros(hours),
            'minutes': addZeros(minutes),
            'seconds': addZeros(seconds),
        };
    }

    //setting clock
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    //Modal=========================================================================

    //getting elements
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    //showing modal window
    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    //closes modal window
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //closes modal window on escape button
    window.addEventListener('keyup', (event) => {
        if (event.code == 'Escape') {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    });

    //showing modal window on tabs buttons
    let descriptBtn = document.querySelectorAll('.description-btn');

    descriptBtn.forEach((item) => {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
        });
    });

    //Form ===================================================================

    //message for user <<===== universal object-------------
    let message = {
        loading: 'Loading...',
        success: 'Thank you! We will contact you back!',
        failure: 'Something went wrong...',
    };
    //------------------------------------------------------

    //selecting elements
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        //----------------------------------------------------
        statusMessage = document.createElement('div'); //<<==== universal message
    //-----------------------------------------------------

    //adding style for status message window
    statusMessage.classList.add('status');


    function sendForm(elem, inputFields) {
        elem.addEventListener('submit', function (event) {

            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); <== for PHP server
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // <== for Node js (JSON format)

            let obj = {}; // for JSON
            formData.forEach(function (value, key) { //fromData ==>> normal readed object for JSON
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            // request.send(formData);  // <==== for PHP
            request.send(json); //for JSON node js server

            //getting status for user
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            //to clear input from prev data
            for (let i = 0; i < inputFields.length; i++) {
                inputFields[i].value = '';
            }
        });
    }

    sendForm(form, input);

    //contact form =============================================================
    let contactForm = document.querySelector('#form'),
        inputs = contactForm.getElementsByTagName('input');

    sendForm(contactForm, inputs);


    //PHOTO SLIDER==============================================================

    let slideIndex = 1, //параметр текущего слайда
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);        
    });

    next.addEventListener('click', function() {
        plusSlides(1);        
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
});