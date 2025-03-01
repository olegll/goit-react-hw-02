export default function Options({ onChange, onReset, totalFeedback }) {
  return (
    <>
      <button onClick={() => onChange('good')}>Good</button>
      <button onClick={() => onChange('neutral')}>Neutral</button>
      <button onClick={() => onChange('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
}
