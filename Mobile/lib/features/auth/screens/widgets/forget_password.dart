import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class ForgetPassword extends StatelessWidget {
  const ForgetPassword({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: () {},
        child: Text(
          "Forget Password?",
          style: AppTypography.bold12(color: AppColors.primary),
        ),
      ),
    );
  }
}
