'use strict';

var app = {
  title: 'Visibility Toggle',
  description: 'Here comes some description'
};

var visible = false;

var setVisible = function setVisible() {
  if (visible) visible = false;else visible = true;

  render();
};

var appRoot = document.getElementById('app');

var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: setVisible },
      visible ? 'Hide' : 'Show'
    ),
    visible && React.createElement(
      'p',
      null,
      app.description
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
