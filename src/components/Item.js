import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }
      editItem = (e) => {
        let newLocation = prompt("enter new location")
        this.props.store.editItem(e.target.value, newLocation)
      }
      deleteItem = (e) => {
        this.props.store.deleteItem(e.target.value)
      }
      render() {
        let item = this.props.item
        return (
            <div className = {item.completed ? "crossed": null}><input type="checkbox"onClick = {this.checkItem} 
                value={item.name}/> 
                {item.name} - {item.location} <button  value={item.name} onClick={this.editItem}>Change Location</button>
                <button  value={item.name} onClick={this.deleteItem}>X</button>
            </div>)
      }
    }

export default Item