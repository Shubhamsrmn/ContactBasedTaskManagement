import { useState, useEffect } from "react";
import { contactCollection, taskCollection } from "@/db";
import { Contact } from "@/tsModels/contacts";
import { Task } from "@/tsModels/tasks";

const useListData = (type: "contacts" | "tasks") => {
  const [listData, setListData] = useState<
    typeof type extends "contacts" ? Contact[] : Task[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const collection =
          type === "contacts" ? contactCollection : taskCollection;
        const fetchedListData = await collection.query().fetch();
        setListData(
          fetchedListData.map(
            (listItem) =>
              listItem._raw as unknown as typeof type extends "contacts"
                ? Contact
                : Task
          )
        );
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchListData();
  }, []);

  return { listData, loading, error };
};

export default useListData;
