/* ══════════════════════════════════════════════

   ONE CONCORD AI — WEB ENGINE & LOGIC

   Preserving all client data structures & routing

   while activating GSAP, ScrollTrigger & SVG Line

   ══════════════════════════════════════════════ */



/* ── AGENT ICONS ───────────────────────────────────────── */

var AGENT_ICONS = {

  SD: '<i data-lucide="help-circle" style="width:17px;height:17px;"></i>',

  IM: '<i data-lucide="alert-circle" style="width:17px;height:17px;"></i>',

  RC: '<i data-lucide="search" style="width:17px;height:17px;"></i>',

  CM: '<i data-lucide="git-pull-request" style="width:17px;height:17px;"></i>',

  KI: '<i data-lucide="book-open" style="width:17px;height:17px;"></i>',

  AD: '<i data-lucide="server" style="width:17px;height:17px;"></i>',

  IA: '<i data-lucide="fingerprint" style="width:17px;height:17px;"></i>',

  SO: '<i data-lucide="shield" style="width:17px;height:17px;"></i>',

  CO: '<i data-lucide="cloud" style="width:17px;height:17px;"></i>',

  EI: '<i data-lucide="bar-chart-2" style="width:17px;height:17px;"></i>',

  CG: '<i data-lucide="file-check" style="width:17px;height:17px;"></i>',

  TC: '<i data-lucide="scan-eye" style="width:17px;height:17px;"></i>',

};



/* ── CLIENT DATA ─────────────────────────────────────────────── */

const AGENTS = [

  {code:'SD',name:'Service Desk Agent',domain:'IT & Operations',dom:'it',stat:'412',lbl:'Resolved / 24h',desc:'Autonomous first-contact IT resolution — VPN issues, password resets, software installs, and account management without creating a ticket.'},

  {code:'IM',name:'Incident Management Agent',domain:'IT & Operations',dom:'it',stat:'89',lbl:'Incidents / 24h',desc:'Alert triage, severity classification, blast radius assessment, stakeholder escalation, and post-incident review — fully automated.'},

  {code:'RC',name:'Root Cause Analysis Agent',domain:'IT & Operations',dom:'it',stat:'3 min',lbl:'Avg time to RCA',desc:'Correlates recent changes, alert patterns, and CMDB dependencies to identify root causes and prevent incident recurrence.'},

  {code:'CM',name:'Change Management Agent',domain:'IT & Operations',dom:'it',stat:'72%',lbl:'Auto-approved',desc:'Validates change risk, detects scheduling conflicts, routes approvals, monitors post-change health, and triggers rollback on failure.'},

  {code:'KI',name:'Knowledge Intelligence Agent',domain:'IT & Operations',dom:'it',stat:'4,812',lbl:'KB articles managed',desc:'Auto-generates knowledge articles from resolved incidents. Detects knowledge gaps. Keeps your knowledge base accurate and current.'},

  {code:'AD',name:'Asset Discovery & CMDB Agent',domain:'IT & Operations',dom:'it',stat:'18,420',lbl:'Assets tracked',desc:'Continuous discovery across cloud, endpoint, and network. Reconciles with Intune, ServiceNow, and AWS inventory automatically.'},

  {code:'IA',name:'Identity & Access Agent',domain:'Security & Cloud',dom:'sec',stat:'91%',lbl:'Autonomy rate',desc:'Full Joiner-Mover-Leaver lifecycle automation, access requests, entitlement reviews, and privileged access governance with SoD enforcement.'},

  {code:'SO',name:'Security Operations Agent',domain:'Security & Cloud',dom:'sec',stat:'94%',lbl:'Auto-contained',desc:'Tier-1 and Tier-2 SOC automation — alert triage, threat investigation, endpoint isolation, and autonomous incident response.'},

  {code:'CO',name:'Cloud Operations Agent',domain:'Security & Cloud',dom:'sec',stat:'$10K+',lbl:'Saved / month',desc:'Multi-cloud cost optimisation, security posture management, resource rightsizing, and one-click agent-validated remediation.'},

  {code:'EI',name:'Executive Intelligence Agent',domain:'Reporting & Compliance',dom:'leadership',stat:'8 sec',lbl:'Briefing generation',desc:'Natural language operational queries, auto-generated weekly briefings, real-time KPI tracking and cross-domain performance visibility.'},

  {code:'CG',name:'Compliance & Governance Agent',domain:'Reporting & Compliance',dom:'compliance',stat:'94%',lbl:'Avg compliance score',desc:'Continuous monitoring across ISO 27001, SOC 2, NESA, PDPL, and PCI DSS. Evidence collection, gap detection, audit readiness.'},

  {code:'TC',name:'Security Tool Coverage Agent',domain:'Reporting & Compliance',dom:'compliance',stat:'100%',lbl:'Asset visibility',desc:'Maps security tooling coverage across every asset — which endpoints have EDR, which servers are in SIEM scope, which cloud workloads lack monitoring. Identifies blind spots and reports coverage gaps automatically, continuously.'},

];



const TICKERS = [

  {code:'SD',bold:'Service Desk',rest:' reset VPN cert for 14 users — resolved in 38s'},

  {code:'IA',bold:'Identity Agent',rest:' provisioned 3 new joiners — Day-1 ready'},

  {code:'SO',bold:'Security Ops',rest:' isolated endpoint WS-FIN-0042 after EDR alert'},

  {code:'CO',bold:'Cloud Ops',rest:' stopped idle EC2 instance — saved $1,140/mo'},

  {code:'IM',bold:'Incident Mgmt',rest:' correlated 6 tickets to one root cause'},

  {code:'KI',bold:'Knowledge Agent',rest:' auto-generated KB article from resolved incident'},

  {code:'CG',bold:'Compliance',rest:' detected NESA control gap — remediation tasked'},

  {code:'EI',bold:'Exec Intelligence',rest:' generated Monday briefing — delivered in 8 sec'},

  {code:'TC',bold:'Tool Coverage',rest:' detected 3 unmonitored cloud workloads — gap report filed'},

  {code:'SD',bold:'Service Desk',rest:' resolved printer offline for 8 users in Finance — 22s'},

  {code:'IA',bold:'Identity Agent',rest:' revoked 34 entitlements for offboarded employee — 9 min'},

  {code:'RC',bold:'Root Cause',rest:' traced repeated CRM timeouts to misconfigured load balancer'},

  {code:'CM',bold:'Change Mgmt',rest:' auto-approved 12 low-risk patches — deploy window locked in'},

  {code:'SO',bold:'Security Ops',rest:' blocked phishing campaign — 47 malicious emails retracted'},

  {code:'CO',bold:'Cloud Ops',rest:' rightsized 6 oversized RDS instances — saving $3,200/mo'},

  {code:'AD',bold:'Asset Discovery',rest:' found 3 unregistered servers — CMDB reconciled automatically'},

  {code:'EI',bold:'Exec Intelligence',rest:' answered "Why did ticket volume spike Tuesday?" in 4 sec'},

  {code:'CG',bold:'Compliance',rest:' collected SOC 2 evidence package — audit-ready in 4 hours'},

  {code:'TC',bold:'Tool Coverage',rest:' flagged 5 endpoints missing EDR — gap report sent to CISO'},

  {code:'IM',bold:'Incident Mgmt',rest:' paged on-call and triaged alert in 90s — zero human touch'},

  {code:'KI',bold:'Knowledge Agent',rest:' detected stale KB article — updated from 3 recent incidents'},

  {code:'IA',bold:'Identity Agent',rest:' flagged SoD conflict on finance role — access request blocked'},

  {code:'SD',bold:'Service Desk',rest:' provisioned Adobe CC licence from pool — ticket closed in 41s'},

  {code:'CO',bold:'Cloud Ops',rest:' detected public S3 bucket — permissions reverted in 4 min'},

];



const SOLUTIONS = {

  it:{

    title:'IT Operations',

    tagline:'6 agents. Zero tickets. Every issue resolved before it becomes one.',

    body:'One Concord AI eliminates the IT service desk backlog entirely. Six agents covering Service Desk, Incident Management, Root Cause Analysis, Change Management, Knowledge Intelligence, and Asset Discovery work in concert — detecting, diagnosing, and resolving issues before employees ever need to raise a ticket.',

    agents:['SD','IM','RC','CM','KI','AD'],

    metrics:[['78%','Autonomous resolution rate'],['38s','Avg time to resolve'],['412','Requests / 24h']],

    caps:['Autonomous password resets, VPN fixes, and software installs — zero tickets','P1 incident triage with automated stakeholder communication','Root cause correlation across recent changes and CMDB','Auto-generated knowledge articles from every resolved incident','Continuous asset discovery — CMDB always current, no manual reconciliation','Scheduled maintenance window management with auto-approval and rollback triggers','SLA breach prediction — escalation initiated before the breach clock runs out','Multi-site hardware refresh tracking with automated decommission workflows'],

    usecases:[

      {title:'After-hours IT outage',body:'Incident Management Agent classifies the severity, pages on-call engineers, and posts status updates to Teams — all in under 90 seconds, without a human touching Slack.'},

      {title:'New software licensing',body:'Employee requests Adobe Creative Cloud. Service Desk Agent checks licence pool, verifies approval policy, provisions the licence, and closes the ticket in 41 seconds.'},

      {title:'CMDB drift detected',body:'Asset Discovery Agent finds 3 unregistered servers during a routine sweep. Tickets are raised, owners are identified from AD, and records are reconciled before the next audit window.'},

      {title:'Recurring incident pattern',body:'RCA Agent detects that 12 incidents over 30 days share the same upstream dependency. A change request is auto-drafted and routed for approval before the next failure.'},

    ],

  },

  security:{

    title:'Security & Cloud',

    tagline:'3 agents. Identity, security, and cloud — unified.',

    body:'The Security & Cloud domain brings together Identity & Access, Security Operations, and Cloud Operations agents into a single coordinated layer. Together they protect your enterprise perimeter, enforce access policies, and govern cloud spend and posture — all autonomously.',

    agents:['IA','SO','CO'],

    metrics:[['94%','Alerts auto-contained'],['91%','Identity autonomy rate'],['$10K+','Saved / month']],

    caps:['Autonomous endpoint isolation on EDR detection','Phishing email retraction across all inboxes on confirmation','New employee fully provisioned — Day-1 ready','Privileged access with dual-approval and full session recording','Multi-cloud cost optimisation, rightsizing, and idle resource termination','Public storage exposure detected and locked within minutes','Shadow IT detection — unsanctioned SaaS apps flagged from DNS and network logs','Quarterly SoD conflict review across all roles, auto-remediated where policy allows','Reserved Instance and Savings Plan optimisation recommendations','Tag policy enforcement — untagged resources auto-tagged or flagged for owner review'],

    usecases:[

      {title:'Ransomware early warning',body:'EDR alert fires on WS-FIN-0042. Security Ops Agent isolates the endpoint, snapshots the disk, notifies the CISO, and opens a P1 incident — all in under 2 minutes.'},

      {title:'Terminated employee access',body:'HR triggers offboarding. Identity Agent revokes all 34 SaaS and on-prem entitlements, disables the AD account, and archives the mailbox in 9 minutes with a full audit trail.'},

      {title:'Cloud security misconfiguration',body:'A storage bucket is inadvertently made public. Cloud Ops Agent detects the exposure within 4 minutes, reverts permissions, and alerts the security team with a full change log.'},

      {title:'Runaway cloud spend',body:'Cloud Ops Agent detects a dev environment left running over the weekend. It stops the instances, notifies the owner, and files an optimisation record — saving thousands before Monday morning.'},

    ],

  },

  leadership:{

    title:'Reporting & Compliance',

    tagline:'3 agents. Intelligence, governance, and full security visibility.',

    body:'The Reporting & Compliance domain brings together the Executive Intelligence Agent, Compliance & Governance Agent, and Security Tool Coverage Agent. Together they give leadership a complete picture — operational briefings, continuous compliance monitoring, and a live view of where security tooling coverage stands across every asset in the organisation.',

    agents:['EI','CG','TC'],

    metrics:[['8 sec','Briefing generation time'],['94%','Avg compliance score'],['100%','Asset visibility target']],

    caps:['Weekly operational briefing auto-generated every Monday at 08:00','Natural language queries: "Why did ticket volume increase this week?"','Real-time ROI tracking: cost saved, MTTR reduction, deflection rate','Cross-domain anomaly surfacing: patterns a human analyst would miss','Board-ready metrics exported on demand','Real-time control monitoring — gaps detected within minutes of a change','Automatic evidence collection for SOC 2 auditor review','NESA Article 30 control mapping and quarterly submission support','Audit readiness score updated daily across all active frameworks','Continuous mapping of EDR, SIEM, and monitoring coverage across all assets','Blind spot detection — unmonitored endpoints, servers, and cloud workloads surfaced automatically','Weekly coverage gap report delivered to CISO with asset-level detail and remediation priority'],

    usecases:[

      {title:'Monday morning briefing',body:'Executives open their laptop at 08:00 to find a 3-paragraph operational summary covering all active domains, risk flags, and cost-saving wins — generated overnight without human input.'},

      {title:'Board report preparation',body:'"Generate a board-ready operational summary for Q2." Executive Agent produces a structured report with metrics, trends, incidents, and savings in 8 seconds — formatted for export.'},

      {title:'Coverage gap discovered',body:'Security Tool Coverage Agent detects 3 cloud workloads spun up by engineering with no EDR or SIEM coverage. A gap report is filed, owners notified, and the finding escalated to executive dashboard — before any threat can exploit the blind spot.'},

      {title:'Surprise regulatory audit',body:'Regulator requests evidence of access controls for the past 6 months. Compliance Agent assembles the full evidence package in 4 hours — what would have taken two weeks manually.'},

    ],

  },

};



/* ── SPA ROUTER ───────────────────────────────────────────── */

function go(id) {

  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });

  var pg = document.getElementById('pg-' + id);

  if (pg) {

    pg.classList.add('active');

    var pageFades = pg.querySelectorAll('.fade-up');

    if (pageFades.length > 0) {

      gsap.to(pageFades, {

        opacity: 1,

        y: 0,

        duration: 0.6,

        ease: 'power2.out',

        overwrite: 'auto',

        stagger: 0.08

      });

    }

  }



  document.querySelectorAll('.nav-a').forEach(function(a) { a.classList.remove('act'); });

  document.querySelectorAll('.nav-a[data-pg="' + id + '"]').forEach(function(a) { a.classList.add('act'); });



  window.location.hash = '#' + id;

  // Kill all active ScrollTrigger pins before scrolling — prevents hero pin freeze
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(function(t) { t.kill(); });
  }
  // Instant scroll to top — no smooth behavior to avoid pin spacer conflicts
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });



  // Re-render subpage specific assets and refresh ScrollTrigger

  if (id === 'agents') {

    if (typeof window.buildAgentGrid === 'function') {

      window.buildAgentGrid();

    } else {

      buildAgentGrid();

    }

    if (typeof window.buildAgentExtras === 'function') {

      window.buildAgentExtras();

    } else {

      buildAgentExtras();

    }

  }

  if (id === 'solutions') {

    buildSolutions('it');

  }



  // Allow layout calculations to complete before refreshing
  setTimeout(() => {

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }

    if (typeof updatePathDimensions === 'function') {
      updatePathDimensions();
    }

  }, 200);

}



function toggleMob() {

  document.getElementById('mobMenu').classList.toggle('open');

}



/* ── BUILD: NAV ───────────────────────────────────────── */

function buildNav() {

  var navLinks = document.getElementById('navLinks');

  var navEnd = document.getElementById('navEnd');

  if (!navLinks || !navEnd) return;



  navLinks.innerHTML = '';

  navEnd.innerHTML = '';



  ['Home|home','Platform|platform','Agents|agents','Solutions|solutions','Pricing|pricing','About|about'].forEach(function(pair){

    var parts = pair.split('|');

    var label = parts[0], page = parts[1];

    var a = document.createElement('button');

    a.className = 'nav-a'; a.setAttribute('data-pg', page); a.textContent = label;

    a.onclick = function() { go(page); };

    navLinks.appendChild(a);

  });



  var demoBtn = document.createElement('button');

  demoBtn.className = 'btn btn-ghost btn-sm'; demoBtn.textContent = 'Book a Demo';

  demoBtn.onclick = function() { go('contact'); };

  

  var startBtn = document.createElement('button');

  startBtn.className = 'btn btn-primary btn-sm'; startBtn.textContent = 'Get Started →';

  startBtn.onclick = function() { go('contact'); };



  navEnd.appendChild(demoBtn);

  navEnd.appendChild(startBtn);



  var mobLinks = document.getElementById('mobLinks');

  if (mobLinks) {

    mobLinks.innerHTML = '';

    ['Home|home','Platform|platform','Agents|agents','Solutions|solutions','Pricing|pricing','About|about','Contact|contact'].forEach(function(pair){

      var parts = pair.split('|');

      var btn = document.createElement('button');

      btn.className = 'mob-a'; btn.textContent = parts[0];

      btn.onclick = function() { go(parts[1]); toggleMob(); };

      mobLinks.appendChild(btn);

    });

  }

}



/* ── BUILD: TICKER ────────────────────────────────────── */

function buildTicker() {

  var track = document.getElementById('tickerTrack');

  if (!track) return;

  track.innerHTML = '';

  var items = TICKERS.concat(TICKERS); // duplicate for seamless loop

  items.forEach(function(t) {

    var d = document.createElement('div');

    d.className = 'tick';

    var ico = document.createElement('div');

    ico.className = 'tick-ico'; ico.textContent = t.code;

    var txt = document.createElement('span');

    txt.innerHTML = '<b>' + t.bold + '</b>' + t.rest;

    d.appendChild(ico); d.appendChild(txt);

    track.appendChild(d);

  });

}



/* ── BUILD: HOME ──────────────────────────────────────── */

function buildHome() {

  // How it works steps

  var stepsEl = document.getElementById('howSteps');

  if (stepsEl) {

    stepsEl.innerHTML = '';

    var steps = [

      ['01','Understand',

       'Intent engine identifies what is being requested, who is asking, and which systems, data, and business context are involved.',

       '<i data-lucide="eye" style="width:22px;height:22px;"></i>',

       'var(--accent)'],

      ['02','Reason',

       'Knowledge engine retrieves enterprise context, relationships, history, and dependencies, enabling the agent to reason before acting.',

       '<i data-lucide="brain" style="width:22px;height:22px;"></i>',

       'var(--accent)'],

      ['03','Decide',

       'Policy engine evaluates risk, permissions, and governance rules to auto-execute, request approval, notify, or reject.',

       '<i data-lucide="shield-check" style="width:22px;height:22px;"></i>',

       'var(--accent)'],

      ['04','Execute',

       'Connector service performs authenticated API calls and orchestrates workflows — atomic, retryable, observable, and fully audited.',

       '<i data-lucide="zap" style="width:22px;height:22px;"></i>',

       'var(--accent)'],

      ['05','Learn',

       'Outcomes are written to the knowledge graph and vector store, continuously improving reasoning, decisions, and future execution.',

       '<i data-lucide="refresh-cw" style="width:22px;height:22px;"></i>',

       'var(--gold)'],

    ];

    stepsEl.className = 'timeline-container';

    

    // Create progress lines

    var bgLine = document.createElement('div');

    bgLine.className = 'timeline-line';

    var progressLine = document.createElement('div');

    progressLine.className = 'timeline-line-progress';

    progressLine.id = 'timelineProgress';

    stepsEl.appendChild(bgLine);

    stepsEl.appendChild(progressLine);



    // Illustration Graphics HTML Generator

    function getGraphicHTML(num) {

      if (num === '01') {

        return '<div class="illustration-container">'

          + '<div class="console-box">'

          + '  <div class="console-head">'

          + '    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>'

          + '    <span class="console-title">Intent Analysis</span>'

          + '  </div>'

          + '  <div class="console-body">'

          + '    <div class="console-prompt">&gt; Add user @john.doe to #alerts</div>'

          + '    <div class="console-response">'

          + '      <div class="field"><span class="lbl">INTENT:</span> <span class="val cyan">SLACK_INVITE</span></div>'

          + '      <div class="field"><span class="lbl">USER:</span> <span class="val">john.doe</span></div>'

          + '      <div class="field"><span class="lbl">CONFIDENCE:</span> <span class="val gold">99.8%</span></div>'

          + '    </div>'

          + '  </div>'

          + '</div>'

          + '</div>';

      } else if (num === '02') {

        return '<div class="illustration-container">'

          + '<div class="graph-wrapper">'

          + '  <svg class="graph-svg" width="100%" height="100%">'

          + '    <line x1="50%" y1="50%" x2="20%" y2="22%" stroke="rgba(20,184,166,0.3)" stroke-width="1.5" stroke-dasharray="4" style="animation: flowLine 20s linear infinite;"></line>'

          + '    <line x1="50%" y1="50%" x2="80%" y2="22%" stroke="rgba(20,184,166,0.3)" stroke-width="1.5" stroke-dasharray="4" style="animation: flowLine 20s linear infinite;"></line>'

          + '    <line x1="50%" y1="50%" x2="20%" y2="78%" stroke="rgba(20,184,166,0.3)" stroke-width="1.5" stroke-dasharray="4" style="animation: flowLine 20s linear infinite;"></line>'

          + '    <line x1="50%" y1="50%" x2="80%" y2="78%" stroke="rgba(20,184,166,0.3)" stroke-width="1.5" stroke-dasharray="4" style="animation: flowLine 20s linear infinite;"></line>'

          + '  </svg>'

          + '  <div class="graph-node center pulse-glow">Context</div>'

          + '  <div class="graph-node pos-tl float-node-1">Slack Profile</div>'

          + '  <div class="graph-node pos-tr float-node-2">Okta ID</div>'

          + '  <div class="graph-node pos-bl float-node-3">Active Dir</div>'

          + '  <div class="graph-node pos-br float-node-4">Device Risk</div>'

          + '</div>'

          + '</div>';

      } else if (num === '03') {

        return '<div class="illustration-container">'

          + '<div class="policy-wrapper">'

          + '  <div class="policy-shield">'

          + '    <i data-lucide="shield" class="shield-icon" style="width:36px;height:36px;"></i>'

          + '  </div>'

          + '  <div class="policy-checklist">'

          + '    <div class="check-item"><i data-lucide="check-circle" class="check-icon green" style="width:16px;height:16px;margin-right:8px;color:var(--accent);"></i><span>MFA Verified</span></div>'

          + '    <div class="check-item"><i data-lucide="check-circle" class="check-icon green" style="width:16px;height:16px;margin-right:8px;color:var(--accent);"></i><span>RBAC Access OK</span></div>'

          + '    <div class="check-item"><i data-lucide="check-circle" class="check-icon green" style="width:16px;height:16px;margin-right:8px;color:var(--accent);"></i><span>Risk Score: 0.04</span></div>'

          + '  </div>'

          + '</div>'

          + '</div>';

      } else if (num === '04') {

        return '<div class="illustration-container">'

          + '<div class="execution-pipeline">'

          + '  <div class="pipeline-node done">'

          + '    <div class="node-label">Verify</div>'

          + '    <div class="node-status">✓</div>'

          + '  </div>'

          + '  <div class="pipeline-arrow active"></div>'

          + '  <div class="pipeline-node running">'

          + '    <div class="node-label">API Trigger</div>'

          + '    <div class="node-status loader-spin"></div>'

          + '  </div>'

          + '  <div class="pipeline-arrow"></div>'

          + '  <div class="pipeline-node pending">'

          + '    <div class="node-label">Audit Log</div>'

          + '    <div class="node-status">···</div>'

          + '  </div>'

          + '</div>'

          + '</div>';

      } else if (num === '05') {

        return '<div class="illustration-container">'

          + '<div class="learning-panel">'

          + '  <div class="learning-header">'

          + '    <span class="pulse-dot-gold"></span>'

          + '    <span class="panel-title">Vector Memory & Graph Sync</span>'

          + '  </div>'

          + '  <div class="learning-body">'

          + '    <div class="db-stack">'

          + '      <div class="db-layer"><i data-lucide="database" class="db-layer-icon"></i> <span>Vector Store</span></div>'

          + '      <div class="db-layer active"><i data-lucide="git-branch" class="db-layer-icon"></i> <span>Knowledge Graph</span></div>'

          + '    </div>'

          + '    <div class="feedback-connector">'

          + '      <svg class="arrow-svg" viewBox="0 0 60 40" fill="none">'

          + '        <path d="M 50,30 C 50,10 10,10 10,30" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4" class="arrow-path" style="animation: flowLine 15s linear infinite;"></path>'

          + '        <polygon points="10,30 5,22 15,22" fill="var(--gold)"></polygon>'

          + '      </svg>'

          + '      <span class="connector-label">Feedback</span>'

          + '    </div>'

          + '    <div class="updated-node-box">'

          + '      <div class="node-badge-gold">Graph Synced</div>'

          + '      <div class="node-meta">Outcomes Logged</div>'

          + '    </div>'

          + '  </div>'

          + '</div>'

          + '</div>';

      }

      return '';

    }



    steps.forEach(function(s, index) {

      var num = s[0], title = s[1], desc = s[2], icon = s[3], dotColor = s[4];

      var isGold = dotColor === 'var(--gold)';

      var item = document.createElement('div');

      item.className = 'timeline-item ' + (index % 2 === 0 ? 'timeline-left' : 'timeline-right');

      

      var badge = document.createElement('div');

      badge.className = 'timeline-badge';

      if (isGold) {

        badge.style.borderColor = 'var(--gold)';

        badge.style.color = 'var(--gold)';

      }

      badge.innerHTML = icon;



      var content = document.createElement('div');

      content.className = 'timeline-content';

      content.innerHTML = '<div class="timeline-header-row">'

        + '<div class="timeline-step' + (isGold ? ' gold' : '') + '">Step ' + num + '</div>'

        + '<div class="timeline-card-icon">' + icon + '</div>'

        + '</div>'

        + '<div class="timeline-title">' + title + '</div>'

        + '<div class="timeline-desc">' + desc + '</div>';



      var graphic = document.createElement('div');

      graphic.className = 'timeline-graphic';

      graphic.innerHTML = getGraphicHTML(num);



      // Alternating Grid Column Layout for Desktop

      if (index % 2 === 0) {

        item.appendChild(content);

        item.appendChild(graphic);

      } else {

        item.appendChild(graphic);

        item.appendChild(content);

      }



      item.appendChild(badge);

      stepsEl.appendChild(item);

    });

  }



  // Testimonials Slider

  var testimonialsTrack = document.getElementById('testimonialsTrack');

  if (testimonialsTrack) {

    testimonialsTrack.innerHTML = '';

    var testimonials = [

      {

        quote: 'We went from 400 weekly IT tickets to 82. The Service Desk Agent handles the rest — no escalations, no delays. Our team now focuses on architecture and innovation.',

        name: 'Aisha Verma',

        initials: 'AV',

        role: 'Head of IT Operations',

        org: 'NovaBank',

        avatarBg: '#B5F2DB'

      },

      {

        quote: 'Our SOC team was drowning in L1 alerts. The Security Operations Agent now handles 94% of them without human intervention. Our analysts finally have time to hunt threats.',

        name: 'Daniel Brooks',

        initials: 'DB',

        role: 'CISO',

        org: 'CloudAxis',

        avatarBg: '#E4EEF0'

      },

      {

        quote: 'We had no idea 14 servers were outside our SIEM scope until the Security Tool Coverage Agent flagged them in its first weekly report. That was a game changer.',

        name: 'Rohan Mehta',

        initials: 'RM',

        role: 'Head of Security Operations',

        org: 'VertexOne',

        avatarBg: '#FFC933'

      },

      {

        quote: 'The Cloud Operations Agent identified over $600K in annual wasted cloud spend within its first week. The ROI conversation with our board lasted about four minutes.',

        name: 'Sarah Jenkins',

        initials: 'SJ',

        role: 'VP of Cloud Infrastructure',

        org: 'GlobalTech',

        avatarBg: '#FFFFFF'

      },

      {

        quote: 'We passed our ISO 27001 recertification with zero findings for the first time. The Compliance Agent had been collecting evidence and flagging gaps continuously.',

        name: 'Marcus Vance',

        initials: 'MV',

        role: 'Head of GRC',

        org: 'Sovereign Insure',

        avatarBg: '#C2F5E3'

      },

      {

        quote: 'I receive a natural-language operational briefing every Monday at 08:00. It covers IT, security, cloud spend, and compliance posture — synthesised in eight seconds.',

        name: 'Elena Rostova',

        initials: 'ER',

        role: 'Chief Technology Officer',

        org: 'Fintech Enterprise',

        avatarBg: '#FFE082'

      }

    ];

    // Duplicate testimonials for infinite horizontal scrolling loop

    var doubleTestimonials = testimonials.concat(testimonials);

    doubleTestimonials.forEach(function(t) {

      var card = document.createElement('div');

      card.className = 'testimonial-card-slide';

      card.innerHTML = 

          '<div class="testimonial-stars">★★★★★</div>'

        + '<div class="testimonial-quote-mark">“</div>'

        + '<p class="testimonial-text">' + t.quote + '</p>'

        + '<div class="testimonial-footer">'

        + '  <div class="testimonial-avatar" style="background-color: ' + t.avatarBg + '; color: #0b0f19;">' + t.initials + '</div>'

        + '  <div class="testimonial-meta">'

        + '    <div class="testimonial-name">' + t.name + '</div>'

        + '    <div class="testimonial-role">' + t.role + '</div>'

        + '    <div class="testimonial-org-badge">' + t.org + '</div>'

        + '  </div>'

        + '</div>';

      testimonialsTrack.appendChild(card);

    });

  }



  // Agent preview grid

  var agentPreview = document.getElementById('agentPreview');

  if (agentPreview) {

    agentPreview.innerHTML = '';

    agentPreview.className = 'qount-layout';



    // 1. Left Column (Inputs & Cards)

    var leftCol = document.createElement('div');

    leftCol.className = 'q-left-col fade-up';



    // Section 1: Integrations

    var group1 = document.createElement('div');

    group1.className = 'q-group';

    group1.innerHTML = '<span class="q-group-label">Integrations</span>';



    var cardTools = document.createElement('div');

    cardTools.className = 'q-card';

    cardTools.innerHTML = 

        '<div class="q-card-header">'

      + '  <div class="q-card-icon"><i data-lucide="globe"></i></div>'

      + '  <div class="q-card-title">Connected Tools</div>'

      + '</div>'

      + '<div class="q-card-desc">AWS · Okta · CrowdStrike · Slack · Teams · ServiceNow · Splunk</div>'

      + '<div class="q-card-connector"></div>';

    group1.appendChild(cardTools);

    leftCol.appendChild(group1);



    // Section 2: Work Channels

    var group2 = document.createElement('div');

    group2.className = 'q-group';

    group2.innerHTML = '<span class="q-group-label">Work Channels</span>';



    var cardWork = document.createElement('div');

    cardWork.className = 'q-card';

    cardWork.innerHTML = 

        '<div class="q-card-header">'

      + '  <div class="q-card-icon"><i data-lucide="terminal"></i></div>'

      + '  <div class="q-card-title">Workspaces</div>'

      + '</div>'

      + '<div class="q-card-desc">IT Tickets · Security Alerts · Compliance Audits · Cloud Assets</div>'

      + '<div class="q-card-connector"></div>';

    group2.appendChild(cardWork);

    leftCol.appendChild(group2);



    // Section 3: Platform Domains

    var group3 = document.createElement('div');

    group3.className = 'q-group';

    group3.innerHTML = '<span class="q-group-label">Platform Domains</span>';



    var domains = [

      {title: 'Analytics & Logs', desc: 'Real-time telemetry, threat intelligence dashboards & metric compilation.', icon: 'line-chart'},

      {title: 'Access Policies', desc: 'Continuous IAM authorization, Okta guard & RBAC checking.', icon: 'shield-check'},

      {title: 'Incident Operations', desc: 'Automated containment, server isolation & ticket mitigation.', icon: 'cpu'},

      {title: 'GRC Evidence', desc: 'Tamper-evident ISO 27001, SOC 2 & NESA compliance collection.', icon: 'file-text'}

    ];



    domains.forEach(function(d) {

      var card = document.createElement('div');

      card.className = 'q-card';

      card.innerHTML = 

          '<div class="q-card-header">'

        + '  <div class="q-card-icon"><i data-lucide="' + d.icon + '"></i></div>'

        + '  <div class="q-card-title">' + d.title + '</div>'

        + '</div>'

        + '<div class="q-card-desc">' + d.desc + '</div>'

        + '<div class="q-card-connector"></div>';

      group3.appendChild(card);

    });

    leftCol.appendChild(group3);



    // 2. Center Column (Concord Kernel & SVG)

    var centerCol = document.createElement('div');

    centerCol.className = 'q-center-col fade-up';

    centerCol.innerHTML = 

        '<svg id="preview-svg"><g class="q-paths-group"></g></svg>'

      + '<div class="q-kernel-wrapper">'

      + '  <div class="q-kernel">'

      + '    <i data-lucide="box"></i>'

      + '    <div class="q-kernel-connector-left"></div>'

      + '    <div class="q-kernel-connector-right"></div>'

      + '  </div>'

      + '</div>';



    // 3. Right Column (Dashboard Mockup)

    var rightCol = document.createElement('div');

    rightCol.className = 'q-dashboard fade-up';



    var sequenceAgents = [

      {

        code: 'SD',

        name: 'Service Desk Agent',

        dom: 'it',

        stat: '412',

        lbl: 'Resolved/24h',

        desc: 'Auto-provisioning VPN keys & user certificates.',

        metaKey: 'Latency',

        metaVal: '< 40ms',

        status: 'Idle',

        badge: 'IT Auto-Resolve',

        session: 'Session SD-882',

        incidentName: 'VPN Entitlement Reset',

        notice: 'User john.doe requested VPN certificate renewal. Checked MFA logs, verified device posture, and auto-provisioned certificate in 38 seconds.',

        statusText: 'Resolved Automatically',

        statusStyle: 'background:#D1FAE5; border-color:#6EE7B7; color:#065F46;',

        badgeStyle: 'background:#D1FAE5; border-color:#6EE7B7; color:#065F46;',

        leftCardIdx: 1 // Workspaces

      },

      {

        code: 'IA',

        name: 'Identity & Access Agent',

        dom: 'sec',

        stat: '91%',

        lbl: 'Autonomy rate',

        desc: 'Provisioning identities & user lifecycles.',

        metaKey: 'Auth Gate',

        metaVal: 'Okta MFA',

        status: 'Verified',

        badge: 'IAM Enforced',

        session: 'Session IA-309',

        incidentName: 'Joiner Provisioning',

        notice: 'HR database triggered onboarding for 3 new finance employees. Automatically provisioned VPN, Okta, and SaaS entitlements.',

        statusText: 'Day-1 Ready',

        statusStyle: 'background:#E0F2FE; border-color:#7DD3FC; color:#0369A1;',

        badgeStyle: 'background:#E0F2FE; border-color:#7DD3FC; color:#0369A1;',

        leftCardIdx: 3 // Access Policies

      },

      {

        code: 'SO',

        name: 'Security Operations Agent',

        dom: 'sec',

        stat: '94%',

        lbl: 'Auto-contained',

        desc: 'Isolating host endpoints & resolving threats.',

        metaKey: 'Target',

        metaVal: 'WS-FIN-004',

        status: 'Isolating',

        badge: '98 Threat Score',

        session: 'Session SO-492',

        incidentName: 'Okta Session Hijack',

        notice: 'Critical: API session hijacking attempt from unrecognized IP address. Automatic endpoint and session isolation triggered in 8 seconds.',

        statusText: 'Containment Active',

        statusStyle: 'background:#FEE2E2; border-color:#FCA5A5; color:#991B1B;',

        badgeStyle: 'background:#FEE2E2; border-color:#FCA5A5; color:#991B1B;',

        leftCardIdx: 0 // Connected Tools

      },

      {

        code: 'CO',

        name: 'Cloud Operations Agent',

        dom: 'sec',

        stat: '$10K+',

        lbl: 'Saved/month',

        desc: 'Auditing dev cloud spend & sizing assets.',

        metaKey: 'Scope',

        metaVal: 'AWS Prod',

        status: 'Optimizing',

        badge: 'Cost Optimized',

        session: 'Session CO-115',

        incidentName: 'RDS Cost Reduction',

        notice: 'Identified 6 oversized and idle database instances in AWS dev account. Auto-rightsized instances, reducing monthly spend by $3,200.',

        statusText: 'Savings Secured',

        statusStyle: 'background:#D1FAE5; border-color:#6EE7B7; color:#065F46;',

        badgeStyle: 'background:#D1FAE5; border-color:#6EE7B7; color:#065F46;',

        leftCardIdx: 2 // Analytics & Logs

      },

      {

        code: 'IM',

        name: 'Incident Management Agent',

        dom: 'it',

        stat: '89',

        lbl: 'Incidents/24h',

        desc: 'Triaging IT alerts & orchestrating root causes.',

        metaKey: 'Queue',

        metaVal: '0 alerts',

        status: 'Monitoring',

        badge: 'Incident Ops',

        session: 'Session IM-104',

        incidentName: 'Multi-Ticket Root Cause',

        notice: 'Correlated 6 incoming service alerts to a misconfigured CRM load balancer. Paged on-call engineers and updated status page in 90 seconds.',

        statusText: 'Triaged & Escaled',

        statusStyle: 'background:#DBEAFE; border-color:#93C5FD; color:#1E3A8A;',

        badgeStyle: 'background:#DBEAFE; border-color:#93C5FD; color:#1E3A8A;',

        leftCardIdx: 4 // Incident Ops

      },

      {

        code: 'EI',

        name: 'Executive Intelligence Agent',

        dom: 'leadership',

        stat: '8 sec',

        lbl: 'Briefing time',

        desc: 'Generating natural briefings & trend metrics.',

        metaKey: 'Context',

        metaVal: 'Neo4j Graph',

        status: 'Ready',

        badge: 'Exec Briefing',

        session: 'Session EI-007',

        incidentName: 'Weekly Briefing Compilation',

        notice: 'Synthesized natural language query "Why did VPN alerts spike on Tuesday?" by correlation of 412 IT tickets in 8 seconds.',

        statusText: 'Briefing Delivered',

        statusStyle: 'background:#FEF3C7; border-color:#FCD34D; color:#92400E;',

        badgeStyle: 'background:#FEF3C7; border-color:#FCD34D; color:#92400E;',

        leftCardIdx: 2 // Analytics & Logs

      },

      {

        code: 'CG',

        name: 'Compliance & Governance Agent',

        dom: 'compliance',

        stat: '94%',

        lbl: 'Compliance score',

        desc: 'Collecting compliance audits & SOC 2 evidence.',

        metaKey: 'Evidence',

        metaVal: '47 points',

        status: 'Auditing',

        badge: 'Audit Ready',

        session: 'Session CG-511',

        incidentName: 'SOC 2 Evidence Package',

        notice: 'Continuous monitoring scan completed across ISO 27001 and NESA frameworks. Gathered 47 evidence points with zero gaps detected.',

        statusText: '100% Compliant',

        statusStyle: 'background:#D1FAE5; border-color:#6EE7B7; color:#065F46;',

        badgeStyle: 'background:#D1FAE5; border-color:#6EE7B7; color:#065F46;',

        leftCardIdx: 5 // GRC Evidence

      },

      {

        code: 'TC',

        name: 'Security Tool Coverage Agent',

        dom: 'compliance',

        stat: '100%',

        lbl: 'Asset visibility',

        desc: 'Auditing subnet coverage & flagging blindspots.',

        metaKey: 'Coverage',

        metaVal: '100%',

        status: 'Compliant',

        badge: 'Coverage Enforced',

        session: 'Session TC-314',

        incidentName: 'Endpoint EDR Audit',

        notice: 'Scanned 18,420 cloud and endpoint assets. Flagged 5 servers missing EDR agents and sent automated gap report to security team.',

        statusText: 'Blindspots Flagged',

        statusStyle: 'background:#FEF3C7; border-color:#FCD34D; color:#92400E;',

        badgeStyle: 'background:#FEF3C7; border-color:#FCD34D; color:#92400E;',

        leftCardIdx: 5 // GRC Evidence

      }

    ];



    var widgetIcons = {

      SD: '<i data-lucide="help-circle"></i>',

      IM: '<i data-lucide="alert-circle"></i>',

      RC: '<i data-lucide="search"></i>',

      CM: '<i data-lucide="git-pull-request"></i>',

      KI: '<i data-lucide="book-open"></i>',

      AD: '<i data-lucide="server"></i>',

      IA: '<i data-lucide="fingerprint"></i>',

      SO: '<i data-lucide="shield"></i>',

      CO: '<i data-lucide="cloud"></i>',

      EI: '<i data-lucide="bar-chart-2"></i>',

      CG: '<i data-lucide="file-check"></i>',

      TC: '<i data-lucide="scan-eye"></i>'

    };



    var activeCardWrapper = document.createElement('div');

    activeCardWrapper.className = 'q-active-card';

    rightCol.appendChild(activeCardWrapper);



    var gridBox = document.createElement('div');

    gridBox.className = 'q-agents-grid-box';

    gridBox.innerHTML = '<div class="q-grid-connector"></div>';

    

    var gridContainer = document.createElement('div');

    gridContainer.className = 'q-agents-grid';

    gridBox.appendChild(gridContainer);

    rightCol.appendChild(gridBox);



    // Build the 8 agent cards dynamically

    sequenceAgents.forEach(function(a, i) {

      var shortName = a.name.replace(' Agent', '');

      var iconHtml = widgetIcons[a.code] || '<i data-lucide="cpu"></i>';

      

      var card = document.createElement('div');

      card.className = 'q-agent-widget';

      card.setAttribute('data-agent-code', a.code);

      card.innerHTML = 

          '  <div class="q-agent-widget-header">'

        + '    <div class="q-agent-widget-icon ' + a.dom + '">' + iconHtml + '</div>'

        + '    <span class="q-agent-widget-code">' + a.code + '</span>'

        + '  </div>'

        + '  <div class="q-agent-widget-name">' + shortName + '</div>'

        + '  <div class="q-agent-widget-desc">' + a.desc + '</div>'

        + '  <div class="q-agent-widget-meta">'

        + '    <span class="q-agent-widget-meta-lbl">' + a.metaKey + ': ' + a.metaVal + '</span>'

        + '    <span class="q-agent-widget-meta-status"><span class="q-meta-dot"></span>' + a.status + '</span>'

        + '  </div>'

        + '  <div class="q-agent-widget-stat-row">'

        + '    <div class="q-agent-widget-stat">' + a.stat + '</div>'

        + '    <div class="q-agent-widget-lbl">' + a.lbl + '</div>'

        + '  </div>';

      

      card.addEventListener('click', function() {

        selectAgent(i);

      });

      

      gridContainer.appendChild(card);

    });



    // Append columns to parent

    agentPreview.appendChild(leftCol);

    agentPreview.appendChild(centerCol);

    agentPreview.appendChild(rightCol);



    // Render Lucide icons

    lucide.createIcons();



    // Carousel Sequence Variables

    var activeAgentIndex = 0;

    var sequenceTimer = null;



    function updateActiveAgent(idx) {

      activeAgentIndex = idx;

      var a = sequenceAgents[idx];

      if (!a) return;



      // 1. Update active card content

      if (activeCardWrapper) {

        activeCardWrapper.innerHTML = 

            '  <div class="q-active-header">'

          + '    <div class="q-active-badge" style="' + a.badgeStyle + '">' + a.badge + '</div>'

          + '    <div class="q-active-date"><span class="q-active-dot"></span>' + a.session + '</div>'

          + '  </div>'

          + '  <div class="q-active-title-row">'

          + '    <div class="q-active-title">' + a.incidentName + '</div>'

          + '    <div class="q-active-bell"><i data-lucide="bell"></i><span class="q-active-bell-dot"></span></div>'

          + '  </div>'

          + '  <div class="q-active-sub">' + a.name + '</div>'

          + '  <div class="q-active-notice">' + a.notice + '</div>'

          + '  <div class="q-active-footer">'

          + '    <div class="q-active-status" style="' + a.statusStyle + '">' + a.statusText + '</div>'

          + '    <div class="q-active-btn" onclick="go(\'agents\')">Review Log <i data-lucide="external-link"></i></div>'

          + '  </div>';

        

        lucide.createIcons();

      }



      // 2. Toggle active class on agent widgets in the grid

      var widgets = gridContainer.querySelectorAll('.q-agent-widget');

      widgets.forEach(function(w, i) {

        w.classList.toggle('active', i === idx);

      });



      // 3. Toggle active class on left cards

      var leftCards = leftCol.querySelectorAll('.q-card');

      leftCards.forEach(function(card, cIdx) {

        card.classList.toggle('active', cIdx === a.leftCardIdx);

      });



      // 4. Redraw SVG connections and highlight active path

      drawConnections();

    }



    function selectAgent(idx) {

      if (sequenceTimer) {

        clearInterval(sequenceTimer);

      }

      updateActiveAgent(idx);

      startSequenceTimer();

    }



    function startSequenceTimer() {

      sequenceTimer = setInterval(function() {

        var nextIdx = (activeAgentIndex + 1) % sequenceAgents.length;

        updateActiveAgent(nextIdx);

      }, 4000);

    }



    // Connection Path Calculation Function

    function drawConnections() {

      var svg = document.getElementById('preview-svg');

      if (!svg) return;

      var g = svg.querySelector('.q-paths-group');

      if (!g) return;

      g.innerHTML = '';



      if (window.innerWidth <= 1200) return;



      var svgRect = svg.getBoundingClientRect();



      var kLeft = document.querySelector('.q-kernel-connector-left');

      var kRight = document.querySelector('.q-kernel-connector-right');

      if (!kLeft || !kRight) return;



      var klRect = kLeft.getBoundingClientRect();

      var krRect = kRight.getBoundingClientRect();



      var klX = klRect.left - svgRect.left + klRect.width / 2;

      var klY = klRect.top - svgRect.top + klRect.height / 2;



      var krX = krRect.left - svgRect.left + krRect.width / 2;

      var krY = krRect.top - svgRect.top + krRect.height / 2;



      // Draw paths from left cards to kernel

      var leftConnectors = document.querySelectorAll('.q-card-connector');

      leftConnectors.forEach(function(dot, cIdx) {

        var dRect = dot.getBoundingClientRect();

        var startX = dRect.left - svgRect.left + dRect.width / 2;

        var startY = dRect.top - svgRect.top + dRect.height / 2;



        var cp1x = startX + (klX - startX) / 2;

        var cp1y = startY;

        var cp2x = startX + (klX - startX) / 2;

        var cp2y = klY;



        var pathData = 'M ' + startX + ',' + startY + 

                       ' C ' + cp1x + ',' + cp1y + ' ' + cp2x + ',' + cp2y + ' ' + klX + ',' + klY;



        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        path.setAttribute('d', pathData);

        path.setAttribute('class', 'q-svg-path active');

        g.appendChild(path);



        // Check if this card's path is currently active

        var isPathActive = false;

        var parentCard = dot.closest('.q-card');

        if (parentCard && parentCard.classList.contains('active')) {

          isPathActive = true;

        }



        var pulsePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        pulsePath.setAttribute('d', pathData);

        if (isPathActive) {

          pulsePath.setAttribute('class', 'q-svg-path-pulse active-flow');

        } else {

          pulsePath.setAttribute('class', 'q-svg-path-pulse');

        }

        pulsePath.style.animationDelay = (Math.random() * 2) + 's';

        g.appendChild(pulsePath);

      });



      // Draw path from kernel right to dashboard agent grid

      var dashConnector = document.querySelector('.q-grid-connector');

      if (dashConnector) {

        var dashRect = dashConnector.getBoundingClientRect();

        var endX = dashRect.left - svgRect.left + dashRect.width / 2;

        var endY = dashRect.top - svgRect.top + dashRect.height / 2;



        var cp1x = krX + (endX - krX) / 2;

        var cp1y = krY;

        var cp2x = krX + (endX - krX) / 2;

        var cp2y = endY;



        var pathData = 'M ' + krX + ',' + krY + 

                       ' C ' + cp1x + ',' + cp1y + ' ' + cp2x + ',' + cp2y + ' ' + endX + ',' + endY;



        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        path.setAttribute('d', pathData);

        path.setAttribute('class', 'q-svg-path active');

        g.appendChild(path);



        var pulsePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        pulsePath.setAttribute('d', pathData);

        pulsePath.setAttribute('class', 'q-svg-path-pulse active-flow');

        g.appendChild(pulsePath);

      }

    }



    // Initial state setup and start loop

    updateActiveAgent(0);

    startSequenceTimer();



    // Call drawConnections after render to let sizes calculate

    setTimeout(drawConnections, 200);



    // Recalculate on resize and scroll

    window.addEventListener('resize', drawConnections);

    window.addEventListener('scroll', drawConnections);

  }

}

/* ── BUILD: PLATFORM ──────────────────────────────────── */

function buildPlatform() {

  // 1. Core Services Bento Grid

  var servicesEl = document.getElementById('platformServices');

  if (servicesEl) {

    servicesEl.innerHTML = '';

    var services = [

      {

        title: 'API Gateway',

        desc: 'Every channel — Teams, web portal, email, REST API — enters here. Authentication, rate limiting, tenant routing, and WebSocket server for real-time streaming.',

        icon: 'network',

        span: 'b-span-1',

        visual: ''

      },

      {

        title: 'Orchestration Service',

        desc: 'Intent extraction, agent routing, multi-agent coordination, and real-time status streaming. The brain that decides who handles what.',

        icon: 'git-branch',

        span: 'b-span-2',

        visual: '<div class="bento-visual" style="height:150px"><div class="bento-dotted-grid"></div><canvas id="vis-orchestration-canvas" style="width:100%;height:100%"></canvas></div>'

      },

      {

        title: 'Agent Runtime',

        desc: 'LangGraph reasoning + Temporal durable execution. Each agent runs a 5-step lifecycle (Understand → Reason → Decide → Execute → Learn) with full state management and retries.',

        icon: 'play',

        span: 'b-span-2',

        visual: '<div class="bento-visual" style="height:150px"><div class="bento-dotted-grid"></div><div class="vis-stepper" id="vis-stepper-container"></div></div>'

      },

      {

        title: 'Connector Service',

        desc: '70+ integrations. Every API call wrapped with authentication, retry logic, circuit breaking, rate limiting, and an immutable audit hook.',

        icon: 'link',

        span: 'b-span-1',

        visual: '<div class="bento-visual" style="height:150px"><div class="bento-dotted-grid"></div><div class="vis-connector-grid">' +

          ['Slack', 'Teams', 'Jira', 'GitHub', 'AWS', 'Azure', 'Okta', 'GCP'].map(function(t) {

            return '<div class="vis-connector-icon" style="font-family:var(--mono);font-size:9px;font-weight:700">' + t + '</div>';

          }).join('') + '</div></div>'

      },

      {

        title: 'Knowledge & Policy Service',

        desc: 'Neo4j organisational knowledge graph + Weaviate vector store. Policy engine evaluates risk before every action. Nothing executes without a verdict.',

        icon: 'shield',

        span: 'b-span-1',

        visual: '<div class="bento-visual" style="height:150px"><div class="bento-dotted-grid"></div><div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:8px">' +

          '  <div style="font-size:24px;font-weight:800;color:var(--accent);font-family:var(--mono)" id="vis-policy-score">0.12</div>' +

          '  <div style="font-size:9px;font-weight:700;color:var(--text-3);letter-spacing:1px;text-transform:uppercase">POLICIES EVALUATING...</div>' +

          '</div></div>'

      },

      {

        title: 'Audit Service',

        desc: 'Append-only, hash-chained, immutable event log. Every decision, action, and escalation — retained for 1 year (Enterprise) or 90 days (Starter). SOC 2 and NESA compliant.',

        icon: 'history',

        span: 'b-span-2',

        visual: '<div class="bento-visual" style="height:150px"><div class="bento-dotted-grid"></div><div class="vis-terminal" id="vis-terminal-logs"></div></div>'

      }

    ];



    services.forEach(function(s) {

      var card = document.createElement('div');

      card.className = 'bento-card ' + s.span + ' fade-up';

      card.innerHTML = '<div>'

        + '  <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">'

        + '    <div style="width:36px;height:36px;border-radius:10px;background:rgba(20,184,166,0.1);border:1px solid rgba(20,184,166,0.2);display:flex;align-items:center;justify-content:center;color:var(--accent)">'

        + '      <i data-lucide="' + s.icon + '" style="width:18px;height:18px"></i>'

        + '    </div>'

        + '    <h4 style="font-size:15px;font-weight:700;color:var(--text-1);margin:0">' + s.title + '</h4>'

        + '  </div>'

        + '  <p style="font-size:13.5px;color:var(--text-2);line-height:1.55">' + s.desc + '</p>'

        + '</div>'

        + s.visual;

      servicesEl.appendChild(card);

    });



    // Start Orchestration canvas simulation

    initOrchestrationCanvas();

    // Start Runtime stepper simulation

    initRuntimeStepper();

    // Start Policy Score simulation

    initPolicyScoreTimer();

    // Start Terminal Log simulation

    initTerminalLogs();

  }



  // 2. Execution Flow Steps

  var stepsEl = document.getElementById('execFlow');

  if (stepsEl) {

    stepsEl.innerHTML = '';

    var execSteps = [

      ['Request received','Via Teams, web portal, email, or REST API'],

      ['Authentication','JWT/SSO validated, tenant context extracted'],

      ['Intent classification','LLM extracts intent, entities, and urgency level'],

      ['Knowledge lookup','Neo4j graph queried for organisational context'],

      ['Risk assessment','Policy engine scores the action (0 to 1.0)'],

      ['Route decision','AUTO / NOTIFY / APPROVE / REJECT'],

      ['Connector execution','Action taken via authenticated API call'],

      ['Audit record','Immutable log written with full trace and diff'],

    ];

    execSteps.forEach(function(s, i) {

      var row = document.createElement('div');

      row.style.cssText = 'display:flex;gap:12px;align-items:flex-start;padding:8px 12px;border-radius:8px;transition:all 0.3s ease;';

      row.className = 'exec-step-row';

      row.setAttribute('data-step-idx', i);

      row.innerHTML = '<div class="step-dot" style="font-family:var(--mono);font-size:11px;font-weight:700;width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;color:var(--text-3)">' + (i < 9 ? '0' : '') + (i + 1) + '</div>'

        + '<div><div style="font-size:13.5px;font-weight:700;color:var(--text-2);transition:color 0.3s">' + s[0] + '</div><div style="font-size:12.5px;color:var(--text-3);margin-top:2px">' + s[1] + '</div></div>';

      stepsEl.appendChild(row);

    });



    // Start synchronised highlight loop between list and SVG node graph

    initPipelineHighlightCycle();

  }



  // 3. Policy Engine Risk Factors

  var riskRows = document.getElementById('riskRows');

  if (riskRows) {

    riskRows.innerHTML = '';

    var factors = [

      ['Action type','Read 0.1 → Write 0.4 → Delete 0.7 → Bulk 0.95'],

      ['System criticality','P1 systems always require approval'],

      ['Requester identity','Known employee vs contractor vs unverified'],

      ['Time of day','After-hours on critical systems adds 0.2'],

      ['Recent changes','Same system change in last 2h adds 0.3'],

      ['SoD conflict','Self-approve = auto-reject, always'],

    ];

    factors.forEach(function(f) {

      var row = document.createElement('div');

      row.className = 'risk-factor-row';

      row.innerHTML = '<span style="font-size:13px;font-weight:600;color:var(--text-2)">' + f[0] + '</span><span style="font-size:12px;color:var(--accent);font-family:var(--mono)">' + f[1] + '</span>';

      riskRows.appendChild(row);

    });

  }



  // 4. Risk Routing Thresholds

  var riskPills = document.getElementById('riskPills');

  if (riskPills) {

    riskPills.innerHTML = '';

    var routes = [['< 0.3','AUTO EXECUTE', 'Simple tasks (reads, password resets) run in milliseconds with zero friction.'],['0.3 – 0.6','NOTIFY + EXECUTE', 'Agent alerts security channels but executes the task to ensure no work interruption.'],['0.6 – 0.8','REQUIRE APPROVAL', 'High-impact writes or sensitive system edits hold for supervisor authorization.'],['> 0.8','REJECT', 'Dangerous actions or separation-of-duty violations block automatically with alerts.']];

    riskPills.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;width:100%;';

    routes.forEach(function(r) {

      var card = document.createElement('div');

      card.className = 'risk-pill-card';

      card.innerHTML = '<div style="color:var(--gold);font-family:var(--mono);font-weight:700;font-size:13.5px;letter-spacing:0.5px">' + r[0] + '</div>'

        + '<div style="color:var(--text-1);font-weight:800;font-size:12px;letter-spacing:0.5px;text-transform:uppercase">' + r[1] + '</div>'

        + '<div style="color:var(--text-3);font-size:12px;line-height:1.45">' + r[2] + '</div>';

      riskPills.appendChild(card);

    });

  }



  // 5. Tenant Isolation layers bento

  var isoEl = document.getElementById('isoLayers');

  if (isoEl) {

    isoEl.innerHTML = '';

    var layers = [

      { name: 'Database', desc: 'PostgreSQL Row-Level Security — tenant_id enforced at DB level, not application level. Cross-tenant queries are impossible.', icon: 'database', span: 'b-span-2' },

      { name: 'Knowledge Graph', desc: 'Neo4j tenant_id on all nodes. Query interceptor prepends tenant filter to every Cypher statement automatically.', icon: 'network', span: 'b-span-1' },

      { name: 'Message Bus', desc: "Kafka topics prefixed with tenant ID. Consumer groups isolated. One tenant's events cannot reach another's agents.", icon: 'list', span: 'b-span-1' },

      { name: 'File Storage', desc: 'Separate S3 prefix namespace per tenant. IAM policies enforce prefix boundaries at the AWS infrastructure level.', icon: 'folder-open', span: 'b-span-2' },

      { name: 'Agent Execution', desc: 'Temporal workflow namespace per tenant. Cross-tenant connector access is architecturally impossible.', icon: 'shield-check', span: 'b-span-1' },

      { name: 'Vector Search', desc: 'Weaviate separate class per tenant. API key scoped to tenant class. Semantic search cannot return cross-tenant results.', icon: 'search', span: 'b-span-2' }

    ];

    layers.forEach(function(l) {

      var card = document.createElement('div');

      card.className = 'bento-card ' + l.span + ' fade-up';

      card.innerHTML = '<div>'

        + '  <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'

        + '    <div style="width:34px;height:34px;border-radius:9px;background:rgba(20,184,166,.15);border:1px solid rgba(20,184,166,.2);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0"><i data-lucide="' + l.icon + '" style="width:18px;height:18px"></i></div>'

        + '    <h4 style="font-size:14.5px;margin:0;color:var(--text-1)">' + l.name + '</h4>'

        + '  </div>'

        + '  <p style="font-size:13.5px;color:var(--text-2);line-height:1.5">' + l.desc + '</p>'

        + '</div>';

      isoEl.appendChild(card);

    });

  }



  // Re-init lucide icons on dynamically created markup

  if (typeof lucide !== 'undefined') {

    lucide.createIcons();

  }

}



/* ── BENTO PLATFORM SIMULATIONS & INTERACTIONS ─────────── */

function initOrchestrationCanvas() {

  const canvas = document.getElementById('vis-orchestration-canvas');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  

  // Set scale factor for HighDPI screens

  const dpr = window.devicePixelRatio || 1;

  let width = canvas.width = (canvas.offsetWidth || 300) * dpr;

  let height = canvas.height = (canvas.offsetHeight || 150) * dpr;

  ctx.scale(dpr, dpr);



  const cssWidth = canvas.offsetWidth || 300;

  const cssHeight = canvas.offsetHeight || 150;

  

  const points = [];

  for (let i = 0; i < 16; i++) {

    points.push({

      x: Math.random() * cssWidth,

      y: Math.random() * cssHeight,

      vx: (Math.random() - 0.5) * 0.45,

      vy: (Math.random() - 0.5) * 0.45

    });

  }



  let active = true;

  function animate() {

    if (!active) return;

    ctx.clearRect(0, 0, cssWidth, cssHeight);

    

    // Draw points

    points.forEach(p => {

      p.x += p.vx;

      p.y += p.vy;

      if (p.x < 0 || p.x > cssWidth) p.vx *= -1;

      if (p.y < 0 || p.y > cssHeight) p.vy *= -1;

      

      ctx.beginPath();

      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);

      ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';

      ctx.fill();

    });



    // Draw lines

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.09)';

    ctx.lineWidth = 1;

    for (let i = 0; i < points.length; i++) {

      for (let j = i + 1; j < points.length; j++) {

        const dx = points[i].x - points[j].x;

        const dy = points[i].y - points[j].y;

        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < 60) {

          ctx.beginPath();

          ctx.moveTo(points[i].x, points[i].y);

          ctx.lineTo(points[j].x, points[j].y);

          ctx.stroke();

        }

      }

    }

    requestAnimationFrame(animate);

  }

  animate();

  

  const observer = new MutationObserver(() => {

    if (!document.getElementById('vis-orchestration-canvas')) {

      active = false;

      observer.disconnect();

    }

  });

  observer.observe(document.body, { childList: true, subtree: true });

}



function initRuntimeStepper() {

  const container = document.getElementById('vis-stepper-container');

  if (!container) return;

  

  const steps = ['UND', 'RSN', 'DEC', 'EXE', 'LRN'];

  container.innerHTML = '';

  

  steps.forEach((s, idx) => {

    const node = document.createElement('div');

    node.className = 'vis-step-node' + (idx === 0 ? ' active' : '');

    node.innerHTML = '<span style="font-family:var(--mono);font-size:9.5px">' + s + '</span>';

    container.appendChild(node);

    

    if (idx < steps.length - 1) {

      const line = document.createElement('div');

      line.className = 'vis-step-line';

      line.innerHTML = '<div class="vis-step-line-fill"></div>';

      container.appendChild(line);

    }

  });

  

  let currentStep = 0;

  const interval = setInterval(() => {

    if (!document.getElementById('vis-stepper-container')) {

      clearInterval(interval);

      return;

    }

    const nodes = container.querySelectorAll('.vis-step-node');

    const lines = container.querySelectorAll('.vis-step-line-fill');

    

    nodes.forEach(n => n.classList.remove('active'));

    lines.forEach(l => l.style.width = '0%');

    

    currentStep = (currentStep + 1) % steps.length;

    nodes[currentStep].classList.add('active');

    

    for (let k = 0; k < currentStep; k++) {

      if (lines[k]) lines[k].style.width = '100%';

    }

  }, 2000);

}



function initPolicyScoreTimer() {

  const scoreEl = document.getElementById('vis-policy-score');

  if (!scoreEl) return;

  const interval = setInterval(() => {

    if (!scoreEl || !document.getElementById('vis-policy-score')) {

      clearInterval(interval);

      return;

    }

    const randomScore = (Math.random() * 0.95).toFixed(2);

    scoreEl.textContent = randomScore;

    if (parseFloat(randomScore) > 0.8) {

      scoreEl.style.color = '#ef4444';

    } else if (parseFloat(randomScore) > 0.6) {

      scoreEl.style.color = 'var(--gold)';

    } else {

      scoreEl.style.color = 'var(--accent)';

    }

  }, 2200);

}



function initTerminalLogs() {

  const logsEl = document.getElementById('vis-terminal-logs');

  if (!logsEl) return;

  

  const lines = [

    '[AUDIT] Ingested Slack API event: message.created',

    '[POLICY] Action "Post Message" evaluated. Risk score: 0.12',

    '[POLICY] Risk routing: AUTO_EXECUTE',

    '[RUNTIME] Triggered Slack Agent runtime environment',

    '[CONNECTOR] Enforcing TLS 1.3 to slack.com/api',

    '[AUDIT] Event written: Hash chain checksum verified (OK)'

  ];

  

  let lineIdx = 0;

  logsEl.innerHTML = '';

  

  function addLine() {

    if (!logsEl || !document.getElementById('vis-terminal-logs')) return;

    if (logsEl.children.length > 5) {

      logsEl.removeChild(logsEl.firstChild);

    }

    const div = document.createElement('div');

    div.className = 'vis-terminal-line';

    div.style.animation = 'visTyping 1s steps(40, end) forwards';

    div.textContent = lines[lineIdx];

    logsEl.appendChild(div);

    

    lineIdx = (lineIdx + 1) % lines.length;

    setTimeout(addLine, 2500);

  }

  addLine();

}



function initPipelineHighlightCycle() {

  const rows = document.querySelectorAll('.exec-step-row');

  const svg = document.getElementById('preview-svg');

  if (!svg) return;

  

  let activeStep = 0;

  

  const nodes = {

    ingest: svg.getElementById('node-ingest'),

    intel: svg.getElementById('node-intel'),

    risk: svg.getElementById('node-risk'),

    exec: svg.getElementById('node-execution'),

    audit: svg.getElementById('node-audit')

  };

  

  const pulses = {

    p1: svg.getElementById('pipe-pulse-1'),

    p2: svg.getElementById('pipe-pulse-2'),

    p3: svg.getElementById('pipe-pulse-3')

  };



  function updateCycle() {

    if (!document.getElementById('execFlow')) return;

    

    rows.forEach(r => {

      r.style.background = 'transparent';

      r.querySelector('.step-dot').style.background = 'rgba(255,255,255,0.05)';

      r.querySelector('.step-dot').style.borderColor = 'rgba(255,255,255,0.1)';

      r.querySelector('.step-dot').style.color = 'var(--text-3)';

      r.querySelector('div > div').style.color = 'var(--text-2)';

    });

    

    Object.values(nodes).forEach(n => {

      if (n) n.classList.remove('active-node');

    });

    

    Object.values(pulses).forEach(p => {

      if (p) {

        p.style.opacity = '0';

        p.style.strokeDashoffset = '200';

      }

    });



    const activeRow = document.querySelector(`.exec-step-row[data-step-idx="${activeStep}"]`);

    if (activeRow) {

      activeRow.style.background = 'rgba(20, 184, 166, 0.04)';

      const dot = activeRow.querySelector('.step-dot');

      dot.style.background = 'rgba(20, 184, 166, 0.15)';

      dot.style.borderColor = 'var(--accent)';

      dot.style.color = 'var(--accent)';

      activeRow.querySelector('div > div').style.color = '#fff';

    }



    if (activeStep === 0 || activeStep === 1) {

      if (nodes.ingest) nodes.ingest.classList.add('active-node');

      if (nodes.intel) nodes.intel.classList.add('active-node');

      if (pulses.p1) {

        pulses.p1.style.opacity = '1';

        pulses.p1.style.animation = 'visPulse 1.8s linear infinite';

      }

    } else if (activeStep === 2 || activeStep === 3) {

      if (nodes.intel) nodes.intel.classList.add('active-node');

      if (nodes.risk) nodes.risk.classList.add('active-node');

    } else if (activeStep === 4 || activeStep === 5) {

      if (nodes.risk) nodes.risk.classList.add('active-node');

      if (nodes.exec) nodes.exec.classList.add('active-node');

      if (pulses.p2) {

        pulses.p2.style.opacity = '1';

        pulses.p2.style.animation = 'visPulse 1.8s linear infinite';

      }

    } else if (activeStep === 6) {

      if (nodes.exec) nodes.exec.classList.add('active-node');

      if (nodes.audit) nodes.audit.classList.add('active-node');

      if (pulses.p3) {

        pulses.p3.style.opacity = '1';

        pulses.p3.style.animation = 'visPulse 1.8s linear infinite';

      }

    } else if (activeStep === 7) {

      if (nodes.audit) nodes.audit.classList.add('active-node');

    }



    activeStep = (activeStep + 1) % 8;

  }



  if (!document.getElementById('vis-pulse-style')) {

    const style = document.createElement('style');

    style.id = 'vis-pulse-style';

    style.innerHTML = `

      @keyframes visPulse {

        0% { stroke-dashoffset: 200; }

        100% { stroke-dashoffset: 0; }

      }

    `;

    document.head.appendChild(style);

  }



  updateCycle();

  const interval = setInterval(updateCycle, 2600);

}





/* ── BUILD: AGENTS ────────────────────────────────────── */

function buildAgentGrid() {

  var container = document.getElementById('agentGrid');

  if (!container || container.dataset.built) return;

  container.dataset.built = '1';



  var domainConfig = {

    'IT & Operations': {color:'rgba(20,184,166,.12)',text:'var(--accent)',icon:'<i data-lucide="monitor" style="width:16px;height:16px;"></i>'},

    'Security & Cloud': {color:'rgba(20,184,166,.08)',text:'var(--accent)',icon:'<i data-lucide="shield" style="width:16px;height:16px;"></i>'},

    'Reporting & Compliance': {color:'rgba(245,158,11,.15)',text:'var(--gold)',icon:'<i data-lucide="file-check" style="width:16px;height:16px;"></i>'},

  };



  var domains = {};

  var order = [];

  AGENTS.forEach(function(a) {

    if (!domains[a.domain]) { domains[a.domain] = []; order.push(a.domain); }

    domains[a.domain].push(a);

  });



  order.forEach(function(domain) {

    var agents = domains[domain];

    var cfg = domainConfig[domain] || {color:'rgba(255,255,255,.05)',text:'var(--text-3)',icon:'AG'};

    var section = document.createElement('div');

    section.style.cssText = 'margin-bottom:40px';



    var header = document.createElement('div');

    header.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.07)';

    header.innerHTML = '<div style="width:36px;height:36px;border-radius:9px;background:' + cfg.color + ';border:1px solid ' + cfg.text + ';display:flex;align-items:center;justify-content:center;color:' + cfg.text + ';flex-shrink:0">' + cfg.icon + '</div>'

      + '<div style="flex:1"><h3 style="font-size:17px;font-weight:800;color:var(--text-1);margin:0">' + domain + '</h3><div style="font-size:12px;color:var(--text-3);margin-top:2px">' + agents.length + ' agent' + (agents.length > 1 ? 's' : '') + '</div></div>';

    section.appendChild(header);



    var grid = document.createElement('div');

    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:10px';



    agents.forEach(function(a) {

      var card = document.createElement('div');

      card.style.cssText = 'background:rgba(4,47,52,0.2);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:16px 18px;display:flex;gap:14px;align-items:flex-start;transition:all .18s; cursor:pointer;';

      card.onmouseenter = function() { this.style.borderColor = 'var(--accent)'; this.style.transform = 'translateY(-2px)'; };

      card.onmouseleave = function() { this.style.borderColor = 'rgba(255,255,255,.07)'; this.style.transform = 'none'; };

      card.innerHTML =

        '<div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,rgba(4,47,52,0.4),rgba(22,35,43,0.5));border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0">' + (AGENT_ICONS[a.code] || a.code) + '</div>'

        + '<div style="flex:1;min-width:0">'

        + '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:5px">'

        + '<div style="font-size:13.5px;font-weight:700;color:var(--text-1)">' + a.name + '</div>'

        + '<div style="text-align:right;flex-shrink:0"><span style="font-family:var(--mono);font-size:13px;font-weight:600;color:var(--accent)">' + a.stat + '</span> <span style="font-size:10.5px;color:var(--text-3)">' + a.lbl + '</span></div>'

        + '</div>'

        + '<p style="font-size:12.5px;color:var(--text-3);line-height:1.5;margin:0">' + a.desc + '</p>'

        + '</div>';

      grid.appendChild(card);

    });



    section.appendChild(grid);

    container.appendChild(section);

  });

  lucide.createIcons();

}



function buildAgentExtras() {

  var impactGrid = document.getElementById('agentImpactGrid');

  if (impactGrid && !impactGrid.dataset.built) {

    impactGrid.dataset.built = '1';

    impactGrid.innerHTML = '';

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

      card.className = 'card fade-up';

      card.style.cssText = 'text-align:center;padding:22px 16px';

      card.innerHTML = '<div style="font-family:var(--mono);font-size:26px;font-weight:700;color:var(--accent);line-height:1;margin-bottom:8px">' + imp.num + '</div>'

        + '<div style="font-size:13px;font-weight:700;color:var(--text-1);margin-bottom:4px">' + imp.lbl + '</div>'

        + '<div style="font-size:11.5px;color:var(--text-3)">' + imp.sub + '</div>';

      impactGrid.appendChild(card);

    });

  }



  var band = document.getElementById('integrationBand');

  if (band && !band.dataset.built) {

    band.dataset.built = '1';

    band.innerHTML = '';

    var integrations = ['ServiceNow','Jira','Workday','Microsoft Entra ID','Microsoft 365','AWS','Azure','GCP','Slack','Teams','Okta','CrowdStrike','SentinelOne','Splunk','Tenable','Qualys','Datadog','PagerDuty','GitHub','GitLab','SAP','Oracle ERP','NetSuite','Coupa','Ariba','Zoom','DocuSign','Freshservice','Zendesk','Intune'];

    integrations.forEach(function(name) {

      var pill = document.createElement('div');

      pill.className = 'cbadge fade-up';

      pill.style.cssText = 'font-size:12px;padding:8px 14px';

      pill.textContent = name;

      band.appendChild(pill);

    });

  }

}



/* ── BUILD: SOLUTIONS ─────────────────────────────────── */

function buildSolutions(id, btn) {

  if (!id) id = 'it';

  if (btn) {

    document.querySelectorAll('.sol-tab').forEach(function(b) { b.classList.remove('act'); });

    btn.classList.add('act');

  } else {

    document.querySelectorAll('.sol-tab').forEach(function(b) {

      if (b.dataset.sol === id) b.classList.add('act');

      else b.classList.remove('act');

    });

  }

  var s = SOLUTIONS[id];

  if (!s) return;

  var container = document.getElementById('solContent');

  if (!container) return;

  container.innerHTML = '';



  var agentData = AGENTS.filter(function(a) { return s.agents.indexOf(a.code) !== -1; });



  // ── TOP BAND: tagline + metrics ──

  var topBand = document.createElement('div');

  topBand.className = 'sol-top-band fade-up';

  var topLeft = document.createElement('div');

  topLeft.innerHTML = '<div class="eyebrow">' + s.title + '</div>'

    + '<div class="sol-tagline">' + s.tagline + '</div>'

    + '<div class="sol-body">' + s.body + '</div>';

  var mets = document.createElement('div');

  mets.className = 'sol-mets';

  s.metrics.forEach(function(m) {

    var met = document.createElement('div');

    met.className = 'sol-met';

    met.innerHTML = '<div class="sol-met-v">' + m[0] + '</div><div class="sol-met-l">' + m[1] + '</div>';

    mets.appendChild(met);

  });

  topBand.appendChild(topLeft);

  topBand.appendChild(mets);

  container.appendChild(topBand);



  // ── MAIN GRID: agents | capabilities ──

  var mgrid = document.createElement('div');

  mgrid.className = 'sol-mgrid';



  // COL 1: agent cards

  var leftCol = document.createElement('div');

  var agHd = document.createElement('div');

  agHd.className = 'sol-col-hd';

  agHd.textContent = 'Agents included';

  leftCol.appendChild(agHd);

  agentData.forEach(function(a) {

    var ac = document.createElement('div');

    ac.className = 'sol-ac fade-up';

    ac.innerHTML = '<div class="sol-acode">' + (AGENT_ICONS[a.code] || a.code) + '</div>'

      + '<div>'

        + '<div class="sol-apill">' + a.domain + '</div>'

        + '<div class="sol-aname">' + a.name + '</div>'

        + '<div class="sol-adesc">' + a.desc + '</div>'

      + '</div>'

      + '<div class="sol-astat">'

        + '<div class="sol-aval">' + a.stat + '</div>'

        + '<div class="sol-albl">' + a.lbl + '</div>'

      + '</div>';

    leftCol.appendChild(ac);

  });



  // COL 2: key capabilities

  var rightCol = document.createElement('div');

  rightCol.className = 'sol-rcol';

  var singlePanel = document.createElement('div');

  singlePanel.className = 'sol-panel fade-up';

  var capsHd = document.createElement('div');

  capsHd.className = 'sol-col-hd';

  capsHd.textContent = 'Key capabilities';

  singlePanel.appendChild(capsHd);

  var capsGrid = document.createElement('div');

  capsGrid.className = 'sol-caps-grid';

  s.caps.forEach(function(c) {

    var cap = document.createElement('div');

    cap.className = 'sol-cap';

    cap.innerHTML = '<div class="sol-ck"></div><div class="sol-ct">' + c + '</div>';

    capsGrid.appendChild(cap);

  });

  singlePanel.appendChild(capsGrid);

  rightCol.appendChild(singlePanel);



  // Scenarios panel — inline (2-col) for IT tab, full-width 4-grid for Security & Leadership tabs



  var statusText = '[RUNBOOK: STABLE]';

  if (id === 'it') statusText = '[TELEMETRY: AUTO-RESOLVED]';

  else if (id === 'security') statusText = '[THREAT: AUTO-CONTAINED]';

  else if (id === 'leadership') statusText = '[COMPLIANCE: VERIFIED]';



  if (id === 'it' && s.usecases && s.usecases.length) {

    // IT tab: keep scenarios inside the right column (2-col grid)

    var scPanel = document.createElement('div');

    scPanel.className = 'sol-panel fade-up';

    scPanel.style.marginTop = '16px';

    var scHd = document.createElement('div');

    scHd.className = 'sol-col-hd';

    scHd.textContent = 'Real-world scenarios';

    scPanel.appendChild(scHd);

    var scGrid = document.createElement('div');

    scGrid.className = 'sol-scgrid';

    s.usecases.forEach(function(uc) {

      var sc = document.createElement('div');

      sc.className = 'sol-sc';

      sc.innerHTML = '<div class="sol-sc-header">'

        + '<span class="sol-sc-status-dot"></span>'

        + '<span class="sol-sc-status-text">' + statusText + '</span>'

        + '</div>'

        + '<div class="sol-sc-t">' + uc.title + '</div>'

        + '<div class="sol-sc-b">' + uc.body + '</div>';

      scGrid.appendChild(sc);

    });

    scPanel.appendChild(scGrid);

    rightCol.appendChild(scPanel);

  }



  mgrid.appendChild(leftCol);

  mgrid.appendChild(rightCol);

  container.appendChild(mgrid);





  // Security & Leadership: full-width 4-card row BELOW the main grid (desktop only)

  if ((id === 'security' || id === 'leadership') && s.usecases && s.usecases.length) {

    var scRow = document.createElement('div');

    scRow.className = 'sol-sc-row fade-up';

    var scRowHd = document.createElement('div');

    scRowHd.className = 'sol-sc-row-hd';

    scRowHd.textContent = 'Real-world scenarios';

    scRow.appendChild(scRowHd);

    var sc4grid = document.createElement('div');

    sc4grid.className = 'sol-sc-4grid';

    s.usecases.forEach(function(uc) {

      var card = document.createElement('div');

      card.className = 'sol-sc-card';

      card.innerHTML = '<div class="sol-sc-header">'

        + '<span class="sol-sc-status-dot"></span>'

        + '<span class="sol-sc-status-text">' + statusText + '</span>'

        + '</div>'

        + '<div class="sol-sc-card-t">' + uc.title + '</div>'

        + '<div class="sol-sc-card-b">' + uc.body + '</div>';

      sc4grid.appendChild(card);

    });

    scRow.appendChild(sc4grid);

    container.appendChild(scRow);

  }







  // ── CTA STRIP ──

  var cta = document.createElement('div');

  cta.className = 'sol-cta fade-up';

  var ctaText = document.createElement('div');

  ctaText.innerHTML = '<div class="sol-cta-h">Ready to deploy ' + s.title + '?</div>'

    + '<div class="sol-cta-s">Live in 5 business days · No professional services required · First agent handling real requests by end of week one</div>';

  var ctaBtn = document.createElement('button');

  ctaBtn.className = 'sol-cta-btn';

  ctaBtn.textContent = 'Get started with ' + s.title + ' →';

  ctaBtn.onclick = function() { go('contact'); };

  cta.appendChild(ctaText);

  cta.appendChild(ctaBtn);

  container.appendChild(cta);



  // Trigger GSAP fade-in for the new content elements

  var newFades = container.querySelectorAll('.fade-up');

  if (newFades.length > 0) {

    gsap.set(newFades, { opacity: 0, y: 20 });

    gsap.to(newFades, {

      opacity: 1,

      y: 0,

      duration: 0.5,

      ease: 'power2.out',

      stagger: 0.05

    });

  }



  lucide.createIcons();

}



/* ── BUILD: PRICING ───────────────────────────────────── */

function buildPricing() {

  var grid = document.getElementById('pricingGrid');

  if (!grid || grid.dataset.built) return;

  grid.dataset.built = '1';



  var plans = [

    {

      name: 'Essential',

      tier: 'Up to 100 users',

      amount: '$999',

      period: 'per month · annual billing',

      featured: false,

      btnClass: 'btn-outline',

      btnText: 'Start with Essential',

      features: ['3 active agents','Up to 100 users','10 connectors included','Employee self-service portal','Full audit trail — 7-day retention','Email + Teams notifications','ISO 27001 & SOC 2 aligned','Standard SLA (next business day)']

    },

    {

      name: 'Professional',

      tier: '100 – 500 users',

      amount: '$1,999',

      period: 'per month · annual billing',

      featured: false,

      btnClass: 'btn-ghost',

      btnText: 'Start with Professional',

      features: ['6 active agents','Up to 500 users','20 connectors','Admin Console + policy editor','Full audit trail — 30-day retention','SSO (SAML / OIDC)','4-hour SLA for P1 incidents','NESA, ISO 27001, SOC 2 aligned','GCC Cloud compliant']

    },

    {

      name: 'Enterprise',

      tier: '500 – 2,000 users',

      amount: '$3,999',

      period: 'per month · annual billing',

      featured: true,

      badge: 'Most popular',

      btnClass: 'btn-primary',

      btnText: 'Get Enterprise access',

      features: ['9 active agents','Up to 2,000 users','30 connectors','All portal screens + Admin Console','Full audit trail — 90-day retention','SSO (SAML / OIDC) + MFA enforced','4-hour P1 / 8-hour P2 SLA','Dedicated customer success manager','SOC 2 Type II evidence package','NESA, PDPL, ISO 27001, PCI DSS','GCC Cloud compliant · AWS region choice']

    },

    {

      name: 'Enterprise Plus',

      tier: '2,000+ users · Custom',

      amount: 'Custom',

      period: 'tailored deployment',

      featured: false,

      btnClass: 'btn-gold',

      btnText: 'Talk to our team',

      features: ['All 12 agents + all connectors','Unlimited users','Single-tenant or private cloud','On-premises deployment available','Full audit trail — 1-year retention','Bring your own VPC (BYOVPC)','Custom LLM configuration','Dedicated security & architecture review','Custom SLAs and escalation paths','Government & regulated industry ready','Ministry-level data classification']

    },

  ];



  grid.classList.add('pricing-grid');



  plans.forEach(function(p) {

    var card = document.createElement('div');

    card.className = 'price-card' + (p.featured ? ' featured' : '') + ' fade-up';

    if (p.badge) {

      var badge = document.createElement('div');

      badge.className = 'price-badge'; badge.textContent = p.badge;

      card.appendChild(badge);

    }

    var list = p.features.map(function(f) { return '<li>' + f + '</li>'; }).join('');

    card.innerHTML += '<div style="font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:var(--text-3);margin-bottom:6px">' + p.tier + '</div>'

      + '<div class="p-name">' + p.name + '</div>'

      + '<div class="p-amt" style="font-size:32px">' + p.amount + '</div>'

      + '<div class="p-period">' + p.period + '</div>'

      + '<hr style="border-color:rgba(255,255,255,.08);margin:16px 0"/>'

      + '<ul class="p-list">' + list + '</ul>';

    var btn = document.createElement('button');

    btn.className = 'btn ' + p.btnClass + ' btn-full';

    btn.textContent = p.btnText;

    btn.onclick = function() { go('contact'); };

    card.appendChild(btn);

    grid.appendChild(card);

  });



  // ── COMPARISON TABLE (Premium Redesign) ──

  var tableWrap = document.getElementById('compareTable');

  if (!tableWrap) return;



  // Helper render functions

  function check(gold) {

    return '<span class="cmp-check' + (gold ? ' cmp-check-gold' : '') + '">✓</span>';

  }

  function dash() { return '<span class="cmp-dash"></span>'; }



  // rows: [featureName, essential, professional, enterprise, entPlus]

  // Use check()/dash() or plain text

  var groups = [

    {

      label: '👥  Capacity',

      rows: [

        ['Users', 'Up to 100', 'Up to 500', 'Up to 2,000', '2,000+ / Unlimited'],

        ['Active Agents', '3', '6', '9', '12 + all'],

        ['Connectors', '10', '20', '30', '70+'],

      ]

    },

    {

      label: '🖥️  Platform',

      rows: [

        ['Portal screens', 'Self-service', 'Admin + portal', 'All screens', 'All + custom'],

        ['Audit trail retention', '7 days', '30 days', '90 days', '1 year'],

        ['Admin Console', dash(), check(), check(), check()],

        ['Custom LLM config', dash(), dash(), dash(), check(true)],

      ]

    },

    {

      label: '🔐  Identity & Access',

      rows: [

        ['SSO (SAML / OIDC)', dash(), check(), check(), check()],

        ['MFA enforcement', 'Admins only', 'Admins only', 'All users', 'All users'],

        ['BYOVPC / On-prem', dash(), dash(), dash(), check(true)],

        ['Data residency', 'Shared cloud', 'Shared cloud', 'AWS region choice', 'BYOVPC / On-prem'],

      ]

    },

    {

      label: '🛡️  Compliance',

      rows: [

        ['GCC Cloud', dash(), check(), check(), check()],

        ['ISO 27001 / SOC 2 aligned', check(), check(), check(), check()],

        ['SOC 2 Type II evidence', dash(), dash(), check(), check()],

        ['NESA / PDPL / PCI DSS', dash(), 'NESA, ISO 27001', 'All standards', 'Government-ready'],

        ['Private / sovereign cloud', dash(), dash(), dash(), check(true)],

      ]

    },

    {

      label: '🤝  Support',

      rows: [

        ['Support SLA', 'Next business day', '4h P1', '4h P1 / 8h P2', 'Custom SLAs'],

        ['Customer success manager', dash(), dash(), 'Dedicated', 'Dedicated + SA'],

        ['Security architecture review', dash(), dash(), dash(), check(true)],

      ]

    }

  ];



  // Build outer wrapper

  var wrap = document.createElement('div');

  wrap.className = 'cmp-wrap fade-up';



  var scroll = document.createElement('div');

  scroll.className = 'cmp-scroll';



  var table = document.createElement('table');

  table.className = 'cmp-table';



  // ── THEAD ──

  var thead = document.createElement('thead');

  thead.innerHTML = '<tr>'

    + '<th style="text-align:left;vertical-align:middle;"><span style="font-size:12px;font-weight:700;color:var(--text-2);">Feature</span></th>'

    + '<th><div class="cmp-th-plan"><span class="cmp-th-name">Essential</span><span class="cmp-th-price">$999</span><span class="cmp-th-tier">/ mo · up to 100 users</span></div></th>'

    + '<th><div class="cmp-th-plan"><span class="cmp-th-name">Professional</span><span class="cmp-th-price">$1,999</span><span class="cmp-th-tier">/ mo · up to 500 users</span></div></th>'

    + '<th class="th-ent"><div class="cmp-popular-badge">★ Most popular</div><div class="cmp-th-plan"><span class="cmp-th-name">Enterprise</span><span class="cmp-th-price">$3,999</span><span class="cmp-th-tier">/ mo · up to 2,000 users</span></div></th>'

    + '<th class="th-sov"><div class="cmp-th-plan"><span class="cmp-th-name">Enterprise Plus</span><span class="cmp-th-price">Custom</span><span class="cmp-th-tier">2,000+ · tailored</span></div></th>'

    + '</tr>';

  table.appendChild(thead);



  // ── TBODY ──

  var tbody = document.createElement('tbody');



  groups.forEach(function(g) {

    // Group label row

    var gtr = document.createElement('tr');

    gtr.className = 'cmp-group-row';

    gtr.innerHTML = '<td colspan="5">' + g.label + '</td>';

    tbody.appendChild(gtr);



    // Feature rows

    g.rows.forEach(function(r) {

      var tr = document.createElement('tr');

      var ess = r[1] === dash() || r[1] === check() || r[1] === check(true) ? r[1] : r[1];

      var pro = r[2];

      var ent = r[3];

      var plus = r[4];

      tr.innerHTML = '<td>' + r[0] + '</td>'

        + '<td style="color:var(--text-3)">' + ess + '</td>'

        + '<td style="color:var(--text-2)">' + pro + '</td>'

        + '<td class="td-ent">' + ent + '</td>'

        + '<td class="td-sov">' + plus + '</td>';

      tbody.appendChild(tr);

    });

  });



  table.appendChild(tbody);

  scroll.appendChild(table);

  wrap.appendChild(scroll);

  tableWrap.appendChild(wrap);

  tableWrap.style.overflowX = 'visible';



  // Store groups globally for mobile tabs navigation

  window.PRICING_GROUPS = groups;



  // Build mobile tabs comparison layout

  var mobWrap = document.createElement('div');

  mobWrap.className = 'cmp-mobile-wrapper';



  var mobTabs = document.createElement('div');

  mobTabs.className = 'cmp-mobile-tabs';

  mobTabs.innerHTML = 

      '<button class="cmp-m-tab" onclick="switchMobileComparePlan(0, this)">Essential</button>'

    + '<button class="cmp-m-tab" onclick="switchMobileComparePlan(1, this)">Professional</button>'

    + '<button class="cmp-m-tab active" onclick="switchMobileComparePlan(2, this)">Enterprise</button>'

    + '<button class="cmp-m-tab" onclick="switchMobileComparePlan(3, this)">Enterprise Plus</button>';

  mobWrap.appendChild(mobTabs);



  var mobList = document.createElement('div');

  mobList.className = 'cmp-mobile-list';

  mobList.id = 'cmpMobileList';

  mobWrap.appendChild(mobList);



  tableWrap.appendChild(mobWrap);



  // Initialize with Enterprise plan (index 2) active

  switchMobileComparePlan(2);

}



// Global mobile compare switch function

function switchMobileComparePlan(planIdx, tabEl) {

  // Update active tab class

  const tabs = document.querySelectorAll('.cmp-m-tab');

  if (tabs.length > 0) {

    tabs.forEach(t => t.classList.remove('active'));

    if (tabEl) {

      tabEl.classList.add('active');

    } else {

      // If initialized without tabEl, highlight the Enterprise tab

      tabs[planIdx].classList.add('active');

    }

  }

  // Smoothly scroll comparison container to top below header on click
  if (tabEl) {
    var compareSec = document.querySelector('.compare-container');
    if (compareSec) {
      var headerOffset = 85;
      var elementPosition = compareSec.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  

  const container = document.getElementById('cmpMobileList');

  if (!container) return;



  container.innerHTML = '';

  

  if (!window.PRICING_GROUPS) return;



  window.PRICING_GROUPS.forEach(function(g) {

    var groupSec = document.createElement('div');

    groupSec.className = 'cmp-m-group-section';

    

    var groupHeader = document.createElement('div');

    groupHeader.className = 'cmp-m-group-header';

    groupHeader.innerHTML = g.label;

    groupSec.appendChild(groupHeader);



    g.rows.forEach(function(r) {

      var rowEl = document.createElement('div');

      rowEl.className = 'cmp-m-feature-row';

      

      var nameEl = document.createElement('span');

      nameEl.className = 'cmp-m-feature-name';

      nameEl.textContent = r[0];

      

      var valEl = document.createElement('div');

      valEl.className = 'cmp-m-feature-val';

      valEl.innerHTML = r[planIdx + 1];

      

      rowEl.appendChild(nameEl);

      rowEl.appendChild(valEl);

      groupSec.appendChild(rowEl);

    });

    

    container.appendChild(groupSec);

  });

}

window.switchMobileComparePlan = switchMobileComparePlan;



/* ── BUILD: CONTACT ───────────────────────────────────── */

function buildContact() {

  var stepsEl = document.getElementById('nextSteps');

  if (!stepsEl || stepsEl.dataset.built) return;

  stepsEl.dataset.built = '1';

  var steps = [

    ['Within 4 hours','Our team confirms your demo slot and sends a calendar invite.'],

    ['Demo call (45 min)','Live walkthrough of the platform tailored to your team and use cases.'],

    ['Technical review','Security questionnaire response, architecture brief, and data residency confirmation.'],

    ['Contract & onboarding','Sign → Day-1 provisioning → first agent live within 5 business days.'],

  ];

  steps.forEach(function(s, i) {

    var row = document.createElement('div');

    row.className = 'onboard-step fade-up';

    row.innerHTML = '<div class="step-dot">' + (i + 1) + '</div>'

      + '<div><div style="font-size:13.5px;font-weight:700;color:var(--text-1)">' + s[0] + '</div><div style="font-size:13px;color:var(--text-3);margin-top:3px">' + s[1] + '</div></div>';

    stepsEl.appendChild(row);

  });

}



/* ── FORM SUBMIT ──────────────────────────────────────── */

function submitForm(e) {

  e.preventDefault();

  document.getElementById('contactForm').style.display = 'none';

  document.getElementById('formSuccess').style.display = 'block';

}



/* ── GSAP ANIMATIONS CONTROLLER ─────────────────────────── */

var activePath = null;

var pageContent = null;

var dynamicSvg = null;

var bgPath = null;

var mainScrollTrigger = null;



function initFades() {

  gsap.set('.fade-up', { opacity: 0, y: 28 });

  document.querySelectorAll('.fade-up').forEach(el => {

    ScrollTrigger.create({

      trigger: el, start: 'top 88%', once: true,

      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: parseFloat(el.style.animationDelay || 0) })

    });

  });

}



function initCounters() {

  document.querySelectorAll('[data-count]').forEach(el => {

    const target = parseFloat(el.dataset.count);

    const suffix = el.dataset.suffix || '';

    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true,

      onEnter: () => gsap.to({ v: 0 }, { v: target, duration: 2, ease: 'power2.out',

        onUpdate: function() { el.textContent = this.targets()[0].v.toFixed(target % 1 !== 0 ? 1 : 0) + suffix; }

      })

    });

  });

}



function initLogos() {

  gsap.set('.logo-item', { opacity: 0 });

  ScrollTrigger.create({ trigger: '#logos-strip', start: 'top 85%', once: true,

    onEnter: () => gsap.to('.logo-item', { opacity: 0.38, duration: 0.6, stagger: 0.1, ease: 'power2.out' })

  });

}



function initCards() {

  ['.card', '.agent-card', '.price-card', '.cmp-table'].forEach(sel => {

    gsap.set(sel, { opacity: 0, y: 26 });

    document.querySelectorAll(sel).forEach(card => {

      ScrollTrigger.create({ trigger: card, start: 'top 85%', once: true,

        onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' })

      });

    });

  });

}



function initFloating() {

  document.querySelectorAll('.id-alert-card').forEach((c, i) => {

    gsap.to(c, { y: i % 2 === 0 ? -7 : 7, duration: 2.5 + i * 0.5, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: i * 0.4 });

  });

}



function initHero() {

  gsap.from('.hero-left > *', { opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.3 });

  gsap.from('.hero .dashboard-wrap', { opacity: 0, y: 50, scale: 0.96, duration: 1, ease: 'power3.out', delay: 0.6 });

}



function initDrift() {

  for (let i = 0; i < 14; i++) {

    const d = document.createElement('div');

    const s = Math.random() * 2.5 + 1;

    d.style.cssText = `position:fixed;border-radius:50%;pointer-events:none;z-index:1;width:${s}px;height:${s}px;left:${Math.random()*100}vw;top:${Math.random()*100}vh;background:rgba(20,184,166,${(Math.random()*.15+.04).toFixed(2)});animation:drft${i} ${12+Math.random()*18}s ease-in-out infinite;`;

    document.body.appendChild(d);

    const st = document.createElement('style');

    const dx = (Math.random()-.5)*180, dy = (Math.random()-.5)*180;

    st.textContent = `@keyframes drft${i}{0%,100%{transform:translate(0,0);opacity:.07}50%{transform:translate(${dx}px,${dy}px);opacity:.18}}`;

    document.head.appendChild(st);

  }

}



function initHeroTitleSlider() {

  const wrapper = document.getElementById("hero-title-slider");

  const slideItems = document.querySelectorAll(".slide-text");

  const totalSlides = slideItems.length;

  let currentIndex = 0;



  function getSlideHeight() {

    return slideItems.length > 0 ? slideItems[0].offsetHeight : 80;

  }



  function updateBrandingAccent(index) {

    const badge = document.getElementById("hero-badge");

    const ctaBtn = document.getElementById("hero-cta-btn");

    if (!badge || !ctaBtn) return;

    

    if (index === 3) { 

      badge.className = "badge badge-orchid";

      badge.innerHTML = "<span class='badge-dot' style='background:var(--gold-bright)'></span>GCC Cloud Compliant · Sovereign Cloud";

      ctaBtn.className = "btn btn-gold";

    } else { 

      badge.className = "badge";

      badge.innerHTML = "<span class='badge-dot'></span>Introducing One Concord AI";

      ctaBtn.className = "btn btn-primary";

    }

  }



  function goToNextSlide() {

    currentIndex++;

    if (currentIndex >= totalSlides) {

      currentIndex = 0;

    }

    const currentHeight = getSlideHeight();

    gsap.to(wrapper, {

      y: -(currentIndex * currentHeight),

      duration: 0.6,

      ease: "power3.inOut",

      onStart: () => updateBrandingAccent(currentIndex)

    });

  }



  setInterval(goToNextSlide, 3000);

  window.addEventListener("resize", () => {

    if (wrapper) gsap.set(wrapper, { y: -(currentIndex * getSlideHeight()) });

  });

}



// Organic hand-drawn path — each call regenerates with slight variation

var _jitterRaf = null;

var _jitterSeed = Math.random() * 1000;



function buildHandPath(W, H, seed) {

  var cx = W / 2;

  var s = seed;

  function rng(min, max) {

    s = (s * 9301 + 49297) % 233280;

    return min + (s / 233280) * (max - min);

  }



  // Calculate container borders dynamically

  var pad = Math.max(20, Math.min(W * 0.05, 80));

  var cw = Math.min(1200, W - pad * 2);

  var leftBorder = (W - cw) / 2;

  var rightBorder = W - leftBorder;



  // Target vertical spacing between turns: ~900px to ~1000px

  var spacing = 950;

  var numSegments = Math.max(3, Math.round(H / spacing));

  var numStops = numSegments + 1;



  var stops = [];

  for (var i = 0; i < numStops; i++) {

    if (i === 0) stops.push(0);

    else if (i === numStops - 1) stops.push(H);

    else {

      // Add slight organic randomness to stop height

      var base = i / numSegments;

      var variance = rng(-0.02, 0.02);

      stops.push((base + variance) * H);

    }

  }



  // X pivot for each stop — swinging from left to right container border

  var pivots = stops.map(function(_, i) {

    if (i === 0 || i === stops.length - 1) return cx; // Start/end at center

    var side = i % 2 === 0 ? 1 : -1;

    var drift = rng(-cw * 0.015, cw * 0.015); // Slight organic drift

    var offset = cw / 2 - rng(55, 95); // Swing near the border (55px to 95px inside border)

    return cx + side * offset + drift;

  });



  // Build path using smooth Catmull-Rom cubic spline

  var d = 'M ' + cx.toFixed(1) + ',0 ';

  var tension = 0.22; // Good balance for smoothness without looping



  for (var i = 0; i < stops.length - 1; i++) {

    var x0 = pivots[i];

    var y0 = stops[i];

    var x1 = pivots[i + 1];

    var y1 = stops[i + 1];

    var segH = y1 - y0;



    var cpx1, cpy1, cpx2, cpy2;



    // Control point 1 (outgoing from point i)

    if (i === 0) {

      cpx1 = x0;

      cpy1 = y0 + segH * 0.3;

    } else {

      var dx0 = pivots[i + 1] - pivots[i - 1];

      var dy0 = stops[i + 1] - stops[i - 1];

      cpx1 = x0 + tension * dx0;

      cpy1 = y0 + tension * dy0;

    }



    // Control point 2 (incoming to point i+1)

    if (i + 1 === stops.length - 1) {

      cpx2 = x1;

      cpy2 = y1 - segH * 0.3;

    } else {

      var dx1 = pivots[i + 2] - pivots[i];

      var dy1 = stops[i + 2] - stops[i];

      cpx2 = x1 - tension * dx1;

      cpy2 = y1 - tension * dy1;

    }



    d += 'C ' + cpx1.toFixed(1) + ',' + cpy1.toFixed(1)

      + ' ' + cpx2.toFixed(1) + ',' + cpy2.toFixed(1)

      + ' ' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' ';

  }



  return d;

}



function updatePathDimensions() {

  if (!pageContent || !activePath) return;

  var totalHeight = pageContent.offsetHeight;

  var totalWidth = window.innerWidth;



  dynamicSvg.setAttribute('width', totalWidth);

  dynamicSvg.setAttribute('height', totalHeight);

  dynamicSvg.setAttribute('viewBox', '0 0 ' + totalWidth + ' ' + totalHeight);



  // Generate one shared hand-drawn path for both layers

  var mainPath = buildHandPath(totalWidth, totalHeight, _jitterSeed);



  bgPath.setAttribute('d', mainPath);

  activePath.setAttribute('d', mainPath);



  var pathLength = activePath.getTotalLength();

  var progress = mainScrollTrigger ? mainScrollTrigger.progress : 0;

  gsap.set(activePath, {

    strokeDasharray: pathLength,

    strokeDashoffset: pathLength * (1 - progress)

  });



  // Keep pulse aligned on resize

  var pulseEl = document.getElementById('rope-pulse');

  if (pulseEl && pathLength > 0) {

    try {

      var pt = activePath.getPointAtLength(pathLength * progress);

      pulseEl.setAttribute('cx', pt.x);

      pulseEl.setAttribute('cy', pt.y);

      var sp1 = document.getElementById('rope-sparkle-1');

      if (sp1) { sp1.setAttribute('cx', pt.x); sp1.setAttribute('cy', pt.y); }

      var sp2 = document.getElementById('rope-sparkle-2');

      if (sp2) { sp2.setAttribute('cx', pt.x); sp2.setAttribute('cy', pt.y); }

      if (progress > 0.005 && progress < 0.995) {

        pulseEl.style.opacity = '1';

        if (sp1) sp1.style.opacity = '1';

        if (sp2) sp2.style.opacity = '1';

      } else {

        pulseEl.style.opacity = '0';

        if (sp1) sp1.style.opacity = '0';

        if (sp2) sp2.style.opacity = '0';

      }

    } catch(err) {}

  }



  // Animate feTurbulence seed slowly for living pen-on-paper wobble

  var turbEl = document.getElementById('handTurbulence');

  if (turbEl) {

    if (_jitterRaf) cancelAnimationFrame(_jitterRaf);

    var tStart = performance.now();

    function animateTurbulence(t) {

      // Slowly shift baseFrequency to create organic breathing wobble

      var elapsed = (t - tStart) * 0.00006;

      var bf1 = (0.016 + Math.sin(elapsed * 1.3) * 0.004).toFixed(4);

      var bf2 = (0.030 + Math.cos(elapsed * 0.9) * 0.005).toFixed(4);

      turbEl.setAttribute('baseFrequency', bf1 + ' ' + bf2);

      _jitterRaf = requestAnimationFrame(animateTurbulence);

    }

    _jitterRaf = requestAnimationFrame(animateTurbulence);

  }

}





function initSvgLine() {

  pageContent = document.getElementById("page-content");

  dynamicSvg = document.getElementById("dynamic-svg");

  bgPath = document.getElementById("bg-path");

  activePath = document.getElementById("active-path");



  if (!pageContent || !activePath) return;



  // Dynamically inject glowing pulse circle to the SVG

  if (dynamicSvg && !document.getElementById('rope-pulse')) {

    var sparkle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    sparkle1.setAttribute('id', 'rope-sparkle-1');

    sparkle1.setAttribute('class', 'rope-sparkle-ring ring-1');

    sparkle1.setAttribute('r', '0');

    sparkle1.setAttribute('fill', 'none');

    sparkle1.setAttribute('stroke', '#FFC933');

    sparkle1.setAttribute('stroke-width', '2');

    sparkle1.style.opacity = '0';

    dynamicSvg.appendChild(sparkle1);



    var sparkle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    sparkle2.setAttribute('id', 'rope-sparkle-2');

    sparkle2.setAttribute('class', 'rope-sparkle-ring ring-2');

    sparkle2.setAttribute('r', '0');

    sparkle2.setAttribute('fill', 'none');

    sparkle2.setAttribute('stroke', '#FF9F1C');

    sparkle2.setAttribute('stroke-width', '1.5');

    sparkle2.style.opacity = '0';

    dynamicSvg.appendChild(sparkle2);



    var pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    pulse.setAttribute('id', 'rope-pulse');

    pulse.setAttribute('r', '7');

    pulse.setAttribute('fill', '#FFC933');

    pulse.style.filter = 'drop-shadow(0px 0px 10px rgba(255, 201, 51, 1))';

    pulse.style.transition = 'opacity 0.2s';

    pulse.style.opacity = '0';

    dynamicSvg.appendChild(pulse);

  }



  updatePathDimensions();

  const layoutObserver = new ResizeObserver(() => updatePathDimensions());

  layoutObserver.observe(pageContent);

  window.addEventListener("resize", updatePathDimensions);



  mainScrollTrigger = ScrollTrigger.create({

    trigger: "#page-content",

    start: "top top",

    end: "bottom bottom",

    scrub: 1.2,

    onUpdate: (self) => {

      const pathLength = activePath.getTotalLength();

      const currentLength = pathLength * self.progress;

      gsap.set(activePath, {

        strokeDashoffset: pathLength - currentLength

      });



      var pulseEl = document.getElementById('rope-pulse');

      if (pulseEl && pathLength > 0) {

        try {

          var pt = activePath.getPointAtLength(currentLength);

          pulseEl.setAttribute('cx', pt.x);

          pulseEl.setAttribute('cy', pt.y);

          var sp1 = document.getElementById('rope-sparkle-1');

          if (sp1) { sp1.setAttribute('cx', pt.x); sp1.setAttribute('cy', pt.y); }

          var sp2 = document.getElementById('rope-sparkle-2');

          if (sp2) { sp2.setAttribute('cx', pt.x); sp2.setAttribute('cy', pt.y); }

          if (self.progress > 0.005 && self.progress < 0.995) {

            pulseEl.style.opacity = '1';

            if (sp1) sp1.style.opacity = '1';

            if (sp2) sp2.style.opacity = '1';

          } else {

            pulseEl.style.opacity = '0';

            if (sp1) sp1.style.opacity = '0';

            if (sp2) sp2.style.opacity = '0';

          }

        } catch(err) {}

      }

    }

  });





  document.querySelectorAll("[data-line-card]").forEach((card) => {

    ScrollTrigger.create({

      trigger: card,

      start: "top 65%",

      end: "bottom 35%",

      onEnter: () => card.classList.add("line-active"),

      onLeave: () => card.classList.remove("line-active"),

      onEnterBack: () => card.classList.add("line-active"),

      onLeaveBack: () => card.classList.remove("line-active")

    });

  });

}



function initTimelineAnimation() {

  const progressLine = document.getElementById('timelineProgress');

  if (progressLine) {

    ScrollTrigger.create({

      trigger: '.timeline-container',

      start: 'top 70%',

      end: 'bottom 70%',

      scrub: true,

      onUpdate: (self) => {

        gsap.to(progressLine, { height: `${self.progress * 100}%`, duration: 0.1, overwrite: 'auto' });

      }

    });

  }



  document.querySelectorAll('.timeline-item').forEach(item => {

    const isLeft = item.classList.contains('timeline-left');

    const initialX = window.innerWidth <= 768 ? -28 : (isLeft ? -28 : 28);

    gsap.set(item, { opacity: 0, x: initialX });



    ScrollTrigger.create({

      trigger: item,

      start: 'top 80%',

      once: true,

      onEnter: () => {

        gsap.to(item, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' });

      }

    });

  });

}





/* ── GRC PLATFORM CORE LOGIC ────────────────────────── */

var grcTimer = null;



function drawGrcLines() {

  const container = document.querySelector('.grc-platform-wrapper');

  if (!container) return;



  const rectContainer = container.getBoundingClientRect();



  function getDotCoords(dotEl) {

    if (!dotEl) return { x: 0, y: 0 };

    const rect = dotEl.getBoundingClientRect();

    return {

      x: rect.left - rectContainer.left + rect.width / 2,

      y: rect.top - rectContainer.top + rect.height / 2

    };

  }



  const centerLeftDot = document.querySelector('.grc-center-dot-left');

  const centerRightDot = document.querySelector('.grc-center-dot-right');

  if (!centerLeftDot || !centerRightDot) return;



  const cLeft = getDotCoords(centerLeftDot);

  const cRight = getDotCoords(centerRightDot);



  // Left to Center paths

  for (let i = 1; i <= 3; i++) {

    const cardDot = document.querySelector(`#grc-card-left-${i} .grc-card-dot-right`);

    const pathBg = document.getElementById(`grc-path-left-${i}`);

    const pathPulse = document.getElementById(`grc-pulse-left-${i}`);



    if (cardDot && pathBg && pathPulse) {

      const pt = getDotCoords(cardDot);

      const cp1x = pt.x + (cLeft.x - pt.x) * 0.5;

      const cp2x = pt.x + (cLeft.x - pt.x) * 0.5;

      const d = `M ${pt.x} ${pt.y} C ${cp1x} ${pt.y}, ${cp2x} ${cLeft.y}, ${cLeft.x} ${cLeft.y}`;

      pathBg.setAttribute('d', d);

      pathPulse.setAttribute('d', d);

    }

  }



  // Center to Right paths

  for (let i = 1; i <= 3; i++) {

    const cardDot = document.querySelector(`#grc-card-right-${i} .grc-card-dot-left`);

    const pathBg = document.getElementById(`grc-path-right-${i}`);

    const pathPulse = document.getElementById(`grc-pulse-right-${i}`);



    if (cardDot && pathBg && pathPulse) {

      const pt = getDotCoords(cardDot);

      const cp1x = cRight.x + (pt.x - cRight.x) * 0.5;

      const cp2x = cRight.x + (pt.x - cRight.x) * 0.5;

      const d = `M ${cRight.x} ${cRight.y} C ${cp1x} ${cRight.y}, ${cp2x} ${pt.y}, ${pt.x} ${pt.y}`;

      pathBg.setAttribute('d', d);

      pathPulse.setAttribute('d', d);

    }

  }

}



function initGrcCoreSection() {

  const cards = document.querySelectorAll('.grc-card');

  if (cards.length === 0) return;



  const flows = ['left-1', 'left-2', 'left-3', 'right-1', 'right-2', 'right-3'];

  let activeIndex = 0;



  function setActiveFlow(flowId) {

    cards.forEach(c => c.classList.remove('active'));

    document.querySelectorAll('.grc-flow-pulse').forEach(p => p.classList.remove('active-pulse'));



    const activeCard = document.querySelector(`.grc-card[data-flow="${flowId}"]`);

    if (activeCard) {

      activeCard.classList.add('active');

    }



    const activePulse = document.getElementById(`grc-pulse-${flowId}`);

    if (activePulse) {

      activePulse.classList.add('active-pulse');

    }

  }



  // Click handler

  cards.forEach(card => {

    card.addEventListener('click', function() {

      const flowId = this.getAttribute('data-flow');

      activeIndex = flows.indexOf(flowId);

      setActiveFlow(flowId);

      resetGrcTimer();

    });

  });



  function startGrcTimer() {

    grcTimer = setInterval(() => {

      activeIndex = (activeIndex + 1) % flows.length;

      setActiveFlow(flows[activeIndex]);

    }, 3500);

  }



  function resetGrcTimer() {

    if (grcTimer) {

      clearInterval(grcTimer);

    }

    startGrcTimer();

  }



  // Init first flow

  setActiveFlow(flows[0]);

  startGrcTimer();



  // Draw lines

  setTimeout(drawGrcLines, 100);

  window.addEventListener('resize', drawGrcLines);



  const container = document.querySelector('.grc-platform-wrapper');

  if (container) {

    const observer = new ResizeObserver(() => drawGrcLines());

    observer.observe(container);

  }

}





/* ── COMPLIANCE ISOMETRIC GRID LOGIC ─────────────────── */

function initComplianceGrid() {

  const svg = document.getElementById('complianceIsoSvg');

  if (!svg) return;



  svg.innerHTML = '';



  const rect = svg.getBoundingClientRect();

  const width = rect.width || window.innerWidth;

  const height = rect.height || 600;



  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);



  const S = 60; // side length of isometric cubes

  const dx = S * Math.sqrt(3); // spacing horizontally

  const dy = S * 1.5; // spacing vertically



  const cols = Math.ceil(width / dx) + 2;

  const rows = Math.ceil(height / dy) + 2;



  let gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  let pulseGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  svg.appendChild(gridGroup);

  svg.appendChild(pulseGroup);



  for (let r = -1; r < rows; r++) {

    for (let c = -1; c < cols; c++) {

      let x = c * dx;

      if (r % 2 === 0) {

        x += dx / 2;

      }

      let y = r * dy;



      // Draw cube lines from this center

      createLine(gridGroup, x, y, x, y + S);

      createLine(gridGroup, x, y, x - dx/2, y - S/2);

      createLine(gridGroup, x, y, x + dx/2, y - S/2);

      

      createLine(gridGroup, x - dx/2, y - S/2, x - dx/2, y + S/2);

      createLine(gridGroup, x - dx/2, y + S/2, x, y + S);

      createLine(gridGroup, x, y + S, x + dx/2, y + S/2);

      createLine(gridGroup, x + dx/2, y + S/2, x + dx/2, y - S/2);



      // Randomly create dynamic animated paths along grid paths

      if (Math.random() < 0.22) {

        createPulsePath(pulseGroup, x, y, S, dx);

      }

    }

  }



  function createLine(parent, x1, y1, x2, y2) {

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    line.setAttribute('x1', x1);

    line.setAttribute('y1', y1);

    line.setAttribute('x2', x2);

    line.setAttribute('y2', y2);

    line.setAttribute('class', 'iso-grid-line');

    parent.appendChild(line);

  }



  function createPulsePath(parent, x, y, S, dx) {

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    let d = `M ${x} ${y}`;

    let cx = x;

    let cy = y;



    for (let step = 0; step < 4; step++) {

      const dir = Math.floor(Math.random() * 6);

      switch(dir) {

        case 0: cx += 0; cy += S; break;

        case 1: cx += 0; cy -= S; break;

        case 2: cx -= dx/2; cy -= S/2; break;

        case 3: cx -= dx/2; cy += S/2; break;

        case 4: cx += dx/2; cy -= S/2; break;

        case 5: cx += dx/2; cy += S/2; break;

      }

      d += ` L ${cx} ${cy}`;

    }



    path.setAttribute('d', d);

    path.setAttribute('class', 'iso-grid-pulse');

    path.setAttribute('stroke', Math.random() < 0.5 ? 'var(--accent-cyan)' : 'var(--accent)');

    path.setAttribute('stroke-width', '1.5');

    path.setAttribute('fill', 'none');

    

    path.style.animationDelay = `${Math.random() * 8}s`;

    path.style.animationDuration = `${6 + Math.random() * 6}s`;



    parent.appendChild(path);

  }

}





/* ── BUILD: TESTIMONIALS SLIDER ──────────────────────── */

function buildTestimonials() {

  const track = document.getElementById('testimonialsTrack');

  if (!track) return;



  const REVIEWS = [

    {

      stars: 5,

      body: 'One Concord AI eliminated our entire service-desk backlog within two weeks. The Service Desk Agent handles password resets, VPN fixes, and licence requests end-to-end — our team now focuses on real engineering work.',

      name: 'James Whitfield',

      role: 'VP of IT, EMEA',

      org: 'Global Logistics Co.',

      initials: 'JW',

      color: '#B5F2DB'

    },

    {

      stars: 5,

      body: 'The Security Operations Agent isolated a compromised endpoint and notified the CISO before our on-call engineer even saw the alert. That 90-second response window is simply not achievable with humans alone.',

      name: 'Priya Nair',

      role: 'CISO',

      org: 'FinServ Holdings',

      initials: 'PN',

      color: '#B5F2DB'

    },

    {

      stars: 5,

      body: 'We passed our ISO 27001 audit with zero findings for the first time. The Compliance Agent collected every evidence artefact automatically and flagged two control gaps we would never have caught manually.',

      name: 'Tariq Al-Rashid',

      role: 'Head of GRC',

      org: 'Gulf Energy Group',

      initials: 'TA',

      color: '#FFC933'

    },

    {

      stars: 5,

      body: 'Cloud Ops Agent saved us over $14,000 last month alone — idle instances, oversized RDS clusters, and a public S3 bucket it locked down in under five minutes. ROI was immediate.',

      name: 'Sophie Brennan',

      role: 'Cloud Infrastructure Lead',

      org: 'RetailTech Europe',

      initials: 'SB',

      color: '#E4EEF0'

    },

    {

      stars: 5,

      body: 'Our MTTR dropped from 4 hours to 11 minutes after deploying the Incident Management and Root Cause Analysis agents together. The correlation engine is genuinely impressive — it caught a pattern we missed across 30 days of incidents.',

      name: 'Marcus Eliot',

      role: 'Director of Operations',

      org: 'HealthTech SaaS',

      initials: 'ME',

      color: '#FFFFFF'

    },

    {

      stars: 5,

      body: 'Identity Agent handled the full offboarding of a terminated employee — 34 entitlements revoked, AD account disabled, mailbox archived — in 9 minutes with a complete audit trail. Legal was thrilled.',

      name: 'Aisha Mensah',

      role: 'Head of IT Security',

      org: 'Pan-African Bank',

      initials: 'AM',

      color: '#C2F5E3'

    },

    {

      stars: 5,

      body: 'The Executive Intelligence Agent answered a board question about Q3 ticket volume trends in 8 seconds. What used to take my team an afternoon of spreadsheet work now happens in a natural-language query.',

      name: 'Dr. Lena Schröder',

      role: 'CTO',

      org: 'Mittelstand Manufacturing',

      initials: 'LS',

      color: '#FFE082'

    },

    {

      stars: 5,

      body: 'Security Tool Coverage Agent found 5 cloud workloads with no EDR or SIEM coverage the week after we spun up a new environment. We would have been completely blind to those blind spots without it.',

      name: "Ryan O'Sullivan",

      role: 'Security Architect',

      org: 'InsureTech UK',

      initials: 'RO',

      color: '#B5F2DB'

    },

    {

      stars: 5,

      body: 'We were live within 5 business days as promised. The integrations with ServiceNow, Intune, and AWS were seamless. Our first agent was resolving real tickets by end of week one.',

      name: 'Fatima Al-Zahrani',

      role: 'IT Operations Manager',

      org: 'Saudi Retail Group',

      initials: 'FZ',

      color: '#FFC933'

    },

    {

      stars: 5,

      body: 'One Concord AI handles our NESA compliance monitoring continuously. The quarterly control submission used to take two weeks of manual effort — the Compliance Agent now has everything ready within hours.',

      name: 'Khalid Jaber',

      role: 'Compliance Director',

      org: 'UAE Government Entity',

      initials: 'KJ',

      color: '#E4EEF0'

    }

  ];



  // Duplicate cards for seamless infinite loop

  const allCards = [...REVIEWS, ...REVIEWS];



  track.innerHTML = '';



  allCards.forEach(function(r) {

    const card = document.createElement('div');

    card.className = 't-card';



    card.innerHTML =

      '<div class="t-stars">' + '★'.repeat(r.stars) + '</div>' +

      '<div class="t-quote">&ldquo;</div>' +

      '<p class="t-body">' + r.body + '</p>' +

      '<div class="t-author">' +

        '<div class="t-avatar" style="background:' + r.color + '">' + r.initials + '</div>' +

        '<div class="t-info">' +

          '<span class="t-name">' + r.name + '</span>' +

          '<span class="t-role">' + r.role + '</span>' +

          '<span class="t-org">' + r.org + '</span>' +

        '</div>' +

      '</div>';



    track.appendChild(card);

  });

}



function initMobileTestimonialsSlider() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;

  const prevBtn = document.querySelector('.testimonials-mobile-nav .prev-btn');
  const nextBtn = document.querySelector('.testimonials-mobile-nav .next-btn');
  if (!prevBtn || !nextBtn) return;

  let currentIndex = 0;
  let autoScrollTimer = null;

  const cards = track.querySelectorAll('.t-card');
  const totalCards = cards.length / 2; // Slide through unique cards

  function getCardWidth() {
    if (cards.length === 0) return 0;
    const card = cards[0];
    const style = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const gap = parseFloat(style.marginRight) || 16;
    return cardWidth + gap;
  }

  function slideTo(index) {
    if (window.innerWidth > 768) {
      track.style.transform = '';
      return;
    }
    
    if (index < 0) {
      index = totalCards - 1;
    } else if (index >= totalCards) {
      index = 0;
    }
    currentIndex = index;

    const offset = -currentIndex * getCardWidth();
    track.style.transform = `translateX(${offset}px)`;
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollTimer = setInterval(() => {
      slideTo(currentIndex + 1);
    }, 4000);
  }

  function stopAutoScroll() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    slideTo(currentIndex - 1);
    startAutoScroll();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    slideTo(currentIndex + 1);
    startAutoScroll();
  });

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // Swipe threshold of 50px
      stopAutoScroll();
      if (diff > 0) {
        slideTo(currentIndex + 1); // Swiped left -> next
      } else {
        slideTo(currentIndex - 1); // Swiped right -> prev
      }
      startAutoScroll();
    }
  }, { passive: true });

  // Start auto scroll on load if on mobile
  if (window.innerWidth <= 768) {
    startAutoScroll();
  }

  // Handle window resizing
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      stopAutoScroll();
      track.style.transform = '';
    } else {
      if (!autoScrollTimer) {
        slideTo(currentIndex);
        startAutoScroll();
      }
    }
  });
}



/* ── INITIALIZE ON LOAD ────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function() {

  gsap.registerPlugin(ScrollTrigger);



  // 1. Ingest datasets and build HTML dynamically

  buildNav();

  buildTicker();

  buildHome();

  buildPlatform();

  buildPricing();

  buildContact();

  buildTestimonials();

  initMobileTestimonialsSlider();

  buildSolutions('it');



  // 2. Setup menu/scrolling event triggers

  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {

    if (header) header.classList.toggle('scrolled', window.scrollY > 60);

  }, { passive: true });



  document.querySelectorAll('.sol-tab').forEach(function(b) {

    b.addEventListener('click', function() {
      buildSolutions(this.dataset.sol, this);
      this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      var solSection = document.querySelector('#pg-solutions .section');
      if (solSection) {
        var headerOffset = 85;
        var elementPosition = solSection.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });

  });



  function initAboutTelemetry() {

    var values = document.querySelectorAll('.about-telemetry-value');

    if (!values || values.length < 2) return;

    setInterval(function() {

      // 1. Throughput: ~148,420 +/- 50 actions/hr

      var throughputVal = 148420 + Math.floor(Math.random() * 100 - 50);

      if (values[0]) {

        values[0].textContent = throughputVal.toLocaleString() + ' actions/hr';

      }

      // 2. Autonomy Score: ~94.2% +/- 0.15%

      var autonomyVal = (94.2 + (Math.random() * 0.3 - 0.15)).toFixed(1);

      if (values[1]) {

        values[1].textContent = autonomyVal + '%';

      }

    }, 3000);

  }



  // 3. Initialize visual enhancements and triggers

  lucide.createIcons();

  initFades();

  initCounters();

  initLogos();

  initCards();

  initFloating();

  initHero();

  initDrift();

  initSvgLine();

  initHeroTitleSlider();

  initTimelineAnimation();

  initGrcCoreSection();

  initComplianceGrid();

  initAboutTelemetry();



  // Re-run compliance grid on resize to keep it aligned with container dimensions

  window.addEventListener('resize', () => {

    if (window.complianceResizeTimeout) {

      clearTimeout(window.complianceResizeTimeout);

    }

    window.complianceResizeTimeout = setTimeout(() => {

      initComplianceGrid();

    }, 150);

  });



  // 4. Read routing hash or default to home

  var hash = window.location.hash.replace('#','');

  go(hash && document.getElementById('pg-' + hash) ? hash : 'home');

});

