import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class BestOffersText extends StatelessWidget {
  const BestOffersText({
    super.key,
    required this.text,
  });
  final String text;
  @override
  Widget build(BuildContext context) {
    return Text.rich(
      TextSpan(
        children: [
          TextSpan(
            text: text,
            style: AppTypography.regular14(),
          ),
          TextSpan(
            text: "\t\tT&C",
            style: AppTypography.regular14(color: AppColors.primary),
          ),
        ],
      ),
    );
  }
}
