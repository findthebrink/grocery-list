// Generated by CoffeeScript 1.9.3
(function() {
  define(['templates/widgets/addRecipe', 'views/widgets/chooser'], function(templateAddRecipe, chooser) {
    var addRecipe;
    return addRecipe = Backbone.View.extend({
      el: 'section.content',
      template: templateAddRecipe,
      widgets: {
        chooser: function() {
          return new chooser();
        }
      },
      render: function() {
        this.$el.html(this.template({}));
        this.widgets.chooser();
        return this;
      },
      initialize: function() {
        console.log('addRecipe init');
        return this.render();
      }
    });
  });

}).call(this);

//# sourceMappingURL=addRecipe.js.map