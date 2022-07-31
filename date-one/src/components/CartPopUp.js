import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CartPopup(props) {
  const { allFood, cart, addToCart } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart !== null) {
      onChangePrice();
    }
  }, [cart]);

  const onChangePrice = () => {
    const totalPrice = cart.reduce((total, currentValue, index) => {
      return total + currentValue * allFood[index].price;
    }, 0);
    setTotalPrice(totalPrice);
  };
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Giỏ hàng của bạn
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Chi tiết giỏ hàng</h5>
            <div
              style={{
                padding: 20,
              }}
            >
              {allFood !== null
                ? cart.map((item, index) => {
                    if (item > 0)
                      return (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            float: "left",
                            justifyContent: "space-around",
                            alignItems: "baseline",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            <h5>{allFood[index].name}</h5>
                            <p
                              style={{
                                color: "red",
                              }}
                            >
                              ${allFood[index].price}
                            </p>
                          </div>
                          <p
                            style={{
                              border: "1px solid",
                              margin: 20,
                              padding: 10,
                            }}
                          >
                            x{item}
                          </p>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <p
                              style={{
                                margin: "0px 10px",
                                fontSize: 20,
                                padding: "5px 10px",
                                border: "1px solid",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                addToCart(index, -1);
                              }}
                            >
                              -
                            </p>
                            <p
                              style={{
                                margin: "0px 10px",
                                fontSize: 20,
                                padding: "5px 10px",
                                border: "1px solid",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                addToCart(index, 1);
                              }}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      );
                  })
                : null}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
              className="totalPrice"
            >
              <p>Total Amount</p>
              <p>${Math.ceil(totalPrice)}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <Link to="/checkout" state={{
              allFood:allFood,
              cart:cart,
              totalPrice: totalPrice
            }} type="button" class="btn btn-primary">
              Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
