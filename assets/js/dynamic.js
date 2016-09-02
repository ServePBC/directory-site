$(document).ready(function() {
  var data = {},
    sanitize = function(s) {
      return s.toLowerCase().replace(/ /g, '-');
    };
  $.getJSON("https://spreadsheets.google.com/feeds/list/1zEktgv2iA9W7EhGNJCzik5HYIXLh69BZsV7IfGec5lI/1/public/full?alt=json", function(json) {
		var entries = json['feed']['entry'];
    $.each(entries, function(i, item) {

      if (!data.hasOwnProperty(item['gsx$category']['$t'])) {
        data[item['gsx$category']['$t']] = [];

        var category = {
        	'sanitized': sanitize(item['gsx$category']['$t']),
          'category':item['gsx$category']['$t']
        };
        $('.nav').append( window.templates.category.link(category) );
        $('#listings').append( window.templates.category.header(category) );

          if (i == (entries.length - 1)) {
              window.loadCTA();
          }
      }

      var listing = {
        	'title': item['gsx$title']['$t'],
          'description': item['gsx$description']['$t'],
          'callout': item['gsx$callout']['$t'],
          'address': item['gsx$address']['$t'],
          'latitude': item['gsx$latitude']['$t'],
          'longitude': item['gsx$longitude']['$t'],
          'phone': item['gsx$phone']['$t'],
          'website': item['gsx$website']['$t']
        },
        output = window.templates.entry.listing(listing);

      if (listing.latitude && listing.longitude) {
        L.marker([listing.latitude, listing.longitude], {
          icon: L.mapbox.marker.icon({
            'marker-size': 'small',
            'marker-color': '#00c5d9'
          })
        }).addTo(window.map);
      }

      $('#' + sanitize(item['gsx$category']['$t'])).append(output);
    });

    var scrollTo = function(target) {
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 140
        }, 1500);
        return false;
      }
    };

    $('.serve-nav').change(function() {
      var target = $( $(this).val() );
      scrollTo(target);
    });

    $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        if (this.hash == "#top")
          $('.serve-nav').val("#top");
        var target = $(this.hash);
        scrollTo(target);
      }
    });

  });
});
