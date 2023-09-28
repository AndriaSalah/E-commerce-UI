import 'package:ecom/core/utils/app_colors.dart';
import 'package:ecom/core/utils/app_icons.dart';
import 'package:flutter/material.dart';

class TextFormDecoration {
  static InputDecoration outlineDecoration(
          {String? hint, IconData? icon, Color? iconColor}) =>
      InputDecoration(
        hintText: hint ?? "Empty Text",
        prefixIcon: Icon(icon ?? AppIcons.star),
        prefixIconColor: iconColor ?? AppColors.cat,
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(color: AppColors.cat),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(color: AppColors.cat),
        ),
      );
}
