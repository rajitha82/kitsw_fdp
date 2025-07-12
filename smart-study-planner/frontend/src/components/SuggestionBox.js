import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuggestionBox({ userId }) {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    const response = await axios.get(`http://localhost:5000/api/suggestions/${userId}`);
    setSuggestions(response.data);
  };

  useEffect(() => {
    if (userId) {
      fetchSuggestions();
    }
  }, [userId]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>🧠 Smart Study Suggestions</h3>
      <ul>
        {suggestions.map((sug) => (
          <li key={sug._id}>{sug.message}</li>
        ))}
      </ul>
    </div>
  );
}
