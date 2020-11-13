export enum CardType {
  DEFAULT = 'text',
  IMAGE = 'image',
}

export interface CardAction {
  label: string;
  action: () => void;
}

export interface CardProps {
  type?: CardType;
  title?: string;
  content?: string;
  image?: string;
  actions?: CardAction[];
}
