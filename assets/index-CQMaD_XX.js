(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();class l extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `}}customElements.define("site-header",l);class s extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `}}customElements.define("site-footer",s);
