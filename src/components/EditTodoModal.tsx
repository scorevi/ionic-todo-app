import React, { useState, useEffect } from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButtons,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { updateTodo } from '../services/todoService';
import { Todo } from '../types/Todo';

interface EditTodoModalProps {
  isOpen: boolean;
  todo: Todo | null;
  onClose: () => void;
  onSuccess: () => void;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, todo, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState('General');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setPriority(todo.priority || 'medium');
      setCategory(todo.category || 'General');
      if (todo.dueDate) {
        const date = todo.dueDate instanceof Date ? todo.dueDate : new Date(todo.dueDate);
        setDueDate(date.toISOString().split('T')[0]);
      } else {
        setDueDate('');
      }
    }
  }, [todo]);

  const handleSubmit = async () => {
    if (!title.trim() || !todo) {
      return;
    }

    setLoading(true);
    try {
      const dueDateObj = dueDate ? new Date(dueDate) : undefined;
      await updateTodo(todo.id!, {
        title: title.trim(),
        description: description.trim(),
        priority,
        category: category.trim(),
        dueDate: dueDateObj
      });
      onSuccess();
    } catch (error) {
      console.error('Error updating todo:', error);
      alert('Failed to update todo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Todo</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Cancel</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Title *</IonLabel>
          <IonInput
            value={title}
            onIonInput={(e) => setTitle(e.detail.value!)}
            placeholder="Enter todo title"
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea
            value={description}
            onIonInput={(e) => setDescription(e.detail.value!)}
            placeholder="Enter todo description"
            rows={3}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Priority</IonLabel>
          <IonSelect
            value={priority}
            onIonChange={(e) => setPriority(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="low">Low</IonSelectOption>
            <IonSelectOption value="medium">Medium</IonSelectOption>
            <IonSelectOption value="high">High</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Category</IonLabel>
          <IonSelect
            value={category}
            onIonChange={(e) => setCategory(e.detail.value)}
            interface="popover"
          >
            <IonSelectOption value="General">General</IonSelectOption>
            <IonSelectOption value="Work">Work</IonSelectOption>
            <IonSelectOption value="Personal">Personal</IonSelectOption>
            <IonSelectOption value="Shopping">Shopping</IonSelectOption>
            <IonSelectOption value="Health">Health</IonSelectOption>
            <IonSelectOption value="Finance">Finance</IonSelectOption>
            <IonSelectOption value="Education">Education</IonSelectOption>
            <IonSelectOption value="Home">Home</IonSelectOption>
            <IonSelectOption value="Travel">Travel</IonSelectOption>
            <IonSelectOption value="Family">Family</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Due Date (Optional)</IonLabel>
          <IonInput
            type="date"
            value={dueDate}
            onIonInput={(e) => setDueDate(e.detail.value!)}
          />
        </IonItem>
        <div style={{ padding: '1rem' }}>
          <IonButton
            expand="block"
            onClick={handleSubmit}
            disabled={!title.trim() || loading}
          >
            {loading ? 'Updating...' : 'Update Todo'}
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default EditTodoModal;
