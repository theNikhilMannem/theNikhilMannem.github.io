class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="
        text-align: center;
        padding: 2rem;
        margin-top: 2rem;
        background: #0d47a1;
        color: #bbdefb;
        border-radius: 18px 18px 0 0;
        font-size: 1.1rem;
      ">
        <div>© 2025 Nikhil Mannem</div>
        <div style="margin-top: 0.5rem;">
          <a href="mailto:thenikhilmannem@gmail.com" style="color:#ff5252; margin:0 0.7rem; text-decoration:none;">Email</a>
          <a href="https://github.com/theNikhilMannem" target="_blank" style="color:#ff5252; margin:0 0.7rem; text-decoration:none;">GitHub</a>
          <a href="https://linkedin.com/in/theNikhilMannem" target="_blank" style="color:#ff5252; margin:0 0.7rem; text-decoration:none;">LinkedIn</a>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
