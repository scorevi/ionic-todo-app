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
  IonBadge,
  IonChip,
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'medium';
    }
  };

  const formatDueDate = (dueDate?: Date | any) => {
    if (!dueDate) return null;
    const date = dueDate instanceof Date ? dueDate : new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { text: `${Math.abs(diffDays)}d overdue`, color: 'danger' };
    if (diffDays === 0) return { text: 'Due today', color: 'warning' };
    if (diffDays === 1) return { text: 'Due tomorrow', color: 'primary' };
    return { text: `Due in ${diffDays}d`, color: 'medium' };
  };

  const dueDateInfo = formatDueDate(todo.dueDate);

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
          <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <IonBadge color={getPriorityColor(todo.priority || 'medium')}>
              {(todo.priority || 'medium').toUpperCase()}
            </IonBadge>
            <IonChip color="primary" style={{ margin: 0, fontSize: '12px', height: '24px' }}>
              {todo.category || 'General'}
            </IonChip>
            {dueDateInfo && (
              <IonChip color={dueDateInfo.color} style={{ margin: 0, fontSize: '12px', height: '24px' }}>
                {dueDateInfo.text}
              </IonChip>
            )}
          </div>
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
