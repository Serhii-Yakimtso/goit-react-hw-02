import css from './Option.module.css';

export default function Options({ onUpdate, onReset, totalFeedback }) {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button
            onClick={() => {
              onUpdate('good');
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onUpdate('neutral');
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onUpdate('bad');
            }}
          >
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={onReset}>Reset</button>
          </li>
        )}
      </ul>
    </>
  );
}
