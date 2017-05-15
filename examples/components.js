webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(510);


/***/ }),

/***/ 3:
2,

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _prettyChart = __webpack_require__(162);
	
	var _prettyChart2 = _interopRequireDefault(_prettyChart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    { style: { width: 500, margin: '0 auto' } },
	    _react2.default.createElement(
	      _prettyChart.Title,
	      null,
	      ' Type something '
	    ),
	    _react2.default.createElement(
	      _prettyChart.Meta,
	      { style: { marginTop: 50 } },
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        { title: '\u4E1A\u7EE9\u589E\u957F\u7387' },
	        ' + 24.6% ',
	        _react2.default.createElement(_prettyChart.Percent, { value: '24.6%' })
	      ),
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        { title: '\u4E1A\u7EE9\u589E\u957F\u7387' },
	        ' + 103\u5355 / \u5929 ',
	        _react2.default.createElement(_prettyChart.Percent, { value: '50%' }),
	        ' '
	      )
	    ),
	    _react2.default.createElement(
	      _prettyChart.Meta,
	      { style: { marginTop: 50 }, type: 'vertical' },
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        null,
	        _react2.default.createElement(_prettyChart.Percent, { value: '24.6%', type: 'large' })
	      ),
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        null,
	        _react2.default.createElement(_prettyChart.Percent, { value: '15.6%', type: 'large' })
	      ),
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        null,
	        _react2.default.createElement(_prettyChart.Percent, { value: '55.9%', type: 'large' })
	      )
	    ),
	    _react2.default.createElement(
	      _prettyChart.Meta,
	      { style: { marginTop: 50 } },
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          null,
	          ' Type something '
	        )
	      ),
	      _react2.default.createElement(
	        _prettyChart.Meta.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          null,
	          ' Type something '
	        )
	      )
	    )
	  );
	};
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=components.js.map