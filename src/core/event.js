var D3Dispatch = require("./dispatch"),
    d3_dispatch = D3Dispatch._dispatch,
    d3_dispatch_event = D3Dispatch._event,
    D3 = require("./core");

D3.event = null;

function d3_eventCancel() {
  D3.event.stopPropagation();
  D3.event.preventDefault();
}

function d3_eventSource() {
  var e = D3.event, s;
  while (s = e.sourceEvent) e = s;
  return e;
}

// Like d3.dispatch, but for custom events abstracting native UI events. These
// events have a target component (such as a brush), a target element (such as
// the svg:g element containing the brush) and the standard arguments `d` (the
// target element's data) and `i` (the selection index of the target element).
function d3_eventDispatch(target) {
  var dispatch = new d3_dispatch,
      i = 0,
      n = arguments.length;

  while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);

  // Creates a dispatch context for the specified `thiz` (typically, the target
  // DOM element that received the source event) and `argumentz` (typically, the
  // data `d` and index `i` of the target element). The returned function can be
  // used to dispatch an event to any registered listeners; the function takes a
  // single argument as input, being the event to dispatch. The event must have
  // a "type" attribute which corresponds to a type registered in the
  // constructor. This context will automatically populate the "sourceEvent" and
  // "target" attributes of the event, as well as setting the `d3.event` global
  // for the duration of the notification.
  dispatch.of = function(thiz, argumentz) {
    return function(e1) {
      try {
        var e0 =
        e1.sourceEvent = D3.event;
        e1.target = target;
        D3.event = e1;
        dispatch[e1.type].apply(thiz, argumentz);
      } finally {
        D3.event = e0;
      }
    };
  };

  return dispatch;
}

exports._eventCancel = d3_eventCancel;
exports._eventSource = d3_eventSource;
exports._eventDispatch = d3_eventDispatch;
