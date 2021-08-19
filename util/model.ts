export interface TodoListItem {
  id: string;
  name: string;
  description: string;
  assignedto: string,
  duedate: string;
  status: string,
  type: string;
  isDelete: "true" | "false";
}

export type AddTodoListForm = {
  id: string;
  name?: string;
  description?: string;
  assignedto: string,
  duedate?: string;
  status: string,
  type: string;
  isDelete: "true" | "false";
};
