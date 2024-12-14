import { useState } from "react";
import { SearchResult } from "./search-result";

export const MobileSearch = ({ isOpen, onClose }) => {
    const [searchInput, setSearchInput] = useState("");
  
    const [isResultOpen, setResultOpen] = useState(false);
  
    function handleSearchInput(e) {
      setSearchInput(e.target.value);
  
      // Display a message when typing starts
      if (e.target.value) {
        setResultOpen(true);
      } else {
        setResultOpen(false);
      }
    }
    if (isOpen) {
      return (
        <div className="mob_search_con d-flex gap-3 align-items-center position-absolute">
          <div className="mob_search_cont d-flex gap-3">
            <span className="mob_header_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></path>
              </svg>
            </span>
            <input
              type="text"
              className="box"
              placeholder="Find your games..."
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
          <span className="mob_header_icon dark" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
            </svg>
          </span>
  
          {/* Search Result */}
          <SearchResult isOpen={isResultOpen} />
        </div>
      );
    }
  }