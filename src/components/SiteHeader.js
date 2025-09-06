class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header style="
        background: #0d47a1;
        padding: 1.2rem 2rem;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
        border-radius: 0 0 18px 18px;
        margin-bottom: 2.5rem;
      ">
        <div style="font-size: 2rem; font-weight: 700; color: #fff; letter-spacing: -1px;">
          Nikhil Mannem
        </div>
        <nav style="margin-top: 0.7rem;">
          <a href="index.html" style="color:#bbdefb; text-decoration:none; margin:0 1.2rem; font-weight:500;">Home</a>
          <a href="projects.html" style="color:#bbdefb; text-decoration:none; margin:0 1.2rem; font-weight:500;">Projects</a>
          <a href="blog.html" style="color:#bbdefb; text-decoration:none; margin:0 1.2rem; font-weight:500;">Blog</a>
          <a href="resume.pdf" target="_blank" style="color:#bbdefb; text-decoration:none; margin:0 1.2rem; font-weight:500;">Resume</a>
          <a href="https://github.com/theNikhilMannem" target="_blank" style="color:#bbdefb; text-decoration:none; margin:0 1.2rem; font-weight:500;">GitHub</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('site-header', SiteHeader);
