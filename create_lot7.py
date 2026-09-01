import os

base_path = "/media/thibault/SSD_DATA/DEV/workspaces/Glowing Sea Studio/APPS/erebus"
css_path = os.path.join(base_path, "packages/core/src/components")
react_path = os.path.join(base_path, "packages/react/src")
angular_path = os.path.join(base_path, "packages/angular/src")

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)

# CSS files
write_file(os.path.join(css_path, "table.css"), """\
.erb-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: var(--erb-typography-font-family-base, sans-serif);
}

.erb-table th,
.erb-table td {
  padding: var(--erb-spacing-3, 0.75rem);
  border-bottom: 1px solid var(--erb-color-border-subtle, #e5e7eb);
}

.erb-table th {
  font-weight: var(--erb-typography-font-weight-semibold, 600);
  color: var(--erb-color-text-secondary, #4b5563);
  background-color: var(--erb-color-background-subtle, #f9fafb);
}

.erb-table tr:hover {
  background-color: var(--erb-color-background-hover, #f3f4f6);
}
""")

write_file(os.path.join(css_path, "list.css"), """\
.erb-list {
  padding-left: var(--erb-spacing-4, 1rem);
  margin: var(--erb-spacing-0, 0);
  color: var(--erb-color-text-primary, #111827);
  font-family: var(--erb-typography-font-family-base, sans-serif);
}

.erb-list--unordered {
  list-style-type: disc;
}

.erb-list--ordered {
  list-style-type: decimal;
}

.erb-list-item {
  margin-bottom: var(--erb-spacing-1, 0.25rem);
}
""")

write_file(os.path.join(css_path, "description-list.css"), """\
.erb-description-list {
  display: grid;
  grid-template-columns: minmax(120px, auto) 1fr;
  gap: var(--erb-spacing-2, 0.5rem) var(--erb-spacing-4, 1rem);
  font-family: var(--erb-typography-font-family-base, sans-serif);
  margin: var(--erb-spacing-0, 0);
}

.erb-description-list-term {
  font-weight: var(--erb-typography-font-weight-semibold, 600);
  color: var(--erb-color-text-primary, #111827);
}

.erb-description-list-details {
  margin: 0;
  color: var(--erb-color-text-secondary, #4b5563);
}
""")

write_file(os.path.join(css_path, "stat.css"), """\
.erb-stat {
  display: flex;
  flex-direction: column;
  padding: var(--erb-spacing-4, 1rem);
  border: 1px solid var(--erb-color-border-subtle, #e5e7eb);
  border-radius: var(--erb-border-radius-md, 0.375rem);
  background-color: var(--erb-color-background-surface, #ffffff);
  font-family: var(--erb-typography-font-family-base, sans-serif);
}

.erb-stat-label {
  font-size: var(--erb-typography-size-sm, 0.875rem);
  color: var(--erb-color-text-secondary, #4b5563);
  margin-bottom: var(--erb-spacing-1, 0.25rem);
}

.erb-stat-value {
  font-size: var(--erb-typography-size-2xl, 1.5rem);
  font-weight: var(--erb-typography-font-weight-bold, 700);
  color: var(--erb-color-text-primary, #111827);
}

.erb-stat-help-text {
  font-size: var(--erb-typography-size-sm, 0.875rem);
  color: var(--erb-color-text-tertiary, #6b7280);
  margin-top: var(--erb-spacing-1, 0.25rem);
}
""")

# React Files
# Table
write_file(os.path.join(react_path, "Table/index.ts"), "export * from './Table';\n")
write_file(os.path.join(react_path, "Table/Table.tsx"), """\
import React from 'react';
import '@erebus/core/table.css';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}
export const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <table ref={ref} className={`erb-table ${className}`} {...rest} />;
});
Table.displayName = 'Table';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => <thead ref={ref} {...props} />);
TableHead.displayName = 'TableHead';

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => <tbody ref={ref} {...props} />);
TableBody.displayName = 'TableBody';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => <tr ref={ref} {...props} />);
TableRow.displayName = 'TableRow';

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => <td ref={ref} {...props} />);
TableCell.displayName = 'TableCell';

export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}
export const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>((props, ref) => <th ref={ref} {...props} />);
TableHeaderCell.displayName = 'TableHeaderCell';
""")
write_file(os.path.join(react_path, "Table/Table.test.tsx"), """\
import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    const { getByText, container } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Header</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Data')).toBeInTheDocument();
    expect(container.querySelector('.erb-table')).toBeInTheDocument();
  });
});
""")
write_file(os.path.join(react_path, "Table/Table.stories.tsx"), """\
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from './Table';

export default { title: 'Components/Table', component: Table };

export const Default = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Alice</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
""")

# List
write_file(os.path.join(react_path, "List/index.ts"), "export * from './List';\n")
write_file(os.path.join(react_path, "List/List.tsx"), """\
import React from 'react';
import '@erebus/core/list.css';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'ul' | 'ol';
}
export const List = React.forwardRef<HTMLElement, ListProps>((props, ref) => {
  const { as: Component = 'ul', className = '', ...rest } = props;
  const listClass = Component === 'ol' ? 'erb-list--ordered' : 'erb-list--unordered';
  return React.createElement(Component, { ref, className: `erb-list ${listClass} ${className}`.trim(), ...rest });
});
List.displayName = 'List';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <li ref={ref} className={`erb-list-item ${className}`.trim()} {...rest} />;
});
ListItem.displayName = 'ListItem';
""")
write_file(os.path.join(react_path, "List/List.test.tsx"), """\
import React from 'react';
import { render } from '@testing-library/react';
import { List, ListItem } from './List';

describe('List', () => {
  it('renders ul correctly', () => {
    const { getByText, container } = render(
      <List>
        <ListItem>Item 1</ListItem>
      </List>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(container.querySelector('ul.erb-list')).toBeInTheDocument();
  });
  it('renders ol correctly', () => {
    const { container } = render(
      <List as="ol">
        <ListItem>Item 1</ListItem>
      </List>
    );
    expect(container.querySelector('ol.erb-list--ordered')).toBeInTheDocument();
  });
});
""")
write_file(os.path.join(react_path, "List/List.stories.tsx"), """\
import React from 'react';
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
""")

# DescriptionList
write_file(os.path.join(react_path, "DescriptionList/index.ts"), "export * from './DescriptionList';\n")
write_file(os.path.join(react_path, "DescriptionList/DescriptionList.tsx"), """\
import React from 'react';
import '@erebus/core/description-list.css';

export interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement> {}
export const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <dl ref={ref} className={`erb-description-list ${className}`.trim()} {...rest} />;
});
DescriptionList.displayName = 'DescriptionList';

export interface DescriptionTermProps extends React.HTMLAttributes<HTMLElement> {}
export const DescriptionTerm = React.forwardRef<HTMLElement, DescriptionTermProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <dt ref={ref} className={`erb-description-list-term ${className}`.trim()} {...rest} />;
});
DescriptionTerm.displayName = 'DescriptionTerm';

export interface DescriptionDetailsProps extends React.HTMLAttributes<HTMLElement> {}
export const DescriptionDetails = React.forwardRef<HTMLElement, DescriptionDetailsProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <dd ref={ref} className={`erb-description-list-details ${className}`.trim()} {...rest} />;
});
DescriptionDetails.displayName = 'DescriptionDetails';
""")
write_file(os.path.join(react_path, "DescriptionList/DescriptionList.test.tsx"), """\
import React from 'react';
import { render } from '@testing-library/react';
import { DescriptionList, DescriptionTerm, DescriptionDetails } from './DescriptionList';

describe('DescriptionList', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <DescriptionList>
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDetails>Details</DescriptionDetails>
      </DescriptionList>
    );
    expect(getByText('Term')).toBeInTheDocument();
    expect(getByText('Details')).toBeInTheDocument();
  });
});
""")
write_file(os.path.join(react_path, "DescriptionList/DescriptionList.stories.tsx"), """\
import React from 'react';
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
""")

# Stat
write_file(os.path.join(react_path, "Stat/index.ts"), "export * from './Stat';\n")
write_file(os.path.join(react_path, "Stat/Stat.tsx"), """\
import React from 'react';
import '@erebus/core/stat.css';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  helpText?: React.ReactNode;
}
export const Stat = React.forwardRef<HTMLDivElement, StatProps>((props, ref) => {
  const { label, value, helpText, className = '', ...rest } = props;
  return (
    <div ref={ref} className={`erb-stat ${className}`.trim()} {...rest}>
      <div className="erb-stat-label">{label}</div>
      <div className="erb-stat-value">{value}</div>
      {helpText && <div className="erb-stat-help-text">{helpText}</div>}
    </div>
  );
});
Stat.displayName = 'Stat';
""")
write_file(os.path.join(react_path, "Stat/Stat.test.tsx"), """\
import React from 'react';
import { render } from '@testing-library/react';
import { Stat } from './Stat';

describe('Stat', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Stat label="Users" value="1,024" helpText="+5%" />);
    expect(getByText('Users')).toBeInTheDocument();
    expect(getByText('1,024')).toBeInTheDocument();
    expect(getByText('+5%')).toBeInTheDocument();
  });
});
""")
write_file(os.path.join(react_path, "Stat/Stat.stories.tsx"), """\
import React from 'react';
import { Stat } from './Stat';

export default { title: 'Components/Stat', component: Stat };

export const Default = () => (
  <Stat label="Total Revenue" value="$45,231.89" helpText="+20.1% from last month" />
);
""")

# Angular Files
# Table
write_file(os.path.join(angular_path, "table/index.ts"), "export * from './table.component';\n")
write_file(os.path.join(angular_path, "table/table.component.ts"), """\
import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-table',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../../../core/src/components/table.css']
})
export class ErbTableComponent {
  @HostBinding('class.erb-table') get isTable() { return true; }
}

@Component({
  selector: 'erb-table-head',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableHeadComponent {}

@Component({
  selector: 'erb-table-body',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableBodyComponent {}

@Component({
  selector: 'erb-table-row',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableRowComponent {}

@Component({
  selector: 'erb-table-cell',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableCellComponent {}

@Component({
  selector: 'erb-table-header-cell',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableHeaderCellComponent {}
""")
write_file(os.path.join(angular_path, "table/table.component.spec.ts"), """\
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent } from './table.component';

@Component({
  template: `
    <erb-table>
      <erb-table-head><erb-table-row><erb-table-header-cell>Header</erb-table-header-cell></erb-table-row></erb-table-head>
      <erb-table-body><erb-table-row><erb-table-cell>Data</erb-table-cell></erb-table-row></erb-table-body>
    </erb-table>
  `,
  standalone: true,
  imports: [ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent]
})
class TestHostComponent {}

describe('ErbTableComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create and render elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('erb-table')).toBeTruthy();
    expect(compiled.textContent).toContain('Header');
    expect(compiled.textContent).toContain('Data');
  });
});
""")
write_file(os.path.join(angular_path, "table/table.stories.ts"), """\
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent } from './table.component';

const meta: Meta<ErbTableComponent> = {
  title: 'Components/Table',
  component: ErbTableComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ErbTableComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-table>
        <erb-table-head>
          <erb-table-row>
            <erb-table-header-cell>Name</erb-table-header-cell>
            <erb-table-header-cell>Role</erb-table-header-cell>
          </erb-table-row>
        </erb-table-head>
        <erb-table-body>
          <erb-table-row>
            <erb-table-cell>Alice</erb-table-cell>
            <erb-table-cell>Admin</erb-table-cell>
          </erb-table-row>
          <erb-table-row>
            <erb-table-cell>Bob</erb-table-cell>
            <erb-table-cell>User</erb-table-cell>
          </erb-table-row>
        </erb-table-body>
      </erb-table>
    `
  }),
};
""")

# List
write_file(os.path.join(angular_path, "list/index.ts"), "export * from './list.component';\n")
write_file(os.path.join(angular_path, "list/list.component.ts"), """\
import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../../../core/src/components/list.css']
})
export class ErbListComponent {
  @Input() as: 'ul' | 'ol' = 'ul';

  @HostBinding('class.erb-list') get isList() { return true; }
  @HostBinding('class.erb-list--unordered') get isUnordered() { return this.as === 'ul'; }
  @HostBinding('class.erb-list--ordered') get isOrdered() { return this.as === 'ol'; }
}

@Component({
  selector: 'erb-list-item',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbListItemComponent {
  @HostBinding('class.erb-list-item') get isListItem() { return true; }
}
""")
write_file(os.path.join(angular_path, "list/list.component.spec.ts"), """\
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbListComponent, ErbListItemComponent } from './list.component';

@Component({
  template: `
    <erb-list [as]="type">
      <erb-list-item>Item</erb-list-item>
    </erb-list>
  `,
  standalone: true,
  imports: [ErbListComponent, ErbListItemComponent]
})
class TestHostComponent {
  type: 'ul' | 'ol' = 'ul';
}

describe('ErbListComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create unordered list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.erb-list--unordered')).toBeTruthy();
    expect(compiled.textContent).toContain('Item');
  });

  it('should create ordered list', () => {
    fixture.componentInstance.type = 'ol';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.erb-list--ordered')).toBeTruthy();
  });
});
""")
write_file(os.path.join(angular_path, "list/list.stories.ts"), """\
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ErbListComponent, ErbListItemComponent } from './list.component';

const meta: Meta<ErbListComponent> = {
  title: 'Components/List',
  component: ErbListComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbListComponent, ErbListItemComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ErbListComponent>;

export const Unordered: Story = {
  render: () => ({
    template: `
      <erb-list>
        <erb-list-item>Apples</erb-list-item>
        <erb-list-item>Bananas</erb-list-item>
      </erb-list>
    `
  }),
};

export const Ordered: Story = {
  render: () => ({
    template: `
      <erb-list as="ol">
        <erb-list-item>First</erb-list-item>
        <erb-list-item>Second</erb-list-item>
      </erb-list>
    `
  }),
};
""")

# DescriptionList
write_file(os.path.join(angular_path, "description-list/index.ts"), "export * from './description-list.component';\n")
write_file(os.path.join(angular_path, "description-list/description-list.component.ts"), """\
import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-description-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../../../core/src/components/description-list.css']
})
export class ErbDescriptionListComponent {
  @HostBinding('class.erb-description-list') get isDl() { return true; }
}

@Component({
  selector: 'erb-description-term',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbDescriptionTermComponent {
  @HostBinding('class.erb-description-list-term') get isDt() { return true; }
}

@Component({
  selector: 'erb-description-details',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbDescriptionDetailsComponent {
  @HostBinding('class.erb-description-list-details') get isDd() { return true; }
}
""")
write_file(os.path.join(angular_path, "description-list/description-list.component.spec.ts"), """\
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent } from './description-list.component';

@Component({
  template: `
    <erb-description-list>
      <erb-description-term>Term</erb-description-term>
      <erb-description-details>Details</erb-description-details>
    </erb-description-list>
  `,
  standalone: true,
  imports: [ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent]
})
class TestHostComponent {}

describe('ErbDescriptionListComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.erb-description-list')).toBeTruthy();
    expect(compiled.textContent).toContain('Term');
    expect(compiled.textContent).toContain('Details');
  });
});
""")
write_file(os.path.join(angular_path, "description-list/description-list.stories.ts"), """\
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent } from './description-list.component';

const meta: Meta<ErbDescriptionListComponent> = {
  title: 'Components/DescriptionList',
  component: ErbDescriptionListComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ErbDescriptionListComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-description-list>
        <erb-description-term>Name</erb-description-term>
        <erb-description-details>Erebus</erb-description-details>
        <erb-description-term>Version</erb-description-term>
        <erb-description-details>1.0.0</erb-description-details>
      </erb-description-list>
    `
  }),
};
""")

# Stat
write_file(os.path.join(angular_path, "stat/index.ts"), "export * from './stat.component';\n")
write_file(os.path.join(angular_path, "stat/stat.component.ts"), """\
import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-stat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-stat-label">{{ label }}</div>
    <div class="erb-stat-value">{{ value }}</div>
    <div *ngIf="helpText" class="erb-stat-help-text">{{ helpText }}</div>
  `,
  styleUrls: ['../../../../core/src/components/stat.css']
})
export class ErbStatComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() helpText?: string;

  @HostBinding('class.erb-stat') get isStat() { return true; }
}
""")
write_file(os.path.join(angular_path, "stat/stat.component.spec.ts"), """\
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbStatComponent } from './stat.component';

describe('ErbStatComponent', () => {
  let component: ErbStatComponent;
  let fixture: ComponentFixture<ErbStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbStatComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbStatComponent);
    component = fixture.componentInstance;
    component.label = 'Users';
    component.value = '1,024';
    component.helpText = '+5%';
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Users');
    expect(compiled.textContent).toContain('1,024');
    expect(compiled.textContent).toContain('+5%');
  });
});
""")
write_file(os.path.join(angular_path, "stat/stat.stories.ts"), """\
import { Meta, StoryObj } from '@storybook/angular';
import { ErbStatComponent } from './stat.component';

const meta: Meta<ErbStatComponent> = {
  title: 'Components/Stat',
  component: ErbStatComponent,
};
export default meta;

type Story = StoryObj<ErbStatComponent>;

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$45,231.89',
    helpText: '+20.1% from last month',
  }
};
""")
print("Files generated successfully.")
