import React from 'react';
import { Accordion } from '@chakra-ui/react';

import { AccordionBox } from '../AccordionBox/AccordionBox';
import { ITask } from '../../Task.interface';
import { IAccordionBoxesProps } from './AccordionBoxes.interface';

export const AccordionBoxes: React.FC<IAccordionBoxesProps> = ({
  tasks,
  deleteTask,
  handleTaskChange,
  handleTaskCheck,
}) => {
  return (
    <Accordion allowToggle>
      {tasks.map((task: ITask) => (
        <AccordionBox
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isChecked={task.isChecked}
          deleteTask={deleteTask}
          handleTaskChange={handleTaskChange}
          handleTaskCheck={handleTaskCheck}
        />
      ))}
    </Accordion>
  );
};
