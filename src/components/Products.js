import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions/index";

const Products = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>

      {props.booklist.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <button
              onClick={() => {
                alert("eklendi");
                props.sepeteEkle(book);
              }}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    booklist: state.booklist,
    cart: state.cart
  };
};
export default connect(mapStateToProps, { sepeteEkle })(Products);
