/** @jsx React.DOM */

var Spinner = React.createClass({
  render: function() {
    var bars = [];
    var barStyle;

    for (var i = 0; i < 12; i++) {
      barStyle = {};
      barStyle.WebkitAnimationDelay = barStyle.animationDelay =
        (i - 12) / 10 + 's';

      barStyle.WebkitTransform = barStyle.transform =
        'rotate(' + (i * 30) + 'deg) translate(9.5px)';

      bars.push(
        <div style={barStyle} className="react-spinner_bar" />
      );
    }

    return this.transferPropsTo(
      <div className="react-spinner">{bars}</div>
    );
  }
});

if (typeof module === 'undefined') {
  window.Spinner = Spinner;
} else {
  module.exports = Spinner;
}
