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
  IonButtons
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleSubmit = async () => {
    if (!title.trim() || !todo) {
      return;
    }

    setLoading(true);
    try {
      await updateTodo(todo.id!, {
        title: title.trim(),
        description: description.trim()
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
      <IonContent>
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
            rows={4}
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
