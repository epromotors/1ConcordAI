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
          el.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
          });
        } else if (clickAttr.includes("go('contact')")) {
          el.removeAttribute('onclick');
          el.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
          });
        } else {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
          });
        }
        el.setAttribute('data-demo-bound', 'true');
      }
    });
  }

  // Bind immediately
  bindDemoButtons();

  // Re-bind periodically (useful for dynamically rendered elements or page transitions)
  setInterval(bindDemoButtons, 1000);
})();
