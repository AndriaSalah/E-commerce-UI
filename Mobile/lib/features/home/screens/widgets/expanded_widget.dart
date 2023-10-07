import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class ExpandedWidget extends StatelessWidget {
  const ExpandedWidget({
    super.key,
    required this.title,
    required this.children,
  });
  final String title;
  final List<Widget> children;
  @override
  Widget build(BuildContext context) {
    return ExpansionTile(
      title: Text(title, style: AppTypography.medium18()),
      textColor: AppColors.black,
      iconColor: AppColors.black,
      expandedCrossAxisAlignment: CrossAxisAlignment.start,
      tilePadding: const EdgeInsets.all(0),
      childrenPadding: const EdgeInsets.only(bottom: 10),
      children: children,
    );
  }
}
