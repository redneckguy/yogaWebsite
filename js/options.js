window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        createDiv(a) {
            var div = document.createElement('div');
            // div.textContent = prompt('Please type in your text');         
            div.textContent = a;
           
            let nameOfElemConstr = ['height', 'width', 'bg', 'fontSize', 'textAlign'];
            let elemQntConstr = [this.height, this.width, this.bg, this.fontSize, this.textAlign];

            let createCssStyleElem = [];
            for (let i = 0; i < nameOfElemConstr.length, i < elemQntConstr.length; i++) {
            // div.style.cssText = `${nameOfElemConstr[i]}: ${elemQntConstr[i]};`;   
            createCssStyleElem = `${nameOfElemConstr[i]}: ${elemQntConstr[i]};`;
                // div.style.cssText =  
            }
            
            console.log(createCssStyleElem);

            // for (let i = 0; i < nameOfElemConstr.length, i < elemQntConstr.length; i++) {
            // div.setAttribute = `'style', 'nameOfElemConstr[i]: elemQntConstr[i];`;            
            // }
        }
        
    }

    let newDiv = new Options('45px', '100px', '#ccc', '14px', 'middle');      
    newDiv.createDiv('this is a new div with text');

});