#!/bin/bash
myArr=("3.2.LoadingAnimation(N)" "3.3.DrawingCanvas(N)" "3.4.RGBSlider(N)" "3.5.Calculator(E)" "3.8.ListOfExpense(E)" "3.10.CanvasAnimation(E)" "3.12.JSDraggle(N)" "3.14.Parallax(N)" "3.15.Smiley(N)" "3.16.Transtion(N)" "3.19.ArrayIntergers(E)" "3.20.FlowwingCursor(E)" "3.31.Cicles(N)" "3.22.LinearGradient(N)");
cd FEDev
for str in ${myArr[@]}; do
mkdir $str && cd $str && touch index.html style.css code.js && cd ..
done