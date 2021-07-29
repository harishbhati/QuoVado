class QVSaveButton extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <article> <!--QV-VC Icon & Save Button -->
            <figure>
                <a href="profile.html" class="icon__active">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
                    <h4 class="violet">Profile</h4>
                </a>
            </figure>
            <figure>
                <a href="cash.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
                    <h4 class="teal">Cash</h4>
                </a>
            </figure>
            <figure>
                <a href="property.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
                    <h4 class="brown">Property</h4>
                </a>
            </figure>
            <figure>
                <a href="investment.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
                    <h4 class="green">Investment</h4>
                </a>
            </figure>
            <figure>
                <a href="pension.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
                    <h4 class="yellow">Pension</h4>
                </a>
            </figure>
            <figure>
                <a href="business.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
                    <h4 class="black">Business</h4>
                </a>
            </figure>
            <figure>
                <a href="miscellaneous.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#hexagone" />
                    </svg>
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

customElements.define('qv-iconsvc', QVSaveButton);
