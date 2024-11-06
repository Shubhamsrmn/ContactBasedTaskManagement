Contact-Based Task Management App

A local-first contact-based task management app built with React Native and Expo. This app allows users to manage tasks associated with their contacts, with offline capabilities using WatermelonDB.
Features

    Read Contacts: Fetch contacts from the device's contact book using Expo's Contacts API.
    Task Management: Create, edit, and delete tasks linked to each contact.
    Offline Support: Store data locally in WatermelonDB, ensuring persistence and offline availability.
    Filtering & Searching: Filter contacts by name or task content, and view tasks associated with specific contacts.

Tech Stack

    React Native with Expo
    WatermelonDB for local-first data storage and offline persistence
    Expo Contacts API to access device contacts
    Expo Navigation for screen navigation

Setup
Prerequisites

    Node.js installed (recommended version >= 14)
    Expo CLI (npm install -g expo-cli)

Installation

    Clone the Repository:

git clone https://github.com/Shubhamsrmn/ContactBasedTaskManagement.git
cd contact-task-manager

Install Dependencies:

    npm install

    Configure WatermelonDB: Follow the setup instructions for WatermelonDB here if additional setup is required based on your environment.

    Permissions: Ensure your app requests permissions to access contacts. This will be handled within the app, but testing on a physical device is recommended for Contacts API.

Running the App

To run the app on Android:

npx expo run:android

To run the app on iOS:

npx expo run:ios

    Note: For iOS testing, a macOS environment with Xcode is required.

Usage

    Home Screen: Displays a list of contacts fetched from the device’s contact book and stored locally in WatermelonDB. A search bar is available for filtering contacts by name or task content.
    Contact Details Screen: Shows contact details and a list of tasks linked to the selected contact. Users can create, edit, and delete tasks here.
    Task List Screen: Displays all tasks associated with contacts and allows filtering tasks by specific contacts.

Key Components and Pages

    app/(tabs)/index.tsx: Home screen with a list of contacts.
    app/contactDetails.tsx: Displays contact details and manages tasks.
    app/(tabs)/TasksPage.tsx: Displays a list of all tasks across contacts.
    components/homepage/ContactItem.tsx: Renders individual contact items.
    hooks/useContactsWithPermission.ts: Manages contact permissions and fetching.
    model/Contacts.ts and model/Tasks.ts: WatermelonDB models for local data storage.

Technical Overview

    Expo Contacts API: Fetches contacts from the device and handles contact permissions.
    WatermelonDB: Provides local-first, offline data handling for contacts and tasks.
    Expo Navigation: Manages navigation between screens.
    TypeScript: Ensures type safety across the app.

Error Handling

    Permissions for accessing contacts are handled in useContactsWithPermission.ts. If permissions are denied, the app will prompt the user to enable access.

Best Practices

    Uses functional components and React hooks for managing state.
    Modularized code structure for ease of maintenance.
    Efficient data handling optimized for large lists of contacts.
