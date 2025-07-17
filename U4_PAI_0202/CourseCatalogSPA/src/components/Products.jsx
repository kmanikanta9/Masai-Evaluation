import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../redux/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.data);
  console.log(data.products);
  useEffect(() => {
    dispatch(productsData());
  }, []);

  return (
    <>
      <div>
        <h3 className="text-center bg-gray-400 rounded-2xl">Fetch Producs</h3>
        {loading && (
          <h3 className="text-center bg-amber-200 rounded-2xl">Loading...</h3>
        )}
        {error && <h3>{error}</h3>}
        {data && data.products.map((product=>(
            <div>
                <p>{product.title}</p>
            </div>
        )))}
      </div>
    </>
  );
};

export default Products;
