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

            let param = `height: ${this.height}px; 
                         width: ${this.width}px; 
                         background-color: ${this.bg}; 
                         font-size: ${this.fontStyle}px; 
                         text-align: ${this.textAlign}`;
                         
            div.style.cssText = param;

            // let nameOfElemConstr = ['height', 'width', 'bg', 'fontSize', 'textAlign'];
            // let elemQntConstr = [this.height, this.width, this.bg, this.fontSize, this.textAlign];

            //let cssTextElem = [];
            // for (let i = 0; i < nameOfElemConstr.length, i < elemQntConstr.length; i++) {
            // // cssTextElem = `${nameOfElemConstr[i]}: ${elemQntConstr[i]};`;   
            //} 
            //div.style.cssText = (...cssTextElem);
        }
    }

    // const newDiv = new Options(200, 200, '#ccc', 54, 'center');      
    // newDiv.createDiv('this is a new div with text');

});