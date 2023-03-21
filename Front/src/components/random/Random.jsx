export default function Random(props) {


  function newNumber() {
    const newRandomNumber = Math.floor(Math.random() * 826) + 1;
    return newRandomNumber
  }

  return (
    <div >
      <button onClick={()=>props.onSearch(newNumber())}>
      🃏Get a Card {newNumber()}🃏
      </button>
    </div>
  );
}
