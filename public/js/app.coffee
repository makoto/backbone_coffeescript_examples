class Foo
  constructor: () ->
    _.extend(@, Backbone.Events)
    @bind "foo", (msg)->
      alert msg
  
class Bar extends Backbone.Events
  constructor: () ->
    @bind "bar", (msg)->
      alert msg

class Baz extends Backbone.Model
  constructor: () ->
    @bind "baz", (msg)->
      alert msg

jQuery -> 
  ($ 'a#foo').bind "click",  ->
    foo = new Foo
    foo.trigger "foo", "Working"

  ($ 'a#bar').bind "click",  ->
    bar = new Bar
    bar.trigger "bar", "Will not work"

  ($ 'a#baz').bind "click",  ->
    bar = new Baz
    bar.trigger "baz", "Working"
