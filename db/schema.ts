import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "contacts",
      columns: [
        { name: "name", type: "string" },
        { name: "number", type: "string" },
        { name: "email", type: "string", isOptional: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "tasks",
      columns: [
        { name: "name", type: "string" },
        { name: "description", type: "string" },
        { name: "contact_id", type: "string", isIndexed: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
  ],
});
