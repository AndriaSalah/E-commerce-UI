import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class HaveAccountOrNot extends StatelessWidget {
  const HaveAccountOrNot({
    super.key,
    required this.content,
    required this.link,
    required this.onTap,
  });
  final String content;
  final String link;
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(content,
            style: AppTypography.regular12(color: AppColors.darkGrey)),
        GestureDetector(
          onTap: onTap,
          child:
              Text(link, style: AppTypography.bold12(color: AppColors.primary)),
        ),
      ],
    );
  }
}
