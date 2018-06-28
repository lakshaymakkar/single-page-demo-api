import React from 'react'
import { createStore } from 'redux'
import fetchApp from './reducers'
import { fetchData } from './actions'
import {bindActionCreators} from 'redux'

const store = createStore(fetchApp)


class App extends React.Component{
  constructor(props){
    super(props);

    componentDidMount(){
       this.props.fetchData()
  }
    render()
  }
}

function mapDisptchToProps(dispatch) {
  return bindActionCreators({fetchData},dispatch)
}

export default connect(null,mapDisptchToProps)(App)
