import React from 'react'
import { motion } from "framer-motion";
import c1 from "../img/c1.png"
import { Link } from 'react-router-dom';
export default function AdminPage() {
  return (
    <>
    <div className='px-8 py-4 h-screen'>
    <Link to="/createItem">
    <div className='bg-black shadow-xl rounded-2xl text-center text-white py-2 text-lg'>Add Item</div>
    </Link>
    
    <div>
        <div className=''>
            <h1 className='font-bold text-2xl w-full px-6 text-center py-9 pb-12'>All Products</h1>
            <div className='flex flex-wrap justify-evenly items-center'>
            <div
            // key={item?.id}
            className="w-275 h-[185px] min-w-[295px] md:w-300 md:min-w-[350px] shadow-2xl bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className=" w-4/6 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                //   src={item?.imageURL}
                src={c1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="w-2/6 mt-2 flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {/* {item?.title} */}
                Apple
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {/* {item?.calories} Calories */}
                Non Veg
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                   {/* {item?.price} */}
                   Rs. 1000
                </p>
              </div>
            </div>
            </div>

            
            <div className='my-6'><button className='bg-red-800 font-semibold text-white px-8 py-1 rounded-xl'>Delete</button></div>
          </div>
          <div
            // key={item?.id}
            className="w-275 h-[185px] min-w-[295px] md:w-300 md:min-w-[350px] shadow-2xl bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className=" w-4/6 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                //   src={item?.imageURL}
                src={c1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="w-2/6 mt-2 flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {/* {item?.title} */}
                Apple
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {/* {item?.calories} Calories */}
                Non Veg
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                   {/* {item?.price} */}
                   Rs. 1000
                </p>
              </div>
            </div>
            </div>

            
            <div className='my-6'><button className='bg-red-800 font-semibold text-white px-8 py-1 rounded-xl'>Delete</button></div>
          </div>
          <div
            // key={item?.id}
            className="w-275 h-[185px] min-w-[295px] md:w-300 md:min-w-[350px] shadow-2xl bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className=" w-4/6 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                //   src={item?.imageURL}
                src={c1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="w-2/6 mt-2 flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {/* {item?.title} */}
                Apple
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {/* {item?.calories} Calories */}
                Non Veg
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                   {/* {item?.price} */}
                   Rs. 1000
                </p>
              </div>
            </div>
            </div>

            
            <div className='my-6'><button className='bg-red-800 font-semibold text-white px-8 py-1 rounded-xl'>Delete</button></div>
          </div>
          <div
            // key={item?.id}
            className="w-275 h-[185px] min-w-[295px] md:w-300 md:min-w-[350px] shadow-2xl bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className=" w-4/6 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                //   src={item?.imageURL}
                src={c1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="w-2/6 mt-2 flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {/* {item?.title} */}
                Apple
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {/* {item?.calories} Calories */}
                Non Veg
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                   {/* {item?.price} */}
                   Rs. 1000
                </p>
              </div>
            </div>
            </div>

            
            <div className='my-6'><button className='bg-red-800 font-semibold text-white px-8 py-1 rounded-xl'>Delete</button></div>
          </div>
          <div
            // key={item?.id}
            className="w-275 h-[185px] min-w-[295px] md:w-300 md:min-w-[350px] shadow-2xl bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className=" w-4/6 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                //   src={item?.imageURL}
                src={c1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="w-2/6 mt-2 flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {/* {item?.title} */}
                Apple
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {/* {item?.calories} Calories */}
                Non Veg
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                   {/* {item?.price} */}
                   Rs. 1000
                </p>
              </div>
            </div>
            </div>

            
            <div className='my-6'><button className='bg-red-800 font-semibold text-white px-8 py-1 rounded-xl'>Delete</button></div>
          </div>
          </div>
            
        </div>
    </div>
    </div>
    </>
  )
}
