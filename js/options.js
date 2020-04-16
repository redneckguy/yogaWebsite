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
            document.body.appendChild(div);

            let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontStyle}px; text-align: ${this.textAlign}`;
            div.style.cssText = param;

            // let nameOfElemConstr = ['height', 'width', 'bg', 'fontSize', 'textAlign'];
            // let elemQntConstr = [this.height, this.width, this.bg, this.fontSize, this.textAlign];

            // let createCssStyleElem;
            // for (let i = 0; i < nameOfElemConstr.length, i < elemQntConstr.length; i++) {
            // // div.style.cssText = `${nameOfElemConstr[i]}: ${elemQntConstr[i]};`;   
            // createCssStyleElem = `${nameOfElemConstr[i]}: ${elemQntConstr[i]};`;
            //     // div.style.cssText =  
            // }
            
            // console.log(createCssStyleElem);

            // div.style.createCssStyleElem;

            // for (let i = 0; i < nameOfElemConstr.length, i < elemQntConstr.length; i++) {
            // div.setAttribute = `'style', 'nameOfElemConstr[i]: elemQntConstr[i];`;            
            // }
        }
    }

    const newDiv = new Options(200, 200, '#ccc', 54, 'center');      
    newDiv.createDiv('this is a new div with text');

});