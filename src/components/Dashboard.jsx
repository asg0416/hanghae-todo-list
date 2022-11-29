import React, { Fragment } from "react";
import Card from "./Card";

const Dashboard = (props) => {
  const { cardList, setCardList } = props;
  const workingCard = cardList.filter((card) => card.isDone !== true);
  const doneCard = cardList.filter((card) => card.isDone === true);

  const deleteCardHandler = (id) => {
    const newCardList = cardList.filter((card) => card.id !== id);
    setCardList(newCardList);
  };

  const editDoneHandler = (id) => {
    setCardList(
      cardList.map((card) => {
        if (card.id === id) {
          return { ...card, isDone: !card.isDone };
        } else {
          return { ...card };
        }
      })
    );
  };

  const dashboardProps = [
    { title: "Working...🔥", list: workingCard },
    { title: "Done...!🎉", list: doneCard },
  ];

  return (
    <div>
      {dashboardProps.map(({ title, list }) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="card-list-wrapper">
              {list.map((cardItem) => {
                return (
                  <Card
                    key={cardItem.id}
                    card={cardItem}
                    deleteCardHandler={deleteCardHandler}
                    editDoneHandler={editDoneHandler}
                  />
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Dashboard;
