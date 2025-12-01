import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Todo } from '../types/Todo';

const COLLECTION_NAME = 'todos';

// CREATE - Add a new todo
export const createTodo = async (
  title: string,
  description: string,
  priority: 'low' | 'medium' | 'high' = 'medium',
  dueDate?: Date,
  category: string = 'General'
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      title,
      description,
      completed: false,
      priority,
      dueDate: dueDate ? Timestamp.fromDate(dueDate) : null,
      category,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

// READ - Get all todos
export const getAllTodos = async (): Promise<Todo[]> => {
  try {
    // Try with orderBy first, fall back to simple query if index doesn't exist
    let querySnapshot;
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      querySnapshot = await getDocs(q);
    } catch (indexError: any) {
      // If index error, just get all docs without ordering
      console.warn('Firestore index not ready, fetching without ordering:', indexError.message);
      querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    }

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      dueDate: doc.data().dueDate?.toDate(),
      priority: doc.data().priority || 'medium',
      category: doc.data().category || 'General'
    })) as Todo[];
  } catch (error: any) {
    console.error('Error getting todos:', error);
    console.error('Error details:', error.code, error.message);
    throw error;
  }
};

// READ - Get completed todos
export const getCompletedTodos = async (): Promise<Todo[]> => {
  try {
    // Try with orderBy first, fall back to simple query if index doesn't exist
    let querySnapshot;
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('completed', '==', true),
        orderBy('updatedAt', 'desc')
      );
      querySnapshot = await getDocs(q);
    } catch (indexError: any) {
      // If index error, just filter without ordering
      console.warn('Firestore index not ready, fetching without ordering:', indexError.message);
      const q = query(
        collection(db, COLLECTION_NAME),
        where('completed', '==', true)
      );
      querySnapshot = await getDocs(q);
    }

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      dueDate: doc.data().dueDate?.toDate(),
      priority: doc.data().priority || 'medium',
      category: doc.data().category || 'General'
    })) as Todo[];
  } catch (error: any) {
    console.error('Error getting completed todos:', error);
    console.error('Error details:', error.code, error.message);
    throw error;
  }
};

// UPDATE - Update a todo
export const updateTodo = async (
  id: string,
  updates: Partial<Omit<Todo, 'id' | 'createdAt'>>
): Promise<void> => {
  try {
    const todoRef = doc(db, COLLECTION_NAME, id);
    const updateData: any = {
      ...updates,
      updatedAt: Timestamp.now()
    };

    // Convert Date to Timestamp for dueDate if it exists
    if (updates.dueDate) {
      updateData.dueDate = Timestamp.fromDate(updates.dueDate);
    } else if (updates.dueDate === undefined && 'dueDate' in updates) {
      updateData.dueDate = null;
    }

    await updateDoc(todoRef, updateData);
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

// UPDATE - Toggle todo completion
export const toggleTodoComplete = async (id: string, completed: boolean): Promise<void> => {
  try {
    const todoRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(todoRef, {
      completed,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error toggling todo:', error);
    throw error;
  }
};

// DELETE - Delete a todo
export const deleteTodo = async (id: string): Promise<void> => {
  try {
    const todoRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(todoRef);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
