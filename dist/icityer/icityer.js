'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _cityData = require('./cityData.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icityer = function (_wepy$component) {
  _inherits(Icityer, _wepy$component);

  function Icityer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Icityer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icityer.__proto__ || Object.getPrototypeOf(Icityer)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      show: {
        type: Boolean,
        default: true
      }
    }, _this.computed = {
      DataSort: function DataSort() {
        var _data = {};
        for (var i in this.CITYSDATA) {
          if (!_data[this.CITYSDATA[i].key]) {
            _data[this.CITYSDATA[i].key] = [this.CITYSDATA[i]];
          } else {
            _data[this.CITYSDATA[i].key].push(this.CITYSDATA[i]);
          }
        }
        return _data;
      }
    }, _this.watch = {}, _this.data = {
      'quick_flag': 'A',
      'nav_flag': 'A',
      'navs': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      CITYSDATA: _cityData.CITYSDATA,
      expandSearchInput: false,
      searchData: []
    }, _this.methods = {
      getCity: function getCity(e) {
        var _province = e.currentTarget.dataset.province;
        var _city = e.currentTarget.dataset.city;
        var _area = e.currentTarget.dataset.area;
        this.expandSearchInput = false;
        this.$apply();
        this.$emit('choose', {
          province: _province,
          city: _city,
          area: _area
        });
      },
      scrollEvent: function scrollEvent() {
        // 暂时取消左侧滑动关联右侧关系
        this._getTopToNav();
        // this.$apply()
      },
      quickTo: function quickTo(e) {
        var _id = e.currentTarget.dataset.nav;
        this.quick_flag = this.nav_flag = _id;
        this.$apply();
      },
      showSearchInput: function showSearchInput() {
        this.expandSearchInput = true;
        this.$apply();
      },

      getSearchText: function getSearchText(e) {
        var _searchText = e.detail.value.trim();
        if (_searchText === '') {
          return;
        }
        this._pushSearchCityData(_searchText);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Icityer, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: '_getTopToNav',
    value: function _getTopToNav() {
      var self = this;
      var _navs = this.navs;
      var _index = 0;
      var _checkActiveFlag = function _checkActiveFlag(n, cb) {
        var query = _wepy2.default.createSelectorQuery();
        query.select('#' + _navs[n]).boundingClientRect();
        query.selectViewport().scrollOffset();
        query.exec(function (res) {
          if (!res[0]) {
            return cb && cb(true);
          }
          if (res[0].top < 20) {
            return cb && cb(true);
          }
          return cb && cb(false);
        });
      };
      var _setActiveFlag = function _setActiveFlag() {
        _checkActiveFlag(_index, function (status) {
          if (status && _index < _navs.length) {
            _index++;
            _setActiveFlag();
          } else {
            self.nav_flag = _navs[_index];
            self.$apply();
          }
        });
      };
      _setActiveFlag();
    }
  }, {
    key: '_pushAllCity',
    value: function _pushAllCity(province, city) {
      var _searchCityData = [];
      for (var i in city) {
        var _city = city[i].name;
        var _areas = city[i].areas;
        for (var j in _areas) {
          _searchCityData.push({
            province: province,
            city: _city,
            area: _areas[j]
          });
        }
      }
      return _searchCityData;
    }
  }, {
    key: '_pushAllArea',
    value: function _pushAllArea(province, city, area) {
      var _searchCityData = [];
      for (var i in area) {
        _searchCityData.push({
          province: province,
          city: city,
          area: area[i]
        });
      }
      return _searchCityData;
    }
  }, {
    key: '_pushSearchCityData',
    value: function _pushSearchCityData(searchText) {
      var _searchCityData = [];
      for (var i in this.CITYSDATA) {
        if (_searchCityData.length > 30) {
          break;
        }
        var _province = this.CITYSDATA[i].name;
        if (_province.indexOf(searchText) !== -1) {
          _searchCityData = _searchCityData.concat(this._pushAllCity(_province, this.CITYSDATA[i].citys));
          continue;
        }
        var _citys = this.CITYSDATA[i].citys;
        for (var j in _citys) {
          var _city = _citys[j].name;
          if (_city.indexOf(searchText) !== -1) {
            _searchCityData = _searchCityData.concat(this._pushAllArea(_province, _city, _citys[j].areas));
            continue;
          }
          var _areas = _citys[j].areas;
          for (var k in _areas) {
            var _area = _areas[k];
            if (_area.indexOf(searchText) !== -1) {
              _searchCityData.push({
                province: _province,
                city: _city,
                area: _area
              });
            }
          }
        }
      }
      this.searchData = _searchCityData;
      this.$apply();
    }
  }]);

  return Icityer;
}(_wepy2.default.component);

exports.default = Icityer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljaXR5ZXIuanMiXSwibmFtZXMiOlsiSWNpdHllciIsInByb3BzIiwic2hvdyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwiRGF0YVNvcnQiLCJfZGF0YSIsImkiLCJDSVRZU0RBVEEiLCJrZXkiLCJwdXNoIiwid2F0Y2giLCJkYXRhIiwiZXhwYW5kU2VhcmNoSW5wdXQiLCJzZWFyY2hEYXRhIiwibWV0aG9kcyIsImdldENpdHkiLCJlIiwiX3Byb3ZpbmNlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJwcm92aW5jZSIsIl9jaXR5IiwiY2l0eSIsIl9hcmVhIiwiYXJlYSIsIiRhcHBseSIsIiRlbWl0Iiwic2Nyb2xsRXZlbnQiLCJfZ2V0VG9wVG9OYXYiLCJxdWlja1RvIiwiX2lkIiwibmF2IiwicXVpY2tfZmxhZyIsIm5hdl9mbGFnIiwic2hvd1NlYXJjaElucHV0IiwiZ2V0U2VhcmNoVGV4dCIsIl9zZWFyY2hUZXh0IiwiZGV0YWlsIiwidmFsdWUiLCJ0cmltIiwiX3B1c2hTZWFyY2hDaXR5RGF0YSIsInNlbGYiLCJfbmF2cyIsIm5hdnMiLCJfaW5kZXgiLCJfY2hlY2tBY3RpdmVGbGFnIiwibiIsImNiIiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0Iiwic2VsZWN0Vmlld3BvcnQiLCJzY3JvbGxPZmZzZXQiLCJleGVjIiwicmVzIiwidG9wIiwiX3NldEFjdGl2ZUZsYWciLCJzdGF0dXMiLCJsZW5ndGgiLCJfc2VhcmNoQ2l0eURhdGEiLCJuYW1lIiwiX2FyZWFzIiwiYXJlYXMiLCJqIiwic2VhcmNoVGV4dCIsImluZGV4T2YiLCJjb25jYXQiLCJfcHVzaEFsbENpdHkiLCJjaXR5cyIsIl9jaXR5cyIsIl9wdXNoQWxsQXJlYSIsImsiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7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Q0EsY0FBSXhDLE1BQU02QyxPQUFOLENBQWNELFVBQWQsTUFBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUNsQ0wsOEJBQWtCQSxnQkFBZ0JPLE1BQWhCLENBQXVCLEtBQUtJLFlBQUwsQ0FBa0J0RCxTQUFsQixFQUE2QkksS0FBN0IsRUFBb0NpRCxPQUFPTixDQUFQLEVBQVVELEtBQTlDLENBQXZCLENBQWxCO0FBQ0E7QUFDRDtBQUNELGNBQUlELFNBQVNRLE9BQU9OLENBQVAsRUFBVUQsS0FBdkI7QUFDQSxlQUFLLElBQUlTLENBQVQsSUFBY1YsTUFBZCxFQUFzQjtBQUNwQixnQkFBSXZDLFFBQVF1QyxPQUFPVSxDQUFQLENBQVo7QUFDQSxnQkFBSWpELE1BQU0yQyxPQUFOLENBQWNELFVBQWQsTUFBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUNsQ0wsOEJBQWdCbkQsSUFBaEIsQ0FBcUI7QUFDbkJXLDBCQUFVSCxTQURTO0FBRW5CSyxzQkFBTUQsS0FGYTtBQUduQkcsc0JBQU1EO0FBSGEsZUFBckI7QUFLRDtBQUNGO0FBQ0Y7QUFDRjtBQUNELFdBQUtWLFVBQUwsR0FBa0IrQyxlQUFsQjtBQUNBLFdBQUtuQyxNQUFMO0FBQ0Q7Ozs7RUEzSGtDLGVBQUtnRCxTOztrQkFBckI1RSxPIiwiZmlsZSI6ImljaXR5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgQ0lUWVNEQVRBIH0gZnJvbSAnLi9jaXR5RGF0YSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNpdHllciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHNob3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIERhdGFTb3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBfZGF0YSA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5DSVRZU0RBVEEpIHtcbiAgICAgICAgICBpZiAoIV9kYXRhW3RoaXMuQ0lUWVNEQVRBW2ldLmtleV0pIHtcbiAgICAgICAgICAgIF9kYXRhW3RoaXMuQ0lUWVNEQVRBW2ldLmtleV0gPSBbdGhpcy5DSVRZU0RBVEFbaV1dXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9kYXRhW3RoaXMuQ0lUWVNEQVRBW2ldLmtleV0ucHVzaCh0aGlzLkNJVFlTREFUQVtpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9kYXRhXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAncXVpY2tfZmxhZyc6ICdBJyxcbiAgICAgICduYXZfZmxhZyc6ICdBJyxcbiAgICAgICduYXZzJzogWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJywgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onXSxcbiAgICAgIENJVFlTREFUQSxcbiAgICAgIGV4cGFuZFNlYXJjaElucHV0OiBmYWxzZSxcbiAgICAgIHNlYXJjaERhdGE6IFtdXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgX2dldFRvcFRvTmF2ICgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IF9uYXZzID0gdGhpcy5uYXZzXG4gICAgICBsZXQgX2luZGV4ID0gMFxuICAgICAgbGV0IF9jaGVja0FjdGl2ZUZsYWcgPSBmdW5jdGlvbiAobiwgY2IpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gd2VweS5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgcXVlcnkuc2VsZWN0KGAjJHtfbmF2c1tuXX1gKS5ib3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBxdWVyeS5zZWxlY3RWaWV3cG9ydCgpLnNjcm9sbE9mZnNldCgpXG4gICAgICAgIHF1ZXJ5LmV4ZWMoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYgKCFyZXNbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjYiAmJiBjYih0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzWzBdLnRvcCA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IgJiYgY2IodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNiICYmIGNiKGZhbHNlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgbGV0IF9zZXRBY3RpdmVGbGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfY2hlY2tBY3RpdmVGbGFnKF9pbmRleCwgKHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmIChzdGF0dXMgJiYgX2luZGV4IDwgX25hdnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBfaW5kZXgrK1xuICAgICAgICAgICAgX3NldEFjdGl2ZUZsYWcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm5hdl9mbGFnID0gX25hdnNbX2luZGV4XVxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIF9zZXRBY3RpdmVGbGFnKClcbiAgICB9XG4gICAgX3B1c2hBbGxDaXR5IChwcm92aW5jZSwgY2l0eSkge1xuICAgICAgbGV0IF9zZWFyY2hDaXR5RGF0YSA9IFtdXG4gICAgICBmb3IgKGxldCBpIGluIGNpdHkpIHtcbiAgICAgICAgbGV0IF9jaXR5ID0gY2l0eVtpXS5uYW1lXG4gICAgICAgIGxldCBfYXJlYXMgPSBjaXR5W2ldLmFyZWFzXG4gICAgICAgIGZvciAobGV0IGogaW4gX2FyZWFzKSB7XG4gICAgICAgICAgX3NlYXJjaENpdHlEYXRhLnB1c2goe1xuICAgICAgICAgICAgcHJvdmluY2U6IHByb3ZpbmNlLFxuICAgICAgICAgICAgY2l0eTogX2NpdHksXG4gICAgICAgICAgICBhcmVhOiBfYXJlYXNbal1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3NlYXJjaENpdHlEYXRhXG4gICAgfVxuICAgIF9wdXNoQWxsQXJlYSAocHJvdmluY2UsIGNpdHksIGFyZWEpIHtcbiAgICAgIGxldCBfc2VhcmNoQ2l0eURhdGEgPSBbXVxuICAgICAgZm9yIChsZXQgaSBpbiBhcmVhKSB7XG4gICAgICAgIF9zZWFyY2hDaXR5RGF0YS5wdXNoKHtcbiAgICAgICAgICBwcm92aW5jZTogcHJvdmluY2UsXG4gICAgICAgICAgY2l0eTogY2l0eSxcbiAgICAgICAgICBhcmVhOiBhcmVhW2ldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gX3NlYXJjaENpdHlEYXRhXG4gICAgfVxuICAgIF9wdXNoU2VhcmNoQ2l0eURhdGEgKHNlYXJjaFRleHQpIHtcbiAgICAgIGxldCBfc2VhcmNoQ2l0eURhdGEgPSBbXVxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLkNJVFlTREFUQSkge1xuICAgICAgICBpZiAoX3NlYXJjaENpdHlEYXRhLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBsZXQgX3Byb3ZpbmNlID0gdGhpcy5DSVRZU0RBVEFbaV0ubmFtZVxuICAgICAgICBpZiAoX3Byb3ZpbmNlLmluZGV4T2Yoc2VhcmNoVGV4dCkhPT0tMSkge1xuICAgICAgICAgIF9zZWFyY2hDaXR5RGF0YSA9IF9zZWFyY2hDaXR5RGF0YS5jb25jYXQodGhpcy5fcHVzaEFsbENpdHkoX3Byb3ZpbmNlLCB0aGlzLkNJVFlTREFUQVtpXS5jaXR5cykpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgX2NpdHlzID0gdGhpcy5DSVRZU0RBVEFbaV0uY2l0eXNcbiAgICAgICAgZm9yIChsZXQgaiBpbiBfY2l0eXMpIHtcbiAgICAgICAgICBsZXQgX2NpdHkgPSBfY2l0eXNbal0ubmFtZVxuICAgICAgICAgIGlmIChfY2l0eS5pbmRleE9mKHNlYXJjaFRleHQpIT09LTEpIHtcbiAgICAgICAgICAgIF9zZWFyY2hDaXR5RGF0YSA9IF9zZWFyY2hDaXR5RGF0YS5jb25jYXQodGhpcy5fcHVzaEFsbEFyZWEoX3Byb3ZpbmNlLCBfY2l0eSwgX2NpdHlzW2pdLmFyZWFzKSlcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBfYXJlYXMgPSBfY2l0eXNbal0uYXJlYXNcbiAgICAgICAgICBmb3IgKGxldCBrIGluIF9hcmVhcykge1xuICAgICAgICAgICAgbGV0IF9hcmVhID0gX2FyZWFzW2tdXG4gICAgICAgICAgICBpZiAoX2FyZWEuaW5kZXhPZihzZWFyY2hUZXh0KSE9PS0xKSB7XG4gICAgICAgICAgICAgIF9zZWFyY2hDaXR5RGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZTogX3Byb3ZpbmNlLFxuICAgICAgICAgICAgICAgIGNpdHk6IF9jaXR5LFxuICAgICAgICAgICAgICAgIGFyZWE6IF9hcmVhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNlYXJjaERhdGEgPSBfc2VhcmNoQ2l0eURhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdldENpdHk6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBfcHJvdmluY2UgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wcm92aW5jZVxuICAgICAgICBsZXQgX2NpdHkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaXR5XG4gICAgICAgIGxldCBfYXJlYSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFyZWFcbiAgICAgICAgdGhpcy5leHBhbmRTZWFyY2hJbnB1dCA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hvb3NlJywge1xuICAgICAgICAgIHByb3ZpbmNlOiBfcHJvdmluY2UsXG4gICAgICAgICAgY2l0eTogX2NpdHksXG4gICAgICAgICAgYXJlYTogX2FyZWFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzY3JvbGxFdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDmmoLml7blj5bmtojlt6bkvqfmu5HliqjlhbPogZTlj7PkvqflhbPns7tcbiAgICAgICAgdGhpcy5fZ2V0VG9wVG9OYXYoKVxuICAgICAgICAvLyB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgcXVpY2tUbzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IF9pZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hdlxuICAgICAgICB0aGlzLnF1aWNrX2ZsYWcgPSB0aGlzLm5hdl9mbGFnID0gX2lkXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBzaG93U2VhcmNoSW5wdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRTZWFyY2hJbnB1dCA9IHRydWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcblxuICAgICAgZ2V0U2VhcmNoVGV4dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IF9zZWFyY2hUZXh0ID0gZS5kZXRhaWwudmFsdWUudHJpbSgpXG4gICAgICAgIGlmIChfc2VhcmNoVGV4dD09PScnKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHVzaFNlYXJjaENpdHlEYXRhKF9zZWFyY2hUZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19