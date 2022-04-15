import React from "https://cdn.skypack.dev/react@17.0.1";
//import './Button.css';
import { Link } from "https://cdn.skypack.dev/react-router-dom@5.1.2";
import TabButtons from './Tabbuttons.js';

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  
  
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

export default Tabs;

