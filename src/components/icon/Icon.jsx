import styles from "./Icon.module.css";
export default function Icon({ className, rel, url, type }) {
  return <link className={className} rel={rel} href={url} type={type} />;
  //   <link rel="icon" href="favicon.ico" type="image/x-icon">
}
