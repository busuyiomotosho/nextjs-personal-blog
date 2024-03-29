import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  } else return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h2 className={styles.catTitle}>{params.category}</h2>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
              <Button text="Learn more" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image src={item.url} alt="" fill={true} className={styles.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
