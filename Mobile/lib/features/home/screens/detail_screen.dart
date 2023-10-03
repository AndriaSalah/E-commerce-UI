import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/data/product_model.dart';
import 'package:ecom/features/home/screens/widgets/widgets.dart';
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  const DetailScreen({super.key, required this.product});
  final ProductModel product;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const DetailAppBar(),
      floatingActionButton:
          const ShoppingButtons(padding: EdgeInsets.symmetric(horizontal: 20)),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      body: ListView(
        scrollDirection: Axis.vertical,
        children: [
          ViewProductImages(product: product),
          ViewProductDetails(product: product),
          ViewProductInformation(product: product),
          const Space(height: 10),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Text(
              'Similar Products',
              style: AppTypography.medium18(),
            ),
          ),
          SimilarProductList(product: product),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Text(
              'Customers also like',
              style: AppTypography.medium18(),
            ),
          ),
          SizedBox(
            height: AppSizes.height! * 0.35,
            child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.only(left: 20),
                itemBuilder: (context, index) {
                  var list = similarProductsList.reversed;
                  return Container(
                    width: AppSizes.width! * 0.45,
                    clipBehavior: Clip.antiAlias,
                    decoration: ShapeDecoration(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: Container(
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10),
                                  image: DecorationImage(
                                      image: AssetImage(list.elementAt(index)),
                                      fit: BoxFit.cover))),
                        ),
                        const Space(height: 10),
                        Text(
                          product.productName,
                          style: AppTypography.regular14(),
                        ),
                        Text(
                          product.brandName,
                          style: AppTypography.regular12(),
                        ),
                        Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text(
                              "Rs. 999",
                              style: AppTypography.regular12(
                                color: AppColors.darkGrey,
                              ).copyWith(
                                decoration: TextDecoration.lineThrough,
                              ),
                            ),
                            const Space(width: 8),
                            Text(
                              product.price,
                              style: AppTypography.regular14(),
                            ),
                            const Space(width: 8),
                            Text(
                              "(${product.offer} Off)",
                              style:
                                  AppTypography.regular12(color: Colors.green),
                            ),
                          ],
                        ),
                      ],
                    ),
                  );
                },
                separatorBuilder: (context, index) => const Space(
                      width: 6,
                    ),
                itemCount: similarProductsList.length),
          ),
          const Space(height: 90),
        ],
      ),
    );
  }
}

class SimilarProductList extends StatelessWidget {
  const SimilarProductList({
    super.key,
    required this.product,
  });

  final ProductModel product;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: AppSizes.height! * 0.35,
      child: ListView.separated(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.only(left: 20),
          itemBuilder: (context, index) => Container(
                width: AppSizes.width! * 0.45,
                clipBehavior: Clip.antiAlias,
                decoration: ShapeDecoration(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Container(
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              image: DecorationImage(
                                  image: AssetImage(similarProductsList[index]),
                                  fit: BoxFit.cover))),
                    ),
                    const Space(height: 10),
                    Text(
                      product.productName,
                      style: AppTypography.regular14(),
                    ),
                    Text(
                      product.brandName,
                      style: AppTypography.regular12(),
                    ),
                    Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          "Rs. 999",
                          style: AppTypography.regular12(
                            color: AppColors.darkGrey,
                          ).copyWith(
                            decoration: TextDecoration.lineThrough,
                          ),
                        ),
                        const Space(width: 8),
                        Text(
                          product.price,
                          style: AppTypography.regular14(),
                        ),
                        const Space(width: 8),
                        Text(
                          "(${product.offer} Off)",
                          style: AppTypography.regular12(color: Colors.green),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
          separatorBuilder: (context, index) => const Space(
                width: 6,
              ),
          itemCount: similarProductsList.length),
    );
  }
}
