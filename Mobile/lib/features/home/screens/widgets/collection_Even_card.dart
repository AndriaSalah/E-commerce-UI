import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/data/product_model.dart';
import 'package:ecom/features/home/screens/widgets/shopping_buttons.dart';
import 'package:flutter/material.dart';

class CollectionEvenCard extends StatefulWidget {
  const CollectionEvenCard({
    super.key,
    required this.product,
  });
  final ProductModel product;

  @override
  State<CollectionEvenCard> createState() => _CollectionEvenCardState();
}

class _CollectionEvenCardState extends State<CollectionEvenCard> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: AppSizes.width!,
      height: AppSizes.height! * 0.41,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: GestureDetector(
              onTap: () => Navigator.pushNamed(context, Screens.detailScreen,
                  arguments: widget.product),
              child: Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: Container(
                      clipBehavior: Clip.antiAlias,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          image: DecorationImage(
                              image: AssetImage(widget.product.images[0]),
                              fit: BoxFit.cover)),
                    ),
                  ),
                  const Space(width: 10),
                  Expanded(
                    child: Column(
                      children: [
                        Expanded(
                          child: Container(
                            clipBehavior: Clip.antiAlias,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                image: DecorationImage(
                                    image: AssetImage(widget.product.images[1]),
                                    fit: BoxFit.cover)),
                          ),
                        ),
                        const Space(height: 10),
                        Expanded(
                          child: Container(
                            clipBehavior: Clip.antiAlias,
                            width: double.infinity,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                image: DecorationImage(
                                    image: AssetImage(
                                      widget.product.images[2],
                                    ),
                                    fit: BoxFit.cover)),
                            child: Container(
                              alignment: Alignment.center,
                              color: Colors.black.withOpacity(0.5),
                              child: Text(
                                widget.product.images.length.toString(),
                                style: AppTypography.bold36(
                                    color: AppColors.background),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Space(height: 10),
                Text(
                  widget.product.productName,
                  style: AppTypography.medium20(),
                ),
                Text(
                  widget.product.brandName,
                  style: AppTypography.regular18(),
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      "Rs. 999",
                      style: AppTypography.regular14(
                        color: AppColors.darkGrey,
                      ).copyWith(
                        decoration: TextDecoration.lineThrough,
                      ),
                    ),
                    const Space(width: 17),
                    Text(
                      widget.product.price,
                      style: AppTypography.medium20(),
                    ),
                    const Space(width: 10),
                    Text(
                      "(${widget.product.offer} Off)",
                      style: AppTypography.medium20(color: Colors.green),
                    ),
                  ],
                ),
                const Space(height: 15),
                const Expanded(child: ShoppingButtons()),
              ],
            ),
          )
        ],
      ),
    );
  }
}
