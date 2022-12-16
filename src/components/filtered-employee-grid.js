import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("emp-list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("emp-list")));
  } else {
    return [];
  }
};

function isReady(ename, term) {
  if (ename.toLowerCase().includes(term.searchItem.toLowerCase())) {
    return true;
  }
}
const FilteredEmployeeGrid = (term) => {
  // console.log(term.searchItem);
  // console.log(emplist.list)
  // const list = [{"eid":"rup.ace.pasa@gmail.com","ename":"Rupesh"}];
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  // console.log(list)
  const navigate = useNavigate();

  const removeEmployee = (id) => {
    showAlert(true, "danger", "Employee details removed");
    setList(list.filter((emp) => emp.eid !== id));
  };

  const updateDetails = (updateId) => {
    navigate("/add-user", { state: { id: updateId } });
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem("emp-list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      {alert.show && (
        <Alert {...alert} removeAlert={showAlert} empList={list} />
      )}
      {list
        .filter((person) => {
          const { eid, ename } = person;
          //   console.log(term.searchItem);
          if (term.searchItem == "") {
            return person;
          } else if (isReady(ename, term)) {
            // console.log("empty");
            return person;
          }
        })
        .map((person) => {
          // console.log(item);
          const { eid, ename } = person;
          // console.log(eid);
          return (
            <div key={eid} className="edit-delete-btn-container">
              <p className="emp-grid">{ename}</p>
              <div>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => updateDetails(eid)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeEmployee(eid)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default FilteredEmployeeGrid;
