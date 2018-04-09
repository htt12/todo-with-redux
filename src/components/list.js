import React, {Component} from 'react';
import {getList} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class List extends Component {
    componentDidMount(){
        
        this.props.getList();
    }


    render(){
        const itemElements = this.props.list.map((item, index)=>{
            console.log('item: ', item)
            return (
                <li className='collection-item' key={index}>
                    <Link to={`/item/${item._id}`}>{item.title}</Link>
                </li>
            );
        })

        const style = {
            height: '60px',

        }

        return(
           <div>
               <div style={style}>
                    <Link to='/add-item' className='btn right'>Add Item</Link>
                </div>
                <ul className='collection'>
                    {itemElements}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    
    return {
        list: state.list.items,
    }
}

export default connect(mapStateToProps, {getList: getList})(List);