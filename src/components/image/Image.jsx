import styles from "./Image.module.css";

export default function Image({ img, alt }) {
  return (
    <>
      <img className={styles.imageContainer} src={img} alt={alt} />
    </>
  );
}
