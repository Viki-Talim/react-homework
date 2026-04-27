import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const CommentDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { commentId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments/" + commentId,
        );
        setDetails(res.data);
      } catch (err) {
        alert("Error loading!" + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [commentId]);
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.put(
        "https://jsonplaceholder.typicode.com/comments/" +commentId,
        details,
      );

      if (res.status === 200) {
        alert("Success. Status 200!");
        navigate("/comments");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id="comment-details">
      {loading && <h3>Loading..</h3>}

      <div>
        <p>
          Name: <br />
          <input name="name" value={details.name || ""} onChange={handleChange} />
        </p>
        <p>
          Email: <br />
          <input name="email" value={details.email || ""} onChange={handleChange} />
        </p>
        <p>
          Body: <br />
          <textarea
            name="body"
            value={details.body }
            onChange={handleChange}
            rows="5"
          />
        </p>

        <button onClick={handleUpdate} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>

      {error && <div>Error: {error}</div>}
    </div>
  );
};
