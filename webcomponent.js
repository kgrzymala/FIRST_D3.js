(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
<!DOCTYPE html>
<h1>First d3.js chart in SAC</h1>

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

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        redraw(){
        }
    
    
    });
        
})();
