import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Cart = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>

      {props.cart.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
            <button>-</button>
            <button>Sepetten Çıkar</button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps)(Cart);
