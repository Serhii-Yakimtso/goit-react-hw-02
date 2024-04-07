import css from './Feedback.module.css';

export default function Feedback({ feedback, total, percent }) {
  const { good, neutral, bad } = feedback;

  return (
    <>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {percent}%</li>
      </ul>
    </>
  );
}
