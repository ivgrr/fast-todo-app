import React, { useState } from 'react';

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
  Text,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {
  CheckCircleIcon,
  CheckIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons';
import { IAccordionBoxProps } from './AccordionBox.interface';

export const AccordionBox: React.FC<IAccordionBoxProps> = ({
  id,
  title,
  description,
  isChecked,
  deleteTask,
  handleTaskChange,
  handleTaskCheck,
}) => {
  const [isEditing, setEditing] = useState(false);

  const IsCheckedIcon = isChecked ? CloseIcon : CheckCircleIcon;
  const IsEditIcon = isEditing ? CheckIcon : EditIcon;

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTaskChange(e, id, 'title');
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTaskChange(e, id, 'description');
    e.preventDefault();
  };

  const onTaskCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleTaskCheck(id, !isChecked);
  };

  const onDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTask(id);
  };

  const onTaskKeyDownEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEditing(!isEditing);
    return;
  };

  const handleTaskEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditing(!isEditing);
  };

  const onInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton as='div' cursor={'pointer'}>
          <Box flex='1' textAlign='left'>
            {isEditing ? (
              <Input
                value={title}
                placeholder={'Write task title'}
                onChange={onTitleChange}
                onKeyDown={onTaskKeyDownEdit}
                onClick={onInputClick}
              />
            ) : (
              <Text color={isChecked ? 'green.300' : '#1A202C'}>{title}</Text>
            )}
          </Box>
          <Box display={'flex'} gap={'10px'}>
            <Button onClick={onTaskCheck} size={'xs'}>
              <IsCheckedIcon
                color={isChecked ? 'red.300' : 'green.300'}
                fontSize={'15px'}
              ></IsCheckedIcon>
            </Button>
            <Button onClick={onDeleteTask} size={'xs'}>
              <DeleteIcon fontSize={'15px'} />
            </Button>
            <Button onClick={handleTaskEdit} size={'xs'}>
              <IsEditIcon fontSize={'15px'} />
            </Button>
            <Button size={'xs'}>
              <AccordionIcon />
            </Button>
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {isEditing ? (
          <Input
            placeholder={'Write task description'}
            value={description}
            onChange={onDescriptionChange}
            onKeyDown={onTaskKeyDownEdit}
          />
        ) : (
          <Text color={isChecked ? 'green.300' : '#1A202C'}>{description}</Text>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};
