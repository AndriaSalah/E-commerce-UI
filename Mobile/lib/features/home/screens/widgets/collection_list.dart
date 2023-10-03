import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/data/product_model.dart';
import 'package:ecom/features/home/screens/widgets/collection_Even_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';

class CollectionList extends StatelessWidget {
  const CollectionList({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return AnimationLimiter(
      child: ListView.separated(
        itemCount: collectionList.length,
        scrollDirection: Axis.vertical,
        padding: const EdgeInsets.symmetric(horizontal: 20),
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemBuilder: (context, index) => AnimationConfiguration.staggeredList(
          position: index,
          duration: const Duration(milliseconds: 500),
          child: ScaleAnimation(
            curve: Curves.easeInOut,
            duration: const Duration(milliseconds: 500),
            child: FadeInAnimation(
              curve: Curves.easeIn,
              child: CollectionEvenCard(product: collectionList[index]),
            ),
          ),
        ),
        separatorBuilder: (context, index) => const Space(height: 30),
      ),
    );
  }
}
