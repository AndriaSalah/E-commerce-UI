import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/auth/screens/signIn_screen.dart';
import 'package:ecom/features/auth/screens/widgets/auth_field.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../core/common/buttons/primary_button.dart';
import '../../../core/utils/app_decoration.dart';
import '../controller/controller.dart';

class OtpScreen extends StatelessWidget {
  const OtpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Space(height: AppSizes.height! * 0.3),
            Text("Enter Verification Code",
                style: AppTypography.bold18(color: AppColors.primary)),
            Text(
                '* We will send you a message to set or reset your new password',
                textAlign: TextAlign.center,
                style: AppTypography.regular14(color: AppColors.darkGrey)),
            Space(height: AppSizes.height! * 0.052),
            GetBuilder<AuthController>(
              init: AuthController(),
              builder: (controller) {
                return AuthField(
                  controller: controller.emailController,
                  decoration: TextFormDecoration.outlineDecoration(
                      hint: "Enter OTP here", icon: AppIcons.mobile),
                );
              },
            ),
            Space(height: AppSizes.height! * 0.04),
            PrimaryButton(
              onTap: () {
                Get.to(() => const SignInScreen(),
                    transition: Transition.rightToLeft,
                    duration: const Duration(milliseconds: 300));
              },
              text: "Confirm",
              textStyle: AppTypography.regular18(color: AppColors.background),
            ),
          ],
        ),
      ),
    );
  }
}
