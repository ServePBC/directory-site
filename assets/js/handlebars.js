Handlebars.getTemplate = function(name) {
  if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      $.ajax({
          url : 'assets/templates/' + name + '.handlebars',
          success : function(data) {
              if (Handlebars.templates === undefined) {
                  Handlebars.templates = {};
              }
              Handlebars.templates[name] = Handlebars.compile(data);
          },
          async : false
      });
  }
  return Handlebars.templates[name];
};

Handlebars.registerHelper('breaklines', function(text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Handlebars.SafeString(text);
});

window.templates = {
  'general': {
    'cta': Handlebars.getTemplate('cta')
  },
  'entry': {
    'listing': Handlebars.getTemplate('entry_listing')
  },
  'category': {
    'header': Handlebars.getTemplate('category_header'),
    'link': Handlebars.getTemplate('category_link')
  }
}
