import 'package:ecom/core/utils/app_images.dart';

class Categories {
  final String image;
  final String title;

  Categories(this.image, this.title);
}

List<Categories> categoriesList = [
  Categories(AppImages.categories, "Categories"),
  Categories(AppImages.men, "Men"),
  Categories(AppImages.women, "Women"),
  Categories(AppImages.kids, "Kids"),
  Categories(AppImages.westrenWomen, "Western Women"),
  Categories(AppImages.men, "Western Men"),
];
