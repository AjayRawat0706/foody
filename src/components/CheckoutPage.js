import React from 'react'
import { Link } from 'react-router-dom'

export default function CheckoutPage() {
  return (
    
    <div >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <form
                // onSubmit={handleSubmit((data) => {
                //   reset();
                //   console.log(data);
                //   dispatch(
                //     updateUserAsync({
                //       ...user,
                //       addresses: [...user.addresses, data],
                //     })
                //   );
                // })}
                className=" px-5 py-8 my-12 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-100"
              >
                <div>
                  <div>
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">
                      Shipping Addresses
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Choose from Existing addresses
                    </p>
                    <ul>
                      {/* {user.addresses.map((address, index) => ( */}
                        <li
                        //   key={index}
                          className="flex justify-between gap-x-6 px-4 py-1 my-2 shadow-lg bg-white"
                        >
                          <div className="flex items-center gap-x-4">
                            <input
                            //   onChange={handleAddress}
                              name="address"
                              type="radio"
                            //   value={index}
                            value='ajay'
                              className="h-4 w-4 bg-gray-300 border-gray-300 text-black "
                            />
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-bold text-gray-900">
                                {/* {address.name}, */}
                              </p>
                              <p className="truncate text-xs  text-gray-500">
                              tyqftdsfyqwgduqwgd
                                {/* {address.street},{address.pincode} */}
                              </p>
                            </div>
                          </div>
                          <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                              Phone: 75456789323
                              {/* {address.phone} */}
                            </p>
                          </div>
                        </li>
                      {/* ))} */}
                    </ul>
                    <div className="shadow-lg my-2 mb-5 bg-white p-4 pb-6">
                      <div className="flex items-center gap-x-4">
                        {/* <input
                          name="address"
                          type="radio"
                          className="h-4 w-4 bg-gray-300 border-gray-300 text-black "
                        /> */}
                        <p className="text-sm font-bold text-gray-900">
                          Add new address
                        </p>
                      </div>
                      <div className="my-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Full name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                            //   {...register("name", {
                            //     required: "name is Required",
                            //   })}
                              id="name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                            {/* {errors.name && (
                              <p className="text-red-500">
                                {errors.name.message}
                              </p>
                            )} */}
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                            //   {...register("email", {
                            //     required: "name is Required",
                            //   })}
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                            {/* {errors.email && (
                              <p className="text-red-500">
                                {errors.email.message}
                              </p>
                            )} */}
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone
                          </label>
                          <div className="mt-2">
                            <input
                              id="phone"
                            //   {...register("phone", {
                            //     required: "phone number is Required",
                            //   })}
                              type="tel"
                              autoComplete="phone"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:text-sm sm:leading-6"
                            />
                            {/* {errors.phone && (
                              <p className="text-red-500">
                                {errors.phone.message}
                              </p>
                            )} */}
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="street"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Street address
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                            //   {...register("street", {
                            //     required: "street is Required",
                            //   })}
                              id="street"
                              autoComplete="street"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                            {/* {errors.street && (
                              <p className="text-red-500">
                                {errors.street.message}
                              </p>
                            )} */}
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                            //   {...register("city", {
                            //     required: "city is Required",
                            //   })}
                              id="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                            {/* {errors.city && (
                              <p className="text-red-500">
                                {errors.city.message}
                              </p>
                            )} */}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            State / Province
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                            //   {...register("state", {
                            //     required: "state is Required",
                            //   })}
                              id="state"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                            {/* {errors.state && (
                              <p className="text-red-500">
                                {errors.state.message}
                              </p>
                            )} */}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="pincode"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            ZIP / Postal code
                          </label>
                          <div className="mt-2">
                            <input
                              type="number"
                            //   {...register("pincode", {
                            //     required: "pincode is Required",
                            //   })}
                              id="pincode"
                              autoComplete="pincode"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            />
                            {/* {errors.pinCode && (
                              <p className="text-red-500">
                                {errors.pinCode.message}
                              </p>
                            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-start gap-x-6">
                        <button
                          type="button"
                        //   onClick={() => reset()}
                          className="rounded-md  px-3 py-2 text-sm font-semibold text-gray shadow-sm  border-2"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Add Address
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      Payment Methods
                    </p>
                    <fieldset className="bg-white py-2 pb-4 px-4 mt-4 shadow-lg">
                      <p className="text-sm leading-6 text-gray-600">
                        Choose One
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="cash"
                            value={"cash"}
                            checked={true}
                            // checked={paymentMethod === "cash"}
                            // onChange={handlePayment}
                            name="payments"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                          />
                          <label
                            htmlFor="cash"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cash On Delivery
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="card"
                            value={"card"}
                            // checked={paymentMethod === "card"}
                            // onChange={handlePayment}
                            name="payments"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                          />
                          <label
                            htmlFor="card"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Card Payment
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2">
              <div className="mx-auto mt-0 mb-12 lg:my-12 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-100 max-w-md px-0 sm:px-0 lg:px-0">
                <div className=" p-4 ">
                  <h1 className="text-4xl mt-3 mb-3 font-bold tracking-tight text-gray-900">
                    Cart
                  </h1>
                  <div className="flow-root">
                    <ul className=" divide-y divide-gray-200">
                      {/* {items.map((item) => ( */}
                        <li 
                        // key={item.id} 
                        className="flex py-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                            //   src={item.product.thumbnail}
                            //   alt={item.product.title}
                            alt="one"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 w-full flex-col">
                            <div>
                              <div className="flex justify-between font-medium text-gray-900">
                                <h3>
                                  <p text-base>
                                  {/* {item.product.title} */}
                                  Apple
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {/* {item.product.brand} */}
                                    Jio Mart
                                  </p>
                                </h3>
                                <p className="ml-4 flex flex-col justify-center">
                                  <p>Rs.100  
                                  {/* {item.product.price * 82} */}
                                  </p>
                                 
                                </p>
                              </div>
                            </div>
                            <div className="flex mt-1 items-center justify-between text-sm">
                            <p>2</p>
                              {/* <select
                                onChange={(e) => handleQuantity(e, item)}
                                className="text-gray-500 p-0 pl-5 pr-1"
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </select> */}

                              <div className="flex">
                                <button
                                //   onClick={() => handleDelete(item.id)}
                                  type="button"
                                  className="font-medium text-black hover:text-gray-800"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li 
                        // key={item.id} 
                        className="flex py-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                            //   src={item.product.thumbnail}
                            //   alt={item.product.title}
                            alt="one"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 w-full flex-col">
                            <div>
                              <div className="flex justify-between font-medium text-gray-900">
                                <h3>
                                  <p text-base>
                                  {/* {item.product.title} */}
                                  Apple
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {/* {item.product.brand} */}
                                    Jio Mart
                                  </p>
                                </h3>
                                <p className="ml-4 flex flex-col justify-center">
                                  <p>Rs.100  
                                  {/* {item.product.price * 82} */}
                                  </p>
                                 
                                </p>
                              </div>
                            </div>
                            <div className="flex mt-1 items-center justify-between text-sm">
                            <p>2</p>
                              {/* <select
                                onChange={(e) => handleQuantity(e, item)}
                                className="text-gray-500 p-0 pl-5 pr-1"
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </select> */}

                              <div className="flex">
                                <button
                                //   onClick={() => handleDelete(item.id)}
                                  type="button"
                                  className="font-medium text-black hover:text-gray-800"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      {/* ))} */}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p> Rs. 
                    {/* {totalAmount * 82} */}
                    Rs. 100
                    </p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total Items in cart</p>
                    {/* <p>{totalItems}</p> */}
                    <p>2</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="w-full mt-4">
                    <button
                    //   onClick={handleOrder}
                      className="flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
                    >
                      Pay And Order
                    </button>
                  </div>
                  <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <Link to="/">
                        <button
                          type="button"
                          className="ml-1 font-medium text-black hover:text-gray-800"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
