class QvFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <article> <!--QV-LC Cash type icons group -->
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
                    <a href="miscellaneous.html.html">
                        <i class="msc"></i>
                        <h4 class="biscuit">Msc</h4>
                    </a>
                </figure>
            </article>
            <footer> <!--Cash footer -->
                <hr>
                <h2>Interview</h2>
                <nav>
                    <a href="cash.html" class="teal">Cash</a>
                    <a href="property.html" class="brown">Property</a>
                    <a href="investment.html" class="green">Investment</a>
                    <a href="pension.html" class="yellow">Pension</a>
                    <a href="business.html" class="black">Business</a>
                    <a href="miscellaneous.html.html" class="biscuit">Miscellaneous</a>
                </nav>
                <p>Chase-Bank-1234</p>
            </footer>
        `
    }
}

customElements.define('qv-footer', QvFooter);