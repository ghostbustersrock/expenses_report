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
  Symbol,
  _objectWithoutPropertiesLoose,
  area_default,
  bumpX,
  bumpY,
  catmullRom_default,
  getColor_default2 as getColor_default,
  getValueToPositionMapper,
  isOrdinalScale,
  line_default,
  linear_default,
  monotoneX,
  monotoneY,
  natural_default,
  reactMajor_default,
  selectorChartsHighlightXAxisIndex,
  stepAfter,
  stepBefore,
  step_default,
  symbolsFill,
  useAnimateArea,
  useAnimateLine,
  useChartBrush,
  useChartCartesianAxis,
  useChartContainerProps,
  useChartContext,
  useChartGradientIdBuilder,
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
  useItemHighlightedGetter,
  useLineSeriesContext,
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

// ../node_modules/@mui/x-charts/esm/LineChart/LineChart.js
var React17 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/AreaPlot.js
var React5 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/AreaElement.js
var React3 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/AnimatedArea.js
var React2 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/AppearingMask.js
var React = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/cleanId.js
function cleanId(id) {
  return id.replace(" ", "_");
}

// ../node_modules/@mui/x-charts/esm/LineChart/AppearingMask.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var appearingMaskClasses = generateUtilityClasses("MuiAppearingMask", ["animate"]);
var AnimatedRect = styled_default("rect")({
  animationName: "animate-width",
  animationTimingFunction: ANIMATION_TIMING_FUNCTION,
  animationDuration: "0s",
  [`&.${appearingMaskClasses.animate}`]: {
    animationDuration: `${ANIMATION_DURATION_MS}ms`
  },
  "@keyframes animate-width": {
    from: {
      width: 0
    }
  }
});
function AppearingMask(props) {
  const drawingArea = useDrawingArea();
  const chartId = useChartId();
  const clipId = cleanId(`${chartId}-${props.id}`);
  return (0, import_jsx_runtime.jsxs)(React.Fragment, {
    children: [(0, import_jsx_runtime.jsx)("clipPath", {
      id: clipId,
      children: (0, import_jsx_runtime.jsx)(AnimatedRect, {
        className: props.skipAnimation ? "" : appearingMaskClasses.animate,
        x: 0,
        y: 0,
        width: drawingArea.left + drawingArea.width + drawingArea.right,
        height: drawingArea.top + drawingArea.height + drawingArea.bottom
      })
    }), (0, import_jsx_runtime.jsx)("g", {
      clipPath: `url(#${clipId})`,
      children: props.children
    })]
  });
}

// ../node_modules/@mui/x-charts/esm/LineChart/AnimatedArea.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var _excluded = ["skipAnimation", "ownerState"];
function AnimatedArea(props) {
  const {
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const animatedProps = useAnimateArea(props);
  return (0, import_jsx_runtime2.jsx)(AppearingMask, {
    skipAnimation,
    id: `${ownerState.id}-area-clip`,
    children: (0, import_jsx_runtime2.jsx)("path", _extends({
      fill: ownerState.gradientId ? `url(#${ownerState.gradientId})` : ownerState.color,
      filter: (
        // eslint-disable-next-line no-nested-ternary
        ownerState.isHighlighted ? "brightness(140%)" : ownerState.gradientId ? void 0 : "brightness(120%)"
      ),
      opacity: ownerState.isFaded ? 0.3 : 1,
      stroke: "none",
      "data-series": ownerState.id,
      "data-highlighted": ownerState.isHighlighted || void 0,
      "data-faded": ownerState.isFaded || void 0
    }, other, animatedProps))
  });
}
true ? AnimatedArea.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: import_prop_types.default.string.isRequired,
  ownerState: import_prop_types.default.shape({
    classes: import_prop_types.default.object,
    color: import_prop_types.default.string.isRequired,
    gradientId: import_prop_types.default.string,
    id: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired,
    isFaded: import_prop_types.default.bool.isRequired,
    isHighlighted: import_prop_types.default.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types.default.bool
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/AreaElement.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var _excluded2 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function getAreaElementUtilityClass(slot) {
  return generateUtilityClass("MuiAreaElement", slot);
}
var areaElementClasses = generateUtilityClasses("MuiAreaElement", ["root", "highlighted", "faded", "series"]);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getAreaElementUtilityClass, classes);
};
function AreaElement(props) {
  const {
    id,
    classes: innerClasses,
    color,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const interactionProps = useInteractionItemProps({
    type: "line",
    seriesId: id
  });
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses(ownerState);
  const Area = (slots == null ? void 0 : slots.area) ?? AnimatedArea;
  const areaProps = useSlotProps_default({
    elementType: Area,
    externalSlotProps: slotProps == null ? void 0 : slotProps.area,
    additionalProps: _extends({}, interactionProps, {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime3.jsx)(Area, _extends({}, other, areaProps));
}
true ? AreaElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types2.default.object,
  color: import_prop_types2.default.string.isRequired,
  d: import_prop_types2.default.string.isRequired,
  gradientId: import_prop_types2.default.string,
  id: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types2.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types2.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types2.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/useAreaPlotData.js
var React4 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/internals/getCurve.js
function getCurveFactory(curveType) {
  switch (curveType) {
    case "catmullRom":
      return catmullRom_default.alpha(0.5);
    case "linear":
      return linear_default;
    case "monotoneX":
      return monotoneX;
    case "monotoneY":
      return monotoneY;
    case "natural":
      return natural_default;
    case "step":
      return step_default;
    case "stepBefore":
      return stepBefore;
    case "stepAfter":
      return stepAfter;
    case "bumpY":
      return bumpY;
    case "bumpX":
      return bumpX;
    default:
      return monotoneX;
  }
}

// ../node_modules/@mui/x-charts/esm/LineChart/useAreaPlotData.js
function useAreaPlotData(xAxes, yAxes) {
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const getGradientId = useChartGradientIdBuilder();
  const allData = React4.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
    const {
      series,
      stackingGroups
    } = seriesData;
    const areaPlotData = [];
    for (const stackingGroup of stackingGroups) {
      const groupIds = stackingGroup.ids;
      for (let i = groupIds.length - 1; i >= 0; i -= 1) {
        const seriesId = groupIds[i];
        const {
          xAxisId = defaultXAxisId,
          yAxisId = defaultYAxisId,
          stackedData,
          data,
          connectNulls,
          baseline,
          curve,
          strictStepCurve,
          area
        } = series[seriesId];
        if (!area || !(xAxisId in xAxes) || !(yAxisId in yAxes)) {
          continue;
        }
        const xScale = xAxes[xAxisId].scale;
        const xPosition = getValueToPositionMapper(xScale);
        const yScale = yAxes[yAxisId].scale;
        const xData = xAxes[xAxisId].data;
        const gradientId = yAxes[yAxisId].colorScale && getGradientId(yAxisId) || xAxes[xAxisId].colorScale && getGradientId(xAxisId) || void 0;
        if (true) {
          if (xData === void 0) {
            throw new Error(`MUI X Charts: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
          }
          if (xData.length < stackedData.length) {
            throw new Error(`MUI X Charts: The data length of the x axis (${xData.length} items) is lower than the length of series (${stackedData.length} items).`);
          }
        }
        const shouldExpand = (curve == null ? void 0 : curve.includes("step")) && !strictStepCurve && isOrdinalScale(xScale);
        const formattedData = (xData == null ? void 0 : xData.flatMap((x, index) => {
          const nullData = data[index] == null;
          if (shouldExpand) {
            const rep = [{
              x,
              y: stackedData[index],
              nullData,
              isExtension: false
            }];
            if (!nullData && (index === 0 || data[index - 1] == null)) {
              rep.unshift({
                x: (xScale(x) ?? 0) - (xScale.step() - xScale.bandwidth()) / 2,
                y: stackedData[index],
                nullData,
                isExtension: true
              });
            }
            if (!nullData && (index === data.length - 1 || data[index + 1] == null)) {
              rep.push({
                x: (xScale(x) ?? 0) + (xScale.step() + xScale.bandwidth()) / 2,
                y: stackedData[index],
                nullData,
                isExtension: true
              });
            }
            return rep;
          }
          return {
            x,
            y: stackedData[index],
            nullData
          };
        })) ?? [];
        const d3Data = connectNulls ? formattedData.filter((d2) => !d2.nullData) : formattedData;
        const areaPath = area_default().x((d2) => d2.isExtension ? d2.x : xPosition(d2.x)).defined((d2) => connectNulls || !d2.nullData || !!d2.isExtension).y0((d2) => {
          if (typeof baseline === "number") {
            return yScale(baseline);
          }
          if (baseline === "max") {
            return yScale.range()[1];
          }
          if (baseline === "min") {
            return yScale.range()[0];
          }
          const value = d2.y && yScale(d2.y[0]);
          if (Number.isNaN(value)) {
            return yScale.range()[0];
          }
          return value;
        }).y1((d2) => d2.y && yScale(d2.y[1]));
        const d = areaPath.curve(getCurveFactory(curve))(d3Data) || "";
        areaPlotData.push({
          area: series[seriesId].area,
          color: series[seriesId].color,
          gradientId,
          d,
          seriesId
        });
      }
    }
    return areaPlotData;
  }, [seriesData, defaultXAxisId, defaultYAxisId, xAxes, yAxes, getGradientId]);
  return allData;
}

// ../node_modules/@mui/x-charts/esm/LineChart/AreaPlot.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var _excluded3 = ["slots", "slotProps", "onItemClick", "skipAnimation"];
var AreaPlotRoot = styled_default("g", {
  name: "MuiAreaPlot",
  slot: "Root"
})({
  [`& .${areaElementClasses.root}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${ANIMATION_DURATION_MS}ms`,
    transitionTimingFunction: ANIMATION_TIMING_FUNCTION
  }
});
var useAggregatedData = () => {
  const {
    xAxis: xAxes
  } = useXAxes();
  const {
    yAxis: yAxes
  } = useYAxes();
  return useAreaPlotData(xAxes, yAxes);
};
function AreaPlot(props) {
  const {
    slots,
    slotProps,
    onItemClick,
    skipAnimation: inSkipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const isZoomInteracting = useInternalIsZoomInteracting();
  const skipAnimation = useSkipAnimation(isZoomInteracting || inSkipAnimation);
  const completedData = useAggregatedData();
  return (0, import_jsx_runtime4.jsx)(AreaPlotRoot, _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color,
      area,
      gradientId
    }) => !!area && (0, import_jsx_runtime4.jsx)(AreaElement, {
      id: seriesId,
      d,
      color,
      gradientId,
      slots,
      slotProps,
      onClick: onItemClick && ((event) => onItemClick(event, {
        type: "line",
        seriesId
      })),
      skipAnimation
    }, seriesId))
  }));
}
true ? AreaPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line area item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: import_prop_types3.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/LinePlot.js
var React9 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/LineElement.js
var React7 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/AnimatedLine.js
var React6 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var _excluded4 = ["skipAnimation", "ownerState"];
var AnimatedLine = React6.forwardRef(function AnimatedLine2(props, ref) {
  const {
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const animateProps = useAnimateLine(_extends({}, props, {
    ref
  }));
  return (0, import_jsx_runtime5.jsx)(AppearingMask, {
    skipAnimation,
    id: `${ownerState.id}-line-clip`,
    children: (0, import_jsx_runtime5.jsx)("path", _extends({
      stroke: ownerState.gradientId ? `url(#${ownerState.gradientId})` : ownerState.color,
      strokeWidth: 2,
      strokeLinejoin: "round",
      fill: "none",
      filter: ownerState.isHighlighted ? "brightness(120%)" : void 0,
      opacity: ownerState.isFaded ? 0.3 : 1,
      "data-series": ownerState.id,
      "data-highlighted": ownerState.isHighlighted || void 0,
      "data-faded": ownerState.isFaded || void 0
    }, other, animateProps))
  });
});
if (true) AnimatedLine.displayName = "AnimatedLine";
true ? AnimatedLine.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: import_prop_types4.default.string.isRequired,
  ownerState: import_prop_types4.default.shape({
    classes: import_prop_types4.default.object,
    color: import_prop_types4.default.string.isRequired,
    gradientId: import_prop_types4.default.string,
    id: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]).isRequired,
    isFaded: import_prop_types4.default.bool.isRequired,
    isHighlighted: import_prop_types4.default.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types4.default.bool
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/LineElement.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _excluded5 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function getLineElementUtilityClass(slot) {
  return generateUtilityClass("MuiLineElement", slot);
}
var lineElementClasses = generateUtilityClasses("MuiLineElement", ["root", "highlighted", "faded", "series"]);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getLineElementUtilityClass, classes);
};
function LineElement(props) {
  const {
    id,
    classes: innerClasses,
    color,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const interactionProps = useInteractionItemProps({
    type: "line",
    seriesId: id
  });
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses2(ownerState);
  const Line = (slots == null ? void 0 : slots.line) ?? AnimatedLine;
  const lineProps = useSlotProps_default({
    elementType: Line,
    externalSlotProps: slotProps == null ? void 0 : slotProps.line,
    additionalProps: _extends({}, interactionProps, {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime6.jsx)(Line, _extends({}, other, lineProps));
}
true ? LineElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types5.default.object,
  color: import_prop_types5.default.string.isRequired,
  d: import_prop_types5.default.string.isRequired,
  gradientId: import_prop_types5.default.string,
  id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
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
  slots: import_prop_types5.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/useLinePlotData.js
var React8 = __toESM(require_react(), 1);
function useLinePlotData(xAxes, yAxes) {
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const getGradientId = useChartGradientIdBuilder();
  const allData = React8.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
    const {
      series,
      stackingGroups
    } = seriesData;
    const linePlotData = [];
    for (const stackingGroup of stackingGroups) {
      const groupIds = stackingGroup.ids;
      for (const seriesId of groupIds) {
        const {
          xAxisId = defaultXAxisId,
          yAxisId = defaultYAxisId,
          stackedData,
          data,
          connectNulls,
          curve,
          strictStepCurve
        } = series[seriesId];
        if (!(xAxisId in xAxes) || !(yAxisId in yAxes)) {
          continue;
        }
        const xScale = xAxes[xAxisId].scale;
        const xPosition = getValueToPositionMapper(xScale);
        const yScale = yAxes[yAxisId].scale;
        const xData = xAxes[xAxisId].data;
        const gradientId = yAxes[yAxisId].colorScale && getGradientId(yAxisId) || xAxes[xAxisId].colorScale && getGradientId(xAxisId) || void 0;
        if (true) {
          if (xData === void 0) {
            throw new Error(`MUI X Charts: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
          }
          if (xData.length < stackedData.length) {
            warnOnce(`MUI X Charts: The data length of the x axis (${xData.length} items) is lower than the length of series (${stackedData.length} items).`, "error");
          }
        }
        const shouldExpand = (curve == null ? void 0 : curve.includes("step")) && !strictStepCurve && isOrdinalScale(xScale);
        const formattedData = (xData == null ? void 0 : xData.flatMap((x, index) => {
          const nullData = data[index] == null;
          if (shouldExpand) {
            const rep = [{
              x,
              y: stackedData[index],
              nullData,
              isExtension: false
            }];
            if (!nullData && (index === 0 || data[index - 1] == null)) {
              rep.unshift({
                x: (xScale(x) ?? 0) - (xScale.step() - xScale.bandwidth()) / 2,
                y: stackedData[index],
                nullData,
                isExtension: true
              });
            }
            if (!nullData && (index === data.length - 1 || data[index + 1] == null)) {
              rep.push({
                x: (xScale(x) ?? 0) + (xScale.step() + xScale.bandwidth()) / 2,
                y: stackedData[index],
                nullData,
                isExtension: true
              });
            }
            return rep;
          }
          return {
            x,
            y: stackedData[index],
            nullData
          };
        })) ?? [];
        const d3Data = connectNulls ? formattedData.filter((d2) => !d2.nullData) : formattedData;
        const linePath = line_default().x((d2) => d2.isExtension ? d2.x : xPosition(d2.x)).defined((d2) => connectNulls || !d2.nullData || !!d2.isExtension).y((d2) => yScale(d2.y[1]));
        const d = linePath.curve(getCurveFactory(curve))(d3Data) || "";
        linePlotData.push({
          color: series[seriesId].color,
          gradientId,
          d,
          seriesId
        });
      }
    }
    return linePlotData;
  }, [seriesData, defaultXAxisId, defaultYAxisId, xAxes, yAxes, getGradientId]);
  return allData;
}

// ../node_modules/@mui/x-charts/esm/LineChart/LinePlot.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var _excluded6 = ["slots", "slotProps", "skipAnimation", "onItemClick"];
var LinePlotRoot = styled_default("g", {
  name: "MuiAreaPlot",
  slot: "Root"
})({
  [`& .${lineElementClasses.root}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${ANIMATION_DURATION_MS}ms`,
    transitionTimingFunction: ANIMATION_TIMING_FUNCTION
  }
});
var useAggregatedData2 = () => {
  const {
    xAxis: xAxes
  } = useXAxes();
  const {
    yAxis: yAxes
  } = useYAxes();
  return useLinePlotData(xAxes, yAxes);
};
function LinePlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation: inSkipAnimation,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const isZoomInteracting = useInternalIsZoomInteracting();
  const skipAnimation = useSkipAnimation(isZoomInteracting || inSkipAnimation);
  const completedData = useAggregatedData2();
  return (0, import_jsx_runtime7.jsx)(LinePlotRoot, _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color,
      gradientId
    }) => {
      return (0, import_jsx_runtime7.jsx)(LineElement, {
        id: seriesId,
        d,
        color,
        gradientId,
        skipAnimation,
        slots,
        slotProps,
        onClick: onItemClick && ((event) => onItemClick(event, {
          type: "line",
          seriesId
        }))
      }, seriesId);
    })
  }));
}
true ? LinePlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: import_prop_types6.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types6.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types6.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types6.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/MarkPlot.js
var import_prop_types9 = __toESM(require_prop_types(), 1);
var React13 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/CircleMarkElement.js
var React10 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/markElementClasses.js
function getMarkElementUtilityClass(slot) {
  return generateUtilityClass("MuiMarkElement", slot);
}
var markElementClasses = generateUtilityClasses("MuiMarkElement", ["root", "highlighted", "faded", "animate", "series"]);
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted,
    skipAnimation
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded", skipAnimation ? void 0 : "animate"]
  };
  return composeClasses(slots, getMarkElementUtilityClass, classes);
};

// ../node_modules/@mui/x-charts/esm/LineChart/CircleMarkElement.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var _excluded7 = ["x", "y", "id", "classes", "color", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted"];
var Circle = styled_default("circle")({
  [`&.${markElementClasses.animate}`]: {
    transitionDuration: `${ANIMATION_DURATION_MS}ms`,
    transitionProperty: "cx, cy, opacity",
    transitionTimingFunction: ANIMATION_TIMING_FUNCTION
  }
});
function CircleMarkElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color,
    dataIndex,
    onClick,
    skipAnimation,
    isFaded = false,
    isHighlighted = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const theme = useTheme();
  const interactionProps = useInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted,
    isFaded,
    color,
    skipAnimation
  };
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime8.jsx)(Circle, _extends({}, other, {
    cx: x,
    cy: y,
    r: 5,
    fill: (theme.vars || theme).palette.background.paper,
    stroke: color,
    strokeWidth: 2,
    className: classes.root,
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, interactionProps, {
    "data-highlighted": isHighlighted || void 0,
    "data-faded": isFaded || void 0
  }));
}
true ? CircleMarkElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types7.default.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: import_prop_types7.default.number.isRequired,
  id: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]).isRequired,
  /**
   * The shape of the marker.
   */
  shape: import_prop_types7.default.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types7.default.bool
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/MarkElement.js
var React11 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/internals/getSymbol.js
function getSymbol(shape) {
  switch (shape) {
    case "circle":
      return 0;
    case "cross":
      return 1;
    case "diamond":
      return 2;
    case "square":
      return 3;
    case "star":
      return 4;
    case "triangle":
      return 5;
    case "wye":
      return 6;
    default:
      return 0;
  }
}

// ../node_modules/@mui/x-charts/esm/LineChart/MarkElement.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var _excluded8 = ["x", "y", "id", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted"];
var MarkElementPath = styled_default("path", {
  name: "MuiMarkElement",
  slot: "Root"
})(({
  ownerState,
  theme
}) => ({
  fill: (theme.vars || theme).palette.background.paper,
  stroke: ownerState.color,
  strokeWidth: 2,
  [`&.${markElementClasses.animate}`]: {
    transitionDuration: `${ANIMATION_DURATION_MS}ms`,
    transitionProperty: "transform, transform-origin, opacity",
    transitionTimingFunction: ANIMATION_TIMING_FUNCTION
  }
}));
function MarkElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color,
    shape,
    dataIndex,
    onClick,
    skipAnimation,
    isFaded = false,
    isHighlighted = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const interactionProps = useInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted,
    isFaded,
    color,
    skipAnimation
  };
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime9.jsx)(MarkElementPath, _extends({}, other, {
    style: {
      transform: `translate(${x}px, ${y}px)`,
      transformOrigin: `${x}px ${y}px`
    },
    ownerState,
    className: classes.root,
    d: Symbol(symbolsFill[getSymbol(shape)])(),
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, interactionProps, {
    "data-highlighted": isHighlighted || void 0,
    "data-faded": isFaded || void 0
  }));
}
true ? MarkElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types8.default.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: import_prop_types8.default.number.isRequired,
  id: import_prop_types8.default.oneOfType([import_prop_types8.default.number, import_prop_types8.default.string]).isRequired,
  /**
   * If `true`, the marker is faded.
   * @default false
   */
  isFaded: import_prop_types8.default.bool,
  /**
   * If `true`, the marker is highlighted.
   * @default false
   */
  isHighlighted: import_prop_types8.default.bool,
  /**
   * The shape of the marker.
   */
  shape: import_prop_types8.default.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   */
  skipAnimation: import_prop_types8.default.bool
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/useMarkPlotData.js
var React12 = __toESM(require_react(), 1);
function useMarkPlotData(xAxes, yAxes) {
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = useXAxes().xAxisIds[0];
  const defaultYAxisId = useYAxes().yAxisIds[0];
  const chartId = useChartId();
  const {
    instance
  } = useChartContext();
  const allData = React12.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
    const {
      series,
      stackingGroups
    } = seriesData;
    const markPlotData = [];
    for (const stackingGroup of stackingGroups) {
      const groupIds = stackingGroup.ids;
      for (const seriesId of groupIds) {
        const {
          xAxisId = defaultXAxisId,
          yAxisId = defaultYAxisId,
          stackedData,
          data,
          showMark = true,
          shape = "circle"
        } = series[seriesId];
        if (showMark === false) {
          continue;
        }
        if (!(xAxisId in xAxes) || !(yAxisId in yAxes)) {
          continue;
        }
        const xScale = getValueToPositionMapper(xAxes[xAxisId].scale);
        const yScale = yAxes[yAxisId].scale;
        const xData = xAxes[xAxisId].data;
        if (true) {
          if (xData === void 0) {
            throw new Error(`MUI X Charts: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
          }
        }
        const clipId = cleanId(`${chartId}-${seriesId}-line-clip`);
        const colorGetter = getColor_default(series[seriesId], xAxes[xAxisId], yAxes[yAxisId]);
        const marks = [];
        if (xData) {
          for (let index = 0; index < xData.length; index += 1) {
            const x = xData[index];
            const value = data[index] == null ? null : stackedData[index][1];
            if (value === null) {
              continue;
            }
            const y = yScale(value);
            const xPos = xScale(x);
            if (!instance.isPointInside(xPos, y)) {
              continue;
            }
            if (showMark !== true) {
              const shouldInclude = showMark({
                x: xPos,
                y,
                index,
                position: x,
                value
              });
              if (!shouldInclude) {
                continue;
              }
            }
            marks.push({
              x: xPos,
              y,
              index,
              color: colorGetter(index)
            });
          }
        }
        markPlotData.push({
          seriesId,
          clipId,
          shape,
          xAxisId,
          marks
        });
      }
    }
    return markPlotData;
  }, [seriesData, defaultXAxisId, defaultYAxisId, chartId, xAxes, yAxes, instance]);
  return allData;
}

// ../node_modules/@mui/x-charts/esm/LineChart/MarkPlot.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var _excluded9 = ["slots", "slotProps", "skipAnimation", "onItemClick"];
function MarkPlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation: inSkipAnimation,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const isZoomInteracting = useInternalIsZoomInteracting();
  const skipAnimation = useSkipAnimation(isZoomInteracting || inSkipAnimation);
  const {
    xAxis
  } = useXAxes();
  const {
    yAxis
  } = useYAxes();
  const {
    store
  } = useChartContext();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlightedGetter();
  const xAxisHighlightIndexes = store.use(selectorChartsHighlightXAxisIndex);
  const highlightedItems = React13.useMemo(() => {
    const rep = {};
    for (const {
      dataIndex,
      axisId
    } of xAxisHighlightIndexes) {
      if (rep[axisId] === void 0) {
        rep[axisId] = /* @__PURE__ */ new Set([dataIndex]);
      } else {
        rep[axisId].add(dataIndex);
      }
    }
    return rep;
  }, [xAxisHighlightIndexes]);
  const completedData = useMarkPlotData(xAxis, yAxis);
  return (0, import_jsx_runtime10.jsx)("g", _extends({}, other, {
    children: completedData.map(({
      seriesId,
      clipId,
      shape,
      xAxisId,
      marks
    }) => {
      const Mark = (slots == null ? void 0 : slots.mark) ?? (shape === "circle" ? CircleMarkElement : MarkElement);
      const isSeriesHighlighted = isHighlighted({
        seriesId
      });
      const isSeriesFaded = !isSeriesHighlighted && isFaded({
        seriesId
      });
      return (0, import_jsx_runtime10.jsx)("g", {
        clipPath: `url(#${clipId})`,
        "data-series": seriesId,
        children: marks.map(({
          x,
          y,
          index,
          color
        }) => {
          var _a;
          return (0, import_jsx_runtime10.jsx)(Mark, _extends({
            id: seriesId,
            dataIndex: index,
            shape,
            color,
            x,
            y,
            skipAnimation,
            onClick: onItemClick && ((event) => onItemClick(event, {
              type: "line",
              seriesId,
              dataIndex: index
            })),
            isHighlighted: ((_a = highlightedItems[xAxisId]) == null ? void 0 : _a.has(index)) || isSeriesHighlighted,
            isFaded: isSeriesFaded
          }, slotProps == null ? void 0 : slotProps.mark), `${seriesId}-${index}`);
        })
      }, seriesId);
    })
  }));
}
true ? MarkPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line mark item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line mark item identifier.
   */
  onItemClick: import_prop_types9.default.func,
  /**
   * If `true`, animations are skipped.
   */
  skipAnimation: import_prop_types9.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types9.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types9.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/LineHighlightPlot.js
var React15 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/LineHighlightElement.js
var React14 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var _excluded10 = ["x", "y", "id", "classes", "color", "shape"];
function getHighlightElementUtilityClass(slot) {
  return generateUtilityClass("MuiHighlightElement", slot);
}
var lineHighlightElementClasses = generateUtilityClasses("MuiHighlightElement", ["root"]);
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    id
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`]
  };
  return composeClasses(slots, getHighlightElementUtilityClass, classes);
};
function LineHighlightElement(props) {
  const {
    x,
    y,
    color,
    shape
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const classes = useUtilityClasses4(props);
  const Element = shape === "circle" ? "circle" : "path";
  const additionalProps = shape === "circle" ? {
    cx: 0,
    cy: 0,
    r: other.r === void 0 ? 5 : other.r
  } : {
    d: Symbol(symbolsFill[getSymbol(shape)])()
  };
  const transformOrigin = reactMajor_default > 18 ? {
    transformOrigin: `${x} ${y}`
  } : {
    "transform-origin": `${x} ${y}`
  };
  return (0, import_jsx_runtime11.jsx)(Element, _extends({
    pointerEvents: "none",
    className: classes.root,
    transform: `translate(${x} ${y})`,
    fill: color
  }, transformOrigin, additionalProps, other));
}
true ? LineHighlightElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types10.default.object,
  id: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]).isRequired,
  shape: import_prop_types10.default.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/LineHighlightPlot.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var _excluded11 = ["slots", "slotProps"];
function LineHighlightPlot(props) {
  const {
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const seriesData = useLineSeriesContext();
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  const {
    instance
  } = useChartContext();
  const store = useStore();
  const highlightedIndexes = store.use(selectorChartsHighlightXAxisIndex);
  if (highlightedIndexes.length === 0) {
    return null;
  }
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  const Element = (slots == null ? void 0 : slots.lineHighlight) ?? LineHighlightElement;
  return (0, import_jsx_runtime12.jsx)("g", _extends({}, other, {
    children: highlightedIndexes.flatMap(({
      dataIndex: highlightedIndex,
      axisId: highlightedAxisId
    }) => stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.flatMap((seriesId) => {
        const {
          xAxisId = defaultXAxisId,
          yAxisId = defaultYAxisId,
          stackedData,
          data,
          disableHighlight,
          shape = "circle"
        } = series[seriesId];
        if (disableHighlight || data[highlightedIndex] == null) {
          return null;
        }
        if (highlightedAxisId !== xAxisId) {
          return null;
        }
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        if (xData === void 0) {
          throw new Error(`MUI X Charts: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
        }
        const x = xScale(xData[highlightedIndex]);
        const y = yScale(stackedData[highlightedIndex][1]);
        if (!instance.isPointInside(x, y)) {
          return null;
        }
        const colorGetter = getColor_default(series[seriesId], xAxis[xAxisId], yAxis[yAxisId]);
        return (0, import_jsx_runtime12.jsx)(Element, _extends({
          id: seriesId,
          color: colorGetter(highlightedIndex),
          x,
          y,
          shape
        }, slotProps == null ? void 0 : slotProps.lineHighlight), `${seriesId}`);
      });
    }))
  }));
}
true ? LineHighlightPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types11.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types11.default.object
} : void 0;

// ../node_modules/@mui/x-charts/esm/LineChart/useLineChartProps.js
var React16 = __toESM(require_react(), 1);

// ../node_modules/@mui/x-charts/esm/LineChart/LineChart.plugins.js
var LINE_CHART_PLUGINS = [useChartZAxis, useChartBrush, useChartTooltip, useChartInteraction, useChartCartesianAxis, useChartHighlight, useChartKeyboardNavigation];

// ../node_modules/@mui/x-charts/esm/LineChart/useLineChartProps.js
var _excluded12 = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "onAreaClick", "onLineClick", "onMarkClick", "axisHighlight", "disableLineItemHighlight", "hideLegend", "grid", "children", "slots", "slotProps", "skipAnimation", "loading", "highlightedItem", "onHighlightChange", "className", "showToolbar", "brushConfig"];
var useLineChartProps = (props) => {
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
    onAreaClick,
    onLineClick,
    onMarkClick,
    axisHighlight,
    disableLineItemHighlight,
    grid,
    children,
    slots,
    slotProps,
    skipAnimation,
    loading,
    highlightedItem,
    onHighlightChange,
    className,
    brushConfig
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  const seriesWithDefault = React16.useMemo(() => series.map((s) => _extends({
    disableHighlight: !!disableLineItemHighlight,
    type: "line"
  }, s)), [disableLineItemHighlight, series]);
  const chartContainerProps = _extends({}, other, {
    series: seriesWithDefault,
    width,
    height,
    margin,
    colors,
    dataset,
    xAxis: xAxis ?? [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: "point",
      data: Array.from({
        length: Math.max(...series.map((s) => (s.data ?? dataset ?? []).length))
      }, (_, index) => index)
    }],
    yAxis,
    highlightedItem,
    onHighlightChange,
    disableAxisListener: ((_a = slotProps == null ? void 0 : slotProps.tooltip) == null ? void 0 : _a.trigger) !== "axis" && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none",
    className,
    skipAnimation,
    brushConfig,
    plugins: LINE_CHART_PLUGINS
  });
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
  const areaPlotProps = {
    slots,
    slotProps,
    onItemClick: onAreaClick
  };
  const linePlotProps = {
    slots,
    slotProps,
    onItemClick: onLineClick
  };
  const markPlotProps = {
    slots,
    slotProps,
    onItemClick: onMarkClick,
    skipAnimation
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
  const axisHighlightProps = _extends({
    x: "line"
  }, axisHighlight);
  const lineHighlightPlotProps = {
    slots,
    slotProps
  };
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
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    areaPlotProps,
    linePlotProps,
    markPlotProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    lineHighlightPlotProps,
    legendProps,
    children
  };
};

// ../node_modules/@mui/x-charts/esm/LineChart/FocusedLineMark.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var RADIUS = 6;
function FocusedLineMark() {
  const theme = useTheme();
  const focusedItem = useFocusedItem();
  const lineSeries = useLineSeriesContext();
  const {
    xAxis,
    xAxisIds
  } = useXAxes();
  const {
    yAxis,
    yAxisIds
  } = useYAxes();
  if (focusedItem === null || focusedItem.type !== "line" || !lineSeries) {
    return null;
  }
  const series = lineSeries == null ? void 0 : lineSeries.series[focusedItem.seriesId];
  const xAxisId = series.xAxisId ?? xAxisIds[0];
  const yAxisId = series.yAxisId ?? yAxisIds[0];
  return (0, import_jsx_runtime13.jsx)("rect", {
    fill: "none",
    stroke: (theme.vars ?? theme).palette.text.primary,
    strokeWidth: 2,
    x: xAxis[xAxisId].scale(xAxis[xAxisId].data[focusedItem.dataIndex]) - RADIUS,
    y: yAxis[yAxisId].scale(series.stackedData[focusedItem.dataIndex][1]) - RADIUS,
    width: 2 * RADIUS,
    height: 2 * RADIUS,
    rx: 3,
    ry: 3
  });
}

// ../node_modules/@mui/x-charts/esm/LineChart/LineChart.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var LineChart = React17.forwardRef(function LineChart2(inProps, ref) {
  var _a, _b, _c, _d;
  const props = useThemeProps({
    props: inProps,
    name: "MuiLineChart"
  });
  const {
    chartsWrapperProps,
    chartContainerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    areaPlotProps,
    linePlotProps,
    markPlotProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    lineHighlightPlotProps,
    legendProps,
    children
  } = useLineChartProps(props);
  const {
    chartDataProviderProps,
    chartsSurfaceProps
  } = useChartContainerProps(chartContainerProps, ref);
  const Tooltip = ((_a = props.slots) == null ? void 0 : _a.tooltip) ?? ChartsTooltip;
  const Toolbar = (_b = props.slots) == null ? void 0 : _b.toolbar;
  return (0, import_jsx_runtime14.jsx)(ChartDataProvider, _extends({}, chartDataProviderProps, {
    children: (0, import_jsx_runtime14.jsxs)(ChartsWrapper, _extends({}, chartsWrapperProps, {
      children: [props.showToolbar && Toolbar ? (0, import_jsx_runtime14.jsx)(Toolbar, _extends({}, (_c = props.slotProps) == null ? void 0 : _c.toolbar)) : null, !props.hideLegend && (0, import_jsx_runtime14.jsx)(ChartsLegend, _extends({}, legendProps)), (0, import_jsx_runtime14.jsxs)(ChartsSurface, _extends({}, chartsSurfaceProps, {
        children: [(0, import_jsx_runtime14.jsx)(ChartsGrid, _extends({}, gridProps)), (0, import_jsx_runtime14.jsxs)("g", _extends({}, clipPathGroupProps, {
          children: [(0, import_jsx_runtime14.jsx)(AreaPlot, _extends({}, areaPlotProps)), (0, import_jsx_runtime14.jsx)(LinePlot, _extends({}, linePlotProps)), (0, import_jsx_runtime14.jsx)(ChartsOverlay, _extends({}, overlayProps)), (0, import_jsx_runtime14.jsx)(ChartsAxisHighlight, _extends({}, axisHighlightProps))]
        })), (0, import_jsx_runtime14.jsx)(FocusedLineMark, {}), (0, import_jsx_runtime14.jsx)(ChartsAxis, _extends({}, chartsAxisProps)), (0, import_jsx_runtime14.jsx)("g", {
          "data-drawing-container": true,
          children: (0, import_jsx_runtime14.jsx)(MarkPlot, _extends({}, markPlotProps))
        }), (0, import_jsx_runtime14.jsx)(LineHighlightPlot, _extends({}, lineHighlightPlotProps)), (0, import_jsx_runtime14.jsx)(ChartsClipPath, _extends({}, clipPathProps)), children]
      })), !props.loading && (0, import_jsx_runtime14.jsx)(Tooltip, _extends({}, (_d = props.slotProps) == null ? void 0 : _d.tooltip))]
    }))
  }));
});
if (true) LineChart.displayName = "LineChart";
true ? LineChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types12.default.shape({
    current: import_prop_types12.default.object
  }),
  /**
   * The configuration of axes highlight.
   * @see See {@link https://mui.com/x/react-charts/highlighting/ highlighting docs} for more details.
   * @default { x: 'line' }
   */
  axisHighlight: import_prop_types12.default.shape({
    x: import_prop_types12.default.oneOf(["band", "line", "none"]),
    y: import_prop_types12.default.oneOf(["band", "line", "none"])
  }),
  /**
   * Configuration for the brush interaction.
   */
  brushConfig: import_prop_types12.default.shape({
    enabled: import_prop_types12.default.bool,
    preventHighlight: import_prop_types12.default.bool,
    preventTooltip: import_prop_types12.default.bool
  }),
  children: import_prop_types12.default.node,
  className: import_prop_types12.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string), import_prop_types12.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types12.default.arrayOf(import_prop_types12.default.object),
  desc: import_prop_types12.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types12.default.bool,
  /**
   * If `true`, render the line highlight item.
   */
  disableLineItemHighlight: import_prop_types12.default.bool,
  enableKeyboardNavigation: import_prop_types12.default.bool,
  /**
   * Options to enable features planned for the next major.
   */
  experimentalFeatures: import_prop_types12.default.shape({
    preferStrictDomainInLineCharts: import_prop_types12.default.bool
  }),
  /**
   * Option to display a cartesian grid in the background.
   */
  grid: import_prop_types12.default.shape({
    horizontal: import_prop_types12.default.bool,
    vertical: import_prop_types12.default.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types12.default.number,
  /**
   * If `true`, the legend is not rendered.
   */
  hideLegend: import_prop_types12.default.bool,
  /**
   * The controlled axis highlight.
   * Identified by the axis id, and data index.
   */
  highlightedAxis: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
    axisId: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]).isRequired,
    dataIndex: import_prop_types12.default.number.isRequired
  })),
  /**
   * The highlighted item.
   * Used when the highlight is controlled.
   */
  highlightedItem: import_prop_types12.default.shape({
    dataIndex: import_prop_types12.default.number,
    seriesId: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]).isRequired
  }),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types12.default.string,
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: import_prop_types12.default.bool,
  /**
   * Localized text for chart components.
   */
  localeText: import_prop_types12.default.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
    bottom: import_prop_types12.default.number,
    left: import_prop_types12.default.number,
    right: import_prop_types12.default.number,
    top: import_prop_types12.default.number
  })]),
  /**
   * Callback fired when an area element is clicked.
   */
  onAreaClick: import_prop_types12.default.func,
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | ChartsAxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: import_prop_types12.default.func,
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: import_prop_types12.default.func,
  /**
   * The function called when the pointer position corresponds to a new axis data item.
   * This update can either be caused by a pointer movement, or an axis update.
   * In case of multiple axes, the function is called if at least one axis is updated.
   * The argument contains the identifier for all axes with a `data` property.
   * @param {AxisItemIdentifier[]} axisItems The array of axes item identifiers.
   */
  onHighlightedAxisChange: import_prop_types12.default.func,
  /**
   * Callback fired when a line element is clicked.
   */
  onLineClick: import_prop_types12.default.func,
  /**
   * Callback fired when a mark element is clicked.
   */
  onMarkClick: import_prop_types12.default.func,
  /**
   * The series to display in the line chart.
   * An array of [[LineSeries]] objects.
   */
  series: import_prop_types12.default.arrayOf(import_prop_types12.default.object).isRequired,
  /**
   * If true, shows the default chart toolbar.
   * @default false
   */
  showToolbar: import_prop_types12.default.bool,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types12.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types12.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types12.default.object,
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
  theme: import_prop_types12.default.oneOf(["dark", "light"]),
  title: import_prop_types12.default.string,
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types12.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  xAxis: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    barGapRatio: import_prop_types12.default.number,
    categoryGapRatio: import_prop_types12.default.number,
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      type: import_prop_types12.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types12.default.string,
      values: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number, import_prop_types12.default.string]).isRequired)
    }), import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    groups: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
      getValue: import_prop_types12.default.func.isRequired,
      tickLabelStyle: import_prop_types12.default.object,
      tickSize: import_prop_types12.default.number
    })),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    offset: import_prop_types12.default.number,
    ordinalTimeTicks: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types12.default.shape({
      format: import_prop_types12.default.func.isRequired,
      getTickNumber: import_prop_types12.default.func.isRequired,
      isTick: import_prop_types12.default.func.isRequired
    })]).isRequired),
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["band"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      type: import_prop_types12.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types12.default.string,
      values: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number, import_prop_types12.default.string]).isRequired)
    }), import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    groups: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
      getValue: import_prop_types12.default.func.isRequired,
      tickLabelStyle: import_prop_types12.default.object,
      tickSize: import_prop_types12.default.number
    })),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    offset: import_prop_types12.default.number,
    ordinalTimeTicks: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types12.default.shape({
      format: import_prop_types12.default.func.isRequired,
      getTickNumber: import_prop_types12.default.func.isRequired,
      isTick: import_prop_types12.default.func.isRequired
    })]).isRequired),
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["point"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["log"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    constant: import_prop_types12.default.number,
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["symlog"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["pow"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["sqrt"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    min: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["time"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    min: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["utc"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["x"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    height: import_prop_types12.default.number,
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["bottom", "none", "top"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["linear"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelMinGap: import_prop_types12.default.number,
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func
  })]).isRequired),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  yAxis: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    barGapRatio: import_prop_types12.default.number,
    categoryGapRatio: import_prop_types12.default.number,
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      type: import_prop_types12.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types12.default.string,
      values: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number, import_prop_types12.default.string]).isRequired)
    }), import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    groups: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
      getValue: import_prop_types12.default.func.isRequired,
      tickLabelStyle: import_prop_types12.default.object,
      tickSize: import_prop_types12.default.number
    })),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    offset: import_prop_types12.default.number,
    ordinalTimeTicks: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types12.default.shape({
      format: import_prop_types12.default.func.isRequired,
      getTickNumber: import_prop_types12.default.func.isRequired,
      isTick: import_prop_types12.default.func.isRequired
    })]).isRequired),
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["band"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      type: import_prop_types12.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types12.default.string,
      values: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number, import_prop_types12.default.string]).isRequired)
    }), import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    groups: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
      getValue: import_prop_types12.default.func.isRequired,
      tickLabelStyle: import_prop_types12.default.object,
      tickSize: import_prop_types12.default.number
    })),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    offset: import_prop_types12.default.number,
    ordinalTimeTicks: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["biweekly", "days", "hours", "months", "quarterly", "weeks", "years"]), import_prop_types12.default.shape({
      format: import_prop_types12.default.func.isRequired,
      getTickNumber: import_prop_types12.default.func.isRequired,
      isTick: import_prop_types12.default.func.isRequired
    })]).isRequired),
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["point"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["log"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    constant: import_prop_types12.default.number,
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["symlog"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["pow"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["sqrt"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    min: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["time"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    min: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.shape({
      valueOf: import_prop_types12.default.func.isRequired
    })]),
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["utc"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  }), import_prop_types12.default.shape({
    axis: import_prop_types12.default.oneOf(["y"]),
    classes: import_prop_types12.default.object,
    colorMap: import_prop_types12.default.oneOfType([import_prop_types12.default.shape({
      color: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.string.isRequired), import_prop_types12.default.func]).isRequired,
      max: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      min: import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]),
      type: import_prop_types12.default.oneOf(["continuous"]).isRequired
    }), import_prop_types12.default.shape({
      colors: import_prop_types12.default.arrayOf(import_prop_types12.default.string).isRequired,
      thresholds: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.instanceOf(Date), import_prop_types12.default.number]).isRequired).isRequired,
      type: import_prop_types12.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types12.default.array,
    dataKey: import_prop_types12.default.string,
    disableLine: import_prop_types12.default.bool,
    disableTicks: import_prop_types12.default.bool,
    domainLimit: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["nice", "strict"]), import_prop_types12.default.func]),
    hideTooltip: import_prop_types12.default.bool,
    id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
    ignoreTooltip: import_prop_types12.default.bool,
    label: import_prop_types12.default.string,
    labelStyle: import_prop_types12.default.object,
    max: import_prop_types12.default.number,
    min: import_prop_types12.default.number,
    offset: import_prop_types12.default.number,
    position: import_prop_types12.default.oneOf(["left", "none", "right"]),
    reverse: import_prop_types12.default.bool,
    scaleType: import_prop_types12.default.oneOf(["linear"]),
    slotProps: import_prop_types12.default.object,
    slots: import_prop_types12.default.object,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    tickInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.array, import_prop_types12.default.func]),
    tickLabelInterval: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["auto"]), import_prop_types12.default.func]),
    tickLabelPlacement: import_prop_types12.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types12.default.object,
    tickMaxStep: import_prop_types12.default.number,
    tickMinStep: import_prop_types12.default.number,
    tickNumber: import_prop_types12.default.number,
    tickPlacement: import_prop_types12.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types12.default.number,
    tickSpacing: import_prop_types12.default.number,
    valueFormatter: import_prop_types12.default.func,
    width: import_prop_types12.default.number
  })]).isRequired)
} : void 0;
export {
  AnimatedArea,
  AnimatedLine,
  AreaElement,
  AreaPlot,
  FocusedLineMark,
  LINE_CHART_PLUGINS,
  LineChart,
  LineElement,
  LineHighlightElement,
  LineHighlightPlot,
  LinePlot,
  MarkElement,
  MarkPlot,
  areaElementClasses,
  getAreaElementUtilityClass,
  getHighlightElementUtilityClass,
  getLineElementUtilityClass,
  getMarkElementUtilityClass,
  lineElementClasses,
  lineHighlightElementClasses,
  markElementClasses
};
//# sourceMappingURL=@mui_x-charts_LineChart.js.map
