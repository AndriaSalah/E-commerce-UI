import 'package:ecom/core/common/buttons/primary_button.dart';
import 'package:ecom/core/utils/app_decoration.dart';
import 'package:ecom/core/utils/app_routes.dart';
import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/auth/screens/widgets/auth_field.dart';
import 'package:flutter/material.dart';

class ForgotPasswordScreen extends StatelessWidget {
  const ForgotPasswordScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Space(height: AppSizes.height! * 0.2),
            Image.asset(AppImages.icon),
            Space(height: AppSizes.height! * 0.026),
            Text("Forgot Password",
                style: AppTypography.bold18(color: AppColors.primary)),
            Text(
                '* We will send you a message to set or reset your new password',
                textAlign: TextAlign.center,
                style: AppTypography.regular14(color: AppColors.darkGrey)),
            Space(height: AppSizes.height! * 0.052),
            AuthField(
              controller: TextEditingController(),
              decoration: TextFormDecoration.outlineDecoration(
                  hint: "Email", icon: AppIcons.user),
            ),
            Space(height: AppSizes.height! * 0.04),
            PrimaryButton(
              onTap: () {
                Navigator.pushReplacementNamed(context, Screens.otpScreen);
              },
              text: "Send Verification",
              textStyle: AppTypography.regular18(color: AppColors.background),
            ),
          ],
        ),
      ),
    );
  }
}
