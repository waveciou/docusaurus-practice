import styles from './styles.module.css';

export default function FeedbackWidget() {

  const handleSubmit = (score) => {
    alert('Thanks for your feedback!');
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Was this helpful?</h2>
      <div className={styles.feedback}>
        <button className={styles.button} onClick={() => handleSubmit(1)}>
          No
        </button>
        <button className={styles.button} onClick={() => handleSubmit(2)}>
          Not sure
        </button>
        <button className={styles.button} onClick={() => handleSubmit(3)}>
          Yes, it was!
        </button>
      </div>
    </section>
  )
}