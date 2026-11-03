// Uses jQuery (loaded from CDN before this file)
$(function () {
  // Footer year
  $('#year').text(new Date().getFullYear());

  // Mobile menu toggle
  $('#menuToggle').on('click', function () {
    var open = $('#navLinks').toggleClass('open').hasClass('open');
    $(this).attr('aria-expanded', open);
  });

  // Highlight current page link
  var page = location.pathname.split('/').pop() || 'index.html';
  $('#navLinks a').each(function () {
    if ($(this).attr('href') === page) $(this).addClass('active');
  });

  // Animate cards/sections into view on scroll
  function reveal() {
    var bottom = $(window).scrollTop() + $(window).height() - 40;
    $('.reveal:not(.done)').each(function () {
      if ($(this).offset().top < bottom) {
        $(this).addClass('done').animate({ opacity: 1 }, 600).css('transform', 'none');
      }
    });
  }
  $(window).on('scroll resize', reveal);
  reveal();

  // Tag hover effect
  $('.tag-list span, .mini-tags span').hover(
    function () { $(this).css({ background: '#7257d8', color: '#fff' }); },
    function () { $(this).css({ background: '', color: '' }); }
  );

  // Print / save resume as PDF
  $('#printResume').on('click', function () { window.print(); });

  // Contact form (mailto) with simple validation
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var name = $.trim($('#cname').val()), msg = $.trim($('#cmsg').val());
    if (!name || !msg) { $('#cstatus').text('Please fill in both fields.').css('color', '#c0392b'); return; }
    window.location.href = 'mailto:siripatil@gmail.com?subject=' + encodeURIComponent('Message from ' + name) + '&body=' + encodeURIComponent(msg);
    $('#cstatus').text('Opening your email app...').css('color', '#2e7d32');
  });
});
