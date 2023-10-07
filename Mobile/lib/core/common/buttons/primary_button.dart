import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

import '../animations/button_animation.dart';

class PrimaryButton extends StatelessWidget {
  final VoidCallback onTap;
  final String? text;
  final double? width;
  final double? height;
  final double? borderRadius;
  final double? borderWidth;
  final Color? color;
  final Color? borderColor;
  final TextStyle? textStyle;
  final bool isBorder;
  final Widget? widget;
  const PrimaryButton({
    required this.onTap,
    this.text,
    this.height,
    this.width,
    this.borderRadius,
    this.isBorder = false,
    this.color,
    Key? key,
    this.textStyle,
    this.borderColor,
    this.borderWidth,
    this.widget,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ButtonAnimation(
      onTap: onTap,
      child: Container(
        height: height ?? 55,
        alignment: Alignment.center,
        width: width ?? double.maxFinite,
        decoration: BoxDecoration(
            color: color ?? AppColors.primary,
            borderRadius: BorderRadius.circular(borderRadius ?? 10),
            border: isBorder
                ? Border.all(
                    color: borderColor ?? AppColors.primary,
                    width: borderWidth ?? 1)
                : null),
        child: widget ??
            Text(
              text!,
              style: textStyle,
            ),
      ),
    );
  }
}
