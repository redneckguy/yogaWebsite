window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let age = document.getElementById('age');
    let value = age.value;

    // function showUser(surname, name) {
    //     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }   

    // showUser();

    let user = {
        value: value,
    };

    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }

    showUser.call(user, 'petrov', 'vasya');
    showUser.apply(user, ['petrov', 'vasya']);
   

    //Worked with object ==================================

    // let user = {
    //     value: value,
    //     showUser(surname, name) {
    //         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //     }   
    // };

    // user.showUser('sdfsdf', 'asdasd');

    //========================================


    //Worked with function =====================
    // function User() {
    //     this.value = value;
    //     this.showUser = function(surname, name){
    //         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //     };
    // }

    // let vasya = new User();
    // vasya.showUser('petrov', 'vasya');

    //==================================


    //Worked with class ==========================

    // class User {
    //     constructor(){
    //         this.value = value;
    //     }
    //     showUser(surname, name) {
    //         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //     }
    // }

    // let vasya = new User();
    // vasya.showUser('petrov', 'vasya');

    //==================================  

});