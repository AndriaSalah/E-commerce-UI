import 'package:carousel_slider/carousel_slider.dart';
import 'package:ecom/core/common/buttons/primary_button.dart';
import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class EventsList extends StatefulWidget {
  const EventsList({
    super.key,
  });

  @override
  State<EventsList> createState() => _EventsListState();
}

class _EventsListState extends State<EventsList> {
  CarouselController controller = CarouselController();

  PageController pageController = PageController();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: AppSizes.height! * 0.4,
      child: Stack(
        children: [
          CarouselSlider(
            carouselController: controller,
            options: CarouselOptions(
                height: AppSizes.height! * 0.45,
                autoPlay: true,
                enableInfiniteScroll: true,
                viewportFraction: 1),
            items: [1, 2, 3, 4, 5].map((i) {
              return Container(
                width: double.infinity,
                decoration: const BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage(AppImages.festival),
                        fit: BoxFit.cover)),
                child: Container(
                  color: Colors.black.withOpacity(0.4),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Text(
                        'FOREVER 21',
                        style:
                            AppTypography.bold36(color: AppColors.background),
                      ),
                      Text(
                        'Big Fashion Festival',
                        style:
                            AppTypography.bold28(color: AppColors.background),
                      ),
                      Text(
                        '70% - 80% Off',
                        style:
                            AppTypography.bold20(color: AppColors.background),
                      ),
                      PrimaryButton(
                        onTap: () {},
                        width: 120,
                        height: 40,
                        color: Colors.transparent,
                        isBorder: true,
                        borderColor: AppColors.background,
                        borderWidth: 2,
                        text: "Explore",
                        textStyle: AppTypography.regular18(
                            color: AppColors.background),
                      ),
                      const Space(),
                    ],
                  ),
                ),
              );
            }).toList(),
          ),
          Align(
            alignment: const Alignment(0, 0.9),
            child: SmoothPageIndicator(
              controller: pageController,
              count: 5,
              effect: const WormEffect(dotWidth: 17, dotHeight: 3),
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    pageController.dispose();
    super.dispose();
  }
}
