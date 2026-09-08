import { Input, Textarea, Checkbox, Radio, Switch, Slider, Text } from '@glowing-sea-studio/erebus-react';

export default function FormsExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Input placeholder="Text input..." />
      <Textarea placeholder="Textarea..." />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Checkbox id="chk1" label="Checkbox 1" />
        <Checkbox id="chk2" label="Checkbox 2" defaultChecked />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Radio id="rad1" name="radio-demo" label="Radio 1" />
        <Radio id="rad2" name="radio-demo" label="Radio 2" defaultChecked />
      </div>
      <Switch id="sw1" label="Toggle switch" defaultChecked />
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Text>Slider</Text>
        <div style={{ flex: 1 }}><Slider defaultValue={50} max={100} step={1} /></div>
      </div>
    </div>
  );
}
