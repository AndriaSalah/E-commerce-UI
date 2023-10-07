import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class ForgotPassword extends StatelessWidget {
  const ForgotPassword({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: () {
          Navigator.pushReplacementNamed(context, Screens.forgotPasswordScreen);
        },
        child: Text(
          "Forgot Password?",
          style: AppTypography.bold12(color: AppColors.primary),
        ),
      ),
    );
  }
}
