import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js'  //to have the layout at all pages and display the children in layout//
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'

class App extends Component {
  render() {
    return (
      <div>
      <Layout>

      <BurgerBuilder>
        
      </BurgerBuilder>

      </Layout>
      </div>
    );
  }
}

export default App;
