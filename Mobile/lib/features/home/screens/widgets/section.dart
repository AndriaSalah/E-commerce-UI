import 'package:flutter/material.dart';

import '../../../../core/utils/app_typography.dart';

class Section extends StatelessWidget {
  const Section({
    super.key,
    required this.title,
  });
  final String title;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Text(
        title,
        style: AppTypography.medium20(),
      ),
    );
  }
}
