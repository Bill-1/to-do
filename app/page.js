"use client";

import Image from "next/image";
import styles from "./page.module.css";
import List from "../component/list";
import { useState } from "react";
import { useList } from "@/provider/list.provider";

export default function Home() {
  const { list, setList } = useList();
  // const [list, setList] = useState([])
  const [add, setAdd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    const temp = [...list];
    temp.push({ name: add, status: false });
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
      {list.map((_, index) => {
        return <List key={index} index={index} />;
      })}
    </div>
  );
}
