import React, { useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { AccordionBoxes, ManageTasksForm } from './components/exports';

import { ITask } from './Task.interface';

export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    setProgress(() => {
      if (!tasks.length) return 0;
      const tasksAmount = tasks.length;
      const readyTasksAmount = tasks.filter(
        (task: ITask) => task.isChecked
      ).length;

      return Math.floor((readyTasksAmount / tasksAmount) * 100);
    });
  }, [tasks]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      localStorage.getItem('tasks') || '[]'
    );

    if (tasksFromLocalStorage.length) setTasks(tasksFromLocalStorage);
  }, []);

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const addTask = (task: {
    id: number;
    title: string;
    description: string;
  }) => {
    if (!task.title.trim() || !task.description.trim()) {
      setTitle('');
      setDescription('');
      return;
    }
    setTasks((prevState: ITask[]) => [task, ...prevState]);
    setTitle('');
    setDescription('');
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const deleteTask = (currentId: number) => {
    setTasks((prevState: ITask[]) =>
      prevState.filter((task) => task.id !== currentId)
    );
  };

  const handleTaskChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    currentId: number,
    titleOrDescription: 'title' | 'description'
  ) => {
    e.preventDefault();
    setTasks((prevState: ITask[]) =>
      prevState.map((task) => {
        if (titleOrDescription === 'title') {
          return task.id === currentId
            ? { ...task, title: e.target.value }
            : task;
        } else {
          return task.id === currentId
            ? { ...task, description: e.target.value }
            : task;
        }
      })
    );
  };

  const handleTaskCheck = (currentId: number, isChecked: boolean) => {
    setTasks((prevState: ITask[]) =>
      prevState.map((task) => {
        return task.id === currentId ? { ...task, isChecked } : task;
      })
    );
  };

  return (
    <Box className='App'>
      <Box margin={'5% 10%'}>
        <ManageTasksForm
          deleteAllTasks={deleteAllTasks}
          addTask={addTask}
          onChangeTitle={onChangeTitle}
          title={title}
          description={description}
          onChangeDescription={onChangeDescription}
          progress={progress}
        />
        {tasks.length ? (
          <AccordionBoxes
            tasks={tasks}
            deleteTask={deleteTask}
            handleTaskChange={handleTaskChange}
            handleTaskCheck={handleTaskCheck}
          />
        ) : (
          <Flex justifyContent={'center'} alignItems={'center'} height={'50vh'}>
            <Box
              width={'30vh'}
              height={'20vh'}
              bgGradient={'linear(to-r, gray.200, gray.300)'}
              borderRadius={'50% 20% / 10% 40%'}
              textAlign={'center'}
            ></Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
};
