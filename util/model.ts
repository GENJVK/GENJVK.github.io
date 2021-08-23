export interface TodoListItem {
  id: string;
  task: string;
  assignedto: string,
  duedate: string;
  type: string;
  isDelete: "true" | "false";
  status: string,
}

export type AddTodoListForm = {
  id: string;
  task: string;
  assignedto: string,
  duedate: string;
  type: string;
  isDelete: "true" | "false";
  status: string,
};
