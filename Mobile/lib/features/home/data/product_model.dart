import 'package:ecom/core/utils/app_images.dart';

class ProductModel {
  final String productName;
  final String brandName;
  final String price;
  final String offer;
  final List<String> images;

  ProductModel(
      this.images, this.productName, this.brandName, this.price, this.offer);
}

List<ProductModel> collectionList = [
  ProductModel([
    AppImages.collection1,
    AppImages.collection1_1,
    AppImages.collection1_2,
    AppImages.collection1_1,
    AppImages.collection1_2,
    AppImages.collection1,
  ], "Womens White Shirt", "W-Shirt", "Rs. 799", "20% "),
  ProductModel([
    AppImages.collection2,
    AppImages.collection2_1,
    AppImages.collection2_2,
    AppImages.collection2,
    AppImages.collection1_2,
  ], "Good Dark Shirt", "Good Skeleton", "Rs. 259", "50% "),
  ProductModel([
    AppImages.collection3,
    AppImages.collection3_1,
    AppImages.collection3_2,
  ], "BRO Shirt", "N-I-G", "Rs. 400", "37% "),
  ProductModel([
    AppImages.collection1,
    AppImages.collection1_1,
    AppImages.collection1_2,
    AppImages.collection3_2,
    AppImages.collection2_2,
  ], "Womens White Shirt", "W-Shirt", "Rs. 799", "20% "),
];

List<String> similarProductsList = [
  AppImages.collection1,
  AppImages.collection2,
  AppImages.collection1_2,
  AppImages.collection2_1,
  AppImages.collection1_1,
  AppImages.collection3,
];
