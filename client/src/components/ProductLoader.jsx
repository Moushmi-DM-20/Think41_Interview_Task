// src/components/ProductLoader.jsx
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Swal from "sweetalert2";

const ProductLoader = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch("/products.csv"); // ✅ loads from public/
        if (!response.ok) {
          throw new Error("Failed to fetch products.csv");
        }

        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setProducts(result.data);
            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "CSV Loaded!",
              text: "Products imported successfully.",
              timer: 2000,
              showConfirmButton: false,
            });
          },
          error: (err) => {
            console.error("Parse error:", err);
            Swal.fire({
              icon: "error",
              title: "Parsing Error",
              text: "Could not parse products.csv.",
            });
          },
        });
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Load Error",
          text: error.message,
        });
      }
    };

    loadCSV();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Product Catalog</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">{product.name || "Unnamed Product"}</h5>
                  <h6 className="card-subtitle text-muted">{product.brand || "Unknown Brand"}</h6>
                  <ul className="list-unstyled mt-2">
                    <li><strong>Category:</strong> {product.category || "Not specified"}</li>
                    <li><strong>Department:</strong> {product.department || "Not specified"}</li>
                    <li><strong>Cost:</strong> ₹{product.cost || "0"}</li>
                    <li><strong>Retail Price:</strong> ₹{product.retail_price || "0"}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductLoader;
