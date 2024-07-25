import { Box, TablePagination, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import CustomTable from "./CustomTable";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import "./datatable.css";

const DataTable = () => {

  const data = [
    {
      imageUrl: img1,
      title: "SQL Basics To Advanced Mastery Course",
      startDate: "20 Jul 2024",
      endDate: "28 Jul 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "Published",
    },
    {
      imageUrl: img2,
      title: "30 Days Of Javascript Challenge",
      startDate: "13 Jul 2024",
      endDate: "12 Aug 2024",
      price: "₹ 0",
      validity: "33 days",
      status: "Unpublished",
    },
    {
      imageUrl: img2,
      title: "Interview Preparation With Javascript 2.0",
      startDate: "02 Aug 2024",
      endDate: "15 Sep 2024",
      price: "₹ 10,000",
      validity: "365 days",
      status: "Published",
    },
    {
      imageUrl: img1,
      title: "SQL Basics To Advanced Mastery Course",
      startDate: "20 Jul 2024",
      endDate: "28 Jul 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "Published",
    },
    {
      imageUrl: img2,
      title: "30 Days Of Javascript Challenge",
      startDate: "13 Jul 2024",
      endDate: "12 Aug 2024",
      price: "₹ 0",
      validity: "33 days",
      status: "Unpublished",
    },
    {
      imageUrl: img1,
      title: "Interview Preparation With Javascript 2.0",
      startDate: "02 Aug 2024",
      endDate: "15 Sep 2024",
      price: "₹ 10,000",
      validity: "365 days",
      status: "Published",
    },
    {
      imageUrl: img2,
      title: "React for Beginners",
      startDate: "01 Sep 2024",
      endDate: "30 Sep 2024",
      price: "₹ 5,000",
      validity: "60 days",
      status: "Published",
    },
    {
      imageUrl: img1,
      title: "Advanced Node.js",
      startDate: "05 Oct 2024",
      endDate: "25 Oct 2024",
      price: "₹ 8,000",
      validity: "90 days",
      status: "Published",
    },
    {
      imageUrl: img2,
      title: "CSS Mastery",
      startDate: "10 Nov 2024",
      endDate: "20 Nov 2024",
      price: "₹ 1,500",
      validity: "30 days",
      status: "Unpublished",
    },
    {
      imageUrl: img1,
      title: "HTML Essentials",
      startDate: "15 Dec 2024",
      endDate: "25 Dec 2024",
      price: "₹ 500",
      validity: "15 days",
      status: "Published",
    },
    {
      imageUrl: img2,
      title: "Full Stack Development Bootcamp",
      startDate: "01 Jan 2025",
      endDate: "31 Jan 2025",
      price: "₹ 20,000",
      validity: "365 days",
      status: "Published",
    },
    {
      imageUrl: img1,
      title: "Python Programming",
      startDate: "10 Feb 2025",
      endDate: "20 Feb 2025",
      price: "₹ 3,000",
      validity: "45 days",
      status: "Unpublished",
    },
    {
      imageUrl: img2,
      title: "Data Structures and Algorithms",
      startDate: "01 Mar 2025",
      endDate: "31 Mar 2025",
      price: "₹ 7,500",
      validity: "120 days",
      status: "Published",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setFilteredData(data);
    setPage(0);
  };

  const handleSearch = () => {
    setPage(0);
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(result);
  };

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box className="container">
      <p className="title">Chai Aur Code</p>

      <Box className="table-container">
        <p className="batches-title">Batches</p>
        <p className="heading">
          Create learner’s batch and share information at the same time.
        </p>
        <Box className="Search-container">
          <Box className="inputSearch-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search by Title (alt+k or cmd+k)"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            {searchValue && (
              <div className="clear-button">
              <IconButton  onClick={handleClearSearch}>
                <ClearIcon />
              </IconButton>
              </div>
            )}
          </Box>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </Box>

        <Box className="main-table-container">
          <CustomTable data={paginatedData} />
        </Box>

        <Box className="table-pagination">
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            rowsPerPageOptions={[10, 20, 50]}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
      <Logo left="1300px" top={"700px"}/>
    </Box>
  );
};

export default DataTable;
