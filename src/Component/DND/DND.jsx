import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Reorder } from "framer-motion";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import Item from "./Item";
import Logo from "../../Component/Logo/Logo";

const DND = () => {
  const initialData = [
    {
      Image: img1,
      Name: "Interview preparation with JavaScript 2.0",
      Price: "9000",
      Type: "Course",
    },
    {
      Image: img2,
      Name: "Aptitude - Averages, Mixtures & Allegation",
      Price: "Free",
      Type: "Mock Test",
    },
    {
      Image: img2,
      Name: "Aptitude - Simple & Compound Interest",
      Price: "Free",
      Type: "Mock Test",
    },
    {
      Image: img2,
      Name: "Aptitude - Partnership",
      Price: "Free",
      Type: "Mock Test",
    },
    {
      Image: img2,
      Name: "Aptitude - Time & Work",
      Price: "Free",
      Type: "Mock Test",
    },
  ];
  const [items, setItems] = useState(initialData);

  const handleMoveToTop = (index) => {
    if (index > 0) {
      const newItems = [...items];
      [newItems[index - 1], newItems[index]] = [
        newItems[index],
        newItems[index - 1],
      ];
      setItems(newItems);
    }
  };

  const handleMoveToBottom = (index) => {
    if (index < items.length - 1) {
      const newItems = [...items];
      [newItems[index + 1], newItems[index]] = [
        newItems[index],
        newItems[index + 1],
      ];
      setItems(newItems);
    }
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "1380px",
          height: "982px",
          background: "#D2E3C8",
        }}
      >
        <p
          style={{
            position: "absolute",
            width: "500px",
            height: "97px",
            left: "480px",
            top: "17px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "70px",
            lineHeight: "97px",
            textAlign: "center",
            color: "#4F6F52",
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Chai Aur Code
        </p>

        <Box
          sx={{
            position: "absolute",
            width: "1100px",
            height: "785px",
            left: "71px",
            top: "145px",
            background: "#F9F7F7",
            boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.25)",
            borderRadius: "18px",
          }}
        >
          <p
            style={{
              paddingTop: "38px",
              paddingLeft: "20px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "40px",
              color: "#313131",
              lineHeight: "48px",
            }}
          >
            Manage Bundle
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#4B4747",
              paddingLeft: "20px",
            }}
          >
            Change orders of the products based on priority
          </p>
          <Box sx={{ marginTop: "15px", padding: "20px" }}>
            <Reorder.Group axis="y" values={items} onReorder={setItems}>
              {items.map((item, index) => (
                <Item
                  key={item.Name}
                  value={item}
                  onMoveToTop={() => handleMoveToTop(index)}
                  onMoveToBottom={() => handleMoveToBottom(index)}
                  onRemove={() => handleRemove(index)}
                />
              ))}
            </Reorder.Group>
          </Box>
        </Box>
      </Box>
      <Logo left={"1200px"}/>
    </>
  );
};

export default DND;