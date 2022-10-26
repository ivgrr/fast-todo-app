import { ITask } from '../../Task.interface';
export interface IManageTasksFormProps {
  deleteAllTasks: () => void;
  addTask: (task: ITask) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  onChangeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  progress: number;
}
