"use strict";
// enum
// numeric enum
var Month;
(function (Month) {
    Month[Month["JANUARY"] = 1] = "JANUARY";
    Month[Month["FEBRUARY"] = 100] = "FEBRUARY";
    Month[Month["MARCH"] = 101] = "MARCH";
    Month[Month["APRIL"] = 102] = "APRIL";
    Month[Month["MAY"] = 103] = "MAY";
})(Month || (Month = {}));
// string enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
console.log(Color);
