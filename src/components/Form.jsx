import React from "react";
import { useState } from "react";

const Form = ({ cardList, setCardList }) => {
  const initialCardValue = { title: "", content: "" };
  const [cardValue, setCardValue] = useState(initialCardValue);

  const onChangeHander = ({ target }) => {
    setCardValue({ ...cardValue, [target.name]: target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (cardValue.title.trim() === "" || cardValue.content.trim() === "")
      return alert("입력값을 확인해주세요");
    
    const newCard = {
      id: cardList.length,
      title: cardValue.title.trim(),
      content: cardValue.content.trim(),
      isDone: false,
    };
    setCardList((cardList) => [...cardList, newCard]);
    setCardValue(initialCardValue);
  };

  return (
    <form onSubmit={submitHandler} className="card-form">
      <div>
        <label htmlFor="title-input">제목</label>
        <input
          type="text"
          id="title-input"
          name="title"
          value={cardValue.title}
          onChange={onChangeHander}
          required
        />
        <label htmlFor="content-input">내용</label>
        <input
          type="text"
          id="content-input"
          name="content"
          value={cardValue.content}
          onChange={onChangeHander}
          required
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
