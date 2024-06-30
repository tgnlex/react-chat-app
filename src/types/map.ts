import {MessageContent} from './msgTypes';
type Item = {
  id: number, 
  content: MessageContent,
}
type MapProps = {
  items: Item[] 
}

export type {MapProps, Item};