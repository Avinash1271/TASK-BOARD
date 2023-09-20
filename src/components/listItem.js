import React, { useState,useEffect } from 'react';
import Icon from '@mui/material/Icon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { TextField, Dialog, DialogContent,DialogTitle, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';


const ListItem = (props) => {
  const [tasksList, setTasksList] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('taskData'));
    return storedData ? storedData.tasksList : [];
  });
  const [newTask, setNewTask] = useState('');
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const [selectedList, setSelectedList] = useState("")
  const [dateDetails, setDateDetails] = useState({ details: '', date: '' });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('taskData'));
    if (storedData) {
      setCompletedTasksCount(storedData.completedTasksCount || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskData', JSON.stringify({ tasksList, completedTasksCount }));
  }, [tasksList, completedTasksCount]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasksList((prevTasksList) => [...prevTasksList, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasksList = [...tasksList];
    updatedTasksList[index].completed = !updatedTasksList[index].completed;

    const completedCount = updatedTasksList.filter((task) => task.completed).length;
    setCompletedTasksCount(completedCount);

    setTasksList(updatedTasksList);
  };


  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleOpenDialog = (task) =>{
    setEditedTask(task);
    setEditDialogOpen(true);
  }
  const handleAddDateDetails = () => {
    const taskIndex = tasksList.findIndex((task) => task.task === editedTask.task);
  
    if (taskIndex !== -1) {
      const updatedTasksList = [...tasksList];
      updatedTasksList[taskIndex].date = dateDetails.date || '';
      updatedTasksList[taskIndex].details = dateDetails.details || '';
  
      setTasksList(updatedTasksList);
      setEditDialogOpen(false);

      setDateDetails({ details: '', date: '' });
    }
    console.log(tasksList)
  };
  

  return (
    <div className="list-item">
      <div className="list-item-header">
        <h3 className="list-item-title">{props.title}</h3>
        <MoreVertIcon className="list-item-icon" />
      </div>

      <div className="list-item-content">
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          label="New Task"
          variant="outlined"
          fullWidth
        />
        <Icon
          onClick={handleAddTask}
          sx={{
            fontSize: 50,
            color: '#254077',
            cursor: 'pointer',
          }}
        >
          add_circle
        </Icon>
      </div>

      <div className='task-lists'>
        <p>Completed ({completedTasksCount})</p>
        {tasksList.map((task, index) => (
          <div>
            <div key={index} className='task'>
              <div className='task-left'>
              <button
                className={`completed ${task.completed ? 'green' : ''}`}
                onClick={() => handleCompleteTask(index)}
              >
                {task.completed ? <CheckOutlinedIcon className="green" /> : null}
              </button>
              <h4 className={task.completed ? 'completed-task' : ''}>{task.task}</h4>
              </div>
              <ModeEditOutlineOutlinedIcon className='edit-icon' onClick={() => handleOpenDialog(task)}/>
            </div>
            <div className='date-details'>
              <div className='details'>{task.details}</div>
              <div className='date'>{task.date}</div>
            </div>
          </div>
          
        ))}
      </div>

      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogContent className="edit-dialog-content">
          
          <DialogTitle className="edit-dialog-task-title">
            {editedTask.task}
          </DialogTitle>
          
          <TextField
            className='add-details'
            variant="outlined"
            placeholder="Add Details"
            fullWidth
            value={dateDetails.details || ''}
            onChange={(e) => setDateDetails({ ...dateDetails, details: e.target.value })}
          />
          <TextField
            variant="outlined"
            type="date"
            fullWidth
            value={dateDetails.date || ''}
            onChange={(e) => setDateDetails({ ...dateDetails, date: e.target.value })}
          />
          
          {/* <FormControl variant="outlined" fullWidth>
            <InputLabel>Move to Another List</InputLabel>
            <Select
              label="Move to Another List"
              value={selectedList}
              onChange={(e) => setSelectedList(e.target.value)}
            >
              <MenuItem value="List 1">List 1</MenuItem>
              <MenuItem value="List 2">List 2</MenuItem>
            </Select>
          </FormControl> */}

          <Button
            variant="contained"
            color="primary"
            onClick={handleAddDateDetails}
            className="save-button"
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListItem;
