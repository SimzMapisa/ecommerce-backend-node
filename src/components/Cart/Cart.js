import React from "react";
import { CartContainer, CartHeading, CartBody } from "./cartElements";
import { FaTrash} from "react-icons/fa"

const Cart = ({
  cart,
  handleRemoveFromCart,
  handleUpdateCartQty,
  handleEmptyCart,
}) => {
  const incQty = (e) => {
    return cart.line_items.item.quantity + 1;
  };

  const EmptyCart = () => <h5>Cart is empty</h5>;

  const FilledCart = () => (
    <>
      <div className="spacer">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="row shop-listing">
                <table className="table shop-table">
                  <thead>
                    <tr>
                      <th className="b-0">Product Image</th>
                      <th className="b-0">Name</th>
                      <th className="b-0">Price</th>
                      <th className="b-0">Quantity</th>
                      <th className="b-0 text-right">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.line_items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img src={item.media.source} />
                        </td>
                        <td>
                          {item.name} <br />
                          <button
                            className="btn btn-danger mt-4"
                            onClick={() => handleRemoveFromCart(item.id)}
                            
                          >
                            <FaTrash />
                          </button>
                        </td>
                        <td>{item.price.formatted_with_symbol}</td>
                        <td>
                          <button
                            onClick={() =>
                              handleUpdateCartQty(item.id, item.quantity + 1)
                            }
                            className="btn "
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
                            className="btn "
                            onClick={() =>
                              handleUpdateCartQty(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                        </td>
                        <td className="text-right">
                          <h5 className="font-medium m-b-30">
                            {item.line_total.formatted_with_symbol}
                          </h5>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4" align="right">
                        Subtotal :{cart.subtotal.formatted_with_symbol}
                      </td>
                      <td colSpan="4" align="right">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(e) => (handleEmptyCart())}
                        >
                          Empty cart
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "loading...";

  return (
    <CartContainer className="container">
      <CartHeading>
        <h3>Your Cart</h3>
      </CartHeading>
      <CartBody>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </CartBody>
    </CartContainer>
  );
};

export default Cart;
