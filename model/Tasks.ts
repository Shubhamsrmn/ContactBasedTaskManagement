import { Model } from "@nozbe/watermelondb";
import { text, relation } from "@nozbe/watermelondb/decorators";

export default class Task extends Model {
  static table = "tasks";
  static associations = {
    contact: { type: "belongs_to", key: "contact_id" },
  };

  @text("name") name;
  @text("description") description;
  @relation("contact", "contact_id", "contacts") contact;
}
