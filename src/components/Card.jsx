import React from 'react'

const Card = ({ card, deleteCardHandler, editDoneHandler }) => {
  const { id, title, content, isDone } = card;
  console.log(card);
  return (
    <div className="card-item-wrapper">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="card-btn-wrapper">
        <button onClick={() => deleteCardHandler(id)}>삭제하기</button>
        <button onClick={() => editDoneHandler(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Card;