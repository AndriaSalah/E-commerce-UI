import '../../../core/utils/app_images.dart';

class Deals {
  final String image;
  final String title;
  final String state;
  Deals(this.image, this.title, this.state);
}

List<Deals> dealsList = [
  Deals(AppImages.deal1, "Under Rs. 799", "Tops"),
  Deals(AppImages.deal2, "Under Rs. 799", "Tops"),
  Deals(AppImages.deal3, "Under Rs. 799", "Tops"),
  Deals(AppImages.deal4, "Under Rs. 799", "Tops"),
];
