import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';

import '../../data/trending_model.dart';

class TrendingList extends StatelessWidget {
  const TrendingList({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return AnimationLimiter(
      child: ListView.separated(
        itemCount: trendingList.length,
        padding: const EdgeInsets.only(left: 20),
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) => AnimationConfiguration.staggeredList(
          position: index,
          duration: const Duration(milliseconds: 500),
          child: SlideAnimation(
            verticalOffset: 50.0,
            child: FadeInAnimation(
              child: TrendingCard(index: index),
            ),
          ),
        ),
        separatorBuilder: (context, index) => const Space(width: 12),
      ),
    );
  }
}

class TrendingCard extends StatelessWidget {
  const TrendingCard({
    super.key,
    required this.index,
  });
  final int index;
  @override
  Widget build(BuildContext context) {
    return Container(
      clipBehavior: Clip.antiAlias,
      width: AppSizes.width! / 2,
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
              child: Image.asset(
            trendingList[index].image,
            fit: BoxFit.cover,
            width: double.infinity,
          )),
          const Space(height: 7),
          Image.asset(trendingList[index].brand, fit: BoxFit.cover),
          const Space(height: 7),
          Text(
            trendingList[index].title,
            style: AppTypography.medium20(),
          )
        ],
      ),
    );
  }
}
