var TagBuilder = require('../tag-builder')

describe("TagBuilder", function () {

  it("can create html tags", function () {
    var builder = new TagBuilder("p")
    expect(builder.toString()).toEqual("<p></p>")

    expect(new TagBuilder("div").toString()).toEqual("<div></div>")
  })

  it("can create self-closing HTML tags", function () {
    var builder = new TagBuilder("p", true)
    expect(builder.toString()).toEqual("<p />")

    expect(new TagBuilder("div", true).toString()).toEqual("<div />")
  })

  it("can render innerHTML", function () {
    var builder = new TagBuilder("p")
    builder.setInnerHTML("foo")
    expect(builder.toString()).toEqual("<p>foo</p>")

    var builder = new TagBuilder("p", true)
    builder.setInnerHTML("foo")
    expect(builder.toString()).toEqual("<p />")
  })

  it("can add attributes", function () {
    var builder = new TagBuilder("p")
    builder.addAttribute("id", "foo")
    expect(builder.toString()).toEqual('<p id="foo"></p>')

    var builder = new TagBuilder("p", true)
    builder.addAttribute("id", "foo")
    expect(builder.toString()).toEqual('<p id="foo" />')
  })

  it("can add classes", function () {
    var builder = new TagBuilder("p")
    builder.addClass("selected")
    expect(builder.toString()).toEqual('<p class="selected"></p>')

    builder.addClass("active")
    expect(builder.toString()).toEqual('<p class="selected active"></p>')
  })

  it("can add classes even if the attribute was called first", function () {
    var builder = new TagBuilder("p")
    builder.addAttribute("class", "card")
    builder.addClass("selected")
    expect(builder.toString()).toEqual('<p class="card selected"></p>')
  })

})
