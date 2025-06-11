import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListFilteredDoctors from "./ListFilteredDoctors";
import SearchDoctor from "./searchDoctor";
// import SearchDoctor from "./SearchDoctor"; // existing search logic

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const results = await SearchDoctor(query);
      setDoctors(results);
      setLoading(false);
    };

    if (query.trim()) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h4>
        Search Results for: <em>"{query}"</em>
      </h4>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : doctors.length > 0 ? (
        <ListFilteredDoctors doctors={doctors} />
      ) : (
        <p className="text-muted">No doctors found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
