import { ITask } from '../../Task.interface';
export interface IAccordionBoxProps extends ITask {
  deleteTask(currentId: number): void;
  handleTaskChange(
    e: React.ChangeEvent<HTMLInputElement>,
    currentId: number,
    titleOrDescription: 'title' | 'description'
  ): void;
  handleTaskCheck(currentId: number, isChecked: boolean): void;
}
