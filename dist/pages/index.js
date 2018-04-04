'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _icityer = require('./../icityer/icityer.js');

var _icityer2 = _interopRequireDefault(_icityer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {}, _this.$repeat = {}, _this.$props = { "icityer": { "xmlns:v-on": "" } }, _this.$events = { "icityer": { "v-on:choose": "chooseCity" } }, _this.components = {
      icityer: _icityer2.default
    }, _this.methods = {
      chooseCity: function chooseCity(addr) {
        _wepy2.default.showModal({
          title: '您选择的城市是',
          content: addr.province + '-' + addr.city + '-' + addr.area,
          showCancel: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImljaXR5ZXIiLCJtZXRob2RzIiwiY2hvb3NlQ2l0eSIsImFkZHIiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwic2hvd0NhbmNlbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU8sRSxRQUVSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsY0FBYSxFQUFkLEVBQVgsRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsZUFBYyxZQUFmLEVBQVgsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBVUMsSUFBVixFQUFnQjtBQUMxQix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFNBRE07QUFFYkMsbUJBQVlILEtBQUtJLFFBQWpCLFNBQTZCSixLQUFLSyxJQUFsQyxTQUEwQ0wsS0FBS00sSUFGbEM7QUFHYkMsc0JBQVk7QUFIQyxTQUFmO0FBS0Q7QUFQTyxLOzs7Ozs2QkFTRCxDQUNSOzs7O0VBckJnQyxlQUFLQyxJOztrQkFBbkJsQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBpY2l0eWVyIGZyb20gJy4uL2ljaXR5ZXIvaWNpdHllcidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImljaXR5ZXJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiaWNpdHllclwiOntcInYtb246Y2hvb3NlXCI6XCJjaG9vc2VDaXR5XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBpY2l0eWVyXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaG9vc2VDaXR5OiBmdW5jdGlvbiAoYWRkcikge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmgqjpgInmi6nnmoTln47luILmmK8nLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2FkZHIucHJvdmluY2V9LSR7YWRkci5jaXR5fS0ke2FkZHIuYXJlYX1gLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==