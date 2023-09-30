import '../../../core/utils/app_images.dart';

class Trending {
  final String image;
  final String brand;
  final String title;

  Trending(
    this.image,
    this.brand,
    this.title,
  );
}

List<Trending> trendingList = [
  Trending(AppImages.trending, AppImages.hm, "Min 30% Off"),
  Trending(AppImages.trending, AppImages.hm, "Min 17% Off"),
  Trending(AppImages.trending, AppImages.hm, "Min 9% Off"),
  Trending(AppImages.trending, AppImages.hm, "Min 28% Off"),
  Trending(AppImages.trending, AppImages.hm, "Min 42% Off"),
  Trending(AppImages.trending, AppImages.hm, "Min 20% Off"),
];
