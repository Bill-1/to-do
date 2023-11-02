import "./list.css";
const List = ({name}) => {
    return (
        <div>
            <div className="container">
                <input type = "checkbox"/>
                {name}
            </div>
        </div>
    );
}
export default List;