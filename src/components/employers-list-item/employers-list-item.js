import {Component} from 'react';
import './employers-list-item.css'

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }

    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        })) 
    }

    star = () => {
        this.setState(({star}) => ({
            star: !star
        })) 
    }

    render () {

        const {name, salary} = this.props
        const {increase, star} = this.state

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (star) {
            classNames += ' like';
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.star}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;