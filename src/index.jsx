import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import todoApp from './reducers';
import App from './views/components/App';
import './sass/main.jsx';

let store = createStore(todoApp);

class Main extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <App/>
      </Provider>
    );
  }
}

render(
  <Main/>,
  document. getElementById('app')
);






// import React from 'react';
// import { render } from 'react-dom';
// import { createStore } from 'redux';
// import Header from './views/common/header.jsx';
// import Footer from './views/common/footer.jsx';

// // class App extends React.Component {

// //   constructor (props) { 
// //     super(props);
// //     this.state = { message: '何か書いて' };
// //   }

// //   onChange (e) {
// //     this.setState( { message: e.target.value } );
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <input type="text" onChange = { this.onChange.bind(this) } />
// //         <p>{ this.state.message }</p>
// //       </div>
// //     );
// //   }
// // }

// // //class App extends React.Component {
// // //  render () {
// // //    return <p> Hello React!</p>
// // //  }
// // //}

// // render(
// //   <div>
// //     <Header/>
// //     <App/>
// //     <Footer/>
// //   </div>,
// //   document.getElementById('app')
// // );

// //createStoreの引数はReducer：ここでは固定値を返すことにしている
// let store = createStore( function() { return 'Hello Redux!'; });
// var contents = document.getElementById('app');
// contents.innerHTML = store.getState().toString();



