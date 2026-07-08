/* ══════════════════════════════════════════════
   ONECONCORD AI — AGENTS PAGE CODE ENGINE
   Scoped to agents page interactions & overrides
   ══════════════════════════════════════════════ */

// Override the global buildAgentGrid function in index.js
window.buildAgentGrid = function() {
  var container = document.getElementById('agentGrid');
  if (!container || container.dataset.built) return;
  container.dataset.built = '1';

  container.innerHTML = ''; // Clear container

  // Create grid
  var grid = document.createElement('div');
  grid.className = 'agents-bento-grid';

  // Config mapping domains to colors and cards theme
  var domainMap = {
    'IT & Operations': { theme: 'it-card', domCode: 'it', badgeBg: 'rgba(181,242,219,0.1)', badgeColor: 'var(--accent)' },
    'Security & Cloud': { theme: 'sec-card', domCode: 'sec', badgeBg: 'rgba(228,238,240,0.1)', badgeColor: '#E4EEF0' },
    'Reporting & Compliance': { theme: 'compliance-card', domCode: 'compliance', badgeBg: 'rgba(255,201,51,0.15)', badgeColor: 'var(--gold)' }
  };

  // 12 Agents in specific bento span configuration
  var bentoConfig = {
    'SD': { span: 'col-span-2', visual: '<div class="agent-visual"><div class="agent-dotted-grid"></div><div class="sd-terminal" id="agent-sd-terminal"></div></div>' },
    'IM': { span: 'col-span-1', visual: '' },
    'RC': { span: 'col-span-1', visual: '' },
    'SO': { span: 'col-span-2', visual: '<div class="agent-visual"><div class="agent-dotted-grid"></div><div class="so-terminal" id="agent-so-terminal"></div></div>' },
    'IA': { span: 'col-span-1', visual: '' },
    'CO': { span: 'col-span-1', visual: '' },
    'CM': { span: 'col-span-1', visual: '' },
    'TC': { span: 'col-span-2', visual: '<div class="agent-visual"><div class="agent-dotted-grid"></div><div class="tc-grid" id="agent-tc-grid"></div><div class="tc-scan-status" id="agent-tc-status">SYSTEM STATUS: ASSETS MONITORING ACTIVE</div></div>' },
    'CG': { span: 'col-span-1', visual: '' },
    'KI': { span: 'col-span-1', visual: '' },
    'AD': { span: 'col-span-1', visual: '' },
    'EI': { span: 'col-span-1', visual: '' }
  };

  // Reorder AGENTS to match bento rows perfectly
  // Row 1: SD (2), IM (1)
  // Row 2: RC (1), SO (2)
  // Row 3: IA (1), CO (1), CM (1)
  // Row 4: TC (2), CG (1)
  // Row 5: KI (1), AD (1), EI (1)
  var order = ['SD', 'IM', 'RC', 'SO', 'IA', 'CO', 'CM', 'TC', 'CG', 'KI', 'AD', 'EI'];
  var orderedAgents = [];
  order.forEach(function(code) {
    if (typeof AGENTS !== 'undefined') {
      var a = AGENTS.find(function(agent) { return agent.code === code; });
      if (a) orderedAgents.push(a);
    }
  });

  orderedAgents.forEach(function(a) {
    var cfg = domainMap[a.domain] || { theme: '', domCode: '', badgeBg: 'rgba(255,255,255,0.05)', badgeColor: '#fff' };
    var bento = bentoConfig[a.code] || { span: 'col-span-1', visual: '' };

    var card = document.createElement('div');
    card.className = 'agent-bento-card ' + bento.span + ' ' + cfg.theme;
    card.setAttribute('data-dom', cfg.domCode);
    card.setAttribute('data-code', a.code);

    var cardIcon = (typeof AGENT_ICONS !== 'undefined' && AGENT_ICONS[a.code]) 
      ? AGENT_ICONS[a.code] 
      : '<i data-lucide="cpu" style="width:18px;height:18px"></i>';

    card.innerHTML = '<div>'
      + '  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px">'
      + '    <div style="width:38px; height:38px; border-radius:9px; background:linear-gradient(135deg, rgba(4,47,52,0.4), rgba(22,35,43,0.5)); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; color:' + cfg.badgeColor + '">'
      +        cardIcon
      + '    </div>'
      + '    <div style="text-align:right">'
      + '      <span style="font-family:var(--mono); font-size:14px; font-weight:700; color:' + cfg.badgeColor + '">' + a.stat + '</span>'
      + '      <span style="font-size:10.5px; color:var(--text-3); display:block; margin-top:2px">' + a.lbl + '</span>'
      + '    </div>'
      + '  </div>'
      + '  <h3 style="font-size:15.5px; font-weight:700; color:var(--text-1); margin:0 0 6px 0">' + a.name + '</h3>'
      + '  <span style="display:inline-block; font-size:9.5px; font-weight:700; letter-spacing:0.6px; background:' + cfg.badgeBg + '; border:1px solid ' + cfg.badgeColor + '2b; color:' + cfg.badgeColor + '; padding:2px 8px; border-radius:12px; margin-bottom:10px; text-transform:uppercase">' + a.domain + '</span>'
      + '  <p style="font-size:12.5px; color:var(--text-2); line-height:1.55; margin:0">' + a.desc + '</p>'
      + '</div>'
      + bento.visual;

    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Animate cards in via GSAP stagger (bypasses the old initFades setup)
  if (typeof gsap !== 'undefined') {
    var cards = grid.querySelectorAll('.agent-bento-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power2.out', delay: 0.05 }
    );
  } else {
    // Fallback: just make them visible
    var fallbackCards = grid.querySelectorAll('.agent-bento-card');
    fallbackCards.forEach(function(c) { c.style.opacity = '1'; c.style.transform = 'none'; });
  }

  // Initialize filter tabs logic
  initAgentTabs();

  // Run the widgets simulations
  startSDTerminal();
  startSOTerminal();
  startTCGrid();

  // Re-run lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
};

// Override buildAgentExtras in index.js
window.buildAgentExtras = function() {
  var impactGrid = document.getElementById('agentImpactGrid');
  if (impactGrid && !impactGrid.dataset.built) {
    impactGrid.dataset.built = '1';
    impactGrid.innerHTML = '';
    impactGrid.className = 'bento-grid';
    
    var impacts = [
      {num:'$650K+',lbl:'Annual savings per customer',sub:'Operational cost reduction'},
      {num:'78%',lbl:'Autonomous resolution rate',sub:'Across all IT agent actions'},
      {num:'94%',lbl:'Compliance score maintained',sub:'Continuous control monitoring'},
      {num:'94%',lbl:'Security alerts auto-contained',sub:'Without human SOC intervention'},
      {num:'100%',lbl:'Asset visibility target',sub:'No endpoint, server, or workload unmonitored'},
      {num:'<48h',lbl:'Compliance gap to remediation',sub:'Detect → assign → close'},
      {num:'70+',lbl:'Connectors out of the box',sub:'ServiceNow, Jira, Workday, AWS & more'},
      {num:'5 days',lbl:'Contract to first live action',sub:'Fastest enterprise onboarding in the market'},
    ];
    impacts.forEach(function(imp) {
      var card = document.createElement('div');
      card.className = 'bento-card b-span-1';
      card.style.cssText = 'text-align:center;padding:26px 18px;justify-content:center;';
      card.innerHTML = '<div style="font-family:var(--mono);font-size:28px;font-weight:800;color:var(--accent);line-height:1;margin-bottom:10px">' + imp.num + '</div>'
        + '<div style="font-size:13.5px;font-weight:700;color:var(--text-1);margin-bottom:6px">' + imp.lbl + '</div>'
        + '<div style="font-size:12px;color:var(--text-3);line-height:1.4">' + imp.sub + '</div>';
      impactGrid.appendChild(card);
    });
    // Animate impact cards
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(impactGrid.querySelectorAll('.bento-card'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      impactGrid.querySelectorAll('.bento-card').forEach(function(c) { c.style.opacity = '1'; });
    }
  }

  var band = document.getElementById('integrationBand');
  if (band && !band.dataset.built) {
    band.dataset.built = '1';
    band.innerHTML = '';
    var integrations = ['ServiceNow','Jira','Workday','Microsoft Entra ID','Microsoft 365','AWS','Azure','GCP','Slack','Teams','Okta','CrowdStrike','SentinelOne','Splunk','Tenable','Qualys','Datadog','PagerDuty','GitHub','GitLab','SAP','Oracle ERP','NetSuite','Coupa','Ariba','Zoom','DocuSign','Freshservice','Zendesk','Intune'];
    integrations.forEach(function(name) {
      var pill = document.createElement('div');
      pill.className = 'cbadge';
      pill.style.cssText = 'font-size:12px;padding:8px 14px;background:rgba(4,47,52,0.4);border:1px solid rgba(255,255,255,0.06);border-radius:20px;cursor:pointer;transition:all 0.3s ease;';
      pill.textContent = name;
      pill.onmouseenter = function() {
        this.style.borderColor = 'var(--accent)';
        this.style.background = 'rgba(181,242,219,0.1)';
        this.style.transform = 'translateY(-1px)';
      };
      pill.onmouseleave = function() {
        this.style.borderColor = 'rgba(255,255,255,0.06)';
        this.style.background = 'rgba(4,47,52,0.4)';
        this.style.transform = 'none';
      };
      band.appendChild(pill);
    });
    // Animate integration pills
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(band.querySelectorAll('.cbadge'),
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.025, ease: 'power2.out', delay: 0.15 }
      );
    } else {
      band.querySelectorAll('.cbadge').forEach(function(p) { p.style.opacity = '1'; });
    }
  }
};

/* ── INTERACTIVE FILTERING ──────────────────────────────── */
function initAgentTabs() {
  var tabs = document.querySelectorAll('.agent-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
      var filter = this.getAttribute('data-filter');
      
      var cards = document.querySelectorAll('.agent-bento-card');
      cards.forEach(function(card) {
        var dom = card.getAttribute('data-dom');
        var code = card.getAttribute('data-code');
        
        if (filter === 'all' || dom === filter) {
          card.classList.remove('hidden');
          // Restore spans for 'all'
          if (filter === 'all') {
            if (code === 'SD' || code === 'SO' || code === 'TC') {
              card.classList.remove('col-span-1');
              card.classList.add('col-span-2');
            }
          } else {
            // Strip spans for clean uniform list
            card.classList.remove('col-span-2');
            card.classList.add('col-span-1');
          }
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Refresh ScrollTrigger so layout aligns
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  });
}

/* ── LIVE SIMULATORS ─────────────────────────────────────── */
function startSDTerminal() {
  var term = document.getElementById('agent-sd-terminal');
  if (!term) return;

  var lines = [
    '[09:42:15] Incoming request: VPN reset (Alice)',
    '[09:42:16] Policy check: AUTO_EXECUTE (Score: 0.14)',
    '[09:42:18] Status: VPN certificate re-keyed successfully',
    '[09:42:19] Request closed: Resolved in 3.8 seconds',
    '[09:43:04] Incoming request: Provision Photoshop (Bob)',
    '[09:43:05] Policy check: REQUIRE_APPROVAL (Score: 0.72)',
    '[09:43:08] Status: Routed request to Finance Manager',
    '[09:43:10] Request pending: Waiting for authorisation'
  ];

  var lineIdx = 0;
  term.innerHTML = '';

  function printNext() {
    if (!term || !document.getElementById('agent-sd-terminal')) return;
    if (term.children.length > 5) {
      term.removeChild(term.firstChild);
    }
    var div = document.createElement('div');
    div.className = 'agent-terminal-line';
    div.textContent = lines[lineIdx];
    term.appendChild(div);

    lineIdx = (lineIdx + 1) % lines.length;
    setTimeout(printNext, 2400);
  }
  printNext();
}

function startSOTerminal() {
  var term = document.getElementById('agent-so-terminal');
  if (!term) return;

  var lines = [
    '[SOC-1102] ALERT: Ransomware execution (WS-FIN-0042)',
    '[SOC-1102] Policy check: AUTO_EXECUTE (Score: 0.94)',
    '[SOC-1102] CONTAINMENT: Isolating endpoint network...',
    '[SOC-1102] SUCCESS: WS-FIN-0042 isolated in 1.8s',
    '[SOC-1105] ALERT: Phishing campaign detected',
    '[SOC-1105] CONTAINMENT: Purging mailboxes (47 receipts)',
    '[SOC-1105] SUCCESS: 47 emails retracted from inboxes',
    '[SOC-1108] ALERT: Port scan detected on API Gateway',
    '[SOC-1108] CONTAINMENT: Blocking IP source 198.51.100.42',
    '[SOC-1108] SUCCESS: Firewall access rules updated'
  ];

  var lineIdx = 0;
  term.innerHTML = '';

  function printNext() {
    if (!term || !document.getElementById('agent-so-terminal')) return;
    if (term.children.length > 5) {
      term.removeChild(term.firstChild);
    }
    var div = document.createElement('div');
    div.className = 'agent-terminal-line';
    div.textContent = lines[lineIdx];
    term.appendChild(div);

    lineIdx = (lineIdx + 1) % lines.length;
    setTimeout(printNext, 2500);
  }
  printNext();
}

function startTCGrid() {
  var grid = document.getElementById('agent-tc-grid');
  var status = document.getElementById('agent-tc-status');
  if (!grid || !status) return;

  grid.innerHTML = '';
  // Create 12 boxes representing hosts
  for (var i = 0; i < 12; i++) {
    var box = document.createElement('div');
    box.className = 'tc-box';
    box.innerHTML = '<i data-lucide="server" style="width:11px;height:11px;color:#B5F2DB"></i>';
    grid.appendChild(box);
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ container: grid });
  }

  function runScanCycle() {
    if (!grid || !document.getElementById('agent-tc-grid')) return;
    
    var boxes = grid.querySelectorAll('.tc-box');
    boxes.forEach(function(b) {
      b.className = 'tc-box';
      var icon = b.querySelector('i');
      if (icon) icon.style.color = '#B5F2DB';
    });
    status.textContent = 'SYSTEM STATUS: 12/12 ASSETS COVERED';
    status.style.color = 'var(--text-3)';

    setTimeout(function() {
      if (!grid || !document.getElementById('agent-tc-grid')) return;
      var targetIdx = Math.floor(Math.random() * 12);
      var targetBox = boxes[targetIdx];
      if (targetBox) {
        targetBox.classList.add('unmonitored');
        var icon = targetBox.querySelector('i');
        if (icon) icon.style.color = 'var(--gold)';
        status.textContent = '[WARN] Blind spot detected: Host WS-DEV-00' + (targetIdx+1) + ' missing EDR agent';
        status.style.color = 'var(--gold)';
      }

      setTimeout(function() {
        if (!grid || !document.getElementById('agent-tc-grid')) return;
        if (targetBox) {
          targetBox.classList.remove('unmonitored');
          var icon = targetBox.querySelector('i');
          if (icon) icon.style.color = '#B5F2DB';
          status.textContent = '[FIXED] EDR agent deployed. Host WS-DEV-00' + (targetIdx+1) + ' fully covered';
          status.style.color = 'var(--accent)';
        }
      }, 2500);

    }, 1500);

    setTimeout(runScanCycle, 6000);
  }

  runScanCycle();
}
