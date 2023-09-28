import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

import 'custom_social_button.dart';

class SocialButtons extends StatelessWidget {
  const SocialButtons({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: AppSizes.width! / 2,
      alignment: Alignment.center,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          CustomSocialButton(icon: AppImages.apple),
          CustomSocialButton(icon: AppImages.google),
          CustomSocialButton(icon: AppImages.facebook),
        ],
      ),
    );
  }
}
