import React from 'react'
import { connect } from 'react-redux'
import { changeText} from '../actions/index.js'

class Test extends React.PureComponent {
  handleClick = () => {
    this.props.dispatch(changeText())
  }
  render() {
    return (
      <div>
        {
          this.props.sayInfo.text
        }
        <div><a href="#" onClick={this.handleClick}>按钮</a></div>

      </div>
    )
  }
}

const getStateFun = function (state) {
  return {
    sayInfo: state.sayInfo
  }
}

export default connect(getStateFun)(Test)