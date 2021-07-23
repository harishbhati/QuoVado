class QvSidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <aside><!--Cash sidebar -->
                <section>
                    <input type="text" placeholder="Search">
                    <button class="search" type="button"><i></i></button>
                </section>
                <article>
                    <h2>Life Story</h2>
                    <details open><!--life story -->
                        <summary>John Smith</summary>
                        <p>50 Years old</p>
                    </details>
                    <details open><!--life story -->
                        <summary>Residency</summary>
                        <a href="javascript:void (0);">[edit]</a>
                        <p>Singapore</p>
                        <p>10 Years</p>
                    </details>
                    <details open><!--life story -->
                        <summary>Family</summary>
                        <a href="javascript:void (0);">[edit]</a>
                        <p>Married</p>
                        <p>3 Children</p>
                    </details>
                    <details open> <!--life story -->
                        <summary>Work</summary>
                        <a href="javascript:void (0);">[edit]</a>
                        <p>Dell Technology</p>
                        <p>Sales</p>
                    </details>
                    <details open><!--life story -->
                        <summary>Education</summary>
                        <a href="javascript:void (0);">[edit]</a>
                        <p>Dell Technology</p>
                        <p>Sales</p>
                    </details>
                </article>
            </aside>
        `
    }
}

customElements.define('qv-sidebar', QvSidebar);