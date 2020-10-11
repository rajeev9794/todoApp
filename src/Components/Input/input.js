import React from 'react'
import ListItem from '../ListItem/ListItem';
import './input.css'

class input extends React.Component{
    constructor(props)
    {
        super(props);
       
        this.state ={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
    }
    onChangetext=(event)=>{
        this.setState({currentItem:{text:event.target.value
        ,key:Date.now()}})

    }
    addButton=(e)=>{
        e.preventDefault();
        console.log(this.state.currentItem.text);
        const newItem=this.state.currentItem;
        if(newItem.text!=="")
        {
            const items=[...this.state.items,newItem];
            this.setState({
                items:items,
                currentItem:{text:'',key:''}
            });
        }
        
    }
    deleteItem=(key)=>{
        const fliteredItem=this.state.items.filter(item=>item.key!==key);
        this.setState({items:fliteredItem});
    }
    setUpdate=(text,key)=>{
        const UpdatedItem=this.state.items;
        UpdatedItem.map(item=>{
            if(item.key==key)
            {
                item.text=text;
            }
        })
        this.setState({items:UpdatedItem});

    }
    chageBackground=(e)=>{
        e.target.style.background='gray';
    }
    render()
    {
        return(
            <div className="inputClass">
                <header>
                    <form id="to-do-form">
                        <input onChange={this.onChangetext} type="text" placeholder="Enter Task"/>
                        <button onClick={this.addButton} type="submit" placeholder="ADD">ADD</button>
                    </form>
                    <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
                </header>
            </div>
        );
    }
}
export default input;