import * as i0 from '@angular/core';
import { Component, input, computed, Directive, output, ViewChild } from '@angular/core';

class ContainerComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ContainerComponent, isStandalone: true, selector: "erb-container", host: { properties: { "class.erb-container": "true" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-container',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-container]': 'true'
                    }
                }]
        }] });

function resolveResponsiveProps(cssVar, val, transform) {
    if (val === undefined || val === null)
        return {};
    if (typeof val !== 'object') {
        return { [cssVar]: transform ? transform(val) : String(val) };
    }
    const obj = val;
    const result = {};
    if (obj.base !== undefined)
        result[cssVar] = transform ? transform(obj.base) : String(obj.base);
    if (obj.sm !== undefined)
        result[`${cssVar}-sm`] = transform ? transform(obj.sm) : String(obj.sm);
    if (obj.md !== undefined)
        result[`${cssVar}-md`] = transform ? transform(obj.md) : String(obj.md);
    if (obj.lg !== undefined)
        result[`${cssVar}-lg`] = transform ? transform(obj.lg) : String(obj.lg);
    if (obj.xl !== undefined)
        result[`${cssVar}-xl`] = transform ? transform(obj.xl) : String(obj.xl);
    if (obj['2xl'] !== undefined)
        result[`${cssVar}-2xl`] = transform ? transform(obj['2xl']) : String(obj['2xl']);
    return result;
}

class GridComponent {
    cols = input(1);
    gap = input();
    align = input();
    justify = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-grid-cols', this.cols(), (v) => `repeat(${v}, minmax(0, 1fr))`),
            ...resolveResponsiveProps('--erb-grid-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-grid-align', this.align()),
            ...resolveResponsiveProps('--erb-grid-justify', this.justify())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: GridComponent, isStandalone: true, selector: "erb-grid", inputs: { cols: { classPropertyName: "cols", publicName: "cols", isSignal: true, isRequired: false, transformFunction: null }, gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-grid": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-grid',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-grid]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });

class GridItemComponent {
    colSpan = input();
    rowSpan = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-grid-item-col-span', this.colSpan()),
            ...resolveResponsiveProps('--erb-grid-item-row-span', this.rowSpan())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: GridItemComponent, isStandalone: true, selector: "erb-grid-item", inputs: { colSpan: { classPropertyName: "colSpan", publicName: "colSpan", isSignal: true, isRequired: false, transformFunction: null }, rowSpan: { classPropertyName: "rowSpan", publicName: "rowSpan", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-grid-item": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-grid-item',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-grid-item]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });

const justifyMap$2 = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly'
};
const alignMap$2 = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    baseline: 'baseline'
};
class FlexComponent {
    direction = input();
    gap = input();
    align = input();
    justify = input();
    wrap = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-flex-direction', this.direction()),
            ...resolveResponsiveProps('--erb-flex-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-flex-align', this.align(), (v) => alignMap$2[v] || v),
            ...resolveResponsiveProps('--erb-flex-justify', this.justify(), (v) => justifyMap$2[v] || v),
            ...resolveResponsiveProps('--erb-flex-wrap', this.wrap())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FlexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FlexComponent, isStandalone: true, selector: "erb-flex", inputs: { direction: { classPropertyName: "direction", publicName: "direction", isSignal: true, isRequired: false, transformFunction: null }, gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null }, wrap: { classPropertyName: "wrap", publicName: "wrap", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-flex": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FlexComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-flex',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-flex]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });

const justifyMap$1 = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly'
};
const alignMap$1 = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    baseline: 'baseline'
};
class StackComponent {
    gap = input();
    align = input();
    justify = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-stack-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-stack-align', this.align(), (v) => alignMap$1[v] || v),
            ...resolveResponsiveProps('--erb-stack-justify', this.justify(), (v) => justifyMap$1[v] || v)
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: StackComponent, isStandalone: true, selector: "erb-stack", inputs: { gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-stack": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StackComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-stack',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-stack]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });

const justifyMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly'
};
const alignMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    baseline: 'baseline'
};
class InlineComponent {
    gap = input();
    align = input();
    justify = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-inline-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-inline-align', this.align(), (v) => alignMap[v] || v),
            ...resolveResponsiveProps('--erb-inline-justify', this.justify(), (v) => justifyMap[v] || v)
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InlineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: InlineComponent, isStandalone: true, selector: "erb-inline", inputs: { gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-inline": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InlineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-inline',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-inline]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });

class SpacerComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SpacerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SpacerComponent, isStandalone: true, selector: "erb-spacer", host: { properties: { "class.erb-spacer": "true" } }, ngImport: i0, template: ``, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SpacerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-spacer',
                    standalone: true,
                    template: ``,
                    host: {
                        '[class.erb-spacer]': 'true'
                    }
                }]
        }] });

class CenterComponent {
    inline = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CenterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: CenterComponent, isStandalone: true, selector: "erb-center", inputs: { inline: { classPropertyName: "inline", publicName: "inline", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-center": "true", "attr.data-inline": "inline() ? \"true\" : undefined" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CenterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-center',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-center]': 'true',
                        '[attr.data-inline]': 'inline() ? "true" : undefined'
                    }
                }]
        }] });

class AspectRatioComponent {
    ratio = input(4 / 3);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AspectRatioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: AspectRatioComponent, isStandalone: true, selector: "erb-aspect-ratio", inputs: { ratio: { classPropertyName: "ratio", publicName: "ratio", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-aspect-ratio": "true", "style.--erb-aspect-ratio": "ratio()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AspectRatioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-aspect-ratio',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-aspect-ratio]': 'true',
                        '[style.--erb-aspect-ratio]': 'ratio()'
                    }
                }]
        }] });

class SplitComponent {
    gap = input();
    fraction = input('1/2');
    align = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-split-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-split-align', this.align())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SplitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: SplitComponent, isStandalone: true, selector: "erb-split", inputs: { gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, fraction: { classPropertyName: "fraction", publicName: "fraction", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-split": "true", "attr.data-fraction": "fraction() !== \"1/2\" ? fraction() : undefined", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SplitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-split',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-split]': 'true',
                        '[attr.data-fraction]': 'fraction() !== "1/2" ? fraction() : undefined',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });

class SectionComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SectionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SectionComponent, isStandalone: true, selector: "erb-section", host: { properties: { "class.erb-section": "true" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SectionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-section',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-section]': 'true'
                    }
                }]
        }] });

class ScrollAreaComponent {
    maxHeight = input();
    formattedMaxHeight = computed(() => {
        const mh = this.maxHeight();
        if (mh === undefined)
            return undefined;
        return typeof mh === 'number' ? `${mh}px` : mh;
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ScrollAreaComponent, isStandalone: true, selector: "erb-scroll-area", inputs: { maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-scroll-area": "true", "style.--erb-scroll-area-max-height": "formattedMaxHeight()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollAreaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-scroll-area',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-scroll-area]': 'true',
                        '[style.--erb-scroll-area-max-height]': 'formattedMaxHeight()'
                    }
                }]
        }] });

class ErbButtonDirective {
    size = input('md');
    variant = input('solid');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbButtonDirective, isStandalone: true, selector: "button[erbButton], a[erbButton]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.data-variant": "variant()" }, classAttribute: "erb-button" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[erbButton], a[erbButton]',
                    standalone: true,
                    host: {
                        class: 'erb-button',
                        '[attr.data-size]': 'size()',
                        '[attr.data-variant]': 'variant()',
                    }
                }]
        }] });

class ErbCardComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbCardComponent, isStandalone: true, selector: "erb-card", host: { classAttribute: "erb-card" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-card',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-card',
                    }
                }]
        }] });
class ErbCardHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbCardHeaderComponent, isStandalone: true, selector: "erb-card-header", host: { classAttribute: "erb-card-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-card-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-card-header',
                    }
                }]
        }] });
class ErbCardTitleComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbCardTitleComponent, isStandalone: true, selector: "erb-card-title", host: { classAttribute: "erb-card-title" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-card-title',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-card-title',
                    }
                }]
        }] });
class ErbCardDescriptionComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardDescriptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbCardDescriptionComponent, isStandalone: true, selector: "erb-card-description", host: { classAttribute: "erb-card-description" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardDescriptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-card-description',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-card-description',
                    }
                }]
        }] });
class ErbCardBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbCardBodyComponent, isStandalone: true, selector: "erb-card-body", host: { classAttribute: "erb-card-body" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-card-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-card-body',
                    }
                }]
        }] });
class ErbCardFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbCardFooterComponent, isStandalone: true, selector: "erb-card-footer", host: { classAttribute: "erb-card-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCardFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-card-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-card-footer',
                    }
                }]
        }] });

class ErbInputDirective {
    size = input('md');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbInputDirective, isStandalone: true, selector: "input[erbInput], textarea[erbInput]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()" }, classAttribute: "erb-input" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[erbInput], textarea[erbInput]',
                    standalone: true,
                    host: {
                        class: 'erb-input',
                        '[attr.data-size]': 'size()',
                    }
                }]
        }] });

class ErbInputWrapperComponent {
    label = input();
    error = input();
    inputId = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbInputWrapperComponent, isStandalone: true, selector: "erb-input-wrapper", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: true, isRequired: false, transformFunction: null } }, host: { classAttribute: "erb-input-wrapper" }, ngImport: i0, template: `
    @if (label()) {
      <label class="erb-label" [attr.for]="inputId()">{{ label() }}</label>
    }
    <ng-content></ng-content>
    @if (error()) {
      <div class="erb-error-message">{{ error() }}</div>
    }
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-input-wrapper',
                    standalone: true,
                    template: `
    @if (label()) {
      <label class="erb-label" [attr.for]="inputId()">{{ label() }}</label>
    }
    <ng-content></ng-content>
    @if (error()) {
      <div class="erb-error-message">{{ error() }}</div>
    }
  `,
                    host: {
                        class: 'erb-input-wrapper',
                    }
                }]
        }] });

class ErbTextareaDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTextareaDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: ErbTextareaDirective, isStandalone: true, selector: "textarea[erbTextarea]", host: { classAttribute: "erb-textarea" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTextareaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'textarea[erbTextarea]',
                    standalone: true,
                    host: {
                        class: 'erb-textarea',
                    }
                }]
        }] });

class ErbCheckboxComponent {
    size = input('md');
    disabled = input(false);
    checked = input(false);
    checkedChange = output();
    onChange(event) {
        const input = event.target;
        this.checkedChange.emit(input.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbCheckboxComponent, isStandalone: true, selector: "erb-checkbox", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label class="erb-checkbox-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        class="erb-checkbox" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-checkbox-label">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-checkbox',
                    standalone: true,
                    template: `
    <label class="erb-checkbox-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        class="erb-checkbox" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-checkbox-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbRadioComponent {
    size = input('md');
    disabled = input(false);
    checked = input(false);
    name = input();
    checkedChange = output();
    onChange(event) {
        const input = event.target;
        this.checkedChange.emit(input.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbRadioComponent, isStandalone: true, selector: "erb-radio", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label class="erb-radio-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="radio" 
        class="erb-radio" 
        [name]="name()"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-radio-label">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-radio',
                    standalone: true,
                    template: `
    <label class="erb-radio-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="radio" 
        class="erb-radio" 
        [name]="name()"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-radio-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbSwitchComponent {
    size = input('md');
    disabled = input(false);
    checked = input(false);
    checkedChange = output();
    onChange(event) {
        const input = event.target;
        this.checkedChange.emit(input.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbSwitchComponent, isStandalone: true, selector: "erb-switch", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label class="erb-switch-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        role="switch"
        class="erb-switch" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-switch-label">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-switch',
                    standalone: true,
                    template: `
    <label class="erb-switch-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        role="switch"
        class="erb-switch" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-switch-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbAlertComponent {
    intent = input('info');
    title = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbAlertComponent, isStandalone: true, selector: "erb-alert", inputs: { intent: { classPropertyName: "intent", publicName: "intent", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-intent": "intent()" }, classAttribute: "erb-alert" }, ngImport: i0, template: `
    <div class="erb-alert-content">
      @if (title()) {
        <div class="erb-alert-title">{{ title() }}</div>
      }
      <div class="erb-alert-description">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert',
                    standalone: true,
                    template: `
    <div class="erb-alert-content">
      @if (title()) {
        <div class="erb-alert-title">{{ title() }}</div>
      }
      <div class="erb-alert-description">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    host: {
                        class: 'erb-alert',
                        '[attr.data-intent]': 'intent()',
                    }
                }]
        }] });

class ErbModalOverlayComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalOverlayComponent, isStandalone: true, selector: "erb-modal-overlay", host: { classAttribute: "erb-modal-overlay" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalOverlayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-overlay',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-overlay' }
                }]
        }] });
class ErbModalContentComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalContentComponent, isStandalone: true, selector: "erb-modal-content", host: { classAttribute: "erb-modal-content" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-content',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-content' }
                }]
        }] });
class ErbModalHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalHeaderComponent, isStandalone: true, selector: "erb-modal-header", host: { classAttribute: "erb-modal-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-header' }
                }]
        }] });
class ErbModalTitleComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalTitleComponent, isStandalone: true, selector: "erb-modal-title", host: { classAttribute: "erb-modal-title" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-title',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-title' }
                }]
        }] });
class ErbModalDescriptionComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalDescriptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalDescriptionComponent, isStandalone: true, selector: "erb-modal-description", host: { classAttribute: "erb-modal-description" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalDescriptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-description',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-description' }
                }]
        }] });
class ErbModalBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalBodyComponent, isStandalone: true, selector: "erb-modal-body", host: { classAttribute: "erb-modal-body" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-body' }
                }]
        }] });
class ErbModalFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbModalFooterComponent, isStandalone: true, selector: "erb-modal-footer", host: { classAttribute: "erb-modal-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbModalFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-modal-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-modal-footer' }
                }]
        }] });

class ErbPanelOverlayComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelOverlayComponent, isStandalone: true, selector: "erb-panel-overlay", host: { classAttribute: "erb-panel-overlay" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelOverlayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-overlay',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-overlay' }
                }]
        }] });
class ErbPanelComponent {
    position = input('right');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbPanelComponent, isStandalone: true, selector: "erb-panel", inputs: { position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-position": "position()" }, classAttribute: "erb-panel" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-panel',
                        '[attr.data-position]': 'position()'
                    }
                }]
        }] });
class ErbPanelHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelHeaderComponent, isStandalone: true, selector: "erb-panel-header", host: { classAttribute: "erb-panel-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-header' }
                }]
        }] });
class ErbPanelTitleComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelTitleComponent, isStandalone: true, selector: "erb-panel-title", host: { classAttribute: "erb-panel-title" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-title',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-title' }
                }]
        }] });
class ErbPanelBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelBodyComponent, isStandalone: true, selector: "erb-panel-body", host: { classAttribute: "erb-panel-body" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-body' }
                }]
        }] });
class ErbPanelFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelFooterComponent, isStandalone: true, selector: "erb-panel-footer", host: { classAttribute: "erb-panel-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-footer' }
                }]
        }] });

class ErbMenuComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbMenuComponent, isStandalone: true, selector: "erb-menu", host: { classAttribute: "erb-menu" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-menu',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-menu' }
                }]
        }] });
class ErbMenuItemDirective {
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbMenuItemDirective, isStandalone: true, selector: "[erbMenuItem]", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.disabled": "disabled() ? true : null" }, classAttribute: "erb-menu-item" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbMenuItem]',
                    standalone: true,
                    host: {
                        class: 'erb-menu-item',
                        '[attr.disabled]': 'disabled() ? true : null'
                    }
                }]
        }] });
class ErbMenuSeparatorComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuSeparatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbMenuSeparatorComponent, isStandalone: true, selector: "erb-menu-separator", host: { classAttribute: "erb-menu-separator" }, ngImport: i0, template: ``, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuSeparatorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-menu-separator',
                    standalone: true,
                    template: ``,
                    host: { class: 'erb-menu-separator' }
                }]
        }] });

class ErbTabsComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTabsComponent, isStandalone: true, selector: "erb-tabs", host: { classAttribute: "erb-tabs" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tabs',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-tabs' }
                }]
        }] });
class ErbTabsListComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTabsListComponent, isStandalone: true, selector: "erb-tabs-list", host: { classAttribute: "erb-tabs-list" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tabs-list',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-tabs-list' }
                }]
        }] });
class ErbTabDirective {
    active = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbTabDirective, isStandalone: true, selector: "[erbTab]", inputs: { active: { classPropertyName: "active", publicName: "active", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-state": "active() ? \"active\" : \"inactive\"" }, classAttribute: "erb-tab" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbTab]',
                    standalone: true,
                    host: {
                        class: 'erb-tab',
                        '[attr.data-state]': 'active() ? "active" : "inactive"'
                    }
                }]
        }] });
class ErbTabsPanelComponent {
    active = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbTabsPanelComponent, isStandalone: true, selector: "erb-tabs-panel", inputs: { active: { classPropertyName: "active", publicName: "active", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-state": "active() ? \"active\" : \"inactive\"" }, classAttribute: "erb-tabs-panel" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tabs-panel',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-tabs-panel',
                        '[attr.data-state]': 'active() ? "active" : "inactive"'
                    }
                }]
        }] });

class ErbHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbHeaderComponent, isStandalone: true, selector: "erb-header", host: { classAttribute: "erb-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-header' }
                }]
        }] });

class ErbFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbFooterComponent, isStandalone: true, selector: "erb-footer", host: { classAttribute: "erb-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-footer' }
                }]
        }] });

class ErbCheckboxGroupComponent {
    legend = input();
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbCheckboxGroupComponent, isStandalone: true, selector: "erb-checkbox-group", inputs: { legend: { classPropertyName: "legend", publicName: "legend", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <fieldset class="erb-checkbox-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-checkbox-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-checkbox-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-checkbox-group',
                    standalone: true,
                    template: `
    <fieldset class="erb-checkbox-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-checkbox-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-checkbox-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbRadioGroupComponent {
    legend = input();
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbRadioGroupComponent, isStandalone: true, selector: "erb-radio-group", inputs: { legend: { classPropertyName: "legend", publicName: "legend", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <fieldset class="erb-radio-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-radio-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-radio-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-radio-group',
                    standalone: true,
                    template: `
    <fieldset class="erb-radio-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-radio-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-radio-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbSelectDirective {
    size = input('md');
    invalid = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSelectDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbSelectDirective, isStandalone: true, selector: "select[erbSelect]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.aria-invalid": "invalid() ? \"true\" : null" }, classAttribute: "erb-select" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'select[erbSelect]',
                    standalone: true,
                    host: {
                        class: 'erb-select',
                        '[attr.data-size]': 'size()',
                        '[attr.aria-invalid]': 'invalid() ? "true" : null'
                    }
                }]
        }] });

class ErbNumberInputComponent {
    size = input('md');
    disabled = input(false);
    invalid = input(false);
    value = input(0);
    min = input();
    max = input();
    step = input(1);
    valueChange = output();
    onInput(event) {
        const val = event.target.valueAsNumber;
        this.valueChange.emit(val);
    }
    increment() {
        let current = this.value();
        if (isNaN(current))
            current = 0;
        const s = this.step() ?? 1;
        let newVal = current + s;
        const mx = this.max();
        if (mx !== undefined && newVal > mx)
            newVal = mx;
        this.valueChange.emit(newVal);
    }
    decrement() {
        let current = this.value();
        if (isNaN(current))
            current = 0;
        const s = this.step() ?? 1;
        let newVal = current - s;
        const mn = this.min();
        if (mn !== undefined && newVal < mn)
            newVal = mn;
        this.valueChange.emit(newVal);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbNumberInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbNumberInputComponent, isStandalone: true, selector: "erb-number-input", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, host: { styleAttribute: "display: block; width: 100%;" }, ngImport: i0, template: `
    <div class="erb-number-input-wrapper">
      <input 
        type="number" 
        class="erb-number-input"
        [attr.data-size]="size()"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        [disabled]="disabled()"
        [value]="value()"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        (input)="onInput($event)"
      />
      <div class="erb-number-input-stepper">
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="increment()"
          aria-label="Increment"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="decrement()"
          aria-label="Decrement"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbNumberInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-number-input',
                    standalone: true,
                    template: `
    <div class="erb-number-input-wrapper">
      <input 
        type="number" 
        class="erb-number-input"
        [attr.data-size]="size()"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        [disabled]="disabled()"
        [value]="value()"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        (input)="onInput($event)"
      />
      <div class="erb-number-input-stepper">
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="increment()"
          aria-label="Increment"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="decrement()"
          aria-label="Decrement"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </div>
  `,
                    host: {
                        style: 'display: block; width: 100%;'
                    }
                }]
        }] });

class ErbSearchInputComponent {
    size = input('md');
    disabled = input(false);
    value = input('');
    placeholder = input('Search...');
    valueChange = output();
    inputRef;
    onInput(event) {
        const val = event.target.value;
        this.valueChange.emit(val);
    }
    clear() {
        this.valueChange.emit('');
        if (this.inputRef) {
            this.inputRef.nativeElement.focus();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbSearchInputComponent, isStandalone: true, selector: "erb-search-input", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, host: { styleAttribute: "display: block; width: 100%;" }, viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["inputRef"], descendants: true }], ngImport: i0, template: `
    <div class="erb-search-input-wrapper">
      <div class="erb-search-input-icon">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        #inputRef
        type="search" 
        class="erb-search-input"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [value]="value()"
        [placeholder]="placeholder()"
        (input)="onInput($event)"
      />
      @if (value()) {
        <button 
          type="button" 
          class="erb-search-input-clear-btn" 
          aria-label="Clear search"
          (click)="clear()"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSearchInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-search-input',
                    standalone: true,
                    template: `
    <div class="erb-search-input-wrapper">
      <div class="erb-search-input-icon">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        #inputRef
        type="search" 
        class="erb-search-input"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [value]="value()"
        [placeholder]="placeholder()"
        (input)="onInput($event)"
      />
      @if (value()) {
        <button 
          type="button" 
          class="erb-search-input-clear-btn" 
          aria-label="Clear search"
          (click)="clear()"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </div>
  `,
                    host: {
                        style: 'display: block; width: 100%;'
                    }
                }]
        }], propDecorators: { inputRef: [{
                type: ViewChild,
                args: ['inputRef']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { AspectRatioComponent, CenterComponent, ContainerComponent, ErbAlertComponent, ErbButtonDirective, ErbCardBodyComponent, ErbCardComponent, ErbCardDescriptionComponent, ErbCardFooterComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCheckboxComponent, ErbCheckboxGroupComponent, ErbFooterComponent, ErbHeaderComponent, ErbInputDirective, ErbInputWrapperComponent, ErbMenuComponent, ErbMenuItemDirective, ErbMenuSeparatorComponent, ErbModalBodyComponent, ErbModalContentComponent, ErbModalDescriptionComponent, ErbModalFooterComponent, ErbModalHeaderComponent, ErbModalOverlayComponent, ErbModalTitleComponent, ErbNumberInputComponent, ErbPanelBodyComponent, ErbPanelComponent, ErbPanelFooterComponent, ErbPanelHeaderComponent, ErbPanelOverlayComponent, ErbPanelTitleComponent, ErbRadioComponent, ErbRadioGroupComponent, ErbSearchInputComponent, ErbSelectDirective, ErbSwitchComponent, ErbTabDirective, ErbTabsComponent, ErbTabsListComponent, ErbTabsPanelComponent, ErbTextareaDirective, FlexComponent, GridComponent, GridItemComponent, InlineComponent, ScrollAreaComponent, SectionComponent, SpacerComponent, SplitComponent, StackComponent };
//# sourceMappingURL=glowing-sea-studio-erebus-angular.mjs.map
