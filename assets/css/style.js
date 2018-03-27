import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
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
        "fontFamily": "'Open Sans' sans-serif",
        "fontSize": 16,
        "width": "100%"
    },
    "div[class*=\"col-\"]": {
        "float": "left"
    },
    "p": {
        "fontSize": 16,
        "fontWeight": "400",
        "lineHeight": 24
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
        "outline": "none !important",
        "color": "#878787",
        "WebkitTransition": "all 0.25s ease",
        "MozTransition": "all 0.25s ease",
        "MsTransition": "all 0.25s ease",
        "OTransition": "all 0.25s ease",
        "transition": "all 0.25s ease"
    },
    "a:active": {
        "background": "none !important",
        "border": "none !important"
    },
    "aactive": {
        "background": "none !important",
        "border": "none !important"
    },
    "button:active": {
        "background": "none !important",
        "border": "none !important"
    },
    "buttonactive": {
        "background": "none !important",
        "border": "none !important"
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
    "dropdown-toggle::after": {
        "display": "none"
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
    "upload-file": {
        "height": 600,
        "width": 800,
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "blue"
    }
});