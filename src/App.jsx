import React, { useState, useEffect } from "react";
import "./Style.css";
import TransactionTable from "./TransactionTable";
import SearchBar from "./SearchBar";
import DateFilter from "./DateFilter";
import DropdownFilter from "./DropdownFilter";
import TableData from "./dummyData";

const App = () => {
  const [transactions, setTransactions] = useState(TableData);
  const [filteredTransactions, setFilteredTransactions] = useState([
    ...TableData,
  ]);
  const [branchFilter, setBranchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");


  const branchOptions = [
    "All",
    "Thane",
    "Navi Mumbai",
    "Mumbai",
    "Kurla",
    "Vile Parle",
    "Lower Parel",
    "Andheri",
    "Byculla",
  ];
  const typeOptions = ["All", "Full", "Short"];
  const statusOptions = ["All", "Pending", "Approved", "Rejected"];


//Search Box filter with ID
  const handleSearch = (searchText) => {
    const filteredData = searchText
      ? transactions.filter((transaction) =>
          String(transaction.id).includes(searchText)
        )
      : [...transactions];

    setFilteredTransactions(filteredData);
  };

//Date Range Filter
  const handleDateFilter = (startDate, endDate) => {
    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    const filteredData = transactions.filter((transaction) => {
      const transactionDateParts = transaction.date.split("/");
      const transactionDate = new Date(
        `${transactionDateParts[2]}-${transactionDateParts[1]}-${transactionDateParts[0]}`
      );

      return (
        transactionDate >= formattedStartDate &&
        transactionDate <= formattedEndDate
      );
    });

    setFilteredTransactions(filteredData);
  };


//Delete a row 
  const handleDelete = (idToDelete) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== idToDelete
    );
    setTransactions(updatedTransactions);

    if (!(branchFilter || typeFilter || statusFilter)) {
      setFilteredTransactions(updatedTransactions);
    }
  };


  //All 3 Dropdown Filters (Branch/Type/Status)
  const applyFilters = () => {
    let filteredData = [...transactions];
    if (branchFilter && branchFilter !== "All") {
      filteredData = filteredData.filter(
        (transaction) => transaction.branch === branchFilter
      );
    }
    let tempFilteredData = [...filteredData];

    if (typeFilter && typeFilter !== "All") {
      tempFilteredData = tempFilteredData.filter(
        (transaction) => transaction.type === typeFilter
      );
    }

    if (statusFilter && statusFilter !== "All") {
      tempFilteredData = tempFilteredData.filter(
        (transaction) => transaction.status === statusFilter
      );
    }

    setFilteredTransactions(tempFilteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [branchFilter, typeFilter, statusFilter]);



  return (
    <div className="container">
      <div className="filters-row">
        <h1>Admin Panel For Transactions Data</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="filters">
          <DateFilter onDateFilterChange={handleDateFilter} />
          <div>
            <h4>Branch</h4>
            <DropdownFilter
              options={branchOptions}
              onSelectFilter={setBranchFilter}
            />
          </div>
          <div>
            <h4>Type</h4>
            <DropdownFilter
              options={typeOptions}
              onSelectFilter={setTypeFilter}
            />
          </div>
          <div>
            <h4>Status</h4>
            <DropdownFilter
              options={statusOptions}
              onSelectFilter={setStatusFilter}
            />
          </div>
        </div>
        <TransactionTable data={filteredTransactions} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
