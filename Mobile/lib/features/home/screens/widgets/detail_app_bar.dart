import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:like_button/like_button.dart';

class DetailAppBar extends StatelessWidget implements PreferredSizeWidget {
  const DetailAppBar({
    super.key,
    this.title,
  });
  final String? title;
  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      title: Text(
        title ?? '',
        style: AppTypography.medium20(color: AppColors.black),
      ),
      actionsIconTheme: const IconThemeData(color: AppColors.black),
      iconTheme: const IconThemeData(color: AppColors.black),
      actions: [
        IconButton(
          onPressed: () {},
          icon: const Icon(AppIcons.search),
        ),
        IconButton(
          onPressed: () {},
          icon: LikeButton(
            size: 29,
            likeBuilder: (bool isLiked) {
              return Icon(
                isLiked ? AppIcons.heart_solid : AppIcons.heart,
                color: isLiked ? AppColors.hotPink : AppColors.black,
              );
            },
          ),
        ),
        IconButton(
          onPressed: () {},
          icon: const Icon(AppIcons.shopping_bag),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => AppBar().preferredSize;
}
