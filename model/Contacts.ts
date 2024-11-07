import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  children,
  readonly,
  date,
} from "@nozbe/watermelondb/decorators";

export default class Contact extends Model {
  static table = "contacts";
  static associations = {
    tasks: { type: "has_many", foreignKey: "contact_id" },
  };

  @text("name") name;
  @text("number") number;
  @field("email") email;
  @readonly @date("created_at") createdAt;
  @readonly @date("updated_at") updatedAt;
  @children("tasks") tasks;
}
