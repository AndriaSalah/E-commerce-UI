import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:get/get_state_manager/src/simple/get_state.dart';

import '../../controller/controller.dart';

class RememberMeCheckBox extends StatelessWidget {
  const RememberMeCheckBox({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GetBuilder<AuthController>(
          builder: (controller) {
            return Checkbox(
                activeColor: AppColors.primary,
                value: controller.isChecked,
                onChanged: (bool? value) {
                  controller.isChecked = value!;
                });
          },
        ),
        Text(
          "Remember Me",
          style: AppTypography.regular14(color: AppColors.darkGrey),
        )
      ],
    );
  }
}
