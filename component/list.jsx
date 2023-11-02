import Image from "next/image";
import "./list.css";

const List = ({ name }) => {
  return (
    <div className="container">
      <input type="checkbox" className="check-box" />
      <div>{name}</div>
      <div className="icons">
        <Image
          src="/edit.svg"
          alt="edit icon"
          className="image"
          width={20}
          height={20}
        />
        <Image
          src="/delete.svg"
          alt="drag icon"
          className="image"
          width={20}
          height={20}
        />
        <Image
          src="/drag.svg"
          alt="drag icon"
          className="image"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
export default List;
