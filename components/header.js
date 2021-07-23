class QvHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `          
            <header><!--QV-LC Header -->
                <img src="images/quovado.png" alt="QuoVado">
            </header>
        `
    }
}

customElements.define('qv-header', QvHeader)