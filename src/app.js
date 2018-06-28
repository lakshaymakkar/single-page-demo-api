import React from 'react'
import { createStore } from 'redux'
import fetchApp from './reducers'
import { fetchData } from './actions'
import {bindActionCreators} from 'redux'
import ReactDOM from 'react-dom'
const store = createStore(fetchApp)


class App extends React.Component{
  constructor(props){
    super(props);
}
    componentDidMount(){
       this.props.fetchData()
  }
    render(){
      <div>
        <button onClick={fetchData}>Click</button>
      </div>
    }
}

function mapDisptchToProps(dispatch) {
  return bindActionCreators({fetchData},dispatch)
}

export default connect(null,mapDisptchToProps)(App)

ReactDOM.render(<App> , document.getElementbyId(root))
