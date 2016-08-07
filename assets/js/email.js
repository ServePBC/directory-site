$(document).ready(function() {
  $('.unscramble').each(function(i, item) {
    var address = "mailto:" + $(this).data('recipient') + "@" + $(this).data('domain');
    $(this).attr('href', address);
  });
});
