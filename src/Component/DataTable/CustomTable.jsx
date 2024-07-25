import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";


const CustomTableCell = ({ children, br }) => {
  return (
    <TableCell
      sx={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "19px",
        color: "#4B4747",
        padding: "15px",
        borderBottom:"2px solid #000000",
        borderLeft:br ? `${br}`: "0px"
      }}
    >
      {children}
    </TableCell>
  );
};

const CustomTable = ({data}) => {
  return (
    <TableContainer
      component={Paper} 
      sx={{ borderRadius: '8px', overflowY: 'auto',maxHeight:"400px", border:"1px solid #7D7D7D"}}
    >
      <Table stickyHeader>
        <TableHead sx={{ background: "#F2F2F2"}}>
          <TableRow>
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell br={"2px solid #7D7D7D"}>Start Date</CustomTableCell>
            <CustomTableCell br={"2px solid #7D7D7D"}>End Date</CustomTableCell>
            <CustomTableCell br={"2px solid #7D7D7D"}>Price</CustomTableCell>
            <CustomTableCell br={"2px solid #7D7D7D"}>Validity/Expiry</CustomTableCell>
            <CustomTableCell br={"2px solid #7D7D7D"}>Status</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} >
              <TableCell sx={{borderBottom:"0px",width:"300px"}}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={row.imageUrl}
                    alt={row.title}
                    style={{ width: 106, height: 60, marginRight: 10 , borderRadius:"8px"}}
                  />
                  <p style={{fontFamily:"Inter", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color:"#4B4747"}}>{row.title}</p>
                </div>
              </TableCell>
              <TableCell sx={{width:"130px", borderLeft:"1px solid #7D7D7D", borderBottom:"0px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color:"#4B4747"}}>{row.startDate}</TableCell>
              <TableCell sx={{width:"130px",borderLeft:"1px solid #7D7D7D", borderBottom:"0px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color:"#4B4747"}}>{row.endDate}</TableCell>
              <TableCell sx={{width:"100px",borderLeft:"1px solid #7D7D7D", borderBottom:"0px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color:"#4B4747"}}>{row.price}</TableCell>
              <TableCell sx={{width:"120px",maxWidth:"30px",borderLeft:"1px solid #7D7D7D", borderBottom:"0px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color:"#4B4747"}}>{row.validity}</TableCell>
              <TableCell sx={{width:"90px",borderLeft:"1px solid #7D7D7D", borderBottom:"0px", fontFamily:"Inter", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color:"#4B4747"}}>
                <span
                  style={{
                    backgroundColor:
                      row.status === "Published" ? "#DBFFCE" : "rgb(202, 200, 200)",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
