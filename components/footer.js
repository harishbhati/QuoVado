class QvFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer> <!--QV-VC footer -->
                <hr>
                <h2>Interview</h2>
                <nav>
                    <a href="cash.html" class="teal">Cash</a>
                    <a href="property.html" class="brown">Property</a>
                    <a href="investment.html" class="green">Investment</a>
                    <a href="pension.html" class="yellow">Pension</a>
                    <a href="business.html" class="black">Business</a>
                    <a href="miscellaneous.html" class="biscuit">Miscellaneous</a>
                </nav>
                <p>Chase-Bank-1234</p>
            </footer>
        `
    }
}

customElements.define('qv-footer', QvFooter);