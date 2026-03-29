"use client";

export default function Search() {
  return (
    <div className="single-widget">
      <h4 className="widget-title">Search</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <input type="text" placeholder="Type to search..." />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
