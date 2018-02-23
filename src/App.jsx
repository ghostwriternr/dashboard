import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import SidebarContent from './components/sidebarContent';
import HomeContent from './components/homeContent';
import Noticeboard from './containers/Noticeboard';
import './styles/App.css';
import noticesReducer from './reducers/reducers';

const reducer = combineReducers({
  noticesData: noticesReducer,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));
const mql = window.matchMedia('(min-width: 800px)');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mql,
      docked: props.docked,
      open: props.open,
      shadow: false,
      transitions: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  render() {
    const content = <SidebarContent />;
    const sidebarProps = {
      sidebar: content,
      open: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen,
      contentClassName: 'mainContent',
      shadow: this.state.shadow,
      transitions: this.state.transitions,
    };

    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar {...sidebarProps}>
            <Switch>
              <Route exact path="/" component={HomeContent} />
              <Route exact path="/noticeboard" component={Noticeboard} />
            </Switch>
          </Sidebar>
        </Provider>
      </div>
    );
  }
}

export default App;
