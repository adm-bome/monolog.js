// Generated by CoffeeScript 1.6.3
"use strict";
var LineFormatter, NormalizerFormatter, util, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

util = require('util');

_ = require('underscore');

NormalizerFormatter = require('./NormalizerFormatter');

LineFormatter = (function(_super) {
  __extends(LineFormatter, _super);

  LineFormatter.SIMPLE_FORMAT = _.template("[<%-datetime %>] <%-channel%>.<%-level_name%>: <%=message%> <%=context%> <%=extra%> \n");

  function LineFormatter(template) {
    this.template = template != null ? template : LineFormatter.SIMPLE_FORMAT;
    LineFormatter.__super__.constructor.apply(this, arguments);
  }

  LineFormatter.prototype.format = function(record) {
    var vars;
    vars = LineFormatter.__super__.format.call(this, record);
    return this.template(vars);
  };

  LineFormatter.prototype.formatBatch = function(records) {
    var _this = this;
    return records.map(function(r) {
      return _this.format(r);
    }).join();
  };

  return LineFormatter;

})(NormalizerFormatter);

module.exports = LineFormatter;

/*
//@ sourceMappingURL=LineFormatter.map
*/
