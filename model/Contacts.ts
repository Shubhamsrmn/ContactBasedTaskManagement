import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";
export default class Contacts extends Model {
  static table = "contacts";
  @text("name") name;
  @text("number") number;
  @field("email") email;
}
