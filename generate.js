const fs = require('fs');
const path = require('path');

const baseDir = '/media/thibault/SSD_DATA/DEV/workspaces/Glowing Sea Studio/APPS/erebus';

const components = [
  'breadcrumb',
  'pagination',
  'stepper',
  'accordion',
  'skip-link'
];

function camelCase(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

function pascalCase(str) {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

components.forEach(comp => {
  const cssDir = path.join(baseDir, 'packages/core/src/components');
  fs.mkdirSync(cssDir, { recursive: true });
  let cssContent = `.erb-${comp} { display: block; }\n`;
  
  if (comp === 'skip-link') {
    cssContent = `
.erb-skip-link {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  background-color: var(--erb-skip-link-bg, #fff);
  color: var(--erb-skip-link-color, #000);
}
.erb-skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  padding: var(--erb-skip-link-padding, 8px);
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
`;
  }
  if (comp === 'breadcrumb') {
    cssContent = `
.erb-breadcrumb {
  display: flex;
}
.erb-breadcrumb__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.erb-breadcrumb__item {
  display: inline-flex;
  align-items: center;
}
.erb-breadcrumb__separator {
  margin: 0 var(--erb-breadcrumb-gap, 8px);
}
`;
  }
  if (comp === 'accordion') {
    cssContent = `
.erb-accordion {
  border-bottom: 1px solid var(--erb-accordion-border, #ccc);
}
.erb-accordion__header {
  margin: 0;
}
.erb-accordion__button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--erb-accordion-padding, 16px);
  background: var(--erb-accordion-bg, transparent);
  border: none;
  cursor: pointer;
}
.erb-accordion__panel {
  padding: var(--erb-accordion-padding, 16px);
  display: none;
}
.erb-accordion__button[aria-expanded="true"] + .erb-accordion__panel {
  display: block;
}
`;
  }
  if (comp === 'pagination') {
    cssContent = `
.erb-pagination {
  display: flex;
  list-style: none;
  padding: 0;
  gap: var(--erb-pagination-gap, 4px);
}
.erb-pagination__item button {
  padding: var(--erb-pagination-padding, 8px 12px);
  background: var(--erb-pagination-bg, #eee);
  border: 1px solid var(--erb-pagination-border, #ccc);
  cursor: pointer;
}
.erb-pagination__item button[aria-current="page"] {
  background: var(--erb-pagination-active-bg, #007bff);
  color: var(--erb-pagination-active-color, #fff);
}
`;
  }
  if (comp === 'stepper') {
    cssContent = `
.erb-stepper {
  display: flex;
  gap: var(--erb-stepper-gap, 16px);
}
.erb-stepper__step {
  display: flex;
  align-items: center;
  gap: var(--erb-stepper-step-gap, 8px);
}
.erb-stepper__step[aria-current="step"] {
  font-weight: bold;
}
`;
  }

  fs.writeFileSync(path.join(cssDir, `${comp}.css`), cssContent);

  const tokenDir = path.join(baseDir, 'packages/tokens/src/component');
  fs.mkdirSync(tokenDir, { recursive: true });
  fs.writeFileSync(path.join(tokenDir, `${comp}.json`), JSON.stringify({
    [comp]: {
      bg: { value: "{colors.background}" },
      color: { value: "{colors.text}" }
    }
  }, null, 2));

  const reactDir = path.join(baseDir, `packages/react/src/${comp}`);
  fs.mkdirSync(reactDir, { recursive: true });
  
  const CompName = pascalCase(comp);
  
  let reactCode = `import React from 'react';\nimport '../../../../core/src/components/${comp}.css';\n\nexport interface ${CompName}Props extends React.HTMLAttributes<HTMLDivElement> { children?: React.ReactNode; }\n\nexport const ${CompName} = React.forwardRef<HTMLDivElement, ${CompName}Props>(({ children, className = '', ...props }, ref) => (\n  <div ref={ref} className={\`erb-${comp} \${className}\`} {...props}>{children}</div>\n));\n${CompName}.displayName = '${CompName}';\n`;

  if (comp === 'skip-link') {
    reactCode = `import React from 'react';\nimport '../../../../core/src/components/${comp}.css';\n\nexport interface ${CompName}Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> { href: string; children: React.ReactNode; }\n\nexport const ${CompName} = React.forwardRef<HTMLAnchorElement, ${CompName}Props>(({ href, children, className = '', ...props }, ref) => (\n  <a ref={ref} href={href} className={\`erb-${comp} \${className}\`} {...props}>{children}</a>\n));\n${CompName}.displayName = '${CompName}';\n`;
  } else if (comp === 'accordion') {
    reactCode = `import React, { useState } from 'react';\nimport '../../../../core/src/components/${comp}.css';\n\nexport interface ${CompName}Props { title: React.ReactNode; children: React.ReactNode; defaultExpanded?: boolean; }\n\nexport const ${CompName} = ({ title, children, defaultExpanded = false }: ${CompName}Props) => {\n  const [expanded, setExpanded] = useState(defaultExpanded);\n  return (\n    <div className="erb-accordion">\n      <h3 className="erb-accordion__header">\n        <button aria-expanded={expanded} className="erb-accordion__button" onClick={() => setExpanded(!expanded)}>{title}</button>\n      </h3>\n      <div className="erb-accordion__panel" hidden={!expanded}>{children}</div>\n    </div>\n  );\n};\n`;
  } else if (comp === 'breadcrumb') {
    reactCode = `import React from 'react';\nimport '../../../../core/src/components/${comp}.css';\n\nexport interface ${CompName}Props { children: React.ReactNode; ariaLabel?: string; }\n\nexport const ${CompName} = ({ children, ariaLabel = 'Breadcrumb' }: ${CompName}Props) => (\n  <nav aria-label={ariaLabel} className="erb-breadcrumb">\n    <ol className="erb-breadcrumb__list">\n      {React.Children.map(children, (child, i) => (\n        <li className="erb-breadcrumb__item">\n          {child}\n          {i < React.Children.count(children) - 1 && <span className="erb-breadcrumb__separator" aria-hidden="true">/</span>}\n        </li>\n      ))}\n    </ol>\n  </nav>\n);\n`;
  } else if (comp === 'pagination') {
    reactCode = `import React from 'react';\nimport '../../../../core/src/components/${comp}.css';\n\nexport interface ${CompName}Props { currentPage: number; totalPages: number; onPageChange: (page: number) => void; }\n\nexport const ${CompName} = ({ currentPage, totalPages, onPageChange }: ${CompName}Props) => (\n  <nav aria-label="Pagination">\n    <ul className="erb-pagination">\n      {Array.from({ length: totalPages }).map((_, i) => (\n        <li key={i} className="erb-pagination__item">\n          <button aria-current={currentPage === i + 1 ? 'page' : undefined} onClick={() => onPageChange(i + 1)}>{i + 1}</button>\n        </li>\n      ))}\n    </ul>\n  </nav>\n);\n`;
  } else if (comp === 'stepper') {
    reactCode = `import React from 'react';\nimport '../../../../core/src/components/${comp}.css';\n\nexport interface ${CompName}Props { currentStep: number; steps: string[]; }\n\nexport const ${CompName} = ({ currentStep, steps }: ${CompName}Props) => (\n  <ol className="erb-stepper">\n    {steps.map((step, i) => (\n      <li key={i} className="erb-stepper__step" aria-current={currentStep === i ? 'step' : undefined}>\n        <span>{i + 1}</span> <span>{step}</span>\n      </li>\n    ))}\n  </ol>\n);\n`;
  }

  fs.writeFileSync(path.join(reactDir, `${CompName}.tsx`), reactCode);
  fs.writeFileSync(path.join(reactDir, 'index.ts'), `export * from './${CompName}';\n`);
  fs.writeFileSync(path.join(reactDir, `${CompName}.test.tsx`), `import React from 'react';\nimport { render } from '@testing-library/react';\nimport { ${CompName} } from './${CompName}';\n\ndescribe('${CompName}', () => {\n  it('renders without crashing', () => {\n    ${comp === 'skip-link' ? `render(<${CompName} href="#main">Skip</${CompName}>);` : comp === 'accordion' ? `render(<${CompName} title="Title">Content</${CompName}>);` : comp === 'breadcrumb' ? `render(<${CompName}><span>Home</span></${CompName}>);` : comp === 'pagination' ? `render(<${CompName} currentPage={1} totalPages={3} onPageChange={()=>{}} />);` : comp === 'stepper' ? `render(<${CompName} currentStep={0} steps={['A']} />);` : `render(<${CompName}>Test</${CompName}>);`}\n  });\n});\n`);
  fs.writeFileSync(path.join(reactDir, `${CompName}.stories.tsx`), `import React from 'react';\nimport { ${CompName} } from './${CompName}';\n\nexport default { title: 'Components/${CompName}', component: ${CompName} };\n\nexport const Default = () => ${comp === 'skip-link' ? `<${CompName} href="#main">Skip</${CompName}>` : comp === 'accordion' ? `<${CompName} title="Title">Content</${CompName}>` : comp === 'breadcrumb' ? `<${CompName}><span>Home</span></${CompName}>` : comp === 'pagination' ? `<${CompName} currentPage={1} totalPages={3} onPageChange={()=>{}} />` : comp === 'stepper' ? `<${CompName} currentStep={0} steps={['A']} />` : `<${CompName}>Test</${CompName}>`};\n`);

  const angularDir = path.join(baseDir, `packages/angular/src/${comp}`);
  fs.mkdirSync(angularDir, { recursive: true });

  let tsCode = `import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'erb-${comp}',\n  template: \`<div class="erb-${comp}"><ng-content></ng-content></div>\`,\n  styleUrls: ['../../../../core/src/components/${comp}.css'],\n  standalone: true\n})\nexport class ${CompName}Component { }\n`;

  if (comp === 'skip-link') {
    tsCode = `import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'erb-${comp}',\n  template: \`<a [href]="href" class="erb-skip-link"><ng-content></ng-content></a>\`,\n  styleUrls: ['../../../../core/src/components/${comp}.css'],\n  standalone: true\n})\nexport class ${CompName}Component {\n  @Input() href!: string;\n}\n`;
  } else if (comp === 'accordion') {
    tsCode = `import { Component, Input } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'erb-${comp}',\n  template: \`\n    <div class="erb-accordion">\n      <h3 class="erb-accordion__header">\n        <button [attr.aria-expanded]="expanded" class="erb-accordion__button" (click)="toggle()">{{ title }}</button>\n      </h3>\n      <div class="erb-accordion__panel" [hidden]="!expanded">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  \`,\n  styleUrls: ['../../../../core/src/components/${comp}.css'],\n  standalone: true,\n  imports: [CommonModule]\n})\nexport class ${CompName}Component {\n  @Input() title!: string;\n  @Input() expanded = false;\n  toggle() { this.expanded = !this.expanded; }\n}\n`;
  } else if (comp === 'breadcrumb') {
    tsCode = `import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'erb-${comp}',\n  template: \`\n    <nav [attr.aria-label]="ariaLabel" class="erb-breadcrumb">\n      <ol class="erb-breadcrumb__list">\n        <ng-content></ng-content>\n      </ol>\n    </nav>\n  \`,\n  styleUrls: ['../../../../core/src/components/${comp}.css'],\n  standalone: true\n})\nexport class ${CompName}Component {\n  @Input() ariaLabel = 'Breadcrumb';\n}\n`;
  } else if (comp === 'pagination') {
    tsCode = `import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'erb-${comp}',\n  template: \`\n    <nav aria-label="Pagination">\n      <ul class="erb-pagination">\n        <li *ngFor="let page of pages" class="erb-pagination__item">\n          <button [attr.aria-current]="currentPage === page ? 'page' : null" (click)="onPageChange.emit(page)">{{ page }}</button>\n        </li>\n      </ul>\n    </nav>\n  \`,\n  styleUrls: ['../../../../core/src/components/${comp}.css'],\n  standalone: true,\n  imports: [CommonModule]\n})\nexport class ${CompName}Component {\n  @Input() currentPage = 1;\n  @Input() totalPages = 1;\n  @Output() onPageChange = new EventEmitter<number>();\n  get pages() { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }\n}\n`;
  } else if (comp === 'stepper') {
    tsCode = `import { Component, Input } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'erb-${comp}',\n  template: \`\n    <ol class="erb-stepper">\n      <li *ngFor="let step of steps; let i = index" class="erb-stepper__step" [attr.aria-current]="currentStep === i ? 'step' : null">\n        <span>{{ i + 1 }}</span> <span>{{ step }}</span>\n      </li>\n    </ol>\n  \`,\n  styleUrls: ['../../../../core/src/components/${comp}.css'],\n  standalone: true,\n  imports: [CommonModule]\n})\nexport class ${CompName}Component {\n  @Input() currentStep = 0;\n  @Input() steps: string[] = [];\n}\n`;
  }

  fs.writeFileSync(path.join(angularDir, `${comp}.component.ts`), tsCode);
  fs.writeFileSync(path.join(angularDir, 'index.ts'), `export * from './${comp}.component';\n`);
  
  let specCode = `import { ComponentFixture, TestBed } from '@angular/core/testing';\nimport { ${CompName}Component } from './${comp}.component';\n\ndescribe('${CompName}Component', () => {\n  let component: ${CompName}Component;\n  let fixture: ComponentFixture<${CompName}Component>;\n\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({ imports: [${CompName}Component] }).compileComponents();\n    fixture = TestBed.createComponent(${CompName}Component);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => { expect(component).toBeTruthy(); });\n});\n`;
  fs.writeFileSync(path.join(angularDir, `${comp}.component.spec.ts`), specCode);
  
  let storyCode = `import { Meta, StoryObj } from '@storybook/angular';\nimport { ${CompName}Component } from './${comp}.component';\n\nconst meta: Meta<${CompName}Component> = { title: 'Components/${CompName}', component: ${CompName}Component };\nexport default meta;\ntype Story = StoryObj<${CompName}Component>;\n\nexport const Default: Story = { args: {\n  ${comp === 'skip-link' ? `href: '#main'` : comp === 'accordion' ? `title: 'Title'` : comp === 'pagination' ? `currentPage: 1, totalPages: 3` : comp === 'stepper' ? `currentStep: 0, steps: ['A']` : ``}\n} };\n`;
  fs.writeFileSync(path.join(angularDir, `${comp}.stories.ts`), storyCode);
});
console.log('Done');
