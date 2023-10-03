import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

import 'widgets/widgets.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        const HomeAppBar(),
        Space(height: AppSizes.height! * 0.02),
        SizedBox(
          height: AppSizes.height! * 0.12,
          child: const CategoriesList(),
        ),
        Space(height: AppSizes.height! * 0.03),
        const EventsList(),
        const Section(title: "Trending Offers"),
        SizedBox(
          height: AppSizes.height! * 0.362,
          child: const TrendingList(),
        ),
        const Section(title: "Deals Of The Day"),
        const DealsList(),
        const Section(title: "Our Collection"),
        const CollectionList()
      ],
    );
  }
}
