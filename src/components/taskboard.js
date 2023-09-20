import React, { useState,useEffect } from 'react';
import Navbar from './navbar';
import CreateNewList from './createNewList';
import ListItem from './listItem';

const Taskboard = () => {
  const [addList, setAddList] = useState(JSON.parse(localStorage.getItem('lists')) || []);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(addList));
  }, [addList]);

  const createNewList = (createList) => {
    setAddList((prevData) => {
      return [...prevData, createList];
    });
    console.log(addList);
  };

  return (
    <div className='task-board'>
      <Navbar />
      <CreateNewList passList={createNewList} />
      <div className="list-container">
        {addList.map((val, index) => (
          <ListItem key={index} title={val.title} />
        ))}
      </div>
    </div>
  );
};

export default Taskboard;
