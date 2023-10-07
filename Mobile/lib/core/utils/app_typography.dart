import 'package:flutter/material.dart';

class AppTypography {
  // font family
  static const String fontFamily = "SF Pro";
  // sizes
  static const double sp12 = 12;
  static const double sp14 = 14;
  static const double sp18 = 18;
  static const double sp20 = 20;
  static const double sp28 = 28;
  static const double sp36 = 36;
  // font weight
  static const FontWeight bold = FontWeight.bold;
  static const FontWeight w500 = FontWeight.w500;
  static const FontWeight w400 = FontWeight.w400;
  // Bold.
  static TextStyle bold12({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp12, fontWeight: bold, color: color);
  static TextStyle bold14({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp14, fontWeight: bold, color: color);
  static TextStyle bold18({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp18, fontWeight: bold, color: color);
  static TextStyle bold20({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp20, fontWeight: bold, color: color);
  static TextStyle bold28({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp28, fontWeight: bold, color: color);
  static TextStyle bold36({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp36, fontWeight: bold, color: color);
  // Medium.
  static TextStyle medium12({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp12, fontWeight: w500, color: color);
  static TextStyle medium14({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp14, fontWeight: w500, color: color);
  static TextStyle medium18({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp18, fontWeight: w500, color: color);
  static TextStyle medium20({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp20, fontWeight: w500, color: color);
  static TextStyle medium28({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp28, fontWeight: w500, color: color);
  static TextStyle medium36({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp36, fontWeight: w500, color: color);
  // Regular.
  static TextStyle regular12({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp12, fontWeight: w400, color: color);
  static TextStyle regular14({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp14, fontWeight: w400, color: color);
  static TextStyle regular18({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp18, fontWeight: w400, color: color);
  static TextStyle regular20({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp20, fontWeight: w400, color: color);
  static TextStyle regular28({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp28, fontWeight: w400, color: color);
  static TextStyle regular36({Color? color}) => TextStyle(
      fontFamily: fontFamily, fontSize: sp36, fontWeight: w400, color: color);
}
