import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { checkmarkCircle, cloudUpload, phonePortrait, globe } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Todo App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              A hybrid mobile application built with Ionic React, demonstrating full CRUD operations
              with Firebase Firestore integration. MADE BY Sean Patrick Caintic, a 4th year CS Student from CIIT. ORIGINAL WORK.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Features</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="none">
              <IonItem>
                <IonIcon icon={checkmarkCircle} slot="start" color="success" />
                <IonLabel>
                  <h3>Create Todos</h3>
                  <p>Add tasks with title, description, priority, category, and due date</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={checkmarkCircle} slot="start" color="success" />
                <IonLabel>
                  <h3>Priority Levels</h3>
                  <p>Assign Low, Medium, or High priority to tasks</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={checkmarkCircle} slot="start" color="success" />
                <IonLabel>
                  <h3>Categories</h3>
                  <p>Organize tasks by category (Work, Personal, Shopping, etc.)</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={checkmarkCircle} slot="start" color="success" />
                <IonLabel>
                  <h3>Due Dates</h3>
                  <p>Set due dates and track overdue tasks</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={checkmarkCircle} slot="start" color="success" />
                <IonLabel>
                  <h3>Update & Complete</h3>
                  <p>Edit task details and mark as complete</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={checkmarkCircle} slot="start" color="success" />
                <IonLabel>
                  <h3>Delete Todos</h3>
                  <p>Remove tasks permanently</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Technology Stack</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="none">
              <IonItem>
                <IonIcon icon={phonePortrait} slot="start" color="primary" />
                <IonLabel>
                  <h3>Ionic React</h3>
                  <p>Hybrid mobile framework with native UI components</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={cloudUpload} slot="start" color="warning" />
                <IonLabel>
                  <h3>Firebase Firestore</h3>
                  <p>Real-time NoSQL cloud database</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={globe} slot="start" color="tertiary" />
                <IonLabel>
                  <h3>Vercel</h3>
                  <p>Web deployment platform</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Database Structure</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Collection:</strong> todos</p>
            <p><strong>Fields:</strong></p>
            <ul>
              <li>title (string): Task title</li>
              <li>description (string): Task details</li>
              <li>completed (boolean): Completion status</li>
              <li>createdAt (timestamp): Creation date</li>
              <li>updatedAt (timestamp): Last update date</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--ion-color-medium)' }}>
          <p>Hybrid Programming Final Exam - December 2025</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
