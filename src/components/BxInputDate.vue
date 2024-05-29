<template>
  <vue-datepicker
    :model-value="modelValue"
    :range="range"
    :auto-range="autoRange"
    :multi-calendars="multiCalendars"
    :month-picker="monthPicker"
    :time-picker="timePicker"
    :year-picker="yearPicker"
    :week-picker="weekPicker"
    :text-input="textInput"
    :inline="inline"
    :multi-dates="multiDates"
    :flow="flow"
    :utc="utc"
    :vertical="vertical"
    :model-auto="modelAuto"
    :timezone="timezone"
    :partial-range="partialRange"
    :preset-ranges="presetRanges"
    :min-range="minRange"
    :max-range="maxRange"
    :fixed-start="fixedStart"
    :fixed-end="fixedEnd"
    :multi-calendars-solo="multiCalendarsSolo"
    :multi-static="multiStatic"
    :text-input-options="textInputOptions"
    :mode-height="modeHeight"
    :inline-with-input="inlineWithInput"
    :multi-dates-limit="multiDatesLimit"
    :partial-flow="partialFlow"
    :show-last-in-range="showLastInRange"
    :auto-apply-month="autoApplyMonth"
    :uid="uid"
    :month-change-on-scroll="monthChangeOnScroll"
    :model-type="modelType"
    :clearable="clearable"
    :close-on-scroll="closeOnScroll"
    :auto-apply="autoApply"
    :placeholder="placeholder"
    :no-today="noToday"
    :close-on-auto-apply="closeOnAutoApply"
    :markers="markers"
    :highlight="highlight"
    :highlight-week-days="highlightWeekDays"
    :highlight-disabled-days="highlightDisabledDays"
    :show-now-button="showNowButton"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :name="name"
    :autocomplete="autocomplete"
    :keep-action-row="keepActionRow"
    :no-swipe="noSwipe"
    :hide-navigation="hideNavigation"
    :on-click-outside="onClickOutside"
    :action-row="actionRow"
    :disable-year-select="disableYearSelect"
    :close-on-clear-value="closeOnClearValue"
    :calendar="calendar"
    :week-numbers="weekNumbers"
    :hide-offset-dates="hideOffsetDates"
    :min-date="minDate"
    :max-date="maxDate"
    :prevent-min-max-navigation="preventMinMaxNavigation"
    :ignore-time-validation="ignoreTimeValidation"
    :start-date="startDate"
    :focus-start-date="focusStartDate"
    :week-start="weekStart"
    :filters="filters"
    :disable-month-year-select="disableMonthYearSelect"
    :year-range="yearRange"
    :reverse-years="reverseYears"
    :allowed-dates="allowedDates"
    :disabled-dates="disabledDates"
    :disabled-week-days="disabledWeekDays"
    :no-disabled-range="noDisabledRange"
    :time-picker-inline="timePickerInline"
    :enable-time-picker="enableTimePicker"
    :is-24="is24"
    :enable-seconds="enableSeconds"
    :hours-increment="hoursIncrement"
    :minutes-increment="minutesIncrement"
    :seconds-increment="secondsIncrement"
    :hours-grid-increment="hoursGridIncrement"
    :minutes-grid-increment="minutesGridIncrement"
    :seconds-grid-increment="secondsGridIncrement"
    :no-hours-overlay="noHoursOverlay"
    :no-minutes-overlay="noMinutesOverlay"
    :no-seconds-overlay="noSecondsOverlay"
    :min-time="minTime"
    :max-time="maxTime"
    :start-time="startTime"
    :disable-time-range-validation="disableTimeRangeValidation"
    :disabled-times="disabledTimes"
    :format="format"
    :preview-format="previewFormat"
    :month-name-format="monthNameFormat"
    :locale="locale"
    :format-locale="formatLocale"
    :select-text="selectText"
    :cancel-text="cancelText"
    :now-button-label="nowButtonLabel"
    :week-num-name="weekNumName"
    :aria-labels="ariaLabels"
    :day-names="dayNames"
    :position="position"
    :teleport="teleport"
    :alt-position="altPosition"
    :auto-position="autoPosition"
    :teleport-center="teleportCenter"
    :allow-prevent-default="allowPreventDefault"
    :esc-close="escClose"
    :space-confirm="spaceConfirm"
    :month-change-on-arrows="monthChangeOnArrows"
    :arrow-navigation="arrowNavigation"
    :transitions="transitions"
    :six-weeks="sixWeeks"
    :dark="dark"
    :offset="offset"
    :hide-input-icon="hideInputIcon"
    :state="state"
    :input-class-name="inputClassName"
    :menu-class-name="menuClassName"
    :calendar-class-name="calendarClassName"
    :calendar-cell-class-name="calendarCellClassName"
    :day-class="dayClass"
    @update:model-value="$emit('update:modelValue', $event)"
    @text-submit="$emit('text-submit')"
    @open="$emit('open')"
    @closed="$emit('closed')"
    @cleared="$emit('cleared')"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @internal-model-change="$emit('internal-model-change', $event)"
    @recalculate-position="$emit('recalculate-position')"
    @flow-step="$emit('flow-step', $event)"
    @update-month-year="$emit('update-month-year', $event)"
    @invalid-select="$emit('invalid-select', $event)"
    @invalid-fixed-range="$emit('invalid-fixed-range', $event)"
    @tooltip-open="$emit('tooltip-open', $event)"
    @tooltip-close="$emit('tooltip-close', $event)"
    @time-picker-open="$emit('time-picker-open')"
    @time-picker-close="$emit('time-picker-close')"
    @am-pm-change="$emit('am-pm-change', $event)"
    @range-start="$emit('range-start', $event)"
    @range-end="$emit('range-end', $event)"
  >
    <template v-if="$slots['month-year']" #month-year="slotScope">
      <slot name="month-year" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['time-picker']" #time-picker="slotScope">
      <slot name="time-picker" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['action-row']" #action-row="slotScope">
      <slot name="action-row" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['calendar-header']" #calendar-header="slotScope">
      <slot name="calendar-header" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['day']" #day="slotScope">
      <slot name="day" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['action-buttons']" #action-buttons="slotScope">
      <slot name="action-buttons" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['action-preview']" #action-preview="slotScope">
      <slot name="action-preview" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['action-extra']" #action-extra="slotScope">
      <slot name="action-extra" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['am-pm-button']" #am-pm-button="slotScope">
      <slot name="am-pm-button" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['left-sidebar']" #left-sidebar="slotScope">
      <slot name="left-sidebar" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['right-sidebar']" #right-sidebar="slotScope">
      <slot name="right-sidebar" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['marker-tooltip']" #marker-tooltip="slotScope">
      <slot name="marker-tooltip" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['marker']" #marker="slotScope">
      <slot name="marker" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['trigger']" #trigger="slotScope">
      <slot name="trigger" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['dp-input']" #dp-input="slotScope">
      <slot name="dp-input" v-bind="slotScope"></slot>
    </template>
    <template v-else #dp-input="{ value, onInput, onEnter, onTab }">
      <div
        class="ui-ctl"
        :class="{
          'ui-ctl-after-icon': after === 'after',
          'ui-ctl-ext-after-icon': after === 'ext-after',
        }"
        style="width: 100%"
      >
        <button
          class="ui-ctl-icon-calendar"
          :class="{
            'ui-ctl-after': after === 'after',
            'ui-ctl-ext-after': after === 'ext-after',
          }"
        ></button>
        <input
          class="ui-ctl-element"
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
        />
      </div>
    </template>
    <template v-if="$slots['input-icon']" #input-icon="slotScope">
      <slot name="input-icon" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['clear-icon']" #clear-icon="slotScope">
      <slot name="clear-icon" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['clock-icon']" #clock-icon="slotScope">
      <slot name="clock-icon" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['arrow-left']" #arrow-left="slotScope">
      <slot name="arrow-left" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['arrow-right']" #arrow-right="slotScope">
      <slot name="arrow-right" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['arrow-up']" #arrow-up="slotScope">
      <slot name="arrow-up" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['arrow-down']" #arrow-down="slotScope">
      <slot name="arrow-down" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['calendar-icon']" #calendar-icon="slotScope">
      <slot name="calendar-icon" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['time-picker-overlay']" #time-picker-overlay="slotScope">
      <slot name="time-picker-overlay" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['hours']" #hours="slotScope">
      <slot name="hours" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['minutes']" #minutes="slotScope">
      <slot name="minutes" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['hours-overlay-value']" #hours-overlay-value="slotScope">
      <slot name="hours-overlay-value" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['minutes-overlay-value']" #minutes-overlay-value="slotScope">
      <slot name="minutes-overlay-value" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['month']" #month="slotScope">
      <slot name="month" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['year']" #year="slotScope">
      <slot name="year" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['month-overlay-value']" #month-overlay-value="slotScope">
      <slot name="month-overlay-value" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['year-overlay-value']" #year-overlay-value="slotScope">
      <slot name="year-overlay-value" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['month-overlay']" #month-overlay="slotScope">
      <slot name="month-overlay" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['year-overlay']" #year-overlay="slotScope">
      <slot name="year-overlay" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['month-overlay-header']" #month-overlay-header="slotScope">
      <slot name="month-overlay-header" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['year-overlay-header']" #year-overlay-header="slotScope">
      <slot name="year-overlay-header" v-bind="slotScope"></slot>
    </template>
  </vue-datepicker>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import VueDatepicker from '@vuepic/vue-datepicker';
import injectStyles from '../mixins/injectStyles';

export type PropFieldsTimes =
  | 'month'
  | 'year'
  | 'calendar'
  | 'time'
  | 'minutes'
  | 'hours'
  | 'seconds';
export type PropAfter = 'after' | 'ext-after';
export type PropUtc = true | false | 'preserve';
export type PropMonthChangeOnScrolls = true | false | 'inverse';
export type PropWeekNumbers = 'local' | 'iso';
export type PropMonthNameFormats = 'short' | 'long';
export type PropPositions = 'left' | 'center' | 'right';
export type PropSixWeeks = true | false | 'append' | 'prepend' | 'center' | 'fair';

export type TypesProps = {
  after: PropAfter[];
  flows: PropFieldsTimes[];
  utc: PropUtc[];
  monthChangeOnScrolls: PropMonthChangeOnScrolls[];
  hideNavigations: PropFieldsTimes[];
  weekNumbers: PropWeekNumbers[];
  monthNameFormats: PropMonthNameFormats[];
  positions: PropPositions[];
  sixWeeks: PropSixWeeks[];
};

const fieldsTimes: PropFieldsTimes[] = [
  'month',
  'year',
  'calendar',
  'time',
  'minutes',
  'hours',
  'seconds',
];

export const props: TypesProps = {
  after: ['after', 'ext-after'],
  flows: fieldsTimes,
  utc: [true, false, 'preserve'],
  monthChangeOnScrolls: [true, false, 'inverse'],
  hideNavigations: fieldsTimes,
  weekNumbers: ['local', 'iso'],
  monthNameFormats: ['short', 'long'],
  positions: ['left', 'center', 'right'],
  sixWeeks: [true, false, 'append', 'prepend', 'center', 'fair'],
};

export default defineComponent({
  mixins: [injectStyles],
  emits: [
    'update:modelValue',
    'text-submit',
    'open',
    'closed',
    'cleared',
    'focus',
    'blur',
    'internal-model-change',
    'recalculate-position',
    'flow-step',
    'update-month-year',
    'invalid-select',
    'invalid-fixed-range',
    'tooltip-open',
    'tooltip-close',
    'time-picker-open',
    'time-picker-close',
    'am-pm-change',
    'range-start',
    'range-end',
  ],
  props: {
    modelValue: {
      type: [Date, Number, String, Object, Array],
      required: true,
      default: null,
    },
    after: {
      type: String as PropType<PropAfter>,
      default: 'after',
      validator(value: PropAfter) {
        return props.after.includes(value);
      },
    },
    range: {
      type: Boolean,
      default: false,
    },
    autoRange: {
      type: [Number, String],
      default: null,
    },
    multiCalendars: {
      type: [Boolean, Number, String],
      default: false,
    },
    monthPicker: {
      type: Boolean,
      default: false,
    },
    timePicker: {
      type: Boolean,
      default: false,
    },
    yearPicker: {
      type: Boolean,
      default: false,
    },
    weekPicker: {
      type: Boolean,
      default: false,
    },
    textInput: {
      type: Boolean,
      default: true,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    multiDates: {
      type: Boolean,
      default: false,
    },
    flow: {
      type: Array as PropType<PropFieldsTimes[]>,
      default: () => [],
      validator(array: PropFieldsTimes[]) {
        return array.every((value) => props.flows.includes(value));
      },
    },
    utc: {
      type: [Boolean, String] as PropType<PropUtc>,
      default: false,
      validator(value: PropUtc) {
        return props.utc.includes(value);
      },
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    modelAuto: {
      type: Boolean,
      default: false,
    },
    timezone: {
      type: String,
      default: null,
    },
    partialRange: {
      type: Boolean,
      default: true,
    },
    presetRanges: {
      type: Array,
      default: () => [],
    },
    minRange: {
      type: [Number, String],
      default: null,
    },
    maxRange: {
      type: [Number, String],
      default: null,
    },
    fixedStart: {
      type: Boolean,
      default: false,
    },
    fixedEnd: {
      type: Boolean,
      default: false,
    },
    multiCalendarsSolo: {
      type: Boolean,
      default: false,
    },
    multiStatic: {
      type: Boolean,
      default: true,
    },
    textInputOptions: {
      type: Object,
      default: () => ({}),
    },
    modeHeight: {
      type: [Number, String],
      default: 255,
    },
    inlineWithInput: {
      type: Boolean,
      default: false,
    },
    multiDatesLimit: {
      type: [Number, String],
      default: null,
    },
    partialFlow: {
      type: Boolean,
      default: false,
    },
    showLastInRange: {
      type: Boolean,
      default: true,
    },
    autoApplyMonth: {
      type: Boolean,
      default: true,
    },
    uid: {
      type: String,
      default: null,
    },
    monthChangeOnScroll: {
      type: [Boolean, String] as PropType<PropMonthChangeOnScrolls>,
      default: true,
      validator(value: PropMonthChangeOnScrolls) {
        return props.monthChangeOnScrolls.includes(value);
      },
    },
    modelType: {
      type: String,
      default: 'format',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    closeOnScroll: {
      type: Boolean,
      default: false,
    },
    autoApply: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    noToday: {
      type: Boolean,
      default: false,
    },
    closeOnAutoApply: {
      type: Boolean,
      default: true,
    },
    markers: {
      type: Array,
      default: () => [],
    },
    highlight: {
      type: [Array, Function],
      default: null,
    },
    highlightWeekDays: {
      type: Array,
      default: null,
    },
    highlightDisabledDays: {
      type: Boolean,
      default: false,
    },
    showNowButton: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    keepActionRow: {
      type: Boolean,
      default: false,
    },
    noSwipe: {
      type: Boolean,
      default: false,
    },
    hideNavigation: {
      type: Array as PropType<PropFieldsTimes[]>,
      default: () => [],
      validator(array: PropFieldsTimes[]) {
        return array.every((value) => props.hideNavigations.includes(value));
      },
    },
    onClickOutside: {
      type: Function,
      default: null,
    },
    actionRow: {
      type: Object,
      default: () => ({}),
    },
    disableYearSelect: {
      type: Boolean,
      default: false,
    },
    closeOnClearValue: {
      type: Boolean,
      default: true,
    },
    calendar: {
      type: Function,
      default: null,
    },
    weekNumbers: {
      type: [Function, String] as PropType<Function | PropWeekNumbers>,
      default: null,
      validator(value: Function | PropWeekNumbers) {
        if (typeof value === 'function') return true;
        return props.weekNumbers.includes(value);
      },
    },
    hideOffsetDates: {
      type: Boolean,
      default: false,
    },
    minDate: {
      type: [Date, String],
      default: null,
    },
    maxDate: {
      type: [Date, String],
      default: null,
    },
    preventMinMaxNavigation: {
      type: Boolean,
      default: false,
    },
    ignoreTimeValidation: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: [Date, String],
      default: null,
    },
    focusStartDate: {
      type: Boolean,
      default: false,
    },
    weekStart: {
      type: [Number, String],
      default: 1,
    },
    filters: {
      type: Object,
      default: () => ({}),
    },
    disableMonthYearSelect: {
      type: Boolean,
      default: false,
    },
    yearRange: {
      type: Array,
      default: () => [1900, 2100],
      validator(array) {
        return (
          Array.isArray(array) &&
          array.length === 2 &&
          array.every((value) => typeof value === 'number')
        );
      },
    },
    reverseYears: {
      type: Boolean,
      default: false,
    },
    allowedDates: {
      type: Array,
      default: null,
    },
    disabledDates: {
      type: [Array, Function],
      default: () => [],
    },
    disabledWeekDays: {
      type: Array,
      default: () => [],
    },
    noDisabledRange: {
      type: Boolean,
      default: false,
    },
    timePickerInline: {
      type: Boolean,
      default: false,
    },
    enableTimePicker: {
      type: Boolean,
      default: false,
    },
    is24: {
      type: Boolean,
      default: true,
    },
    enableSeconds: {
      type: Boolean,
      default: false,
    },
    hoursIncrement: {
      type: [Number, String],
      default: 1,
    },
    minutesIncrement: {
      type: [Number, String],
      default: 1,
    },
    secondsIncrement: {
      type: [Number, String],
      default: 1,
    },
    hoursGridIncrement: {
      type: [Number, String],
      default: 1,
    },
    minutesGridIncrement: {
      type: [Number, String],
      default: 5,
    },
    secondsGridIncrement: {
      type: [Number, String],
      default: 5,
    },
    noHoursOverlay: {
      type: Boolean,
      default: false,
    },
    noMinutesOverlay: {
      type: Boolean,
      default: false,
    },
    noSecondsOverlay: {
      type: Boolean,
      default: false,
    },
    minTime: {
      type: Object,
      default: null,
    },
    maxTime: {
      type: Object,
      default: null,
    },
    startTime: {
      type: [Object, Array],
      default: null,
    },
    disableTimeRangeValidation: {
      type: Boolean,
      default: false,
    },
    disabledTimes: {
      type: Function,
      default: undefined,
    },
    format: {
      type: [String, Function],
      default: 'dd.MM.yyyy',
    },
    previewFormat: {
      type: [String, Function],
      default: '',
    },
    monthNameFormat: {
      type: String as PropType<PropMonthNameFormats>,
      default: 'short',
      validator(value: PropMonthNameFormats) {
        return props.monthNameFormats.includes(value);
      },
    },
    locale: {
      type: String,
      default: 'ru',
    },
    formatLocale: {
      type: Object,
      default: null,
    },
    selectText: {
      type: String,
      default: 'Select',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    nowButtonLabel: {
      type: String,
      default: 'Now',
    },
    weekNumName: {
      type: String,
      default: 'W',
    },
    ariaLabels: {
      type: Object,
      default: () => ({}),
    },
    dayNames: {
      type: [Array, Function],
      default: null,
      validator(value) {
        return typeof value === 'function' || (Array.isArray(value) && value.length === 7);
      },
    },
    position: {
      type: String as PropType<PropPositions>,
      default: 'center',
      validator(value: PropPositions) {
        return props.positions.includes(value);
      },
    },
    teleport: {
      type: [String, Boolean],
      default: false,
    },
    altPosition: {
      type: Function,
      default: null,
    },
    autoPosition: {
      type: Boolean,
      default: true,
    },
    teleportCenter: {
      type: Boolean,
      default: false,
    },
    allowPreventDefault: {
      type: Boolean,
      default: false,
    },
    escClose: {
      type: Boolean,
      default: true,
    },
    spaceConfirm: {
      type: Boolean,
      default: true,
    },
    monthChangeOnArrows: {
      type: Boolean,
      default: true,
    },
    arrowNavigation: {
      type: Boolean,
      default: false,
    },
    transitions: {
      type: [Boolean, Object],
      default: true,
    },
    sixWeeks: {
      type: [Boolean, String] as PropType<PropSixWeeks>,
      default: false,
      validator(value: PropSixWeeks) {
        return props.sixWeeks.includes(value);
      },
    },
    dark: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: [Number, String],
      default: 10,
    },
    hideInputIcon: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Boolean,
      default: null,
    },
    inputClassName: {
      type: String,
      default: '',
    },
    menuClassName: {
      type: String,
      default: '',
    },
    calendarClassName: {
      type: String,
      default: '',
    },
    calendarCellClassName: {
      type: String,
      default: '',
    },
    dayClass: {
      type: Function,
      default: null,
    },
  },
  components: {
    VueDatepicker,
  },
  name: 'bx-input-date',
});
</script>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';
</style>
