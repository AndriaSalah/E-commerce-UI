import 'package:flutter/material.dart';

class AppSizes {
  static double? height;
  static double? width;

  static config(BuildContext context) {
    height = MediaQuery.of(context).size.height;
    width = MediaQuery.of(context).size.width;
  }
}

class Space extends StatelessWidget {
  const Space({super.key, this.width, this.height});
  final double? width;
  final double? height;
  @override
  Widget build(BuildContext context) {
    return SizedBox(width: width, height: height);
  }
}
