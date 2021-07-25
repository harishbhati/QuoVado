class QVSaveButton extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <article> <!--QV-VC Icon & Save Button -->
            <figure>
                <a href="javascript:void (0);">
                    <i class="profile"></i>
                    <h4 class="violet">Profile</h4>
                </a>
            </figure>
            <figure>
                <a href="cash.html">
                    <i class="cash"></i>
                    <h4 class="teal">Cash</h4>
                </a>
            </figure>
            <figure>
                <a href="property.html">
                    <i class="property"></i>
                    <h4 class="brown">Property</h4>
                </a>
            </figure>
            <figure>
                <a href="investment.html">
                    <i class="investment"></i>
                    <h4 class="green">Investment</h4>
                </a>
            </figure>
            <figure>
                <a href="pension.html">
                    <i class="pension"></i>
                    <h4 class="yellow">Pension</h4>
                </a>
            </figure>
            <figure>
                <a href="business.html">
                    <i class="business"></i>
                    <h4 class="black">Business</h4>
                </a>
            </figure>
            <figure>
                <a href="miscellaneous.html">
                    <i class="msc"></i>
                    <h4 class="biscuit">Msc</h4>
                </a>
            </figure>
        </article>
        
        <saveform>
            <button type="submit" class="fill-blue">Save</button>
        </saveform>
        `
    }
} 

customElements.define('qv-savebutton', QVSaveButton);