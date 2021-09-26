import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <h1>Gaming Heaven</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="Search any game"
        />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px 0 0 10px;
    border: 1px solid #ff7676;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.7rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-radius: 0 10px 10px 0;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
  font-size: 4rem;
  color: #ff7676;
`;

export default Nav;
