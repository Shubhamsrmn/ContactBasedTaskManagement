# Contact-Based Task Management App

## Table of Contents

1.  [Overview](#overview)
2.  [Features](#features)
3.  [Usage](#usage)
4.  [Key Components and Pages](#key-components-and-pages)
5.  [Technical Overview](#technical-overview)
6.  [Error Handling](#error-handling)
7.  [Best Practices](#best-practices)
8.  [Installation](#installation)
9.  [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)
12. [Acknowledgments](#acknowledgments)

## Overview

A local-first contact-based task management app built with React Native, Expo and WatermelonDB.

## Features

1.  Home Screen: List of contacts from device’s contact book with search functionality.
2.  Contact Details Screen: Contact information and task management.
3.  Task List Screen: Filterable list of tasks across contacts.

## Usage

1.  Clone repository: `git clone https://github.com/Shubhamsrmn/ContactBasedTaskManagement.git`
2.  Navigate to project directory.
3.  Run `npm install` or `yarn install`.
4.  Start app: `npx expo run android`.

## Key Components and Pages

1.  `app/(tabs)/index.tsx`: Home screen contact list.
2.  `app/contactDetails.tsx`: Contact details and task management.
3.  `app/(tabs)/TasksPage.tsx`: Filterable task list.
4.  `components/homepage/ContactItem.tsx`: Individual contact item rendering.
5.  `hooks/useContactsWithPermission.ts`: Contact permission handling.
6.  `model/Contacts.ts` and `model/Tasks.ts`: WatermelonDB data models.

## Technical Overview

1.  Expo Contacts API: Contact fetching and permission handling.
2.  WatermelonDB: Local-first, offline data storage.
3.  Expo Navigation: Screen navigation management.
4.  TypeScript: Type safety.

## Error Handling

1.  Contact permission handling in `useContactsWithPermission.ts`.
2.  User prompting for enabling contact access on permission denial.

## Best Practices

1.  Functional components and React hooks for state management.
2.  Modular code structure.
3.  Efficient data handling for large contact lists.

## Installation

1.  Install Node.js (14+), npm/yarn and Expo CLI.
2.  Clone repository.
3.  Run `npm install` or `yarn install`.

## Troubleshooting

1.  Verify Node, Expo and dependency versions.
2.  Review console logs.

## Contributing

Contributions welcome. Fork, commit and create a pull request.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Acknowledgments

1.  Expo
2.  WatermelonDB
3.  React Native Community
