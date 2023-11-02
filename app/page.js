"use client";

import Image from "next/image";
import styles from "./page.module.css";
import List from "../component/list";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState([{ name: "sda", status: "checked" }]);
  const [add, setAdd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    const temp = [...list];
    temp.push({ name: add });
    setList(temp);
    setAdd("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
        </form>
      </div>
      {list.map(({ name, status }) => {
        return <List name={name} status={status} />;
      })}
    </div>
  );
}
