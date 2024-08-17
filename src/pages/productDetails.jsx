import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/cartContext";

function ProductDetailsPage() {
  const { id } = useParams();
  const { productDetails, setProductDetails, loading, setLoading } =
    useContext(ShoppingCartContext);

  async function fetchProductDeatils() {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json();
      // console.log(result)
      if (result) {
        setProductDetails(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDeatils();
  }, [id]);

  if (loading) return <h1>Product details loading please wait!</h1>;

  console.log(productDetails);
  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails?.images?.length
                ? productDetails?.images.map((imageItem) => (
                    <div key={imageItem} className="rounded-xl p-4 shadow-md">
                      <img
                        src={imageItem}
                        alt="product secondary image"
                        className="w-24 cursor-pointer"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {productDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${productDetails?.price}</p>
            </div>
            <div>
              <button className="mt-5 min-w-[200px] px-4 py-3 border border-[#333333] bg-transparent text-sm font-semibold rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
