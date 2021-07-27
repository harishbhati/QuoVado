class QvFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer> <!--QV-VC footer -->
                <hr>
                <h2>Interview</h2>
                <nav>
                    <ul>
                        <li>
                            <a href="cash.html" class="teal">Cash</a>
                            <p>Chase-Bank-1234</p>
                        </li>
                        <li>
                            <a href="property.html" class="brown">Property</a>
                            <p>My Home For Rent</p>
                        </li>
                        <li>
                            <a href="investment.html" class="green">Investment</a>
                            <p>Shares</p>
                        </li>
                        <li>
                            <a href="pension.html" class="yellow">Pension</a>
                            <p>Smith Consulting</p>
                        </li>
                        <li>
                            <a href="business.html" class="black">Business</a>
                            <p>Smith Consulting</p>
                        </li>
                        <li>
                            <a href="miscellaneous.html" class="biscuit">Miscellaneous</a>
                            <p>My Diamond Necklace</p>
                        </li>
                    </ul>
                </nav>
            </footer>
        `
    }
}

customElements.define('qv-footer', QvFooter);
