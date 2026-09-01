import * as i0 from '@angular/core';
import { Component, input, computed, Directive, output, ViewChild, Injectable, effect, Input, EventEmitter, Output, HostBinding, forwardRef, HostListener, ViewChildren } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

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

class LayerManagerService {
    stack = [];
    handleKeyDownBound;
    constructor() {
        this.handleKeyDownBound = this.handleKeyDown.bind(this);
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', this.handleKeyDownBound);
        }
    }
    ngOnDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('keydown', this.handleKeyDownBound);
        }
    }
    register(id, element, close) {
        this.stack.push({ id, element, close });
        this.updateInert();
        this.updateZIndex(element);
    }
    unregister(id) {
        this.stack = this.stack.filter(entry => entry.id !== id);
        this.updateInert();
    }
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.stack.length > 0) {
            const topLayer = this.stack[this.stack.length - 1];
            if (topLayer) {
                topLayer.close();
                e.stopPropagation();
            }
        }
    }
    updateInert() {
        if (typeof document === 'undefined')
            return;
        const root = document.querySelector('[data-erebus-root]') || document.body;
        const hasLayers = this.stack.length > 0;
        Array.from(root.children).forEach((child) => {
            const isLayer = this.stack.some(layer => layer.element === child || layer.element.contains(child));
            if (!isLayer && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE' && child.tagName !== 'NOSCRIPT') {
                if (hasLayers) {
                    child.setAttribute('inert', '');
                }
                else {
                    child.removeAttribute('inert');
                }
            }
        });
    }
    updateZIndex(element) {
        const baseZ = 1300; // Value for --erb-z-overlay based on shared.json
        element.style.zIndex = `calc(var(--erb-z-overlay, ${baseZ}) + ${this.stack.length})`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayerManagerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayerManagerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayerManagerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class PortalDirective {
    templateRef;
    viewContainerRef;
    targetContainer = input(undefined, { alias: 'erbPortal' });
    viewRef;
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        if (typeof window !== 'undefined') {
            const container = this.targetContainer() || document.body;
            this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
            const rootNodes = this.viewRef.rootNodes;
            for (const node of rootNodes) {
                container.appendChild(node);
            }
        }
    }
    ngOnDestroy() {
        if (this.viewRef) {
            const rootNodes = this.viewRef.rootNodes;
            for (const node of rootNodes) {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
            this.viewRef.destroy();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PortalDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: PortalDirective, isStandalone: true, selector: "[erbPortal]", inputs: { targetContainer: { classPropertyName: "targetContainer", publicName: "erbPortal", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PortalDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbPortal]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }] });

const FOCUSABLE_ELEMENTS = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])'
].join(',');
class FocusTrapDirective {
    el;
    active = input(true, { alias: 'erbFocusTrap' });
    previousFocus = null;
    handleKeyDownBound;
    constructor(el) {
        this.el = el;
        this.handleKeyDownBound = this.handleKeyDown.bind(this);
        effect(() => {
            if (this.active()) {
                this.activate();
            }
            else {
                this.deactivate();
            }
        });
    }
    ngOnInit() {
        if (this.active()) {
            this.activate();
        }
    }
    ngOnDestroy() {
        this.deactivate();
    }
    activate() {
        if (typeof window !== 'undefined') {
            if (!this.previousFocus) {
                this.previousFocus = document.activeElement;
            }
            // Ensure the container is focusable
            this.el.nativeElement.tabIndex = -1;
            // Focus first element or container
            setTimeout(() => {
                const focusableElements = Array.from(this.el.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS));
                if (focusableElements.length > 0 && focusableElements[0]) {
                    focusableElements[0].focus();
                }
                else {
                    this.el.nativeElement.focus();
                }
            });
            document.addEventListener('keydown', this.handleKeyDownBound);
        }
    }
    deactivate() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keydown', this.handleKeyDownBound);
            if (this.previousFocus) {
                this.previousFocus.focus();
                this.previousFocus = null;
            }
        }
    }
    handleKeyDown(e) {
        if (e.key !== 'Tab')
            return;
        const container = this.el.nativeElement;
        const focusableElements = Array.from(container.querySelectorAll(FOCUSABLE_ELEMENTS));
        if (focusableElements.length === 0) {
            e.preventDefault();
            return;
        }
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            if (firstElement && document.activeElement === firstElement) {
                e.preventDefault();
                if (lastElement)
                    lastElement.focus();
            }
        }
        else {
            if (lastElement && document.activeElement === lastElement) {
                e.preventDefault();
                if (firstElement)
                    firstElement.focus();
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FocusTrapDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: FocusTrapDirective, isStandalone: true, selector: "[erbFocusTrap]", inputs: { active: { classPropertyName: "active", publicName: "erbFocusTrap", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FocusTrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbFocusTrap]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

let scrollLockCount = 0;
let originalStyle = null;
let originalPadding = null;
const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
};
class ScrollLockDirective {
    lock = input(true, { alias: 'erbScrollLock' });
    locked = false;
    constructor() {
        effect(() => {
            if (this.lock()) {
                this.enableLock();
            }
            else {
                this.disableLock();
            }
        });
    }
    ngOnDestroy() {
        this.disableLock();
    }
    enableLock() {
        if (this.locked || typeof window === 'undefined')
            return;
        if (scrollLockCount === 0) {
            originalStyle = document.body.style.overflow;
            originalPadding = document.body.style.paddingRight;
            const scrollbarWidth = getScrollbarWidth();
            document.body.style.overflow = 'hidden';
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `calc(${window.getComputedStyle(document.body).paddingRight} + ${scrollbarWidth}px)`;
            }
        }
        scrollLockCount++;
        this.locked = true;
    }
    disableLock() {
        if (!this.locked || typeof window === 'undefined')
            return;
        scrollLockCount--;
        if (scrollLockCount === 0) {
            if (originalStyle !== null) {
                document.body.style.overflow = originalStyle;
            }
            else {
                document.body.style.removeProperty('overflow');
            }
            if (originalPadding !== null) {
                document.body.style.paddingRight = originalPadding;
            }
            else {
                document.body.style.removeProperty('padding-right');
            }
        }
        this.locked = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollLockDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ScrollLockDirective, isStandalone: true, selector: "[erbScrollLock]", inputs: { lock: { classPropertyName: "lock", publicName: "erbScrollLock", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollLockDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbScrollLock]',
                    standalone: true
                }]
        }], ctorParameters: () => [] });

class TransitionDirective {
    el;
    renderer;
    isOpen = input(false, { alias: 'erbTransition' });
    duration = input(200);
    timeoutId;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        effect(() => {
            if (typeof window !== 'undefined') {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                }
                if (this.isOpen()) {
                    this.renderer.setStyle(this.el.nativeElement, 'display', '');
                    // Small delay to allow the element to be mounted before triggering the transition
                    this.timeoutId = setTimeout(() => {
                        this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'open');
                    }, 10);
                }
                else {
                    this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'closed');
                    this.timeoutId = setTimeout(() => {
                        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
                    }, this.duration() ?? 200);
                }
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TransitionDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: TransitionDirective, isStandalone: true, selector: "[erbTransition]", inputs: { isOpen: { classPropertyName: "isOpen", publicName: "erbTransition", isSignal: true, isRequired: false, transformFunction: null }, duration: { classPropertyName: "duration", publicName: "duration", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TransitionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbTransition]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });

class BadgeComponent {
    variant = 'solid';
    color = 'primary';
    size = 'md';
    shape = 'rounded';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BadgeComponent, isStandalone: true, selector: "erb-badge", inputs: { variant: "variant", color: "color", size: "size", shape: "shape" }, ngImport: i0, template: `
    <span
      class="erb-badge"
      [class.erb-badge--variant-solid]="variant === 'solid'"
      [class.erb-badge--variant-outline]="variant === 'outline'"
      [class.erb-badge--variant-soft]="variant === 'soft'"
      [class]="'erb-badge--color-' + color"
      [class]="'erb-badge--size-' + size"
      [class]="'erb-badge--shape-' + shape"
    >
      <ng-content></ng-content>
    </span>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-badge', standalone: true, template: `
    <span
      class="erb-badge"
      [class.erb-badge--variant-solid]="variant === 'solid'"
      [class.erb-badge--variant-outline]="variant === 'outline'"
      [class.erb-badge--variant-soft]="variant === 'soft'"
      [class]="'erb-badge--color-' + color"
      [class]="'erb-badge--size-' + size"
      [class]="'erb-badge--shape-' + shape"
    >
      <ng-content></ng-content>
    </span>
  ` }]
        }], propDecorators: { variant: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], shape: [{
                type: Input
            }] } });

class TagComponent {
    variant = 'solid';
    color = 'primary';
    size = 'md';
    closable = false;
    closed = new EventEmitter();
    onCloseClick(event) {
        this.closed.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TagComponent, isStandalone: true, selector: "erb-tag", inputs: { variant: "variant", color: "color", size: "size", closable: "closable" }, outputs: { closed: "closed" }, ngImport: i0, template: `
    <span
      class="erb-tag"
      [class.erb-tag--variant-solid]="variant === 'solid'"
      [class.erb-tag--variant-outline]="variant === 'outline'"
      [class.erb-tag--variant-soft]="variant === 'soft'"
      [class]="'erb-tag--color-' + color"
      [class]="'erb-tag--size-' + size"
    >
      <ng-content></ng-content>
      <button *ngIf="closable" type="button" class="erb-tag__close" aria-label="Close" (click)="onCloseClick($event)">
        &times;
      </button>
    </span>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-tag', standalone: true, imports: [CommonModule], template: `
    <span
      class="erb-tag"
      [class.erb-tag--variant-solid]="variant === 'solid'"
      [class.erb-tag--variant-outline]="variant === 'outline'"
      [class.erb-tag--variant-soft]="variant === 'soft'"
      [class]="'erb-tag--color-' + color"
      [class]="'erb-tag--size-' + size"
    >
      <ng-content></ng-content>
      <button *ngIf="closable" type="button" class="erb-tag__close" aria-label="Close" (click)="onCloseClick($event)">
        &times;
      </button>
    </span>
  ` }]
        }], propDecorators: { variant: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], closable: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });

class SpinnerComponent {
    size;
    get spinnerSize() {
        if (this.size === undefined)
            return null;
        return typeof this.size === 'number' ? `${this.size}px` : this.size;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SpinnerComponent, isStandalone: true, selector: "erb-spinner", inputs: { size: "size" }, host: { properties: { "style.--erb-spinner-size": "this.spinnerSize" }, classAttribute: "erb-spinner" }, ngImport: i0, template: '', isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-spinner',
                    standalone: true,
                    imports: [CommonModule],
                    template: '',
                    host: {
                        'class': 'erb-spinner'
                    }
                }]
        }], propDecorators: { size: [{
                type: Input
            }], spinnerSize: [{
                type: HostBinding,
                args: ['style.--erb-spinner-size']
            }] } });

class SkeletonComponent {
    variant = 'rect';
    width;
    height;
    get styleWidth() {
        if (this.width === undefined)
            return null;
        return typeof this.width === 'number' ? `${this.width}px` : this.width;
    }
    get styleHeight() {
        if (this.height === undefined)
            return null;
        return typeof this.height === 'number' ? `${this.height}px` : this.height;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SkeletonComponent, isStandalone: true, selector: "erb-skeleton", inputs: { variant: "variant", width: "width", height: "height" }, host: { properties: { "class.erb-skeleton": "true", "class.erb-skeleton--circle": "variant === \"circle\"", "style.width": "this.styleWidth", "style.height": "this.styleHeight" } }, ngImport: i0, template: '', isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SkeletonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-skeleton',
                    standalone: true,
                    imports: [CommonModule],
                    template: '',
                    host: {
                        '[class.erb-skeleton]': 'true',
                        '[class.erb-skeleton--circle]': 'variant === "circle"'
                    }
                }]
        }], propDecorators: { variant: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], styleWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], styleHeight: [{
                type: HostBinding,
                args: ['style.height']
            }] } });

class ErbLabelComponent {
    disabled = input(false);
    required = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbLabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbLabelComponent, isStandalone: true, selector: "erb-label", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null } }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label
      class="erb-label"
      [class.erb-label--disabled]="disabled()"
      [class.erb-label--required]="required()"
    >
      <ng-content></ng-content>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbLabelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-label',
                    standalone: true,
                    template: `
    <label
      class="erb-label"
      [class.erb-label--disabled]="disabled()"
      [class.erb-label--required]="required()"
    >
      <ng-content></ng-content>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbFieldComponent {
    label = input();
    hint = input();
    error = input();
    horizontal = input(false);
    required = input(false);
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbFieldComponent, isStandalone: true, selector: "erb-field", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, horizontal: { classPropertyName: "horizontal", publicName: "horizontal", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <div
      class="erb-field"
      [class.erb-field--horizontal]="horizontal()"
    >
      <erb-label *ngIf="label()" [required]="required()" [disabled]="disabled()">
        {{ label() }}
      </erb-label>
      <div class="erb-field__content">
        <ng-content></ng-content>
        <div *ngIf="error()" class="erb-field__error">{{ error() }}</div>
        <div *ngIf="!error() && hint()" class="erb-field__hint">{{ hint() }}</div>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ErbLabelComponent, selector: "erb-label", inputs: ["disabled", "required"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-field',
                    standalone: true,
                    imports: [CommonModule, ErbLabelComponent],
                    template: `
    <div
      class="erb-field"
      [class.erb-field--horizontal]="horizontal()"
    >
      <erb-label *ngIf="label()" [required]="required()" [disabled]="disabled()">
        {{ label() }}
      </erb-label>
      <div class="erb-field__content">
        <ng-content></ng-content>
        <div *ngIf="error()" class="erb-field__error">{{ error() }}</div>
        <div *ngIf="!error() && hint()" class="erb-field__hint">{{ hint() }}</div>
      </div>
    </div>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });

class ErbIconButtonDirective {
    size = input('md');
    variant = input('solid');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbIconButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbIconButtonDirective, isStandalone: true, selector: "button[erbIconButton], a[erbIconButton]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.data-variant": "variant()" }, classAttribute: "erb-icon-button" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbIconButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[erbIconButton], a[erbIconButton]',
                    standalone: true,
                    host: {
                        class: 'erb-icon-button',
                        '[attr.data-size]': 'size()',
                        '[attr.data-variant]': 'variant()',
                    }
                }]
        }] });

class ButtonGroupComponent {
    orientation = input('horizontal');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ButtonGroupComponent, isStandalone: true, selector: "erb-button-group", inputs: { orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "group" }, properties: { "attr.data-orientation": "orientation()" }, classAttribute: "erb-button-group" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-button-group',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-button-group',
                        '[attr.data-orientation]': 'orientation()',
                        'role': 'group'
                    }
                }]
        }] });

class AvatarComponent {
    src = input();
    name = input('');
    size = input('md');
    get initials() {
        const n = this.name();
        return n ? n.charAt(0).toUpperCase() : '?';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: AvatarComponent, isStandalone: true, selector: "erb-avatar", inputs: { src: { classPropertyName: "src", publicName: "src", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.role": "\"img\"", "attr.aria-label": "name()" }, classAttribute: "erb-avatar" }, ngImport: i0, template: `
    @if (src()) {
      <img [src]="src()" [alt]="name()" class="erb-avatar__image" />
    } @else {
      <span class="erb-avatar__initials">{{ initials }}</span>
    }
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-avatar',
                    standalone: true,
                    template: `
    @if (src()) {
      <img [src]="src()" [alt]="name()" class="erb-avatar__image" />
    } @else {
      <span class="erb-avatar__initials">{{ initials }}</span>
    }
  `,
                    host: {
                        class: 'erb-avatar',
                        '[attr.data-size]': 'size()',
                        '[attr.role]': '"img"',
                        '[attr.aria-label]': 'name()'
                    }
                }]
        }] });

class AvatarGroupComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AvatarGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AvatarGroupComponent, isStandalone: true, selector: "erb-avatar-group", ngImport: i0, template: '<div class="erb-avatar-group"><ng-content></ng-content></div>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AvatarGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-avatar-group',
                    standalone: true,
                    template: '<div class="erb-avatar-group"><ng-content></ng-content></div>',
                }]
        }] });

class DividerComponent {
    orientation = input('horizontal');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: DividerComponent, isStandalone: true, selector: "erb-divider", inputs: { orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "display": "contents" } }, ngImport: i0, template: `<hr class="erb-divider" [attr.data-orientation]="orientation()" role="separator" [attr.aria-orientation]="orientation()" />`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-divider',
                    standalone: true,
                    template: `<hr class="erb-divider" [attr.data-orientation]="orientation()" role="separator" [attr.aria-orientation]="orientation()" />`,
                    host: {
                        display: 'contents'
                    }
                }]
        }] });

class KbdComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: KbdComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: KbdComponent, isStandalone: true, selector: "erb-kbd", host: { classAttribute: "erb-kbd" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: KbdComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-kbd',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-kbd'
                    }
                }]
        }] });

class CodeComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CodeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CodeComponent, isStandalone: true, selector: "erb-code", host: { classAttribute: "erb-code" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CodeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-code',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-code'
                    }
                }]
        }] });

class CalloutComponent {
    intent = input('neutral');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CalloutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: CalloutComponent, isStandalone: true, selector: "erb-callout", inputs: { intent: { classPropertyName: "intent", publicName: "intent", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-intent": "intent()" }, classAttribute: "erb-callout" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CalloutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-callout',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-callout',
                        '[attr.data-intent]': 'intent()'
                    }
                }]
        }] });

class HeadingComponent {
    level = input(2);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: HeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: HeadingComponent, isStandalone: true, selector: "erb-heading", inputs: { level: { classPropertyName: "level", publicName: "level", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "display": "contents" } }, ngImport: i0, template: `
    @switch (level()) {
      @case (1) { <h1 class="erb-heading erb-heading--1"><ng-content></ng-content></h1> }
      @case (2) { <h2 class="erb-heading erb-heading--2"><ng-content></ng-content></h2> }
      @case (3) { <h3 class="erb-heading erb-heading--3"><ng-content></ng-content></h3> }
      @case (4) { <h4 class="erb-heading erb-heading--4"><ng-content></ng-content></h4> }
      @case (5) { <h5 class="erb-heading erb-heading--5"><ng-content></ng-content></h5> }
      @case (6) { <h6 class="erb-heading erb-heading--6"><ng-content></ng-content></h6> }
    }
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: HeadingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-heading',
                    standalone: true,
                    template: `
    @switch (level()) {
      @case (1) { <h1 class="erb-heading erb-heading--1"><ng-content></ng-content></h1> }
      @case (2) { <h2 class="erb-heading erb-heading--2"><ng-content></ng-content></h2> }
      @case (3) { <h3 class="erb-heading erb-heading--3"><ng-content></ng-content></h3> }
      @case (4) { <h4 class="erb-heading erb-heading--4"><ng-content></ng-content></h4> }
      @case (5) { <h5 class="erb-heading erb-heading--5"><ng-content></ng-content></h5> }
      @case (6) { <h6 class="erb-heading erb-heading--6"><ng-content></ng-content></h6> }
    }
  `,
                    host: {
                        display: 'contents'
                    }
                }]
        }] });

class TextComponent {
    size = input('md');
    muted = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TextComponent, isStandalone: true, selector: "p[erbText], span[erbText]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, muted: { classPropertyName: "muted", publicName: "muted", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.data-muted": "muted()" }, classAttribute: "erb-text" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'p[erbText], span[erbText]',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-text',
                        '[attr.data-size]': 'size()',
                        '[attr.data-muted]': 'muted()'
                    }
                }]
        }] });

class ProseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ProseComponent, isStandalone: true, selector: "erb-prose", host: { classAttribute: "erb-prose" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-prose',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-prose'
                    }
                }]
        }] });

class ErbAlertDialogOverlayComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogOverlayComponent, isStandalone: true, selector: "erb-alert-dialog-overlay", host: { classAttribute: "erb-alert-dialog-overlay" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogOverlayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-overlay',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-alert-dialog-overlay'
                    }
                }]
        }] });
class ErbAlertDialogContentComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogContentComponent, isStandalone: true, selector: "erb-alert-dialog-content", host: { attributes: { "role": "alertdialog" }, classAttribute: "erb-alert-dialog-content" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-content',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-alert-dialog-content',
                        role: 'alertdialog'
                    }
                }]
        }] });
class ErbAlertDialogHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogHeaderComponent, isStandalone: true, selector: "erb-alert-dialog-header", host: { classAttribute: "erb-alert-dialog-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-alert-dialog-header' }
                }]
        }] });
class ErbAlertDialogTitleComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogTitleComponent, isStandalone: true, selector: "erb-alert-dialog-title", host: { classAttribute: "erb-alert-dialog-title" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-title',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-alert-dialog-title' }
                }]
        }] });
class ErbAlertDialogDescriptionComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogDescriptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogDescriptionComponent, isStandalone: true, selector: "erb-alert-dialog-description", host: { classAttribute: "erb-alert-dialog-description" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogDescriptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-description',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-alert-dialog-description' }
                }]
        }] });
class ErbAlertDialogBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogBodyComponent, isStandalone: true, selector: "erb-alert-dialog-body", host: { classAttribute: "erb-alert-dialog-body" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-alert-dialog-body' }
                }]
        }] });
class ErbAlertDialogFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbAlertDialogFooterComponent, isStandalone: true, selector: "erb-alert-dialog-footer", host: { classAttribute: "erb-alert-dialog-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertDialogFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert-dialog-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-alert-dialog-footer' }
                }]
        }] });

class ErbDrawerOverlayComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerOverlayComponent, isStandalone: true, selector: "erb-drawer-overlay", host: { classAttribute: "erb-drawer-overlay" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerOverlayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-overlay',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-drawer-overlay' }
                }]
        }] });
class ErbDrawerContentComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerContentComponent, isStandalone: true, selector: "erb-drawer-content", host: { attributes: { "role": "dialog" }, classAttribute: "erb-drawer-content" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-content',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-drawer-content',
                        role: 'dialog'
                    }
                }]
        }] });
class ErbDrawerHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerHeaderComponent, isStandalone: true, selector: "erb-drawer-header", host: { classAttribute: "erb-drawer-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-drawer-header' }
                }]
        }] });
class ErbDrawerTitleComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerTitleComponent, isStandalone: true, selector: "erb-drawer-title", host: { classAttribute: "erb-drawer-title" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-title',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-drawer-title' }
                }]
        }] });
class ErbDrawerDescriptionComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerDescriptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerDescriptionComponent, isStandalone: true, selector: "erb-drawer-description", host: { classAttribute: "erb-drawer-description" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerDescriptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-description',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-drawer-description' }
                }]
        }] });
class ErbDrawerBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerBodyComponent, isStandalone: true, selector: "erb-drawer-body", host: { classAttribute: "erb-drawer-body" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-drawer-body' }
                }]
        }] });
class ErbDrawerFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDrawerFooterComponent, isStandalone: true, selector: "erb-drawer-footer", host: { classAttribute: "erb-drawer-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDrawerFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-drawer-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-drawer-footer' }
                }]
        }] });

class ErbPopoverComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPopoverComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPopoverComponent, isStandalone: true, selector: "erb-popover", host: { classAttribute: "erb-popover" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPopoverComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-popover',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-popover' }
                }]
        }] });

class ErbTooltipComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTooltipComponent, isStandalone: true, selector: "erb-tooltip", host: { attributes: { "role": "tooltip" }, classAttribute: "erb-tooltip" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tooltip',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-tooltip',
                        role: 'tooltip'
                    }
                }]
        }] });

class SidebarComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SidebarComponent, isStandalone: true, selector: "erb-sidebar", ngImport: i0, template: `<div class="erb-sidebar"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-sidebar{background-color:var(--erb-sidebar-bg, var(--erb-colors-background));color:var(--erb-sidebar-color, var(--erb-colors-text))}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-sidebar', template: `<div class="erb-sidebar"><ng-content></ng-content></div>`, standalone: true, styles: [".erb-sidebar{background-color:var(--erb-sidebar-bg, var(--erb-colors-background));color:var(--erb-sidebar-color, var(--erb-colors-text))}\n"] }]
        }] });

class AppShellComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AppShellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AppShellComponent, isStandalone: true, selector: "erb-app-shell", ngImport: i0, template: `<div class="erb-app-shell"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-app-shell{background-color:var(--erb-app-shell-bg, var(--erb-colors-background));color:var(--erb-app-shell-color, var(--erb-colors-text))}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AppShellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-app-shell', template: `<div class="erb-app-shell"><ng-content></ng-content></div>`, standalone: true, styles: [".erb-app-shell{background-color:var(--erb-app-shell-bg, var(--erb-colors-background));color:var(--erb-app-shell-color, var(--erb-colors-text))}\n"] }]
        }] });

class MobileNavComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MobileNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: MobileNavComponent, isStandalone: true, selector: "erb-mobile-nav", ngImport: i0, template: `<div class="erb-mobile-nav"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-mobile-nav{background-color:var(--erb-mobile-nav-bg, var(--erb-colors-background));color:var(--erb-mobile-nav-color, var(--erb-colors-text))}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MobileNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-mobile-nav', template: `<div class="erb-mobile-nav"><ng-content></ng-content></div>`, standalone: true, styles: [".erb-mobile-nav{background-color:var(--erb-mobile-nav-bg, var(--erb-colors-background));color:var(--erb-mobile-nav-color, var(--erb-colors-text))}\n"] }]
        }] });

class BottomNavComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BottomNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BottomNavComponent, isStandalone: true, selector: "erb-bottom-nav", ngImport: i0, template: `<div class="erb-bottom-nav"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-bottom-nav{background-color:var(--erb-bottom-nav-bg, var(--erb-colors-background));color:var(--erb-bottom-nav-color, var(--erb-colors-text))}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BottomNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-bottom-nav', template: `<div class="erb-bottom-nav"><ng-content></ng-content></div>`, standalone: true, styles: [".erb-bottom-nav{background-color:var(--erb-bottom-nav-bg, var(--erb-colors-background));color:var(--erb-bottom-nav-color, var(--erb-colors-text))}\n"] }]
        }] });

class BreadcrumbComponent {
    ariaLabel = 'Breadcrumb';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BreadcrumbComponent, isStandalone: true, selector: "erb-breadcrumb", inputs: { ariaLabel: "ariaLabel" }, ngImport: i0, template: `
    <nav [attr.aria-label]="ariaLabel" class="erb-breadcrumb">
      <ol class="erb-breadcrumb__list">
        <ng-content></ng-content>
      </ol>
    </nav>
  `, isInline: true, styles: [".erb-breadcrumb{display:flex}.erb-breadcrumb__list{display:flex;list-style:none;padding:0;margin:0}.erb-breadcrumb__item{display:inline-flex;align-items:center}.erb-breadcrumb__separator{margin:0 var(--erb-breadcrumb-gap, 8px)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-breadcrumb', template: `
    <nav [attr.aria-label]="ariaLabel" class="erb-breadcrumb">
      <ol class="erb-breadcrumb__list">
        <ng-content></ng-content>
      </ol>
    </nav>
  `, standalone: true, styles: [".erb-breadcrumb{display:flex}.erb-breadcrumb__list{display:flex;list-style:none;padding:0;margin:0}.erb-breadcrumb__item{display:inline-flex;align-items:center}.erb-breadcrumb__separator{margin:0 var(--erb-breadcrumb-gap, 8px)}\n"] }]
        }], propDecorators: { ariaLabel: [{
                type: Input
            }] } });

class PaginationComponent {
    currentPage = 1;
    totalPages = 1;
    onPageChange = new EventEmitter();
    get pages() { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: PaginationComponent, isStandalone: true, selector: "erb-pagination", inputs: { currentPage: "currentPage", totalPages: "totalPages" }, outputs: { onPageChange: "onPageChange" }, ngImport: i0, template: `
    <nav aria-label="Pagination">
      <ul class="erb-pagination">
        <li *ngFor="let page of pages" class="erb-pagination__item">
          <button [attr.aria-current]="currentPage === page ? 'page' : null" (click)="onPageChange.emit(page)">{{ page }}</button>
        </li>
      </ul>
    </nav>
  `, isInline: true, styles: [".erb-pagination{display:flex;list-style:none;padding:0;gap:var(--erb-pagination-gap, 4px)}.erb-pagination__item button{padding:var(--erb-pagination-padding, 8px 12px);background:var(--erb-pagination-bg, #eee);border:1px solid var(--erb-pagination-border, #ccc);cursor:pointer}.erb-pagination__item button[aria-current=page]{background:var(--erb-pagination-active-bg, #007bff);color:var(--erb-pagination-active-color, #fff)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-pagination', template: `
    <nav aria-label="Pagination">
      <ul class="erb-pagination">
        <li *ngFor="let page of pages" class="erb-pagination__item">
          <button [attr.aria-current]="currentPage === page ? 'page' : null" (click)="onPageChange.emit(page)">{{ page }}</button>
        </li>
      </ul>
    </nav>
  `, standalone: true, imports: [CommonModule], styles: [".erb-pagination{display:flex;list-style:none;padding:0;gap:var(--erb-pagination-gap, 4px)}.erb-pagination__item button{padding:var(--erb-pagination-padding, 8px 12px);background:var(--erb-pagination-bg, #eee);border:1px solid var(--erb-pagination-border, #ccc);cursor:pointer}.erb-pagination__item button[aria-current=page]{background:var(--erb-pagination-active-bg, #007bff);color:var(--erb-pagination-active-color, #fff)}\n"] }]
        }], propDecorators: { currentPage: [{
                type: Input
            }], totalPages: [{
                type: Input
            }], onPageChange: [{
                type: Output
            }] } });

class StepperComponent {
    currentStep = 0;
    steps = [];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: StepperComponent, isStandalone: true, selector: "erb-stepper", inputs: { currentStep: "currentStep", steps: "steps" }, ngImport: i0, template: `
    <ol class="erb-stepper">
      <li *ngFor="let step of steps; let i = index" class="erb-stepper__step" [attr.aria-current]="currentStep === i ? 'step' : null">
        <span>{{ i + 1 }}</span> <span>{{ step }}</span>
      </li>
    </ol>
  `, isInline: true, styles: [".erb-stepper{display:flex;gap:var(--erb-stepper-gap, 16px)}.erb-stepper__step{display:flex;align-items:center;gap:var(--erb-stepper-step-gap, 8px)}.erb-stepper__step[aria-current=step]{font-weight:700}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-stepper', template: `
    <ol class="erb-stepper">
      <li *ngFor="let step of steps; let i = index" class="erb-stepper__step" [attr.aria-current]="currentStep === i ? 'step' : null">
        <span>{{ i + 1 }}</span> <span>{{ step }}</span>
      </li>
    </ol>
  `, standalone: true, imports: [CommonModule], styles: [".erb-stepper{display:flex;gap:var(--erb-stepper-gap, 16px)}.erb-stepper__step{display:flex;align-items:center;gap:var(--erb-stepper-step-gap, 8px)}.erb-stepper__step[aria-current=step]{font-weight:700}\n"] }]
        }], propDecorators: { currentStep: [{
                type: Input
            }], steps: [{
                type: Input
            }] } });

class AccordionComponent {
    title;
    expanded = false;
    toggle() { this.expanded = !this.expanded; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AccordionComponent, isStandalone: true, selector: "erb-accordion", inputs: { title: "title", expanded: "expanded" }, ngImport: i0, template: `
    <div class="erb-accordion">
      <h3 class="erb-accordion__header">
        <button [attr.aria-expanded]="expanded" class="erb-accordion__button" (click)="toggle()">{{ title }}</button>
      </h3>
      <div class="erb-accordion__panel" [hidden]="!expanded">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, styles: [".erb-accordion{border-bottom:1px solid var(--erb-accordion-border, #ccc)}.erb-accordion__header{margin:0}.erb-accordion__button{width:100%;display:flex;justify-content:space-between;padding:var(--erb-accordion-padding, 16px);background:var(--erb-accordion-bg, transparent);border:none;cursor:pointer}.erb-accordion__panel{padding:var(--erb-accordion-padding, 16px);display:none}.erb-accordion__button[aria-expanded=true]+.erb-accordion__panel{display:block}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-accordion', template: `
    <div class="erb-accordion">
      <h3 class="erb-accordion__header">
        <button [attr.aria-expanded]="expanded" class="erb-accordion__button" (click)="toggle()">{{ title }}</button>
      </h3>
      <div class="erb-accordion__panel" [hidden]="!expanded">
        <ng-content></ng-content>
      </div>
    </div>
  `, standalone: true, imports: [CommonModule], styles: [".erb-accordion{border-bottom:1px solid var(--erb-accordion-border, #ccc)}.erb-accordion__header{margin:0}.erb-accordion__button{width:100%;display:flex;justify-content:space-between;padding:var(--erb-accordion-padding, 16px);background:var(--erb-accordion-bg, transparent);border:none;cursor:pointer}.erb-accordion__panel{padding:var(--erb-accordion-padding, 16px);display:none}.erb-accordion__button[aria-expanded=true]+.erb-accordion__panel{display:block}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], expanded: [{
                type: Input
            }] } });

class SkipLinkComponent {
    href;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SkipLinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SkipLinkComponent, isStandalone: true, selector: "erb-skip-link", inputs: { href: "href" }, ngImport: i0, template: `<a [href]="href" class="erb-skip-link"><ng-content></ng-content></a>`, isInline: true, styles: [".erb-skip-link{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;background-color:var(--erb-skip-link-bg, #fff);color:var(--erb-skip-link-color, #000)}.erb-skip-link:focus{position:static;width:auto;height:auto;padding:var(--erb-skip-link-padding, 8px);margin:0;overflow:visible;clip:auto;white-space:normal}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SkipLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-skip-link', template: `<a [href]="href" class="erb-skip-link"><ng-content></ng-content></a>`, standalone: true, styles: [".erb-skip-link{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;background-color:var(--erb-skip-link-bg, #fff);color:var(--erb-skip-link-color, #000)}.erb-skip-link:focus{position:static;width:auto;height:auto;padding:var(--erb-skip-link-padding, 8px);margin:0;overflow:visible;clip:auto;white-space:normal}\n"] }]
        }], propDecorators: { href: [{
                type: Input
            }] } });

class ComboboxComponent {
    options = [];
    label;
    error;
    id = 'erb-combobox-' + Math.random().toString(36).substring(2, 9);
    disabled = false;
    placeholder = '';
    className = '';
    valueChange = new EventEmitter();
    wrapperRef;
    inputRef;
    value = '';
    inputValue = '';
    isOpen = false;
    activeIndex = -1;
    get errorId() {
        return `${this.id}-error`;
    }
    get listboxId() {
        return `${this.id}-listbox`;
    }
    get filteredOptions() {
        return this.options.filter(opt => opt.label.toLowerCase().includes(this.inputValue.toLowerCase()));
    }
    onChange = () => { };
    onTouch = () => { };
    onClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }
    onInput(event) {
        const input = event.target;
        this.inputValue = input.value;
        this.isOpen = true;
        this.activeIndex = -1;
    }
    selectOption(selectedValue) {
        if (this.disabled)
            return;
        const selectedOption = this.options.find(opt => opt.value === selectedValue);
        if (selectedOption) {
            this.inputValue = selectedOption.label;
            this.value = selectedValue;
            this.onChange(selectedValue);
            this.valueChange.emit(selectedValue);
        }
        this.isOpen = false;
        setTimeout(() => this.inputRef.nativeElement.focus(), 0);
    }
    onKeyDown(e) {
        if (this.disabled)
            return;
        if (!this.isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
                this.isOpen = true;
            }
            return;
        }
        const maxIndex = this.filteredOptions.length - 1;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.activeIndex = this.activeIndex < maxIndex ? this.activeIndex + 1 : this.activeIndex;
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
                break;
            case 'Enter':
                e.preventDefault();
                if (this.activeIndex >= 0 && this.activeIndex <= maxIndex) {
                    this.selectOption(this.filteredOptions[this.activeIndex].value);
                }
                break;
            case 'Escape':
                this.isOpen = false;
                break;
        }
    }
    writeValue(val) {
        if (val !== undefined && val !== null) {
            this.value = val;
            const selectedOption = this.options.find(opt => opt.value === val);
            this.inputValue = selectedOption ? selectedOption.label : '';
        }
        else {
            this.value = '';
            this.inputValue = '';
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ComboboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ComboboxComponent, isStandalone: true, selector: "erb-combobox", inputs: { options: "options", label: "label", error: "error", id: "id", disabled: "disabled", placeholder: "placeholder", className: "className" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "document:mousedown": "onClickOutside($event)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ComboboxComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "wrapperRef", first: true, predicate: ["wrapper"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: `
    <div class="erb-combobox-wrapper" #wrapper>
      <label *ngIf="label" [attr.for]="id" class="erb-label">
        {{ label }}
      </label>
      <div class="erb-combobox">
        <input
          #input
          [id]="id"
          type="text"
          role="combobox"
          [attr.aria-expanded]="isOpen"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="isOpen && activeIndex >= 0 ? listboxId + '-option-' + activeIndex : null"
          [attr.aria-invalid]="!!error"
          [attr.aria-describedby]="error ? errorId : null"
          class="erb-combobox-input"
          [class]="className"
          [value]="inputValue"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
          (focus)="isOpen = true"
          [disabled]="disabled"
          [placeholder]="placeholder"
        />
      </div>
      <ul
        [id]="listboxId"
        class="erb-combobox-listbox"
        [attr.data-open]="isOpen && filteredOptions.length > 0"
        role="listbox"
      >
        <li
          *ngFor="let opt of filteredOptions; let i = index"
          [id]="listboxId + '-option-' + i"
          class="erb-combobox-option"
          role="option"
          [attr.aria-selected]="opt.value === value"
          (click)="selectOption(opt.value)"
          (mouseenter)="activeIndex = i"
          [style.backgroundColor]="activeIndex === i ? 'var(--erb-color-bg-subtle)' : ''"
        >
          {{ opt.label }}
        </li>
      </ul>
      <span *ngIf="error" [id]="errorId" class="erb-error-message">
        {{ error }}
      </span>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ComboboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-combobox',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-combobox-wrapper" #wrapper>
      <label *ngIf="label" [attr.for]="id" class="erb-label">
        {{ label }}
      </label>
      <div class="erb-combobox">
        <input
          #input
          [id]="id"
          type="text"
          role="combobox"
          [attr.aria-expanded]="isOpen"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="isOpen && activeIndex >= 0 ? listboxId + '-option-' + activeIndex : null"
          [attr.aria-invalid]="!!error"
          [attr.aria-describedby]="error ? errorId : null"
          class="erb-combobox-input"
          [class]="className"
          [value]="inputValue"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
          (focus)="isOpen = true"
          [disabled]="disabled"
          [placeholder]="placeholder"
        />
      </div>
      <ul
        [id]="listboxId"
        class="erb-combobox-listbox"
        [attr.data-open]="isOpen && filteredOptions.length > 0"
        role="listbox"
      >
        <li
          *ngFor="let opt of filteredOptions; let i = index"
          [id]="listboxId + '-option-' + i"
          class="erb-combobox-option"
          role="option"
          [attr.aria-selected]="opt.value === value"
          (click)="selectOption(opt.value)"
          (mouseenter)="activeIndex = i"
          [style.backgroundColor]="activeIndex === i ? 'var(--erb-color-bg-subtle)' : ''"
        >
          {{ opt.label }}
        </li>
      </ul>
      <span *ngIf="error" [id]="errorId" class="erb-error-message">
        {{ error }}
      </span>
    </div>
  `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ComboboxComponent),
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { options: [{
                type: Input
            }], label: [{
                type: Input
            }], error: [{
                type: Input
            }], id: [{
                type: Input
            }], disabled: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], className: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], wrapperRef: [{
                type: ViewChild,
                args: ['wrapper']
            }], inputRef: [{
                type: ViewChild,
                args: ['input']
            }], onClickOutside: [{
                type: HostListener,
                args: ['document:mousedown', ['$event']]
            }] } });

class MultiSelectComponent {
    options = [];
    label;
    error;
    id = 'erb-multi-select-' + Math.random().toString(36).substring(2, 9);
    disabled = false;
    placeholder = '';
    className = '';
    valueChange = new EventEmitter();
    wrapperRef;
    inputRef;
    value = [];
    inputValue = '';
    isOpen = false;
    activeIndex = -1;
    get errorId() {
        return `${this.id}-error`;
    }
    get listboxId() {
        return `${this.id}-listbox`;
    }
    get selectedOptions() {
        return this.options.filter(opt => this.value.includes(opt.value));
    }
    get unselectedOptions() {
        return this.options.filter(opt => !this.value.includes(opt.value));
    }
    get filteredOptions() {
        return this.unselectedOptions.filter(opt => opt.label.toLowerCase().includes(this.inputValue.toLowerCase()));
    }
    onChange = () => { };
    onTouch = () => { };
    onClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }
    triggerClick() {
        if (!this.disabled) {
            this.isOpen = true;
            setTimeout(() => this.inputRef.nativeElement.focus(), 0);
        }
    }
    onInput(event) {
        const input = event.target;
        this.inputValue = input.value;
        this.isOpen = true;
        this.activeIndex = -1;
    }
    removeOption(valToRemove, event) {
        if (event)
            event.stopPropagation();
        if (this.disabled)
            return;
        this.value = this.value.filter(v => v !== valToRemove);
        this.onChange(this.value);
        this.valueChange.emit(this.value);
    }
    selectOption(selectedValue) {
        if (this.disabled)
            return;
        this.value = [...this.value, selectedValue];
        this.inputValue = '';
        this.onChange(this.value);
        this.valueChange.emit(this.value);
        this.isOpen = false;
        setTimeout(() => this.inputRef.nativeElement.focus(), 0);
    }
    onKeyDown(e) {
        if (this.disabled)
            return;
        if (e.key === 'Backspace' && this.inputValue === '' && this.value.length > 0) {
            this.removeOption(this.value[this.value.length - 1]);
            return;
        }
        if (!this.isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
                this.isOpen = true;
            }
            return;
        }
        const maxIndex = this.filteredOptions.length - 1;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.activeIndex = this.activeIndex < maxIndex ? this.activeIndex + 1 : this.activeIndex;
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
                break;
            case 'Enter':
                e.preventDefault();
                if (this.activeIndex >= 0 && this.activeIndex <= maxIndex) {
                    this.selectOption(this.filteredOptions[this.activeIndex].value);
                }
                break;
            case 'Escape':
                this.isOpen = false;
                break;
        }
    }
    writeValue(val) {
        if (Array.isArray(val)) {
            this.value = val;
        }
        else {
            this.value = [];
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MultiSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: MultiSelectComponent, isStandalone: true, selector: "erb-multi-select", inputs: { options: "options", label: "label", error: "error", id: "id", disabled: "disabled", placeholder: "placeholder", className: "className" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "document:mousedown": "onClickOutside($event)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MultiSelectComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "wrapperRef", first: true, predicate: ["wrapper"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: `
    <div class="erb-multi-select-wrapper" #wrapper>
      <label *ngIf="label" [attr.for]="id" class="erb-label">
        {{ label }}
      </label>
      <div
        class="erb-multi-select-trigger"
        [class]="className"
        (click)="triggerClick()"
        [attr.aria-invalid]="!!error"
        [attr.aria-disabled]="disabled"
      >
        <span *ngFor="let opt of selectedOptions" class="erb-multi-select-tag">
          {{ opt.label }}
          <button
            type="button"
            class="erb-multi-select-tag-remove"
            (click)="removeOption(opt.value, $event)"
            [disabled]="disabled"
            [attr.aria-label]="'Remove ' + opt.label"
          >
            &times;
          </button>
        </span>
        <input
          #input
          [id]="id"
          type="text"
          class="erb-multi-select-input"
          role="combobox"
          [attr.aria-expanded]="isOpen"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="isOpen && activeIndex >= 0 ? listboxId + '-option-' + activeIndex : null"
          [attr.aria-describedby]="error ? errorId : null"
          [value]="inputValue"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
          [disabled]="disabled"
          [placeholder]="value.length === 0 ? placeholder : ''"
        />
      </div>
      <ul
        [id]="listboxId"
        class="erb-multi-select-listbox"
        [attr.data-open]="isOpen && filteredOptions.length > 0"
        role="listbox"
        aria-multiselectable="true"
      >
        <li
          *ngFor="let opt of filteredOptions; let i = index"
          [id]="listboxId + '-option-' + i"
          class="erb-multi-select-option"
          role="option"
          aria-selected="false"
          (click)="selectOption(opt.value)"
          (mouseenter)="activeIndex = i"
          [attr.data-focused]="activeIndex === i"
        >
          {{ opt.label }}
        </li>
      </ul>
      <span *ngIf="error" [id]="errorId" class="erb-error-message">
        {{ error }}
      </span>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MultiSelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-multi-select',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-multi-select-wrapper" #wrapper>
      <label *ngIf="label" [attr.for]="id" class="erb-label">
        {{ label }}
      </label>
      <div
        class="erb-multi-select-trigger"
        [class]="className"
        (click)="triggerClick()"
        [attr.aria-invalid]="!!error"
        [attr.aria-disabled]="disabled"
      >
        <span *ngFor="let opt of selectedOptions" class="erb-multi-select-tag">
          {{ opt.label }}
          <button
            type="button"
            class="erb-multi-select-tag-remove"
            (click)="removeOption(opt.value, $event)"
            [disabled]="disabled"
            [attr.aria-label]="'Remove ' + opt.label"
          >
            &times;
          </button>
        </span>
        <input
          #input
          [id]="id"
          type="text"
          class="erb-multi-select-input"
          role="combobox"
          [attr.aria-expanded]="isOpen"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="isOpen && activeIndex >= 0 ? listboxId + '-option-' + activeIndex : null"
          [attr.aria-describedby]="error ? errorId : null"
          [value]="inputValue"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
          [disabled]="disabled"
          [placeholder]="value.length === 0 ? placeholder : ''"
        />
      </div>
      <ul
        [id]="listboxId"
        class="erb-multi-select-listbox"
        [attr.data-open]="isOpen && filteredOptions.length > 0"
        role="listbox"
        aria-multiselectable="true"
      >
        <li
          *ngFor="let opt of filteredOptions; let i = index"
          [id]="listboxId + '-option-' + i"
          class="erb-multi-select-option"
          role="option"
          aria-selected="false"
          (click)="selectOption(opt.value)"
          (mouseenter)="activeIndex = i"
          [attr.data-focused]="activeIndex === i"
        >
          {{ opt.label }}
        </li>
      </ul>
      <span *ngIf="error" [id]="errorId" class="erb-error-message">
        {{ error }}
      </span>
    </div>
  `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => MultiSelectComponent),
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { options: [{
                type: Input
            }], label: [{
                type: Input
            }], error: [{
                type: Input
            }], id: [{
                type: Input
            }], disabled: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], className: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], wrapperRef: [{
                type: ViewChild,
                args: ['wrapper']
            }], inputRef: [{
                type: ViewChild,
                args: ['input']
            }], onClickOutside: [{
                type: HostListener,
                args: ['document:mousedown', ['$event']]
            }] } });

class SliderComponent {
    el;
    min = 0;
    max = 100;
    step = 1;
    value = 0;
    disabled = false;
    valueChange = new EventEmitter();
    isDragging = false;
    constructor(el) {
        this.el = el;
    }
    get percentage() {
        return ((this.value - this.min) / (this.max - this.min)) * 100;
    }
    updateValue(newVal) {
        const clamped = Math.min(Math.max(newVal, this.min), this.max);
        const stepped = Math.round((clamped - this.min) / this.step) * this.step + this.min;
        const finalVal = Math.min(Math.max(stepped, this.min), this.max);
        if (this.value !== finalVal) {
            this.value = finalVal;
            this.valueChange.emit(this.value);
        }
    }
    onPointerDown(event) {
        if (this.disabled)
            return;
        this.isDragging = true;
        event.target.setPointerCapture(event.pointerId);
        this.handlePointerEvent(event);
    }
    onPointerMove(event) {
        if (!this.isDragging || this.disabled)
            return;
        this.handlePointerEvent(event);
    }
    onPointerUp(event) {
        this.isDragging = false;
        event.target.releasePointerCapture(event.pointerId);
    }
    handlePointerEvent(event) {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const percent = (event.clientX - rect.left) / rect.width;
        this.updateValue(this.min + percent * (this.max - this.min));
    }
    onKeyDown(event) {
        if (this.disabled)
            return;
        let newVal = this.value;
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newVal += this.step;
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newVal -= this.step;
                break;
            case 'Home':
                newVal = this.min;
                break;
            case 'End':
                newVal = this.max;
                break;
            default:
                return;
        }
        event.preventDefault();
        this.updateValue(newVal);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SliderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SliderComponent, isStandalone: true, selector: "erb-slider", inputs: { min: "min", max: "max", step: "step", value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "pointerdown": "onPointerDown($event)", "pointermove": "onPointerMove($event)", "pointerup": "onPointerUp($event)", "pointercancel": "onPointerUp($event)" }, properties: { "class.erb-slider-container--disabled": "disabled" }, classAttribute: "erb-slider-container" }, ngImport: i0, template: `
    <div class="erb-slider-track"></div>
    <div class="erb-slider-fill" [style.width.%]="percentage" style="left: 0;"></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="percentage"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="max"
      [attr.aria-valuenow]="value"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown($event)"
    ></div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-slider',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-slider-track"></div>
    <div class="erb-slider-fill" [style.width.%]="percentage" style="left: 0;"></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="percentage"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="max"
      [attr.aria-valuenow]="value"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown($event)"
    ></div>
  `,
                    host: {
                        'class': 'erb-slider-container',
                        '[class.erb-slider-container--disabled]': 'disabled',
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], onPointerDown: [{
                type: HostListener,
                args: ['pointerdown', ['$event']]
            }], onPointerMove: [{
                type: HostListener,
                args: ['pointermove', ['$event']]
            }], onPointerUp: [{
                type: HostListener,
                args: ['pointerup', ['$event']]
            }, {
                type: HostListener,
                args: ['pointercancel', ['$event']]
            }] } });

class RangeSliderComponent {
    el;
    min = 0;
    max = 100;
    step = 1;
    value = [0, 100];
    disabled = false;
    valueChange = new EventEmitter();
    activeThumb = null;
    constructor(el) {
        this.el = el;
    }
    get p0() {
        return ((this.value[0] - this.min) / (this.max - this.min)) * 100;
    }
    get p1() {
        return ((this.value[1] - this.min) / (this.max - this.min)) * 100;
    }
    updateValue(index, newVal) {
        const clamped = Math.min(Math.max(newVal, this.min), this.max);
        const stepped = Math.round((clamped - this.min) / this.step) * this.step + this.min;
        const finalVal = Math.min(Math.max(stepped, this.min), this.max);
        const newValues = [...this.value];
        newValues[index] = finalVal;
        if (index === 0 && newValues[0] > newValues[1]) {
            newValues[0] = newValues[1];
        }
        else if (index === 1 && newValues[1] < newValues[0]) {
            newValues[1] = newValues[0];
        }
        if (this.value[0] !== newValues[0] || this.value[1] !== newValues[1]) {
            this.value = newValues;
            this.valueChange.emit(this.value);
        }
    }
    getClosestThumb(val) {
        const d0 = Math.abs(this.value[0] - val);
        const d1 = Math.abs(this.value[1] - val);
        return d0 < d1 ? 0 : 1;
    }
    onPointerDown(event) {
        if (this.disabled)
            return;
        event.target.setPointerCapture(event.pointerId);
        const rect = this.el.nativeElement.getBoundingClientRect();
        const percent = (event.clientX - rect.left) / rect.width;
        const val = this.min + percent * (this.max - this.min);
        this.activeThumb = this.getClosestThumb(val);
        this.updateValue(this.activeThumb, val);
    }
    onPointerMove(event) {
        if (this.disabled || this.activeThumb === null)
            return;
        const rect = this.el.nativeElement.getBoundingClientRect();
        const percent = (event.clientX - rect.left) / rect.width;
        const val = this.min + percent * (this.max - this.min);
        this.updateValue(this.activeThumb, val);
    }
    onPointerUp(event) {
        event.target.releasePointerCapture(event.pointerId);
        this.activeThumb = null;
    }
    onKeyDown(index, event) {
        if (this.disabled)
            return;
        let newVal = this.value[index];
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newVal += this.step;
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newVal -= this.step;
                break;
            case 'Home':
                newVal = index === 0 ? this.min : this.value[0];
                break;
            case 'End':
                newVal = index === 1 ? this.max : this.value[1];
                break;
            default:
                return;
        }
        event.preventDefault();
        this.updateValue(index, newVal);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RangeSliderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RangeSliderComponent, isStandalone: true, selector: "erb-range-slider", inputs: { min: "min", max: "max", step: "step", value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "pointerdown": "onPointerDown($event)", "pointermove": "onPointerMove($event)", "pointerup": "onPointerUp($event)", "pointercancel": "onPointerUp($event)" }, properties: { "class.erb-slider-container--disabled": "disabled" }, classAttribute: "erb-slider-container" }, ngImport: i0, template: `
    <div class="erb-slider-track"></div>
    <div class="erb-slider-fill" [style.left.%]="p0" [style.width.%]="p1 - p0"></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="p0"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="value[1]"
      [attr.aria-valuenow]="value[0]"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown(0, $event)"
    ></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="p1"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="value[0]"
      [attr.aria-valuemax]="max"
      [attr.aria-valuenow]="value[1]"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown(1, $event)"
    ></div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RangeSliderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-range-slider',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-slider-track"></div>
    <div class="erb-slider-fill" [style.left.%]="p0" [style.width.%]="p1 - p0"></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="p0"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="value[1]"
      [attr.aria-valuenow]="value[0]"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown(0, $event)"
    ></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="p1"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="value[0]"
      [attr.aria-valuemax]="max"
      [attr.aria-valuenow]="value[1]"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown(1, $event)"
    ></div>
  `,
                    host: {
                        'class': 'erb-slider-container',
                        '[class.erb-slider-container--disabled]': 'disabled',
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], onPointerDown: [{
                type: HostListener,
                args: ['pointerdown', ['$event']]
            }], onPointerMove: [{
                type: HostListener,
                args: ['pointermove', ['$event']]
            }], onPointerUp: [{
                type: HostListener,
                args: ['pointerup', ['$event']]
            }, {
                type: HostListener,
                args: ['pointercancel', ['$event']]
            }] } });

class ErbDatePickerComponent {
    size = input('md');
    value = '';
    disabled = false;
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onInput(event) {
        const val = event.target.value;
        this.value = val;
        this.onChange(val);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbDatePickerComponent, isStandalone: true, selector: "erb-datepicker", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { classAttribute: "erb-datepicker" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ErbDatePickerComponent),
                multi: true
            }
        ], ngImport: i0, template: `<input type="date" [attr.data-size]="size()" class="erb-datepicker-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-datepicker',
                    standalone: true,
                    template: `<input type="date" [attr.data-size]="size()" class="erb-datepicker-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`,
                    host: {
                        class: 'erb-datepicker'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ErbDatePickerComponent),
                            multi: true
                        }
                    ]
                }]
        }] });

class ErbDateRangePickerComponent {
    size = input('md');
    value = {};
    disabled = false;
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value || {};
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onStartInput(event) {
        const val = event.target.value;
        this.value = { ...this.value, start: val };
        this.onChange(this.value);
    }
    onEndInput(event) {
        const val = event.target.value;
        this.value = { ...this.value, end: val };
        this.onChange(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDateRangePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbDateRangePickerComponent, isStandalone: true, selector: "erb-daterangepicker", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()" }, classAttribute: "erb-daterangepicker" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ErbDateRangePickerComponent),
                multi: true
            }
        ], ngImport: i0, template: `
    <input type="date" class="erb-daterangepicker-start" [value]="value?.start || ''" (input)="onStartInput($event)" [disabled]="disabled">
    <span class="erb-daterangepicker-separator">-</span>
    <input type="date" class="erb-daterangepicker-end" [value]="value?.end || ''" (input)="onEndInput($event)" [disabled]="disabled">
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-daterangepicker',
                    standalone: true,
                    template: `
    <input type="date" class="erb-daterangepicker-start" [value]="value?.start || ''" (input)="onStartInput($event)" [disabled]="disabled">
    <span class="erb-daterangepicker-separator">-</span>
    <input type="date" class="erb-daterangepicker-end" [value]="value?.end || ''" (input)="onEndInput($event)" [disabled]="disabled">
  `,
                    host: {
                        class: 'erb-daterangepicker',
                        '[attr.data-size]': 'size()'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ErbDateRangePickerComponent),
                            multi: true
                        }
                    ]
                }]
        }] });

class ErbTimePickerComponent {
    size = input('md');
    value = '';
    disabled = false;
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onInput(event) {
        const val = event.target.value;
        this.value = val;
        this.onChange(val);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTimePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbTimePickerComponent, isStandalone: true, selector: "erb-timepicker", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { classAttribute: "erb-timepicker" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ErbTimePickerComponent),
                multi: true
            }
        ], ngImport: i0, template: `<input type="time" [attr.data-size]="size()" class="erb-timepicker-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTimePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-timepicker',
                    standalone: true,
                    template: `<input type="time" [attr.data-size]="size()" class="erb-timepicker-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`,
                    host: {
                        class: 'erb-timepicker'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ErbTimePickerComponent),
                            multi: true
                        }
                    ]
                }]
        }] });

class ColorPickerComponent {
    value = '#000000';
    className = '';
    valueChange = new EventEmitter();
    onInputChange(event) {
        const input = event.target;
        this.value = input.value;
        this.valueChange.emit(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ColorPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ColorPickerComponent, isStandalone: true, selector: "erb-color-picker", inputs: { value: "value", className: "className" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: `
    <div class="erb-color-picker" [ngClass]="className">
      <input
        type="color"
        class="erb-color-picker-input"
        [value]="value"
        (input)="onInputChange($event)"
      />
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ColorPickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-color-picker',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-color-picker" [ngClass]="className">
      <input
        type="color"
        class="erb-color-picker-input"
        [value]="value"
        (input)="onInputChange($event)"
      />
    </div>
  `,
                }]
        }], propDecorators: { value: [{
                type: Input
            }], className: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class FileUploadComponent {
    className = '';
    multiple = false;
    accept = '';
    fileSelect = new EventEmitter();
    fileInput;
    content;
    isDragActive = false;
    get hasContent() {
        return false; // For simplcity, assume no content for basic angular transclusion check unless more complex DOM checking
    }
    onDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragActive = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragActive = false;
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragActive = false;
        if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
            this.fileSelect.emit(event.dataTransfer.files);
        }
    }
    onFileChange(event) {
        const input = event.target;
        this.fileSelect.emit(input.files);
    }
    onClick() {
        this.fileInput.nativeElement.click();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileUploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FileUploadComponent, isStandalone: true, selector: "erb-file-upload", inputs: { className: "className", multiple: "multiple", accept: "accept" }, outputs: { fileSelect: "fileSelect" }, viewQueries: [{ propertyName: "fileInput", first: true, predicate: ["fileInput"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: `
    <div
      class="erb-file-upload"
      [ngClass]="className"
      [attr.data-drag-active]="isDragActive"
      (dragenter)="onDragEnter($event)"
      (dragleave)="onDragLeave($event)"
      (dragover)="onDragOver($event)"
      (drop)="onDrop($event)"
      (click)="onClick()"
    >
      <input
        type="file"
        #fileInput
        class="erb-file-upload-input"
        (change)="onFileChange($event)"
        [multiple]="multiple"
        [accept]="accept"
      />
      <ng-content></ng-content>
      <span *ngIf="!hasContent">Drag & Drop files here or click to browse</span>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileUploadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-file-upload',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div
      class="erb-file-upload"
      [ngClass]="className"
      [attr.data-drag-active]="isDragActive"
      (dragenter)="onDragEnter($event)"
      (dragleave)="onDragLeave($event)"
      (dragover)="onDragOver($event)"
      (drop)="onDrop($event)"
      (click)="onClick()"
    >
      <input
        type="file"
        #fileInput
        class="erb-file-upload-input"
        (change)="onFileChange($event)"
        [multiple]="multiple"
        [accept]="accept"
      />
      <ng-content></ng-content>
      <span *ngIf="!hasContent">Drag & Drop files here or click to browse</span>
    </div>
  `,
                }]
        }], propDecorators: { className: [{
                type: Input
            }], multiple: [{
                type: Input
            }], accept: [{
                type: Input
            }], fileSelect: [{
                type: Output
            }], fileInput: [{
                type: ViewChild,
                args: ['fileInput']
            }], content: [{
                type: ViewChild,
                args: ['content', { static: true }]
            }] } });

class PinInputComponent {
    length = 4;
    value = '';
    disabled = false;
    valueChange = new EventEmitter();
    inputs;
    get items() {
        return Array(this.length).fill(0);
    }
    onInput(event, index) {
        const inputElement = event.target;
        const val = inputElement.value;
        const char = val.slice(-1);
        if (char && !/^[0-9]$/.test(char)) {
            inputElement.value = this.value[index] || '';
            return;
        }
        const newValue = this.value.split('');
        newValue[index] = char;
        const finalValue = newValue.join('').slice(0, this.length);
        this.value = finalValue;
        this.valueChange.emit(this.value);
        if (char && index < this.length - 1) {
            this.focusInput(index + 1);
        }
    }
    onKeyDown(event, index) {
        if (event.key === 'Backspace') {
            if (!this.value[index] && index > 0) {
                this.focusInput(index - 1);
            }
            else {
                const newValue = this.value.split('');
                newValue[index] = '';
                this.value = newValue.join('');
                this.valueChange.emit(this.value);
            }
        }
        else if (event.key === 'ArrowLeft' && index > 0) {
            this.focusInput(index - 1);
        }
        else if (event.key === 'ArrowRight' && index < this.length - 1) {
            this.focusInput(index + 1);
        }
    }
    onPaste(event) {
        event.preventDefault();
        const pastedData = event.clipboardData?.getData('text/plain')?.replace(/\\D/g, '').slice(0, this.length) || '';
        if (pastedData) {
            this.value = pastedData;
            this.valueChange.emit(this.value);
            const nextFocus = Math.min(pastedData.length, this.length - 1);
            this.focusInput(nextFocus);
        }
    }
    focusInput(index) {
        const inputsArray = this.inputs.toArray();
        if (inputsArray[index]) {
            inputsArray[index].nativeElement.focus();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PinInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: PinInputComponent, isStandalone: true, selector: "erb-pin-input", inputs: { length: "length", value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, viewQueries: [{ propertyName: "inputs", predicate: ["pinInput"], descendants: true }], ngImport: i0, template: `
    <div class="erb-pin-input">
      <input
        *ngFor="let item of items; let i = index"
        #pinInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        class="erb-pin-input__field"
        [value]="value[i] || ''"
        [disabled]="disabled"
        (input)="onInput($event, i)"
        (keydown)="onKeyDown($event, i)"
        (paste)="onPaste($event)"
      />
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PinInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-pin-input',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-pin-input">
      <input
        *ngFor="let item of items; let i = index"
        #pinInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        class="erb-pin-input__field"
        [value]="value[i] || ''"
        [disabled]="disabled"
        (input)="onInput($event, i)"
        (keydown)="onKeyDown($event, i)"
        (paste)="onPaste($event)"
      />
    </div>
  `,
                }]
        }], propDecorators: { length: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], inputs: [{
                type: ViewChildren,
                args: ['pinInput']
            }] } });

class TagsInputComponent {
    tags = [];
    disabled = false;
    placeholder = '';
    tagsChange = new EventEmitter();
    inputValue = '';
    hostClass = true;
    get isDisabledClass() { return this.disabled; }
    onKeyDown(event) {
        if (this.disabled)
            return;
        if (event.key === 'Enter' && this.inputValue.trim()) {
            event.preventDefault();
            const val = this.inputValue.trim();
            if (!this.tags.includes(val)) {
                this.tags = [...this.tags, val];
                this.tagsChange.emit(this.tags);
            }
            this.inputValue = '';
        }
        else if (event.key === 'Backspace' && !this.inputValue && this.tags.length > 0) {
            this.tags = this.tags.slice(0, -1);
            this.tagsChange.emit(this.tags);
        }
    }
    removeTag(tagToRemove) {
        if (this.disabled)
            return;
        this.tags = this.tags.filter(tag => tag !== tagToRemove);
        this.tagsChange.emit(this.tags);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TagsInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TagsInputComponent, isStandalone: true, selector: "erb-tags-input", inputs: { tags: "tags", disabled: "disabled", placeholder: "placeholder" }, outputs: { tagsChange: "tagsChange" }, host: { properties: { "class.erb-tags-input": "this.hostClass", "class.erb-tags-input--disabled": "this.isDisabledClass" } }, ngImport: i0, template: `
    <span *ngFor="let tag of tags" class="erb-tags-input__tag">
      {{ tag }}
      <button
        *ngIf="!disabled"
        type="button"
        class="erb-tags-input__tag-remove"
        (click)="removeTag(tag)"
        [attr.aria-label]="'Remove ' + tag"
      >
        ×
      </button>
    </span>
    <input
      type="text"
      class="erb-tags-input__input"
      [(ngModel)]="inputValue"
      (keydown)="onKeyDown($event)"
      [disabled]="disabled"
      [placeholder]="tags.length === 0 && placeholder ? placeholder : ''"
    />
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TagsInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tags-input',
                    standalone: true,
                    imports: [CommonModule, FormsModule],
                    template: `
    <span *ngFor="let tag of tags" class="erb-tags-input__tag">
      {{ tag }}
      <button
        *ngIf="!disabled"
        type="button"
        class="erb-tags-input__tag-remove"
        (click)="removeTag(tag)"
        [attr.aria-label]="'Remove ' + tag"
      >
        ×
      </button>
    </span>
    <input
      type="text"
      class="erb-tags-input__input"
      [(ngModel)]="inputValue"
      (keydown)="onKeyDown($event)"
      [disabled]="disabled"
      [placeholder]="tags.length === 0 && placeholder ? placeholder : ''"
    />
  `,
                }]
        }], propDecorators: { tags: [{
                type: Input
            }], disabled: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], tagsChange: [{
                type: Output
            }], hostClass: [{
                type: HostBinding,
                args: ['class.erb-tags-input']
            }], isDisabledClass: [{
                type: HostBinding,
                args: ['class.erb-tags-input--disabled']
            }] } });

class RatingComponent {
    max = 5;
    value = 0;
    disabled = false;
    valueChange = new EventEmitter();
    hoverValue = null;
    get stars() {
        return Array(this.max).fill(0);
    }
    hostClass = true;
    role = 'slider';
    ariaValueMin = 1;
    get ariaValueMax() { return this.max; }
    get ariaValueNow() { return this.value; }
    get ariaDisabled() { return this.disabled; }
    get tabIndex() { return this.disabled ? -1 : 0; }
    onMouseLeave() {
        this.hoverValue = null;
    }
    onKeyDown(event) {
        if (this.disabled)
            return;
        let newValue = this.value;
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
            newValue = Math.min(this.value + 1, this.max);
        }
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
            newValue = Math.max(this.value - 1, 1);
        }
        if (newValue !== this.value) {
            event.preventDefault();
            this.value = newValue;
            this.valueChange.emit(this.value);
        }
    }
    onClick(val) {
        if (this.disabled)
            return;
        this.value = val;
        this.valueChange.emit(this.value);
    }
    onMouseEnter(val) {
        if (this.disabled)
            return;
        this.hoverValue = val;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "erb-rating", inputs: { max: "max", value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "mouseleave": "onMouseLeave()", "keydown": "onKeyDown($event)" }, properties: { "class.erb-rating": "this.hostClass", "attr.role": "this.role", "attr.aria-valuemin": "this.ariaValueMin", "attr.aria-valuemax": "this.ariaValueMax", "attr.aria-valuenow": "this.ariaValueNow", "attr.aria-disabled": "this.ariaDisabled", "attr.tabindex": "this.tabIndex" } }, ngImport: i0, template: `
    <span
      *ngFor="let star of stars; let i = index"
      class="erb-rating__item"
      [class.erb-rating__item--active]="(i + 1) <= (hoverValue || value)"
      (click)="onClick(i + 1)"
      (mouseenter)="onMouseEnter(i + 1)"
      aria-hidden="true"
    >
      ★
    </span>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-rating',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <span
      *ngFor="let star of stars; let i = index"
      class="erb-rating__item"
      [class.erb-rating__item--active]="(i + 1) <= (hoverValue || value)"
      (click)="onClick(i + 1)"
      (mouseenter)="onMouseEnter(i + 1)"
      aria-hidden="true"
    >
      ★
    </span>
  `,
                }]
        }], propDecorators: { max: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], hostClass: [{
                type: HostBinding,
                args: ['class.erb-rating']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], ariaValueMin: [{
                type: HostBinding,
                args: ['attr.aria-valuemin']
            }], ariaValueMax: [{
                type: HostBinding,
                args: ['attr.aria-valuemax']
            }], ariaValueNow: [{
                type: HostBinding,
                args: ['attr.aria-valuenow']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });

class ErbTableComponent {
    get isTable() { return true; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTableComponent, isStandalone: true, selector: "erb-table", host: { properties: { "class.erb-table": "this.isTable" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [".erb-table{width:100%;border-collapse:collapse;text-align:left;font-family:var(--erb-typography-font-family-base, sans-serif)}.erb-table th,.erb-table td{padding:var(--erb-spacing-3, .75rem);border-bottom:1px solid var(--erb-color-border-subtle, #e5e7eb)}.erb-table th{font-weight:var(--erb-typography-font-weight-semibold, 600);color:var(--erb-color-text-secondary, #4b5563);background-color:var(--erb-color-background-subtle, #f9fafb)}.erb-table tr:hover{background-color:var(--erb-color-background-hover, #f3f4f6)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-table', standalone: true, imports: [CommonModule], template: `<ng-content></ng-content>`, styles: [".erb-table{width:100%;border-collapse:collapse;text-align:left;font-family:var(--erb-typography-font-family-base, sans-serif)}.erb-table th,.erb-table td{padding:var(--erb-spacing-3, .75rem);border-bottom:1px solid var(--erb-color-border-subtle, #e5e7eb)}.erb-table th{font-weight:var(--erb-typography-font-weight-semibold, 600);color:var(--erb-color-text-secondary, #4b5563);background-color:var(--erb-color-background-subtle, #f9fafb)}.erb-table tr:hover{background-color:var(--erb-color-background-hover, #f3f4f6)}\n"] }]
        }], propDecorators: { isTable: [{
                type: HostBinding,
                args: ['class.erb-table']
            }] } });
class ErbTableHeadComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableHeadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTableHeadComponent, isStandalone: true, selector: "erb-table-head", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableHeadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-table-head',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }] });
class ErbTableBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTableBodyComponent, isStandalone: true, selector: "erb-table-body", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-table-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }] });
class ErbTableRowComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTableRowComponent, isStandalone: true, selector: "erb-table-row", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-table-row',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }] });
class ErbTableCellComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTableCellComponent, isStandalone: true, selector: "erb-table-cell", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-table-cell',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }] });
class ErbTableHeaderCellComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableHeaderCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTableHeaderCellComponent, isStandalone: true, selector: "erb-table-header-cell", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTableHeaderCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-table-header-cell',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }] });

class ErbListComponent {
    as = 'ul';
    get isList() { return true; }
    get isUnordered() { return this.as === 'ul'; }
    get isOrdered() { return this.as === 'ol'; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbListComponent, isStandalone: true, selector: "erb-list", inputs: { as: "as" }, host: { properties: { "class.erb-list": "this.isList", "class.erb-list--unordered": "this.isUnordered", "class.erb-list--ordered": "this.isOrdered" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [".erb-list{padding-left:var(--erb-spacing-4, 1rem);margin:var(--erb-spacing-0, 0);color:var(--erb-color-text-primary, #111827);font-family:var(--erb-typography-font-family-base, sans-serif)}.erb-list--unordered{list-style-type:disc}.erb-list--ordered{list-style-type:decimal}.erb-list-item{margin-bottom:var(--erb-spacing-1, .25rem)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-list', standalone: true, imports: [CommonModule], template: `<ng-content></ng-content>`, styles: [".erb-list{padding-left:var(--erb-spacing-4, 1rem);margin:var(--erb-spacing-0, 0);color:var(--erb-color-text-primary, #111827);font-family:var(--erb-typography-font-family-base, sans-serif)}.erb-list--unordered{list-style-type:disc}.erb-list--ordered{list-style-type:decimal}.erb-list-item{margin-bottom:var(--erb-spacing-1, .25rem)}\n"] }]
        }], propDecorators: { as: [{
                type: Input
            }], isList: [{
                type: HostBinding,
                args: ['class.erb-list']
            }], isUnordered: [{
                type: HostBinding,
                args: ['class.erb-list--unordered']
            }], isOrdered: [{
                type: HostBinding,
                args: ['class.erb-list--ordered']
            }] } });
class ErbListItemComponent {
    get isListItem() { return true; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbListItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbListItemComponent, isStandalone: true, selector: "erb-list-item", host: { properties: { "class.erb-list-item": "this.isListItem" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbListItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-list-item',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }], propDecorators: { isListItem: [{
                type: HostBinding,
                args: ['class.erb-list-item']
            }] } });

class ErbDescriptionListComponent {
    get isDl() { return true; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDescriptionListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDescriptionListComponent, isStandalone: true, selector: "erb-description-list", host: { properties: { "class.erb-description-list": "this.isDl" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [".erb-description-list{display:grid;grid-template-columns:minmax(120px,auto) 1fr;gap:var(--erb-spacing-2, .5rem) var(--erb-spacing-4, 1rem);font-family:var(--erb-typography-font-family-base, sans-serif);margin:var(--erb-spacing-0, 0)}.erb-description-list-term{font-weight:var(--erb-typography-font-weight-semibold, 600);color:var(--erb-color-text-primary, #111827)}.erb-description-list-details{margin:0;color:var(--erb-color-text-secondary, #4b5563)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDescriptionListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-description-list', standalone: true, imports: [CommonModule], template: `<ng-content></ng-content>`, styles: [".erb-description-list{display:grid;grid-template-columns:minmax(120px,auto) 1fr;gap:var(--erb-spacing-2, .5rem) var(--erb-spacing-4, 1rem);font-family:var(--erb-typography-font-family-base, sans-serif);margin:var(--erb-spacing-0, 0)}.erb-description-list-term{font-weight:var(--erb-typography-font-weight-semibold, 600);color:var(--erb-color-text-primary, #111827)}.erb-description-list-details{margin:0;color:var(--erb-color-text-secondary, #4b5563)}\n"] }]
        }], propDecorators: { isDl: [{
                type: HostBinding,
                args: ['class.erb-description-list']
            }] } });
class ErbDescriptionTermComponent {
    get isDt() { return true; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDescriptionTermComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDescriptionTermComponent, isStandalone: true, selector: "erb-description-term", host: { properties: { "class.erb-description-list-term": "this.isDt" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDescriptionTermComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-description-term',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }], propDecorators: { isDt: [{
                type: HostBinding,
                args: ['class.erb-description-list-term']
            }] } });
class ErbDescriptionDetailsComponent {
    get isDd() { return true; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDescriptionDetailsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbDescriptionDetailsComponent, isStandalone: true, selector: "erb-description-details", host: { properties: { "class.erb-description-list-details": "this.isDd" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbDescriptionDetailsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-description-details',
                    standalone: true,
                    template: `<ng-content></ng-content>`
                }]
        }], propDecorators: { isDd: [{
                type: HostBinding,
                args: ['class.erb-description-list-details']
            }] } });

class ErbStatComponent {
    label = '';
    value = '';
    helpText;
    get isStat() { return true; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbStatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbStatComponent, isStandalone: true, selector: "erb-stat", inputs: { label: "label", value: "value", helpText: "helpText" }, host: { properties: { "class.erb-stat": "this.isStat" } }, ngImport: i0, template: `
    <div class="erb-stat-label">{{ label }}</div>
    <div class="erb-stat-value">{{ value }}</div>
    <div *ngIf="helpText" class="erb-stat-help-text">{{ helpText }}</div>
  `, isInline: true, styles: [".erb-stat{display:flex;flex-direction:column;padding:var(--erb-spacing-4, 1rem);border:1px solid var(--erb-color-border-subtle, #e5e7eb);border-radius:var(--erb-border-radius-md, .375rem);background-color:var(--erb-color-background-surface, #ffffff);font-family:var(--erb-typography-font-family-base, sans-serif)}.erb-stat-label{font-size:var(--erb-typography-size-sm, .875rem);color:var(--erb-color-text-secondary, #4b5563);margin-bottom:var(--erb-spacing-1, .25rem)}.erb-stat-value{font-size:var(--erb-typography-size-2xl, 1.5rem);font-weight:var(--erb-typography-font-weight-bold, 700);color:var(--erb-color-text-primary, #111827)}.erb-stat-help-text{font-size:var(--erb-typography-size-sm, .875rem);color:var(--erb-color-text-tertiary, #6b7280);margin-top:var(--erb-spacing-1, .25rem)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbStatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-stat', standalone: true, imports: [CommonModule], template: `
    <div class="erb-stat-label">{{ label }}</div>
    <div class="erb-stat-value">{{ value }}</div>
    <div *ngIf="helpText" class="erb-stat-help-text">{{ helpText }}</div>
  `, styles: [".erb-stat{display:flex;flex-direction:column;padding:var(--erb-spacing-4, 1rem);border:1px solid var(--erb-color-border-subtle, #e5e7eb);border-radius:var(--erb-border-radius-md, .375rem);background-color:var(--erb-color-background-surface, #ffffff);font-family:var(--erb-typography-font-family-base, sans-serif)}.erb-stat-label{font-size:var(--erb-typography-size-sm, .875rem);color:var(--erb-color-text-secondary, #4b5563);margin-bottom:var(--erb-spacing-1, .25rem)}.erb-stat-value{font-size:var(--erb-typography-size-2xl, 1.5rem);font-weight:var(--erb-typography-font-weight-bold, 700);color:var(--erb-color-text-primary, #111827)}.erb-stat-help-text{font-size:var(--erb-typography-size-sm, .875rem);color:var(--erb-color-text-tertiary, #6b7280);margin-top:var(--erb-spacing-1, .25rem)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], value: [{
                type: Input
            }], helpText: [{
                type: Input
            }], isStat: [{
                type: HostBinding,
                args: ['class.erb-stat']
            }] } });

class TimelineComponent {
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TimelineComponent, isStandalone: true, selector: "erb-timeline", inputs: { className: "className" }, ngImport: i0, template: `
    <ul class="erb-timeline" [ngClass]="className">
      <ng-content></ng-content>
    </ul>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-timeline',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <ul class="erb-timeline" [ngClass]="className">
      <ng-content></ng-content>
    </ul>
  `
                }]
        }], propDecorators: { className: [{
                type: Input
            }] } });
class TimelineItemComponent {
    title = '';
    description;
    isLast = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimelineItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TimelineItemComponent, isStandalone: true, selector: "erb-timeline-item", inputs: { title: "title", description: "description", isLast: "isLast" }, ngImport: i0, template: `
    <li class="erb-timeline-item">
      <div class="erb-timeline-indicator">
        <div class="erb-timeline-dot"></div>
        <div class="erb-timeline-line" *ngIf="!isLast"></div>
      </div>
      <div class="erb-timeline-content">
        <div class="erb-timeline-title">{{ title }}</div>
        <div class="erb-timeline-description" *ngIf="description">{{ description }}</div>
      </div>
    </li>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimelineItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-timeline-item',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <li class="erb-timeline-item">
      <div class="erb-timeline-indicator">
        <div class="erb-timeline-dot"></div>
        <div class="erb-timeline-line" *ngIf="!isLast"></div>
      </div>
      <div class="erb-timeline-content">
        <div class="erb-timeline-title">{{ title }}</div>
        <div class="erb-timeline-description" *ngIf="description">{{ description }}</div>
      </div>
    </li>
  `
                }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], isLast: [{
                type: Input
            }] } });

class EmptyStateComponent {
    title = '';
    description;
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: EmptyStateComponent, isStandalone: true, selector: "erb-empty-state", inputs: { title: "title", description: "description", className: "className" }, ngImport: i0, template: `
    <div class="erb-empty-state" [ngClass]="className">
      <div class="erb-empty-state-title">{{ title }}</div>
      <div class="erb-empty-state-description" *ngIf="description">{{ description }}</div>
      <ng-content></ng-content>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-empty-state',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-empty-state" [ngClass]="className">
      <div class="erb-empty-state-title">{{ title }}</div>
      <div class="erb-empty-state-description" *ngIf="description">{{ description }}</div>
      <ng-content></ng-content>
    </div>
  `
                }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], className: [{
                type: Input
            }] } });

class ErrorStateComponent {
    title = '';
    description;
    className = '';
    showRetry = false;
    retry = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErrorStateComponent, isStandalone: true, selector: "erb-error-state", inputs: { title: "title", description: "description", className: "className", showRetry: "showRetry" }, outputs: { retry: "retry" }, ngImport: i0, template: `
    <div class="erb-error-state" [ngClass]="className">
      <div class="erb-error-state-title">{{ title }}</div>
      <div class="erb-error-state-description" *ngIf="description">{{ description }}</div>
      <button *ngIf="showRetry" class="erb-error-state-retry" (click)="retry.emit()">Retry</button>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorStateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-error-state',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-error-state" [ngClass]="className">
      <div class="erb-error-state-title">{{ title }}</div>
      <div class="erb-error-state-description" *ngIf="description">{{ description }}</div>
      <button *ngIf="showRetry" class="erb-error-state-retry" (click)="retry.emit()">Retry</button>
    </div>
  `
                }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], className: [{
                type: Input
            }], showRetry: [{
                type: Input
            }], retry: [{
                type: Output
            }] } });

class ToastService {
    toastsSubject = new BehaviorSubject([]);
    toasts$ = this.toastsSubject.asObservable();
    show(message) {
        const id = Math.random().toString(36).substring(7);
        const current = this.toastsSubject.value;
        this.toastsSubject.next([...current, { id, message }]);
        setTimeout(() => {
            this.remove(id);
        }, 3000);
    }
    remove(id) {
        const current = this.toastsSubject.value;
        this.toastsSubject.next(current.filter(t => t.id !== id));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class ToastComponent {
    toastService;
    toasts$;
    constructor(toastService) {
        this.toastService = toastService;
        this.toasts$;
    }
    remove(id) {
        this.toastService.remove(id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastComponent, deps: [{ token: ToastService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ToastComponent, isStandalone: true, selector: "erb-toast-container", ngImport: i0, template: `
    <div class="erb-toast-container">
      <div class="erb-toast" *ngFor="let toast of toasts$ | async">
        <div class="erb-toast-message">{{ toast.message }}</div>
        <button class="erb-toast-close" (click)="remove(toast.id)">&times;</button>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-toast-container',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-toast-container">
      <div class="erb-toast" *ngFor="let toast of toasts$ | async">
        <div class="erb-toast-message">{{ toast.message }}</div>
        <button class="erb-toast-close" (click)="remove(toast.id)">&times;</button>
      </div>
    </div>
  `
                }]
        }], ctorParameters: () => [{ type: ToastService }] });

class BannerComponent {
    variant = 'info';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BannerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BannerComponent, isStandalone: true, selector: "erb-banner", inputs: { variant: "variant" }, ngImport: i0, template: `<div class="erb-banner erb-banner--{{variant}}" role="alert"><ng-content></ng-content></div>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BannerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-banner',
                    standalone: true,
                    template: `<div class="erb-banner erb-banner--{{variant}}" role="alert"><ng-content></ng-content></div>`,
                }]
        }], propDecorators: { variant: [{
                type: Input
            }] } });

class ProgressComponent {
    value = 0;
    max = 100;
    getPercentage() {
        return Math.min(100, Math.max(0, (this.value / this.max) * 100));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ProgressComponent, isStandalone: true, selector: "erb-progress", inputs: { value: "value", max: "max" }, ngImport: i0, template: `
    <div class="erb-progress" role="progressbar" [attr.aria-valuenow]="value" [attr.aria-valuemin]="0" [attr.aria-valuemax]="max">
      <div class="erb-progress__bar" [style.width.%]="getPercentage()"></div>
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-progress',
                    standalone: true,
                    template: `
    <div class="erb-progress" role="progressbar" [attr.aria-valuenow]="value" [attr.aria-valuemin]="0" [attr.aria-valuemax]="max">
      <div class="erb-progress__bar" [style.width.%]="getPercentage()"></div>
    </div>
  `,
                }]
        }], propDecorators: { value: [{
                type: Input
            }], max: [{
                type: Input
            }] } });

class LoadingOverlayComponent {
    active = true;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LoadingOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LoadingOverlayComponent, isStandalone: true, selector: "erb-loading-overlay", inputs: { active: "active" }, ngImport: i0, template: `
    <div class="erb-loading-overlay" *ngIf="active">
      <div class="erb-loading-overlay__spinner" aria-label="Loading"></div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LoadingOverlayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-loading-overlay',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-loading-overlay" *ngIf="active">
      <div class="erb-loading-overlay__spinner" aria-label="Loading"></div>
    </div>
  `,
                }]
        }], propDecorators: { active: [{
                type: Input
            }] } });

class ImageComponent {
    src = '';
    alt = '';
    lazy = false;
    fallbackText = 'Image not available';
    width;
    height;
    error = false;
    onError() {
        this.error = true;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ImageComponent, isStandalone: true, selector: "erb-image", inputs: { src: "src", alt: "alt", lazy: "lazy", fallbackText: "fallbackText", width: "width", height: "height" }, ngImport: i0, template: `
    <div class="erb-image-wrapper" [ngClass]="{'erb-image--fallback': error || !src}">
      <img *ngIf="!error && src" [src]="src" [alt]="alt" class="erb-image" [attr.loading]="lazy ? 'lazy' : 'eager'" (error)="onError()" [width]="width" [height]="height" />
      <ng-container *ngIf="error || !src">{{fallbackText}}</ng-container>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ImageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-image',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-image-wrapper" [ngClass]="{'erb-image--fallback': error || !src}">
      <img *ngIf="!error && src" [src]="src" [alt]="alt" class="erb-image" [attr.loading]="lazy ? 'lazy' : 'eager'" (error)="onError()" [width]="width" [height]="height" />
      <ng-container *ngIf="error || !src">{{fallbackText}}</ng-container>
    </div>
  `,
                }]
        }], propDecorators: { src: [{
                type: Input
            }], alt: [{
                type: Input
            }], lazy: [{
                type: Input
            }], fallbackText: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });

class GalleryComponent {
    images = [];
    imageClick = new EventEmitter();
    onItemClick(index) {
        this.imageClick.emit(index);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GalleryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: GalleryComponent, isStandalone: true, selector: "erb-gallery", inputs: { images: "images" }, outputs: { imageClick: "imageClick" }, ngImport: i0, template: `
    <div class="erb-gallery">
      <div 
        *ngFor="let img of images; let i = index" 
        class="erb-gallery-item" 
        (click)="onItemClick(i)"
      >
        <img [src]="img.src" [alt]="img.alt" class="erb-gallery-img" />
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GalleryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-gallery',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-gallery">
      <div 
        *ngFor="let img of images; let i = index" 
        class="erb-gallery-item" 
        (click)="onItemClick(i)"
      >
        <img [src]="img.src" [alt]="img.alt" class="erb-gallery-img" />
      </div>
    </div>
  `
                }]
        }], propDecorators: { images: [{
                type: Input
            }], imageClick: [{
                type: Output
            }] } });

class LightboxComponent {
    isOpen = false;
    imageSrc;
    imageAlt;
    close = new EventEmitter();
    onEscape() {
        if (this.isOpen) {
            this.close.emit();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LightboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LightboxComponent, isStandalone: true, selector: "erb-lightbox", inputs: { isOpen: "isOpen", imageSrc: "imageSrc", imageAlt: "imageAlt" }, outputs: { close: "close" }, host: { listeners: { "window:keydown.escape": "onEscape($event)" } }, ngImport: i0, template: `
    <div class="erb-lightbox" *ngIf="isOpen" (click)="close.emit()" role="dialog" aria-modal="true">
      <div class="erb-lightbox-content" (click)="$event.stopPropagation()">
        <button class="erb-lightbox-close" (click)="close.emit()" aria-label="Close">
          &times;
        </button>
        <img *ngIf="imageSrc" [src]="imageSrc" [alt]="imageAlt" class="erb-lightbox-img" />
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LightboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-lightbox',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-lightbox" *ngIf="isOpen" (click)="close.emit()" role="dialog" aria-modal="true">
      <div class="erb-lightbox-content" (click)="$event.stopPropagation()">
        <button class="erb-lightbox-close" (click)="close.emit()" aria-label="Close">
          &times;
        </button>
        <img *ngIf="imageSrc" [src]="imageSrc" [alt]="imageAlt" class="erb-lightbox-img" />
      </div>
    </div>
  `
                }]
        }], propDecorators: { isOpen: [{
                type: Input
            }], imageSrc: [{
                type: Input
            }], imageAlt: [{
                type: Input
            }], close: [{
                type: Output
            }], onEscape: [{
                type: HostListener,
                args: ['window:keydown.escape', ['$event']]
            }] } });

class CarouselComponent {
    images = [];
    currentIndex = 0;
    next() {
        if (this.images.length > 0) {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    }
    prev() {
        if (this.images.length > 0) {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CarouselComponent, isStandalone: true, selector: "erb-carousel", inputs: { images: "images" }, ngImport: i0, template: `
    <div class="erb-carousel" *ngIf="images && images.length > 0">
      <div 
        class="erb-carousel-track" 
        [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'"
      >
        <div *ngFor="let img of images" class="erb-carousel-item">
          <img [src]="img.src" [alt]="img.alt" style="width: 100%; display: block;" />
        </div>
      </div>
      <div class="erb-carousel-controls">
        <button class="erb-carousel-btn" (click)="prev()" aria-label="Previous">&lt;</button>
        <button class="erb-carousel-btn" (click)="next()" aria-label="Next">&gt;</button>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-carousel',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <div class="erb-carousel" *ngIf="images && images.length > 0">
      <div 
        class="erb-carousel-track" 
        [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'"
      >
        <div *ngFor="let img of images" class="erb-carousel-item">
          <img [src]="img.src" [alt]="img.alt" style="width: 100%; display: block;" />
        </div>
      </div>
      <div class="erb-carousel-controls">
        <button class="erb-carousel-btn" (click)="prev()" aria-label="Previous">&lt;</button>
        <button class="erb-carousel-btn" (click)="next()" aria-label="Next">&gt;</button>
      </div>
    </div>
  `
                }]
        }], propDecorators: { images: [{
                type: Input
            }] } });

class HeroComponent {
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: HeroComponent, isStandalone: true, selector: "erb-hero", inputs: { className: "className" }, ngImport: i0, template: `<div class="erb-hero {{className}}"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-hero{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-hero{padding:var(--erb-spacing-8, 2rem)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-hero', standalone: true, imports: [CommonModule], template: `<div class="erb-hero {{className}}"><ng-content></ng-content></div>`, styles: [".erb-hero{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-hero{padding:var(--erb-spacing-8, 2rem)}}\n"] }]
        }], propDecorators: { className: [{
                type: Input
            }] } });

class FeatureGridComponent {
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FeatureGridComponent, isStandalone: true, selector: "erb-featuregrid", inputs: { className: "className" }, ngImport: i0, template: `<div class="erb-featuregrid {{className}}"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-featuregrid{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-featuregrid{padding:var(--erb-spacing-8, 2rem)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-featuregrid', standalone: true, imports: [CommonModule], template: `<div class="erb-featuregrid {{className}}"><ng-content></ng-content></div>`, styles: [".erb-featuregrid{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-featuregrid{padding:var(--erb-spacing-8, 2rem)}}\n"] }]
        }], propDecorators: { className: [{
                type: Input
            }] } });

class CTAComponent {
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CTAComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CTAComponent, isStandalone: true, selector: "erb-cta", inputs: { className: "className" }, ngImport: i0, template: `<div class="erb-cta {{className}}"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-cta{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-cta{padding:var(--erb-spacing-8, 2rem)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CTAComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-cta', standalone: true, imports: [CommonModule], template: `<div class="erb-cta {{className}}"><ng-content></ng-content></div>`, styles: [".erb-cta{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-cta{padding:var(--erb-spacing-8, 2rem)}}\n"] }]
        }], propDecorators: { className: [{
                type: Input
            }] } });

class TestimonialComponent {
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TestimonialComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TestimonialComponent, isStandalone: true, selector: "erb-testimonial", inputs: { className: "className" }, ngImport: i0, template: `<div class="erb-testimonial {{className}}"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-testimonial{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-testimonial{padding:var(--erb-spacing-8, 2rem)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TestimonialComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-testimonial', standalone: true, imports: [CommonModule], template: `<div class="erb-testimonial {{className}}"><ng-content></ng-content></div>`, styles: [".erb-testimonial{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-testimonial{padding:var(--erb-spacing-8, 2rem)}}\n"] }]
        }], propDecorators: { className: [{
                type: Input
            }] } });

class LogoCloudComponent {
    className = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoCloudComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LogoCloudComponent, isStandalone: true, selector: "erb-logocloud", inputs: { className: "className" }, ngImport: i0, template: `<div class="erb-logocloud {{className}}"><ng-content></ng-content></div>`, isInline: true, styles: [".erb-logocloud{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-logocloud{padding:var(--erb-spacing-8, 2rem)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoCloudComponent, decorators: [{
            type: Component,
            args: [{ selector: 'erb-logocloud', standalone: true, imports: [CommonModule], template: `<div class="erb-logocloud {{className}}"><ng-content></ng-content></div>`, styles: [".erb-logocloud{display:flex;flex-direction:column;padding:var(--erb-spacing-6, 1.5rem);gap:var(--erb-spacing-4, 1rem);background-color:var(--erb-color-bg-base, #ffffff);color:var(--erb-color-text-base, #000000)}@media (min-width: 768px){.erb-logocloud{padding:var(--erb-spacing-8, 2rem)}}\n"] }]
        }], propDecorators: { className: [{
                type: Input
            }] } });

class FAQComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FAQComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FAQComponent, isStandalone: true, selector: "erb-faq", host: { classAttribute: "erb-faq" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FAQComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-faq',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-faq'
                    }
                }]
        }] });

class CommandPaletteComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CommandPaletteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CommandPaletteComponent, isStandalone: true, selector: "erb-command-palette", host: { classAttribute: "erb-command-palette" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CommandPaletteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-command-palette',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-command-palette'
                    }
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AppShellComponent, AspectRatioComponent, AvatarComponent, AvatarGroupComponent, BadgeComponent, BannerComponent, BottomNavComponent, BreadcrumbComponent, ButtonGroupComponent, CTAComponent, CalloutComponent, CarouselComponent, CenterComponent, CodeComponent, ColorPickerComponent, ComboboxComponent, CommandPaletteComponent, ContainerComponent, DividerComponent, EmptyStateComponent, ErbAlertComponent, ErbAlertDialogBodyComponent, ErbAlertDialogContentComponent, ErbAlertDialogDescriptionComponent, ErbAlertDialogFooterComponent, ErbAlertDialogHeaderComponent, ErbAlertDialogOverlayComponent, ErbAlertDialogTitleComponent, ErbButtonDirective, ErbCardBodyComponent, ErbCardComponent, ErbCardDescriptionComponent, ErbCardFooterComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCheckboxComponent, ErbCheckboxGroupComponent, ErbDatePickerComponent, ErbDateRangePickerComponent, ErbDescriptionDetailsComponent, ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDrawerBodyComponent, ErbDrawerContentComponent, ErbDrawerDescriptionComponent, ErbDrawerFooterComponent, ErbDrawerHeaderComponent, ErbDrawerOverlayComponent, ErbDrawerTitleComponent, ErbFieldComponent, ErbFooterComponent, ErbHeaderComponent, ErbIconButtonDirective, ErbInputDirective, ErbInputWrapperComponent, ErbLabelComponent, ErbListComponent, ErbListItemComponent, ErbMenuComponent, ErbMenuItemDirective, ErbMenuSeparatorComponent, ErbModalBodyComponent, ErbModalContentComponent, ErbModalDescriptionComponent, ErbModalFooterComponent, ErbModalHeaderComponent, ErbModalOverlayComponent, ErbModalTitleComponent, ErbNumberInputComponent, ErbPanelBodyComponent, ErbPanelComponent, ErbPanelFooterComponent, ErbPanelHeaderComponent, ErbPanelOverlayComponent, ErbPanelTitleComponent, ErbPopoverComponent, ErbRadioComponent, ErbRadioGroupComponent, ErbSearchInputComponent, ErbSelectDirective, ErbStatComponent, ErbSwitchComponent, ErbTabDirective, ErbTableBodyComponent, ErbTableCellComponent, ErbTableComponent, ErbTableHeadComponent, ErbTableHeaderCellComponent, ErbTableRowComponent, ErbTabsComponent, ErbTabsListComponent, ErbTabsPanelComponent, ErbTextareaDirective, ErbTimePickerComponent, ErbTooltipComponent, ErrorStateComponent, FAQComponent, FeatureGridComponent, FileUploadComponent, FlexComponent, FocusTrapDirective, GalleryComponent, GridComponent, GridItemComponent, HeadingComponent, HeroComponent, ImageComponent, InlineComponent, KbdComponent, LayerManagerService, LightboxComponent, LoadingOverlayComponent, LogoCloudComponent, MobileNavComponent, MultiSelectComponent, PaginationComponent, PinInputComponent, PortalDirective, ProgressComponent, ProseComponent, RangeSliderComponent, RatingComponent, ScrollAreaComponent, ScrollLockDirective, SectionComponent, SidebarComponent, SkeletonComponent, SkipLinkComponent, SliderComponent, SpacerComponent, SpinnerComponent, SplitComponent, StackComponent, StepperComponent, TagComponent, TagsInputComponent, TestimonialComponent, TextComponent, TimelineComponent, TimelineItemComponent, ToastComponent, ToastService, TransitionDirective };
//# sourceMappingURL=glowing-sea-studio-erebus-angular.mjs.map
