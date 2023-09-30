import 'package:ecom/core/common/buttons/primary_button.dart';
import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/data/collection_model.dart';
import 'package:flutter/material.dart';
import 'package:like_button/like_button.dart';

class CollectionEvenCard extends StatefulWidget {
  const CollectionEvenCard({
    super.key,
    required this.collection,
  });
  final CollectionModel collection;

  @override
  State<CollectionEvenCard> createState() => _CollectionEvenCardState();
}

class _CollectionEvenCardState extends State<CollectionEvenCard> {
  bool isClicked = false;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: AppSizes.width!,
      height: AppSizes.height! * 0.41,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Row(
              children: [
                Expanded(
                  flex: 2,
                  child: Container(
                    clipBehavior: Clip.antiAlias,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        image: DecorationImage(
                            image:
                                AssetImage(widget.collection.images.mainImage),
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
                                  image: AssetImage(
                                      widget.collection.images.secondImage),
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
                                    widget.collection.images.thirdImage,
                                  ),
                                  fit: BoxFit.cover)),
                          child: Container(
                            alignment: Alignment.center,
                            color: Colors.black.withOpacity(0.5),
                            child: Text(
                              widget.collection.images.imagesNumber,
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
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Space(height: 10),
                Text(
                  widget.collection.productName,
                  style: AppTypography.medium20(),
                ),
                Text(
                  widget.collection.brandName,
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
                      widget.collection.price,
                      style: AppTypography.medium20(),
                    ),
                    const Space(width: 10),
                    Text(
                      "(${widget.collection.offer} Off)",
                      style: AppTypography.medium20(color: Colors.green),
                    ),
                  ],
                ),
                const Space(height: 15),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    PrimaryButton(
                      onTap: () {
                        setState(() {
                          isClicked = !isClicked;
                        });
                      },
                      width: 180,
                      height: 40,
                      isBorder: true,
                      color: Colors.transparent,
                      borderColor: AppColors.primary,
                      widget: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            "Wishlist",
                            style: AppTypography.regular14(),
                          ),
                          const Space(width: 20),
                          LikeButton(
                            isLiked: isClicked,
                            likeBuilder: (bool isLiked) {
                              return Icon(
                                isLiked ? AppIcons.heart_solid : AppIcons.heart,
                                color: isLiked
                                    ? AppColors.primary
                                    : AppColors.black,
                                size: 20,
                              );
                            },
                          ),
                        ],
                      ),
                    ),
                    PrimaryButton(
                      onTap: () {},
                      width: 180,
                      height: 40,
                      widget: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            "Add to Bag",
                            style: AppTypography.regular14(
                                color: AppColors.background),
                          ),
                          const Space(width: 22),
                          const Icon(
                            AppIcons.shopping_bag,
                            color: AppColors.background,
                            size: 18,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
