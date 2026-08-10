/* Design profile switcher.
   - builds the review toolbar from window.BROOKBURY_PROFILES
   - ?profile=<id> selects a profile, ?chrome=off hides the toolbar (screenshots / overview iframes)
   - remembers the last choice in localStorage
   - keys 1–5 select, ← / → step, "n" toggles the notes panel, "h" hides the toolbar */
(function () {
  var PROFILES = window.BROOKBURY_PROFILES || [];
  if (!PROFILES.length) return;

  var STORE = 'brookbury.profile';
  var params = new URLSearchParams(location.search);
  var root = document.documentElement;

  function idOf(v) {
    for (var i = 0; i < PROFILES.length; i++) if (PROFILES[i].id === v) return v;
    return null;
  }

  var initial =
    idOf(params.get('profile')) ||
    idOf(params.get('theme')) ||
    idOf(localStorage.getItem(STORE)) ||
    PROFILES[0].id;

  var chromeOff = params.get('chrome') === 'off';
  if (chromeOff) document.body.classList.add('chrome-off');

  /* ---------- toolbar ---------- */

  var bar = document.createElement('div');
  bar.className = 'dsw';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Design profile switcher');

  var opts = PROFILES.map(function (p) {
    return (
      '<button class="dsw-opt" type="button" data-profile="' + p.id + '" aria-pressed="false">' +
        '<span class="dsw-num">' + p.number + '</span>' +
        '<span class="dsw-opt-text">' +
          '<span class="dsw-name">' + p.name + '</span>' +
          '<span class="dsw-tag">' + p.tagline + '</span>' +
        '</span>' +
        '<span class="dsw-sw">' + p.swatches.map(function (c) {
          return '<i style="background:' + c + '"></i>';
        }).join('') + '</span>' +
      '</button>'
    );
  }).join('');

  bar.innerHTML =
    '<div class="dsw-bar">' +
      '<span class="dsw-label">Design profile</span>' +
      '<div class="dsw-options">' + opts + '</div>' +
      '<div class="dsw-tools">' +
        '<button class="dsw-btn" type="button" data-dsw="notes" aria-expanded="false">Notes</button>' +
        '<a class="dsw-btn" href="overview.html">Compare all</a>' +
        '<button class="dsw-btn" type="button" data-dsw="hide">Hide</button>' +
        '<button class="dsw-btn" type="button" data-dsw="show">Design profile</button>' +
      '</div>' +
    '</div>' +
    '<div class="dsw-panel">' +
      '<div><h3>Positioning</h3><p data-dsw="positioning"></p></div>' +
      '<div><h3>Typography</h3><p data-dsw="type"></p></div>' +
      '<div><h3>Watch out for</h3><p class="dsw-risk" data-dsw="risk"></p></div>' +
    '</div>' +
    '<p class="dsw-hint">Keys: 1–5 select · ← → step · N notes · H hide the toolbar</p>';

  document.body.appendChild(bar);

  var buttons = bar.querySelectorAll('.dsw-opt');
  var fields = {
    positioning: bar.querySelector('[data-dsw="positioning"]'),
    type: bar.querySelector('[data-dsw="type"]'),
    risk: bar.querySelector('[data-dsw="risk"]')
  };

  var current = initial;

  function apply(id, push) {
    var p = null;
    for (var i = 0; i < PROFILES.length; i++) if (PROFILES[i].id === id) p = PROFILES[i];
    if (!p) return;

    current = id;
    root.setAttribute('data-profile', id);
    document.title = 'Brookbury — ' + p.number + ' ' + p.name;

    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute('aria-pressed', String(buttons[j].dataset.profile === id));
    }
    fields.positioning.textContent = p.positioning;
    fields.type.textContent = p.type;
    fields.risk.textContent = p.risk;

    /* overview iframes run with chrome=off — they must not clobber the saved choice */
    if (!chromeOff) { try { localStorage.setItem(STORE, id); } catch (e) {} }

    if (push) {
      var q = new URLSearchParams(location.search);
      q.set('profile', id);
      history.replaceState(null, '', location.pathname + '?' + q.toString() + location.hash);
    }
  }

  bar.addEventListener('click', function (e) {
    var opt = e.target.closest('.dsw-opt');
    if (opt) { apply(opt.dataset.profile, true); return; }

    var tool = e.target.closest('[data-dsw]');
    if (!tool) return;
    if (tool.dataset.dsw === 'notes') {
      var open = bar.classList.toggle('is-open');
      tool.setAttribute('aria-expanded', String(open));
    } else if (tool.dataset.dsw === 'hide') {
      bar.classList.add('is-hidden');
    } else if (tool.dataset.dsw === 'show') {
      bar.classList.remove('is-hidden');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA' || e.target.isContentEditable) return;

    var idx = PROFILES.findIndex(function (p) { return p.id === current; });

    if (e.key >= '1' && e.key <= String(Math.min(9, PROFILES.length))) {
      apply(PROFILES[Number(e.key) - 1].id, true);
    } else if (e.key === 'ArrowRight') {
      apply(PROFILES[(idx + 1) % PROFILES.length].id, true);
    } else if (e.key === 'ArrowLeft') {
      apply(PROFILES[(idx - 1 + PROFILES.length) % PROFILES.length].id, true);
    } else if (e.key === 'n' || e.key === 'N') {
      bar.querySelector('[data-dsw="notes"]').click();
    } else if (e.key === 'h' || e.key === 'H') {
      bar.classList.toggle('is-hidden');
    }
  });

  apply(initial, false);
})();
