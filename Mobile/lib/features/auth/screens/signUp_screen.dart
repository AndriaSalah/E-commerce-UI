import 'package:ecom/core/common/buttons/primary_button.dart';
import 'package:ecom/core/utils/app_decoration.dart';
import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

import 'widgets/widets.dart';

class SignUpScreen extends StatelessWidget {
  const SignUpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Space(height: AppSizes.height! * 0.09),
            Image.asset(AppImages.icon),
            Space(height: AppSizes.height! * 0.026),
            Text("Welcome back to E-Com!",
                style: AppTypography.bold18(color: AppColors.primary)),
            Text('Let’s make your account.',
                style: AppTypography.regular18(color: AppColors.darkGrey)),
            Space(height: AppSizes.height! * 0.052),
            AuthField(
              controller: TextEditingController(),
              decoration: TextFormDecoration.outlineDecoration(
                  hint: "Name", icon: AppIcons.user),
            ),
            const Space(height: 10),
            AuthField(
              controller: TextEditingController(),
              decoration: TextFormDecoration.outlineDecoration(
                  hint: "Email", icon: AppIcons.user),
            ),
            const Space(height: 10),
            AuthField(
              controller: TextEditingController(),
              decoration: TextFormDecoration.outlineDecoration(
                  hint: "password", icon: AppIcons.lock),
            ),
            const Space(height: 10),
            AuthField(
              controller: TextEditingController(),
              decoration: TextFormDecoration.outlineDecoration(
                  hint: "Confirm Password", icon: AppIcons.lock),
            ),
            Space(height: AppSizes.height! * 0.026),
            PrimaryButton(
              onTap: () {},
              text: "Login",
              textStyle: AppTypography.regular18(color: AppColors.background),
            ),
            Space(height: AppSizes.height! * 0.044),
            const ORDivider(),
            Space(height: AppSizes.height! * 0.044),
            const SocialButtons(),
            Space(height: AppSizes.height! * 0.06),
            HaveAccountOrNot(
              content: 'Already have an account? ',
              link: 'Log In',
              onTap: () {},
            )
          ],
        ),
      ),
    );
  }
}
