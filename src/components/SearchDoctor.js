// searchDoctor.js
export const SearchDoctor = async (query) => {
  if (!query.trim()) {
    console.log("Please enter a search query");
    return [];
  }

  try {
    const response = await fetch(`http://localhost:5000/search?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export default SearchDoctor
