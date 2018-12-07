import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  state = {
    // value: this.props.counter.value,
    imageUrl: "https://picsum.photos/100"
    // tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //Event handler

  // handleIncrement = () => {
  //   // this.props.value = 0;
  //   this.setState({ value: this.state.value + 1 });
  //   // this.setState({ count: this.state.count + 1 });
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>there is notag</p>;
  }
  // render() {
  //   return (
  //     <div>
  //       {this.state.tags.lengths === 0 && "please Create a new Tag"}
  //       {this.renderTags()}{" "}
  //     </div>
  //   );
  // }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }
  render() {
    // console.log(this.props);
    //const greeting = "Working";
    console.log("Counter -Rendered");
    return (
      <div>
        {/* items */}
        {this.props.children}
        {/* <h4>{this.props.id}</h4> */}
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
