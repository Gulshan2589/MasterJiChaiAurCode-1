import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../Logo/Logo";

const OTPForm = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [isOtpValid, setIsOtpValid] = useState(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  const onOtpSubmit = () => {
    const combinedOtp = otp.join("");

    if (combinedOtp === "1234") {
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
    }
  };

  return (
    <Box
      sx={{
        background: "#3F72AF",
        width: "1400px",
        height: "982px",
        position: "relative",
      }}
    >
      <p
        style={{
          position: "absolute",
          width: "553px",
          height: "97px",
          left: "480px",
          top: "38px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontSize: "70px",
          fontWeight: "700",
          lineHeight: "97px",
          textAlign: "center",
          color: "#FFFFFF",
          textShadow: "2px 2px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        Chai Aur Code
      </p>

      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "514px",
          left: "378px",
          top: "218px",
          background: "#F9F7F7",
          boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.25)",
          borderRadius: "18px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            marginTop: "50px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#000000",
              fontSize: "40px",
              fontWeight: "700",
              fontFamily: "Dm Sans",
              fontStyle: "normal",
              lineHeight: "52px",
            }}
          >
            Mobile Phone Verification
          </p>
          <p
            style={{
              width:"560px",
              color: "#BFBFBF",
              fontSize: "25px",
              fontFamily: "DM Sans",
              fontStyle: "normal",
              lineHeight: "33px",
              letterSpacing: "-0.04em",
              fontWeight: "400",
              paddingTop: "15px",
              textAlign:"center"
            }}
          >
            Enter the 4-digit verification code that was sent to your phone
            number.
          </p>
          <Box sx={{ margin: "20px 20px" }}>
            {otp.map((value, index) => {
              return (
                <input
                  style={{
                    width: "90px",
                    height: "100px",
                    margin: "5px",
                    fontFamily:"Dm Sans",
                    fontStyle:"normal",
                    fontWeight:"400",
                   lineHeight:"62px",letterSpacing:"-0.04em",
                    fontSize: "48px",
                    boxSizing:"border-box",
                    textAlign: "center",
                    background: "#DBE2EF",
                    borderRadius:"12px",
                    color:"#000000",
                    border:isOtpValid === false
                        ? "1px solid #FF0000"
                        : isOtpValid === true
                        ? "1px solid #23CF9B"
                        : "0px",
                        outlineWidth:'0',
                outline:'none',
                  }}
                  key={index}
                  type="text"
                  ref={(input) => (inputRefs.current[index] = input)}
                  value={value}
                  onChange={(e) => handleChange(index, e)}
                  onClick={() => handleClick(index)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              );
            })}
          </Box>
          <button
            onClick={onOtpSubmit}
            style={{
              background:
                isOtpValid === false
                  ? "rgba(235, 45, 91, 1)"
                  : isOtpValid === true
                  ? "rgba(35, 207, 155, 1)"
                  : "rgba(17, 45, 78, 1)",
              width: "400px",
              fontFamily:"DM Sans",
              height: "60px",
              borderRadius: "8px",
              border: "0px",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            {isOtpValid === false
              ? "Verification failed"
              : isOtpValid === true
              ? "Verified"
              : "Verify Account"}
          </button>
          <Box sx={{ display: "flex" }}>
            <p
              style={{
                color: "#BFBFBF",
                fontFamily:"Dm Sans",
                fontStyle:"normal",
                fontSize: "25px",
                fontWeight: "400",
                lineHeight:"33px",
                letterSpacing:"-0.04em",
                paddingTop: "15px",
              }}
            >
              Didn’t receive code?
            </p>
            <p
              style={{
                color: "#112D4E",
                fontFamily:"Dm Sans",
                fontStyle:"normal",
                fontSize: "25px",
                fontWeight: "400",
                lineHeight:"33px",
                letterSpacing:"-0.04em",
                paddingTop: "15px",
                paddingLeft: "5px",
              }}
            >
              Resend
            </p>
          </Box>
        </Box>
      </Box>
      <Logo left={"1200px"}/>
    </Box>
  );
};

export default OTPForm;
