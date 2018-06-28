import React from 'react'
import { createStore } from 'redux'
import fetchApp from './reducers'
import { fetchData }  from './actions'
import {bindActionCreators} from 'redux'
import {connect , Provider } from 'react-redux'
import ReactDOM from 'react-dom'


const storeData = createStore(fetchApp)


class App extends React.Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this)
}
  /*  componentDidMount(){
      const callback = function(payload) {
        this.props.dispatch(payload)
      }
       this.props.fetchData(callback)
  }*/

  onClick()
  {
    const callback = function(payload) {
      this.props.dispatch(payload)
    }
    this.props.fetchData(callback)
  }
    render(){
      return(
      <div>
        <button onClick={this.onClick}>Click</button>
      </div>)
    }
}

function mapDisptchToProps(dispatch) {
  return bindActionCreators({fetchData},dispatch)
}

App =  connect(null,mapDisptchToProps)(App)

ReactDOM.render(
<Provider store ={storeData}>
  <App />
</Provider>, document.getElementById('root'))
