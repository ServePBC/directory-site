window.loadCTA = function() {
    var output = window.templates.general.cta();
    $('#listings > li:eq(0)').after(output);
};
