import { ITask } from '../../Task.interface';

export interface IAccordionBoxesProps {
  tasks: ITask[];
  deleteTask(currentId: number): void;
  handleTaskChange(
    e: React.ChangeEvent<HTMLInputElement>,
    currentId: number,
    itleOrDescription: 'title' | 'description'
  ): void;
  handleTaskCheck(currentId: number, isChecked: boolean): void;
}
