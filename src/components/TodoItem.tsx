import React from 'react';
import {
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  CheckboxCustomEvent
} from '@ionic/react';
import { createOutline, trashOutline } from 'ionicons/icons';
import { Todo } from '../types/Todo';
import { toggleTodoComplete, deleteTodo } from '../services/todoService';

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete, onToggle }) => {
  const handleToggle = async (e: CheckboxCustomEvent) => {
    try {
      await toggleTodoComplete(todo.id!, e.detail.checked);
      onToggle();
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id!);
      onDelete();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <IonItemSliding>
      <IonItem>
        <IonCheckbox
          slot="start"
          checked={todo.completed}
          onIonChange={handleToggle}
        />
        <IonLabel>
          <h2 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </h2>
          <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.description}
          </p>
        </IonLabel>
        <IonButton fill="clear" onClick={() => onEdit(todo)}>
          <IonIcon icon={createOutline} />
        </IonButton>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={handleDelete}>
          <IonIcon icon={trashOutline} slot="icon-only" />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default TodoItem;
