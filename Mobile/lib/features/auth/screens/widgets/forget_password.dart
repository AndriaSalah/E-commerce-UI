import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/auth/screens/forgot_password_screen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ForgetPassword extends StatelessWidget {
  const ForgetPassword({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: () {
          Get.to(() => const ForgotPasswordScreen());
        },
        child: Text(
          "Forget Password?",
          style: AppTypography.bold12(color: AppColors.primary),
        ),
      ),
    );
  }
}
