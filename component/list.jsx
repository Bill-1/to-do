import Image from "next/image";
import "./list.css";
import { useState } from "react";
import { useList } from "@/provider/list.provider";
const List = ({ index }) => {
  const { list, setList } = useList();
  const [text, setText] = useState(list[index].name);
  const [edit, setEdit] = useState(false);
  const Edit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if (edit) {
      const copy = [...list];
      copy[index].name = text;
      setList(copy);
      console.log(list);
    }
  };
  return (
    <div className="container">
      <input type="checkbox" className="check-box" />
      {edit ? (
        <form onSubmit={Edit}>
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      ) : (
        <div>{text}</div>
      )}
      <div className="icons">
        <Image
          onClick={Edit}
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
