import {
  ANIMATION_DURATION_MS,
  ANIMATION_TIMING_FUNCTION,
  ChartDataProvider,
  ChartsAxis,
  ChartsAxisHighlight,
  ChartsClipPath,
  ChartsGrid,
  ChartsLegend,
  ChartsOverlay,
  ChartsSurface,
  ChartsTooltip,
  ChartsWrapper,
  DEFAULT_X_AXIS_KEY,
  DEFAULT_Y_AXIS_KEY,
  _objectWithoutPropertiesLoose,
  getBarDimensions,
  getColor_default,
  number_default,
  selectorChartsItemIsFocused,
  useAnimate,
  useAnimateBar,
  useAnimateBarLabel,
  useBarSeriesContext,
  useChartBrush,
  useChartCartesianAxis,
  useChartContainerProps,
  useChartHighlight,
  useChartId,
  useChartInteraction,
  useChartKeyboardNavigation,
  useChartTooltip,
  useChartZAxis,
  useDrawingArea,
  useFocusedItem,
  useInteractionItemProps,
  useInternalIsZoomInteracting,
  useItemHighlighted,
  useSkipAnimation,
  useSlotProps_default,
  useStore,
  useXAxes,
  useYAxes,
  warnOnce
} from "./chunk-JT4MR2Q4.js";
import {
  _extends,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  require_react,
  styled_default,
  useId,
  useTheme,
  useThemeProps
} from "./chunk-7IJQBEBZ.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// ../node_modules/@mui/x-charts/esm/BarChart/BarChart.js
var React10 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/BarChart/BarPlot.js
var React7 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/BarChart/barElementClasses.js
function getBarElementUtilityClass(slot) {
  return generateUtilityClass("MuiBarElement", slot);
}
var barElementClasses = generateUtilityClasses("MuiBarElement", ["root", "highlighted", "faded", "series"]);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    id,
    isHighlighted,
    isFaded
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getBarElementUtilityClass, classes);
};

// ../node_modules/@mui/x-charts/esm/BarChart/BarElement.js
var React2 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/BarChart/AnimatedBarElement.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var _excluded = ["ownerState", "skipAnimation", "id", "dataIndex", "xOrigin", "yOrigin"];
function AnimatedBarElement(props) {
  const {
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const animatedProps = useAnimateBar(props);
  return (0, import_jsx_runtime.jsx)("rect", _extends({}, other, {
    filter: ownerState.isHighlighted ? "brightness(120%)" : void 0,
    opacity: ownerState.isFaded ? 0.3 : 1,
    "data-highlighted": ownerState.isHighlighted || void 0,
    "data-faded": ownerState.isFaded || void 0
  }, animatedProps));
}

// ../node_modules/@mui/x-charts/esm/hooks/useIsItemFocused.js
function useIsItemFocused(item) {
  const store = useStore();
  return store.use(selectorChartsItemIsFocused, item);
}

// ../node_modules/@mui/x-charts/esm/BarChart/BarElement.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var _excluded2 = ["id", "dataIndex", "classes", "color", "slots", "slotProps", "style", "onClick", "skipAnimation", "layout", "x", "xOrigin", "y", "yOrigin", "width", "height"];
function BarElement(props) {
  const {
    id,
    dataIndex,
    classes: innerClasses,
    color,
    slots,
    slotProps,
    style,
    onClick,
    skipAnimation,
    layout,
    x,
    xOrigin,
    y,
    yOrigin,
    width,
    height
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const itemIdentifier = React2.useMemo(() => ({
    type: "bar",
    seriesId: id,
    dataIndex
  }), [id, dataIndex]);
  const interactionProps = useInteractionItemProps(itemIdentifier);
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted(itemIdentifier);
  const isFocused = useIsItemFocused(React2.useMemo(() => ({
    type: "bar",
    seriesId: id,
    dataIndex
  }), [id, dataIndex]));
  const ownerState = {
    id,
    dataIndex,
    classes: innerClasses,
    color,
    isFaded,
    isHighlighted,
    isFocused
  };
  const classes = useUtilityClasses(ownerState);
  const Bar = (slots == null ? void 0 : slots.bar) ?? AnimatedBarElement;
  const barProps = useSlotProps_default({
    elementType: Bar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.bar,
    externalForwardedProps: other,
    additionalProps: _extends({}, interactionProps, {
      id,
      dataIndex,
      color,
      x,
      xOrigin,
      y,
      yOrigin,
      width,
      height,
      style,
      onClick,
      cursor: onClick ? "pointer" : "unset",
      stroke: "none",
      fill: color,
      skipAnimation,
      layout
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime2.jsx)(Bar, _extends({}, barProps));
}
true ? BarElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types.default.object,
  dataIndex: import_prop_types.default.number.isRequired,
  id: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired,
  layout: import_prop_types.default.oneOf(["horizontal", "vertical"]).isRequired,
  skipAnimation: import_prop_types.default.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types.default.object,
  xOrigin: import_prop_types.default.number.isRequired,
  yOrigin: import_prop_types.default.number.isRequired
} : void 0;

// ../node_modules/@mui/x-charts/esm/BarChart/BarClipPath.js
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function barClipPathPropsInterpolator(from, to) {
  const interpolateX = number_default(from.x, to.x);
  const interpolateY = number_default(from.y, to.y);
  const interpolateWidth = number_default(from.width, to.width);
  const interpolateHeight = number_default(from.height, to.height);
  const interpolateBorderRadius = number_default(from.borderRadius, to.borderRadius);
  return (t) => {
    return {
      x: interpolateX(t),
      y: interpolateY(t),
      width: interpolateWidth(t),
      height: interpolateHeight(t),
      borderRadius: interpolateBorderRadius(t)
    };
  };
}
function useAnimateBarClipPath(props) {
  const initialProps = {
    x: props.layout === "vertical" ? props.x : props.xOrigin,
    y: props.layout === "vertical" ? props.yOrigin : props.y,
    width: props.layout === "vertical" ? props.width : 0,
    height: props.layout === "vertical" ? 0 : props.height,
    borderRadius: props.borderRadius
  };
  return useAnimate({
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius
  }, {
    createInterpolator: barClipPathPropsInterpolator,
    transformProps: (p) => ({
      d: generateClipPath(props.hasNegative, props.hasPositive, props.layout, p.x, p.y, p.width, p.height, props.xOrigin, props.yOrigin, p.borderRadius)
    }),
    applyProps(element, {
      d
    }) {
      if (d) {
        element.setAttribute("d", d);
      }
    },
    initialProps,
    skip: props.skipAnimation,
    ref: props.ref
  });
}
function BarClipPath(props) {
  const {
    maskId,
    x,
    y,
    width,
    height,
    skipAnimation
  } = props;
  const {
    ref,
    d
  } = useAnimateBarClipPath({
    layout: props.layout ?? "vertical",
    hasNegative: props.hasNegative,
    hasPositive: props.hasPositive,
    xOrigin: props.xOrigin,
    yOrigin: props.yOrigin,
    x,
    y,
    width,
    height,
    borderRadius: props.borderRadius ?? 0,
    skipAnimation
  });
  if (!props.borderRadius || props.borderRadius <= 0) {
    return null;
  }
  return (0, import_jsx_runtime3.jsx)("clipPath", {
    id: maskId,
    children: (0, import_jsx_runtime3.jsx)("path", {
      ref,
      d
    })
  });
}
function generateClipPath(hasNegative, hasPositive, layout, x, y, width, height, xOrigin, yOrigin, borderRadius) {
  if (layout === "vertical") {
    if (hasPositive && hasNegative) {
      const bR2 = Math.min(borderRadius, width / 2, height / 2);
      return `M${x},${y + height / 2} v${-(height / 2 - bR2)} a${bR2},${bR2} 0 0 1 ${bR2},${-bR2} h${width - bR2 * 2} a${bR2},${bR2} 0 0 1 ${bR2},${bR2} v${height - 2 * bR2} a${bR2},${bR2} 0 0 1 ${-bR2},${bR2} h${-(width - bR2 * 2)} a${bR2},${bR2} 0 0 1 ${-bR2},${-bR2} v${-(height / 2 - bR2)}`;
    }
    const bR = Math.min(borderRadius, width / 2);
    if (hasPositive) {
      return `M${x},${Math.max(yOrigin, y + bR)} v${Math.min(0, -(yOrigin - y - bR))} a${bR},${bR} 0 0 1 ${bR},${-bR} h${width - bR * 2} a${bR},${bR} 0 0 1 ${bR},${bR} v${Math.max(0, yOrigin - y - bR)} Z`;
    }
    if (hasNegative) {
      return `M${x},${Math.min(yOrigin, y + height - bR)} v${Math.max(0, height - bR)} a${bR},${bR} 0 0 0 ${bR},${bR} h${width - bR * 2} a${bR},${bR} 0 0 0 ${bR},${-bR} v${-Math.max(0, height - bR)} Z`;
    }
  }
  if (layout === "horizontal") {
    if (hasPositive && hasNegative) {
      const bR2 = Math.min(borderRadius, width / 2, height / 2);
      return `M${x + width / 2},${y} h${width / 2 - bR2} a${bR2},${bR2} 0 0 1 ${bR2},${bR2} v${height - bR2 * 2} a${bR2},${bR2} 0 0 1 ${-bR2},${bR2} h${-(width - 2 * bR2)} a${bR2},${bR2} 0 0 1 ${-bR2},${-bR2} v${-(height - bR2 * 2)} a${bR2},${bR2} 0 0 1 ${bR2},${-bR2} h${width / 2 - bR2}`;
    }
    const bR = Math.min(borderRadius, height / 2);
    if (hasPositive) {
      return `M${Math.min(xOrigin, x - bR)},${y} h${width} a${bR},${bR} 0 0 1 ${bR},${bR} v${height - bR * 2} a${bR},${bR} 0 0 1 ${-bR},${bR} h${-width} Z`;
    }
    if (hasNegative) {
      return `M${Math.max(xOrigin, x + width + bR)},${y} h${-width} a${bR},${bR} 0 0 0 ${-bR},${bR} v${height - bR * 2} a${bR},${bR} 0 0 0 ${bR},${bR} h${width} Z`;
    }
  }
  return void 0;
}

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/BarLabelPlot.js
var React6 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/BarLabelItem.js
var React5 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/barLabelClasses.js
function getBarLabelUtilityClass(slot) {
  return generateUtilityClass("MuiBarLabel", slot);
}
var barLabelClasses = generateUtilityClasses("MuiBarLabel", ["root", "highlighted", "faded", "animate"]);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    seriesId,
    isFaded,
    isHighlighted,
    skipAnimation
  } = ownerState;
  const slots = {
    root: ["root", `series-${seriesId}`, isHighlighted && "highlighted", isFaded && "faded", !skipAnimation && "animate"]
  };
  return composeClasses(slots, getBarLabelUtilityClass, classes);
};

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/getBarLabel.js
function getBarLabel(options) {
  const {
    barLabel,
    value,
    dataIndex,
    seriesId,
    height,
    width
  } = options;
  if (barLabel === "value") {
    return value ? value == null ? void 0 : value.toString() : null;
  }
  return barLabel({
    seriesId,
    dataIndex,
    value
  }, {
    bar: {
      height,
      width
    }
  });
}

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/BarLabel.js
var React4 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var _excluded3 = ["seriesId", "dataIndex", "color", "isFaded", "isHighlighted", "classes", "skipAnimation", "layout", "xOrigin", "yOrigin", "placement"];
var BarLabelComponent = styled_default("text", {
  name: "MuiBarLabel",
  slot: "Root",
  overridesResolver: (_, styles) => [{
    [`&.${barLabelClasses.faded}`]: styles.faded
  }, {
    [`&.${barLabelClasses.highlighted}`]: styles.highlighted
  }, styles.root]
})(({
  theme
}) => {
  var _a, _b, _c, _d;
  return _extends({}, (_a = theme == null ? void 0 : theme.typography) == null ? void 0 : _a.body2, {
    stroke: "none",
    fill: (_d = (_c = (_b = theme.vars || theme) == null ? void 0 : _b.palette) == null ? void 0 : _c.text) == null ? void 0 : _d.primary,
    transitionProperty: "opacity, fill",
    transitionDuration: `${ANIMATION_DURATION_MS}ms`,
    transitionTimingFunction: ANIMATION_TIMING_FUNCTION,
    pointerEvents: "none"
  });
});
function BarLabel(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiBarLabel"
  });
  const {
    isFaded
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded3);
  const animatedProps = useAnimateBarLabel(props);
  const textAnchor = getTextAnchor(props);
  const dominantBaseline = getDominantBaseline(props);
  const fadedOpacity = isFaded ? 0.3 : 1;
  return (0, import_jsx_runtime4.jsx)(BarLabelComponent, _extends({
    textAnchor,
    dominantBaseline,
    opacity: fadedOpacity
  }, otherProps, animatedProps));
}
function getTextAnchor({
  placement,
  layout,
  xOrigin,
  x
}) {
  if (placement === "outside") {
    if (layout === "horizontal") {
      return x < xOrigin ? "end" : "start";
    }
    return "middle";
  }
  return "middle";
}
function getDominantBaseline({
  placement,
  layout,
  yOrigin,
  y
}) {
  if (placement === "outside") {
    if (layout === "horizontal") {
      return "central";
    }
    return y < yOrigin ? "auto" : "hanging";
  }
  return "central";
}
true ? BarLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types2.default.object,
  dataIndex: import_prop_types2.default.number.isRequired,
  /**
   * Height of the bar this label belongs to.
   */
  height: import_prop_types2.default.number.isRequired,
  isFaded: import_prop_types2.default.bool.isRequired,
  isHighlighted: import_prop_types2.default.bool.isRequired,
  layout: import_prop_types2.default.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The placement of the bar label.
   * It controls whether the label is rendered in the center or outside the bar.
   * @default 'center'
   */
  placement: import_prop_types2.default.oneOf(["center", "outside"]),
  seriesId: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]).isRequired,
  skipAnimation: import_prop_types2.default.bool.isRequired,
  /**
   * Width of the bar this label belongs to.
   */
  width: import_prop_types2.default.number.isRequired,
  /**
   * Position in the x-axis of the bar this label belongs to.
   */
  x: import_prop_types2.default.number.isRequired,
  /**
   * The x-coordinate of the stack this bar label belongs to.
   */
  xOrigin: import_prop_types2.default.number.isRequired,
  /**
   * Position in the y-axis of the bar this label belongs to.
   */
  y: import_prop_types2.default.number.isRequired,
  /**
   * The y-coordinate of the stack this bar label belongs to.
   */
  yOrigin: import_prop_types2.default.number.isRequired
} : void 0;

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/BarLabelItem.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var _excluded4 = ["seriesId", "classes", "color", "dataIndex", "barLabel", "slots", "slotProps", "xOrigin", "yOrigin", "x", "y", "width", "height", "value", "skipAnimation", "layout", "barLabelPlacement"];
var _excluded22 = ["ownerState"];
function BarLabelItem(props) {
  const {
    seriesId,
    classes: innerClasses,
    color,
    dataIndex,
    barLabel,
    slots,
    slotProps,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    value,
    skipAnimation,
    layout,
    barLabelPlacement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId,
    dataIndex
  });
  const ownerState = {
    seriesId,
    classes: innerClasses,
    color,
    isFaded,
    isHighlighted,
    dataIndex,
    skipAnimation,
    layout
  };
  const classes = useUtilityClasses2(ownerState);
  const Component = (slots == null ? void 0 : slots.barLabel) ?? BarLabel;
  const _useSlotProps = useSlotProps_default({
    elementType: Component,
    externalSlotProps: slotProps == null ? void 0 : slotProps.barLabel,
    additionalProps: _extends({}, other, {
      xOrigin,
      yOrigin,
      x,
      y,
      width,
      height,
      placement: barLabelPlacement,
      className: classes.root
    }),
    ownerState
  }), {
    ownerState: barLabelOwnerState
  } = _useSlotProps, barLabelProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded22);
  if (!barLabel) {
    return null;
  }
  const formattedLabelText = getBarLabel({
    barLabel,
    value,
    dataIndex,
    seriesId,
    height,
    width
  });
  if (!formattedLabelText) {
    return null;
  }
  return (0, import_jsx_runtime5.jsx)(Component, _extends({}, barLabelProps, barLabelOwnerState, {
    children: formattedLabelText
  }));
}
true ? BarLabelItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If provided, the function will be used to format the label of the bar.
   * It can be set to 'value' to display the current value.
   * @param {BarItem} item The item to format.
   * @param {BarLabelContext} context data about the bar.
   * @returns {string} The formatted label.
   */
  barLabel: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["value"]), import_prop_types3.default.func]),
  classes: import_prop_types3.default.object,
  color: import_prop_types3.default.string.isRequired,
  dataIndex: import_prop_types3.default.number.isRequired,
  /**
   * The height of the bar.
   */
  height: import_prop_types3.default.number.isRequired,
  seriesId: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]).isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object,
  /**
   * The value of the data point.
   */
  value: import_prop_types3.default.number,
  /**
   * The width of the bar.
   */
  width: import_prop_types3.default.number.isRequired
} : void 0;

// ../node_modules/@mui/x-charts/esm/BarChart/BarLabel/BarLabelPlot.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _excluded5 = ["processedSeries", "className", "skipAnimation"];
function BarLabelPlot(props) {
  const {
    processedSeries,
    className,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const {
    seriesId,
    data,
    layout,
    xOrigin,
    yOrigin
  } = processedSeries;
  const barLabel = processedSeries.barLabel ?? props.barLabel;
  if (!barLabel) {
    return null;
  }
  return (0, import_jsx_runtime6.jsx)("g", {
    className,
    "data-series": seriesId,
    children: data.map(({
      x,
      y,
      dataIndex,
      color,
      value,
      width,
      height
    }) => (0, import_jsx_runtime6.jsx)(BarLabelItem, _extends({
      seriesId,
      dataIndex,
      value,
      color,
      xOrigin,
      yOrigin,
      x,
      y,
      width,
      height,
      skipAnimation: skipAnimation ?? false,
      layout: layout ?? "vertical"
    }, other, {
      barLabel,
      barLabelPlacement: processedSeries.barLabelPlacement || "center"
    }), dataIndex))
  }, seriesId);
}

// ../node_modules/@mui/x-charts/esm/BarChart/checkBarChartScaleErrors.js
var getAxisMessage = (axisDirection, axisId) => {
  const axisName = `${axisDirection}-axis`;
  const axisIdName = `${axisDirection}Axis`;
  const axisDefaultKey = axisDirection === "x" ? DEFAULT_X_AXIS_KEY : DEFAULT_Y_AXIS_KEY;
  return axisId === axisDefaultKey ? `The first \`${axisIdName}\`` : `The ${axisName} with id "${axisId}"`;
};
function checkBarChartScaleErrors(verticalLayout, seriesId, seriesDataLength, xAxisId, xAxis, yAxisId, yAxis) {
  const xAxisConfig = xAxis[xAxisId];
  const yAxisConfig = yAxis[yAxisId];
  const discreteAxisConfig = verticalLayout ? xAxisConfig : yAxisConfig;
  const continuousAxisConfig = verticalLayout ? yAxisConfig : xAxisConfig;
  const discreteAxisId = verticalLayout ? xAxisId : yAxisId;
  const continuousAxisId = verticalLayout ? yAxisId : xAxisId;
  const discreteAxisDirection = verticalLayout ? "x" : "y";
  const continuousAxisDirection = verticalLayout ? "y" : "x";
  if (discreteAxisConfig.scaleType !== "band") {
    throw new Error(`MUI X Charts: ${getAxisMessage(discreteAxisDirection, discreteAxisId)} should be of type "band" to display the bar series of id "${seriesId}".`);
  }
  if (discreteAxisConfig.data === void 0) {
    throw new Error(`MUI X Charts: ${getAxisMessage(discreteAxisDirection, discreteAxisId)} should have data property.`);
  }
  if (continuousAxisConfig.scaleType === "band" || continuousAxisConfig.scaleType === "point") {
    throw new Error(`MUI X Charts: ${getAxisMessage(continuousAxisDirection, continuousAxisId)} should be a continuous type to display the bar series of id "${seriesId}".`);
  }
  if (true) {
    if (discreteAxisConfig.data.length < seriesDataLength) {
      warnOnce([`MUI X Charts: ${getAxisMessage(discreteAxisDirection, discreteAxisId)} has less data (${discreteAxisConfig.data.length} values) than the bar series of id "${seriesId}" (${seriesDataLength} values).`, "The axis data should have at least the same length than the series using it."], "error");
    }
  }
}

// ../node_modules/@mui/x-charts/esm/BarChart/useBarPlotData.js
function useBarPlotData(drawingArea, xAxes, yAxes) {
  const seriesData = useBarSeriesContext() ?? {
    series: {},
    stackingGroups: [],
    seriesOrder: []
  };
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const chartId = useChartId();
  const {
    series,
    stackingGroups
  } = seriesData;
  const masks = {};
  const data = stackingGroups.flatMap(({
    ids: seriesIds
  }, groupIndex) => {
    const xMin = drawingArea.left;
    const xMax = drawingArea.left + drawingArea.width;
    const yMin = drawingArea.top;
    const yMax = drawingArea.top + drawingArea.height;
    return seriesIds.map((seriesId) => {
      const xAxisId = series[seriesId].xAxisId ?? defaultXAxisId;
      const yAxisId = series[seriesId].yAxisId ?? defaultYAxisId;
      const layout = series[seriesId].layout;
      const xAxisConfig = xAxes[xAxisId];
      const yAxisConfig = yAxes[yAxisId];
      const verticalLayout = series[seriesId].layout === "vertical";
      const reverse = (verticalLayout ? yAxisConfig.reverse : xAxisConfig.reverse) ?? false;
      checkBarChartScaleErrors(verticalLayout, seriesId, series[seriesId].stackedData.length, xAxisId, xAxes, yAxisId, yAxes);
      const baseScaleConfig = verticalLayout ? xAxisConfig : yAxisConfig;
      const xScale = xAxisConfig.scale;
      const yScale = yAxisConfig.scale;
      const xOrigin = Math.round(xScale(0) ?? 0);
      const yOrigin = Math.round(yScale(0) ?? 0);
      const colorGetter = getColor_default(series[seriesId], xAxes[xAxisId], yAxes[yAxisId]);
      const seriesDataPoints = [];
      for (let dataIndex = 0; dataIndex < baseScaleConfig.data.length; dataIndex += 1) {
        const barDimensions = getBarDimensions({
          verticalLayout,
          xAxisConfig,
          yAxisConfig,
          series: series[seriesId],
          dataIndex,
          numberOfGroups: stackingGroups.length,
          groupIndex
        });
        if (barDimensions == null) {
          continue;
        }
        const stackId = series[seriesId].stack;
        const result = _extends({
          seriesId,
          dataIndex
        }, barDimensions, {
          color: colorGetter(dataIndex),
          value: series[seriesId].data[dataIndex],
          maskId: `${chartId}_${stackId || seriesId}_${groupIndex}_${dataIndex}`
        });
        if (result.x > xMax || result.x + result.width < xMin || result.y > yMax || result.y + result.height < yMin) {
          continue;
        }
        if (!masks[result.maskId]) {
          masks[result.maskId] = {
            id: result.maskId,
            width: 0,
            height: 0,
            hasNegative: false,
            hasPositive: false,
            layout,
            xOrigin,
            yOrigin,
            x: 0,
            y: 0
          };
        }
        const mask = masks[result.maskId];
        mask.width = layout === "vertical" ? result.width : mask.width + result.width;
        mask.height = layout === "vertical" ? mask.height + result.height : result.height;
        mask.x = Math.min(mask.x === 0 ? Infinity : mask.x, result.x);
        mask.y = Math.min(mask.y === 0 ? Infinity : mask.y, result.y);
        const value = result.value ?? 0;
        mask.hasNegative = mask.hasNegative || (reverse ? value > 0 : value < 0);
        mask.hasPositive = mask.hasPositive || (reverse ? value < 0 : value > 0);
        seriesDataPoints.push(result);
      }
      return {
        seriesId,
        barLabel: series[seriesId].barLabel,
        barLabelPlacement: series[seriesId].barLabelPlacement,
        data: seriesDataPoints,
        layout,
        xOrigin,
        yOrigin
      };
    });
  });
  return {
    completedData: data,
    masksData: Object.values(masks)
  };
}

// ../node_modules/@mui/x-charts/esm/BarChart/barClasses.js
function getBarUtilityClass(slot) {
  return generateUtilityClass("MuiBar", slot);
}
var barClasses = generateUtilityClasses("MuiBar", ["root", "series", "seriesLabels"]);
var useUtilityClasses3 = (classes) => {
  const slots = {
    root: ["root"],
    series: ["series"],
    seriesLabels: ["seriesLabels"]
  };
  return composeClasses(slots, getBarUtilityClass, classes);
};

// ../node_modules/@mui/x-charts/esm/BarChart/BarPlot.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var _excluded6 = ["skipAnimation", "onItemClick", "borderRadius", "barLabel"];
var BarPlotRoot = styled_default("g", {
  name: "MuiBarPlot",
  slot: "Root"
})({
  [`& .${barElementClasses.root}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${ANIMATION_DURATION_MS}ms`,
    transitionTimingFunction: ANIMATION_TIMING_FUNCTION
  }
});
function BarPlot(props) {
  const {
    skipAnimation: inSkipAnimation,
    onItemClick,
    borderRadius,
    barLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const isZoomInteracting = useInternalIsZoomInteracting();
  const skipAnimation = useSkipAnimation(isZoomInteracting || inSkipAnimation);
  const {
    xAxis: xAxes
  } = useXAxes();
  const {
    yAxis: yAxes
  } = useYAxes();
  const {
    completedData,
    masksData
  } = useBarPlotData(useDrawingArea(), xAxes, yAxes);
  const withoutBorderRadius = !borderRadius || borderRadius <= 0;
  const classes = useUtilityClasses3();
  return (0, import_jsx_runtime7.jsxs)(BarPlotRoot, {
    className: classes.root,
    children: [!withoutBorderRadius && masksData.map(({
      id,
      x,
      y,
      xOrigin,
      yOrigin,
      width,
      height,
      hasPositive,
      hasNegative,
      layout
    }) => {
      return (0, import_jsx_runtime7.jsx)(BarClipPath, {
        maskId: id,
        borderRadius,
        hasNegative,
        hasPositive,
        layout,
        x,
        y,
        xOrigin,
        yOrigin,
        width,
        height,
        skipAnimation: skipAnimation ?? false
      }, id);
    }), completedData.map(({
      seriesId,
      layout,
      xOrigin,
      yOrigin,
      data
    }) => {
      return (0, import_jsx_runtime7.jsx)("g", {
        "data-series": seriesId,
        className: classes.series,
        children: data.map(({
          dataIndex,
          color,
          maskId,
          x,
          y,
          width,
          height
        }) => {
          const barElement = (0, import_jsx_runtime7.jsx)(BarElement, _extends({
            id: seriesId,
            dataIndex,
            color,
            skipAnimation: skipAnimation ?? false,
            layout: layout ?? "vertical",
            x,
            xOrigin,
            y,
            yOrigin,
            width,
            height
          }, other, {
            onClick: onItemClick && ((event) => {
              onItemClick(event, {
                type: "bar",
                seriesId,
                dataIndex
              });
            })
          }), dataIndex);
          if (withoutBorderRadius) {
            return barElement;
          }
          return (0, import_jsx_runtime7.jsx)("g", {
            clipPath: `url(#${maskId})`,
            children: barElement
          }, dataIndex);
        })
      }, seriesId);
    }), completedData.map((processedSeries) => (0, import_jsx_runtime7.jsx)(BarLabelPlot, _extends({
      className: classes.seriesLabels,
      processedSeries,
      skipAnimation,
      barLabel
    }, other), processedSeries.seriesId))]
  });
}
true ? BarPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If provided, the function will be used to format the label of the bar.
   * It can be set to 'value' to display the current value.
   * @param {BarItem} item The item to format.
   * @param {BarLabelContext} context data about the bar.
   * @returns {string} The formatted label.
   */
  barLabel: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["value"]), import_prop_types4.default.func]),
  /**
   * The placement of the bar label.
   * It controls whether the label is rendered inside or outside the bar.
   */
  barLabelPlacement: import_prop_types4.default.oneOf(["outside", "inside"]),
  /**
   * Defines the border radius of the bar element.
   */
  borderRadius: import_prop_types4.default.number,
  /**
   * Callback fired when a bar item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {BarItemIdentifier} barItemIdentifier The bar item identifier.
   */
  onItemClick: import_prop_types4.default.func,
  /**
   * If `true`, animations are skipped.
   * @default undefined
   */
  skipAnimation: import_prop_types4.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types4.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types4.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/BarChart/useBarChartProps.js
var React8 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/BarChart/BarChart.plugins.js
var BAR_CHART_PLUGINS = [useChartZAxis, useChartBrush, useChartTooltip, useChartInteraction, useChartCartesianAxis, useChartHighlight, useChartKeyboardNavigation];

// ../node_modules/@mui/x-charts/esm/BarChart/useBarChartProps.js
var _excluded7 = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "axisHighlight", "grid", "children", "slots", "slotProps", "skipAnimation", "loading", "layout", "onItemClick", "highlightedItem", "onHighlightChange", "borderRadius", "barLabel", "className", "hideLegend", "showToolbar", "brushConfig"];
var useBarChartProps = (props) => {
  var _a, _b, _c, _d, _e;
  const {
    xAxis,
    yAxis,
    series,
    width,
    height,
    margin,
    colors,
    dataset,
    sx,
    axisHighlight,
    grid,
    children,
    slots,
    slotProps,
    skipAnimation,
    loading,
    layout,
    onItemClick,
    highlightedItem,
    onHighlightChange,
    borderRadius,
    barLabel,
    className,
    brushConfig
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  const hasHorizontalSeries = layout === "horizontal" || layout === void 0 && series.some((item) => item.layout === "horizontal");
  const defaultBandXAxis = React8.useMemo(() => [{
    id: DEFAULT_X_AXIS_KEY,
    scaleType: "band",
    data: Array.from({
      length: Math.max(...series.map((s) => (s.data ?? dataset ?? []).length))
    }, (_, index) => index)
  }], [dataset, series]);
  const defaultBandYAxis = React8.useMemo(() => [{
    id: DEFAULT_Y_AXIS_KEY,
    scaleType: "band",
    data: Array.from({
      length: Math.max(...series.map((s) => (s.data ?? dataset ?? []).length))
    }, (_, index) => index)
  }], [dataset, series]);
  const seriesWithDefault = React8.useMemo(() => series.map((s) => _extends({
    type: "bar"
  }, s, {
    layout: hasHorizontalSeries ? "horizontal" : "vertical"
  })), [hasHorizontalSeries, series]);
  const defaultXAxis = hasHorizontalSeries ? void 0 : defaultBandXAxis;
  const processedXAxis = React8.useMemo(() => {
    if (!xAxis) {
      return defaultXAxis;
    }
    return hasHorizontalSeries ? xAxis : xAxis.map((axis) => _extends({
      scaleType: "band"
    }, axis));
  }, [defaultXAxis, hasHorizontalSeries, xAxis]);
  const defaultYAxis = hasHorizontalSeries ? defaultBandYAxis : void 0;
  const processedYAxis = React8.useMemo(() => {
    if (!yAxis) {
      return defaultYAxis;
    }
    return hasHorizontalSeries ? yAxis.map((axis) => _extends({
      scaleType: "band"
    }, axis)) : yAxis;
  }, [defaultYAxis, hasHorizontalSeries, yAxis]);
  const chartContainerProps = _extends({}, other, {
    series: seriesWithDefault,
    width,
    height,
    margin,
    colors,
    dataset,
    xAxis: processedXAxis,
    yAxis: processedYAxis,
    highlightedItem,
    onHighlightChange,
    disableAxisListener: ((_a = slotProps == null ? void 0 : slotProps.tooltip) == null ? void 0 : _a.trigger) !== "axis" && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none",
    className,
    skipAnimation,
    brushConfig,
    plugins: BAR_CHART_PLUGINS
  });
  const barPlotProps = {
    onItemClick,
    slots,
    slotProps,
    borderRadius,
    barLabel
  };
  const gridProps = {
    vertical: grid == null ? void 0 : grid.vertical,
    horizontal: grid == null ? void 0 : grid.horizontal
  };
  const clipPathGroupProps = {
    clipPath: `url(#${clipPathId})`
  };
  const clipPathProps = {
    id: clipPathId
  };
  const overlayProps = {
    slots,
    slotProps,
    loading
  };
  const chartsAxisProps = {
    slots,
    slotProps
  };
  const axisHighlightProps = _extends({}, hasHorizontalSeries ? {
    y: "band"
  } : {
    x: "band"
  }, axisHighlight);
  const legendProps = {
    slots,
    slotProps
  };
  const chartsWrapperProps = {
    sx,
    legendPosition: (_c = (_b = props.slotProps) == null ? void 0 : _b.legend) == null ? void 0 : _c.position,
    legendDirection: (_e = (_d = props.slotProps) == null ? void 0 : _d.legend) == null ? void 0 : _e.direction,
    hideLegend: props.hideLegend ?? false
  };
  return {
    chartsWrapperProps,
    chartContainerProps,
    barPlotProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    legendProps,
    children
  };
};

// ../node_modules/@mui/x-charts/esm/BarChart/FocusedBar.js
var React9 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function FocusedBar(props) {
  const theme = useTheme();
  const focusedItem = useFocusedItem();
  const barSeries = useBarSeriesContext();
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  if (focusedItem === null || focusedItem.type !== "bar" || !barSeries) {
    return null;
  }
  const series = barSeries == null ? void 0 : barSeries.series[focusedItem.seriesId];
  const xAxisId = series.xAxisId ?? xAxisIds[0];
  const yAxisId = series.yAxisId ?? yAxisIds[0];
  const xAxisConfig = xAxis[xAxisId];
  const yAxisConfig = yAxis[yAxisId];
  const verticalLayout = barSeries.series[focusedItem.seriesId].layout === "vertical";
  const groupIndex = barSeries.stackingGroups.findIndex((group) => group.ids.includes(focusedItem.seriesId));
  const barDimensions = getBarDimensions({
    verticalLayout,
    xAxisConfig,
    yAxisConfig,
    series,
    dataIndex: focusedItem.dataIndex,
    numberOfGroups: barSeries.stackingGroups.length,
    groupIndex
  });
  if (barDimensions === null) {
    return null;
  }
  const {
    x,
    y,
    height,
    width
  } = barDimensions;
  return (0, import_jsx_runtime8.jsx)("rect", _extends({
    fill: "none",
    stroke: (theme.vars ?? theme).palette.text.primary,
    strokeWidth: 2,
    x: x - 3,
    y: y - 3,
    width: width + 6,
    height: height + 6,
    rx: 3,
    ry: 3
  }, props));
}

// ../node_modules/@mui/x-charts/esm/BarChart/BarChart.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var BarChart = React10.forwardRef(function BarChart2(inProps, ref) {
  var _a, _b, _c, _d;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBarChart"
  });
  const {
    chartsWrapperProps,
    chartContainerProps,
    barPlotProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    legendProps,
    children
  } = useBarChartProps(props);
  const {
    chartDataProviderProps,
    chartsSurfaceProps
  } = useChartContainerProps(chartContainerProps, ref);
  const Tooltip = ((_a = props.slots) == null ? void 0 : _a.tooltip) ?? ChartsTooltip;
  const Toolbar = (_b = props.slots) == null ? void 0 : _b.toolbar;
  return (0, import_jsx_runtime9.jsx)(ChartDataProvider, _extends({}, chartDataProviderProps, {
    children: (0, import_jsx_runtime9.jsxs)(ChartsWrapper, _extends({}, chartsWrapperProps, {
      children: [props.showToolbar && Toolbar ? (0, import_jsx_runtime9.jsx)(Toolbar, _extends({}, (_c = props.slotProps) == null ? void 0 : _c.toolbar)) : null, !props.hideLegend && (0, import_jsx_runtime9.jsx)(ChartsLegend, _extends({}, legendProps)), (0, import_jsx_runtime9.jsxs)(ChartsSurface, _extends({}, chartsSurfaceProps, {
        children: [(0, import_jsx_runtime9.jsx)(ChartsGrid, _extends({}, gridProps)), (0, import_jsx_runtime9.jsxs)("g", _extends({}, clipPathGroupProps, {
          children: [(0, import_jsx_runtime9.jsx)(BarPlot, _extends({}, barPlotProps)), (0, import_jsx_runtime9.jsx)(ChartsOverlay, _extends({}, overlayProps)), (0, import_jsx_runtime9.jsx)(ChartsAxisHighlight, _extends({}, axisHighlightProps)), (0, import_jsx_runtime9.jsx)(FocusedBar, {})]
        })), (0, import_jsx_runtime9.jsx)(ChartsAxis, _extends({}, chartsAxisProps)), (0, import_jsx_runtime9.jsx)(ChartsClipPath, _extends({}, clipPathProps)), children]
      })), !props.loading && (0, import_jsx_runtime9.jsx)(Tooltip, _extends({}, (_d = props.slotProps) == null ? void 0 : _d.tooltip))]
    }))
  }));
});
if (true) BarChart.displayName = "BarChart";
true ? BarChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types5.default.shape({
    current: import_prop_types5.default.object
  }),
  /**
   * The configuration of axes highlight.
   * Default is set to 'band' in the bar direction.
   * Depends on `layout` prop.
   * @see See {@link https://mui.com/x/react-charts/highlighting/ highlighting docs} for more details.
   */
  axisHighlight: import_prop_types5.default.shape({
    x: import_prop_types5.default.oneOf(["band", "line", "none"]),
    y: import_prop_types5.default.oneOf(["band", "line", "none"])
  }),
  /**
   * @deprecated Use `barLabel` in the chart series instead.
   * If provided, the function will be used to format the label of the bar.
   * It can be set to 'value' to display the current value.
   * @param {BarItem} item The item to format.
   * @param {BarLabelContext} context data about the bar.
   * @returns {string} The formatted label.
   */
  barLabel: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["value"]), import_prop_types5.default.func]),
  /**
   * Defines the border radius of the bar element.
   */
  borderRadius: import_prop_types5.default.number,
  /**
   * Configuration for the brush interaction.
   */
  brushConfig: import_prop_types5.default.shape({
    enabled: import_prop_types5.default.bool,
    preventHighlight: import_prop_types5.default.bool,
    preventTooltip: import_prop_types5.default.bool
  }),
  children: import_prop_types5.default.node,
  className: import_prop_types5.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string), import_prop_types5.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types5.default.arrayOf(import_prop_types5.default.object),
  desc: import_prop_types5.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types5.default.bool,
  enableKeyboardNavigation: import_prop_types5.default.bool,
  /**
   * Option to display a cartesian grid in the background.
   */
  grid: import_prop_types5.default.shape({
    horizontal: import_prop_types5.default.bool,
    vertical: import_prop_types5.default.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types5.default.number,
  /**
   * If `true`, the legend is not rendered.
   */
  hideLegend: import_prop_types5.default.bool,
  /**
   * The controlled axis highlight.
   * Identified by the axis id, and data index.
   */
  highlightedAxis: import_prop_types5.default.arrayOf(import_prop_types5.default.shape({
    axisId: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired,
    dataIndex: import_prop_types5.default.number.isRequired
  })),
  /**
   * The highlighted item.
   * Used when the highlight is controlled.
   */
  highlightedItem: import_prop_types5.default.shape({
    dataIndex: import_prop_types5.default.number,
    seriesId: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired
  }),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types5.default.string,
  /**
   * The direction of the bar elements.
   * @default 'vertical'
   */
  layout: import_prop_types5.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: import_prop_types5.default.bool,
  /**
   * Localized text for chart components.
   */
  localeText: import_prop_types5.default.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
    bottom: import_prop_types5.default.number,
    left: import_prop_types5.default.number,
    right: import_prop_types5.default.number,
    top: import_prop_types5.default.number
  })]),
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | ChartsAxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: import_prop_types5.default.func,
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: import_prop_types5.default.func,
  /**
   * The function called when the pointer position corresponds to a new axis data item.
   * This update can either be caused by a pointer movement, or an axis update.
   * In case of multiple axes, the function is called if at least one axis is updated.
   * The argument contains the identifier for all axes with a `data` property.
   * @param {AxisItemIdentifier[]} axisItems The array of axes item identifiers.
   */
  onHighlightedAxisChange: import_prop_types5.default.func,
  /**
   * Callback fired when a bar item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {BarItemIdentifier} barItemIdentifier The bar item identifier.
   */
  onItemClick: import_prop_types5.default.func,
  /**
   * The series to display in the bar chart.
   * An array of [[BarSeries]] objects.
   */
  series: import_prop_types5.default.arrayOf(import_prop_types5.default.object).isRequired,
  /**
   * If true, shows the default chart toolbar.
   * @default false
   */
  showToolbar: import_prop_types5.default.bool,
  /**
   * If `true`, animations are skipped.
   * If unset or `false`, the animations respects the user's `prefers-reduced-motion` setting.
   */
  skipAnimation: import_prop_types5.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types5.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types5.default.object,
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  theme: import_prop_types5.default.oneOf(["dark", "light"]),
  title: import_prop_types5.default.string,
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types5.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  xAxis: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    barGapRatio: import_prop_types5.default.number,
    categoryGapRatio: import_prop_types5.default.number,
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      type: import_prop_types5.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types5.default.string,
      values: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number, import_prop_types5.default.string]).isRequired)
    }), import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    groups: import_prop_types5.default.arrayOf(import_prop_types5.default.shape({
      getValue: import_prop_types5.default.func.isRequired,
      tickLabelStyle: import_prop_types5.default.object,
      tickSize: import_prop_types5.default.number
    })),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    offset: import_prop_types5.default.number,
    ordinalTimeTicks: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types5.default.shape({
      format: import_prop_types5.default.func.isRequired,
      getTickNumber: import_prop_types5.default.func.isRequired,
      isTick: import_prop_types5.default.func.isRequired
    })]).isRequired),
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["band"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      type: import_prop_types5.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types5.default.string,
      values: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number, import_prop_types5.default.string]).isRequired)
    }), import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    groups: import_prop_types5.default.arrayOf(import_prop_types5.default.shape({
      getValue: import_prop_types5.default.func.isRequired,
      tickLabelStyle: import_prop_types5.default.object,
      tickSize: import_prop_types5.default.number
    })),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    offset: import_prop_types5.default.number,
    ordinalTimeTicks: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types5.default.shape({
      format: import_prop_types5.default.func.isRequired,
      getTickNumber: import_prop_types5.default.func.isRequired,
      isTick: import_prop_types5.default.func.isRequired
    })]).isRequired),
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["point"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["log"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    constant: import_prop_types5.default.number,
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["symlog"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["pow"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["sqrt"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    min: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["time"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    min: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["utc"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["x"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    height: import_prop_types5.default.number,
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["linear"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelMinGap: import_prop_types5.default.number,
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func
  })]).isRequired),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  yAxis: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    barGapRatio: import_prop_types5.default.number,
    categoryGapRatio: import_prop_types5.default.number,
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      type: import_prop_types5.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types5.default.string,
      values: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number, import_prop_types5.default.string]).isRequired)
    }), import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    groups: import_prop_types5.default.arrayOf(import_prop_types5.default.shape({
      getValue: import_prop_types5.default.func.isRequired,
      tickLabelStyle: import_prop_types5.default.object,
      tickSize: import_prop_types5.default.number
    })),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    offset: import_prop_types5.default.number,
    ordinalTimeTicks: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types5.default.shape({
      format: import_prop_types5.default.func.isRequired,
      getTickNumber: import_prop_types5.default.func.isRequired,
      isTick: import_prop_types5.default.func.isRequired
    })]).isRequired),
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["band"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      type: import_prop_types5.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types5.default.string,
      values: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number, import_prop_types5.default.string]).isRequired)
    }), import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    groups: import_prop_types5.default.arrayOf(import_prop_types5.default.shape({
      getValue: import_prop_types5.default.func.isRequired,
      tickLabelStyle: import_prop_types5.default.object,
      tickSize: import_prop_types5.default.number
    })),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    offset: import_prop_types5.default.number,
    ordinalTimeTicks: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types5.default.shape({
      format: import_prop_types5.default.func.isRequired,
      getTickNumber: import_prop_types5.default.func.isRequired,
      isTick: import_prop_types5.default.func.isRequired
    })]).isRequired),
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["point"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["log"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    constant: import_prop_types5.default.number,
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["symlog"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["pow"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["sqrt"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    min: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["time"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    min: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
      valueOf: import_prop_types5.default.func.isRequired
    })]),
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["utc"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  }), import_prop_types5.default.shape({
    axis: import_prop_types5.default.oneOf(["y"]),
    classes: import_prop_types5.default.object,
    colorMap: import_prop_types5.default.oneOfType([import_prop_types5.default.shape({
      color: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.func]).isRequired,
      max: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      min: import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]),
      type: import_prop_types5.default.oneOf(["continuous"]).isRequired
    }), import_prop_types5.default.shape({
      colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string).isRequired,
      thresholds: import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.instanceOf(Date), import_prop_types5.default.number]).isRequired).isRequired,
      type: import_prop_types5.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types5.default.array,
    dataKey: import_prop_types5.default.string,
    disableLine: import_prop_types5.default.bool,
    disableTicks: import_prop_types5.default.bool,
    domainLimit: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["nice", "strict"]), import_prop_types5.default.func]),
    hideTooltip: import_prop_types5.default.bool,
    id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
    ignoreTooltip: import_prop_types5.default.bool,
    label: import_prop_types5.default.string,
    labelStyle: import_prop_types5.default.object,
    max: import_prop_types5.default.number,
    min: import_prop_types5.default.number,
    offset: import_prop_types5.default.number,
    position: import_prop_types5.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types5.default.bool,
    scaleType: import_prop_types5.default.oneOf(["linear"]),
    slotProps: import_prop_types5.default.object,
    slots: import_prop_types5.default.object,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    tickInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.array, import_prop_types5.default.func]),
    tickLabelInterval: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["auto"]), import_prop_types5.default.func]),
    tickLabelPlacement: import_prop_types5.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types5.default.object,
    tickMaxStep: import_prop_types5.default.number,
    tickMinStep: import_prop_types5.default.number,
    tickNumber: import_prop_types5.default.number,
    tickPlacement: import_prop_types5.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types5.default.number,
    tickSpacing: import_prop_types5.default.number,
    valueFormatter: import_prop_types5.default.func,
    width: import_prop_types5.default.number
  })]).isRequired)
} : void 0;
export {
  BAR_CHART_PLUGINS,
  BarChart,
  BarElement,
  BarLabel,
  BarPlot,
  FocusedBar,
  barClasses,
  barElementClasses,
  barLabelClasses,
  getBarElementUtilityClass,
  getBarLabelUtilityClass,
  getBarUtilityClass,
  useUtilityClasses
};
//# sourceMappingURL=@mui_x-charts_BarChart.js.map
