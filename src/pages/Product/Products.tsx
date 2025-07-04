import { useState } from "react";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
import SingleProduct from "../../components/Products/SingleProduct";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Button } from "../../components/ui/Button";
import useGetProducts from "../../hooks/product/useGetProducts";
import useProductStore from "../../store/slices/products";
import type { Product } from "../../store/types";
import { IoIosAddCircleOutline } from "react-icons/io";
import ProductForm from "../../components/Products/ProductForm";

const Products = () => {
  useGetProducts();
  const products = useProductStore((state) => state.products);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Sidebar
        children={
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                All Products
              </h1>
              <Button
                className="flex items-center cursor-pointer"
                onClick={() => setOpenDrawer(true)}
              >
                <IoIosAddCircleOutline className="mr-1" /> Add Product
              </Button>
              <CustomDrawer
                children={
                  <>
                    <ProductForm setOpenDrawer={setOpenDrawer} />
                  </>
                }
                title={"Add Product"}
                openDrawer={openDrawer}
                closeDrawer={() => setOpenDrawer(false)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products &&
                products?.map((product: Product) => (
                  <SingleProduct key={product._id} product={product} />
                ))}
            </div>
          </div>
        }
      />
    </>
  );
};

export default Products;
