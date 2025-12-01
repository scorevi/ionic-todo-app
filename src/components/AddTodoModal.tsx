import React, { useState } from 'react';
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
import { createTodo } from '../services/todoService';

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) {
      return;
    }

    setLoading(true);
    try {
      await createTodo(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      onSuccess();
    } catch (error) {
      console.error('Error creating todo:', error);
      alert('Failed to create todo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={handleCancel}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Todo</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleCancel}>Cancel</IonButton>
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
            {loading ? 'Adding...' : 'Add Todo'}
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default AddTodoModal;
