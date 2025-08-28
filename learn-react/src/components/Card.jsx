const todoTitle = "Learn react.js";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque assumenda doloremque nam ratione distinctio eligendi autem inventore voluptates, optio, mollitia beatae possimus, perferendis voluptate deserunt sequi vel. Iusto, officiis!";
const date = new Date();

const Card = (props) => {
    const {titleText,descText}=props;
    return <div className="card">
        <h3 className="cardTitle">{titleText}</h3>
        <p className="cardDesc">{descText}</p>
        <h3 className="cardFooter">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</h3>
    </div>
}


export default Card;