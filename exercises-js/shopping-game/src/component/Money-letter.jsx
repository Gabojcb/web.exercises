import '../stylesheet/money-letter.css';

const MoneyLetter = (onClick) => {

  return(
    <div id="app">
      <div class="card">
        <h2 className="holder">Enter your details</h2>
        <div className="entrance__container">
          <label className='input-text'>Full name</label>
          <input type="text" placeholder='name' id="inputCard" />
        </div>
        <div className="container__mesagge">
          <p className="mesage">how much money do you want to start with?</p>
        </div>
        <div className="entrance__container">
          <label className='input-text'>Quantity</label>
          <input type="number" id="inputCardNum" />
        </div>
        <div className="container__button">
        <button className="button-start" onClick={onClick}>start</button>
        </div>
      </div>
    </div>
  );
}

export default MoneyLetter;