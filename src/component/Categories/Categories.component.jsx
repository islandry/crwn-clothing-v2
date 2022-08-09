import Category from '../Category/Category.component';
import './Categories.style.scss';

const Categories = (props) =>{
    console.log("categories", props.array);
    return (
        <div className = 'categories-container'>
            {props.array.map((each) =>{
                return <Category key = {each.id} category = {each} />
            })}
        </div>
    )
}

export default Categories;