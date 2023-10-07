import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class ORDivider extends StatelessWidget {
  const ORDivider({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        Expanded(
          child: Container(
            color: AppColors.darkGrey,
            height: 0.4,
            margin: const EdgeInsets.only(right: 16, left: 10),
          ),
        ),
        Text(
          "OR",
          style: AppTypography.bold14(color: AppColors.darkGrey),
        ),
        Expanded(
          child: Container(
            color: AppColors.darkGrey,
            height: 0.4,
            margin: const EdgeInsets.only(left: 16, right: 10),
          ),
        ),
      ],
    );
  }
}
