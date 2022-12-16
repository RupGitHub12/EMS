import { useState } from "react";
import FilteredEmployeeGrid from "../components/filtered-employee-grid";
import Sidebar from "../components/sidebar";
import { Navigate } from "react-router-dom";

const FilteredEmployeeList = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("emp-list"))
  );
  const [searchItem, setSearchItem] = useState("");

  const token = localStorage.getItem("token");
  if (token == null) {
    return <Navigate to="/login" />;
  }
  // console.log(list)
  // console.log(list.length)
  return (
    <div className="emplistcontainer">
      <Sidebar />
      <div className="emplist">
        <div className="form">
          <input
            type="text"
            className="searchInputBox"
            placeholder="Search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <FilteredEmployeeGrid searchItem={searchItem} />:
        </div>
      </div>
    </div>
  );
};

export default FilteredEmployeeList;
