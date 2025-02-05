"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import ProtectedRoute from "@/app/components/ProtectedRoute";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          "image": image.asset->_id,
          description,
          available
        }`
      )
      .then((data: Product[]) => { // ✅ Explicit type for fetched data
        const formattedData: Product[] = data.map((product) => ({
          _id: product._id,
          name: product.name || "",
          category: product.category || "",
          price: product.price || 0,
          originalPrice: product.originalPrice || 0,
          tags: product.tags || [],
          image: product.image || "",
          description: product.description || "",
          available: product.available ?? true,
        }));

        setProducts(formattedData);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts =
    filter === "All" ? products : products.filter((product) => product.category === filter);

  const handleDelete = async (productId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await client.delete(productId);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      Swal.fire("Deleted!", "Product has been removed.", "success");
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire("Error!", "Something went wrong while deleting.", "error");
    }
  };

  const handleEdit = async (product: Product) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Product",
      html:
        `<input id="swal-name" class="swal2-input" value="${product.name}" placeholder="Name">` +
        `<input id="swal-category" class="swal2-input" value="${product.category}" placeholder="Category">` +
        `<input id="swal-price" type="number" class="swal2-input" value="${product.price}" placeholder="Price">` +
        `<input id="swal-originalPrice" type="number" class="swal2-input" value="${product.originalPrice}" placeholder="Original Price">` +
        `<input id="swal-image" class="swal2-input" value="${product.image}" placeholder="Image URL">` +
        `<textarea id="swal-description" class="swal2-textarea" placeholder="Description">${product.description}</textarea>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save Changes",
      preConfirm: () => {
        return {
          name: (document.getElementById("swal-name") as HTMLInputElement).value,
          category: (document.getElementById("swal-category") as HTMLInputElement).value,
          price: Number((document.getElementById("swal-price") as HTMLInputElement).value),
          originalPrice: Number((document.getElementById("swal-originalPrice") as HTMLInputElement).value),
          image: (document.getElementById("swal-image") as HTMLInputElement).value,
          description: (document.getElementById("swal-description") as HTMLTextAreaElement).value,
          available: product.available,
        };
      },
    });

    if (!formValues) return;

    try {
      await client.patch(product._id).set(formValues).commit();

      setProducts((prevProducts) =>
        prevProducts.map((p) => (p._id === product._id ? { ...p, ...formValues } : p))
      );

      Swal.fire("Updated!", "Product details have been updated.", "success");
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error!", "Something went wrong while updating.", "error");
    }
  };

  const handleAddProduct = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Product",
      html:
        `<input id="swal-name" class="swal2-input" placeholder="Name">` +
        `<input id="swal-category" class="swal2-input" placeholder="Category">` +
        `<input id="swal-price" type="number" class="swal2-input" placeholder="Price">` +
        `<input id="swal-originalPrice" type="number" class="swal2-input" placeholder="Original Price">` +
        `<input id="swal-image" class="swal2-input" placeholder="Image URL">` +
        `<textarea id="swal-description" class="swal2-textarea" placeholder="Description"></textarea>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Add Product",
      preConfirm: () => {
        return {
          name: (document.getElementById("swal-name") as HTMLInputElement).value,
          category: (document.getElementById("swal-category") as HTMLInputElement).value,
          price: Number((document.getElementById("swal-price") as HTMLInputElement).value),
          originalPrice: Number((document.getElementById("swal-originalPrice") as HTMLInputElement).value),
          image: (document.getElementById("swal-image") as HTMLInputElement).value,
          description: (document.getElementById("swal-description") as HTMLTextAreaElement).value,
          available: true,
        };
      },
    });

    if (!formValues) return;

    try {
      const newProduct = await client.create({
        _type: "food",
        ...formValues,
      });

      setProducts([...products, newProduct as unknown as Product]);

      Swal.fire("Added!", "New product has been added.", "success");
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire("Error!", "Something went wrong while adding.", "error");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-green-600 text-white p-4 shadow-lg flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Products</h2>
          <div className="flex space-x-2 sm:space-x-4">
            {["All", "Drink", "Fast Food", "Bakery"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-xs sm:text-base rounded-lg transition-all ${filter === category ? "bg-white text-green-600 font-bold" : "text-white"}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
            <button
              onClick={handleAddProduct}
              className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              + Add Product
            </button>
          </div>
        </nav>

        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-white shadow-md p-4 rounded-lg relative flex flex-col">
                <Image
                  src={product.image ? urlFor(product.image).url() : "/placeholder-image.jpg"}
                  width={150}
                  height={150}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-red-500 font-bold">{product.price}/-</p>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
