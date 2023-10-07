import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';

import '../../../../core/utils/utils.dart';
import '../../data/deals_model.dart';

class DealsList extends StatelessWidget {
  const DealsList({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return AnimationLimiter(
      child: GridView.count(
        crossAxisCount: 2,
        crossAxisSpacing: 18,
        mainAxisSpacing: 16,
        childAspectRatio: 0.6,
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        scrollDirection: Axis.vertical,
        children: List.generate(
          4,
          (int index) {
            return AnimationConfiguration.staggeredGrid(
              position: index,
              duration: const Duration(milliseconds: 375),
              columnCount: 2,
              child: ScaleAnimation(
                duration: const Duration(milliseconds: 500),
                child: FadeInAnimation(
                  child: Container(
                    clipBehavior: Clip.antiAlias,
                    decoration:
                        BoxDecoration(borderRadius: BorderRadius.circular(10)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Expanded(
                          child: Image.asset(dealsList[index].image,
                              width: double.infinity, fit: BoxFit.cover),
                        ),
                        const Space(height: 7),
                        Text(
                          dealsList[index].state,
                          style: AppTypography.regular14(),
                        ),
                        const Space(height: 7),
                        Text(
                          dealsList[index].title,
                          style: AppTypography.medium20(),
                        )
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
