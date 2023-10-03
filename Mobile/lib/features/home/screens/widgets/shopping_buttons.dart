import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:like_button/like_button.dart';

import '../../../../core/common/buttons/primary_button.dart';

class ShoppingButtons extends StatefulWidget {
  const ShoppingButtons({
    super.key,
    this.padding,
  });
  final EdgeInsets? padding;
  @override
  State<ShoppingButtons> createState() => _ShoppingButtonsState();
}

class _ShoppingButtonsState extends State<ShoppingButtons> {
  bool isClicked = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: AppColors.background,
      width: AppSizes.width,
      padding: widget.padding,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          PrimaryButton(
            onTap: () {
              setState(() {
                isClicked = !isClicked;
              });
            },
            width: AppSizes.width! * 0.42,
            height: AppSizes.height! * 0.05,
            isBorder: true,
            color: Colors.transparent,
            borderColor: AppColors.primary,
            widget: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Wishlist",
                  style: AppTypography.regular14(),
                ),
                const Space(width: 20),
                LikeButton(
                  isLiked: isClicked,
                  likeBuilder: (bool isLiked) {
                    return Icon(
                      isLiked ? AppIcons.heart_solid : AppIcons.heart,
                      color: isLiked ? AppColors.primary : AppColors.black,
                      size: 20,
                    );
                  },
                ),
              ],
            ),
          ),
          PrimaryButton(
            onTap: () {},
            width: AppSizes.width! * 0.42,
            height: AppSizes.height! * 0.05,
            widget: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Add to Bag",
                  style: AppTypography.regular14(color: AppColors.background),
                ),
                const Space(width: 22),
                const Icon(
                  AppIcons.shopping_bag,
                  color: AppColors.background,
                  size: 18,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
