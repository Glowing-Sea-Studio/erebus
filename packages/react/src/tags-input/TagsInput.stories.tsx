import { useState } from 'react';
import { TagsInput } from './TagsInput';

export default {
  title: 'Components/TagsInput',
  component: TagsInput,
};

export const Default = () => {
  const [tags, setTags] = useState(['React', 'Angular']);
  return <TagsInput tags={tags} onChange={setTags} placeholder="Add a tag..." />;
};

export const Disabled = () => {
  return <TagsInput tags={['React']} disabled />;
};
