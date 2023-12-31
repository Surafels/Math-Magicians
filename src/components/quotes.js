import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
      method: 'GET',
      headers: { 'X-Api-Key': '+Lji1zEGw2WFu4nm6FsHrQ==q4sNWdxVKeSa0GGe' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote">
      <h2>Daily Success Quotes</h2>
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          Error:
          {error}
        </p>
      )}
      {!loading && !error && quote && <p>{quote}</p>}
    </div>
  );
};

export default Quotes;
