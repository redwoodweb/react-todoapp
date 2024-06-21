interface ItodoItemContent {
  content: string;
}

interface ItodoItem extends ItodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
