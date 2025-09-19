import React, { useState } from "react";
import ResponsiveAppBar from "../components/AppBar.jsx";
import { addExpensesApi } from "../connectionBW/api.jsx";

const Expenses = () => {
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const predefinedCategories = [
    "Food",
    "Social Life",
    "Transport",
    "Household",
    "Apparel",
    "Beauty",
    "Health",
    "Education",
    "Gift",
    "Other",
  ];

  const handleChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value !== "Other") {
      setCustomCategory("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalCategory = category === "Other" ? customCategory : category;

    const formData = {
      amount: e.target.amount.value,
      category: finalCategory,
      description: e.target.description.value,
    };

    console.log("Submitted:", formData);

    const result = await addExpensesApi(formData);

    if (result.ok) {
      setMessage("Expense added successfully!");
      setIsError(false);
    } else {
      setMessage(result.data.error || "Expense add failed!"); // ✅ fixed message
      setIsError(true);
    }

    setTimeout(() => setMessage(""), 3000);

    setClicked(true);
    setTimeout(() => setClicked(false), 700);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-3 bg-white rounded shadow-md w-full max-w-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Expenses</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Amount */}
            <div>
              <label className="block mb-1">Amount</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="number"
                step="0.01" // ✅ allows decimals
                placeholder="Enter amount"
                name="amount"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1">Category</label>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                value={category}
                onChange={handleChange}
                name="category"
                required
              >
                <option value="">-- Select Category --</option>
                {predefinedCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {category === "Other" && (
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded w-full mt-2"
                  placeholder="Enter custom category"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  required
                />
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1">Description</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="text"
                placeholder="Enter description"
                name="description"
              />
            </div>

            {/* Messages */}
            {message && (
              <div
                className={`text-center mt-4 ${
                  isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={`px-4 py-2 rounded w-full text-white transition-all duration-300 
                ${clicked ? "bg-green-500 scale-105" : "bg-blue-500"}`}
            >
              {clicked ? "Submitted!" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
