(function () {
  'use strict';

  /* Sticky header shadow */
  var header = document.querySelector('.site-header');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 6);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* Mobile navigation */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('open'));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (nav.classList.contains('open') && !event.target.closest('.site-header')) {
        setOpen(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 960) setOpen(false);
    });
  }

  /* Current year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* Contact form -> opens the visitor's email app addressed to info@dlife.online */
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      var data = new FormData(contactForm);
      var name = String(data.get('name') || '').trim();
      var email = String(data.get('email') || '').trim();
      var topic = String(data.get('topic') || 'General enquiry').trim();
      var message = String(data.get('message') || '').trim();

      var subject = 'Website enquiry - ' + topic;
      var body = 'Name: ' + name + '\nEmail: ' + email + '\nTopic: ' + topic + '\n\n' + message;
      window.location.href = 'mailto:info@dlife.online?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      var status = document.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Opening your email app. If nothing happens, please email us directly at info@dlife.online.';
        status.classList.add('show');
      }
    });
  }
})();
