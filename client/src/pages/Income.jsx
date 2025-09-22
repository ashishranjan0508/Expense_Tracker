import React, { useState } from "react";
import ResponsiveAppBar from "../components/AppBar.jsx";
import { addIncomeApi } from "../connectionBW/api.jsx";

const Incomes = () => {
  const [source, setSource] = useState("");
  const [customSource, setCustomSource] = useState("");
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const predefinedSources = [
    "Salary",
    "Business",
    "Investments",
    "Allowance",
    "Petty Cash",
    "Other",
  ];

  const handleChange = (e) => {
    setSource(e.target.value);
    if (e.target.value !== "Other") {
      setCustomSource("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalSource = source === "Other" ? customSource : source;

    const formData = {
      amount: e.target.amount.value,
      source: finalSource,
      note: e.target.note.value,
      date: e.target.date.value,
    };

    console.log("Submitted:", formData);

    const result = await addIncomeApi(formData);

    if (result.ok) {
      setMessage("Income added successfully!");
      setIsError(false);
    } else {
      setMessage(result.data.error || "Income add failed!"); // ✅ fixed message
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
          <h2 className="text-xl font-bold mb-4 text-center">Incomes</h2>

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

            {/* Source */}
            <div>
              <label className="block mb-1">Source</label>
              <select
                className="border border-gray-300 p-2 rounded w-full"
                value={source}
                onChange={handleChange}
                name="source"
                required
              >
                <option value="">-- Select Source --</option>
                {predefinedSources.map((src) => (
                  <option key={src} value={src}>
                    {src}
                  </option>
                ))}
              </select>

              {source === "Other" && (
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded w-full mt-2"
                  placeholder="Enter custom category"
                  value={customSource}
                  onChange={(e) => setCustomSource(e.target.value)}
                  required
                />
              )}
            </div>

            {/* Note */}
            <div>
              <label className="block mb-1">Note</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="text"
                placeholder="Enter note"
                name="note"
              />
            </div>

            <div>
              <label className="block mb-1">Date</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="date"
                name="date"
                required
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

export default Incomes;
