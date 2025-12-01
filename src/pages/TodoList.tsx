import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonLoading,
  IonToast,
  RefresherEventDetail
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { getAllTodos } from '../services/todoService';
import { Todo } from '../types/Todo';
import TodoItem from '../components/TodoItem';
import AddTodoModal from '../components/AddTodoModal';
import EditTodoModal from '../components/EditTodoModal';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [toast, setToast] = useState({ show: false, message: '', color: 'success' });

  const loadTodos = async () => {
    try {
      const data = await getAllTodos();
      setTodos(data);
    } catch (error) {
      showToast('Failed to load todos', 'danger');
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

  const handleAddSuccess = () => {
    setShowAddModal(false);
    loadTodos();
    showToast('Todo added successfully!');
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
    showToast('Todo status updated!');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Todos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonLoading isOpen={loading} message="Loading todos..." />

        <IonList>
          {todos.filter(todo => !todo.completed).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEditClick}
              onDelete={handleDeleteSuccess}
              onToggle={handleToggleSuccess}
            />
          ))}
        </IonList>

        {!loading && todos.filter(todo => !todo.completed).length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--ion-color-medium)' }}>
            <p>No active todos. Tap the + button to add one!</p>
          </div>
        )}

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={() => setShowAddModal(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <AddTodoModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSuccess={handleAddSuccess}
        />

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

export default TodoList;
