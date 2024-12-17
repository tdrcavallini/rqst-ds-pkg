import { App } from 'vue';
import { ComponentConstructor } from 'quasar';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { QBadge } from 'quasar';
import { QBanner } from 'quasar';
import { QBtn } from 'quasar';
import { QIcon } from 'quasar';
import { QInput } from 'quasar';
import { QSelect } from 'quasar';

export declare type BadgeColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export declare type BadgeVariant = 'solid' | 'outlined';

export declare type BannerSize = 'small' | 'medium';

export declare type BannerVariant = 'info' | 'success' | 'warning' | 'error';

export declare type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

declare type ButtonColor_2 = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export declare type ButtonSize = 'small' | 'medium' | 'large';

declare type ButtonSize_2 = 'small' | 'medium' | 'large';

export declare type ButtonVariant = 'solid' | 'outlined' | 'text';

declare type ButtonVariant_2 = 'solid' | 'outlined' | 'text';

declare const _default: {
    install: (app: App) => void;
};
export default _default;

export declare const MyBadge: DefineComponent<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<BadgeVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<BadgeColor>;
default: string;
validator: (value: string) => boolean;
};
floating: {
type: BooleanConstructor;
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
className: {
type: StringConstructor;
default: string;
};
}>, {
mapColorToQuasar: ComputedRef<string>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<BadgeVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<BadgeColor>;
default: string;
validator: (value: string) => boolean;
};
floating: {
type: BooleanConstructor;
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
className: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
label: string;
variant: BadgeVariant;
color: BadgeColor;
className: string;
rounded: boolean;
floating: boolean;
}, {}, {
QBadge: ComponentConstructor<QBadge>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MyBanner: DefineComponent<ExtractPropTypes<    {
message: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<BannerVariant>;
default: string;
validator: (value: string) => boolean;
};
icon: {
type: StringConstructor;
default: string;
};
size: {
type: PropType<BannerSize>;
default: string;
validator: (value: string) => boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
inlineActions: {
type: BooleanConstructor;
default: boolean;
};
className: {
type: StringConstructor;
default: string;
};
}>, {
mapColorToQuasar: ComputedRef<string>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
message: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<BannerVariant>;
default: string;
validator: (value: string) => boolean;
};
icon: {
type: StringConstructor;
default: string;
};
size: {
type: PropType<BannerSize>;
default: string;
validator: (value: string) => boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
inlineActions: {
type: BooleanConstructor;
default: boolean;
};
className: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
variant: BannerVariant;
size: BannerSize;
className: string;
icon: string;
rounded: boolean;
message: string;
inlineActions: boolean;
}, {}, {
QBanner: ComponentConstructor<QBanner>;
QIcon: ComponentConstructor<QIcon>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MyButton: DefineComponent<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<ButtonVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<ButtonColor>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<ButtonSize>;
default: string;
validator: (value: string) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
startIcon: {
type: StringConstructor;
default: string;
};
endIcon: {
type: StringConstructor;
default: string;
};
className: {
type: StringConstructor;
default: string;
};
}>, {
mapVariantToQuasar: ComputedRef<string>;
mapSizeToQuasar: ComputedRef<string>;
onClick: (event: MouseEvent) => void;
useLabelInsteadOfSlot: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", PublicProps, Readonly<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<ButtonVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<ButtonColor>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<ButtonSize>;
default: string;
validator: (value: string) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
startIcon: {
type: StringConstructor;
default: string;
};
endIcon: {
type: StringConstructor;
default: string;
};
className: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {
label: string;
variant: ButtonVariant;
color: ButtonColor;
size: ButtonSize;
disabled: boolean;
loading: boolean;
startIcon: string;
endIcon: string;
className: string;
}, {}, {
QBtn: ComponentConstructor<QBtn>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MyCard: DefineComponent<ExtractPropTypes<    {
imageUrl: {
type: StringConstructor;
default: string;
};
imageAlt: {
type: StringConstructor;
default: string;
};
date: {
type: (StringConstructor | DateConstructor)[];
default: null;
};
title: {
type: StringConstructor;
required: true;
};
excerpt: {
type: StringConstructor;
required: true;
};
ctaLabel: {
type: StringConstructor;
default: string;
};
ctaVariant: {
type: StringConstructor;
default: string;
};
ctaColor: {
type: StringConstructor;
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>, {
formatDate: (date: Date | string) => string;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "cta-click"[], "cta-click", PublicProps, Readonly<ExtractPropTypes<    {
imageUrl: {
type: StringConstructor;
default: string;
};
imageAlt: {
type: StringConstructor;
default: string;
};
date: {
type: (StringConstructor | DateConstructor)[];
default: null;
};
title: {
type: StringConstructor;
required: true;
};
excerpt: {
type: StringConstructor;
required: true;
};
ctaLabel: {
type: StringConstructor;
default: string;
};
ctaVariant: {
type: StringConstructor;
default: string;
};
ctaColor: {
type: StringConstructor;
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{
"onCta-click"?: ((...args: any[]) => any) | undefined;
}>, {
rounded: boolean;
date: string | Date;
imageUrl: string;
imageAlt: string;
ctaLabel: string;
ctaVariant: string;
ctaColor: string;
}, {}, {
MyButton: DefineComponent<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<ButtonVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<ButtonColor>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<ButtonSize>;
default: string;
validator: (value: string) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
startIcon: {
type: StringConstructor;
default: string;
};
endIcon: {
type: StringConstructor;
default: string;
};
className: {
type: StringConstructor;
default: string;
};
}>, {
mapVariantToQuasar: ComputedRef<string>;
mapSizeToQuasar: ComputedRef<string>;
onClick: (event: MouseEvent) => void;
useLabelInsteadOfSlot: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", PublicProps, Readonly<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<ButtonVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<ButtonColor>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<ButtonSize>;
default: string;
validator: (value: string) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
startIcon: {
type: StringConstructor;
default: string;
};
endIcon: {
type: StringConstructor;
default: string;
};
className: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {
label: string;
variant: ButtonVariant;
color: ButtonColor;
size: ButtonSize;
disabled: boolean;
loading: boolean;
startIcon: string;
endIcon: string;
className: string;
}, {}, {
QBtn: ComponentConstructor<QBtn>;
}, {}, string, ComponentProvideOptions, true, {}, any>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MyCardCompany: DefineComponent<ExtractPropTypes<    {
company: {
type: () => {
symbol: string;
name: string;
exchange: string;
currency: string;
open: number;
high: number;
low: number;
close: number;
volume: number;
};
required: true;
};
variant: {
type: () => "info" | "warning" | "success" | "error";
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>, {
variantClasses: ComputedRef<"bg-green-50 border-green-500" | "bg-yellow-50 border-yellow-500" | "bg-red-50 border-red-500" | "bg-blue-50 border-blue-500">;
iconClasses: ComputedRef<"stroke-green-500" | "stroke-yellow-500" | "stroke-red-500" | "stroke-blue-500">;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
company: {
type: () => {
symbol: string;
name: string;
exchange: string;
currency: string;
open: number;
high: number;
low: number;
close: number;
volume: number;
};
required: true;
};
variant: {
type: () => "info" | "warning" | "success" | "error";
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{}>, {
variant: "success" | "error" | "warning" | "info";
rounded: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MyCardVuetify: DefineComponent<ExtractPropTypes<    {
imageUrl: {
type: StringConstructor;
default: string;
};
imageAlt: {
type: StringConstructor;
default: string;
};
date: {
type: (StringConstructor | DateConstructor)[];
default: null;
};
title: {
type: StringConstructor;
required: true;
};
excerpt: {
type: StringConstructor;
required: true;
};
ctaLabel: {
type: StringConstructor;
default: string;
};
ctaVariant: {
type: StringConstructor;
default: string;
};
ctaColor: {
type: StringConstructor;
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>, {
formatDate: (date: Date | string) => string;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "cta-click"[], "cta-click", PublicProps, Readonly<ExtractPropTypes<    {
imageUrl: {
type: StringConstructor;
default: string;
};
imageAlt: {
type: StringConstructor;
default: string;
};
date: {
type: (StringConstructor | DateConstructor)[];
default: null;
};
title: {
type: StringConstructor;
required: true;
};
excerpt: {
type: StringConstructor;
required: true;
};
ctaLabel: {
type: StringConstructor;
default: string;
};
ctaVariant: {
type: StringConstructor;
default: string;
};
ctaColor: {
type: StringConstructor;
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{
"onCta-click"?: ((...args: any[]) => any) | undefined;
}>, {
rounded: boolean;
date: string | Date;
imageUrl: string;
imageAlt: string;
ctaLabel: string;
ctaVariant: string;
ctaColor: string;
}, {}, {
MyButtonPureCss: DefineComponent<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<ButtonVariant_2>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<ButtonColor_2>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<ButtonSize_2>;
default: string;
validator: (value: string) => boolean;
};
type: {
type: PropType<"button" | "submit" | "reset">;
default: string;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
startIcon: {
type: StringConstructor;
default: string;
};
endIcon: {
type: StringConstructor;
default: string;
};
className: {
type: StringConstructor;
default: string;
};
}>, {
onClick: (event: MouseEvent) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", PublicProps, Readonly<ExtractPropTypes<    {
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<ButtonVariant_2>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<ButtonColor_2>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<ButtonSize_2>;
default: string;
validator: (value: string) => boolean;
};
type: {
type: PropType<"button" | "submit" | "reset">;
default: string;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
startIcon: {
type: StringConstructor;
default: string;
};
endIcon: {
type: StringConstructor;
default: string;
};
className: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {
label: string;
type: "button" | "submit" | "reset";
variant: ButtonVariant_2;
color: ButtonColor_2;
size: ButtonSize_2;
disabled: boolean;
loading: boolean;
startIcon: string;
endIcon: string;
className: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MyInputText: DefineComponent<ExtractPropTypes<    {
modelValue: {
type: (StringConstructor | NumberConstructor)[];
default: string;
};
label: {
type: StringConstructor;
default: undefined;
};
placeholder: {
type: StringConstructor;
default: undefined;
};
type: {
type: PropType<"text" | "password" | "textarea" | "email" | "search" | "tel" | "file" | "number" | "url">;
default: string;
};
color: {
type: StringConstructor;
default: string;
};
bgColor: {
type: StringConstructor;
default: undefined;
};
outlined: {
type: BooleanConstructor;
default: boolean;
};
borderless: {
type: BooleanConstructor;
default: boolean;
};
standout: {
type: PropType<boolean | string>;
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
square: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
clearable: {
type: BooleanConstructor;
default: boolean;
};
clearIcon: {
type: StringConstructor;
default: undefined;
};
disable: {
type: BooleanConstructor;
default: boolean;
};
readonly: {
type: BooleanConstructor;
default: boolean;
};
autofocus: {
type: BooleanConstructor;
default: boolean;
};
error: {
type: BooleanConstructor;
default: boolean;
};
errorMessage: {
type: StringConstructor;
default: undefined;
};
hint: {
type: StringConstructor;
default: undefined;
};
prefix: {
type: StringConstructor;
default: undefined;
};
suffix: {
type: StringConstructor;
default: undefined;
};
mask: {
type: StringConstructor;
default: undefined;
};
rules: {
type: PropType<Array<(val: string) => boolean | string>>;
default: () => never[];
};
validateOnBlur: {
type: BooleanConstructor;
default: boolean;
};
maxlength: {
type: (StringConstructor | NumberConstructor)[];
default: undefined;
};
counter: {
type: BooleanConstructor;
default: boolean;
};
bottomSlots: {
type: BooleanConstructor;
default: boolean;
};
}>, {
updateValue: (value: string | number | null) => void;
onBlur: (evt: FocusEvent) => void;
onFocus: (evt: FocusEvent) => void;
onClear: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("clear" | "update:model-value" | "blur" | "focus")[], "clear" | "update:model-value" | "blur" | "focus", PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: (StringConstructor | NumberConstructor)[];
default: string;
};
label: {
type: StringConstructor;
default: undefined;
};
placeholder: {
type: StringConstructor;
default: undefined;
};
type: {
type: PropType<"text" | "password" | "textarea" | "email" | "search" | "tel" | "file" | "number" | "url">;
default: string;
};
color: {
type: StringConstructor;
default: string;
};
bgColor: {
type: StringConstructor;
default: undefined;
};
outlined: {
type: BooleanConstructor;
default: boolean;
};
borderless: {
type: BooleanConstructor;
default: boolean;
};
standout: {
type: PropType<boolean | string>;
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
square: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
clearable: {
type: BooleanConstructor;
default: boolean;
};
clearIcon: {
type: StringConstructor;
default: undefined;
};
disable: {
type: BooleanConstructor;
default: boolean;
};
readonly: {
type: BooleanConstructor;
default: boolean;
};
autofocus: {
type: BooleanConstructor;
default: boolean;
};
error: {
type: BooleanConstructor;
default: boolean;
};
errorMessage: {
type: StringConstructor;
default: undefined;
};
hint: {
type: StringConstructor;
default: undefined;
};
prefix: {
type: StringConstructor;
default: undefined;
};
suffix: {
type: StringConstructor;
default: undefined;
};
mask: {
type: StringConstructor;
default: undefined;
};
rules: {
type: PropType<Array<(val: string) => boolean | string>>;
default: () => never[];
};
validateOnBlur: {
type: BooleanConstructor;
default: boolean;
};
maxlength: {
type: (StringConstructor | NumberConstructor)[];
default: undefined;
};
counter: {
type: BooleanConstructor;
default: boolean;
};
bottomSlots: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{
onFocus?: ((...args: any[]) => any) | undefined;
onBlur?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
"onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}>, {
outlined: boolean;
error: boolean;
label: string;
type: "number" | "text" | "search" | "textarea" | "password" | "email" | "tel" | "file" | "url";
color: string;
loading: boolean;
rounded: boolean;
square: boolean;
disable: boolean;
modelValue: string | number;
errorMessage: string;
rules: ((val: string) => boolean | string)[];
hint: string;
prefix: string;
suffix: string;
bgColor: string;
clearable: boolean;
clearIcon: string;
borderless: boolean;
standout: string | boolean;
bottomSlots: boolean;
counter: boolean;
readonly: boolean;
autofocus: boolean;
maxlength: string | number;
mask: string;
placeholder: string;
validateOnBlur: boolean;
}, {}, {
QInput: ComponentConstructor<QInput>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MySelect: DefineComponent<ExtractPropTypes<    {
modelValue: {
type: (StringConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
default: null;
};
options: {
type: PropType<SelectOption[]>;
default: () => never[];
};
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<SelectVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<SelectColor>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<SelectSize>;
default: string;
validator: (value: string) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
className: {
type: StringConstructor;
default: string;
};
}>, {
mapColorToQuasar: ComputedRef<string>;
mapSizeToQuasar: ComputedRef<string>;
onSelect: (value: unknown) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: (StringConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
default: null;
};
options: {
type: PropType<SelectOption[]>;
default: () => never[];
};
label: {
type: StringConstructor;
default: string;
};
variant: {
type: PropType<SelectVariant>;
default: string;
validator: (value: string) => boolean;
};
color: {
type: PropType<SelectColor>;
default: string;
validator: (value: string) => boolean;
};
size: {
type: PropType<SelectSize>;
default: string;
validator: (value: string) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
loading: {
type: BooleanConstructor;
default: boolean;
};
className: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onChange?: ((...args: any[]) => any) | undefined;
}>, {
label: string;
variant: SelectVariant;
color: SelectColor;
size: SelectSize;
disabled: boolean;
loading: boolean;
className: string;
modelValue: string | number | Record<string, any> | unknown[];
options: SelectOption[];
}, {}, {
QSelect: ComponentConstructor<QSelect>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const MySkeleton: DefineComponent<ExtractPropTypes<    {
lines: {
type: NumberConstructor;
default: number;
validator: (value: number) => boolean;
};
className: {
type: StringConstructor;
default: string;
};
speed: {
type: StringConstructor;
default: string;
validator: (value: string) => boolean;
};
}>, {
getLineWidth: (index: number) => string;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
lines: {
type: NumberConstructor;
default: number;
validator: (value: number) => boolean;
};
className: {
type: StringConstructor;
default: string;
};
speed: {
type: StringConstructor;
default: string;
validator: (value: string) => boolean;
};
}>> & Readonly<{}>, {
className: string;
lines: number;
speed: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare type SelectColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export declare interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
}

export declare type SelectSize = 'small' | 'medium' | 'large';

export declare type SelectVariant = 'solid' | 'outlined' | 'text';

export { }
