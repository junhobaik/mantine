import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="MultiSelect with native scrollbars"
      placeholder="Dropdown rendered as div element"
      dropdownComponent="div"
    />
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="MultiSelect with native scrollbars"
        placeholder="Dropdown rendered as div element"
        dropdownComponent="div"
      />
    </div>
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
