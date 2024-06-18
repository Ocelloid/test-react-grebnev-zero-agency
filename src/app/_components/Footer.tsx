import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://ocelloid.com" target="_blank">
        © Ocelloid 2024
      </a>
    </div>
  );
}
