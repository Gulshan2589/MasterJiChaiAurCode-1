import React, { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const Item = ({ value, onMoveToTop, onMoveToBottom, onRemove }) => {
  const dragControls = useDragControls();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Reorder.Item
      value={value}
      id={value.Name}
      dragListener={false}
      dragControls={dragControls}
      style={{ listStyle: "none" }}
    >
      <Box
        sx={{
          width:"1025px",
          height:"93px",
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          borderRadius: "5px",
          padding: "10px",
          gap: "20px",
          boxShadow: "0 2px 2px rgba(126, 126, 126, 1)",
        }}
      >
        <Box
          sx={{ marginLeft: "15px", cursor: "grab" }}
          onPointerDown={(e) => dragControls.start(e)}
        >
          <DragIndicatorIcon sx={{width:"45px", height:"40px", color:"rgba(127, 127, 127, 1)"}}/>
        </Box>
        <img
          style={{
            width: "133px",
            height: "75px",
            borderRadius: "8px",
          }}
          src={value.Image}
          alt="img"
        />
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            flex: 2,
            fontFamily: "Inter",
            fontStyle: "normal",
            lineHeight: "24px",
            color:"#000000"
          }}
        >
          {value.Name}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "400",
            fontFamily:"Inter",
            fontStyle:'normal',
            lineHeight:"22px",
            flex: 0.5,
            textAlign: "left",
            color: "#000000",
          }}
        >
          {value.Price === "Free" ? "Free" : `Rs. ${value.Price}/-`}
        </p>
        <Typography
          variant="body2"
          sx={{
            width: "85px",
            height: "35px",
            borderRadius: "4px",
            border:"1px solid rgba(126, 126, 126, 1)",
            background: "#DBFFCE",
            textAlign: "center",
            color:"#111",
            fontWeight:"500",
            padding: "5px",
            lineHeight: "26px",
            flexShrink: 0,
          }}
        >
          {value.Type}
        </Typography>
        <IconButton onClick={handleClick}>
          <MoreVertIcon sx={{width:"30px", height:"40px", color:"rgba(127, 127, 127, 1)"}}/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => {
              onMoveToTop();
              handleClose();
            }}
          >
            <ArrowUpwardIcon sx={{ marginRight: "10px" }} />
            Move To Top
          </MenuItem>
          <MenuItem
            onClick={() => {
              onMoveToBottom();
              handleClose();
            }}
          >
            <ArrowDownwardIcon sx={{ marginRight: "10px" }} />
            Move To Bottom
          </MenuItem>
          <MenuItem
            onClick={() => {
              onRemove();
              handleClose();
            }}
          >
            <DeleteOutlineOutlinedIcon sx={{ marginRight: "10px" }} />
            Remove
          </MenuItem>
        </Menu>
      </Box>
    </Reorder.Item>
  );
};

export default Item;
