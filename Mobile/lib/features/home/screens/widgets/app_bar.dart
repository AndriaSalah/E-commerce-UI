import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class HomeAppBar extends StatelessWidget implements PreferredSizeWidget {
  const HomeAppBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      elevation: 0,
      backgroundColor: Colors.transparent,
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: Row(
          children: [
            const CircleAvatar(
                radius: 25, backgroundImage: AssetImage(AppImages.avatar)),
            const Space(width: 10),
            Text(
              "Anna Doe",
              style: AppTypography.medium20(color: AppColors.black),
            ),
          ],
        ),
      ),
      actions: [
        IconButton(
            onPressed: () {},
            icon: const Icon(
              AppIcons.search,
              color: AppColors.black,
            )),
        const Space(width: 10),
      ],
    );
  }

  @override
  // TODO: implement preferredSize
  Size get preferredSize => AppBar().preferredSize;
}
