import React, { Fragment } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModel, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart || []);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0 h-[42rem] overflow-y-auto"
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Cart</DialogHeader>
            <DialogBody className="flex flex-col justify-center items-start ">
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected color:{" "}
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Single Item price:{" "}
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Total Items price:{" "}
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                Total price : <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping cart</DialogHeader>
            <DialogBody>
              <div>
                <h1 className="text-black text-3xl font-inter font-bold py-4 leading-none tracking-normal">
                  Your bag is empty
                </h1>
                <p className="text-black text-base font-inter leading-none tracking-normal">
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
