class QVSaveButton extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <article> <!--QV-VC Icon & Save Button -->
            <figure>
                <a href="/" class="active">
                    <svg>
                        <use xlink:href="./icons/icons.svg#profile" />
                    </svg>
                    <h4 class="violet">Profile</h4>
                </a>
            </figure>
            <figure>
                <a href="cash.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#cash" />
                    </svg>
                    <h4 class="teal">Cash</h4>
                </a>
            </figure>
            <figure>
                <a href="property.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#property" />
                    </svg>
                    <h4 class="brown">Property</h4>
                </a>
            </figure>
            <figure>
                <a href="investment.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#investment" />
                    </svg>
                    <h4 class="green">Investment</h4>
                </a>
            </figure>
            <figure>
                <a href="pension.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#pension" />
                    </svg>
                    <h4 class="yellow">Pension</h4>
                </a>
            </figure>
            <figure>
                <a href="business.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#business" />
                    </svg>
                    <h4 class="black">Business</h4>
                </a>
            </figure>
            <figure>
                <a href="miscellaneous.html">
                    <svg>
                        <use xlink:href="./icons/icons.svg#misc" />
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

customElements.define('qv-savebutton', QVSaveButton);

// Add active class on footer nav
// var navLinks = document.querySelectorAll("figure a");
// var i = 0;
// navLinks[i].addEventListener("click", function(e) {
//     e.preventDefault();
//     for (var i = 0; i < navLinks.length; i++) {
//         console.log(navLinks[i]);
//         navLinks[i].classList.remove('active');
//     }
//     this.classList.add('active');
// }); 