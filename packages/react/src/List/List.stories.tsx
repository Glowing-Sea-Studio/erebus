import { List, ListItem } from './List';

export default { title: 'Components/List', component: List };

export const Unordered = () => (
  <List>
    <ListItem>Apples</ListItem>
    <ListItem>Bananas</ListItem>
  </List>
);

export const Ordered = () => (
  <List as="ol">
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
  </List>
);
