
var MessageCount = React.createClass({
  getInitialState : function() {
  	return {visible:false};
  },

  handleClick: function() {
  	this.setState({visible: !this.state.visible})
  },

  render: function() {
  	var display = this.state.visible ? 'inline':'none';

    return <div>
    <button onClick={this.handleClick}>
    Show messages count
    </button>
    <br/>
    <span style={ {display:display} }>
    {this.props.name} has {this.props.messages} new messages
    </span>
    </div>;
  }
});

ReactDOM.render(<MessageCount  messages={20} name="Ulf" />, mountNode);
