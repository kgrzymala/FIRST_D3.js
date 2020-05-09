(function()  {

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>
	
let tmpl = document.createElement('template');
    tmpl.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components - KG</title>
    <script src="https://d3js.org/d3.v4.js"></script>
</head>
<body>
    <svg> 
        <circle class="target" style="fill: #69b3a2" stroke="black" cx=50 cy=50 r=40></circle>
      </svg>

      <script>
        d3
          .select(".target")  // select the elements that have the class 'target'
          .style("stroke-width", 8) // change their style: stroke width is not equal to 8 pixels
        </script>
</body>
</html>
    `;


class WidgetTemplate extends HTMLElement {


		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(tmpl.content.cloneNode(true));
			
		
		}


        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

       

         

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
            redraw(){
        }
    
    
    };
  
customElements.define('com-sap-sample-template',WidgetTemplate)

})();
