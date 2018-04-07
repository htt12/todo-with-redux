import React, {Component} from 'react';
import {getList} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class List extends Component {
    componentDidMount(){
        debugger;
        this.props.getList();
    }


    render(){
        const itemElements = this.props.list.map((item, index)=>{
            return <li className='collection-item' key={index}>{item.title}</li>
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
    debugger;
    return {
        list: state.list.items,
    }
}

export default connect(mapStateToProps, {getList: getList})(List);