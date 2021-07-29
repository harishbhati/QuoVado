class QvHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `          
            <header><!--QV-VC Header -->
                <a href="home.html">
                    <img src="images/quovado.png" alt="QuoVado">
                </header>
            </a>
        `
    }
}

customElements.define('qv-headervc', QvHeader)