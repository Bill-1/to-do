import Image from "next/image";
import "./list.css";
import { useState } from "react";
import { useList } from "@/provider/list.provider";
const List = ({ index }) => {
  const { list, setList } = useList();
  const [edit, setEdit] = useState(false);
  const Edit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  const Delete = () => {
    setEdit(false);
    const arr = list.filter((_, i) => i != index);
    setList(arr);
    console.log(list);
    console.log(arr);
  };
  const UpdateName = (e) => {
    const copy = [...list];
    copy[index].name = e.target.value;
    setList(copy);
  };
  const UpdateStatus = (e) => {
    const copy = [...list];
    copy[index].status = !list[index].status;
    setList(copy);
    console.log(list);
  };
  return (
    <div className="container">
      <input
        type="checkbox"
        className="check-box"
        checked={list[index].status}
        onChange={UpdateStatus}
      />
      {edit ? (
        <form onSubmit={Edit}>
          <input autoFocus value={list[index].name} onChange={UpdateName} />
        </form>
      ) : (
        <div>{list[index].name}</div>
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
          onClick={Delete}
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
