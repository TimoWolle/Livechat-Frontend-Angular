import {MessageType} from "../enumeration/MessageType";

export interface ChatMessage {

  user: string;

  content: string;

  type: MessageType;

  date: Date;
}
