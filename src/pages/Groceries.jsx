import { useState, useEffect } from "react";
import styles from "../styles/Groceries.module.css";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");
        setGroceries(response.data);
      } catch (err) {
        console.error("something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  useEffect(() => {
    // console.log(groceries);
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    // console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);

  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    if (productIndex < 0) {
      setProductIndex(0);
    }
    if (productIndex > groceries.length-1) {
      setProductIndex(groceries.length - 1);
    }
  },[productIndex])

  return (
    <div className={styles.background}>
      <GroceryList items={groceries} />
    </div>
  );
}
