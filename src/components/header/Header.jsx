import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong className={styles.title}>Ignite Feed</strong>
    </header>
  );
}