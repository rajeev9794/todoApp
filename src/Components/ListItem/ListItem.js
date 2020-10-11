import React from 'react'
import './ListItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'


function ListItem(props) {
    
   
        const item=props.items;//Allocating our list to props 

        const listItems=item.map(item=>{
            return (
                
                <div className="list" key={item.key}>
                    <p>
                    <input type="text" value={item.text} id={item.key} onChange={(e)=>props.setUpdate(e.target.value,item.key)}/>
                    <span className="trashIcon" >
                    <FontAwesomeIcon className="faicons" icon='trash'
                    onClick={()=>props.deleteItem(item.key)}/>
                     </span>
                </p>
                
                </div>
            )
        })

        return(
            <div>
                <FlipMove duration={300} easing="ease-in-out">
                {listItems}
                 </FlipMove>
            </div>
        )
    }



export default ListItem;