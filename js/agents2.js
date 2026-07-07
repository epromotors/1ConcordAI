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
    it:   { cls: 'ag-domain-it',   label: 'IT & Ops',          color: '#B5F2DB' },
    sec:  { cls: 'ag-domain-sec',  label: 'Security & Cloud',  color: '#E4EEF0' },
    comp: { cls: 'ag-domain-comp', label: 'Reporting & Compliance', color: '#FFC933' },
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
          <h1 class="ag-hero-heading" id="ag-hero-h1">\
            <span class="word"><span style="--wi:0">Enterprise</span></span> \
            <span class="word"><span style="--wi:1">operations,</span></span> \
            <span class="word"><span style="--wi:2">powered</span></span> \
            <span class="word"><span style="--wi:3">by</span></span> \
            <span class="word"><span style="--wi:4">autonomous</span></span> \
            <span class="word"><span style="--wi:5">agents.</span></span>\
          </h1>\
          <p class="ag-hero-sub">OneConcord brings twelve specialized agents into the core of the enterprise, where they execute within governance, collaborate across functions, and move work forward.</p>\
          <div class="ag-hero-actions">\
            <button class="ag-btn-primary" onclick="go(\'contact\')">Book a live demo ↗</button>\
            <button class="ag-btn-ghost" onclick="go(\'pricing\')">See pricing →</button>\
          </div>\
        </div>\
        <div class="ag-hero-right">\
          <div class="ag-live-panel">\
            <div class="ag-live-label"><span class="ag-live-dot"></span>Platform Capabilities</div>\
            <div class="ag-metric-row" id="ag-metrics-area"></div>\
          </div>\
        </div>\
      </div>';

    // Build live metrics
    var metricsArea = document.getElementById('ag-metrics-area');
    if (metricsArea) {
      var metrics = [
        { icon: '🤖', bg: 'rgba(167,139,250,0.12)', num: '1,284', label: 'Active AI Agents', change: '+12', cls: 'up' },
        { icon: '⚡', bg: 'rgba(56,189,248,0.12)',  num: '428',  label: 'Workflows Automated', change: '', cls: '' },
        { icon: '🛡', bg: 'rgba(245,158,11,0.12)',  num: '97.8%', label: 'Decision Confidence', change: '+0.4%', cls: 'up' },
      ];
      metrics.forEach(function(m) {
        var el = document.createElement('div');
        el.className = 'ag-metric-item';
        var changeHtml = m.change ? '<div class="ag-metric-change ' + m.cls + '">' + m.change + '</div>' : '';
        el.innerHTML = '\
          <div class="ag-metric-icon" style="background:' + m.bg + '">' + m.icon + '</div>\
          <div class="ag-metric-body">\
            <div class="ag-metric-value" data-target-val="' + m.num + '">' + m.num + '</div>\
            <div class="ag-metric-label">' + m.label + '</div>\
          </div>\
          ' + changeHtml;
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
      { key: 'all',  fullLabel: 'All Agents',           shortLabel: 'All',        count: counts.all },
      { key: 'it',   fullLabel: 'IT & Operations',       shortLabel: 'IT & Ops',   count: counts.it },
      { key: 'sec',  fullLabel: 'Security & Cloud',      shortLabel: 'Security',   count: counts.sec },
      { key: 'comp', fullLabel: 'Reporting & Compliance',shortLabel: 'Compliance', count: counts.comp },
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
      btn.innerHTML = '<span class="ag-tab-full">' + t.fullLabel + '</span>' +
                      '<span class="ag-tab-short">' + t.shortLabel + '</span>' +
                      ' <span class="ag-tab-count">' + t.count + '</span>';
      btn.addEventListener('click', function() {
        document.querySelectorAll('.ag-tab-btn').forEach(function(b) { b.classList.remove('ag-tab-active'); });
        btn.classList.add('ag-tab-active');
        filterAgentCards(t.key);
      });
      inner.appendChild(btn);
    });

    tabsEl.appendChild(inner);

    // Stuck class toggle on scroll to mask scrolling content and show background
    var scrollHandler = function() {
      var rect = tabsEl.getBoundingClientRect();
      tabsEl.classList.toggle('stuck', rect.top <= 73);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
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
      var dom = DOMAIN_MAP[agent.domain] || { cls: '', label: agent.domain, color: '#B5F2DB' };
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
          <div class="ag-card-domain-badge" style="margin-bottom:0">' + dom.label + '</div>\
          <div class="ag-card-stat-wrap">\
            <div class="ag-card-stat">' + agent.stat + '</div>\
            <div class="ag-card-stat-label">' + agent.statLbl + '</div>\
          </div>\
        </div>\
        <div>\
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
          <p>Every agent plugs into the tools your team already uses, fully authenticated and audited from the start.</p>\
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
        icon: '🔑', name: 'Access Request Workflow', color: '#B5F2DB',
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
        icon: '🚨', name: 'Security Incident Response', color: '#E4EEF0',
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
        icon: '👤', name: 'New Employee Onboarding', color: '#FFC933',
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
     HUB SECTION — Qount-style hub-and-spoke visualization
     ══════════════════════════════════════════════════════════════════════ */
  function buildCubeSection() {
    var wrap = document.getElementById('ag-cube-section');
    if (!wrap) return;

    // Feature 6 primary agents from different domains in a hexagonal hub-and-spoke layout
    var featuredAgents = [
      { agent: AGENTS_V2[0], side: 'left',  posClass: 'pos-tl',  icon: '🎯' }, // Service Desk
      { agent: AGENTS_V2[3], side: 'right', posClass: 'pos-tr',  icon: '🛡' }, // Security Operations
      { agent: AGENTS_V2[6], side: 'left',  posClass: 'pos-ml',  icon: '📋' }, // Compliance & Governance (left)
      { agent: AGENTS_V2[4], side: 'right', posClass: 'pos-mr',  icon: '🔑' }, // Identity & Access (right)
      { agent: AGENTS_V2[2], side: 'left',  posClass: 'pos-bl',  icon: '🚨' }, // Incident Management
      { agent: AGENTS_V2[7], side: 'right', posClass: 'pos-br',  icon: '⚖️' }  // Policy Engine
    ];

    wrap.innerHTML = [
      '<div class="q-hub-wrapper">',
        // Left Column: Text Content & Dynamic Detail Card
        '<div class="q-hub-left">',
          '<div class="ag-section-kicker">Unified Orchestration</div>',
          '<h2 class="q-hub-title">Redefining operations and security</h2>',
          '<p class="q-hub-desc">OneConcord AI replaces disconnected workflows with a single execution mesh for IT operations, security, and compliance.</p>',
          
          // Dynamic details panel (updates on hover/cycle)
          '<div class="q-hub-details-panel" id="q-hub-details">',
            '<div class="q-hd-domain-badge" id="q-hd-badge">IT & OPERATIONS</div>',
            '<h3 class="q-hd-title" id="q-hd-title">Service Desk Agent</h3>',
            '<p class="q-hd-desc" id="q-hd-desc">Triages, routes, and resolves Tier-1 & Tier-2 incidents autonomously. Escalates with full context when human judgment is needed.</p>',
            '<div class="q-hd-stats">',
              '<div class="q-hd-stat-val" id="q-hd-stat-val">4.2min</div>',
              '<div class="q-hd-stat-lbl" id="q-hd-stat-lbl">Avg. resolution</div>',
            '</div>',
          '</div>',
        '</div>',

        // Right Column: Isometric Hub Visual
        '<div class="q-hub-right">',
          '<div class="q-hub-visual-container" id="q-hub-visual">',
            
            // Central Logo
            '<div class="q-hub-cube-scene" id="q-hub-cube" style="display:flex;align-items:center;justify-content:center;">',
              '<img src="logo-mark.svg" class="q-hub-logo" style="width:115px;height:115px;filter:drop-shadow(0 0 20px rgba(181,242,219,0.55));animation: qLogoFloat 5s ease-in-out infinite;" alt="OneConcord Logo" />',
              '<div class="q-hub-cube-glow" style="width:150px;height:150px;pointer-events:none;"></div>',
            '</div>',

            // SVG lines overlay
            '<svg class="q-hub-svg-lines" id="q-hub-svg"></svg>',

            // Radiating floating cards
            featuredAgents.map(function(item, idx) {
              var a = item.agent;
              var isWide = (a.code === 'cg' || a.code === 'im');
              var wideClass = isWide ? ' q-wide-card' : '';
              return [
                '<div class="q-floating-card ' + item.posClass + wideClass + '" data-idx="' + idx + '">',
                  '<div class="q-fc-icon-wrap">' + item.icon + '</div>',
                  '<div class="q-fc-content">',
                    '<div class="q-fc-name">' + a.name + '</div>',
                    '<div class="q-fc-domain">' + DOMAIN_MAP[a.domain].label + '</div>',
                  '</div>',
                '</div>'
              ].join('');
            }).join(''),

          '</div>',
        '</div>',
      '</div>'
    ].join('');

    // Elements
    var visualContainer = document.getElementById('q-hub-visual');
    var svg = document.getElementById('q-hub-svg');
    var cubeScene = document.getElementById('q-hub-cube');
    var detailsPanel = document.getElementById('q-hub-details');
    var hdBadge = document.getElementById('q-hd-badge');
    var hdTitle = document.getElementById('q-hd-title');
    var hdDesc = document.getElementById('q-hd-desc');
    var hdStatVal = document.getElementById('q-hd-stat-val');
    var hdStatLbl = document.getElementById('q-hd-stat-lbl');
    var cards = visualContainer.querySelectorAll('.q-floating-card');

    if (!visualContainer || !svg || !cubeScene || !cards.length) return;

    // Create SVG paths
    svg.innerHTML = featuredAgents.map(function(_, idx) {
      return '<path id="q-hub-path-' + idx + '" class="q-hub-line-path" d="" />';
    }).join('');
    var paths = svg.querySelectorAll('.q-hub-line-path');

    // Function to calculate coordinates & update SVG lines
    function syncLines() {
      var containerRect = visualContainer.getBoundingClientRect();
      var cubeRect = cubeScene.getBoundingClientRect();

      // SVG dimensions matching container
      svg.setAttribute('width', containerRect.width);
      svg.setAttribute('height', containerRect.height);
      svg.setAttribute('viewBox', '0 0 ' + containerRect.width + ' ' + containerRect.height);

      // Center coordinates (originating point of lines)
      var cx = (cubeRect.left + cubeRect.width / 2) - containerRect.left;
      var cy = (cubeRect.top + cubeRect.height / 2) - containerRect.top;

      cards.forEach(function(card, idx) {
        var cardRect = card.getBoundingClientRect();
        var item = featuredAgents[idx];
        
        var cardX, cardY;
        cardY = (cardRect.top + cardRect.height / 2) - containerRect.top;

        if (item.side === 'left') {
          // Left card: connect to right-center edge
          cardX = cardRect.right - containerRect.left;
        } else {
          // Right card: connect to left-center edge
          cardX = cardRect.left - containerRect.left;
        }

        var path = paths[idx];
        if (path) {
          path.setAttribute('d', 'M ' + cx + ' ' + cy + ' L ' + cardX + ' ' + cardY);
        }
      });
    }

    // Call sync initially and on resize
    setTimeout(syncLines, 100);
    window.addEventListener('resize', syncLines);

    // Dynamic update left panel
    function updateDetails(idx) {
      var item = featuredAgents[idx];
      var a = item.agent;
      var domain = DOMAIN_MAP[a.domain];

      // Update badge
      hdBadge.textContent = domain.label.toUpperCase();
      hdBadge.style.color = domain.color;
      hdBadge.style.borderColor = domain.color + '33';
      hdBadge.style.background = domain.color + '0a';

      // Update titles/stats
      hdTitle.textContent = a.name;
      hdDesc.textContent = a.desc;
      hdStatVal.textContent = a.stat;
      hdStatVal.style.color = domain.color;
      hdStatLbl.textContent = a.statLbl;

      // Update details panel transition
      detailsPanel.style.transform = 'translateY(0)';
      detailsPanel.style.opacity = '1';
    }

    var activeIndex = 0;
    var autoTimer = null;
    var isHovered = false;

    function activateIndex(idx) {
      activeIndex = idx;

      // Update classes on cards
      cards.forEach(function(c, i) {
        c.classList.toggle('active', i === idx);
      });

      // Update classes on SVG paths
      paths.forEach(function(p, i) {
        p.classList.toggle('active', i === idx);
      });

      // Subtle cube rotation towards the active side
      var rotationX = -30;
      var rotationY = 45;
      
      var offsets = [
        { x: -5, y: -15 }, // top left
        { x: -5, y: 15 },  // top right
        { x: 0,  y: -20 }, // mid left
        { x: 0,  y: 20 },  // mid right
        { x: 5,  y: -15 }, // bottom left
        { x: 5,  y: 15 }   // bottom right
      ];
      var offset = offsets[idx] || { x: 0, y: 0 };
      var cube = cubeScene.querySelector('.q-hub-cube');
      if (cube) {
        cube.style.transform = 'rotateX(' + (rotationX + offset.x) + 'deg) rotateY(' + (rotationY + offset.y) + 'deg)';
      }

      // Update dynamic details
      updateDetails(idx);
    }

    // Auto cycle
    function startAutoCycle() {
      stopAutoCycle();
      autoTimer = setInterval(function() {
        if (!isHovered) {
          var next = (activeIndex + 1) % featuredAgents.length;
          activateIndex(next);
        }
      }, 3500);
    }

    function stopAutoCycle() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    // Hover listeners
    cards.forEach(function(card, idx) {
      card.addEventListener('mouseenter', function() {
        isHovered = true;
        stopAutoCycle();
        activateIndex(idx);
      });

      card.addEventListener('mouseleave', function() {
        isHovered = false;
        startAutoCycle();
      });
    });

    // Initialize
    activateIndex(0);
    startAutoCycle();
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

    // Reset active tab to "All agents" by default
    var allBtn = document.querySelector('.ag-tab-btn[data-ag-filter="all"]');
    if (allBtn) {
      allBtn.click();
    }

    // Re-run lucide
    setTimeout(function() {
      if (typeof lucide !== 'undefined') { lucide.createIcons(); }
    }, 200);
  };

  /* Keep buildAgentExtras as a no-op (handled inside buildAgentGrid now) */
  window.buildAgentExtras = function() {};

})();
