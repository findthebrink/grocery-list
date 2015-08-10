// Generated by CoffeeScript 1.9.3
(function() {
  define(['templates/pages/groceries'], function(templateGroceries) {
    var kitchen;
    return kitchen = Backbone.View.extend({
      el: 'section.content',
      template: templateGroceries,
      render: function() {
        this.$el.html(this.template());
        return this;
      },
      initialize: function() {
        console.log('groceries page init');
        return this.render();
      }
    });
  });

}).call(this);

//# sourceMappingURL=groceries.js.map
