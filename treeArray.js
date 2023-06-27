const items = {

  "nodes": [
    {
      "id": "abc_172.22.22.214",
      "name": "abc",
      "nodes": [
        {
          "id": "abc_172.22.22.214.if.1",
          "name": "Нода 1"
        },
        {
          "id": "abc_172.22.22.214.if.3",
          "name": "Нода 2"
        },
        {
          "id": "abc_172.22.22.214.if.2",
          "name": "Нода 3"
        }
      ]
    },
    {
      "id": "MON_LOGS_192.168.1.53",
      "name": "MON_LOGS",
      "nodes": [
        {
          "id": "MON_LOGS_192.168.1.53.if.1",
          "name": "lo"
        },
        {
          "id": "MON_LOGS_192.168.1.53.if.2",
          "name": "eth0"
        }
      ]
    }
  ]
};

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggle = () => {
    let expanded = !this.state.expanded;
    this.setState({
      expanded: expanded
    });
  };

  showNodes() {
    let arNodes = [];
    if(this.props.element.nodes && this.props.element.nodes.length > 0) {
      this.props.element.nodes.map((element, index) => {
        arNodes.push(<Node key={index} element={element}/>);
      });
    }

    return arNodes;
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
        <button
          type="button"
          onClick={this.toggle}
        >+</button>
        <h3>{this.props.element.name} <small>{this.props.element.id}</small></h3>
        </div>
      {this.state.expanded &&
        <div className="panel-body">
          {this.showNodes()}
        </div>
      }
      </div>
    );
  }
}

export default Node;
