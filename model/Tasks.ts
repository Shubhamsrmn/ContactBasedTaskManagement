import { Model } from "@nozbe/watermelondb";
import { field, text, immutableRelation } from "@nozbe/watermelondb/decorators";
export default class Tasks extends Model {
  static table = "tasks";
  static associations = {
    tasks: { type: "has_many", foreignKey: "contact_id" },
  };
  @text("name") name;
  @text("description") description;
  @immutableRelation("contacts", "contact_id") contact;
}
