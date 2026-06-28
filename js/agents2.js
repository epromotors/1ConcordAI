/* ═══════════════════════════════════════════════════════════════════════
   AGENTS PAGE v2 — JavaScript
   All code scoped to #pg-agents. No side-effects on other pages.
   ═══════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── AGENT DATA ─────────────────────────────────────────────────────── */
  var AGENTS_V2 = [
    {
      code: 'sd', domain: 'it', domainLabel: 'IT & Operations',
      name: 'Service Desk Agent',
      desc: 'Triages, routes, and resolves Tier-1 & Tier-2 incidents autonomously. Escalates with full context when human judgment is needed.',
      stat: '4.2min', statLbl: 'Avg. resolution', icon: '🎯',
      chips: ['Incident triage', 'Auto-escalation', 'SLA tracking'],
      span: 'ag-span-2', hasTerminal: true,
      termLines: [
        { cls: 'ag-term-prompt', txt: '▸ incident #TKT-4821 received' },
        { cls: 'ag-term-info',   txt: '  classifier → P2 / Software / Access' },
        { cls: 'ag-term-ok',     txt: '  routed → identity_agent:provision' },
        { cls: 'ag-term-prompt', txt: '▸ auto-resolved in 00:04:17' },
        { cls: 'ag-term-ok',     txt: '  user notified • CMDB updated' },
      ]
    },
    {
      code: 'am', domain: 'it', domainLabel: 'IT & Operations',
      name: 'Asset Discovery Agent',
      desc: 'Maintains live CMDB visibility across endpoints, servers, containers, and cloud workloads without agent sprawl.',
      stat: '100%', statLbl: 'Asset coverage', icon: '🖥',
      chips: ['CMDB sync', 'Shadow IT detection', 'Cloud assets'],
      span: '',
    },
    {
      code: 'im', domain: 'it', domainLabel: 'IT & Operations',
      name: 'Incident Management Agent',
      desc: 'Orchestrates war-room setup, cross-team notifications, root-cause timelines, and post-incident reviews automatically.',
      stat: '<4min', statLbl: 'War room spun up', icon: '🚨',
      chips: ['Root cause analysis', 'Timeline generation', 'Post-mortems'],
      span: '',
    },
    {
      code: 'so', domain: 'sec', domainLabel: 'Security & Cloud',
      name: 'Security Operations Agent',
      desc: 'Monitors SIEM streams, correlates IOCs, auto-contains threats, and routes verified incidents to response teams — 24/7.',
      stat: '94%', statLbl: 'Auto-contained', icon: '🛡',
      chips: ['SIEM integration', 'IOC correlation', 'Auto-containment'],
      span: 'ag-span-2', hasScan: true,
    },
    {
      code: 'ia', domain: 'sec', domainLabel: 'Security & Cloud',
      name: 'Identity & Access Agent',
      desc: 'Governs provisioning, reviews access rights continuously, revokes stale privileges, and enforces least-privilege policies.',
      stat: '78%', statLbl: 'Access risks auto-resolved', icon: '🔑',
      chips: ['PAM governance', 'Stale access review', 'Zero-trust'],
      span: '',
    },
    {
      code: 'vm', domain: 'sec', domainLabel: 'Security & Cloud',
      name: 'Vulnerability Management Agent',
      desc: 'Runs continuous scans, risk-scores CVEs by exploitability and business context, and drives remediation workflows.',
      stat: '65%', statLbl: 'Faster patch cycles', icon: '🔍',
      chips: ['CVE scoring', 'Exploit context', 'Patch orchestration'],
      span: '',
    },
    {
      code: 'cg', domain: 'comp', domainLabel: 'Reporting & Compliance',
      name: 'Compliance & Governance Agent',
      desc: 'Maps controls to frameworks (SOC 2, ISO 27001, NIST CSF, GCC), collects evidence automatically, and flags gaps before audits.',
      stat: '94%', statLbl: 'Compliance score', icon: '📋',
      chips: ['SOC 2', 'ISO 27001', 'NIST CSF', 'GCC'],
      span: 'ag-span-2',
    },
    {
      code: 'pe', domain: 'comp', domainLabel: 'Reporting & Compliance',
      name: 'Policy Engine Agent',
      desc: 'Translates business policies into machine-enforceable rules, evaluates requests in real-time, and audits policy drift.',
      stat: '100%', statLbl: 'Policy enforcement', icon: '⚖️',
      chips: ['Policy authoring', 'Real-time eval', 'Drift detection'],
      span: '',
    },
    {
      code: 'al', domain: 'comp', domainLabel: 'Reporting & Compliance',
      name: 'Audit Logger Agent',
      desc: 'Builds tamper-evident, regulator-ready audit trails across all agent actions, human approvals, and system events.',
      stat: '100%', statLbl: 'Event capture rate', icon: '📝',
      chips: ['Tamper-evident', 'SIEM export', 'Retention policy'],
      span: '',
    },
    {
      code: 'ei', domain: 'comp', domainLabel: 'Reporting & Compliance',
      name: 'Exec Intelligence Agent',
      desc: 'Synthesises operational, security, and compliance data into board-ready briefings, risk scores, and trend dashboards.',
      stat: 'Live', statLbl: 'Risk dashboard', icon: '📊',
      chips: ['Risk scoring', 'Board reports', 'Trend analysis'],
      span: '',
    },
    {
      code: 'hl', domain: 'it', domainLabel: 'IT & Operations',
      name: 'HR Lifecycle Agent',
      desc: 'Automates onboarding, offboarding, and role-change workflows across HR, IT, and security systems with zero manual steps.',
      stat: '9min', statLbl: 'Full onboarding', icon: '👤',
      chips: ['Onboarding', 'Offboarding', 'HR integration'],
      span: '',
    },
    {
      code: 'tc', domain: 'sec', domainLabel: 'Security & Cloud',
      name: 'Security Tool Coverage Agent',
      desc: 'Audits security tool deployment across every asset class, identifies coverage gaps, and orchestrates remediation.',
      stat: '100%', statLbl: 'Target coverage', icon: '🔬',
      chips: ['Coverage matrix', 'Gap analysis', 'Auto-deploy'],
      span: '',
    },
  ];

  var DOMAIN_MAP = {
    it:   { cls: 'ag-domain-it',   label: 'IT & Ops',          color: '#38bdf8' },
    sec:  { cls: 'ag-domain-sec',  label: 'Security & Cloud',  color: '#a78bfa' },
    comp: { cls: 'ag-domain-comp', label: 'Reporting & Compliance', color: '#f59e0b' },
  };

  var STATS_DATA = [
    { num: '$650K+', label: 'Annual savings per customer',       sub: 'Operational cost reduction' },
    { num: '78%',    label: 'Autonomous resolution rate',        sub: 'Across all agent actions' },
    { num: '94%',    label: 'Compliance score maintained',       sub: 'Continuous control monitoring' },
    { num: '<48h',   label: 'Compliance gap to remediation',     sub: 'Detect → assign → close' },
    { num: '70+',    label: 'Connectors out of the box',         sub: 'ServiceNow, Jira, AWS & more' },
    { num: '5 days', label: 'Contract to first live action',     sub: 'Fastest enterprise onboarding' },
    { num: '100%',   label: 'Asset visibility target',           sub: 'No endpoint left unmonitored' },
    { num: '94%',    label: 'Security alerts auto-contained',    sub: 'Without human SOC intervention' },
  ];

  var INTEGRATIONS = [
    'ServiceNow','Jira','Workday','Microsoft Entra ID','Microsoft 365','AWS','Azure','GCP','Slack',
    'Microsoft Teams','Okta','CrowdStrike','SentinelOne','Splunk','Tenable','Qualys','Datadog',
    'PagerDuty','GitHub','GitLab','SAP','Oracle ERP','NetSuite','Coupa','Ariba','Zoom','DocuSign',
    'Freshservice','Zendesk','Intune','BeyondTrust','CyberArk','Rapid7','IBM QRadar','Google Workspace',
  ];

  /* ── TERMINAL SIMULATION ─────────────────────────────────────────────── */
  function runTerminal(termBody, lines) {
    if (!termBody) return;
    var delay = 0;
    lines.forEach(function(l, i) {
      var el = document.createElement('div');
      el.className = 'ag-term-line ' + l.cls;
      el.textContent = l.txt;
      termBody.appendChild(el);
      setTimeout(function() { el.classList.add('visible'); }, delay);
      delay += 400;
    });
    // Cycle: clear and restart
    setTimeout(function() {
      var lineEls = termBody.querySelectorAll('.ag-term-line');
      lineEls.forEach(function(l) { l.classList.remove('visible'); });
      setTimeout(function() {
        termBody.innerHTML = '';
        runTerminal(termBody, lines);
      }, 800);
    }, delay + 2800);
  }

  /* ── SCAN GRID SIMULATION ──────────────────────────────────────────── */
  function runScanGrid(container) {
    if (!container) return;
    var grid = document.createElement('div');
    grid.className = 'ag-scan-grid';
    container.appendChild(grid);

    var ROWS = 6, COLS = 16;
    var cells = [];
    for (var r = 0; r < ROWS; r++) {
      for (var c = 0; c < COLS; c++) {
        var cell = document.createElement('div');
        cell.className = 'ag-scan-cell';
        grid.appendChild(cell);
        cells.push(cell);
      }
    }

    var idx = 0;
    var threatChance = 0.04;

    function tick() {
      if (idx >= cells.length) {
        // Reset after pause
        setTimeout(function() {
          cells.forEach(function(cell) { cell.className = 'ag-scan-cell'; });
          idx = 0;
          setTimeout(tick, 500);
        }, 2000);
        return;
      }
      var cell = cells[idx];
      cell.classList.add(Math.random() < threatChance ? 'threat' : 'scanned');
      idx++;
      setTimeout(tick, 35);
    }
    tick();
  }

  /* ── BUILD HERO ──────────────────────────────────────────────────────── */
  function buildHero() {
    var heroEl = document.getElementById('ag-hero');
    if (!heroEl || heroEl.dataset.built) return;
    heroEl.dataset.built = '1';

    heroEl.innerHTML = '\
      <div class="ag-hero-inner">\
        <div class="ag-hero-left">\
          <div class="ag-hero-eyebrow">Digital workers · 12 AI Agents</div>\
          <h1 class="ag-hero-heading" id="ag-hero-h1">\
            <span class="word"><span style="--wi:0">Autonomous</span></span> \
            <span class="word"><span style="--wi:1">agents.</span></span><br>\
            <span class="word"><span class="ag-grad-text" style="--wi:2">Every</span></span> \
            <span class="word"><span class="ag-grad-text" style="--wi:3">domain.</span></span>\
          </h1>\
          <p class="ag-hero-sub">Twelve agents across IT Operations, Security &amp; Cloud, and Reporting &amp; Compliance — each owning a specific operational area, operating within your policies, and coordinating with peer agents when outcomes span multiple teams.</p>\
          <div class="ag-hero-actions">\
            <button class="ag-btn-primary" onclick="go(\'contact\')">Book a live demo ↗</button>\
            <button class="ag-btn-ghost" onclick="go(\'pricing\')">See pricing →</button>\
          </div>\
        </div>\
        <div class="ag-hero-right">\
          <div class="ag-live-panel">\
            <div class="ag-live-label"><span class="ag-live-dot"></span>Live agent activity</div>\
            <div class="ag-metric-row" id="ag-metrics-area"></div>\
          </div>\
        </div>\
      </div>';

    // Build live metrics
    var metricsArea = document.getElementById('ag-metrics-area');
    if (metricsArea) {
      var metrics = [
        { icon: '🛡', bg: 'rgba(167,139,250,0.12)', num: '1,284', label: 'Threats auto-contained', change: '+12', cls: 'up' },
        { icon: '🎯', bg: 'rgba(56,189,248,0.12)',  num: '4.2m',  label: 'Avg. ticket resolution', change: 'Active', cls: 'active' },
        { icon: '📋', bg: 'rgba(245,158,11,0.12)',  num: '94.1%', label: 'Compliance score live', change: '+0.3%', cls: 'up' },
      ];
      metrics.forEach(function(m) {
        var el = document.createElement('div');
        el.className = 'ag-metric-item';
        el.innerHTML = '\
          <div class="ag-metric-icon" style="background:' + m.bg + '">' + m.icon + '</div>\
          <div class="ag-metric-body">\
            <div class="ag-metric-value" data-target-val="' + m.num + '">' + m.num + '</div>\
            <div class="ag-metric-label">' + m.label + '</div>\
          </div>\
          <div class="ag-metric-change ' + m.cls + '">' + m.change + '</div>';
        metricsArea.appendChild(el);
      });
    }

    // Trigger word animation after brief delay
    setTimeout(function() {
      var h1 = document.getElementById('ag-hero-h1');
      if (h1) h1.classList.add('ag-reveal');
    }, 150);
  }

  /* ── BUILD STICKY TABS ───────────────────────────────────────────────── */
  function buildStickyTabs() {
    var tabsEl = document.getElementById('ag-sticky-tabs');
    if (!tabsEl || tabsEl.dataset.built) return;
    tabsEl.dataset.built = '1';

    var counts = { all: AGENTS_V2.length, it: 0, sec: 0, comp: 0 };
    AGENTS_V2.forEach(function(a) { if (counts[a.domain] !== undefined) counts[a.domain]++; });

    var tabs = [
      { key: 'all',  label: 'All Agents',           count: counts.all },
      { key: 'it',   label: 'IT & Operations',       count: counts.it },
      { key: 'sec',  label: 'Security & Cloud',      count: counts.sec },
      { key: 'comp', label: 'Reporting & Compliance',count: counts.comp },
    ];

    var inner = document.createElement('div');
    inner.className = 'ag-tabs-inner';

    tabs.forEach(function(t, i) {
      if (i === 1) {
        var sep = document.createElement('div');
        sep.className = 'ag-tabs-sep';
        inner.appendChild(sep);
      }
      var btn = document.createElement('button');
      btn.className = 'ag-tab-btn' + (t.key === 'all' ? ' ag-tab-active' : '');
      btn.setAttribute('data-ag-filter', t.key);
      btn.innerHTML = t.label + ' <span class="ag-tab-count">' + t.count + '</span>';
      btn.addEventListener('click', function() {
        document.querySelectorAll('.ag-tab-btn').forEach(function(b) { b.classList.remove('ag-tab-active'); });
        btn.classList.add('ag-tab-active');
        filterAgentCards(t.key);
      });
      inner.appendChild(btn);
    });

    tabsEl.appendChild(inner);
  }

  /* ── FILTER AGENT CARDS ──────────────────────────────────────────────── */
  function filterAgentCards(filter) {
    var cards = document.querySelectorAll('[data-ag-domain]');
    cards.forEach(function(card) {
      var dom = card.getAttribute('data-ag-domain');
      if (filter === 'all' || dom === filter) {
        card.classList.remove('ag-hidden');
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(card, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        }
      } else {
        card.classList.add('ag-hidden');
      }
    });
  }

  /* ── BUILD AGENT GRID ────────────────────────────────────────────────── */
  function buildAgentGridV2() {
    var gridEl = document.getElementById('ag-bento-grid');
    if (!gridEl || gridEl.dataset.built) return;
    gridEl.dataset.built = '1';

    AGENTS_V2.forEach(function(agent) {
      var dom = DOMAIN_MAP[agent.domain] || { cls: '', label: agent.domain, color: '#14b8a6' };
      var card = document.createElement('div');
      card.className = 'ag-card ' + dom.cls + (agent.span ? ' ' + agent.span : '');
      card.setAttribute('data-ag-domain', agent.domain);

      var visual = '';
      if (agent.hasTerminal) {
        visual = '<div class="ag-card-visual ag-terminal">\
          <div class="ag-terminal-bar"><span class="ag-term-red"></span><span class="ag-term-amber"></span><span class="ag-term-green"></span></div>\
          <div class="ag-terminal-body" id="term-' + agent.code + '"></div>\
        </div>';
      } else if (agent.hasScan) {
        visual = '<div class="ag-card-visual" id="scan-' + agent.code + '" style="min-height:100px;padding:4px"></div>';
      }

      var chips = (agent.chips || []).map(function(c) {
        return '<span class="ag-chip">' + c + '</span>';
      }).join('');

      card.innerHTML = '\
        <div class="ag-card-top">\
          <div class="ag-card-icon-wrap"><span style="font-size:18px">' + agent.icon + '</span></div>\
          <div class="ag-card-stat-wrap">\
            <div class="ag-card-stat">' + agent.stat + '</div>\
            <div class="ag-card-stat-label">' + agent.statLbl + '</div>\
          </div>\
        </div>\
        <div>\
          <div class="ag-card-domain-badge">' + dom.label + '</div>\
          <h3 class="ag-card-name">' + agent.name + '</h3>\
          <p class="ag-card-desc">' + agent.desc + '</p>\
        </div>\
        <div class="ag-card-chips">' + chips + '</div>\
        ' + visual;

      gridEl.appendChild(card);
    });

    // Animate cards in
    if (typeof gsap !== 'undefined') {
      var cards = gridEl.querySelectorAll('.ag-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.055, ease: 'power2.out', delay: 0.1 }
      );
    }

    // Start terminal simulations after cards appear
    setTimeout(function() {
      AGENTS_V2.forEach(function(agent) {
        if (agent.hasTerminal && agent.termLines) {
          var body = document.getElementById('term-' + agent.code);
          if (body) runTerminal(body, agent.termLines);
        }
        if (agent.hasScan) {
          var scanContainer = document.getElementById('scan-' + agent.code);
          if (scanContainer) runScanGrid(scanContainer);
        }
      });
    }, 800);

    // Init lucide icons
    if (typeof lucide !== 'undefined') { lucide.createIcons(); }
  }

  /* ── BUILD STATS BAND ────────────────────────────────────────────────── */
  function buildStatsBand() {
    var bandEl = document.getElementById('ag-stats-grid');
    if (!bandEl || bandEl.dataset.built) return;
    bandEl.dataset.built = '1';

    STATS_DATA.forEach(function(s) {
      var card = document.createElement('div');
      card.className = 'ag-stat-card';
      card.innerHTML = '\
        <div class="ag-stat-num">' + s.num + '</div>\
        <div class="ag-stat-label">' + s.label + '</div>\
        <div class="ag-stat-sub">' + s.sub + '</div>';
      bandEl.appendChild(card);
    });

    // Animate on scroll
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: bandEl,
        start: 'top 80%',
        once: true,
        onEnter: function() {
          gsap.fromTo(bandEl.querySelectorAll('.ag-stat-card'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power2.out' }
          );
        }
      });
      // Initial hidden state
      gsap.set(bandEl.querySelectorAll('.ag-stat-card'), { opacity: 0, y: 24 });
    }
  }

  /* ── BUILD INTEGRATIONS MARQUEE ──────────────────────────────────────── */
  function buildIntegrationsSection() {
    var sectionEl = document.getElementById('ag-integrations-section');
    if (!sectionEl || sectionEl.dataset.built) return;
    sectionEl.dataset.built = '1';

    // Header
    var headerEl = document.getElementById('ag-integrations-header');
    if (headerEl) {
      headerEl.innerHTML = '\
        <div class="ag-integrations-header-left">\
          <div class="ag-section-kicker">Integrations</div>\
          <h2>70+ connectors.<br>Zero custom dev.</h2>\
          <p>Every agent connects to the tools your team already uses — out of the box, authenticated, and audited from day one.</p>\
        </div>\
        <div class="ag-integrations-header-right">\
          <div class="ag-integration-stat">\
            <div class="ag-integration-stat-num">70+</div>\
            <div class="ag-integration-stat-info">Pre-built connectors across ITSM, SIEM, HRIS, ERP, and cloud platforms</div>\
          </div>\
          <div class="ag-integration-stat">\
            <div class="ag-integration-stat-num">0</div>\
            <div class="ag-integration-stat-info">Lines of custom code needed — all config-driven, no-code setup</div>\
          </div>\
          <div class="ag-integration-stat">\
            <div class="ag-integration-stat-num">1 day</div>\
            <div class="ag-integration-stat-info">Average time to connect a new enterprise tool to the agent network</div>\
          </div>\
        </div>';
    }

    // Marquee track — duplicate for seamless loop
    var marqueeWrap = document.getElementById('ag-marquee-wrap');
    if (marqueeWrap) {
      var track = document.createElement('div');
      track.className = 'ag-marquee-track';

      function makePills(arr) {
        return arr.map(function(name) {
          var pill = document.createElement('div');
          pill.className = 'ag-integration-pill';
          pill.innerHTML = '<span class="ag-pill-dot"></span>' + name;
          return pill;
        });
      }

      // Make twice for seamless loop
      var pills1 = makePills(INTEGRATIONS);
      var pills2 = makePills(INTEGRATIONS);

      pills1.concat(pills2).forEach(function(p) { track.appendChild(p); });
      marqueeWrap.appendChild(track);
    }
  }

  /* ── BUILD WORKFLOW SECTION ──────────────────────────────────────────── */
  function buildWorkflowSection() {
    var workflowGrid = document.getElementById('ag-workflow-grid');
    if (!workflowGrid || workflowGrid.dataset.built) return;
    workflowGrid.dataset.built = '1';

    var workflows = [
      {
        icon: '🔑', name: 'Access Request Workflow', color: '#38bdf8',
        steps: [
          { badge: 'it',   label: 'Service Desk',      action: 'Request received & classified' },
          { badge: 'sec',  label: 'Identity Agent',    action: 'Validates entitlement policy' },
          { badge: 'comp', label: 'Policy Engine',     action: 'Evaluates access rules' },
          { badge: 'lead', label: 'Manager Approval',  action: 'Conditional approval routed' },
          { badge: 'sec',  label: 'Identity Agent',    action: 'Account provisioned' },
          { badge: 'comp', label: 'Audit Logger',      action: 'Immutable audit trail filed' },
        ],
        result: '⚡ 6 min auto-approved · 38 min with escalation',
      },
      {
        icon: '🚨', name: 'Security Incident Response', color: '#a78bfa',
        steps: [
          { badge: 'sec',  label: 'Security Ops',       action: 'Threat detected & IOC matched' },
          { badge: 'sec',  label: 'Identity Agent',     action: 'Account suspended immediately' },
          { badge: 'it',   label: 'Incident Mgmt',      action: 'War room spun up · Teams notified' },
          { badge: 'comp', label: 'Compliance Agent',   action: 'Breach log & evidence collected' },
          { badge: 'comp', label: 'Exec Intelligence',  action: 'Executive briefing updated' },
        ],
        result: '⚡ Total end-to-end: < 4 minutes',
      },
      {
        icon: '👤', name: 'New Employee Onboarding', color: '#f59e0b',
        steps: [
          { badge: 'lead', label: 'HR Lifecycle',       action: 'Hire confirmed in HRIS' },
          { badge: 'sec',  label: 'Identity Agent',     action: 'All accounts created & MFA enrolled' },
          { badge: 'it',   label: 'Service Desk',       action: 'Laptop enrolled & software deployed' },
          { badge: 'it',   label: 'Asset Discovery',    action: 'Device logged in CMDB' },
          { badge: 'comp', label: 'Audit Logger',       action: 'Onboarding evidence archived' },
        ],
        result: '⚡ Full onboarding complete: 9 minutes',
      },
    ];

    workflows.forEach(function(wf) {
      var card = document.createElement('div');
      card.className = 'ag-workflow-card';
      card.style.setProperty('--wf-color', wf.color);

      var stepsHtml = wf.steps.map(function(s, i) {
        var arrow = i < wf.steps.length - 1 ? '<span class="ag-wf-arrow">↓</span>' : '';
        return '\
          <div class="ag-wf-step">\
            <span class="ag-wf-step-badge ' + s.badge + '">' + s.label + '</span>\
            <span class="ag-wf-step-action">' + s.action + '</span>\
          </div>' + arrow;
      }).join('');

      card.innerHTML = '\
        <div class="ag-wf-title-row">\
          <div class="ag-wf-icon">' + wf.icon + '</div>\
          <div class="ag-wf-name">' + wf.name + '</div>\
        </div>\
        <div class="ag-wf-steps">' + stepsHtml + '</div>\
        <div class="ag-wf-result">' + wf.result + '</div>';

      workflowGrid.appendChild(card);
    });

    // Animate on scroll
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.set(workflowGrid.querySelectorAll('.ag-workflow-card'), { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: workflowGrid,
        start: 'top 80%',
        once: true,
        onEnter: function() {
          gsap.to(workflowGrid.querySelectorAll('.ag-workflow-card'),
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out' }
          );
        }
      });
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
     CUBE SECTION — Qount.io inspired 3D agent deep-dive
     Left: CSS 3D cube cycling through agents
     Right: Accordion list — click to jump to that agent on cube
     ══════════════════════════════════════════════════════════════════════ */
  function buildCubeSection() {
    var wrap = document.getElementById('ag-cube-section');
    if (!wrap) return;

    var CUBE_FACES = ['front','back','right','left','top','bottom'];
    /* Each face maps to agentIndex (0..5 on front half, 6..11 on next rotation) */
    /* We'll show all 12 by cycling 2 full cube rotations */

    var domainColors = {
      it:   { dot: '#38bdf8', badge_bg: 'rgba(56,189,248,0.08)', badge_color: '#38bdf8' },
      sec:  { dot: '#a78bfa', badge_bg: 'rgba(167,139,250,0.08)', badge_color: '#a78bfa' },
      comp: { dot: '#f59e0b', badge_bg: 'rgba(245,158,11,0.08)', badge_color: '#f59e0b' },
    };

    /* ── Build the cube face HTML ──── */
    function makeFaceHTML(agent, faceClass) {
      var dc = domainColors[agent.domain];
      var dm = DOMAIN_MAP[agent.domain];
      return '<div class="ag-cube-face ' + faceClass + ' face-' + agent.domain + '">' +
        '<div class="ag-face-domain-bar">' +
          '<div class="ag-face-domain-dot"></div>' +
          '<div class="ag-face-domain-label">' + dm.label + '</div>' +
        '</div>' +
        '<div class="ag-face-icon">' + agent.icon + '</div>' +
        '<div class="ag-face-name">' + agent.name + '</div>' +
        '<div class="ag-face-stat-row">' +
          '<span class="ag-face-stat-num">' + agent.stat + '</span>' +
          '<span class="ag-face-stat-lbl">' + agent.statLbl + '</span>' +
        '</div>' +
        '<div class="ag-face-chips">' +
          (agent.chips || []).slice(0, 3).map(function(c) {
            return '<span class="ag-face-chip">' + c + '</span>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    /* ── Build the section ──── */
    wrap.innerHTML = [
      /* BG orbs */
      '<div class="ag-cube-bg-orb orb1"></div>',
      '<div class="ag-cube-bg-orb orb2"></div>',

      /* Intro */
      '<div class="ag-cube-intro">',
        '<div class="ag-section-kicker">Agent intelligence</div>',
        '<h2>Every agent. <em>Fully explored.</em></h2>',
        '<p>Click any agent to see its operational role, key metrics, and domain context — visualised in 3D.</p>',
      '</div>',

      /* Main layout */
      '<div class="ag-cube-layout">',

        /* LEFT: cube */
        '<div class="ag-cube-scene-wrap">',
          '<div class="ag-cube-scene">',
            '<div class="ag-cube-3d" id="ag-cube-3d">',
              makeFaceHTML(AGENTS_V2[0], 'face-front'),
              makeFaceHTML(AGENTS_V2[1], 'face-back'),
              makeFaceHTML(AGENTS_V2[2], 'face-right'),
              makeFaceHTML(AGENTS_V2[3], 'face-left'),
              makeFaceHTML(AGENTS_V2[4], 'face-top'),
              makeFaceHTML(AGENTS_V2[5], 'face-bottom'),
            '</div>',
          '</div>',
          '<div class="ag-cube-shadow" id="ag-cube-shadow"></div>',
          '<div class="ag-cube-rotating-label" id="ag-cube-label">SERVICE DESK AGENT</div>',
          '<nav class="ag-cube-nav" id="ag-cube-nav">',
            AGENTS_V2.map(function(a, i) {
              return '<button class="ag-cube-dot' + (i === 0 ? ' active' : '') + '" data-domain="' + a.domain + '" data-idx="' + i + '" title="' + a.name + '"></button>';
            }).join(''),
          '</nav>',
        '</div>',

        /* RIGHT: accordion list */
        '<div class="ag-cube-list" id="ag-cube-list">',
          AGENTS_V2.map(function(a, i) {
            var dc = domainColors[a.domain];
            var dm = DOMAIN_MAP[a.domain];
            return '<div class="ag-cube-item' + (i === 0 ? ' active' : '') + '" data-domain="' + a.domain + '" data-idx="' + i + '">' +
              '<div class="ag-cube-item-head">' +
                '<div class="ag-item-icon-wrap">' + a.icon + '</div>' +
                '<div class="ag-item-head-text">' +
                  '<div class="ag-item-name">' + a.name + '</div>' +
                  '<span class="ag-item-domain-badge" style="background:' + dc.badge_bg + ';color:' + dc.badge_color + '">' + dm.label + '</span>' +
                '</div>' +
                '<span class="ag-item-arrow">›</span>' +
              '</div>' +
              '<div class="ag-cube-item-body">' +
                '<div class="ag-item-desc">' + a.desc + '</div>' +
                '<div class="ag-item-chips">' +
                  (a.chips || []).map(function(c) {
                    return '<span class="ag-face-chip">' + c + '</span>';
                  }).join('') +
                '</div>' +
                '<div class="ag-item-stat-badge">' +
                  '<strong>' + a.stat + '</strong>' +
                  '<span>' + a.statLbl + '</span>' +
                '</div>' +
                '<div class="ag-item-progress-bar"><div class="ag-item-progress-fill" id="ag-prog-' + i + '"></div></div>' +
              '</div>' +
            '</div>';
          }).join(''),
        '</div>',

      '</div>',
    ].join('');

    /* ── CUBE ROTATION LOGIC ────────────────────────────────────────────── */
    /*
     * Rotation map: given agentIndex 0-11, map to a cube face + rotation angles.
     * Faces: front=0°Y, right=90°Y, back=180°Y, left=270°Y, top=90°X, bottom=-90°X
     * We use 12 positions: front/back/right/left/top/bottom + 6 more with extra Y rotations
     */
    var ROTATIONS = [
      { rx: -12, ry:   18 },   /* 0  front-ish */
      { rx: -12, ry:  198 },   /* 1  back  */
      { rx: -12, ry: -72 },    /* 2  right */
      { rx: -12, ry: 108 },    /* 3  left  */
      { rx:  78, ry:   18 },   /* 4  top   */
      { rx: -102, ry: 18 },    /* 5  bottom */
      { rx: -12, ry:  378 },   /* 6  front (second revolution) */
      { rx: -12, ry:  558 },   /* 7  back  */
      { rx: -12, ry:  288 },   /* 8  right */
      { rx: -12, ry:  468 },   /* 9  left  */
      { rx:  78, ry:  378 },   /* 10 top   */
      { rx: -102, ry: 378 },   /* 11 bottom */
    ];

    var cube3d     = document.getElementById('ag-cube-3d');
    var cubeLabel  = document.getElementById('ag-cube-label');
    var cubeShadow = document.getElementById('ag-cube-shadow');
    var cubeNav    = document.getElementById('ag-cube-nav');
    var cubeList   = document.getElementById('ag-cube-list');
    if (!cube3d || !cubeNav || !cubeList) return;

    var currentIdx  = 0;
    var autoTimer   = null;
    var progTimer   = null;
    var AUTO_DELAY  = 4000; /* ms per agent */

    /* Rotate cube to agent[idx] */
    function rotateTo(idx, user) {
      if (idx === currentIdx && !user) return;
      currentIdx = idx;
      var rot = ROTATIONS[idx];
      var agent = AGENTS_V2[idx];
      var dc = domainColors[agent.domain];

      /* Update cube 3D transform */
      cube3d.style.transform = 'rotateX(' + rot.rx + 'deg) rotateY(' + rot.ry + 'deg)';

      /* Update cube face content for the visible face
         (Front face always shows current agent for readability) */
      var frontFace = cube3d.querySelector('.face-front');
      if (frontFace) {
        frontFace.className = 'ag-cube-face face-front face-' + agent.domain;
        frontFace.innerHTML = makeFaceHTML(agent, '').replace(/^<div[^>]+>/, '').replace(/<\/div>$/, '');
        /* Rebuild domain-specific inner HTML properly */
        frontFace.innerHTML =
          '<div class="ag-face-domain-bar">' +
            '<div class="ag-face-domain-dot"></div>' +
            '<div class="ag-face-domain-label">' + DOMAIN_MAP[agent.domain].label + '</div>' +
          '</div>' +
          '<div class="ag-face-icon">' + agent.icon + '</div>' +
          '<div class="ag-face-name">' + agent.name + '</div>' +
          '<div class="ag-face-stat-row">' +
            '<span class="ag-face-stat-num">' + agent.stat + '</span>' +
            '<span class="ag-face-stat-lbl">' + agent.statLbl + '</span>' +
          '</div>' +
          '<div class="ag-face-chips">' +
            (agent.chips || []).slice(0, 3).map(function(c) {
              return '<span class="ag-face-chip">' + c + '</span>';
            }).join('') +
          '</div>';
      }

      /* Glow color */
      cubeShadow.style.background = 'radial-gradient(ellipse, ' + dc.dot + '33 0%, transparent 70%)';

      /* Label */
      cubeLabel.textContent = agent.name.toUpperCase();
      cubeLabel.style.color = dc.dot;

      /* Dots */
      cubeNav.querySelectorAll('.ag-cube-dot').forEach(function(d) {
        d.classList.toggle('active', +d.dataset.idx === idx);
      });

      /* List items */
      cubeList.querySelectorAll('.ag-cube-item').forEach(function(item, i) {
        var wasActive = item.classList.contains('active');
        item.classList.toggle('active', i === idx);
        if (i === idx) {
          startProgress(idx);
        }
      });

      /* Scroll active item into view (mobile) */
      var activeItem = cubeList.querySelector('.ag-cube-item.active');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    /* Animated progress bar */
    function startProgress(idx) {
      clearTimeout(progTimer);
      /* Reset all fills */
      document.querySelectorAll('.ag-item-progress-fill').forEach(function(f) {
        f.style.transition = 'width 0s';
        f.style.width = '0%';
      });
      var fill = document.getElementById('ag-prog-' + idx);
      if (!fill) return;
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          fill.style.transition = 'width ' + (AUTO_DELAY / 1000) + 's linear';
          fill.style.width = '100%';
        });
      });
    }

    /* Auto-cycle */
    function startAuto() {
      clearTimeout(autoTimer);
      autoTimer = setTimeout(function() {
        var next = (currentIdx + 1) % AGENTS_V2.length;
        rotateTo(next, false);
        startAuto();
      }, AUTO_DELAY);
    }

    /* Nav dots click */
    cubeNav.addEventListener('click', function(e) {
      var dot = e.target.closest('.ag-cube-dot');
      if (!dot) return;
      clearTimeout(autoTimer);
      rotateTo(+dot.dataset.idx, true);
      startAuto();
    });

    /* List item click */
    cubeList.addEventListener('click', function(e) {
      var item = e.target.closest('.ag-cube-item');
      if (!item) return;
      clearTimeout(autoTimer);
      rotateTo(+item.dataset.idx, true);
      startAuto();
    });

    /* Mouse drag-to-rotate */
    var isDragging = false;
    var startX = 0, startY = 0;
    var baseRot = ROTATIONS[0];
    cube3d.parentElement.addEventListener('mousedown', function(e) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      clearTimeout(autoTimer);
    });
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      var rot = ROTATIONS[currentIdx];
      cube3d.style.transform = 'rotateX(' + (rot.rx - dy * 0.3) + 'deg) rotateY(' + (rot.ry + dx * 0.5) + 'deg)';
    });
    document.addEventListener('mouseup', function() {
      if (isDragging) {
        isDragging = false;
        /* Snap back */
        var rot = ROTATIONS[currentIdx];
        cube3d.style.transform = 'rotateX(' + rot.rx + 'deg) rotateY(' + rot.ry + 'deg)';
        startAuto();
      }
    });

    /* Touch rotate */
    cube3d.parentElement.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    cube3d.parentElement.addEventListener('touchend', function(e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        clearTimeout(autoTimer);
        var next = dx < 0
          ? (currentIdx + 1) % AGENTS_V2.length
          : (currentIdx - 1 + AGENTS_V2.length) % AGENTS_V2.length;
        rotateTo(next, true);
        startAuto();
      }
    }, { passive: true });

    /* GSAP entrance animation */
    if (typeof gsap !== 'undefined') {
      gsap.from('#ag-cube-section .ag-cube-intro', {
        scrollTrigger: { trigger: '#ag-cube-section', start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.7, ease: 'power2.out'
      });
      gsap.from('#ag-cube-section .ag-cube-scene-wrap', {
        scrollTrigger: { trigger: '#ag-cube-section', start: 'top 70%' },
        x: -40, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power2.out'
      });
      gsap.from('#ag-cube-section .ag-cube-list .ag-cube-item', {
        scrollTrigger: { trigger: '#ag-cube-section', start: 'top 70%' },
        x: 30, opacity: 0, duration: 0.55, stagger: 0.06, delay: 0.25, ease: 'power2.out'
      });
    }

    /* Init */
    rotateTo(0, false);
    startAuto();
  }

  /* ── MAIN ENTRY: override window.buildAgentGrid ─────────────────────── */
  window.buildAgentGrid = function() {
    buildHero();
    buildStickyTabs();
    buildAgentGridV2();
    buildCubeSection();      /* ← NEW: Qount-style cube deep-dive */
    buildStatsBand();
    buildIntegrationsSection();
    buildWorkflowSection();

    // Re-run lucide
    setTimeout(function() {
      if (typeof lucide !== 'undefined') { lucide.createIcons(); }
    }, 200);
  };

  /* Keep buildAgentExtras as a no-op (handled inside buildAgentGrid now) */
  window.buildAgentExtras = function() {};

})();
