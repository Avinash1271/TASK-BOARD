import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import { Dialog, DialogContent, TextField } from '@mui/material';

const CreateNewList = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createList, setCreateList] = useState({
    title: "",
  });

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCreateList = () => {
    // Pass the entire createList object
    props.passList(createList);
    // Clear the text field after submitting
    setCreateList({ title: "" });
    handleCloseDialog();
  };

  return (
    <div className='create-list'>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogContent sx={{ display: 'flex' }}>
          <TextField
            label="New List"
            variant="outlined"
            name='title'
            fullWidth
            value={createList.title}
            onChange={(e) => setCreateList({ title: e.target.value })}
          />
          <Icon
            onClick={handleCreateList}
            sx={{
              fontSize: 50,
              color: '#254077',
              cursor: 'pointer',
            }}
          >
            add_circle
          </Icon>
        </DialogContent>
      </Dialog>

      <div className='add-list-container'>
        <Icon
          onClick={handleOpenDialog}
          sx={{
            fontSize: 100,
            color: '#254077',
            cursor: 'pointer',
          }}
        >
          add_circle
        </Icon>
      </div>
    </div>
  )
}

export default CreateNewList;
