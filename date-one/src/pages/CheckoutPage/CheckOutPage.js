import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./style/style.css";
import { postInformationinAPI } from "../../services/APIService";
import { checkValidate } from "../../utils/Validation";
export default function CheckOutPage() {
  const location = useLocation();
  const totalPrice = location.state.totalPrice;
  const [submitInfor, setSubmitInfor] = useState(false);
  const [formData, setFormData] = useState({
    name: {
      value: null,
      error: null,
    },
    street: {
      value: null,
      error: null,
    },
    code: {
      value: null,
      error: null,
    },
    city: {
      value: null,
      error: null,
    },
    email: {
      value: null,
      error: null,
    },
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const checkValid = checkValidate(formData);

    if (checkValid.hasError) {
      setFormData({
        ...checkValid.data,
      });
    } else {
      postInforInAPi();
    }
  };

  const postInforInAPi = async () => {
    try {
      const data = {
        name: formData.name.value,
        street: formData.street.value,
        code: formData.code.value,
        city: formData.city.value,
      };
      const response = await postInformationinAPI(data);
      if (response.status === 201) {
        setSubmitInfor(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: {
        error: null,
        value,
      },
    });
    // switch (name) {
    //   case "email":

    //     const email = {
    //       error: null,
    //       value,
    //     };

    //     setFormData({
    //       ...newFormData,
    //       email,
    //     });
    //     break;
    //   case "name":
    //     const name = {
    //       error: null,
    //       value,
    //     };

    //     setFormData({
    //       ...newFormData,
    //       name,
    //     });
    //     break;
    //   case "street":
    //     const street = {
    //       error: null,
    //       value,
    //     };

    //     setFormData({
    //       ...newFormData,
    //       street,
    //     });
    //     break;
    //   case "code":
    //     const code = {
    //       error: null,
    //       value,
    //     };

    //     setFormData({
    //       ...newFormData,
    //       code,
    //     });
    //     break;
    //   default:
    //     const city = {
    //       error: null,
    //       value,
    //     };

    //     setFormData({
    //       ...newFormData,
    //       city,
    //     });
    //     break;
    // }
  };
  const uiError = (data) => {
    return (
      <p
        style={{
          color: "red",
        }}
        className="errormsg"
      >
        {data}
      </p>
    );
  };
  return (
    <div className="checkOut">
      {submitInfor ? (
        <div className="successOrder">
          <p>Order successfull</p>
          <Link to="/" className="btnCancel">
            Back to homepage
          </Link>
        </div>
      ) : (
        <div className="checkInfo">
          <h1>Check out</h1>
          <div className="amountPrice">
            <p>Total Amount:</p>
            <p className="number">{Math.ceil(totalPrice)}</p>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className="itemForm">
              <label className="labelForm" htmlFor="email">
                Your email
              </label>

              <input
                className="iputForm"
                id="email"
                placeholder="Your email"
                name="email"
                value={formData.email.value}
                onChange={onChangeHandler}
                style={{
                  border:
                    formData.email.error !== null
                      ? "1px solid red"
                      : "1px solid black",
                  marginBottom: formData.email.error !== null ? 10 : 30,
                }}
              />
              {formData.email.error !== null ? (
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {uiError(formData.email.error)}
                </p>
              ) : null}
            </div>
            <div className="itemForm">
              <label className="labelForm" htmlFor="name">
                Your name
              </label>

              <input
                className="iputForm"
                id="name"
                placeholder="Your name"
                name="name"
                value={formData.name.value}
                onChange={onChangeHandler}
                style={{
                  border:
                    formData.name.error !== null
                      ? "1px solid red"
                      : "1px solid black",
                  marginBottom: formData.name.error !== null ? 10 : 30,
                }}
              />
              {formData.name.error !== null ? (
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {uiError(formData.name.error)}
                </p>
              ) : null}
            </div>
            <div className="itemForm">
              <label className="labelForm" htmlFor="street">
                Street
              </label>

              <input
                className="iputForm"
                id="street"
                placeholder="Street"
                name="street"
                value={formData.street.value}
                onChange={onChangeHandler}
                style={{
                  border:
                    formData.street.error !== null
                      ? "1px solid red"
                      : "1px solid black",
                  marginBottom: formData.street.error !== null ? 10 : 30,
                }}
              />
              {formData.street.error !== null
                ? uiError(formData.street.error)
                : null}
            </div>
            <div className="itemForm">
              <label className="labelForm" htmlFor="code">
                Postal code
              </label>

              <input
                className="iputForm"
                id="code"
                placeholder="Code"
                name="code"
                value={formData.code.value}
                onChange={onChangeHandler}
                style={{
                  border:
                    formData.code.error !== null
                      ? "1px solid red"
                      : "1px solid black",
                  marginBottom: formData.code.error !== null ? 10 : 30,
                }}
              />
              {formData.code.error !== null ? (
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {uiError(formData.code.error)}
                </p>
              ) : null}
            </div>
            <div className="itemForm">
              <label className="labelForm" htmlFor="city">
                City
              </label>

              <input
                className="iputForm"
                id="city"
                placeholder="City"
                name="city"
                value={formData.city.value}
                onChange={onChangeHandler}
                style={{
                  border:
                    formData.city.error !== null
                      ? "1px solid red"
                      : "1px solid black",
                  marginBottom: formData.city.error !== null ? 10 : 30,
                }}
              />
              {formData.city.error !== null ? (
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {uiError(formData.city.error)}
                </p>
              ) : null}
            </div>
            <div>
              <Link to="/" className="btnCancel">
                Cancel
              </Link>
              <button type="submit" className="btnConfirm">
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    // <div
    //   style={{
    //     padding: 20,
    //   }}
    // >
    //   {allFood !== null
    //     ? cart.map((item, index) => {
    //         if (item > 0)
    //           return (
    //             <div
    //               style={{
    //                 width: "100%",
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 float: "left",
    //                 justifyContent: "space-around",
    //                 alignItems: "baseline",
    //               }}
    //             >
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   flexDirection: "column",
    //                   alignItems: "flex-start",
    //                 }}
    //               >
    //                 <h5>{allFood[index].name}</h5>
    //                 <p
    //                   style={{
    //                     color: "red",
    //                   }}
    //                 >
    //                   ${allFood[index].price}
    //                 </p>
    //               </div>
    //               <p
    //                 style={{
    //                   border: "1px solid",
    //                   margin: 20,
    //                   padding: 10,
    //                 }}
    //               >
    //                 x{item}
    //               </p>

    //               {/* <div
    //                 style={{
    //                   display: "flex",
    //                 }}
    //               >
    //                 <p
    //                   style={{
    //                     margin: "0px 10px",
    //                     fontSize: 20,
    //                     padding: "5px 10px",
    //                     border: "1px solid",
    //                     cursor: "pointer",
    //                   }}
    //                   onClick={() => {
    //                     addToCart(index, -1);
    //                   }}
    //                 >
    //                   -
    //                 </p>
    //                 <p
    //                   style={{
    //                     margin: "0px 10px",
    //                     fontSize: 20,
    //                     padding: "5px 10px",
    //                     border: "1px solid",
    //                     cursor: "pointer",
    //                   }}
    //                   onClick={() => {
    //                     addToCart(index, 1);
    //                   }}
    //                 >
    //                   +
    //                 </p>
    //               </div> */}

    //             </div>

    //           );
    //       })
    //     : null}
    // </div>
  );
}
