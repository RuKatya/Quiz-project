"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function QuizPage() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      getQuestions = _useState2[0],
      setQuestions = _useState2[1];

  (0, _react.useEffect)(function () {
    var data;

    function fetchData() {
      return regeneratorRuntime.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("http://localhost:4000/api").then(function (res) {
                return res.json();
              }).then(function (json) {
                data = json.questions;
                setQuestions(data);
                console.log(data);
              })["catch"](function (e) {
                return console.log(e);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    fetchData();
  }, []);
  var questions = getQuestions;
  console.log(questions); // let questions;
  // console.log(getQuestions)
  // if (getQuestions) {
  //     questions = getQuestions.map(qst => {
  //         return (
  //             <div>
  //                 <h1>{qst.ask}</h1>
  //                 <ul>
  //                     <li>{qst.ans1}</li>
  //                     <li>{qst.ans2}</li>
  //                     <li>{qst.ans3}</li>
  //                     <li>{qst.ans4}</li>
  //                 </ul>
  //             </div>
  //         )
  //     })
  // }
  // return (
  //     <div>
  //         <div>
  //             <div>
  //                 {/* <h1>{asks[0].ask}</h1>
  //                 <ul>
  //                     <li>{asks[0].ansA}</li>
  //                     <li>{asks[0].ansB}</li>
  //                     <li>{asks[0].ansC}</li>
  //                     <li>{asks[0].ansD}</li>
  //                 </ul> */}
  //                 {questions}
  //             </div>
  //         </div>
  //     </div>
  // )
}

var _default = QuizPage;
exports["default"] = _default;