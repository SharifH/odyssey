import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "upload-file": {
        "height": 600,
        "width": 800,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "inline-block"
    },
    "dropzone-text": {
        "fontSize": 2,
        "paddingTop": "24%",
        "paddingRight": "24%",
        "paddingBottom": "24%",
        "paddingLeft": "24%"
    },
    "gaugejs-wrap": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "gaugejs-wrap canvasgaugejs": {
        "width": "100% !important",
        "height": "auto !important"
    },
    "gaugejs-wrap i": {
        "top": "50%",
        "display": "block",
        "width": "100%",
        "textAlign": "center",
        "position": "absolute",
        "left": 0,
        "zIndex": 1000,
        "marginTop": -15,
        "fontSize": 30
    },
    "gaugejs-wrapsparkline value": {
        "top": "50%",
        "display": "block",
        "width": "100%",
        "textAlign": "center",
        "position": "absolute",
        "marginTop": -5,
        "fontSize": 10,
        "lineHeight": 10
    },
    "gaugejs-wraptype-2 value": {
        "display": "block",
        "marginTop": -85
    },
    "gaugejs-wraptype-2 label": {
        "display": "block",
        "marginTop": -10,
        "fontSize": 10,
        "fontWeight": "600",
        "color": "#9da0a8",
        "textTransform": "uppercase"
    },
    "gaugejs-wrapsparkline": {
        "position": "relative"
    },
    "switchswitch-default": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "top",
        "width": 40,
        "height": 24,
        "backgroundColor": "transparent",
        "cursor": "pointer"
    },
    "switchswitch-default switch-input": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "opacity": 0
    },
    "switchswitch-default switch-label": {
        "position": "relative",
        "display": "block",
        "height": "inherit",
        "fontSize": 10,
        "fontWeight": "600",
        "textTransform": "uppercase",
        "backgroundColor": "#fff",
        "border": "1px solid #e9ecef",
        "borderRadius": 2,
        "transition": "opacity background .15s ease-out"
    },
    "switchswitch-default switch-input:checked ~ switch-label::before": {
        "opacity": 0
    },
    "switchswitch-default switch-input:checked ~ switch-label::after": {
        "opacity": 1
    },
    "switchswitch-default switch-handle": {
        "position": "absolute",
        "top": 2,
        "left": 2,
        "width": 20,
        "height": 20,
        "background": "#fff",
        "border": "1px solid #e9ecef",
        "borderRadius": 1,
        "transition": "left .15s ease-out"
    },
    "switchswitch-default switch-input:checked ~ switch-handle": {
        "left": 18
    },
    "switchswitch-defaultswitch-lg": {
        "width": 48,
        "height": 28
    },
    "switchswitch-defaultswitch-lg switch-label": {
        "fontSize": 12
    },
    "switchswitch-defaultswitch-lg switch-handle": {
        "width": 24,
        "height": 24
    },
    "switchswitch-defaultswitch-lg switch-input:checked ~ switch-handle": {
        "left": 22
    },
    "switchswitch-defaultswitch-sm": {
        "width": 32,
        "height": 20
    },
    "switchswitch-defaultswitch-sm switch-label": {
        "fontSize": 8
    },
    "switchswitch-defaultswitch-sm switch-handle": {
        "width": 16,
        "height": 16
    },
    "switchswitch-defaultswitch-sm switch-input:checked ~ switch-handle": {
        "left": 14
    },
    "switchswitch-defaultswitch-xs": {
        "width": 24,
        "height": 16
    },
    "switchswitch-defaultswitch-xs switch-label": {
        "fontSize": 7
    },
    "switchswitch-defaultswitch-xs switch-handle": {
        "width": 12,
        "height": 12
    },
    "switchswitch-defaultswitch-xs switch-input:checked ~ switch-handle": {
        "left": 10
    },
    "switchswitch-text": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "top",
        "width": 48,
        "height": 24,
        "backgroundColor": "transparent",
        "cursor": "pointer"
    },
    "switchswitch-text switch-input": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "opacity": 0
    },
    "switchswitch-text switch-label": {
        "position": "relative",
        "display": "block",
        "height": "inherit",
        "fontSize": 10,
        "fontWeight": "600",
        "textTransform": "uppercase",
        "backgroundColor": "#fff",
        "border": "1px solid #e9ecef",
        "borderRadius": 2,
        "transition": "opacity background .15s ease-out"
    },
    "switchswitch-text switch-label::before": {
        "position": "absolute",
        "top": "50%",
        "width": "50%",
        "marginTop": -0.5,
        "lineHeight": 1,
        "textAlign": "center",
        "transition": "inherit",
        "right": 1,
        "color": "#e9ecef",
        "content": "attr(data-off)"
    },
    "switchswitch-text switch-label::after": {
        "position": "absolute",
        "top": "50%",
        "width": "50%",
        "marginTop": -0.5,
        "lineHeight": 1,
        "textAlign": "center",
        "transition": "inherit",
        "left": 1,
        "color": "#fff",
        "content": "attr(data-on)",
        "opacity": 0
    },
    "switchswitch-text switch-input:checked ~ switch-label::before": {
        "opacity": 0
    },
    "switchswitch-text switch-input:checked ~ switch-label::after": {
        "opacity": 1
    },
    "switchswitch-text switch-handle": {
        "position": "absolute",
        "top": 2,
        "left": 2,
        "width": 20,
        "height": 20,
        "background": "#fff",
        "border": "1px solid #e9ecef",
        "borderRadius": 1,
        "transition": "left .15s ease-out"
    },
    "switchswitch-text switch-input:checked ~ switch-handle": {
        "left": 26
    },
    "switchswitch-textswitch-lg": {
        "width": 56,
        "height": 28
    },
    "switchswitch-textswitch-lg switch-label": {
        "fontSize": 12
    },
    "switchswitch-textswitch-lg switch-handle": {
        "width": 24,
        "height": 24
    },
    "switchswitch-textswitch-lg switch-input:checked ~ switch-handle": {
        "left": 30
    },
    "switchswitch-textswitch-sm": {
        "width": 40,
        "height": 20
    },
    "switchswitch-textswitch-sm switch-label": {
        "fontSize": 8
    },
    "switchswitch-textswitch-sm switch-handle": {
        "width": 16,
        "height": 16
    },
    "switchswitch-textswitch-sm switch-input:checked ~ switch-handle": {
        "left": 22
    },
    "switchswitch-textswitch-xs": {
        "width": 32,
        "height": 16
    },
    "switchswitch-textswitch-xs switch-label": {
        "fontSize": 7
    },
    "switchswitch-textswitch-xs switch-handle": {
        "width": 12,
        "height": 12
    },
    "switchswitch-textswitch-xs switch-input:checked ~ switch-handle": {
        "left": 18
    },
    "switchswitch-icon": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "top",
        "width": 48,
        "height": 24,
        "backgroundColor": "transparent",
        "cursor": "pointer"
    },
    "switchswitch-icon switch-input": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "opacity": 0
    },
    "switchswitch-icon switch-label": {
        "position": "relative",
        "display": "block",
        "height": "inherit",
        "fontFamily": "FontAwesome",
        "fontSize": 10,
        "fontWeight": "600",
        "textTransform": "uppercase",
        "backgroundColor": "#fff",
        "border": "1px solid #e9ecef",
        "borderRadius": 2,
        "transition": "opacity background .15s ease-out"
    },
    "switchswitch-icon switch-label::before": {
        "position": "absolute",
        "top": "50%",
        "width": "50%",
        "marginTop": -0.5,
        "lineHeight": 1,
        "textAlign": "center",
        "transition": "inherit",
        "right": 1,
        "color": "#e9ecef",
        "content": "attr(data-off)"
    },
    "switchswitch-icon switch-label::after": {
        "position": "absolute",
        "top": "50%",
        "width": "50%",
        "marginTop": -0.5,
        "lineHeight": 1,
        "textAlign": "center",
        "transition": "inherit",
        "left": 1,
        "color": "#fff",
        "content": "attr(data-on)",
        "opacity": 0
    },
    "switchswitch-icon switch-input:checked ~ switch-label::before": {
        "opacity": 0
    },
    "switchswitch-icon switch-input:checked ~ switch-label::after": {
        "opacity": 1
    },
    "switchswitch-icon switch-handle": {
        "position": "absolute",
        "top": 2,
        "left": 2,
        "width": 20,
        "height": 20,
        "background": "#fff",
        "border": "1px solid #e9ecef",
        "borderRadius": 1,
        "transition": "left .15s ease-out"
    },
    "switchswitch-icon switch-input:checked ~ switch-handle": {
        "left": 26
    },
    "switchswitch-iconswitch-lg": {
        "width": 56,
        "height": 28
    },
    "switchswitch-iconswitch-lg switch-label": {
        "fontSize": 12
    },
    "switchswitch-iconswitch-lg switch-handle": {
        "width": 24,
        "height": 24
    },
    "switchswitch-iconswitch-lg switch-input:checked ~ switch-handle": {
        "left": 30
    },
    "switchswitch-iconswitch-sm": {
        "width": 40,
        "height": 20
    },
    "switchswitch-iconswitch-sm switch-label": {
        "fontSize": 8
    },
    "switchswitch-iconswitch-sm switch-handle": {
        "width": 16,
        "height": 16
    },
    "switchswitch-iconswitch-sm switch-input:checked ~ switch-handle": {
        "left": 22
    },
    "switchswitch-iconswitch-xs": {
        "width": 32,
        "height": 16
    },
    "switchswitch-iconswitch-xs switch-label": {
        "fontSize": 7
    },
    "switchswitch-iconswitch-xs switch-handle": {
        "width": 12,
        "height": 12
    },
    "switchswitch-iconswitch-xs switch-input:checked ~ switch-handle": {
        "left": 18
    },
    "switchswitch-3d": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "top",
        "width": 40,
        "height": 24,
        "backgroundColor": "transparent",
        "cursor": "pointer"
    },
    "switchswitch-3d switch-input": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "opacity": 0
    },
    "switchswitch-3d switch-label": {
        "position": "relative",
        "display": "block",
        "height": "inherit",
        "fontSize": 10,
        "fontWeight": "600",
        "textTransform": "uppercase",
        "backgroundColor": "#f8f9fa",
        "border": "1px solid #e9ecef",
        "borderRadius": "50em !important",
        "transition": "opacity background .15s ease-out"
    },
    "switchswitch-3d switch-input:checked ~ switch-label::before": {
        "opacity": 0
    },
    "switchswitch-3d switch-input:checked ~ switch-label::after": {
        "opacity": 1
    },
    "switchswitch-3d switch-handle": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": 24,
        "height": 24,
        "background": "#fff",
        "border": 0,
        "borderRadius": "50em !important",
        "transition": "left .15s ease-out",
        "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.3)"
    },
    "switchswitch-3d switch-input:checked ~ switch-handle": {
        "left": 16
    },
    "switchswitch-3dswitch-lg": {
        "width": 48,
        "height": 28
    },
    "switchswitch-3dswitch-lg switch-label": {
        "fontSize": 12
    },
    "switchswitch-3dswitch-lg switch-handle": {
        "width": 28,
        "height": 28
    },
    "switchswitch-3dswitch-lg switch-input:checked ~ switch-handle": {
        "left": 20
    },
    "switchswitch-3dswitch-sm": {
        "width": 32,
        "height": 20
    },
    "switchswitch-3dswitch-sm switch-label": {
        "fontSize": 8
    },
    "switchswitch-3dswitch-sm switch-handle": {
        "width": 20,
        "height": 20
    },
    "switchswitch-3dswitch-sm switch-input:checked ~ switch-handle": {
        "left": 12
    },
    "switchswitch-3dswitch-xs": {
        "width": 24,
        "height": 16
    },
    "switchswitch-3dswitch-xs switch-label": {
        "fontSize": 7
    },
    "switchswitch-3dswitch-xs switch-handle": {
        "width": 16,
        "height": 16
    },
    "switchswitch-3dswitch-xs switch-input:checked ~ switch-handle": {
        "left": 8
    },
    "switch-pill switch-label": {
        "borderRadius": "50em !important"
    },
    "switch-pill switch-handle": {
        "borderRadius": "50em !important"
    },
    "switch-pill switch-label::before": {
        "right": "2px !important"
    },
    "switchswitch-3d switch-label::before": {
        "right": "2px !important"
    },
    "switch-pill switch-label::after": {
        "left": "2px !important"
    },
    "switchswitch-3d switch-label::after": {
        "left": "2px !important"
    },
    "switch-primary > switch-input:checked ~ switch-label": {
        "background": "#007bff !important",
        "borderColor": "#0062cc"
    },
    "switch-primary > switch-input:checked ~ switch-handle": {
        "borderColor": "#0062cc"
    },
    "switch-primary-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#007bff"
    },
    "switch-primary-outline > switch-input:checked ~ switch-label::after": {
        "color": "#007bff"
    },
    "switch-primary-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#007bff"
    },
    "switch-primary-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#007bff"
    },
    "switch-primary-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#007bff"
    },
    "switch-primary-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#007bff !important",
        "borderColor": "#007bff"
    },
    "switch-secondary > switch-input:checked ~ switch-label": {
        "background": "#868e96 !important",
        "borderColor": "#6c757d"
    },
    "switch-secondary > switch-input:checked ~ switch-handle": {
        "borderColor": "#6c757d"
    },
    "switch-secondary-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#868e96"
    },
    "switch-secondary-outline > switch-input:checked ~ switch-label::after": {
        "color": "#868e96"
    },
    "switch-secondary-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#868e96"
    },
    "switch-secondary-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#868e96"
    },
    "switch-secondary-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#868e96"
    },
    "switch-secondary-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#868e96 !important",
        "borderColor": "#868e96"
    },
    "switch-success > switch-input:checked ~ switch-label": {
        "background": "#28a745 !important",
        "borderColor": "#1e7e34"
    },
    "switch-success > switch-input:checked ~ switch-handle": {
        "borderColor": "#1e7e34"
    },
    "switch-success-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#28a745"
    },
    "switch-success-outline > switch-input:checked ~ switch-label::after": {
        "color": "#28a745"
    },
    "switch-success-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#28a745"
    },
    "switch-success-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#28a745"
    },
    "switch-success-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#28a745"
    },
    "switch-success-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#28a745 !important",
        "borderColor": "#28a745"
    },
    "switch-info > switch-input:checked ~ switch-label": {
        "background": "#17a2b8 !important",
        "borderColor": "#117a8b"
    },
    "switch-info > switch-input:checked ~ switch-handle": {
        "borderColor": "#117a8b"
    },
    "switch-info-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#17a2b8"
    },
    "switch-info-outline > switch-input:checked ~ switch-label::after": {
        "color": "#17a2b8"
    },
    "switch-info-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#17a2b8"
    },
    "switch-info-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#17a2b8"
    },
    "switch-info-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#17a2b8"
    },
    "switch-info-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#17a2b8 !important",
        "borderColor": "#17a2b8"
    },
    "switch-warning > switch-input:checked ~ switch-label": {
        "background": "#ffc107 !important",
        "borderColor": "#d39e00"
    },
    "switch-warning > switch-input:checked ~ switch-handle": {
        "borderColor": "#d39e00"
    },
    "switch-warning-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#ffc107"
    },
    "switch-warning-outline > switch-input:checked ~ switch-label::after": {
        "color": "#ffc107"
    },
    "switch-warning-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#ffc107"
    },
    "switch-warning-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#ffc107"
    },
    "switch-warning-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#ffc107"
    },
    "switch-warning-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#ffc107 !important",
        "borderColor": "#ffc107"
    },
    "switch-danger > switch-input:checked ~ switch-label": {
        "background": "#dc3545 !important",
        "borderColor": "#bd2130"
    },
    "switch-danger > switch-input:checked ~ switch-handle": {
        "borderColor": "#bd2130"
    },
    "switch-danger-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#dc3545"
    },
    "switch-danger-outline > switch-input:checked ~ switch-label::after": {
        "color": "#dc3545"
    },
    "switch-danger-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#dc3545"
    },
    "switch-danger-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#dc3545"
    },
    "switch-danger-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#dc3545"
    },
    "switch-danger-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#dc3545 !important",
        "borderColor": "#dc3545"
    },
    "switch-light > switch-input:checked ~ switch-label": {
        "background": "#f8f9fa !important",
        "borderColor": "#dae0e5"
    },
    "switch-light > switch-input:checked ~ switch-handle": {
        "borderColor": "#dae0e5"
    },
    "switch-light-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#f8f9fa"
    },
    "switch-light-outline > switch-input:checked ~ switch-label::after": {
        "color": "#f8f9fa"
    },
    "switch-light-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#f8f9fa"
    },
    "switch-light-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#f8f9fa"
    },
    "switch-light-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#f8f9fa"
    },
    "switch-light-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#f8f9fa !important",
        "borderColor": "#f8f9fa"
    },
    "switch-dark > switch-input:checked ~ switch-label": {
        "background": "#343a40 !important",
        "borderColor": "#1d2124"
    },
    "switch-dark > switch-input:checked ~ switch-handle": {
        "borderColor": "#1d2124"
    },
    "switch-dark-outline > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#343a40"
    },
    "switch-dark-outline > switch-input:checked ~ switch-label::after": {
        "color": "#343a40"
    },
    "switch-dark-outline > switch-input:checked ~ switch-handle": {
        "borderColor": "#343a40"
    },
    "switch-dark-outline-alt > switch-input:checked ~ switch-label": {
        "background": "#fff !important",
        "borderColor": "#343a40"
    },
    "switch-dark-outline-alt > switch-input:checked ~ switch-label::after": {
        "color": "#343a40"
    },
    "switch-dark-outline-alt > switch-input:checked ~ switch-handle": {
        "background": "#343a40 !important",
        "borderColor": "#343a40"
    },
    "social-box": {
        "minHeight": 160,
        "marginBottom": 1.5,
        "textAlign": "center",
        "background": "#fff"
    },
    "social-box i": {
        "display": "block",
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": 0,
        "marginLeft": -1,
        "fontSize": 40,
        "lineHeight": 110,
        "background": "#e9ecef"
    },
    "social-box chart-wrapper": {
        "height": 90,
        "marginTop": -90,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "social-box chart-wrapper canvas": {
        "width": "100% !important",
        "height": "90px !important"
    },
    "social-box ul": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "listStyle": "none",
        "display": "inline-block",
        "marginTop": 7,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%"
    },
    "social-box ul li": {
        "display": "block",
        "float": "left",
        "width": "50%",
        "paddingTop": 0,
        "fontSize": 14,
        "color": "#949CA0",
        "fontWeight": "700",
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "right"
    },
    "social-box ul li:first-child": {
        "borderRight": "1px solid #c2cfd6"
    },
    "social-box ul li strong": {
        "display": "block",
        "fontSize": 20
    },
    "social-box ul li span": {
        "fontSize": 14,
        "fontWeight": "500",
        "color": "#949CA0",
        "textTransform": "uppercase"
    },
    "social-boxfacebook i": {
        "color": "#fff",
        "background": "#3b5998"
    },
    "social-boxtwitter i": {
        "color": "#fff",
        "background": "#00aced"
    },
    "social-boxlinkedin i": {
        "color": "#fff",
        "background": "#4875b4"
    },
    "social-boxgoogle-plus i": {
        "color": "#fff",
        "background": "#d34836"
    },
    "horizontal-bars": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "horizontal-bars li": {
        "position": "relative",
        "height": 40,
        "lineHeight": 40,
        "verticalAlign": "middle"
    },
    "horizontal-bars li title": {
        "width": 100,
        "fontSize": 12,
        "fontWeight": "600",
        "color": "#868e96",
        "verticalAlign": "middle"
    },
    "horizontal-bars li bars": {
        "position": "absolute",
        "top": 15,
        "width": "100%",
        "paddingLeft": 100
    },
    "horizontal-bars li bars progress:first-child": {
        "marginBottom": 2
    },
    "horizontal-bars lilegend": {
        "textAlign": "center"
    },
    "horizontal-bars lilegend badge": {
        "display": "inline-block",
        "width": 8,
        "height": 8,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "horizontal-bars lidivider": {
        "height": 40
    },
    "horizontal-bars lidivider i": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important"
    },
    "horizontal-barstype-2 li": {
        "overflow": "hidden"
    },
    "horizontal-barstype-2 li i": {
        "display": "inline-block",
        "marginRight": 1,
        "marginLeft": 5,
        "fontSize": 18,
        "lineHeight": 40
    },
    "horizontal-barstype-2 li title": {
        "display": "inline-block",
        "width": "auto",
        "marginTop": -9,
        "fontSize": 1,
        "fontWeight": "normal",
        "lineHeight": 40,
        "color": "#212529"
    },
    "horizontal-barstype-2 li value": {
        "float": "right",
        "fontWeight": "600"
    },
    "horizontal-barstype-2 li bars": {
        "position": "absolute",
        "top": "auto",
        "bottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "icons-list": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "icons-list li": {
        "position": "relative",
        "height": 40,
        "verticalAlign": "middle"
    },
    "icons-list li i": {
        "display": "block",
        "float": "left",
        "width": "35px !important",
        "height": "35px !important",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "lineHeight": "35px !important",
        "textAlign": "center"
    },
    "icons-list li desc": {
        "height": 40,
        "marginLeft": 50,
        "borderBottom": "1px solid #e9ecef"
    },
    "icons-list li desc title": {
        "paddingTop": 2,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "icons-list li desc small": {
        "display": "block",
        "marginTop": -4,
        "color": "#868e96"
    },
    "icons-list li value": {
        "position": "absolute",
        "top": 2,
        "right": 45,
        "textAlign": "right"
    },
    "icons-list li value strong": {
        "display": "block",
        "marginTop": -3
    },
    "icons-list li actions": {
        "position": "absolute",
        "top": -4,
        "right": 10,
        "width": 40,
        "height": 40,
        "lineHeight": 40,
        "textAlign": "center"
    },
    "icons-list li actions i": {
        "float": "none",
        "width": "auto",
        "height": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "icons-list lidivider": {
        "height": 40
    },
    "icons-list lidivider i": {
        "width": "auto",
        "height": "auto",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 18
    },
    "bg-flat-color-1": {
        "background": "#20a8d8"
    },
    "bg-flat-color-2": {
        "background": "#63c2de"
    },
    "bg-flat-color-3": {
        "background": "#ffc107"
    },
    "bg-flat-color-4": {
        "background": "#f86c6b"
    },
    "bg-flat-color-5": {
        "background": "#4dbd74"
    },
    "transition": {
        "WebkitTransition": "all 0.3s ease",
        "MozTransition": "all 0.3s ease",
        "MsTransition": "all 0.3s ease",
        "OTransition": "all 0.3s ease",
        "transition": "all 0.3s ease"
    },
    "body": {
        "background": "#f1f2f7",
        "display": "table",
        "fontFamily": "'Open Sans' sans-serif !important",
        "fontSize": 16,
        "width": "100%"
    },
    "div[class*=\"col-\"]": {
        "float": "left"
    },
    "p": {
        "fontSize": 16,
        "fontFamily": "'Open Sans' sans-serif",
        "fontWeight": "400",
        "lineHeight": 24,
        "color": "#878787"
    },
    "p:focus": {
        "border": "none",
        "outline": 0
    },
    "a": {
        "textDecoration": "none",
        "outline": "none !important",
        "color": "#878787",
        "WebkitTransition": "all 0.25s ease",
        "MozTransition": "all 0.25s ease",
        "MsTransition": "all 0.25s ease",
        "OTransition": "all 0.25s ease",
        "transition": "all 0.25s ease"
    },
    "button": {
        "textDecoration": "none",
        "outline": "0 !important",
        "color": "#878787",
        "WebkitTransition": "all 0.25s ease",
        "MozTransition": "all 0.25s ease",
        "MsTransition": "all 0.25s ease",
        "OTransition": "all 0.25s ease",
        "transition": "all .15s ease-in-out",
        "boxShadow": "none",
        "display": "inline-block",
        "fontWeight": "400",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "borderRadius": 0,
        "cursor": "pointer"
    },
    "a:hover": {
        "textDecoration": "none",
        "color": "#000"
    },
    "a:focus": {
        "textDecoration": "none",
        "color": "#000"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ul": {
        "paddingLeft": 0
    },
    "ol": {
        "paddingLeft": 0
    },
    "btn:focus": {
        "boxShadow": "none !important",
        "outline": 0
    },
    "button:focus": {
        "boxShadow": "none !important",
        "outline": 0
    },
    "img": {
        "maxWidth": "100%"
    },
    "btn": {
        "boxShadow": "none",
        "outline": "0 !important",
        "display": "inline-block",
        "fontWeight": "400",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "transition": "all .15s ease-in-out",
        "borderRadius": 0,
        "cursor": "pointer"
    },
    "input": {
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "textarea": {
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "basix-container": {
        "display": "table",
        "minHeight": 100 * vh,
        "position": "relative",
        "width": "100%"
    },
    "asideleft-panel": {
        "background": "#272c33",
        "display": "table-cell",
        "height": 100 * vh,
        "minHeight": "100%",
        "paddingTop": 0,
        "paddingRight": 25,
        "paddingBottom": 0,
        "paddingLeft": 25,
        "verticalAlign": "top",
        "width": 280,
        "transition": "width 0.3s ease"
    },
    "navbar": {
        "background": "#272c33",
        "borderRadius": 0,
        "border": "none",
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 100,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "navbar navbar-header": {
        "float": "none",
        "textAlign": "center",
        "width": "100%"
    },
    "navbar navbar-brand": {
        "borderBottom": "1px solid #4e4e52",
        "color": "#f1f2f7 !important",
        "fontFamily": "'Open Sans'",
        "fontSize": 22,
        "float": "none",
        "lineHeight": 50,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "left",
        "textTransform": "capitalize",
        "display": "flex",
        "minHeight": 69,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "justifyContent": "center",
        "alignItems": "center",
        "position": "relative"
    },
    "navbar navbar-brand span": {
        "fontWeight": "600"
    },
    "navbar navbar-brand img": {
        "maxWidth": 160
    },
    "navbar navbar-brandhidden": {
        "display": "none"
    },
    "navbar menu-title": {
        "borderBottom": "1px solid #4e4e52",
        "color": "#9496a1",
        "clear": "both",
        "display": "block",
        "fontFamily": "'Open Sans'",
        "fontSize": 14,
        "fontWeight": "700",
        "lineHeight": 50,
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textTransform": "uppercase",
        "width": "100%"
    },
    "navbar navbar-nav": {
        "float": "none",
        "position": "relative"
    },
    "navbar navbar-nav li": {
        "width": "100%"
    },
    "navbar navbar-nav liactive menu-icon": {
        "color": "#fff !important"
    },
    "navbar navbar-nav li:hover toggle_nav_button:before": {
        "color": "#fff !important"
    },
    "navbar navbar-nav li toggle_nav_buttonnav-open:before": {
        "color": "#fff !important"
    },
    "navbar navbar-nav li dropdown-toggle:after": {
        "display": "none"
    },
    "navbar navbar-nav li > a": {
        "background": "none !important",
        "color": "#c8c9ce !important",
        "display": "inline-block",
        "fontFamily": "'Open Sans'",
        "fontSize": 14,
        "lineHeight": 30,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "position": "relative",
        "width": "100%"
    },
    "navbar navbar-nav li > a:hover": {
        "color": "#fff !important"
    },
    "navbar navbar-nav li > a:hover menu-icon": {
        "color": "#fff !important"
    },
    "navbar navbar-nav li > a menu-icon": {
        "color": "#8b939b",
        "float": "left",
        "marginTop": 8,
        "width": 55,
        "textAlign": "left",
        "zIndex": 9
    },
    "navbar navbar-nav li > a menu-title-text": {
        "fontSize": 14
    },
    "navbar navbar-nav li > a badge": {
        "borderRadius": 0,
        "fontFamily": "'Open Sans'",
        "fontWeight": "600",
        "float": "right",
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0.4,
        "paddingRight": 0.5,
        "paddingBottom": 0.4,
        "paddingLeft": 0.5
    },
    "navbar navbar-nav limenu-item-has-children": {
        "position": "relative"
    },
    "navbar navbar-nav limenu-item-has-children a": {
        "lineHeight": 30
    },
    "navbar navbar-nav limenu-item-has-children a:before": {
        "content": "\\f105",
        "color": "#c8c9ce",
        "fontFamily": "'Fontawesome'",
        "fontSize": 16,
        "position": "absolute",
        "top": 10,
        "right": 0,
        "textAlign": "right",
        "WebkitTransition": "all .25s ease",
        "MozTransition": "all .25s ease",
        "MsTransition": "all .25s ease",
        "OTransition": "all .25s ease",
        "transition": "all .25s ease"
    },
    "navbar navbar-nav limenu-item-has-children a:hover:before": {
        "color": "#fff"
    },
    "navbar navbar-nav limenu-item-has-children sub-menu": {
        "background": "#272c33",
        "border": "none",
        "boxShadow": "none",
        "overflowY": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 35
    },
    "navbar navbar-nav limenu-item-has-children sub-menu li": {
        "position": "relative"
    },
    "navbar navbar-nav limenu-item-has-children sub-menu i": {
        "color": "#c8c9ce",
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "left": 0,
        "fontSize": 14,
        "top": 9
    },
    "navbar navbar-nav limenu-item-has-children sub-menu a": {
        "paddingTop": 2,
        "paddingRight": 0,
        "paddingBottom": 2,
        "paddingLeft": 30
    },
    "navbar navbar-nav limenu-item-has-children sub-menu a:before": {
        "content": "''",
        "display": "none"
    },
    "navbar navbar-nav limenu-item-has-children sub-menu a menu-icon": {
        "top": 13,
        "textAlign": "left",
        "width": 25
    },
    "navbar navbar-nav limenu-item-has-childrenshow a:before": {
        "content": "\\f107"
    },
    "navbar navbar-nav limenu-item-has-childrenshow sub-menu": {
        "maxHeight": 1000,
        "opacity": 1,
        "position": "static !important"
    },
    "navbar navbar-nav > active > a": {
        "color": "#d7d9e3 !important"
    },
    "navbar navbar-nav > active > a:focus": {
        "color": "#d7d9e3 !important"
    },
    "navbar navbar-nav > active > a:hover": {
        "color": "#d7d9e3 !important"
    },
    "navbar-nav li spancount": {
        "background": "#a9d86e",
        "borderRadius": "50%",
        "color": "#fff",
        "fontFamily": "'Open Sans'",
        "fontSize": 9,
        "fontWeight": "700",
        "float": "right",
        "height": 20,
        "width": 20,
        "lineHeight": 20,
        "marginRight": 15,
        "textAlign": "center"
    },
    "bodyopen navbar navbar-brandhidden": {
        "display": "block"
    },
    "open asideleft-panel": {
        "maxWidth": 70,
        "width": 70
    },
    "open asideleft-panel navbar navbar-brand": {
        "display": "none"
    },
    "open asideleft-panel navbar navbar-brandhidden": {
        "display": "flex !important",
        "justifyContent": "center",
        "alignItems": "center",
        "paddingLeft": 0,
        "paddingRight": 0,
        "textAlign": "center"
    },
    "open asideleft-panel navbar navbar-brandhidden img": {
        "maxWidth": 30,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "open asideleft-panel navbar navbar-brandd-md-none": {
        "display": "block !important",
        "marginTop": 13,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": 67,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "open asideleft-panel navbar navbar-nav:before": {
        "display": "none !important"
    },
    "open asideleft-panel navbar navbar-nav li": {
        "position": "relative"
    },
    "open asideleft-panel navbar navbar-nav li a": {
        "fontSize": 0,
        "zIndex": 0,
        "transition": "none"
    },
    "open asideleft-panel navbar navbar-nav li a menu-icon": {
        "fontSize": 20,
        "zIndex": -1,
        "width": "inherit"
    },
    "open asideleft-panel navbar navbar-nav li a menu-title-text": {
        "fontSize": 0
    },
    "open asideleft-panel navbar navbar-nav li a badge": {
        "display": "none"
    },
    "open asideleft-panel navbar navbar-nav li > a": {
        "maxWidth": 60,
        "paddingLeft": 0
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-children": {
        "overflow": "hidden"
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-children a:before": {
        "content": "''",
        "display": "none"
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-children ul": {
        "paddingLeft": 0
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-children sub-menu": {
        "display": "block",
        "left": "inherit",
        "right": -180,
        "top": 0
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-children sub-menu li a": {
        "display": "block",
        "fontSize": 14,
        "maxWidth": "inherit",
        "paddingTop": 2,
        "paddingRight": 15,
        "paddingBottom": 2,
        "paddingLeft": 25,
        "width": "100%"
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-children sub-menu li a menu-icon": {
        "textAlign": "center"
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-childrenshow": {
        "overflow": "visible"
    },
    "open asideleft-panel navbar navbar-nav limenu-item-has-childrenshow sub-menu": {
        "position": "absolute !important"
    },
    "open asideleft-panel navbar navbar-nav li spancount": {
        "display": "none",
        "marginRight": 5,
        "zIndex": 1
    },
    "open asideleft-panel navbar navbar-nav liactive a:after": {
        "content": "''",
        "display": "none"
    },
    "open asideleft-panel navbar navbar-nav menu-title": {
        "fontSize": 0,
        "lineHeight": 0,
        "opacity": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "right-panel": {
        "display": "table-cell",
        "paddingLeft": "0 !important",
        "WebkitTransition": "all .35s ease",
        "MozTransition": "all .35s ease",
        "MsTransition": "all .35s ease",
        "OTransition": "all .35s ease",
        "transition": "all .35s ease"
    },
    "right-panel breadcrumbs": {
        "backgroundColor": "#fff",
        "display": "inline-block",
        "marginTop": 0,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "width": "100%"
    },
    "right-panel breadcrumbs col-lg-8 page-header": {
        "float": "left"
    },
    "right-panel page-header": {
        "minHeight": 50,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "background": "#ffffff",
        "borderBottom": 0
    },
    "right-panel page-header h1": {
        "fontSize": 18,
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "right-panel page-header breadcrumb": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 13.5,
        "paddingRight": 0,
        "paddingBottom": 13.5,
        "paddingLeft": 0,
        "background": "#fff",
        "textTransform": "capitalize"
    },
    "right-panel page-header breadcrumb > li + li:before": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "color": "#ccc",
        "content": "/\\00a0"
    },
    "right-panel headerheader": {
        "background": "#fff",
        "boxShadow": "0px 1px 1px rgba(0, 0, 0, 0.15)",
        "clear": "both",
        "display": "inline-block",
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 13,
        "paddingLeft": 20,
        "width": "100%"
    },
    "open right-panel": {
        "marginLeft": -210
    },
    "headerfixed-top": {
        "background": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "header-menu col-sm-7": {
        "position": "inherit"
    },
    "menutoggle": {
        "background": "#e74c3c",
        "borderRadius": "50%",
        "color": "#fff !important",
        "cursor": "pointer",
        "fontSize": 18,
        "height": 43,
        "lineHeight": 44,
        "marginTop": -2,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": -57,
        "textAlign": "center",
        "width": 43
    },
    "open menutoggle i:before": {
        "content": "\\f0a4"
    },
    "search-trigger": {
        "background": "transparent",
        "border": "none",
        "color": "#272c33",
        "cursor": "pointer",
        "fontSize": 16,
        "height": 41,
        "width": 43,
        "lineHeight": 38
    },
    "header form-inline": {
        "background": "#263238",
        "display": "none",
        "height": 70,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "zIndex": 9999
    },
    "header form-inline search-form": {
        "height": "100%",
        "maxWidth": 1025,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative"
    },
    "header form-inline search-form input[type=\"text\"]": {
        "background": "#263238",
        "border": "none",
        "borderRadius": 0,
        "boxShadow": "none",
        "color": "#d3d3d3",
        "fontSize": 16,
        "height": "inherit",
        "marginRight": "0 !important",
        "paddingTop": 10,
        "paddingRight": 36,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "width": "100%"
    },
    "header form-inline search-form input[type=\"text\"]active": {
        "borderColor": "rgba(0, 0, 0, 0.125)",
        "outline": 0
    },
    "header form-inline search-form input[type=\"text\"]:focus": {
        "borderColor": "rgba(0, 0, 0, 0.125)",
        "outline": 0
    },
    "header form-inline search-form button": {
        "background": "transparent",
        "border": "none",
        "color": "#fff",
        "fontSize": 16,
        "position": "absolute",
        "right": 15,
        "top": "50%",
        "marginTop": "-14px !important"
    },
    "header form-inline search-form button:active": {
        "background": "transparent",
        "border": "none !important",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "header form-inline search-form button:focus": {
        "background": "transparent",
        "border": "none !important",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "header form-inline search-form button:visited": {
        "background": "transparent",
        "border": "none !important",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "header form-inline search-form btn-outline-success:hover": {
        "background": "transparent",
        "border": "none !important",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "header form-inline search-formclose": {
        "display": "none"
    },
    "header-leftopen form-inline": {
        "display": "block"
    },
    "header-left dropdown": {
        "display": "inline-block"
    },
    "header-left dropdown dropdown-toggle": {
        "background": "transparent",
        "border": "none",
        "color": "#272c33",
        "fontSize": 16
    },
    "header-left dropdown dropdown-toggle:after": {
        "display": "none"
    },
    "header-left dropdown dropdown-toggle count": {
        "borderRadius": "50%",
        "color": "#fff",
        "fontSize": 11,
        "height": 15,
        "width": 15,
        "lineHeight": 15,
        "right": 0,
        "top": 0,
        "position": "absolute"
    },
    "header-left dropdown dropdown-toggle:active": {
        "background": "none !important",
        "borderColor": "transparent !important",
        "color": "#272c33 !important"
    },
    "header-left dropdown dropdown-toggle:focus": {
        "background": "none !important",
        "borderColor": "transparent !important",
        "color": "#272c33 !important"
    },
    "header-left dropdown dropdown-toggle:visited": {
        "background": "none !important",
        "borderColor": "transparent !important",
        "color": "#272c33 !important"
    },
    "header-left dropdown dropdown-menu": {
        "background": "#fff",
        "border": "none",
        "borderRadius": 0,
        "boxShadow": "none",
        "top": "49px !important"
    },
    "header-left dropdown dropdown-menu p": {
        "fontSize": 15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15
    },
    "header-left dropdown dropdown-menu dropdown-item": {
        "color": "#272c33",
        "fontSize": 13,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 3,
        "paddingLeft": 15,
        "textOverflow": "ellipsis"
    },
    "header-left dropdown dropdown-menu dropdown-item photo": {
        "float": "left",
        "marginRight": 15,
        "width": 25
    },
    "header-left dropdown dropdown-menu dropdown-item message name": {
        "marginTop": -5
    },
    "header-left dropdown dropdown-menu dropdown-item message time": {
        "fontSize": 11
    },
    "header-left dropdown dropdown-menu dropdown-item message p": {
        "clear": "both",
        "fontSize": 14,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textOverflow": "ellipsis"
    },
    "header-left dropdown dropdown-menu dropdown-item:hover": {
        "background": "transparent"
    },
    "dropdown-menu": {
        "borderRadius": 0,
        "transform": "none !important"
    },
    "for-notification dropdown-menu dropdown-item": {
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": "!important",
        "paddingLeft": 15,
        "textOverflow": "ellipsis"
    },
    "for-notification dropdown-menu dropdown-item i": {
        "float": "left",
        "fontSize": 14,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "left",
        "width": 20
    },
    "for-notification dropdown-menu dropdown-item p": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "textOverflow": "ellipsis"
    },
    "user-area": {
        "float": "right",
        "paddingRight": 0,
        "position": "relative"
    },
    "user-area user-menu": {
        "background": "#fff",
        "border": "none",
        "fontFamily": "'Open Sans'",
        "left": "inherit !important",
        "right": 0,
        "top": "55px !important",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "maxWidth": 150,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "position": "absolute",
        "width": "100%",
        "zIndex": 999,
        "minWidth": 150
    },
    "user-area user-menu nav-link": {
        "color": "#272c33",
        "display": "block",
        "fontSize": 14,
        "lineHeight": 22,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "user-area user-avatar": {
        "float": "right",
        "marginTop": 4,
        "width": 32
    },
    "user-area user-info name": {
        "color": "#8c8c8c",
        "fontSize": 14,
        "position": "relative",
        "textTransform": "uppercase"
    },
    "user-area count": {
        "background": "#d9534f",
        "borderRadius": "50%",
        "color": "#fff",
        "fontFamily": "'Open Sans'",
        "fontSize": 9,
        "fontWeight": "700",
        "float": "right",
        "height": 20,
        "width": 20,
        "lineHeight": 20,
        "textAlign": "center"
    },
    "user-area dropdown-toggle:after": {
        "display": "none"
    },
    "menuToggle2": {
        "paddingLeft": 25
    },
    "language-select": {
        "color": "#f1f2f7",
        "float": "right",
        "marginTop": 7,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 0,
        "maxWidth": 80
    },
    "language-select:focus": {
        "border": "none",
        "outline": 0
    },
    "language-select:visited": {
        "border": "none",
        "outline": 0
    },
    "language-select dropdown-toggle::after": {
        "display": "none"
    },
    "language-select dropdown-menu": {
        "background": "#fff",
        "border": "none",
        "borderRadius": 0,
        "left": "-8px !important",
        "minWidth": "inherit",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "top": "46px !important"
    },
    "language-select dropdown-menu dropdown-item": {
        "marginRight": 0,
        "maxWidth": 25,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "language-select dropdown-menu dropdown-item:hover": {
        "background": "#fff"
    },
    "language-select dropdown-menu dropdown-item flag-icon": {
        "marginRight": 0,
        "width": 25
    },
    "notification-show + dropdown-menu": {
        "display": "block"
    },
    "message-show + dropdown-menu": {
        "display": "block"
    },
    "language-show + dropdown-menu": {
        "display": "block"
    },
    "content": {
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "width": "100%"
    },
    "card": {
        "marginBottom": 1.5,
        "borderRadius": 0
    },
    "card h4": {
        "fontSize": 1.1
    },
    "card user-header media img": {
        "border": "5px solid rgba(255, 255, 255, 0.3)",
        "borderRadius": "50%",
        "WebkitBorderRadius": "50%"
    },
    "card card-header card-actions button": {
        "display": "block",
        "float": "left",
        "width": 50,
        "paddingTop": 0.75,
        "paddingRight": 0,
        "paddingBottom": 0.75,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important",
        "color": "#fff",
        "outline": 0,
        "textAlign": "center",
        "background": "transparent",
        "border": 0,
        "borderLeft": "1px solid rgba(120, 130, 140, 0.4)"
    },
    "card card-footer": {
        "paddingTop": 0.65,
        "paddingRight": 1.25,
        "paddingBottom": 0.65,
        "paddingLeft": 1.25,
        "backgroundColor": "#f0f3f5",
        "borderTop": "1px solid #c2cfd6"
    },
    "card card-footer ul li": {
        "display": "table-cell",
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textAlign": "center"
    },
    "breadcrumbs": {
        "marginTop": 0
    },
    "nav-tabs aactive": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-tabs dropdown dropdown-menu": {
        "top": "100% !important"
    },
    "custom-tab nav-tabs > aactive": {
        "borderColor": "transparent transparent",
        "color": "#ff2e44",
        "position": "relative"
    },
    "custom-tab nav-tabs > active > a:focus": {
        "borderColor": "transparent transparent",
        "color": "#ff2e44",
        "position": "relative"
    },
    "custom-tab nav-tabs > liactive > a:hover": {
        "borderColor": "transparent transparent",
        "color": "#ff2e44",
        "position": "relative"
    },
    "custom-tab nav-tabs > aactive > a:after": {
        "background": "#ff2e44",
        "bottom": -1,
        "content": "",
        "height": 2,
        "left": 0,
        "position": "absolute",
        "right": 0,
        "width": "100%",
        "zIndex": 999
    },
    "custom-tab nav-tabs > liactive > a:focus:after": {
        "background": "#ff2e44",
        "bottom": -1,
        "content": "",
        "height": 2,
        "left": 0,
        "position": "absolute",
        "right": 0,
        "width": "100%",
        "zIndex": 999
    },
    "custom-tab nav-tabs > liactive > a:hover:after": {
        "background": "#ff2e44",
        "bottom": -1,
        "content": "",
        "height": 2,
        "left": 0,
        "position": "absolute",
        "right": 0,
        "width": "100%",
        "zIndex": 999
    },
    "card card-header card-actions": {
        "float": "right"
    },
    "card card-header card-actions [class*=\"btn\"]": {
        "borderLeft": "1px solid rgba(120, 130, 140, 0.4)",
        "color": "#878787",
        "display": "inline-block",
        "fontSize": 16,
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 7,
        "width": "inherit",
        "textAlign": "center"
    },
    "social-buttons card-body p button": {
        "paddingTop": 0,
        "paddingLeft": 0,
        "paddingBottom": 0
    },
    "social-buttons only-icon card-body p button": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "social-buttons social i": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": "inherit !important"
    },
    "social-buttons only-text p button": {
        "paddingTop": 0,
        "paddingRight": 0.5,
        "paddingBottom": 0,
        "paddingLeft": 0.5
    },
    "buttons button": {
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "corner-ribon": {
        "textAlign": "center",
        "width": 71,
        "height": 71,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "fontSize": 20
    },
    "corner-ribon i": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 35,
        "color": "#fff"
    },
    "black-ribon": {
        "background": "url(\"../../images/twitter_corner_black.png\") no-repeat"
    },
    "blue-ribon": {
        "background": "url(\"../../images/twitter_corner_blue.png\") no-repeat"
    },
    "twt-feed wtt-mark": {
        "color": "rgba(255, 255, 255, 0.15)",
        "fontSize": 160,
        "position": "absolute",
        "top": 10,
        "left": "40%"
    },
    "twt-feed": {
        "WebkitBorderRadius": "4px 4px 0 0",
        "color": "#FFFFFF",
        "paddingTop": 40,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "position": "relative",
        "minHeight": 170
    },
    "weather-category": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "color": "#74829C"
    },
    "weather-category ul li": {
        "width": "32%",
        "textAlign": "center",
        "borderRight": "1px solid #e6e6e6",
        "display": "inline-block"
    },
    "twt-feedblue-bg": {
        "background": "#58C9F3"
    },
    "twt-category": {
        "display": "inline-block",
        "marginBottom": 11,
        "marginTop": 10,
        "width": "100%"
    },
    "twt-category ul li": {
        "color": "#bdbdbd",
        "fontSize": 13
    },
    "twt-footer": {
        "paddingTop": 12,
        "paddingRight": 15,
        "paddingBottom": 12,
        "paddingLeft": 15,
        "color": "#d2d2d2"
    },
    "twt-footer a": {
        "color": "#d2d2d2"
    },
    "icon-section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "clear": "both",
        "overflow": "hidden"
    },
    "icon-container": {
        "width": 240,
        "paddingTop": 0.7,
        "paddingRight": 0,
        "paddingBottom": 0.7,
        "paddingLeft": 0,
        "float": "left",
        "position": "relative",
        "textAlign": "left"
    },
    "icon-container [class^=\"ti-\"]": {
        "color": "#000",
        "position": "absolute",
        "marginTop": 3,
        "transition": ".3s"
    },
    "icon-container [class*=\" ti-\"]": {
        "color": "#000",
        "position": "absolute",
        "marginTop": 3,
        "transition": ".3s"
    },
    "icon-container:hover [class^=\"ti-\"]": {
        "fontSize": 2.2,
        "marginTop": -5
    },
    "icon-container:hover [class*=\" ti-\"]": {
        "fontSize": 2.2,
        "marginTop": -5
    },
    "icon-container:hover icon-name": {
        "color": "#000",
        "marginLeft": 45
    },
    "icon-name": {
        "color": "#aaa",
        "marginLeft": 35,
        "fontSize": 14,
        "transition": ".3s"
    },
    "fontawesome-icon-list page-header": {
        "borderBottom": "1px solid #C9CDD7",
        "paddingBottom": 9,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 27,
        "marginLeft": 0
    },
    "fontawesome-icon-list h2": {
        "marginTop": 0,
        "fontSize": 20,
        "fontWeight": "300"
    },
    "fontawesome-icon-list i": {
        "fontStyle": 16,
        "paddingRight": 10
    },
    "social-box ul li:last-child": {
        "paddingLeft": 10,
        "paddingRight": 0,
        "textAlign": "left"
    },
    "login-logo": {
        "textAlign": "center",
        "marginBottom": 15
    },
    "login-logo span": {
        "color": "#ffffff",
        "fontSize": 24
    },
    "login-content": {
        "maxWidth": 540,
        "marginTop": 8 * vh,
        "marginRight": "auto",
        "marginBottom": 8 * vh,
        "marginLeft": "auto"
    },
    "login-form": {
        "background": "#ffffff",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 20,
        "paddingLeft": 30,
        "borderRadius": 2
    },
    "login-form h4": {
        "color": "#878787",
        "textAlign": "center",
        "marginBottom": 50
    },
    "login-form checkbox": {
        "color": "#878787"
    },
    "login-form checkbox label": {
        "textTransform": "none"
    },
    "login-form btn": {
        "width": "100%",
        "textTransform": "uppercase",
        "fontSize": 14,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "border": 0
    },
    "login-form label": {
        "color": "#878787",
        "textTransform": "uppercase"
    },
    "login-form label a": {
        "color": "#ff2e44"
    },
    "social-login-content": {
        "marginTop": 0,
        "marginRight": -30,
        "marginBottom": 0,
        "marginLeft": -30,
        "borderTop": "1px solid #e7e7e7",
        "borderBottom": "1px solid #e7e7e7",
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0,
        "background": "#fcfcfc"
    },
    "social-button": {
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "social-button facebook": {
        "background": "#3b5998",
        "color": "#fff"
    },
    "social-button facebook:hover": {
        "background": "#344e86"
    },
    "social-button twitter": {
        "background": "#00aced",
        "color": "#fff"
    },
    "social-button twitter:hover": {
        "background": "#0099d4"
    },
    "social-button i": {
        "paddingTop": 19,
        "paddingRight": 19,
        "paddingBottom": 19,
        "paddingLeft": 19
    },
    "register-link a": {
        "color": "#ff2e44"
    },
    "cpu-load": {
        "width": "100%",
        "height": 272,
        "fontSize": 14,
        "lineHeight": 1.2
    },
    "cpu-load-data-content": {
        "fontSize": 18,
        "fontWeight": "400",
        "lineHeight": 40
    },
    "cpu-load-data": {
        "marginBottom": 30
    },
    "cpu-load-data li": {
        "display": "inline-block",
        "width": "32.5%",
        "textAlign": "center",
        "borderRight": "1px solid #e7e7e7"
    },
    "cpu-load-data li:last-child": {
        "borderRight": 0
    },
    "nestable-cart": {
        "overflow": "hidden"
    },
    "input-group-addon": {
        "backgroundColor": "#e9ecef",
        "borderLeft": 0,
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "paddingTop": 0.5,
        "paddingRight": 0.75,
        "paddingBottom": 0.5,
        "paddingLeft": 0.75,
        "marginBottom": 0,
        "fontSize": 1,
        "fontWeight": "400",
        "lineHeight": 1.25,
        "color": "#495057",
        "textAlign": "center",
        "border": "1px solid rgba(0, 0, 0, 0.15)",
        "borderRadius": 0.25
    },
    "input-group-btn": {
        "whiteSpace": "nowrap",
        "verticalAlign": "middle"
    },
    "flotTip": {
        "background": "#252525",
        "border": "1px solid #252525",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "color": "#ffffff"
    },
    "flot-container": {
        "boxSizing": "border-box",
        "width": "100%",
        "height": 275,
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "background": "transparent"
    },
    "flot-pie-container": {
        "height": 275
    },
    "flotBar-container": {
        "height": 275
    },
    "flot-line": {
        "width": "100%",
        "height": "100%",
        "fontSize": 14,
        "lineHeight": 1.2
    },
    "legend table": {
        "borderSpacing": 5
    },
    "chart1": {
        "width": "100%",
        "height": 275
    },
    "flotBar": {
        "width": "100%",
        "height": 275
    },
    "flotCurve": {
        "width": "100%",
        "height": 275
    },
    "morris-hover": {
        "position": "absolute",
        "zIndex": 1
    },
    "morris-hovermorris-default-style morris-hover-row-label": {
        "fontWeight": "bold",
        "marginTop": 0.25,
        "marginRight": 0,
        "marginBottom": 0.25,
        "marginLeft": 0
    },
    "morris-hovermorris-default-style morris-hover-point": {
        "whiteSpace": "nowrap",
        "marginTop": 0.1,
        "marginRight": 0,
        "marginBottom": 0.1,
        "marginLeft": 0
    },
    "morris-hovermorris-default-style": {
        "borderRadius": 2,
        "paddingTop": 10,
        "paddingRight": 12,
        "paddingBottom": 10,
        "paddingLeft": 12,
        "color": "#fff !important",
        "background": "rgba(0, 0, 0, 0.7)",
        "border": "none"
    },
    "morris-hover-point": {
        "color": "rgba(255, 255, 255, 0.8) !important"
    },
    "morris-bar-chart": {
        "height": 285
    },
    "map": {
        "width": "100%",
        "height": 400
    },
    "vmap": {
        "width": "100%",
        "height": 400
    },
    "btn-toolbar": {
        "float": "left !important"
    },
    "btn-toolbar btn-outline-secondary:not([disabled]):not(disabled):active": {
        "backgroundColor": "#212529",
        "borderColor": "#212529",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "color": "#fff"
    },
    "btn-toolbar btn-outline-secondary:not([disabled]):not(disabled)active": {
        "backgroundColor": "#212529",
        "borderColor": "#212529",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "color": "#fff"
    },
    "btn-toolbar show > btn-outline-secondarydropdown-toggle": {
        "backgroundColor": "#212529",
        "borderColor": "#212529",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "color": "#fff"
    },
    "btn-toolbar btn-outline-secondary:hover": {
        "backgroundColor": "#212529",
        "borderColor": "#212529",
        "color": "#fff"
    },
    "dib": {
        "display": "inline-block"
    },
    "stat-widget-one stat-icon": {
        "verticalAlign": "top"
    },
    "stat-widget-one stat-icon i": {
        "fontSize": 30,
        "borderWidth": 3,
        "borderStyle": "solid",
        "borderRadius": 100,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontWeight": "900",
        "display": "inline-block"
    },
    "stat-widget-one stat-content": {
        "marginLeft": 30,
        "marginTop": 7
    },
    "stat-widget-one stat-text": {
        "fontSize": 14,
        "color": "#868e96"
    },
    "stat-widget-one stat-digit": {
        "fontSize": 24,
        "color": "#373757"
    },
    "stat-widget-two": {
        "textAlign": "center"
    },
    "stat-widget-two stat-digit": {
        "fontSize": 1.75,
        "fontWeight": "500",
        "color": "#373757"
    },
    "stat-widget-two stat-digit i": {
        "fontSize": 18,
        "marginRight": 5
    },
    "stat-widget-two stat-text": {
        "fontSize": 16,
        "marginBottom": 5,
        "color": "#868e96"
    },
    "stat-widget-two progress": {
        "height": 8,
        "marginBottom": 0,
        "marginTop": 20,
        "boxShadow": "none"
    },
    "stat-widget-two progress-bar": {
        "boxShadow": "none"
    },
    "stat-widget-three stat-icon": {
        "display": "inline-block",
        "paddingTop": 33,
        "paddingRight": 33,
        "paddingBottom": 33,
        "paddingLeft": 33,
        "position": "absolute",
        "lineHeight": 21
    },
    "stat-widget-three stat-icon i": {
        "fontSize": 30,
        "color": "#ffffff"
    },
    "stat-widget-three stat-content": {
        "textAlign": "center",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginLeft": 90
    },
    "stat-widget-three stat-digit": {
        "fontSize": 30
    },
    "stat-widget-three stat-text": {
        "paddingTop": 4
    },
    "home-widget-three stat-icon": {
        "lineHeight": 19,
        "paddingTop": 27,
        "paddingRight": 27,
        "paddingBottom": 27,
        "paddingLeft": 27
    },
    "home-widget-three stat-digit": {
        "fontSize": 24,
        "fontWeight": "300",
        "color": "#373757"
    },
    "home-widget-three stat-content": {
        "textAlign": "center",
        "marginLeft": 60,
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13
    },
    "stat-widget-four": {
        "position": "relative"
    },
    "stat-widget-four stat-icon": {
        "display": "inline-block",
        "position": "absolute",
        "top": 5
    },
    "stat-widget-four i": {
        "display": "block",
        "fontSize": 36
    },
    "stat-widget-four stat-content": {
        "marginLeft": 40,
        "textAlign": "center"
    },
    "stat-widget-four stat-heading": {
        "fontSize": 20
    },
    "stat-widget-five stat-icon": {
        "borderRadius": 100,
        "display": "inline-block",
        "position": "absolute"
    },
    "stat-widget-five i": {
        "borderRadius": 100,
        "display": "block",
        "fontSize": 36,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "stat-widget-five stat-content": {
        "marginLeft": 100,
        "paddingTop": 24,
        "paddingRight": 0,
        "paddingBottom": 24,
        "paddingLeft": 0,
        "position": "relative",
        "textAlign": "right",
        "verticalAlign": "middle"
    },
    "stat-widget-five stat-heading": {
        "textAlign": "right",
        "paddingLeft": 80,
        "fontSize": 20,
        "fontWeight": "200"
    },
    "stat-widget-six": {
        "position": "relative"
    },
    "stat-widget-six stat-icon": {
        "display": "inline-block",
        "position": "absolute",
        "top": 5
    },
    "stat-widget-six i": {
        "display": "block",
        "fontSize": 36
    },
    "stat-widget-six stat-content": {
        "marginLeft": 40,
        "textAlign": "center"
    },
    "stat-widget-six stat-heading": {
        "fontSize": 16,
        "fontWeight": "300"
    },
    "stat-widget-six stat-text": {
        "fontSize": 12,
        "paddingTop": 4
    },
    "stat-widget-seven stat-heading": {
        "textAlign": "center"
    },
    "stat-widget-seven gradient-circle": {
        "textAlign": "center",
        "position": "relative",
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "display": "inline-block",
        "width": "100%"
    },
    "stat-widget-seven gradient-circle i": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "textAlign": "center",
        "top": 35,
        "fontSize": 30
    },
    "stat-widget-seven stat-footer": {
        "textAlign": "center",
        "marginTop": 30
    },
    "stat-widget-seven stat-footer stat-count": {
        "paddingLeft": 5
    },
    "stat-widget-seven count-header": {
        "color": "#252525",
        "fontSize": 12,
        "fontWeight": "400",
        "lineHeight": 30
    },
    "stat-widget-seven stat-count": {
        "fontSize": 18,
        "fontWeight": "400",
        "color": "#252525"
    },
    "stat-widget-seven analytic-arrow": {
        "position": "relative"
    },
    "stat-widget-seven analytic-arrow i": {
        "fontSize": 12
    },
    "stat-widget-eight": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "stat-widget-eight header-title": {
        "fontSize": 20,
        "fontWeight": "300"
    },
    "stat-widget-eight ti-more-alt": {
        "color": "#878787",
        "cursor": "pointer",
        "left": -5,
        "position": "absolute",
        "transform": "rotate(90deg)"
    },
    "stat-widget-eight stat-content": {
        "marginTop": 50
    },
    "stat-widget-eight stat-content ti-arrow-up": {
        "fontSize": 30,
        "color": "#28a745"
    },
    "stat-widget-eight stat-content stat-digit": {
        "fontSize": 24,
        "fontWeight": "300",
        "marginLeft": 15
    },
    "stat-widget-eight stat-content progress-stats": {
        "color": "#aaadb2",
        "fontWeight": "400",
        "position": "relative",
        "top": 10
    },
    "stat-widget-eight progress": {
        "marginBottom": 0,
        "marginTop": 30,
        "height": 7,
        "background": "#EAEAEA",
        "boxShadow": "none"
    },
    "stat-widget-nine all-like": {
        "float": "right"
    },
    "stat-widget-nine stat-icon i": {
        "fontSize": 22
    },
    "stat-widget-nine stat-text": {
        "fontSize": 14
    },
    "stat-widget-nine stat-digit": {
        "fontSize": 14
    },
    "stat-widget-nine like-count": {
        "fontSize": 30
    },
    "horizontal": {
        "position": "relative"
    },
    "horizontal:before": {
        "background": "#ffffff",
        "bottom": 0,
        "content": "",
        "height": 38,
        "left": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "absolute",
        "right": 0,
        "width": 1
    },
    "widget-ten span i": {
        "color": "#ffffff",
        "opacity": 0.5
    },
    "widget-ten h5": {
        "color": "#ffffff"
    },
    "widget-ten p": {
        "color": "#ffffff !important",
        "opacity": 0.75
    },
    "badges h1": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "badges h2": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "badges h3": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "badges h4": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "badges h5": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "badges h6": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "vue-lists ul": {
        "paddingLeft": 30
    },
    "vue-lists ol": {
        "paddingLeft": 30
    },
    "card dropdownfloat-right dropdown-menu": {
        "left": "inherit !important",
        "right": "0 !important",
        "top": "93% !important"
    },
    "dataTables_paginate pagination": {
        "borderRadius": 0
    },
    "dataTables_paginate pagination li": {
        "borderRadius": "0 !important"
    },
    "dataTables_paginate pagination li a": {
        "borderRadius": "0 !important",
        "color": "#272c33"
    },
    "dataTables_paginate pagination liactive a": {
        "background": "#272c33",
        "borderColor": "#272c33",
        "color": "#fff"
    },
    "dataTables_paginate pagination li:hover a": {
        "background": "#272c33",
        "borderColor": "#272c33",
        "color": "#fff"
    }
});