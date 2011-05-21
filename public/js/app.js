(function() {
  var Bar, Foo;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Foo = (function() {
    function Foo() {
      _.extend(this, Backbone.Events);
      this.bind("foo", function(msg) {
        return alert(msg);
      });
    }
    return Foo;
  })();
  Bar = (function() {
    __extends(Bar, Backbone.Events);
    function Bar() {
      this.bind("bar", function(msg) {
        return alert(msg);
      });
    }
    return Bar;
  })();
  jQuery(function() {
    ($('a#foo')).bind("click", function() {
      var foo;
      foo = new Foo;
      return foo.trigger("foo", "Working");
    });
    return ($('a#bar')).bind("click", function() {
      var bar;
      bar = new Bar;
      return bar.trigger("bar", "Will not work");
    });
  });
}).call(this);
