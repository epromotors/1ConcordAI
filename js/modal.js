(function() {
  // ── Inject CSS Styles ──
  const style = document.createElement('style');
  style.textContent = `
    .demo-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(22, 35, 43, 0.88);
      backdrop-filter: blur(12px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .demo-modal-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }
    .demo-modal-container {
      background: rgba(4, 47, 52, 0.98);
      border: 1.5px solid var(--accent, #B5F2DB);
      border-radius: 20px;
      max-width: 540px;
      width: 90%;
      padding: 32px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.5), 0 0 40px rgba(181, 242, 219, 0.15);
      position: relative;
      transform: translateY(20px) scale(0.95);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .demo-modal-overlay.open .demo-modal-container {
      transform: translateY(0) scale(1);
    }
    .demo-modal-close {
      position: absolute;
      top: 18px;
      right: 18px;
      background: none;
      border: none;
      color: rgba(255,255,255,0.6);
      font-size: 24px;
      cursor: pointer;
      transition: color 0.2s;
      line-height: 1;
    }
    .demo-modal-close:hover {
      color: var(--accent, #B5F2DB);
    }
    .demo-modal-header {
      text-align: center;
      margin-bottom: 24px;
    }
    .demo-modal-title {
      font-family: 'Space Grotesk', 'Manrope', sans-serif;
      font-size: 26px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 6px;
    }
    .demo-modal-subtitle {
      font-size: 13.5px;
      color: rgba(228, 238, 240, 0.7);
    }
    .demo-modal-form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .demo-modal-form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    @media (max-width: 480px) {
      .demo-modal-form-row {
        grid-template-columns: 1fr;
      }
    }
    .demo-modal-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .demo-modal-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(255,255,255,0.75);
    }
    .demo-modal-input {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
      padding: 10px 14px;
      color: #fff;
      font-family: inherit;
      font-size: 13.5px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .demo-modal-input:focus {
      border-color: var(--accent, #B5F2DB);
      box-shadow: 0 0 8px rgba(181, 242, 219, 0.25);
      background: rgba(255,255,255,0.05);
    }
    .demo-modal-btn {
      background: var(--gold, #FFC933);
      color: #16232B;
      font-weight: 700;
      border: none;
      border-radius: 8px;
      padding: 12px;
      font-size: 14.5px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 6px;
    }
    .demo-modal-btn:hover {
      background: #ffe082;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 201, 51, 0.25);
    }
    .demo-modal-success {
      text-align: center;
      padding: 30px 10px;
      display: none;
    }
    .demo-modal-success-icon {
      font-size: 48px;
      color: var(--accent, #B5F2DB);
      margin-bottom: 16px;
      animation: demoScaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes demoScaleIn {
      from { transform: scale(0); }
      to { transform: scale(1); }
    }
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(22, 35, 43, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(181, 242, 219, 0.3);
      color: #B5F2DB;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transform: translateY(15px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    .back-to-top.visible {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    .back-to-top:hover {
      background: rgba(22, 35, 43, 0.95);
      border-color: #FFC933;
      color: #FFC933;
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(255, 201, 51, 0.35);
    }
    .back-to-top svg {
      width: 20px;
      height: 20px;
      transition: transform 0.2s ease;
    }
    .back-to-top:hover svg {
      transform: translateY(-2px);
    }
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #25D366;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9998;
      opacity: 1;
      pointer-events: auto;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    .whatsapp-float.shift-up {
      bottom: 90px;
    }
    .whatsapp-float:hover {
      background: #128C7E;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45);
      color: #fff;
    }
    .whatsapp-float svg {
      width: 22px;
      height: 22px;
    }
    @media (max-width: 768px) {
      .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
      .back-to-top svg {
        width: 18px;
        height: 18px;
      }
      .whatsapp-float {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
      .whatsapp-float.shift-up {
        bottom: 72px;
      }
      .whatsapp-float svg {
        width: 18px;
        height: 18px;
      }
    }
  `;
  document.head.appendChild(style);

  // ── Inject Modal HTML ──
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'demo-modal-overlay';
  modalOverlay.id = 'demoModal';

  modalOverlay.innerHTML = `
    <div class="demo-modal-container">
      <button class="demo-modal-close" id="closeDemoModal">✕</button>
      
      <div id="demoModalFormContent">
        <div class="demo-modal-header">
          <h3 class="demo-modal-title">Book a Live Demo</h3>
          <p class="demo-modal-subtitle">Experience autonomous enterprise operations firsthand</p>
        </div>
        
        <form class="demo-modal-form" id="demoModalForm">
          <div class="demo-modal-form-row">
            <div class="demo-modal-group">
              <label class="demo-modal-label">First name</label>
              <input class="demo-modal-input" type="text" placeholder="e.g. Aisha" required />
            </div>
            <div class="demo-modal-group">
              <label class="demo-modal-label">Last name</label>
              <input class="demo-modal-input" type="text" placeholder="e.g. Verma" required />
            </div>
          </div>
          
          <div class="demo-modal-group">
            <label class="demo-modal-label">Work email</label>
            <input class="demo-modal-input" type="email" placeholder="e.g. aisha.v@novabank.ae" required />
          </div>
          
          <div class="demo-modal-group">
            <label class="demo-modal-label">Company size</label>
            <select class="demo-modal-input" style="color: rgba(255,255,255,0.7);" required>
              <option value="" style="background: #042F34; color: #fff;">Select range...</option>
              <option style="background: #042F34; color: #fff;">&lt; 100 employees</option>
              <option style="background: #042F34; color: #fff;">100 – 500 employees</option>
              <option style="background: #042F34; color: #fff;">500 – 2,000 employees</option>
              <option style="background: #042F34; color: #fff;">2,000+ employees</option>
            </select>
          </div>
          
          <div class="demo-modal-group">
            <label class="demo-modal-label">Primary deployment interest</label>
            <select class="demo-modal-input" style="color: rgba(255,255,255,0.7);" required>
              <option value="" style="background: #042F34; color: #fff;">Select primary use case...</option>
              <option style="background: #042F34; color: #fff;">IT Operations / Service Desk</option>
              <option style="background: #042F34; color: #fff;">Security Operations</option>
              <option style="background: #042F34; color: #fff;">Identity &amp; Access Management</option>
              <option style="background: #042F34; color: #fff;">Cloud Operations</option>
              <option style="background: #042F34; color: #fff;">Compliance &amp; Governance</option>
              <option style="background: #042F34; color: #fff;">Full platform — all domains</option>
            </select>
          </div>
          
          <button class="demo-modal-btn" type="submit">Submit Demo Request</button>
        </form>
      </div>

      <div class="demo-modal-success" id="demoModalSuccess">
        <div class="demo-modal-success-icon">✓</div>
        <h3 class="demo-modal-title" style="color: var(--accent, #B5F2DB);">Request Received</h3>
        <p class="demo-modal-subtitle" style="margin-top: 8px;">Our team in Dubai will reach out within 4 business hours to schedule your live demo.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  // ── Modal Actions ──
  const closeBtn = document.getElementById('closeDemoModal');
  const form = document.getElementById('demoModalForm');
  const formContent = document.getElementById('demoModalFormContent');
  const successContent = document.getElementById('demoModalSuccess');

  function openModal() {
    formContent.style.display = 'block';
    successContent.style.display = 'none';
    form.reset();
    modalOverlay.classList.add('open');
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
  }

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (typeof gsap !== 'undefined') {
      gsap.to(formContent, {
        opacity: 0,
        y: -15,
        duration: 0.35,
        onComplete: () => {
          formContent.style.display = 'none';
          formContent.style.opacity = 1;
          formContent.style.transform = 'none';
          
          successContent.style.display = 'block';
          gsap.fromTo(successContent, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4 }
          );
        }
      });
    } else {
      formContent.style.display = 'none';
      successContent.style.display = 'block';
    }
  });

  // Expose function globally
  window.openBookDemoModal = openModal;

  // ── Intercept and Bind Click Events on matching buttons ──
  function bindDemoButtons() {
    document.querySelectorAll('button, a, span').forEach((el) => {
      // Check if it's already bound to avoid duplicates
      if (el.getAttribute('data-demo-bound') === 'true') return;

      const txt = (el.textContent || '').trim().toLowerCase();
      const clickAttr = el.getAttribute('onclick') || '';
      const hrefAttr = el.getAttribute('href') || '';

      const matchesText = txt.includes('book a demo') || 
                          txt.includes('book demo') || 
                          txt.includes('book a live demo') ||
                          txt.includes('contact sales');
                          
      const matchesAction = clickAttr.includes("go('contact')") || 
                            hrefAttr.includes("contact.html");

      if (matchesText || (matchesAction && (txt.includes('demo') || txt.includes('get started')))) {
        // Remove or override standard clicks/hrefs
        if (hrefAttr && hrefAttr.includes("contact.html")) {
          el.setAttribute('href', '#');
        }
        
        // Clear both inline onclick attribute and dynamically registered onclick properties
        el.removeAttribute('onclick');
        el.onclick = null;

        el.addEventListener('click', (e) => {
          e.preventDefault();
          openModal();
        });
        el.setAttribute('data-demo-bound', 'true');
      }
    });
  }

  // Bind immediately
  bindDemoButtons();

  // Re-bind periodically (useful for dynamically rendered elements or page transitions)
  setInterval(bindDemoButtons, 1000);

  // ── Inject Back to Top and WhatsApp Buttons ──
  function initFloatingButtons() {
    if (document.getElementById('back-to-top')) return;

    // 1. Back to Top Button
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    `;
    document.body.appendChild(btn);

    // 2. WhatsApp Button
    const wa = document.createElement('a');
    wa.id = 'whatsapp-float';
    wa.className = 'whatsapp-float';
    wa.href = 'https://wa.me/971501234567'; // UAE WhatsApp number
    wa.target = '_blank';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 496l133.9-35.1c32.7 17.8 69.4 27.2 107.1 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 453c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-79.8 20.9 21.3-77.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
    `;
    document.body.appendChild(wa);

    // Scroll listener to reveal/hide back-to-top and shift WhatsApp up/down
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
        wa.classList.add('shift-up');
      } else {
        btn.classList.remove('visible');
        wa.classList.remove('shift-up');
      }
    }, { passive: true });

    // Smooth scroll to top on click
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize immediately or on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingButtons);
  } else {
    initFloatingButtons();
  }
})();
