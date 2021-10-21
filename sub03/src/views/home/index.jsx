import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/reducers/counterSlicer";
import styles from "./index.module.css";

export default function Home() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>sub03的home页面</h1>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span style={{ margin: "0 20px" }}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
