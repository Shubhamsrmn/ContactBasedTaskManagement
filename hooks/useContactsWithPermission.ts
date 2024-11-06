import { useState, useEffect } from "react";
import * as Contacts from "expo-contacts";
import database, { contactCollection } from "@/db";
const useContactsWithPermission = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const requestContactsPermission = async () => {
    if (permissionGranted === true) return null;
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      setPermissionGranted(true);
      syncContacts();
    } else {
      alert("You need to grant permission to access contacts to use this app.");
      requestContactsPermission();
    }
  };

  const syncContacts = async () => {
    const localContacts = await database.read(async () => {
      return await contactCollection.query().fetch();
    });
    const mobileContacts = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });

    // Add new contacts
    mobileContacts.data.forEach((mobileContact) => {
      const existingContact = localContacts.find(
        (localContact) =>
          localContact.number === mobileContact.phoneNumbers[0].number
      );
      if (!existingContact) {
        database.write(async () => {
          await contactCollection.create((contact) => {
            contact.name = mobileContact.name;
            contact.number = mobileContact.phoneNumbers[0].number;
          });
        });
      }
    });

    // Update existing contacts
    mobileContacts.data.forEach((mobileContact) => {
      const existingContact = localContacts.find(
        (localContact) =>
          localContact.number === mobileContact.phoneNumbers[0].number
      );
      if (existingContact && existingContact.name !== mobileContact.name) {
        database.write(async () => {
          existingContact.update((contact) => {
            contact.name = mobileContact.name;
          });
        });
      }
    });

    // Remove deleted contacts
    localContacts.forEach((localContact) => {
      const mobileContact = mobileContacts.data.find(
        (mobileContact) =>
          mobileContact.phoneNumbers[0].number === localContact.number
      );
      if (!mobileContact) {
        database.write(async () => {
          localContact.destroyPermanently();
        });
      }
    });
  };

  useEffect(() => {
    requestContactsPermission();
  }, []);
};

export default useContactsWithPermission;
