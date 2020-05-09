(function()  {

let tmpl = document.createElement('template');
    tmpl.innerHTML = `
<!DOCTYPE html>
<h1>First d3.js chart in SAC BASIC v2</h1>

<!-- Add a bit of text -->
<p>to be investigated further</p>

<!-- Add a svg shape. Note that the 'target' class is attributed to the circle -->
<svg> 
  <circle class="target" style="fill: #69b3a2" stroke="black" cx=50 cy=50 r=40></circle>
</svg>

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

<script>
d3
  .select(".target")  // select the elements that have the class 'target'
  .style("stroke-width", 15) // change their style: stroke width is not equal to 8 pixels
</script>

    `;


customElements.define('com-sap-sample-template', class WidgetTemplate extends HTMLElement {


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
    
    
    });
        
})();
