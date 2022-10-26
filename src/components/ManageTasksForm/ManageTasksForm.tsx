import React from 'react';
import { Input, Stack, Box, Flex, Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { IManageTasksFormProps } from './ManageTasksForm.interface';
import { Progress } from '../Progress/Progress';

export const ManageTasksForm: React.FC<IManageTasksFormProps> = ({
  deleteAllTasks,
  addTask,
  onChangeTitle,
  title,
  onChangeDescription,
  description,
  progress,
}) => {
  const onAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    addTask({
      id: Date.now() * 100,
      title,
      description,
      isChecked: false,
    });
  };
  return (
    <Stack
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      textAlign={'center'}
      padding={'5px'}
    >
      <Box w={'50%'} display={'flex'} gap={'10px'}>
        <Input
          onChange={onChangeTitle}
          value={title}
          focusBorderColor='green.200'
          variant='filled'
          placeholder='Write new task title'
        ></Input>
        <Input
          onChange={onChangeDescription}
          value={description}
          focusBorderColor='green.200'
          variant='filled'
          placeholder='Write task description'
        ></Input>
      </Box>
      <Flex gap={3} mt={'0 !important'}>
        <Progress progress={progress} />
        <Button onClick={onAddTask} size={'md'}>
          <AddIcon fontSize={'15px'} />
        </Button>
        <Button onClick={deleteAllTasks} size={'md'}>
          <DeleteIcon fontSize={'15px'} />
        </Button>
      </Flex>
    </Stack>
  );
};
