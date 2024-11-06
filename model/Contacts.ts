import { Model } from "@nozbe/watermelondb";
import { field, text, children } from "@nozbe/watermelondb/decorators";

export default class Contact extends Model {
  static table = "contacts";
  static associations = {
    tasks: { type: "has_many", foreignKey: "contact_id" },
  };

  @text("name") name;
  @text("number") number;
  @field("email") email;

  @children("tasks") tasks;
}
