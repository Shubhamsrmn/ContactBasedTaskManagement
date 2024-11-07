import { Model } from "@nozbe/watermelondb";
import { text, relation, readonly, date } from "@nozbe/watermelondb/decorators";

export default class Task extends Model {
  static table = "tasks";
  static associations = {
    contact: { type: "belongs_to", key: "contact_id" },
  };

  @text("name") name;
  @text("description") description;
  @readonly @date("created_at") createdAt;
  @readonly @date("updated_at") updatedAt;
  @relation("contact", "contact_id", "contacts") contact;
}
