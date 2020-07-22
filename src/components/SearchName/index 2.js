import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="row justify-content-center text-center">
            <div className="searchbox justify-content-center">
                <form className="form-inline">
                    <input
                        className="form-control md-6"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={e => context.handleSearchChange(e)}
                    />
                    <button className="btn my-2 my-sm-0" type="submit">
                        Search
                 </button>
                </form>
            </div>
        </div>
    );
}
export default SearchName;