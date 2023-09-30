import 'package:ecom/core/utils/app_images.dart';

class CollectionModel {
  final CollectionImages images;
  final String productName;
  final String brandName;
  final String price;
  final String offer;

  CollectionModel(
      this.images, this.productName, this.brandName, this.price, this.offer);
}

class CollectionImages {
  final String mainImage;
  final String secondImage;
  final String thirdImage;
  final String imagesNumber;

  CollectionImages(
      this.mainImage, this.secondImage, this.thirdImage, this.imagesNumber);
}

List<CollectionModel> collectionList = [
  CollectionModel(
      CollectionImages(AppImages.collection1, AppImages.collection1_1,
          AppImages.collection1_2, "+2"),
      "Womens White Shirt",
      "W-Shirt",
      "Rs. 799",
      "20% "),
  CollectionModel(
      CollectionImages(AppImages.collection2, AppImages.collection2_1,
          AppImages.collection2_2, "+4"),
      "Good Dark Shirt",
      "Good Skeleton",
      "Rs. 259",
      "50% "),
  CollectionModel(
      CollectionImages(AppImages.collection3, AppImages.collection3_1,
          AppImages.collection3_2, "+1"),
      "BRO Shirt",
      "N-I-G",
      "Rs. 400",
      "37% "),
  CollectionModel(
      CollectionImages(AppImages.collection1, AppImages.collection1_1,
          AppImages.collection1_2, "+3"),
      "Womens White Shirt",
      "W-Shirt",
      "Rs. 799",
      "20% "),
];
