import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';

import '../../../../core/utils/utils.dart';
import '../../data/categories_model.dart';

class CategoriesList extends StatelessWidget {
  const CategoriesList({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return AnimationLimiter(
      child: ListView.separated(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.only(left: 30),
          itemBuilder: (context, index) => AnimationConfiguration.staggeredList(
                position: index,
                duration: const Duration(milliseconds: 500),
                child: SlideAnimation(
                  horizontalOffset: 50,
                  curve: Curves.easeIn,
                  child: FadeInAnimation(
                    child: SizedBox(
                      width: 65,
                      child: Column(
                        children: [
                          index == 0
                              ? CircleAvatar(
                                  radius: 30,
                                  backgroundColor: AppColors.secondary,
                                  child:
                                      Image.asset(categoriesList[index].image),
                                )
                              : CircleAvatar(
                                  radius: 30,
                                  backgroundImage:
                                      AssetImage(categoriesList[index].image)),
                          const Space(height: 10),
                          Expanded(
                            child: Text(
                              categoriesList[index].title,
                              style: AppTypography.regular14(),
                              overflow: TextOverflow.ellipsis,
                            ),
                          )
                        ],
                      ),
                    ),
                  ),
                ),
              ),
          separatorBuilder: (context, index) => const Space(width: 20),
          itemCount: categoriesList.length),
    );
  }
}
