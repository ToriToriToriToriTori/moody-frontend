import './TestListItem.css'

function TestListItem (props){
    return (    
        <div key={props.item.id} className='test-list-item'>
            <div className="test-list-item-img"></div>
            <div className="test-list-item-text">
                <h5>{props.item.name}</h5>
                <h6>{props.item.description}</h6>
            </div>
        </div>
    );
}

export default TestListItem;