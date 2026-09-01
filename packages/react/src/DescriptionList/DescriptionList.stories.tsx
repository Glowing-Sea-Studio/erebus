import { DescriptionList, DescriptionTerm, DescriptionDetails } from './DescriptionList';

export default { title: 'Components/DescriptionList', component: DescriptionList };

export const Default = () => (
  <DescriptionList>
    <DescriptionTerm>Name</DescriptionTerm>
    <DescriptionDetails>Erebus</DescriptionDetails>
    <DescriptionTerm>Version</DescriptionTerm>
    <DescriptionDetails>1.0.0</DescriptionDetails>
  </DescriptionList>
);
