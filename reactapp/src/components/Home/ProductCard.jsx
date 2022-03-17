import styles from "./styles/ProductCard.module.css";
import ReactTooltip from "react-tooltip";

const ProductCard = (props) => {
  const onSubmitHandler = (ID) => {
    console.log(ID);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: "#f2f2f2" }}>
      <img
        src={props.image}
        alt="asd"
        style={{ width: 270, height: 270, borderRadius: "6px" }}
      />
      <h1 className={styles.title}>{props.name}</h1>
      <span className={styles.price}>$ {props.price}</span>
      <button
        data-tip
        data-for="tooltip"
        className="btn"
        style={{
          backgroundColor: "#405cf5",
          width: "35%",
          color: "white",
          padding: "6px",
          position: "relative",
          bottom: "23px",
          left: "102px",
        }}
        onClick={() =>onSubmitHandler(props.id)}
      >
        Add to cart
      </button>
      <ReactTooltip id="tooltip" place="right" effect="solid">
        add to cart
      </ReactTooltip>
    </div>
  );
};

export default ProductCard;
