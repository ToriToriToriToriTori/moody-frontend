import './TestList.css'
import TestListItem from './TestListItem';

function TestList (props)
{
    return (
        <div>{props.testList.map(el => 
                <TestListItem item={el} key={el.id}></TestListItem>
             )}</div>
        
    );
}

export default TestList;