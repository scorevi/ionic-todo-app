import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonLoading,
  IonToast,
  RefresherEventDetail
} from '@ionic/react';
import { getCompletedTodos } from '../services/todoService';
import { Todo } from '../types/Todo';
import TodoItem from '../components/TodoItem';
import EditTodoModal from '../components/EditTodoModal';

const Completed: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [toast, setToast] = useState({ show: false, message: '', color: 'success' });

  const loadTodos = async () => {
    try {
      const data = await getCompletedTodos();
      setTodos(data);
    } catch (error) {
      showToast('Failed to load completed todos', 'danger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await loadTodos();
    event.detail.complete();
  };

  const showToast = (message: string, color: string = 'success') => {
    setToast({ show: true, message, color });
  };

  const handleEditClick = (todo: Todo) => {
    setSelectedTodo(todo);
    setShowEditModal(true);
  };

  const handleEditSuccess = () => {
    setShowEditModal(false);
    setSelectedTodo(null);
    loadTodos();
    showToast('Todo updated successfully!');
  };

  const handleDeleteSuccess = () => {
    loadTodos();
    showToast('Todo deleted successfully!');
  };

  const handleToggleSuccess = () => {
    loadTodos();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Completed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Completed</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonLoading isOpen={loading} message="Loading completed todos..." />

        <IonList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEditClick}
              onDelete={handleDeleteSuccess}
              onToggle={handleToggleSuccess}
            />
          ))}
        </IonList>

        {!loading && todos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--ion-color-medium)' }}>
            <p>No completed todos yet.</p>
          </div>
        )}

        <EditTodoModal
          isOpen={showEditModal}
          todo={selectedTodo}
          onClose={() => {
            setShowEditModal(false);
            setSelectedTodo(null);
          }}
          onSuccess={handleEditSuccess}
        />

        <IonToast
          isOpen={toast.show}
          message={toast.message}
          duration={2000}
          color={toast.color}
          onDidDismiss={() => setToast({ ...toast, show: false })}
        />
      </IonContent>
    </IonPage>
  );
};

export default Completed;
