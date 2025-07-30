import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggles the mobile menu
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <></>
  );
}