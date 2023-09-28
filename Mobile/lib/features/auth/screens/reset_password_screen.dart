import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/auth/screens/widgets/auth_field.dart';
import 'package:flutter/material.dart';
import 'package:get/get_state_manager/src/simple/get_state.dart';

import '../../../core/common/buttons/primary_button.dart';
import '../../../core/utils/app_decoration.dart';
import '../controller/controller.dart';

class ResetPasswordScreen extends StatelessWidget {
  const ResetPasswordScreen({super.key});

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
            Text("New Password",
                style: AppTypography.bold18(color: AppColors.primary)),
            Text('Set new password for your account.',
                textAlign: TextAlign.center,
                style: AppTypography.regular14(color: AppColors.darkGrey)),
            Space(height: AppSizes.height! * 0.052),
            GetBuilder<AuthController>(
              init: AuthController(),
              builder: (controller) {
                return AuthField(
                  controller: controller.emailController,
                  decoration: TextFormDecoration.outlineDecoration(
                      hint: "Password", icon: AppIcons.lock),
                );
              },
            ),
            const Space(height: 10),
            GetBuilder<AuthController>(
              init: AuthController(),
              builder: (controller) {
                return AuthField(
                  controller: controller.emailController,
                  decoration: TextFormDecoration.outlineDecoration(
                      hint: "Confirm Password", icon: AppIcons.lock),
                );
              },
            ),
            Space(height: AppSizes.height! * 0.04),
            PrimaryButton(
              onTap: () {},
              text: "Confirm",
              textStyle: AppTypography.regular18(color: AppColors.background),
            ),
          ],
        ),
      ),
    );
  }
}
