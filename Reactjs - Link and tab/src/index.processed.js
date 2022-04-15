import React from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';
import { Link, BrowserRouter, Switch, Route } from 'https://cdn.skypack.dev/react-router-dom@5.1.2';
import PropTypes from 'https://cdn.skypack.dev/prop-types';
import 'https://cdn.skypack.dev/react-router';
import Table from 'https://cdn.skypack.dev/@material-ui/core/Table';
import TableBody from 'https://cdn.skypack.dev/@material-ui/core/TableBody';
import TableCell from 'https://cdn.skypack.dev/@material-ui/core/TableCell';
import TableHead from 'https://cdn.skypack.dev/@material-ui/core/TableHead';
import TableRow from 'https://cdn.skypack.dev/@material-ui/core/TableRow';
import Paper from 'https://cdn.skypack.dev/@material-ui/core/Paper';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _ref$4 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "tab-list-item"
}, /*#__PURE__*/React.createElement(Link, {
  to: "/",
  className: "tab-list-item"
}, "Profile"), /*#__PURE__*/React.createElement(Link, {
  to: "/comments",
  className: "tab-list-item"
}, "Comments"), /*#__PURE__*/React.createElement(Link, {
  to: "/contact",
  className: "tab-list-item"
}, "Contact")));

class Tablinks extends React.Component {
  render() {
    return _ref$4;
  }

}

let id$1 = 0;

const createData$1 = (name, calories, fat, carbs, protein) => {
  id$1 += 1;
  return {
    id: id$1,
    name,
    calories,
    fat,
    carbs,
    protein
  };
};

var rows$1 = [createData$1("Frozen yoghurt sdafdfdssfdfsdsdsfdsfdsfsfdfsd sd fsdfsdfsdsfdsfd", 159, 6.0, 24, 4.0), createData$1("Ice cream sandwichdsfsdfsdf dfssdfsdafsad asffsd asfds df", 237, 9.0, 37, 4.3), createData$1("Eclairsdfas fdsdfsadfasfd fs dafsd fsdsfdafdsfds fsd sf dsfd asfd sfdasdfsfd", 262, 16.0, 24, 6.0), createData$1("Cupcakesad fasdffsdasfdfsdsfdfsdfsdfdfsdfsdfsdfsdfsdsfd", 305, 3.7, 67, 4.3), createData$1("Gingerbread af ffdsfds sfdfsa adfs afsdfsadfsdafdsfsadasfdfad s", 356, 16.0, 49, 3.9)];

var _ref$3 = /*#__PURE__*/React.createElement("h1", {
  className: "title"
}, "Material UI - Responsive Table");

var _ref2$2 = /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Dessert (100g serving)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Calories"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Fat (g)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Carbs (g)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Protein (g)")));

class Prereqfund extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "product"
    }, _ref$3, /*#__PURE__*/React.createElement(Paper, {
      className: "container"
    }, /*#__PURE__*/React.createElement(Table, null, _ref2$2, /*#__PURE__*/React.createElement(TableBody, null, rows$1.map(({
      id,
      name,
      calories,
      fat,
      carbs,
      protein
    }) => /*#__PURE__*/React.createElement(TableRow, {
      key: id
    }, /*#__PURE__*/React.createElement(TableCell, {
      component: "th",
      scope: "row"
    }, name), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, calories), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, fat), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, carbs), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, protein)))))));
  }

}

let id = 0;

const createData = (name, calories, fat, carbs, protein) => {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
};

var rows = [createData("Vessel yoghurt sdafdfdssfdfsdsdsfdsfdsfsfdfsd sd fsdfsdfsdsfdsfd", 159, 6.0, 24, 4.0), createData("Vessel sandwichdsfsdfsdf dfssdfsdafsad asffsd asfds df", 237, 9.0, 37, 4.3), createData("Vessel fdsdfsadfasfd fs dafsd fsdsfdafdsfds fsd sf dsfd asfd sfdasdfsfd", 262, 16.0, 24, 6.0), createData("Vessel fasdffsdasfdfsdsfdfsdfsdfdfsdfsdfsdfsdfsdsfd", 305, 3.7, 67, 4.3), createData("Vessel af ffdsfds sfdfsa adfs afsdfsadfsdafdsfsadasfdfad s", 356, 16.0, 49, 3.9)];

var _ref$2 = /*#__PURE__*/React.createElement("h1", {
  className: "title"
}, "Vessel - Responsive Table");

var _ref2$1 = /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Dessert (100g serving)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Calories"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Fat (g)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Carbs (g)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Protein (g)")));

class Tabvessel extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "product"
    }, _ref$2, /*#__PURE__*/React.createElement(Paper, {
      className: "container"
    }, /*#__PURE__*/React.createElement(Table, null, _ref2$1, /*#__PURE__*/React.createElement(TableBody, null, rows.map(({
      id,
      name,
      calories,
      fat,
      carbs,
      protein
    }) => /*#__PURE__*/React.createElement(TableRow, {
      key: id
    }, /*#__PURE__*/React.createElement(TableCell, {
      component: "th",
      scope: "row"
    }, name), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, calories), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, fat), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, carbs), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, protein)))))));
  }

}

var _ref$1 = /*#__PURE__*/React.createElement("h1", {
  className: "title"
}, "IT Admin UI - Responsive Table");

var _ref2 = /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Dessert (100g serving)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Calories"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Fat (g)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Carbs (g)"), /*#__PURE__*/React.createElement(TableCell, {
  numeric: true
}, "Protein (g)")));

class Tabitadm extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "product"
    }, _ref$1, /*#__PURE__*/React.createElement(Paper, {
      className: "container"
    }, /*#__PURE__*/React.createElement(Table, null, _ref2, /*#__PURE__*/React.createElement(TableBody, null, rows$1.map(({
      id,
      name,
      calories,
      fat,
      carbs,
      protein
    }) => /*#__PURE__*/React.createElement(TableRow, {
      key: id
    }, /*#__PURE__*/React.createElement(TableCell, {
      component: "th",
      scope: "row"
    }, name), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, calories), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, fat), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, carbs), /*#__PURE__*/React.createElement(TableCell, {
      numeric: true
    }, protein)))))));
  }

}

var _ref = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("h1", null, "Hey welcome home!"), /*#__PURE__*/React.createElement(Link, {
  to: "/",
  className: "tab-list-item"
}, "Profile"), /*#__PURE__*/React.createElement(Link, {
  to: "/comments",
  className: "tab-list-item"
}, "Comments"), /*#__PURE__*/React.createElement(Link, {
  to: "/contact",
  className: "tab-list-item"
}, "Contact"), /*#__PURE__*/React.createElement("div", {
  className: "tabs"
}, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
  exact: true,
  path: "/",
  component: Prereqfund
}), /*#__PURE__*/React.createElement(Route, {
  exact: true,
  path: "/comments",
  component: Tabvessel
}), /*#__PURE__*/React.createElement(Route, {
  exact: true,
  path: "/contact",
  component: Tabitadm
}), /*#__PURE__*/React.createElement(Route, {
  component: Prereqfund
})))));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const path = JSON.stringify(window.location.href);
    const {
      match,
      location,
      history
    } = this.props;
    console.log(window.location.href);
    console.log('====');
    console.log(path);
    console.log('====');
    console.log('location');
    console.log(location);
    return _ref;
  }

}

_defineProperty(App, "propTypes", {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
});

ReactDOM.render( /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));
